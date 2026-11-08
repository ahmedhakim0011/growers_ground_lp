import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CityPageJsonLd } from "@/components/CityPageJsonLd";
import { GardenMapPreview } from "@/components/GardenMapPreview";
import { OsmDataNotice } from "@/components/OsmDataNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StoreBadges } from "@/components/StoreBadges";
import cityLocal from "@/data/city-local.json";
import { loadCityPins } from "@/lib/city-data.server";
import { getGuideBySlug, getGuidesForCity } from "@/lib/guides";
import { defaultSocialImage } from "@/lib/seo";
import {
  getAllMetros,
  isMetroIndexable,
  getMetroBySlug,
  getNamedGardens,
  getNearbyMetros,
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
  const title = metroSeoTitle(metro);
  return {
    // Long titles drop the " | Growers Ground" suffix so the words that matter stay visible.
    title: title.length > 47 ? { absolute: title } : title,
    description: metroSeoDescription(metro),
    alternates: { canonical: path },
    robots: isMetroIndexable(metro)
      ? undefined
      : { index: false, follow: true },
    openGraph: {
      title: `Community gardens in ${metro.cityLabel}`,
      description: metroSeoDescription(metro),
      url: path,
      type: "website",
      images: [defaultSocialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `Community gardens in ${metro.cityLabel}`,
      description: metroSeoDescription(metro),
      images: [defaultSocialImage.url],
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { slug } = await params;
  const metro = getMetroBySlug(slug);
  if (!metro) notFound();

  const bundle = loadCityPins(slug);
  const pins = bundle?.pins ?? [];
  const mapPins = pins.map(({ name, latitude, longitude }) => ({
    name,
    latitude,
    longitude,
  }));
  const guides = [
    ...getGuidesForCity(slug),
    ...[
      "how-to-find-a-community-garden",
      "how-to-find-a-place-to-grow-vegetables",
      "share-your-yard-as-a-garden-host",
    ].flatMap((s) => getGuideBySlug(s) ?? []),
  ];
  const namedGardens = getNamedGardens(pins);
  const nearbyMetros = getNearbyMetros(metro);
  const local = (
    cityLocal as Record<
      string,
      {
        heading: string;
        paragraphs: string[];
        links: { label: string; href: string }[];
      }
    >
  )[slug];
  const countLabel =
    metro.gardenCount === 1
      ? "1 community garden"
      : `${metro.gardenCount} community gardens`;

  return (
    <>
      <CityPageJsonLd metro={metro} gardens={namedGardens} />
      <SiteHeader />
      <main id="main" className="city-page">
        <div className="container city-page-header" data-reveal data-motion-y="40">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Cities", href: "/cities" },
              { label: metro.cityLabel },
            ]}
          />
          <p className="section-kicker">
            {metro.countryCode === "CA" ? "Canada" : "United States"}
          </p>
          <h1>Community gardens in {metro.cityLabel}</h1>
          <p className="city-page-lead">
            {metro.gardenCount > 0 ? (
              <>
                We mapped <strong>{countLabel}</strong> and allotment-style
                spaces in {metro.cityLabel}. Explore the preview map below.
              </>
            ) : (
              <>We have not mapped any community gardens in {metro.cityLabel} yet.</>
            )}{" "}
            Growers Ground, our map-first garden-sharing app, is not in the app
            stores yet, so join the waitlist to hear when it opens here.
          </p>
          <div className="city-page-cta">
            <StoreBadges prominence="hero" />
            <Link className="btn btn-accent btn-rect" href="/#waitlist">
              Notify me when {metro.cityLabel} is live
            </Link>
          </div>
          <OsmDataNotice
            sourceIds={metro.dataSources}
            sourceVersions={metro.sourceVersions}
          />
        </div>

        <div className="container city-page-map-wrap" data-reveal data-motion-y="48">
          <GardenMapPreview
            slug={slug}
            bbox={metro.bbox}
            pins={mapPins}
            maxPins={1000}
            className="city-page-map"
          />
          <p className="city-page-map-note">
            Showing up to 1,000 pins. Tap a city card on the{" "}
            <Link href="/cities">directory</Link> to switch metros.
          </p>
        </div>

        {local ? (
          <section className="container city-page-local" data-reveal data-motion-y="36">
            <h2>{local.heading}</h2>
            {local.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className="city-guide-links">
              {local.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} rel="noopener noreferrer" target="_blank">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="city-page-map-note">
              Details come from the official pages linked above and can change.
              Last checked fall 2026.
            </p>
          </section>
        ) : null}

        {namedGardens.length > 0 ? (
          <section className="container city-page-gardens" data-reveal data-motion-y="36">
            <h2>Community gardens on our {metro.cityLabel} map</h2>
            <p>
              {namedGardens.length === 1
                ? "This garden has a name"
                : `These ${namedGardens.length} gardens have a name`}{" "}
              in our data sources, listed A to Z.
              {pins.length > namedGardens.length
                ? " Other pins on the map are unnamed."
                : ""}{" "}
              Listing here does not mean a garden has open plots, so contact the
              garden or its organizer before you visit.
            </p>
            <ul className="city-garden-list">
              {namedGardens.map((g) => (
                <li key={g.name}>{g.name}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {guides.length > 0 ? (
          <div className="container city-page-guides" data-reveal data-motion-y="36">
            <h2>Free guides for gardeners in {metro.cityLabel}</h2>
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

        {nearbyMetros.length > 0 ? (
          <nav
            className="container city-page-nearby"
            aria-label={`Community gardens near ${metro.cityLabel}`}
          >
            <h2>Community gardens near {metro.cityLabel}</h2>
            <ul className="city-nearby-links">
              {nearbyMetros.map((m) => (
                <li key={m.slug}>
                  <Link href={`/cities/${m.slug}`}>
                    {m.cityLabel} ({m.gardenCount})
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/cities">All cities →</Link>
          </nav>
        ) : null}

        <div className="container city-page-footer-cta" data-reveal data-motion-y="32">
          <h2>Ready for more than a map?</h2>
          <p>
            Growers Ground connects gardeners who need ground with hosts who
            share yard space — map-first, no swipe deck.
          </p>
          <Link className="btn btn-accent btn-rect" href="/#waitlist">
            Join the waitlist
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
