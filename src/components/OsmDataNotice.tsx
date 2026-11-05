import dataSources from "@/data/data-sources.json";

type DataSource = {
  shortName: string;
  credit: string;
  licenseName: string;
  licenseUrl: string;
  sourceUrl: string;
  modifications: string;
  dataDate: string | null;
};

const registry = dataSources.sources as Record<string, DataSource>;

function versionLabel(id: string, version: string | null | undefined) {
  const source = registry[id];
  if (source.dataDate) return `dated ${source.dataDate}`;
  if (id === "osm" || !version) return null;
  const date = new Date(version);
  if (Number.isNaN(date.getTime())) return null;
  return `updated ${date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })}`;
}

/**
 * Credits garden data. With `sourceIds` it lists one metro's sources, version and
 * changes (NYC Admin Code 23-502(d) and CC BY 4.0 ask for these). Without it, it
 * credits every source, for pages that cover all metros.
 */
export function OsmDataNotice({
  compact = false,
  sourceIds,
  sourceVersions,
}: {
  compact?: boolean;
  sourceIds?: string[];
  sourceVersions?: Record<string, string | null>;
}) {
  const ids = (sourceIds ?? Object.keys(registry)).filter((id) => registry[id]);
  return (
    <p className={`osm-trust${compact ? " osm-trust-compact" : ""}`}>
      Garden locations come from{" "}
      {ids.map((id, i) => {
        const source = registry[id];
        const version = sourceIds ? versionLabel(id, sourceVersions?.[id]) : null;
        return (
          <span key={id}>
            {i > 0 ? (i === ids.length - 1 ? " and " : ", ") : null}
            <a href={source.sourceUrl} target="_blank" rel="noopener noreferrer">
              {source.credit}
            </a>{" "}
            (
            <a href={source.licenseUrl} target="_blank" rel="noopener noreferrer">
              {source.licenseName}
            </a>
            {version ? `, ${version}` : ""})
          </span>
        );
      })}
      .{" "}
      {sourceVersions
        ? ids
            .map((id) => `${registry[id].shortName}: ${registry[id].modifications}`)
            .join(" ") + " "
        : null}
      Growers Ground is built for real gardeners — hosts, plots, and community
      spots in the app go beyond this public preview.
    </p>
  );
}
