import type { MetroSummary } from "@/lib/metros";
import { metroSeoDescription } from "@/lib/metros";
import { siteConfig } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

type CityPageJsonLdProps = {
  metro: MetroSummary;
};

export function CityPageJsonLd({ metro }: CityPageJsonLdProps) {
  const pageUrl = absoluteUrl(`/cities/${metro.slug}`);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Cities",
            item: absoluteUrl("/cities"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: metro.cityLabel,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `Community gardens in ${metro.cityLabel}`,
        description: metroSeoDescription(metro),
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        inLanguage: "en-US",
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
