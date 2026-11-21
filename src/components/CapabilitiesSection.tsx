import Image from "next/image";

/* Illustrations are the app's own flat art (growers_gound_app/assets/illustrations),
   so the site and app read as one brand. Each card takes one pastel family. */
const capabilities = [
  {
    tone: "mint",
    art: "/images/illustrations/onboarding_discover.svg",
    title: "Map-first discovery",
    description:
      "Ranked pins show the most relevant hosts or gardeners near you, with a clear “why this match” on each. Tap a pin, view a profile, connect.",
  },
  {
    tone: "peach",
    art: "/images/illustrations/hub_spots.svg",
    title: "Community garden spots",
    description:
      "Pin seed swaps, compost sites, water access, and community plots, confirmed by local growers. Kept apart from private host listings.",
  },
  {
    tone: "sky",
    art: "/images/illustrations/intent_community.svg",
    title: "Connect and grow together",
    description:
      "Messaging, season journals, neighborhood groups, events, and local Q&A, all tied to where you actually garden.",
  },
] as const;

export function CapabilitiesSection() {
  return (
    <section className="capabilities capabilities-zernio" aria-labelledby="capabilities-heading">
      <div className="container">
        <div data-reveal data-motion-y="36">
          <p className="section-kicker">Why Growers Ground</p>
          <h2 id="capabilities-heading">The map-first way to meet ground</h2>
          <p className="section-lead">
            One calm app for gardeners, hosts, and neighbors, with community
            built in from day one.
          </p>
        </div>

        <div className="cap-grid" data-reveal-stagger data-motion-stagger="0.11">
          {capabilities.map((cap) => (
            <article key={cap.title} className={`cap-card cap-card--${cap.tone}`}>
              <div className="cap-art" aria-hidden="true">
                <Image src={cap.art} alt="" width={160} height={160} />
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
