import { WaitlistForm } from "./WaitlistForm";

export function WaitlistSection() {
  return (
    <section className="pricing" id="waitlist" aria-labelledby="waitlist-heading">
      <div className="container">
        <p className="section-eyebrow">Early Access</p>
        <h2 id="waitlist-heading">Join the Waitlist</h2>
        <p className="section-lead">
          Rolling out city by city across the US &amp; Canada. Be first in your area.
        </p>

        <div className="pricing-grid">
          <article className="price-card featured">
            <span className="price-badge">Free to join</span>
            <h3>Waitlist</h3>
            <p className="price-amount">$0</p>
            <p className="price-period">— early access when we launch in your city</p>
            <ul className="price-features">
              <li>First to know when we open</li>
              <li>Launch updates &amp; growing tips</li>
              <li>Founding member perks</li>
              <li>No spam — unsubscribe anytime</li>
            </ul>
            <WaitlistForm />
          </article>

          <article className="price-card">
            <h3>Gardener</h3>
            <p className="price-amount">Soon</p>
            <p className="price-period">Find ground &amp; connect near you</p>
            <ul className="price-features">
              <li>Map discovery &amp; AI ranking</li>
              <li>Messaging with hosts</li>
              <li>Community spots &amp; journals</li>
              <li>Local groups &amp; events</li>
            </ul>
            <a className="btn btn-outline btn-block" href="#download">
              Notify Me
            </a>
          </article>

          <article className="price-card">
            <h3>Host</h3>
            <p className="price-amount">Soon</p>
            <p className="price-period">List your ground &amp; earn</p>
            <ul className="price-features">
              <li>Visible on Discover map</li>
              <li>Interview gardeners in-app</li>
              <li>Multiple plot listings</li>
              <li>Rent or barter terms</li>
            </ul>
            <a className="btn btn-outline btn-block" href="#download">
              Notify Me
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
