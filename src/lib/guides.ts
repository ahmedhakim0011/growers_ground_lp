import catalog from "@/data/guides/catalog.json";

export type GuideSection = {
  title: string;
  body: string;
};

export type GrowingGuide = {
  slug: string;
  citySlug: string;
  cityLabel: string;
  title: string;
  summary: string;
  season: string;
  readMinutes: number;
  sections: GuideSection[];
};

const guides = catalog.guides as GrowingGuide[];

export function getAllGuides(): GrowingGuide[] {
  return guides;
}

export function getGuideBySlug(slug: string): GrowingGuide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesForCity(citySlug: string): GrowingGuide[] {
  return guides.filter((g) => g.citySlug === citySlug);
}

export const plantingCalendar = catalog.plantingCalendar as {
  monthNumber: number;
  tasks: string[];
}[];

export const torontoZoneLabel = catalog.zoneLabel as string;
