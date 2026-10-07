import type { Metadata } from "next";
import Link from "next/link";
import { OsmDataNotice } from "@/components/OsmDataNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getAllGuides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Free regional growing guides",
  description:
    "Planting times, plot etiquette, and seasonal tips from Growers Ground — free on the web. See gardens near you in the app.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Free regional growing guides | Growers Ground",
    description:
      "Planting times, plot etiquette, and seasonal tips — free on the web.",
    url: "/guides",
  },
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
            Regional tips for real plots — planting windows, shared-bed etiquette,
            and seasonal tasks. More cities coming as we launch.
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
                {guide.cityLabel} · {guide.season} · {guide.readMinutes} min
              </p>
              <h2>
                <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
              </h2>
              <p>{guide.summary}</p>
              <Link
                className="guides-index-cta"
                href={`/cities/${guide.citySlug}`}
              >
                See gardens near you in {guide.cityLabel} →
              </Link>
            </article>
          ))}
        </div>
        <div className="container guides-index-footer">
          <OsmDataNotice compact />
          <p>
            <Link href="/#download">Get the app</Link> for journals, messaging,
            and host discovery beyond community garden pins.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
