import type { MetadataRoute } from "next";
import { getAllGuides, isGuideIndexable } from "@/lib/guides";
import {
  getAllMetros,
  isMetroIndexable,
  metroIndexGeneratedAt,
} from "@/lib/metros";
import { indexableRoutes, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = metroIndexGeneratedAt;
  const staticEntries = indexableRoutes.map(
    ({ path, changeFrequency, priority }) => ({
      url: path === "/" ? base : `${base}${path}`,
      lastModified,
      changeFrequency,
      priority,
    }),
  );

  const cities = getAllMetros()
    .filter(isMetroIndexable)
    .map((m) => ({
    url: `${base}/cities/${m.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const guides = getAllGuides()
    .filter(isGuideIndexable)
    .map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: g.publishedAt ? new Date(g.publishedAt) : lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    {
      url: `${base}/cities`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/guides`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...cities,
    ...guides,
  ];
}
