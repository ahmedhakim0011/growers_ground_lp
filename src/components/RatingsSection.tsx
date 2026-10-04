export function RatingsSection() {
  return (
    <section className="ratings-section" aria-labelledby="ratings-heading">
      <div className="container ratings-inner">
        <div data-reveal data-motion-y="32">
          <h2 id="ratings-heading">Built for trust from the ground up</h2>
          <p className="ratings-lead">
            Verified profiles, privacy-first locations, and no swipe decks — designed
            with growers who told us what they needed.
          </p>
        </div>
        <div className="ratings-grid" data-reveal-stagger data-motion-stagger="0.1">
          <div className="ratings-stat">
            <span className="ratings-num">2</span>
            <span className="ratings-label">Map layers · people &amp; places</span>
          </div>
          <div className="ratings-stat">
            <span className="ratings-num">100%</span>
            <span className="ratings-label">Opt-in location sharing</span>
          </div>
          <div className="ratings-stat">
            <span className="ratings-num">US + CA</span>
            <span className="ratings-label">Rolling out city by city</span>
          </div>
        </div>
      </div>
    </section>
  );
}
