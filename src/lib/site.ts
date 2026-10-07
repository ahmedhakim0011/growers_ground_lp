export const siteConfig = {
  name: "Growers Ground",
  /** Square logo for favicon, Open Graph, and JSON-LD (min 48×48 for Google). */
  logoPath: "/images/logo.png",
  /** Canonical origin — must match Vercel primary domain (apex redirects to www). */
  url: "https://www.growersground.com",
  instagram: "https://www.instagram.com/growersgroundapp/",
  supportEmail: "support@growersground.com",
  description:
    "Growers Ground connects gardeners with hosts who share yard space. Map-first discovery, garden spots, journals, and local growing communities. US & Canada.",
  ogDescription:
    "Find private garden space near you. Connect with local hosts, garden spots, seed swaps, and growing journals.",
  themeColor: "#3D5F49",
} as const;

/** Routes included in sitemap.xml for search indexing. */
export const indexableRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/privacy", changeFrequency: "monthly" as const, priority: 0.5 },
  { path: "/terms", changeFrequency: "monthly" as const, priority: 0.5 },
  { path: "/support", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/delete-account", changeFrequency: "yearly" as const, priority: 0.3 },
] as const;

export const navLinks = {
  desktop: [
    { href: "#top", label: "Home" },
    { href: "/cities", label: "Cities" },
    { href: "/guides", label: "Guides" },
    { href: "#discover", label: "Directory" },
  ],
  dropdown: [
    { href: "#discover", label: "Browse profiles" },
    { href: "#app-screenshots", label: "Community layer" },
    { href: "#waitlist", label: "Early access" },
  ],
  mobile: [
    { href: "#app-screenshots", label: "Features" },
    { href: "#discover", label: "Directory" },
    { href: "#app-screenshots", label: "Community layer" },
    { href: "#faq", label: "FAQ" },
    { href: "#waitlist", label: "Join Waitlist" },
    { href: "#download", label: "Get the App" },
  ],
} as const;
