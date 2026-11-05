import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

/** WebSite + Organization schema for Google site name and logo in search results. */
export function SiteJsonLd() {
  const logoUrl = new URL(siteConfig.logoPath, siteConfig.url).href;
  const siteRoot = absoluteUrl("/");

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteRoot,
        name: siteConfig.name,
        alternateName: siteConfig.alternateNames,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.alternateNames,
        url: siteRoot,
        description: siteConfig.description,
        slogan: "One Map. Everyone Knows Where to Grow.",
        founder: {
          "@type": "Person",
          "@id": `${siteConfig.url}/#founder`,
          name: siteConfig.founder.name,
          url: siteConfig.founder.url,
          jobTitle: "Founder",
          sameAs: [
            siteConfig.founder.url,
            siteConfig.founder.instagram,
            siteConfig.founder.linkedin,
            siteConfig.founder.github,
          ],
        },
        areaServed: ["US", "CA"],
        sameAs: siteConfig.sameAs,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: siteConfig.supportEmail,
            url: absoluteUrl("/support"),
            availableLanguage: "English",
          },
        ],
        mainEntityOfPage: { "@id": absoluteUrl("/about") + "#aboutpage" },
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          width: 500,
          height: 500,
        },
        image: logoUrl,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
