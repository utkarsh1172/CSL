import { partnerRegions } from "@/content/pages/contact";
import { worldMap } from "@/content/pages/contact/world-map.generated";

const regionByCountry = new Map(
  partnerRegions.flatMap((region) => region.countryIds.map((id) => [id, region.id] as const)),
);

/** Static country outlines; partner countries carry their region so the map can tint them. */
export function WorldCountries() {
  return (
    <svg
      aria-hidden="true"
      className="world-map__countries"
      viewBox={`0 0 ${worldMap.width} ${worldMap.height}`}
    >
      {worldMap.countries.map((country) => (
        <path
          className="world-map__country"
          d={country.d}
          data-region={regionByCountry.get(country.id)}
          key={country.id}
        />
      ))}
    </svg>
  );
}
