import type { Metadata } from "next";
import Link from "next/link";
import { OsmDataNotice } from "@/components/OsmDataNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getAllMetros } from "@/lib/metros";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Community gardens by city — US & Canada",
  description:
    "Browse mapped community gardens and allotment sites in 60 metros. OpenStreetMap data with free map previews — discover hosts and plots in the Growers Ground app.",
  alternates: { canonical: "/cities" },
  openGraph: {
    title: "Community gardens by city — US & Canada",
    description:
      "Browse mapped community gardens and allotment sites in 60 metros across the US and Canada.",
    url: "/cities",
  },
};

export default function CitiesIndexPage() {
  const metros = getAllMetros();
  const withGardens = metros.filter((m) => m.gardenCount > 0);
  const comingSoon = metros.filter((m) => m.gardenCount === 0);

  return (
    <>
      <SiteHeader />
      <main id="main" className="city-index-page">
        <div className="container city-index-header" data-reveal data-motion-y="36">
          <h1>Community gardens by city</h1>
          <p className="section-lead">
            {withGardens.length} metros with mapped gardens — pick yours for a
            local map preview and growing guides where available.
          </p>
          <OsmDataNotice compact />
        </div>
        <div
          className="container city-index-grid"
          data-reveal-stagger
          data-motion-stagger="0.05"
          data-motion-y="36"
        >
          {withGardens.map((metro) => (
            <Link
              key={metro.slug}
              href={`/cities/${metro.slug}`}
              className="city-index-card"
            >
              <strong>{metro.cityLabel}</strong>
              <span>{metro.gardenCount} gardens mapped</span>
            </Link>
          ))}
        </div>
        {comingSoon.length > 0 ? (
          <div className="container city-index-soon">
            <h2>More metros coming soon</h2>
            <p className="city-index-soon-list">
              {comingSoon.map((m) => m.cityLabel).join(" · ")}
            </p>
            <p>
              <Link href="/#waitlist">Join the waitlist</Link> to get notified
              when we expand coverage in {siteConfig.name}.
            </p>
          </div>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
