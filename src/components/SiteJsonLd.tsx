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
        slogan: "Where growers meet ground",
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
