export function MarketingInfrastructureSection() {
  return (
    <section
      className="infra-section"
      id="about"
      aria-labelledby="infra-heading"
    >
      <div className="container infra-inner">
        <div className="infra-copy">
          <p className="section-kicker">Growing infrastructure</p>
          <h2 id="infra-heading">One app for every kind of ground</h2>
          <h3 className="infra-subhead">
            Map discovery, messaging, and community — designed for trust, not
            transactions
          </h3>
          <p className="infra-lead">
            We built the hard parts so you can focus on growing: two distinct map
            layers for people and places, AI-ranked matches with clear reasons,
            and in-app messaging before anyone commits to a plot.
          </p>
        </div>

        <div className="infra-visual" aria-hidden="true">
          <div className="product-frame">
            <div className="product-frame-bar">
              <span />
              <span />
              <span />
              <p>Discover · Near you</p>
            </div>
            <div className="product-frame-body">
              <div className="mock-map-panel">
                <span className="pin pin-person" />
                <span className="pin pin-person ai" />
                <span className="pin pin-spot" />
                <span className="pin pin-spot water" />
              </div>
              <div className="mock-list-panel">
                <div className="mock-list-item active">
                  <strong>Host · 0.4 mi</strong>
                  <span>Raised beds · Water hookup</span>
                  <em>Why this match</em>
                </div>
                <div className="mock-list-item">
                  <strong>Garden spot · Seed swap</strong>
                  <span>Confirmed by 12 growers</span>
                </div>
                <div className="mock-list-item">
                  <strong>Host · 0.9 mi</strong>
                  <span>Seasonal rent · Barter OK</span>
                </div>
              </div>
            </div>
            <div className="product-frame-footer">
              <span className="mock-chip">Close to you</span>
              <span className="mock-chip clay">Message before you commit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
