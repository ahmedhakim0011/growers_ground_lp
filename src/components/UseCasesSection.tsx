const useCases = [
  {
    num: "01",
    title: "Urban Gardeners",
    description:
      "Find a backyard plot when apartment life won't let you grow tomatoes.",
    href: "#waitlist",
  },
  {
    num: "02",
    title: "Suburban Hosts",
    description:
      "Monetize unused lawn space with vetted gardeners — seasonal rent or harvest share.",
    href: "#waitlist",
  },
  {
    num: "03",
    title: "Community Gardeners",
    description:
      "Discover spots, seed swaps, and compost sites pinned by locals — confirmed by the community.",
    href: "#community",
  },
  {
    num: "04",
    title: "First-Time Growers",
    description:
      "Match with experienced hosts, follow public journals, and ask local Q&A.",
    href: "#waitlist",
  },
  {
    num: "05",
    title: "Seed Swappers",
    description:
      "Find swap corners, events, and fellow growers trading heirlooms in your zone.",
    href: "#groups",
  },
  {
    num: "06",
    title: "Garden Clubs",
    description:
      "Run neighborhood groups, shared spot collections, and planting-day events in-app.",
    href: "#groups",
  },
] as const;

export function UseCasesSection() {
  return (
    <section className="use-cases" aria-labelledby="usecases-heading">
      <div className="container">
        <p className="section-eyebrow">Real-World Use Cases</p>
        <h2 id="usecases-heading">Who Uses Growers Ground</h2>
        <p className="section-lead">
          From urban renters to suburban hosts — one app serves every grower.
        </p>

        <div className="use-grid">
          {useCases.map((item) => (
            <article key={item.num} className="use-card">
              <span className="use-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.href}>Learn more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
