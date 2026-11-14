export const siteConfig = {
  name: "Growers Ground",
  /** Square logo for favicon, Open Graph, and JSON-LD (min 48×48 for Google). */
  logoPath: "/images/logo.png",
  /** Canonical origin — must match Vercel primary domain (apex redirects to www). */
  url: "https://www.growersground.com",
  instagram: "https://www.instagram.com/growersgroundapp/",
  /** Official profiles for Organization.sameAs — add each new brand profile here (Facebook, LinkedIn, X, TikTok, YouTube, Crunchbase, store listings). */
  sameAs: [
    "https://www.instagram.com/growersgroundapp/",
    "https://www.facebook.com/people/Growers-Ground/61595561339790/",
    "https://www.tiktok.com/@growersground",
  ],
  facebook: "https://www.facebook.com/people/Growers-Ground/61595561339790/",
  tiktok: "https://www.tiktok.com/@growersground",
  alternateNames: ["GrowersGround", "Grow Ground", "Growers Ground app", "Growers Ground garden sharing app"],
  supportEmail: "support@growersground.com",
  founder: {
    name: "Ahmed Hakim Ali",
    url: "https://www.ahmedbuildapps.com/",
    instagram: "https://www.instagram.com/ahmedbuildapps",
    linkedin: "https://www.linkedin.com/in/ahmd-hakim-ali-943378202/",
    github: "https://github.com/ahmedhakim0011",
  },
  description:
    "Growers Ground is a garden sharing app: find garden space near you, or share your unused backyard with a local gardener. Map-first yard sharing across the US & Canada.",
  ogDescription:
    "No yard? Find garden space near you. Have a yard? Share it with a local gardener. Hosts, gardeners, community gardens and seed swaps on one map.",
  themeColor: "#3D5F49",
} as const;

/** Routes included in sitemap.xml for search indexing. */
export const indexableRoutes = [
  { path: "/", lastModified: "2026-11-14", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/privacy", lastModified: "2026-09-11", changeFrequency: "monthly" as const, priority: 0.5 },
  { path: "/terms", lastModified: "2026-09-11", changeFrequency: "monthly" as const, priority: 0.5 },
  { path: "/about", lastModified: "2026-11-05", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/support", lastModified: "2026-09-11", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/delete-account", lastModified: "2026-09-11", changeFrequency: "yearly" as const, priority: 0.3 },
] as const;

export const navLinks = {
  desktop: [
    { href: "/", label: "Home" },
    { href: "/cities", label: "Cities" },
    { href: "/guides", label: "Guides" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/about", label: "About" },
  ],
  dropdown: [
    { href: "/find-garden-space", label: "Find garden space" },
    { href: "/share-your-yard", label: "Share your yard" },
    { href: "/#discover", label: "Browse profiles" },
    { href: "/#app-screenshots", label: "Community layer" },
    { href: "/#waitlist", label: "Early access" },
  ],
  mobile: [
    { href: "/how-it-works", label: "How it works" },
    { href: "/find-garden-space", label: "Find garden space" },
    { href: "/share-your-yard", label: "Share your yard" },
    { href: "/cities", label: "Community gardens" },
    { href: "/#app-screenshots", label: "Community layer" },
    { href: "/#faq", label: "FAQ" },
    { href: "/#waitlist", label: "Join Waitlist" },
  ],
} as const;
