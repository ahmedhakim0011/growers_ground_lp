import Link from "next/link";
import { landingPages } from "@/lib/landing-pages";

/** Homepage links to each keyword landing page, so they get crawled and pass internal authority. */
export function GardenSharingHubSection() {
  return (
    <section
      className="city-picker-section"
      id="garden-sharing"
      aria-labelledby="garden-sharing-heading"
    >
      <div className="container city-picker-inner">
        <div data-reveal data-motion-y="36">
          <p className="section-kicker">Garden sharing, made local</p>
          <h2 id="garden-sharing-heading">
            No yard? Find one. Unused yard? Share it.
          </h2>
          <p className="section-lead city-picker-lead">
            Growers Ground is backyard garden sharing for the US &amp; Canada:
            people who want a place to grow vegetables meet neighbors with
            unused yard space, on one map. Start with what you need.
          </p>
        </div>
        <ul
          className="city-picker-grid"
          data-reveal-stagger
          data-motion-stagger="0.06"
          data-motion-y="32"
        >
          {landingPages.map((p) => (
            <li key={p.slug}>
              <Link href={`/${p.slug}`} className="city-picker-chip">
                <span className="city-picker-name">{p.navLabel}</span>
                <span className="city-picker-count">{p.eyebrow}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
