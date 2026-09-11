"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

type FormStatus = { type: "success" | "error"; message: string } | null;

export function WaitlistForm() {
  const [status, setStatus] = useState<FormStatus>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const email = emailInput.value.trim();

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
    const body = encodeURIComponent(`Add me to the waitlist: ${email}`);
    window.setTimeout(() => {
      window.location.href = `mailto:${siteConfig.supportEmail}?subject=${subject}&body=${body}`;
    }, 1200);
  }

  return (
    <form className="waitlist-form" noValidate onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="email">
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
      <button type="submit" className="btn btn-primary btn-block">
        Join Waitlist
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
