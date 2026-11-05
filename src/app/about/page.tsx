import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageShell } from "@/components/LegalPageShell";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Growers Ground — the garden-sharing app",
  description:
    "Growers Ground is a map-first app that connects gardeners with hosts who share yard space, across the US and Canada. Learn what it is, how it works, and where to find us.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${absoluteUrl("/about")}#aboutpage`,
    url: absoluteUrl("/about"),
    name: `About ${siteConfig.name}`,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
  };

  return (
    <LegalPageShell
      title={`About ${siteConfig.name}`}
      lastUpdated="November 5, 2026"
      eyebrow="Company"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <p>
        <strong>{siteConfig.name}</strong> is a garden-sharing app and website
        that connects people who want to grow food with neighbors who have
        yard space to share. It is built for gardeners and hosts in the United
        States and Canada.
      </p>

      <p>
        Our idea fits in one line: <strong>One Map. Everyone Knows Where to
        Grow.</strong> Urban gardeners without land, homeowners with unused
        yards, first-time growers, experienced gardeners and garden clubs all
        look for each other in different places. We want to put them on one map.
      </p>

      <h2>Who is behind it</h2>
      <p>
        Growers Ground was founded by{" "}
        <a href={siteConfig.founder.url} target="_blank" rel="noopener noreferrer">
          {siteConfig.founder.name}
        </a>
        , a senior software engineer with more than seven years of experience
        building mobile apps. You can also find Ahmed on{" "}
        <a href={siteConfig.founder.instagram} target="_blank" rel="noopener noreferrer">
          Instagram (@ahmedbuildapps)
        </a>
        ,{" "}
        <a href={siteConfig.founder.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{" "}
        and{" "}
        <a href={siteConfig.founder.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>

      <h2>Where the product is today</h2>
      <p>
        The app is not in the app stores yet. We are launching city by city
        across the US and Canada, and you can{" "}
        <Link href="/#waitlist">join the waitlist</Link> to hear when your area
        opens. The community garden maps and guides on this website are free to
        use now, with no account.
      </p>

      <h2>What Growers Ground does</h2>
      <ul>
        <li>
          <strong>Map-first discovery.</strong> Browse hosts, gardeners, and
          community garden spots on a map instead of scrolling a feed.
        </li>
        <li>
          <strong>Privacy by design.</strong> Locations are approximate until
          you choose to connect with someone.
        </li>
        <li>
          <strong>Your terms.</strong> Hosts and gardeners agree on seasonal
          rent, harvest share, or barter before anyone gardens. Growers Ground
          does not handle payments for plots.
        </li>
        <li>
          <strong>Community places.</strong> Seed swaps, community gardens, and
          other public-good spots sit on their own map layer.
        </li>
      </ul>

      <h2>Where our garden data comes from</h2>
      <p>
        Our city maps use OpenStreetMap and, where we can confirm the licence,
        official open data such as NYC Parks GreenThumb and the Atlanta Regional
        Commission. Each city page names its sources and the changes we made. We
        do not add gardens from any other source, and we only index a city page
        once it has at least 10 mapped gardens.
      </p>
      <p>
        Being on our map does not mean a garden has open plots. Records can be
        out of date, so contact a garden or its organizer before you visit. To
        report a mistake, email{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
      </p>

      <h2>Explore</h2>
      <ul>
        <li>
          <Link href="/cities">Community gardens by city</Link> — mapped
          gardens across US and Canadian metros.
        </li>
        <li>
          <Link href="/guides">Free growing guides</Link> — finding a
          garden, starting one, and growing in your region.
        </li>
        <li>
          <Link href="/#waitlist">Join the waitlist</Link> — we are rolling out
          city by city.
        </li>
      </ul>

      <h2>Find us</h2>
      <ul>
        <li>
          Website: <a href={siteConfig.url}>growersground.com</a>
        </li>
        <li>
          Instagram:{" "}
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            @growersgroundapp
          </a>
        </li>
        <li>
          Facebook:{" "}
          <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer">
            Growers Ground
          </a>
        </li>
        <li>
          TikTok:{" "}
          <a href={siteConfig.tiktok} target="_blank" rel="noopener noreferrer">
            @growersground
          </a>
        </li>
        <li>
          Support:{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>
            {siteConfig.supportEmail}
          </a>{" "}
          · <Link href="/support">Support page</Link>
        </li>
      </ul>

      <p>
        Not to be confused with ground-cover or landscaping suppliers:{" "}
        {siteConfig.name} is a software product for sharing garden space.
      </p>
    </LegalPageShell>
  );
}
