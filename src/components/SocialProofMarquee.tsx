const items = [
  "Portland, OR",
  "Austin, TX",
  "Toronto, ON",
  "Seattle, WA",
  "Denver, CO",
  "Vancouver, BC",
  "Map-first discovery",
  "AI-ranked matches",
  "Garden spots layer",
  "Growing journals",
  "Seed swaps",
  "No swipe deck",
] as const;

export function SocialProofMarquee() {
  const track = [...items, ...items];

  return (
    <section className="marquee-section" aria-label="Growing communities across North America">
      <div className="container">
        <p className="marquee-heading">
          Join gardeners and hosts building local food across the US &amp; Canada
        </p>
      </div>
      <div className="marquee-viewport">
        <ul className="marquee-track">
          {track.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
