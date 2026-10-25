import Link from "next/link";
import { getAllGuides, isGuideIndexable } from "@/lib/guides";

export function GuidesTeaserSection() {
  const guides = getAllGuides()
    .filter(isGuideIndexable)
    .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""))
    .slice(0, 6);

  if (guides.length === 0) return null;

  return (
    <section
      className="city-picker-section"
      id="guides"
      aria-labelledby="guides-teaser-heading"
    >
      <div className="container city-picker-inner">
        <div data-reveal data-motion-y="36">
          <p className="section-kicker">Free guides</p>
          <h2 id="guides-teaser-heading">Learn how to find and share garden space</h2>
          <p className="section-lead city-picker-lead">
            Practical guides on finding a community garden, starting one, and
            growing in your region — written for gardeners in the US &amp; Canada.
          </p>
        </div>
        <ul
          className="city-picker-grid"
          data-reveal-stagger
          data-motion-stagger="0.06"
          data-motion-y="32"
        >
          {guides.map((guide) => (
            <li key={guide.slug}>
              <Link href={`/guides/${guide.slug}`} className="city-picker-chip">
                <span className="city-picker-name">{guide.title}</span>
                <span className="city-picker-count">
                  {guide.readMinutes} min read
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="city-picker-more" data-reveal data-motion-y="20">
          <Link href="/guides">All growing guides →</Link>
        </p>
      </div>
    </section>
  );
}
