const testimonials = [
  {
    handle: "pepper_pike_host",
    quote:
      "Large yard with plenty of space to convert — exactly the kind of listing I wished existed before waitlists.",
  },
  {
    handle: "inside_410_grower",
    quote:
      "2.5 acres, full sun, and water spigots on the property. Seeing that upfront saved so much back-and-forth.",
  },
  {
    handle: "urban_gardener_abida",
    quote:
      "I'm looking for space for vegetables, fruit trees, and wildflowers to share with neighbors — this app gets it.",
  },
  {
    handle: "pnw_waitlist",
    quote:
      "I've been on a community garden waitlist for two years. Map discovery beats another generic forum post.",
  },
  {
    handle: "austin_host",
    quote:
      "We had lawn doing nothing. Now we know who gardens and what they want to grow before they visit.",
  },
  {
    handle: "toronto_spots",
    quote:
      "The community layer for seed swaps is the feature I didn't know I needed until I saw it on the map.",
  },
] as const;

export function TestimonialsSection() {
  return (
    <section
      className="testimonials testimonials-cal"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <div data-reveal data-motion-y="36">
          <h2 id="testimonials-heading">Thousands of growers are planning ahead</h2>
          <p className="section-lead testimonials-cal-lead">
            Early members sharing why map-first discovery matters.
          </p>
        </div>

        <div
          className="testimonials-masonry"
          data-reveal-stagger
          data-motion-stagger="0.08"
          data-motion-y="40"
        >
          {testimonials.map((item) => (
            <blockquote key={item.handle} className="testimonial-tile">
              <p>&ldquo;{item.quote}&rdquo;</p>
              <footer>@{item.handle}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
