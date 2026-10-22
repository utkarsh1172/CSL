import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { Marquee } from "@/components/ui/Marquee";
import { industryBrands } from "@/content/shared/brands";
import type { HeadingContent } from "@/types/content";

import { SectionHeading } from "./SectionHeading";

type TrustedSectionProps = {
  heading: HeadingContent;
};

/** "Trusted by" heading over an endless carousel of the organisations' wordmarks. */
export function TrustedSection({ heading }: TrustedSectionProps) {
  return (
    <section
      aria-labelledby="trusted-heading"
      className="page-section page-section--ruled trusted-section"
    >
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large"
          id="trusted-heading"
          title={heading.title}
        />
        <Marquee
          className="logo-strip"
          items={industryBrands.map((brand) => ({
            key: brand.name,
            label: brand.name,
            node: <BrandWordmark brand={brand} />,
          }))}
          label={[heading.title, heading.accent].filter(Boolean).join(" ")}
        />
      </div>
    </section>
  );
}
