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
    id: "karen",
    role: "host",
    name: "Karen Blue",
    location: "Host · San Francisco, CA",
    verified: true,
    specs: ["2.5 acres", "Water on property", "Flexible setup"],
    bioExcerpt:
      "We have 2.5 acres inside 410 on the east side of town, with water spigots around the property you can use.",
    tags: ["Host", "Verified"],
    amenities: ["water", "full-sun", "large-plot"],
    plotSize: "large",
    mapPosition: { top: "42%", left: "58%" },
    cta: { label: "Connect with host", href: "#waitlist" },
    avatarHue: 128,
    cardLabel: "Verified Host",
    cardTitle: "Karen Blue — San Francisco, CA",
    cardSummary:
      "2.5 acres inside 410 on the east side of town, with water spigots around the property you can use.",
    screenshot: {
      src: "/images/app_ss_karen_profile_.png",
      width: 370,
      height: 674,
      alt: "Karen Blue host profile with garden space details and agreements",
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
      src: "/images/app_ss_timoothy_profile_.png",
      width: 368,
      height: 678,
      alt: "Timoothy gardener profile with experience and garden preferences",
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
      src: "/images/app_ss_andrea_profile_.png",
      width: 366,
      height: 682,
      alt: "Andrea gardener profile with beginner journey and garden highlights",
    },
  },
];
