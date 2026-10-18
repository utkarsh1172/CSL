import { SectionHeading } from "@/components/sections/SectionHeading";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { Marquee } from "@/components/ui/Marquee";
import { industryBrands } from "@/content/shared/brands";
import type { AboutHeading } from "@/types/about";

type TrustedSectionProps = {
  heading: AboutHeading;
};

export function TrustedSection({ heading }: TrustedSectionProps) {
  return (
    <section
      aria-labelledby="trusted-heading"
      className="page-section page-section--ruled about-trusted"
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
          label={`${heading.title} ${heading.accent}`}
        />
      </div>
    </section>
  );
}
