#!/usr/bin/env node
/**
 * Copies metro index + per-city pin bundles from ../launch-content into the LP.
 * Uses data/<slug>-merged.json (official + OSM, see launch-content/scripts/build-open-data.mjs)
 * when present, otherwise data/<slug>-osm.json.
 * Run: node scripts/sync-launch-content.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const lpRoot = path.resolve(__dirname, "..");
const lcRoot = path.resolve(lpRoot, "../launch-content");

const metrosPath = path.join(lcRoot, "config/metro-areas.json");
const dataDir = path.join(lcRoot, "data");
const outCitiesDir = path.join(lpRoot, "public/data/cities");
const outGuidesDir = path.join(lpRoot, "src/data/guides");

function slugifyTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const metroIndexOut = path.join(lpRoot, "src/data/metro-index.json");

if (!fs.existsSync(metrosPath)) {
  const hasCommittedBundle =
    fs.existsSync(metroIndexOut) &&
    fs.existsSync(outCitiesDir) &&
    fs.readdirSync(outCitiesDir).some((f) => f.endsWith(".json"));

  if (hasCommittedBundle) {
    console.warn(
      `launch-content not found at ${lcRoot} — using committed metro/city JSON (standalone deploy).`,
    );
    process.exit(0);
  }

  console.error(
    "Missing launch-content at",
    lcRoot,
    "and no committed public/data/cities + src/data/metro-index.json.",
  );
  process.exit(1);
}

const { metros } = JSON.parse(fs.readFileSync(metrosPath, "utf8"));
fs.mkdirSync(outCitiesDir, { recursive: true });
fs.mkdirSync(outGuidesDir, { recursive: true });

const index = [];

const sourcesPath = path.join(lcRoot, "config/open-data-sources.json");
if (fs.existsSync(sourcesPath)) {
  const { checkedAt, sources } = JSON.parse(fs.readFileSync(sourcesPath, "utf8"));
  const publicSources = Object.fromEntries(
    Object.entries(sources).map(([id, s]) => [
      id,
      {
        shortName: s.shortName,
        credit: s.credit,
        licenseName: s.licenseName,
        licenseUrl: s.licenseUrl,
        sourceUrl: s.sourceUrl,
        modifications: s.modifications,
        dataDate: s.dataDate,
      },
    ]),
  );
  fs.writeFileSync(
    path.join(lpRoot, "src/data/data-sources.json"),
    JSON.stringify({ checkedAt, sources: publicSources }, null, 2),
  );
}

for (const metro of metros) {
  const osmFile = path.join(dataDir, `${metro.slug}-osm.json`);
  const mergedFile = path.join(dataDir, `${metro.slug}-merged.json`);
  let pins = [];
  let dataSources = ["osm"];
  let sourceVersions;
  let dataUpdatedAt;
  if (fs.existsSync(mergedFile)) {
    const raw = JSON.parse(fs.readFileSync(mergedFile, "utf8"));
    dataUpdatedAt = raw.generatedAt;
    pins = raw.pins.map((p) => ({
      name: p.name,
      latitude: p.latitude,
      longitude: p.longitude,
      sources: p.sources,
      refs: p.refs,
    }));
    if (pins.length > 0) {
      dataSources = [...new Set(pins.flatMap((p) => p.sources))];
      sourceVersions = raw.sourceVersions;
    }
  } else if (fs.existsSync(osmFile)) {
    const raw = JSON.parse(fs.readFileSync(osmFile, "utf8"));
    dataUpdatedAt = raw.fetchedAt;
    pins = (raw.pins ?? []).map((p) => ({
      name: p.name,
      latitude: p.latitude,
      longitude: p.longitude,
    }));
  }

  const bbox = metro.overpassBoundingBox;
  fs.writeFileSync(
    path.join(outCitiesDir, `${metro.slug}.json`),
    JSON.stringify({ slug: metro.slug, bbox, pins }),
  );

  index.push({
    slug: metro.slug,
    cityLabel: metro.cityLabel,
    countryCode: metro.countryCode,
    regionCode: metro.regionCode,
    gardenCount: pins.length,
    bbox,
    dataSources,
    ...(dataUpdatedAt ? { dataUpdatedAt } : {}),
    ...(sourceVersions ? { sourceVersions } : {}),
  });
}

index.sort((a, b) => b.gardenCount - a.gardenCount);

fs.writeFileSync(
  path.join(lpRoot, "src/data/metro-index.json"),
  JSON.stringify({ generatedAt: new Date().toISOString(), metros: index }, null, 2),
);

const torontoGuidesPath = path.join(lcRoot, "config/packs/toronto-guides.json");
if (fs.existsSync(torontoGuidesPath)) {
  const pack = JSON.parse(fs.readFileSync(torontoGuidesPath, "utf8"));
  const guides = (pack.guides ?? [])
    .filter((g) => !g.isPremiumOnly)
    .map((g) => ({
      slug: slugifyTitle(g.title),
      citySlug: "toronto",
      cityLabel: "Toronto",
      title: g.title,
      summary: g.summary,
      season: g.season,
      readMinutes: g.readMinutes,
      sections: g.sections,
    }));
  fs.writeFileSync(
    path.join(outGuidesDir, "catalog.json"),
    JSON.stringify(
      {
        guides,
        plantingCalendar: pack.plantingCalendar ?? [],
        zoneLabel: pack.zoneLabel,
      },
      null,
      2,
    ),
  );
}

console.log(`Synced ${index.length} metros, ${index.reduce((s, m) => s + m.gardenCount, 0)} pins.`);
