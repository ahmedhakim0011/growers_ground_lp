export function CommunitySection() {
  return (
    <section className="community-block" id="community" aria-labelledby="community-heading">
      <div className="community-intro spotlight spotlight-community">
        <div className="container spotlight-grid centered">
          <div className="spotlight-badge lavender">New · Community Layer</div>
          <h2 id="community-heading">
            Garden spots. Journals. Groups. All on the map.
          </h2>
          <p>
            Komoot-style community built for growers — pin public-good spots,
            track seasons in photo journals, join local clubs, and RSVP to seed
            swaps. Two maps, one calm app.
          </p>
          <a className="btn btn-primary" href="#waitlist">
            Get Early Access
          </a>
        </div>
      </div>
      <div
        className="community-detail feature-band"
        id="groups"
        aria-labelledby="groups-heading"
      >
        <div className="container feature-band-inner">
          <div className="feature-band-copy">
            <p className="section-eyebrow light">Local Community</p>
            <h2 id="groups-heading">Groups, Events &amp; Growing Journals</h2>
            <p>
              Follow seasonal journals, join neighborhood clubs, RSVP to seed
              swaps and planting days — all tied to your growing zone. Offline
              access for when you&apos;re actually in the garden.
            </p>
            <ul className="check-list">
              <li>Photo timelines per season</li>
              <li>Group feeds &amp; announcements</li>
              <li>Local pest &amp; soil Q&amp;A</li>
              <li>Achievement badges for contributors</li>
            </ul>
          </div>
          <div className="feature-band-visual" aria-hidden="true">
            <div className="journal-stack">
              <div className="journal-card">First harvest 🍅</div>
              <div className="journal-card">Week 6 — peppers</div>
              <div className="journal-card">Seed swap Saturday</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
