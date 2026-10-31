import type { GrowingGuide } from "@/lib/guides";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export function GuideJsonLd({ guide }: { guide: GrowingGuide }) {
  const url = absoluteUrl(`/guides/${guide.slug}`);
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Guides", item: absoluteUrl("/guides") },
          { "@type": "ListItem", position: 3, name: guide.title, item: url },
        ],
      },
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.summary,
        mainEntityOfPage: url,
        ...(guide.publishedAt
          ? { datePublished: guide.publishedAt, dateModified: guide.updatedAt ?? guide.publishedAt }
          : {}),
        author: { "@id": `${siteConfig.url}/#organization` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en",
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
