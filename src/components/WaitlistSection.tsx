import Image from "next/image";
import Link from "next/link";
import { WaitlistForm } from "./WaitlistForm";

export function WaitlistSection() {
  return (
    <section className="waitlist-cal" id="waitlist" aria-labelledby="waitlist-heading">
      <div className="container waitlist-cal-shell">
      <Image
        className="waitlist-cal-art waitlist-cal-art--left"
        src="/images/illustrations/intent_grow.svg"
        alt=""
        width={200}
        height={130}
        aria-hidden
      />
      <Image
        className="waitlist-cal-art waitlist-cal-art--right"
        src="/images/illustrations/intent_host.svg"
        alt=""
        width={200}
        height={130}
        aria-hidden
      />
      <div className="waitlist-cal-inner" data-reveal data-motion-y="40">
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
      </div>
    </section>
  );
}
