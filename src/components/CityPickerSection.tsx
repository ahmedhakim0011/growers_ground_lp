import Link from "next/link";
import { getFeaturedMetros } from "@/lib/metros";

export function CityPickerSection() {
  const featured = getFeaturedMetros(14);

  return (
    <section
      className="city-picker-section"
      id="cities"
      aria-labelledby="city-picker-heading"
    >
      <div className="container city-picker-inner">
        <div data-reveal data-motion-y="36">
          <p className="section-kicker">Local discovery</p>
          <h2 id="city-picker-heading">Pick your city</h2>
          <p className="section-lead city-picker-lead">
            We mapped community gardens across 60 US &amp; Canadian metros. Choose
            yours to see pins and counts — then get the app for hosts, gardeners,
            and community spots.
          </p>
        </div>
        <ul
          className="city-picker-grid"
          data-reveal-stagger
          data-motion-stagger="0.06"
          data-motion-y="32"
        >
          {featured.map((metro) => (
            <li key={metro.slug}>
              <Link href={`/cities/${metro.slug}`} className="city-picker-chip">
                <span className="city-picker-name">{metro.cityLabel}</span>
                <span className="city-picker-count">
                  {metro.gardenCount > 0
                    ? `${metro.gardenCount} gardens`
                    : "Coming soon"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="city-picker-more" data-reveal data-motion-y="20">
          <Link href="/cities">Browse all 60 cities →</Link>
        </p>
      </div>
    </section>
  );
}
