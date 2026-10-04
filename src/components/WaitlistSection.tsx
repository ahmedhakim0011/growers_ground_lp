import Link from "next/link";
import { WaitlistForm } from "./WaitlistForm";

export function WaitlistSection() {
  return (
    <section className="waitlist-cal" id="waitlist" aria-labelledby="waitlist-heading">
      <div className="container waitlist-cal-inner" data-reveal data-motion-y="40">
        <h2 id="waitlist-heading">Get notified when we open in your city</h2>
        <p className="waitlist-cal-lead">
          Join the waitlist for early access across the US &amp; Canada. Free to
          join — no spam.
        </p>
        <WaitlistForm />
        <p className="waitlist-cal-legal">
          By signing up, you agree to our{" "}
          <Link href="/terms">Terms of Service</Link> and{" "}
          <Link href="/privacy">Privacy Policy</Link>. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
