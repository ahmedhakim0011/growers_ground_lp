import { socialMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { OsmDataNotice } from "@/components/OsmDataNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getAllGuides, isGuideIndexable } from "@/lib/guides";

// Keep the index out of search unless at least one guide is substantial enough to index.
const hasIndexableGuide = getAllGuides().some(isGuideIndexable);

export const metadata: Metadata = {
  robots: hasIndexableGuide ? undefined : { index: false, follow: true },
  title: "Free community garden and yard sharing guides",
  description:
    "Free guides to finding or starting a community garden, sharing a yard, gardening with neighbors, and running a seed swap, from Growers Ground.",
  alternates: { canonical: "/guides" },
  ...socialMetadata({
    title: "Free community garden and yard sharing guides | Growers Ground",
    description:
      "Free guides to finding or starting a community garden, sharing a yard, gardening with neighbors, and running a seed swap.",
    path: "/guides",
  }),
};

export default function GuidesIndexPage() {
  const guides = getAllGuides();

  return (
    <>
      <SiteHeader />
      <main id="main" className="guides-index-page">
        <div className="container guides-index-header" data-reveal data-motion-y="36">
          <h1>Free growing guides</h1>
          <p className="section-lead">
            Practical guides to yard sharing, finding a place to grow, and
            regional tips for real plots. More coming as we launch city by city.
          </p>
        </div>
        <div
          className="container guides-index-list"
          data-reveal-stagger
          data-motion-stagger="0.1"
        >
          {guides.map((guide) => (
            <article key={guide.slug} className="guides-index-card">
              <p className="guides-index-meta">
                {[guide.cityLabel, guide.season, `${guide.readMinutes} min`]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
              <h2>
                <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
              </h2>
              <p>{guide.summary}</p>
              {guide.citySlug ? (
                <Link
                  className="guides-index-cta"
                  href={`/cities/${guide.citySlug}`}
                >
                  See gardens near you in {guide.cityLabel} →
                </Link>
              ) : (
                <Link className="guides-index-cta" href="/#waitlist">
                  Join the waitlist →
                </Link>
              )}
            </article>
          ))}
        </div>
        <div className="container guides-index-footer">
          <OsmDataNotice compact />
          <p>
            <Link href="/#waitlist">Join the waitlist</Link> for journals, messaging,
            and host discovery beyond community garden pins.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
