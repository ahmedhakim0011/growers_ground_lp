"use client";

import { FormEvent, useState } from "react";
import { getMetrosForPicker } from "@/lib/metros";
import { siteConfig } from "@/lib/site";
import { WAITLIST_CONSENT_TEXT, WAITLIST_ROLES } from "@/lib/waitlist";

const cityOptions = getMetrosForPicker();
const OTHER = "__other";

type Progress = { region_name: string; goal: number; count: number; launched: boolean };
type Joined = { referralCode: string | null; progress: Progress | null };

/** utm_* and where they came from, captured once per visit. */
function attribution(): Record<string, string> {
  const out: Record<string, string> = {};
  try {
    const params = new URLSearchParams(window.location.search);
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
      const v = params.get(key);
      if (v) out[key] = v;
    }
    out.landing_path = window.location.pathname;
    if (document.referrer) {
      const host = new URL(document.referrer).host;
      if (host && host !== window.location.host) out.referrer_host = host;
    }
  } catch {
    /* ignore */
  }
  return out;
}

function referralFromUrl(): string | undefined {
  try {
    return new URLSearchParams(window.location.search).get("ref") ?? undefined;
  } catch {
    return undefined;
  }
}

function SuccessPanel({ joined }: { joined: Joined }) {
  const [copied, setCopied] = useState(false);
  const link = joined.referralCode ? `${siteConfig.url}/?ref=${joined.referralCode}#waitlist` : null;
  const p = joined.progress;
  const pct = p ? Math.min(100, Math.round((p.count / p.goal) * 100)) : 0;
  const toGo = p ? Math.max(0, p.goal - p.count) : 0;

  async function share() {
    if (!link) return;
    const text = p
      ? `Help unlock Growers Ground in ${p.region_name} — local gardeners and garden space, near you.`
      : "Join me on Growers Ground — local gardeners and garden space, near you.";
    if (navigator.share) {
      try {
        await navigator.share({ title: "Growers Ground", text, url: link });
        return;
      } catch {
        /* cancelled: fall back to copy */
      }
    }
    await navigator.clipboard?.writeText(link);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="waitlist-success" role="status" aria-live="polite">
      <p className="waitlist-success-title">You&apos;re on the list 🌱</p>
      {p ? (
        p.launched ? (
          <p className="waitlist-success-text">Good news: {p.region_name} is already open. Check your email for the app link.</p>
        ) : (
          <>
            <p className="waitlist-success-text">
              {p.region_name} opens at <strong>{p.goal}</strong> growers. <strong>{p.count}</strong> so far
              {toGo > 0 ? ` — ${toGo} to go.` : ". We're getting ready to open!"}
            </p>
            <div className="waitlist-progress" aria-label={`${p.count} of ${p.goal} growers`}>
              <span style={{ width: `${Math.max(pct, 3)}%` }} />
            </div>
          </>
        )
      ) : (
        <p className="waitlist-success-text">We&apos;ll email you as soon as we open near you.</p>
      )}
      {link ? (
        <>
          <p className="waitlist-success-text">Invite neighbours to open your city sooner:</p>
          <div className="waitlist-share">
            <input readOnly value={link} aria-label="Your invite link" onFocus={(e) => e.currentTarget.select()} />
            <button type="button" className="btn btn-accent btn-rect" onClick={share}>
              {copied ? "Copied" : "Share"}
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}

export function WaitlistForm() {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [joined, setJoined] = useState<Joined | null>(null);
  const [metro, setMetro] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;

    if (!emailInput.value.trim() || !emailInput.checkValidity()) {
      setError("Please enter a valid email address.");
      emailInput.focus();
      return;
    }
    if (!data.get("consent")) {
      setError("Please tick the box so we can email you at launch.");
      return;
    }

    setPending(true);
    setError(null);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailInput.value.trim(),
          regionCode: metro && metro !== OTHER ? metro : undefined,
          cityOther: metro === OTHER ? String(data.get("cityOther") ?? "") : undefined,
          role: String(data.get("role") ?? ""),
          consent: true,
          ref: referralFromUrl(),
          company: String(data.get("company") ?? ""),
          attribution: attribution(),
        }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(body.error ?? "We couldn't add you right now. Please try again.");
        return;
      }
      setJoined(body as Joined);
    } catch {
      setError("Network problem. Please check your connection and try again.");
    } finally {
      setPending(false);
    }
  }

  if (joined) return <SuccessPanel joined={joined} />;

  return (
    <form className="waitlist-form" noValidate onSubmit={handleSubmit}>
      <label className="waitlist-field-label" htmlFor="city">
        Your city
      </label>
      <select
        id="city"
        name="city"
        className="waitlist-city-select"
        value={metro}
        onChange={(e) => setMetro(e.target.value)}
      >
        <option value="">Select a metro…</option>
        {cityOptions.map((m) => (
          <option key={m.slug} value={m.regionCode}>
            {m.cityLabel}
            {m.gardenCount > 0 ? ` (${m.gardenCount} gardens)` : ""}
          </option>
        ))}
        <option value={OTHER}>My city isn&apos;t listed</option>
      </select>
      {metro === OTHER ? (
        <>
          <label className="waitlist-field-label" htmlFor="cityOther">
            Which city?
          </label>
          <input id="cityOther" name="cityOther" className="waitlist-text-input" maxLength={80} placeholder="e.g. Halifax, NS" />
        </>
      ) : null}

      <fieldset className="waitlist-roles">
        <legend className="waitlist-field-label">You&apos;re joining as</legend>
        {WAITLIST_ROLES.map((r) => (
          <label key={r.value} className="waitlist-role">
            <input type="radio" name="role" value={r.value} defaultChecked={r.value === "gardener"} />
            <span>{r.label}</span>
          </label>
        ))}
      </fieldset>

      <label className="waitlist-field-label" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="you@email.com"
        autoComplete="email"
        required
        aria-describedby="form-status"
      />

      {/* Spam trap: hidden from people, filled by bots. */}
      <div className="waitlist-hp" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="waitlist-consent">
        <input type="checkbox" name="consent" required />
        <span>{WAITLIST_CONSENT_TEXT}</span>
      </label>

      <button type="submit" className="btn btn-accent btn-block btn-rect" disabled={pending}>
        {pending ? "Joining…" : "Join waitlist"}
      </button>
      {error ? (
        <p id="form-status" className="form-status error" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
