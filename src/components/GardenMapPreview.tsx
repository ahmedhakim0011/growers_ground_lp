"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import type { CityPinBundle, GardenPin, MetroBbox } from "@/lib/metros";

const MapboxGardenMap = dynamic(
  () =>
    import("@/components/MapboxGardenMap").then((m) => m.MapboxGardenMap),
  {
    ssr: false,
    loading: () => (
      <div className="garden-map-preview garden-map-mapbox">
        <p className="garden-map-loading">Loading map…</p>
      </div>
    ),
  },
);

type GardenMapPreviewProps = {
  slug: string;
  bbox: MetroBbox;
  pins?: GardenPin[];
  className?: string;
  maxPins?: number;
};

/** Fallback when Mapbox is unavailable (no access token). */
function GardenMapFallback({
  bbox,
  pins,
  className,
  maxPins = 120,
}: {
  bbox: MetroBbox;
  pins: GardenPin[];
  className?: string;
  maxPins?: number;
}) {
  const visible = useMemo(() => pins.slice(0, maxPins), [pins, maxPins]);

  function projectPin(pin: GardenPin) {
    const left =
      ((pin.longitude - bbox.west) / (bbox.east - bbox.west)) * 100;
    const top =
      ((bbox.north - pin.latitude) / (bbox.north - bbox.south)) * 100;
    return {
      left: Math.min(98, Math.max(2, left)),
      top: Math.min(98, Math.max(2, top)),
    };
  }

  return (
    <div
      className={`garden-map-preview garden-map-fallback ${className ?? ""}`.trim()}
      role="img"
      aria-label={`Map preview with ${visible.length} community garden pins`}
    >
      {visible.length === 0 ? (
        <p className="garden-map-empty">No mapped gardens in this area yet.</p>
      ) : (
        visible.map((pin, i) => {
          const { left, top } = projectPin(pin);
          return (
            <span
              key={`${pin.longitude}-${pin.latitude}-${i}`}
              className="garden-map-pin"
              style={{ left: `${left}%`, top: `${top}%` }}
              title={pin.name}
            />
          );
        })
      )}
    </div>
  );
}

export function GardenMapPreview({
  slug,
  bbox,
  pins: pinsProp,
  className = "",
  maxPins = 500,
}: GardenMapPreviewProps) {
  const [pins, setPins] = useState<GardenPin[]>(pinsProp ?? []);
  const [loading, setLoading] = useState(!pinsProp?.length);

  const hasMapboxToken = Boolean(
    process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN?.trim(),
  );

  useEffect(() => {
    if (pinsProp?.length) {
      setPins(pinsProp);
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    fetch(`/data/cities/${slug}.json`)
      .then((r) => r.json())
      .then((data: CityPinBundle) => {
        if (!cancelled) setPins(data.pins ?? []);
      })
      .catch(() => {
        if (!cancelled) setPins([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [slug, pinsProp]);

  if (loading) {
    return (
      <div className={`garden-map-preview ${className}`.trim()}>
        <p className="garden-map-loading">Loading gardens…</p>
      </div>
    );
  }

  if (hasMapboxToken) {
    return (
      <MapboxGardenMap
        slug={slug}
        bbox={bbox}
        pins={pins}
        className={className}
        maxPins={maxPins}
      />
    );
  }

  return (
    <GardenMapFallback
      bbox={bbox}
      pins={pins}
      className={className}
      maxPins={Math.min(maxPins, 120)}
    />
  );
}
