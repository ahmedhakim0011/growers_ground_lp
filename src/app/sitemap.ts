import type { MetadataRoute } from "next";
import { getAllGuides, isGuideIndexable } from "@/lib/guides";
import { getAllMetros, isMetroIndexable } from "@/lib/metros";
import { indexableRoutes, siteConfig } from "@/lib/site";

/** lastModified reflects when each page's content changed, not when the site was built. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const latest = (dates: (string | undefined)[]) =>
    dates.filter((d): d is string => Boolean(d)).sort((a, b) => Date.parse(b) - Date.parse(a))[0];

  const staticEntries = indexableRoutes.map(
    ({ path, lastModified, changeFrequency, priority }) => ({
      url: path === "/" ? base : `${base}${path}`,
      lastModified,
      changeFrequency,
      priority,
    }),
  );

  const metros = getAllMetros().filter(isMetroIndexable);
  const cities = metros.map((m) => ({
    url: `${base}/cities/${m.slug}`,
    lastModified: m.dataUpdatedAt,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const indexableGuides = getAllGuides().filter(isGuideIndexable);
  const guides = indexableGuides.map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: g.updatedAt ?? g.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    {
      url: `${base}/cities`,
      lastModified: latest(metros.map((m) => m.dataUpdatedAt)),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/guides`,
      lastModified: latest(indexableGuides.map((g) => g.updatedAt ?? g.publishedAt)),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...cities,
    ...guides,
  ];
}
