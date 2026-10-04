"use client";

import Link from "next/link";
import { useState } from "react";
import { GardenMapPreview } from "@/components/GardenMapPreview";
import { OsmDataNotice } from "@/components/OsmDataNotice";
import { StoreBadges } from "@/components/StoreBadges";
import { getFeaturedMetros, type MetroSummary } from "@/lib/metros";

const featured = getFeaturedMetros(8);
const defaultMetro =
  featured.find((m) => m.slug === "toronto") ?? featured[0];

export function MapTeaserSection() {
  const [metro, setMetro] = useState<MetroSummary>(defaultMetro);

  return (
    <section
      className="map-teaser-section"
      aria-labelledby="map-teaser-heading"
    >
      <div
        className="container map-teaser-inner"
        data-reveal-stagger
        data-motion-stagger="0.14"
      >
        <div className="map-teaser-copy">
          <p className="section-kicker">Map preview</p>
          <h2 id="map-teaser-heading">
            Community gardens on the map — no login required
          </h2>
          <p className="section-lead">
            Read-only pins from OpenStreetMap. In the app: host yards, gardener
            profiles, messaging, and the community spots layer.
          </p>
          <label className="map-teaser-select-wrap">
            <span className="map-teaser-select-label">Preview city</span>
            <select
              className="map-teaser-select"
              value={metro.slug}
              onChange={(e) => {
                const next = featured.find((m) => m.slug === e.target.value);
                if (next) setMetro(next);
              }}
            >
              {featured.map((m) => (
                <option key={m.slug} value={m.slug}>
                  {m.cityLabel} ({m.gardenCount} gardens)
                </option>
              ))}
            </select>
          </label>
          <p className="map-teaser-stat">
            <strong>{metro.gardenCount}</strong> mapped locations in{" "}
            {metro.cityLabel}
          </p>
          <div className="map-teaser-actions">
            <Link
              className="btn btn-accent btn-rect"
              href={`/cities/${metro.slug}`}
            >
              View {metro.cityLabel} page
            </Link>
            <StoreBadges prominence="default" />
          </div>
          <OsmDataNotice compact />
        </div>
        <div className="map-teaser-visual">
          <GardenMapPreview
            key={metro.slug}
            slug={metro.slug}
            bbox={metro.bbox}
          />
          <Link
            className="map-teaser-visual-link"
            href={`/cities/${metro.slug}`}
          >
            Open full {metro.cityLabel} map →
          </Link>
        </div>
      </div>
    </section>
  );
}
