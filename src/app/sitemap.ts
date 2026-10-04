import type { MetadataRoute } from "next";
import { getAllGuides } from "@/lib/guides";
import { getAllMetros } from "@/lib/metros";
import { indexableRoutes, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticEntries = indexableRoutes.map(
    ({ path, changeFrequency, priority }) => ({
      url: path === "/" ? base : `${base}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }),
  );

  const cities = getAllMetros().map((m) => ({
    url: `${base}/cities/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: m.gardenCount > 0 ? 0.85 : 0.5,
  }));

  const guides = getAllGuides().map((g) => ({
    url: `${base}/guides/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticEntries,
    {
      url: `${base}/cities`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/guides`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...cities,
    ...guides,
  ];
}
