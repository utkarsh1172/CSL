import { SectionHeading } from "@/components/sections/SectionHeading";
import type { AboutCapitals } from "@/types/about";

import { CapitalBoard } from "./CapitalBoard";

type CapitalSectionProps = {
  capitals: AboutCapitals;
};

export function CapitalSection({ capitals }: CapitalSectionProps) {
  const { heading } = capitals;

  return (
    <section aria-labelledby="capitals-heading" className="page-section about-capitals">
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large"
          description={heading.description}
          eyebrow={heading.eyebrow}
          id="capitals-heading"
          title={heading.title}
        />
        <CapitalBoard
          coreCaption={capitals.coreCaption}
          coreLabel={capitals.coreLabel}
          dimensions={capitals.dimensions}
        />
      </div>
    </section>
  );
}
