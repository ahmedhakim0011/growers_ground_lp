export const siteConfig = {
  name: "Growers Ground",
  /** Canonical origin — apex domain; www redirects here on Vercel. */
  url: "https://growersground.com",
  instagram: "https://instagram.com/growers_ground_lp",
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
    { href: "#about", label: "About" },
    { href: "#how-it-works", label: "How It Works" },
  ],
  dropdown: [
    { href: "#gardener", label: "For Gardeners" },
    { href: "#host", label: "For Hosts" },
    { href: "#community", label: "Garden Spots" },
    { href: "#groups", label: "Groups & Events" },
  ],
  mobile: [
    { href: "#about", label: "About" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#gardener", label: "For Gardeners" },
    { href: "#host", label: "For Hosts" },
    { href: "#community", label: "Garden Spots" },
    { href: "#groups", label: "Groups & Events" },
    { href: "#waitlist", label: "Join Waitlist" },
    { href: "#download", label: "Get the App" },
  ],
} as const;
