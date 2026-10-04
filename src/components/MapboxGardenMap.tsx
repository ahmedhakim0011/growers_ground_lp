"use client";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import type { GardenPin, MetroBbox } from "@/lib/metros";

type MapboxGardenMapProps = {
  slug: string;
  bbox: MetroBbox;
  pins: GardenPin[];
  className?: string;
  maxPins?: number;
};

const GARDEN_PIN_IMAGE = "garden-pin-square";

function addSquarePinImage(map: mapboxgl.Map) {
  if (map.hasImage(GARDEN_PIN_IMAGE)) return;

  const size = 24;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const inset = 5;
  const side = size - inset * 2;
  ctx.fillStyle = "#3D5F49";
  ctx.fillRect(inset, inset, side, side);
  ctx.strokeStyle = "#FFFFFF";
  ctx.lineWidth = 2;
  ctx.strokeRect(inset + 0.5, inset + 0.5, side - 1, side - 1);

  const imageData = ctx.getImageData(0, 0, size, size);
  map.addImage(GARDEN_PIN_IMAGE, imageData, { pixelRatio: 2 });
}

export function MapboxGardenMap({
  slug,
  bbox,
  pins,
  className = "",
  maxPins = 500,
}: MapboxGardenMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [statusMessage, setStatusMessage] = useState("Loading map…");

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN?.trim();
    if (!token) {
      setStatus("error");
      setStatusMessage(
        "Add NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN to enable the live map.",
      );
      return;
    }

    if (!containerRef.current) return;

    let cancelled = false;

    mapboxgl.accessToken = token;

    const centerLon = (bbox.west + bbox.east) / 2;
    const centerLat = (bbox.south + bbox.north) / 2;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [centerLon, centerLat],
      zoom: 11,
      attributionControl: true,
    });

    mapRef.current = map;

    map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), "top-right");

    const popup = new mapboxgl.Popup({
      closeButton: true,
      closeOnClick: true,
      maxWidth: "280px",
    });

    map.on("load", () => {
      if (cancelled) return;

      addSquarePinImage(map);

      const visible = pins.slice(0, maxPins);
      const features: GeoJSON.Feature[] = visible.map((pin, index) => ({
        type: "Feature",
        id: index,
        geometry: {
          type: "Point",
          coordinates: [pin.longitude, pin.latitude],
        },
        properties: {
          name: pin.name,
        },
      }));

      map.addSource("gardens", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features,
        },
      });

      map.addLayer({
        id: "gardens",
        type: "symbol",
        source: "gardens",
        layout: {
          "icon-image": GARDEN_PIN_IMAGE,
          "icon-size": 1,
          "icon-allow-overlap": true,
          "icon-ignore-placement": true,
        },
      });

      map.on("click", "gardens", (event) => {
        const feature = event.features?.[0];
        if (!feature?.geometry || feature.geometry.type !== "Point") return;

        const name = feature.properties?.name ?? "Community garden";
        const coords = feature.geometry.coordinates.slice() as [number, number];

        popup
          .setLngLat(coords)
          .setHTML(
            `<strong>${escapeHtml(String(name))}</strong><p style="margin:8px 0 0;font-size:14px;line-height:1.45">Community garden location from OpenStreetMap. Full discovery in the Growers Ground app.</p>`,
          )
          .addTo(map);
      });

      map.on("mouseenter", "gardens", () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", "gardens", () => {
        map.getCanvas().style.cursor = "";
      });

      if (visible.length > 0) {
        const padRatio = 0.08;
        const lonPad = (bbox.east - bbox.west) * padRatio;
        const latPad = (bbox.north - bbox.south) * padRatio;
        map.fitBounds(
          [
            [bbox.west - lonPad, bbox.south - latPad],
            [bbox.east + lonPad, bbox.north + latPad],
          ],
          { duration: 0, padding: 24 },
        );
      }

      setStatus("ready");
    });

    map.on("error", () => {
      if (!cancelled) {
        setStatus("error");
        setStatusMessage("Could not load the map. Try refreshing.");
      }
    });

    return () => {
      cancelled = true;
      popup.remove();
      map.remove();
      mapRef.current = null;
    };
  }, [slug, bbox, pins, maxPins]);

  return (
    <div
      className={`garden-map-preview garden-map-mapbox ${className}`.trim()}
      aria-label={`Map with community garden pins for ${slug}`}
    >
      {status !== "ready" ? (
        <p
          className={
            status === "error" ? "garden-map-empty" : "garden-map-loading"
          }
          role="status"
        >
          {statusMessage}
        </p>
      ) : null}
      <div ref={containerRef} className="garden-map-mapbox-canvas" />
    </div>
  );
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
