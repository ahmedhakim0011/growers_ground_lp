import { siteConfig } from "@/lib/site";

/** Open Graph / Twitter preview — same asset as Organization.logo in JSON-LD. */
export const siteLogoSocialImage = {
  url: siteConfig.logoPath,
  width: 500,
  height: 500,
  alt: `${siteConfig.name} logo`,
} as const;

/** Default share image. Pages that set their own openGraph lose the root image, so they pass this. */
export const defaultSocialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name}: find garden space and local gardeners on a map`,
} as const;

/** Page-specific share tags. Without these a page inherits the home page's title and description. */
export function socialMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    openGraph: {
      type: "website" as const,
      siteName: siteConfig.name,
      title,
      description,
      url: path,
      images: [defaultSocialImage],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [defaultSocialImage.url],
    },
  };
}

/** Absolute URL for canonical / JSON-LD (matches live primary host). */
export function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (path === "/" || path === "") return `${base}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

/** Metros with fewer mapped gardens than this are noindex'd and left out of the sitemap (thin page). */
export const MIN_INDEXABLE_GARDENS = 10;

/** Guides under this word count are noindex'd and left out of the sitemap (thin content). */
export const MIN_INDEXABLE_GUIDE_WORDS = 300;
