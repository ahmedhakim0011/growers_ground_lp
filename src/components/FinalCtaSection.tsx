import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { StoreBadges } from "./StoreBadges";

export function FinalCtaSection() {
  return (
    <section className="final-cta final-cta-cal" aria-labelledby="final-cta-heading">
      <div className="container final-cta-inner" data-reveal data-motion-y="36">
        <h2 id="final-cta-heading">Download Growers Ground</h2>
        <p>
          Join gardeners and hosts building local food, shared ground, and real
          community — one plot at a time.
        </p>
        <StoreBadges prominence="hero" />
        <p className="final-cta-note">
          <Link href="/privacy">Privacy Policy</Link> ·{" "}
          <Link href="/terms">Terms of Service</Link> ·{" "}
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
      </div>
    </section>
  );
}
