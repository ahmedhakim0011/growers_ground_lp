const quotes = [
  {
    name: "Early host · Ohio",
    quote:
      "Listing our extra acre was easier than another season of unmowed lawn — and we picked who gardens.",
  },
  {
    name: "Urban gardener",
    quote:
      "No swipe deck. Just a map, honest bios, and messaging that feels like talking to a neighbor.",
  },
  {
    name: "Community grower",
    quote:
      "The garden spots layer showed me a seed swap two blocks away I never knew existed.",
  },
  {
    name: "Suburban host",
    quote:
      "Verified profiles and plot specs upfront — we knew who was coming before they stepped on the grass.",
  },
  {
    name: "Waitlist member · PNW",
    quote:
      "Finally something built for people who need ground, not another plant ID app with a map bolted on.",
  },
  {
    name: "Gardener · Texas",
    quote:
      "Found a host with water access and full sun without posting on random classifieds.",
  },
] as const;

export function QuoteCarouselSection() {
  const track = [...quotes, ...quotes];

  return (
    <section className="quote-carousel-section" aria-labelledby="quote-carousel-heading">
      <div className="container" data-reveal data-motion-y="32">
        <h2 id="quote-carousel-heading">Growers already planning their next season 🌱</h2>
      </div>
      <div className="quote-carousel-viewport" data-reveal data-motion-y="24" data-motion-delay="0.08">
        <ul className="quote-carousel-track">
          {track.map((item, index) => (
            <li key={`${item.name}-${index}`} className="quote-carousel-card">
              <span className="quote-mark" aria-hidden="true">
                &ldquo;
              </span>
              <p>{item.quote}</p>
              <footer>{item.name}</footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
