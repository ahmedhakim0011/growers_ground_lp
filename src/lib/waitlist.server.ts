import "server-only";

export type WaitlistProgress = {
  region_code: string;
  region_name: string;
  goal: number;
  count: number;
  launched: boolean;
};

export type JoinResult = {
  referral_code: string;
  progress: WaitlistProgress | null;
};

export class WaitlistError extends Error {
  constructor(
    message: string,
    readonly code: "invalid_email" | "consent_required" | "unavailable",
  ) {
    super(message);
  }
}

function config() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new WaitlistError("Waitlist is not configured.", "unavailable");
  return { url: url.replace(/\/+$/, ""), key };
}

/** Calls a public Supabase RPC with the publishable key. The functions are SECURITY DEFINER. */
async function rpc<T>(fn: string, args: Record<string, unknown>): Promise<T> {
  const { url, key } = config();
  const res = await fetch(`${url}/rest/v1/rpc/${fn}`, {
    method: "POST",
    headers: { apikey: key, "Content-Type": "application/json" },
    body: JSON.stringify(args),
    cache: "no-store",
  });
  const body = await res.json().catch(() => null);
  if (!res.ok) {
    const message = String((body as { message?: string } | null)?.message ?? "");
    if (message.includes("invalid_email")) throw new WaitlistError("Please enter a valid email address.", "invalid_email");
    if (message.includes("consent_required")) throw new WaitlistError("Please tick the box to join.", "consent_required");
    console.error(`waitlist rpc ${fn} failed`, res.status, message);
    throw new WaitlistError("We couldn't add you right now. Please try again.", "unavailable");
  }
  return body as T;
}

export function joinWaitlist(input: {
  email: string;
  consentText: string;
  regionCode?: string;
  cityOther?: string;
  role?: string;
  referralCode?: string;
  attribution?: Record<string, string>;
}) {
  return rpc<JoinResult>("join_waitlist", {
    p_email: input.email,
    p_consent_text: input.consentText,
    p_region_code: input.regionCode ?? null,
    p_city_other: input.cityOther ?? null,
    p_role: input.role ?? null,
    p_referral_code: input.referralCode ?? null,
    p_attribution: input.attribution ?? {},
  });
}

export function unsubscribeFromWaitlist(token: string) {
  return rpc<boolean>("waitlist_unsubscribe", { p_token: token });
}
