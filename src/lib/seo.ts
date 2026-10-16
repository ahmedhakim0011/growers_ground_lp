import { siteConfig } from "@/lib/site";

/** Open Graph / Twitter preview — same asset as Organization.logo in JSON-LD. */
export const siteLogoSocialImage = {
  url: siteConfig.logoPath,
  width: 500,
  height: 500,
  alt: `${siteConfig.name} logo`,
} as const;

/** Absolute URL for canonical / JSON-LD (matches live primary host). */
export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (path === "/" || path === "") return `${base}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
