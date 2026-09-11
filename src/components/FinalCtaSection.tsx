import { siteConfig } from "@/lib/site";

export function FinalCtaSection() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-heading">
      <div className="container final-cta-inner">
        <h2 id="final-cta-heading">Your Growing Community Starts Here.</h2>
        <p>
          Join gardeners and hosts building local food, shared ground, and real
          community — one plot at a time.
        </p>
        <div className="final-cta-actions">
          <a className="btn btn-primary btn-lg" href="#waitlist">
            Join Waitlist
          </a>
          <a
            className="btn btn-outline-light btn-lg"
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow @growers_ground_lp
          </a>
        </div>
        <div className="store-buttons store-buttons-center">
          <a className="store-btn store-btn-dark" href="#waitlist">
            <span className="store-label">Coming soon</span>
            <span className="store-name">App Store</span>
          </a>
          <a className="store-btn store-btn-dark" href="#waitlist">
            <span className="store-label">Coming soon</span>
            <span className="store-name">Google Play</span>
          </a>
        </div>
      </div>
    </section>
  );
}
