import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CityPageJsonLd } from "@/components/CityPageJsonLd";
import { GardenMapPreview } from "@/components/GardenMapPreview";
import { OsmDataNotice } from "@/components/OsmDataNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StoreBadges } from "@/components/StoreBadges";
import { loadCityPins } from "@/lib/city-data.server";
import { getGuidesForCity } from "@/lib/guides";
import {
  getAllMetros,
  getMetroBySlug,
  metroSeoDescription,
  metroSeoTitle,
} from "@/lib/metros";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllMetros().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const metro = getMetroBySlug(slug);
  if (!metro) return { title: "City not found" };
  const path = `/cities/${slug}`;
  return {
    title: metroSeoTitle(metro),
    description: metroSeoDescription(metro),
    alternates: { canonical: path },
    openGraph: {
      title: `Community gardens in ${metro.cityLabel}`,
      description: metroSeoDescription(metro),
      url: path,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Community gardens in ${metro.cityLabel}`,
      description: metroSeoDescription(metro),
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const metro = getMetroBySlug(slug);
  if (!metro) notFound();

  const bundle = loadCityPins(slug);
  const pins = bundle?.pins ?? [];
  const guides = getGuidesForCity(slug);
  const countLabel =
    metro.gardenCount === 1
      ? "1 community garden"
      : `${metro.gardenCount} community gardens`;

  return (
    <>
      <CityPageJsonLd metro={metro} />
      <SiteHeader />
      <main id="main" className="city-page">
        <div className="container city-page-header" data-reveal data-motion-y="40">
          <p className="section-kicker">
            {metro.countryCode === "CA" ? "Canada" : "United States"}
          </p>
          <h1>Community gardens in {metro.cityLabel}</h1>
          <p className="city-page-lead">
            We mapped <strong>{countLabel}</strong> and allotment-style spaces
            in {metro.cityLabel}. Explore the preview map below — then get{" "}
            {metro.cityLabel === "Toronto" ? "Toronto" : "local"} host listings,
            gardener profiles, and community spots in the app.
          </p>
          <div className="city-page-cta">
            <StoreBadges prominence="hero" />
            <Link className="btn btn-accent btn-rect" href="/#waitlist">
              Notify me when {metro.cityLabel} is live
            </Link>
          </div>
          <OsmDataNotice />
        </div>

        <div className="container city-page-map-wrap" data-reveal data-motion-y="48">
          <GardenMapPreview
            slug={slug}
            bbox={metro.bbox}
            pins={pins}
            maxPins={200}
            className="city-page-map"
          />
          <p className="city-page-map-note">
            Showing up to 200 pins. Tap a city card on the{" "}
            <Link href="/cities">directory</Link> to switch metros.
          </p>
        </div>

        {guides.length > 0 ? (
          <div className="container city-page-guides" data-reveal data-motion-y="36">
            <h2>Free growing guides for {metro.cityLabel}</h2>
            <ul className="city-guide-links">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`}>{g.title}</Link>
                  <span>{g.readMinutes} min read</span>
                </li>
              ))}
            </ul>
            <Link href="/guides">All guides →</Link>
          </div>
        ) : null}

        <div className="container city-page-footer-cta" data-reveal data-motion-y="32">
          <h2>Ready for more than a map?</h2>
          <p>
            Growers Ground connects gardeners who need ground with hosts who
            share yard space — map-first, no swipe deck.
          </p>
          <Link className="btn btn-accent btn-rect" href="/#download">
            Get the app
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
