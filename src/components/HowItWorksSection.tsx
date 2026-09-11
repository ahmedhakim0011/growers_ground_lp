const steps = [
  {
    title: "Download & Create Your Profile",
    description:
      "Sign up as a gardener or host. Add photos, your growing experience, and what you're looking for — or what ground you have to offer.",
  },
  {
    title: "Discover on the Map",
    description:
      "Browse AI-ranked matches in your area. Filter by distance, save favourites, and explore community garden spots on a separate map layer.",
  },
  {
    title: "Connect & Start Growing",
    description:
      "Message, agree on rent or barter terms, and join the community — journals, groups, seed swaps, and local events.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section className="how-it-works" id="how-it-works" aria-labelledby="how-heading">
      <div className="container">
        <p className="section-eyebrow">Simple by Design</p>
        <h2 id="how-heading">How Growers Ground Works</h2>
        <p className="section-lead">Three steps to ground. No training required.</p>

        <ol className="steps-grid">
          {steps.map((step, index) => (
            <li key={step.title} className="step-card">
              <span className="step-num">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
