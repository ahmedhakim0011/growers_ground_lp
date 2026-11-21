export type ProfileRole = "host" | "gardener";

export type DiscoveryProfile = {
  id: string;
  role: ProfileRole;
  name: string;
  location: string;
  verified: boolean;
  specs: string[];
  bioExcerpt: string;
  tags: string[];
  amenities: ("water" | "full-sun" | "large-plot" | "urban")[];
  plotSize?: "large" | "medium" | "small";
  mapPosition: { top: string; left: string };
  cta: { label: string; href: string };
  avatarHue: number;
  /** Right-column feature card (phone shows full profile) */
  cardLabel: string;
  cardTitle: string;
  cardSummary: string;
  screenshot: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const discoveryProfiles: DiscoveryProfile[] = [
  {
    id: "charles",
    role: "host",
    name: "Charles",
    location: "Host · California",
    verified: true,
    specs: ["Backyard & raised beds", "By appointment", "Shares tools & seeds"],
    bioExcerpt: "Happy to share tools, seeds and stories.",
    tags: ["Host", "Verified"],
    amenities: ["full-sun", "large-plot"],
    plotSize: "medium",
    mapPosition: { top: "42%", left: "58%" },
    cta: { label: "Connect with host", href: "#waitlist" },
    avatarHue: 128,
    cardLabel: "Host",
    cardTitle: "Charles — California",
    cardSummary:
      "A host's own profile: the garden space on offer, how visits work (by appointment), and what they're happy to share.",
    screenshot: {
      src: "/images/app/profile-host.jpg",
      width: 506,
      height: 1100,
      alt: "Charles's host profile with a backyard photo, Host badge, setup by appointment only, and garden space highlights",
    },
  },
  {
    id: "timoothy",
    role: "gardener",
    name: "Timoothy",
    location: "Gardener · San Francisco, CA",
    verified: true,
    specs: ["Very experienced", "2–3 hrs/week", "Flowers & herbs"],
    bioExcerpt:
      "I'm an experienced gardener looking for a small space to grow flowers.",
    tags: ["Gardener", "Verified"],
    amenities: ["urban", "full-sun"],
    plotSize: "small",
    mapPosition: { top: "34%", left: "38%" },
    cta: { label: "Connect", href: "#waitlist" },
    avatarHue: 142,
    cardLabel: "Active Gardener",
    cardTitle: "Timoothy — San Francisco, CA",
    cardSummary:
      "Experienced gardener looking for a small plot to grow flowers and herbs. Available 2–3 hours per week.",
    screenshot: {
      src: "/images/app/profile-timothy.jpg",
      width: 506,
      height: 1100,
      alt: "Timoothy's gardener profile: very experienced, 2–3 hours a week, 7 mi away",
    },
  },
  {
    id: "andrea",
    role: "gardener",
    name: "Andrea",
    location: "Gardener · San Francisco, CA · 2 mi away",
    verified: true,
    specs: ["Beginner", "About an hour/week", "Open to shared tools"],
    bioExcerpt:
      "I grew up around gardens but didn't appreciate them until I had my own place. Now I understand why my parents spent so much time outside.",
    tags: ["Gardener", "Verified"],
    amenities: ["urban"],
    plotSize: "small",
    mapPosition: { top: "52%", left: "48%" },
    cta: { label: "Connect", href: "#waitlist" },
    avatarHue: 168,
    cardLabel: "Beginner Gardener",
    cardTitle: "Andrea — San Francisco, CA",
    cardSummary:
      "New to gardening but eager to learn—about an hour a week, open to shared tools and informal agreements.",
    screenshot: {
      src: "/images/app/profile-andrea.jpg",
      width: 506,
      height: 1100,
      alt: "Andrea's gardener profile: new to gardening, about an hour a week, 9 mi away",
    },
  },
];
