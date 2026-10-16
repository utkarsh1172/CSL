import { LeadForm } from "@/components/forms/LeadForm";
import { LeadCard } from "@/components/sections/LeadCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import type { Program } from "@/types/program";

import { CapitalBoard } from "./CapitalBoard";

type CapitalSectionProps = {
  capitals: Program["capitals"];
  advisor: Program["advisor"];
};

export function CapitalSection({ capitals, advisor }: CapitalSectionProps) {
  const { heading } = capitals;

  return (
    <section
      aria-labelledby="capitals-heading"
      className="program-section program-capitals"
      id="talk-to-advisor"
    >
      <div className="section-shell program-capitals__inner">
        <div className="program-capitals__main">
          <SectionHeading
            accent={heading.accent}
            align="start"
            className="program-heading"
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

        <LeadCard
          className="program-capitals__card"
          headingId="program-advisor-heading"
          intro={advisor.intro}
          title={advisor.title}
        >
          <LeadForm
            className="lead-form lead-form--light"
            idPrefix="program-advisor"
            submitLabel="Talk to an Advisor"
            withMessage
          />
        </LeadCard>
      </div>
    </section>
  );
}
