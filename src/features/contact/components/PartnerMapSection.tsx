import { partnerRegions } from "@/content/pages/contact";
import { worldMap } from "@/content/pages/contact/world-map.generated";
import { projectPoint } from "@/utils/equal-earth";

import { ContactSectionHeading } from "./ContactSectionHeading";
import { PartnerWorldMap } from "./PartnerWorldMap";
import { WorldCountries } from "./WorldCountries";

// Markers are projected here so the client receives five points instead of the map data.
const mapRegions = partnerRegions.map((region) => ({
  ...region,
  point: projectPoint(region.coordinates, worldMap),
}));

export function PartnerMapSection() {
  return (
    <section aria-labelledby="partner-map-heading" className="contact-partners">
      <div className="contact-shell">
        <ContactSectionHeading
          accent="leadership capital"
          description="Most professionals focus on acquiring skills. CSL builds the capital that compounds beyond a single job title."
          eyebrow="Our Partner Map"
          id="partner-map-heading"
          title="Five dimensions of"
        />

        <PartnerWorldMap height={worldMap.height} regions={mapRegions} width={worldMap.width}>
          <WorldCountries />
        </PartnerWorldMap>
      </div>
    </section>
  );
}
