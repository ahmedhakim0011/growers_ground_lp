import Image from "next/image";

export function HeroSection() {
  return (
    <section className="hero hero-elevated" aria-labelledby="hero-heading">
      <div className="hero-bg" aria-hidden="true">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "72% center" }}
        />
      </div>
      <div className="hero-scrim" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-content">
          <p className="hero-badge">Community-First Garden Platform</p>
          <h1 id="hero-heading">
            One Map.
            <br />
            Everyone
            <br />
            Knows Where to Grow.
          </h1>
          <p className="hero-lead">
            Growers Ground connects gardeners with hosts who share private yard
            space — map-first discovery, real messaging, and a local community
            layer. No swipe deck. No guesswork. Just ground.
          </p>

          <div className="store-buttons hero-actions" id="download">
            <a className="btn btn-hero-primary" href="#waitlist">
              Join the Waitlist
            </a>
            <a className="btn btn-hero-secondary" href="#how-it-works">
              How It Works
            </a>
          </div>

          <ul className="hero-trust" aria-label="Key benefits">
            <li>
              <span className="trust-icon" aria-hidden="true">
                📍
              </span>{" "}
              Map discovery — gardeners &amp; hosts
            </li>
            <li>
              <span className="trust-icon" aria-hidden="true">
                🔒
              </span>{" "}
              Safe profiles &amp; messaging
            </li>
            <li>
              <span className="trust-icon" aria-hidden="true">
                🌱
              </span>{" "}
              Rent or barter — your terms
            </li>
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="phone-mock phone-mock-float">
            <div className="phone-screen">
              <div className="mock-status">
                <span className="mock-time">9:41</span>
                <span className="mock-title">Discover</span>
              </div>
              <div className="mock-map">
                <span className="pin pin-person" />
                <span className="pin pin-person ai" />
                <span className="pin pin-spot" />
                <span className="pin pin-spot water" />
              </div>
              <div className="mock-sheet">
                <span className="mock-chip">Close to you</span>
                <span className="mock-chip clay">Garden spot · Seed swap</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-strip">
        <div className="container stats-grid">
          <div className="stat">
            <span className="stat-num">2</span>
            <span className="stat-label">Maps — people &amp; community spots</span>
          </div>
          <div className="stat">
            <span className="stat-num">0</span>
            <span className="stat-label">Swipe decks. Zero.</span>
          </div>
          <div className="stat">
            <span className="stat-num">50+</span>
            <span className="stat-label">Cities targeted across US &amp; Canada</span>
          </div>
          <div className="stat">
            <span className="stat-num">1</span>
            <span className="stat-label">Tap to find ground near you</span>
          </div>
        </div>
      </div>
    </section>
  );
}
