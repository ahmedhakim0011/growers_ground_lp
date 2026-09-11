const capabilities = [
  {
    iconClass: "discover",
    title: "Map-First Discovery",
    description:
      "AI-ranked pins surface the most relevant hosts or gardeners near you — with transparent \"why this match\" chips. Tap a pin, view a profile, connect.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    iconClass: "community",
    title: "Community Garden Spots",
    description:
      "Pin seed swaps, compost sites, water access, and community plots — confirmed by local growers. Public-good content, separate from private host listings.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    ),
  },
  {
    iconClass: "connect",
    title: "Connect & Grow Together",
    description:
      "Real-time messaging, growing journals, neighborhood groups, seasonal events, and local Q&A — everything tied to where you actually garden.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />
      </svg>
    ),
  },
] as const;

export function CapabilitiesSection() {
  return (
    <section className="capabilities" id="about" aria-labelledby="capabilities-heading">
      <div className="container">
        <p className="section-eyebrow">Why Growers Ground</p>
        <h2 id="capabilities-heading">Three Core Capabilities</h2>
        <p className="section-lead">
          One platform. Two audiences. Community built in — not bolted on.
        </p>

        <div className="cap-grid">
          {capabilities.map((cap) => (
            <article key={cap.title} className="cap-card">
              <div className={`cap-icon ${cap.iconClass}`} aria-hidden="true">
                {cap.icon}
              </div>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
