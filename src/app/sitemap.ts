import type { MetadataRoute } from "next";
import { indexableRoutes, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? siteConfig.url : `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
