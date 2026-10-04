"use client";

import { FormEvent, useState } from "react";
import { getMetrosForPicker } from "@/lib/metros";
import { siteConfig } from "@/lib/site";

const cityOptions = getMetrosForPicker();

type FormStatus = { type: "success" | "error"; message: string } | null;

export function WaitlistForm() {
  const [status, setStatus] = useState<FormStatus>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const cityInput = form.elements.namedItem("city") as HTMLSelectElement;
    const email = emailInput.value.trim();
    const citySlug = cityInput?.value ?? "";
    const cityLabel =
      cityOptions.find((m) => m.slug === citySlug)?.cityLabel ?? "";

    if (!email || !emailInput.checkValidity()) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      emailInput.focus();
      return;
    }

    try {
      const signups = JSON.parse(
        localStorage.getItem("gg_waitlist") || "[]",
      ) as string[];
      if (!signups.includes(email)) {
        signups.push(email);
        localStorage.setItem("gg_waitlist", JSON.stringify(signups));
      }
    } catch {
      /* ignore localStorage errors */
    }

    setStatus({
      type: "success",
      message:
        "You're on the list! We'll email you when we launch in your area.",
    });
    form.reset();

    // TODO: wire to Supabase / Resend
    const subject = encodeURIComponent("Growers Ground waitlist");
    const body = encodeURIComponent(
      cityLabel
        ? `Add me to the waitlist: ${email}\nCity: ${cityLabel}`
        : `Add me to the waitlist: ${email}`,
    );
    window.setTimeout(() => {
      window.location.href = `mailto:${siteConfig.supportEmail}?subject=${subject}&body=${body}`;
    }, 1200);
  }

  return (
    <form className="waitlist-form" noValidate onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="email">
        Email
      </label>
      <label className="waitlist-field-label" htmlFor="city">
        Your city (optional)
      </label>
      <select id="city" name="city" className="waitlist-city-select" defaultValue="">
        <option value="">Select a metro…</option>
        {cityOptions.map((m) => (
          <option key={m.slug} value={m.slug}>
            {m.cityLabel}
            {m.gardenCount > 0 ? ` (${m.gardenCount} gardens)` : ""}
          </option>
        ))}
      </select>
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
      <button type="submit" className="btn btn-accent btn-block btn-rect">
        Join waitlist
      </button>
      {status && (
        <p
          id="form-status"
          className={`form-status ${status.type}`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
