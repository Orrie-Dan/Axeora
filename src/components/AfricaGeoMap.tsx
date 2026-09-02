import { geoMercator, geoPath, type GeoPermissibleObjects } from "d3-geo";
import { useEffect, useMemo, useState } from "react";
import { africaCountries, africaGeoNames } from "../data";

const WORLD_GEOJSON_URL =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";
const MAP_SIZES = {
  default: { width: 640, height: 720 },
  cinematic: { width: 1100, height: 620 },
} as const;

type GeoFeature = GeoJSON.Feature<GeoJSON.Geometry, { name?: string }>;

type Props = {
  activeCountry?: string | null;
  onSelect?: (country: string | null) => void;
  onHighlight?: (country: string | null) => void;
  className?: string;
  tone?: "bridge" | "hero";
  variant?: keyof typeof MAP_SIZES;
  showCountryPills?: boolean;
};

function normalizeCountry(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const AFRICA_COUNTRY_NAMES = new Set(
  [
    "Algeria",
    "Angola",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cameroon",
    "Central African Rep.",
    "Chad",
    "Congo",
    "Côte d'Ivoire",
    "Ivory Coast",
    "Dem. Rep. Congo",
    "Djibouti",
    "Egypt",
    "Equatorial Guinea",
    "Eritrea",
    "eSwatini",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Libya",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Niger",
    "Nigeria",
    "Rwanda",
    "Senegal",
    "Sierra Leone",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Sudan",
    "Tanzania",
    "Togo",
    "Tunisia",
    "Uganda",
    "Zambia",
    "Zimbabwe",
    "W. Sahara",
    "Somaliland",
    "Cabo Verde",
    "São Tomé and Principe",
    "Comoros",
    "Mauritius",
    "Seychelles",
  ].map(normalizeCountry),
);

const geoNameToAxeora = (() => {
  const map = new Map<string, (typeof africaCountries)[number]>();
  for (const country of africaCountries) {
    for (const geoName of africaGeoNames[country]) {
      map.set(normalizeCountry(geoName), country);
    }
  }
  return map;
})();

function axeoraFromFeature(feature: GeoFeature): (typeof africaCountries)[number] | null {
  const name = feature.properties?.name ?? "";
  return geoNameToAxeora.get(normalizeCountry(name)) ?? null;
}

function isAfricanFeature(feature: GeoFeature) {
  const name = feature.properties?.name ?? "";
  return AFRICA_COUNTRY_NAMES.has(normalizeCountry(name));
}

export default function AfricaGeoMap({
  activeCountry = null,
  onSelect,
  onHighlight,
  className = "",
  tone = "hero",
  variant = "default",
  showCountryPills = false,
}: Props) {
  const { width: mapWidth, height: mapHeight } = MAP_SIZES[variant];
  const [geographies, setGeographies] = useState<GeoFeature[]>([]);
  const [loading, setLoading] = useState(true);
  const interactive = Boolean(onSelect || onHighlight);
  const hasFocus = activeCountry !== null;
  const hero = tone === "hero";

  function highlight(country: string | null) {
    (onHighlight ?? onSelect)?.(country);
  }

  function select(country: string) {
    if (onSelect) onSelect(country);
    else onHighlight?.(country);
  }

  useEffect(() => {
    let mounted = true;

    async function loadMap() {
      try {
        const response = await fetch(WORLD_GEOJSON_URL);
        const data = (await response.json()) as GeoJSON.FeatureCollection;
        if (mounted) {
          const features = (data.features ?? []) as GeoFeature[];
          setGeographies(features.filter(isAfricanFeature));
        }
      } catch {
        if (mounted) setGeographies([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadMap();
    return () => {
      mounted = false;
    };
  }, []);

  const mapPath = useMemo(() => {
    if (!geographies.length) return null;
    const pad = variant === "cinematic" ? 24 : 12;
    const projection = geoMercator().fitExtent(
      [
        [pad, pad],
        [mapWidth - pad, mapHeight - pad],
      ],
      { type: "FeatureCollection", features: geographies },
    );
    return geoPath(projection);
  }, [geographies, mapWidth, mapHeight, variant]);

  const engagedGeoNames = useMemo(() => {
    const names = new Set<string>();
    for (const country of africaCountries) {
      for (const geoName of africaGeoNames[country]) {
        names.add(normalizeCountry(geoName));
      }
    }
    return names;
  }, []);

  return (
    <div
      className={`africa-geo-map africa-geo-map--${tone}${variant === "cinematic" ? " africa-geo-map--cinematic" : ""} ${className}`.trim()}
    >
      <div className="africa-geo-map__frame">
        {mapPath && geographies.length ? (
          <svg
            className="africa-geo-map__svg"
            viewBox={`0 0 ${mapWidth} ${mapHeight}`}
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Map of Africa showing twelve AxeOra engagement countries"
          >
            {geographies.map((feature) => {
              const geoName = feature.properties?.name ?? "";
              const axeoraName = axeoraFromFeature(feature);
              const isEngaged = engagedGeoNames.has(normalizeCountry(geoName));
              const isActive = Boolean(axeoraName && activeCountry === axeoraName);
              const isDimmed = hasFocus && isEngaged && !isActive;
              const pulseDelay = axeoraName
                ? africaCountries.indexOf(axeoraName) * 0.28
                : 0;

              return (
                <path
                  key={`${feature.id ?? geoName}`}
                  d={mapPath(feature as GeoPermissibleObjects) ?? ""}
                  className={[
                    "africa-geo-map__country",
                    isEngaged ? "is-engaged" : "",
                    isActive ? "is-active" : "",
                    isDimmed ? "is-dimmed" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={isEngaged && hero ? { animationDelay: `${pulseDelay}s` } : undefined}
                  tabIndex={interactive && axeoraName ? 0 : undefined}
                  role={interactive && axeoraName ? "button" : undefined}
                  aria-label={axeoraName ? `${axeoraName} — hover for details` : geoName}
                  onMouseEnter={interactive && axeoraName ? () => highlight(axeoraName) : undefined}
                  onMouseLeave={interactive && axeoraName ? () => highlight(null) : undefined}
                  onFocus={interactive && axeoraName ? () => highlight(axeoraName) : undefined}
                  onBlur={interactive && axeoraName ? () => highlight(null) : undefined}
                  onClick={interactive && axeoraName ? () => select(axeoraName) : undefined}
                  onKeyDown={
                    interactive && axeoraName
                      ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            select(axeoraName);
                          }
                        }
                      : undefined
                  }
                />
              );
            })}
          </svg>
        ) : (
          <div className="africa-geo-map__fallback" aria-hidden={loading}>
            {loading ? "Loading map…" : "Map unavailable"}
          </div>
        )}
      </div>

      {showCountryPills ? (
        <div className="africa-geo-map__pills" aria-label="Engagement countries">
          {africaCountries.map((country) => (
            <button
              key={country}
              type="button"
              className={`africa-geo-map__pill${activeCountry === country ? " is-active" : ""}`}
              onMouseEnter={() => highlight(country)}
              onMouseLeave={() => highlight(null)}
              onFocus={() => highlight(country)}
              onBlur={() => highlight(null)}
              onClick={() => select(country)}
            >
              {country}
            </button>
          ))}
        </div>
      ) : null}

      {hero && activeCountry ? (
        <p className="africa-geo-map__active-label" aria-live="polite">
          {activeCountry}
        </p>
      ) : null}
    </div>
  );
}
