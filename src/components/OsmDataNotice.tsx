export function OsmDataNotice({ compact = false }: { compact?: boolean }) {
  return (
    <p className={`osm-trust${compact ? " osm-trust-compact" : ""}`}>
      Garden locations are sourced from{" "}
      <a
        href="https://www.openstreetmap.org/copyright"
        target="_blank"
        rel="noopener noreferrer"
      >
        OpenStreetMap
      </a>{" "}
      contributors (ODbL). Growers Ground is built for real gardeners — hosts,
      plots, and community spots in the app go beyond this public preview.
    </p>
  );
}
