const rows = [
  {
    feature: "Private yard space",
    growers: "Hosts list backyard plots",
    waitlist: "Municipal plots only",
    alternatives: "Not available",
  },
  {
    feature: "Map discovery",
    growers: "AI-ranked gardeners & hosts",
    waitlist: "City website PDF",
    alternatives: "Plant ID only",
  },
  {
    feature: "Messaging",
    growers: "In-app chat before you commit",
    waitlist: "Email coordinator",
    alternatives: "Community forums",
  },
  {
    feature: "Community spots",
    growers: "Seed swaps, compost, water access",
    waitlist: "Single garden only",
    alternatives: "Not available",
  },
  {
    feature: "Terms",
    growers: "Rent or barter — you decide",
    waitlist: "Fixed annual fee",
    alternatives: "N/A",
  },
  {
    feature: "Wait time",
    growers: "Browse available ground now",
    waitlist: "6–24 month waitlists",
    alternatives: "N/A",
  },
] as const;

const mobileCards = [
  {
    title: "Private yard space",
    growers: "Hosts list backyard plots",
    other: "Municipal plots only",
    otherLabel: "Waitlist",
  },
  {
    title: "Map discovery",
    growers: "AI-ranked matches",
    other: "Plant ID only",
    otherLabel: "Plant apps",
  },
  {
    title: "Wait time",
    growers: "Browse available ground now",
    other: "6–24 month waitlists",
    otherLabel: "Waitlist",
  },
] as const;

export function ComparisonSection() {
  return (
    <section className="comparison" id="comparison" aria-labelledby="comparison-heading">
      <div className="container">
        <p className="section-eyebrow">Growers Ground vs. The Alternatives</p>
        <h2 id="comparison-heading">A Fair Comparison</h2>
        <p className="section-lead">
          Built for finding ground and growing community — not just plant care.
        </p>

        <div className="table-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Growers Ground</th>
                <th scope="col">Community Garden Waitlist</th>
                <th scope="col">Generic Plant Apps</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td className="win">{row.growers}</td>
                  <td>{row.waitlist}</td>
                  <td>{row.alternatives}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="compare-cards" aria-label="Comparison on mobile">
          {mobileCards.map((card) => (
            <article key={card.title} className="compare-card-item">
              <h3>{card.title}</h3>
              <p>
                <strong>Growers Ground:</strong> {card.growers}
              </p>
              <p>
                <strong>{card.otherLabel}:</strong> {card.other}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
