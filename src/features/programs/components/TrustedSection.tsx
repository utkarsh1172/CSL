import { SectionHeading } from "@/components/sections/SectionHeading";
import { BrandWordmark } from "@/components/ui/BrandWordmark";
import { industryBrands } from "@/content/shared/brands";
import type { ProgramHeading } from "@/types/program";

type TrustedSectionProps = {
  heading: ProgramHeading;
};

export function TrustedSection({ heading }: TrustedSectionProps) {
  return (
    <section
      aria-labelledby="trusted-heading"
      className="program-section program-section--ruled program-trusted"
    >
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="program-heading"
          id="trusted-heading"
          title={heading.title}
        />
        <ul className="logo-strip" data-reveal-children="">
          {industryBrands.map((brand) => (
            <li key={brand.name}>
              <span aria-hidden="true">
                <BrandWordmark brand={brand} />
              </span>
              <span className="sr-only">{brand.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
