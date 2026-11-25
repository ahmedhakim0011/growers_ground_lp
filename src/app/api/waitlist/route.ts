import { NextResponse, type NextRequest } from "next/server";
import { WAITLIST_CONSENT_TEXT } from "@/lib/waitlist";
import { WaitlistError, joinWaitlist } from "@/lib/waitlist.server";

export const runtime = "nodejs";

// Best-effort per-instance limit; the database also dedupes by email.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 8;
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

const ATTRIBUTION_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "landing_path", "referrer_host"];

function str(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many attempts. Please try again in a few minutes." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real people never see or fill this field. Pretend success.
  if (str(body.company, 200)) {
    return NextResponse.json({ referralCode: null, progress: null });
  }

  if (body.consent !== true) {
    return NextResponse.json({ error: "Please tick the box so we can email you at launch." }, { status: 400 });
  }

  const rawAttribution = (body.attribution ?? {}) as Record<string, unknown>;
  const attribution: Record<string, string> = {};
  for (const key of ATTRIBUTION_KEYS) {
    const v = str(rawAttribution[key], 120);
    if (v) attribution[key] = v;
  }

  try {
    const result = await joinWaitlist({
      email: str(body.email, 254),
      consentText: WAITLIST_CONSENT_TEXT,
      regionCode: str(body.regionCode, 16) || undefined,
      cityOther: str(body.cityOther, 80) || undefined,
      role: str(body.role, 16) || undefined,
      referralCode: str(body.ref, 16) || undefined,
      attribution,
    });
    return NextResponse.json({ referralCode: result.referral_code, progress: result.progress });
  } catch (err) {
    if (err instanceof WaitlistError) {
      const status = err.code === "unavailable" ? 503 : 400;
      return NextResponse.json({ error: err.message }, { status });
    }
    console.error("waitlist join failed", err);
    return NextResponse.json({ error: "We couldn't add you right now. Please try again." }, { status: 500 });
  }
}
