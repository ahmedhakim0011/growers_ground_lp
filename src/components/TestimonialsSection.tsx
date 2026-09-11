const testimonials = [
  {
    quote:
      "I've been on a community garden waitlist for two years. Found a host three blocks away in a week.",
    author: "Urban gardener, Portland",
  },
  {
    quote:
      "We had 400 sq ft of lawn doing nothing. Now it earns and our neighbor grows our summer vegetables.",
    author: "Host, Austin",
  },
  {
    quote:
      "The garden spots map showed me a seed swap I never knew existed two streets over.",
    author: "Community grower, Toronto",
  },
] as const;

export function TestimonialsSection() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <p className="section-eyebrow">Growing Together</p>
        <h2 id="testimonials-heading">What Growers Are Saying</h2>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <blockquote key={item.author} className="testimonial-card">
              <p>&ldquo;{item.quote}&rdquo;</p>
              <footer>— {item.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
