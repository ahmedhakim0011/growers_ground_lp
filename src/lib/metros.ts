import metroIndex from "@/data/metro-index.json";
import { MIN_INDEXABLE_GARDENS } from "@/lib/seo";

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
  dataSources: string[];
  /** When this metro's pins last changed. Unlike generatedAt, a rebuild does not move it. */
  dataUpdatedAt?: string;
  sourceVersions?: Record<string, string | null>;
};

export type GardenPin = {
  name: string;
  latitude: number;
  longitude: number;
  /** Source IDs from data-sources.json. Absent means OpenStreetMap. */
  sources?: string[];
  /** Per-source record IDs, for example "nyc-greenthumb:XGT095". */
  refs?: string[];
};

export type CityPinBundle = {
  slug: string;
  bbox: MetroBbox;
  pins: GardenPin[];
};

const metros = metroIndex.metros as unknown as MetroSummary[];

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
  if (!isMetroIndexable(metro)) {
    return `Community gardens in ${metro.cityLabel}`;
  }
  return `${metro.gardenCount} Community Gardens in ${metro.cityLabel}: Map & Garden List`;
}

/** Pins that have a real name, cleaned, de-duplicated and sorted. Unnamed OSM pins use "City garden 3" placeholders. */
export function getNamedGardens(pins: GardenPin[]): GardenPin[] {
  const byName = new Map<string, GardenPin>();
  for (const pin of pins) {
    const name = pin.name.replace(/\s*\(OSM\)\s*$/i, "").trim();
    if (!name) continue;
    if (/\bgarden \d+$/i.test(name)) continue;
    if (/^(community garden|garden|allotments?)$/i.test(name)) continue;
    const key = name.toLowerCase();
    if (!byName.has(key)) byName.set(key, { ...pin, name });
  }
  return [...byName.values()].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
  );
}

function metroCenter(metro: MetroSummary) {
  return {
    lat: (metro.bbox.south + metro.bbox.north) / 2,
    lng: (metro.bbox.west + metro.bbox.east) / 2,
  };
}

/** Closest indexable metros, for crawlable links between city pages. */
export function getNearbyMetros(metro: MetroSummary, limit = 5): MetroSummary[] {
  const from = metroCenter(metro);
  const distance = (other: MetroSummary) => {
    const to = metroCenter(other);
    const lngScale = Math.cos((((from.lat + to.lat) / 2) * Math.PI) / 180);
    return Math.hypot(to.lat - from.lat, (to.lng - from.lng) * lngScale);
  };
  return metros
    .filter((m) => m.slug !== metro.slug && isMetroIndexable(m))
    .sort((a, b) => distance(a) - distance(b))
    .slice(0, limit);
}

export function metroSeoDescription(metro: MetroSummary): string {
  const count = metro.gardenCount;
  const n = count === 1 ? "1 mapped garden" : `${count} mapped community gardens`;
  return `Browse ${n} and allotment-style spaces in ${metro.cityLabel}, by name and on a free map. Find one near you, or look for shared garden space with Growers Ground.`;
}

export function isMetroIndexable(metro: MetroSummary): boolean {
  return metro.gardenCount >= MIN_INDEXABLE_GARDENS;
}

