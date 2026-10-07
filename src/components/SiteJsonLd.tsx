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
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${absoluteUrl("/cities")}?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteRoot,
        sameAs: [siteConfig.instagram],
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          width: 500,
          height: 500,
        },
        image: logoUrl,
      },
      {
        "@type": "MobileApplication",
        name: siteConfig.name,
        operatingSystem: "iOS, Android",
        applicationCategory: "LifestyleApplication",
        description: siteConfig.description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
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
