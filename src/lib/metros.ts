import metroIndex from "@/data/metro-index.json";

export type MetroBbox = {
  south: number;
  west: number;
  north: number;
  east: number;
};

export type MetroSummary = {
  slug: string;
  cityLabel: string;
  countryCode: string;
  regionCode: string;
  gardenCount: number;
  bbox: MetroBbox;
};

export type GardenPin = {
  name: string;
  latitude: number;
  longitude: number;
};

export type CityPinBundle = {
  slug: string;
  bbox: MetroBbox;
  pins: GardenPin[];
};

const metros = metroIndex.metros as MetroSummary[];

export function getAllMetros(): MetroSummary[] {
  return metros;
}

export function getMetroBySlug(slug: string): MetroSummary | undefined {
  return metros.find((m) => m.slug === slug);
}

/** Featured on homepage (top garden counts + diversity). */
export function getFeaturedMetros(limit = 12): MetroSummary[] {
  const top = metros.filter((m) => m.gardenCount > 0).slice(0, limit);
  if (!top.some((m) => m.slug === "toronto")) {
    const toronto = getMetroBySlug("toronto");
    if (toronto) return [toronto, ...top.filter((m) => m.slug !== "toronto")].slice(0, limit);
  }
  return top;
}

export function getMetrosForPicker(): MetroSummary[] {
  return [...metros].sort((a, b) =>
    a.cityLabel.localeCompare(b.cityLabel, undefined, { sensitivity: "base" }),
  );
}

export function metroSeoTitle(metro: MetroSummary): string {
  return `Community gardens near me — ${metro.cityLabel} | Growers Ground`;
}

export function metroSeoDescription(metro: MetroSummary): string {
  const count = metro.gardenCount;
  const n = count === 1 ? "1 mapped garden" : `${count} mapped community gardens`;
  return `Explore ${n} and allotment-style spaces in ${metro.cityLabel}. OpenStreetMap data, free map preview — full discovery in the Growers Ground app.`;
}
