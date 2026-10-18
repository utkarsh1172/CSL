import { SectionHeading } from "@/components/sections/SectionHeading";
import { ExpandableList } from "@/components/ui/ExpandableList";
import type { SuccessStoriesContent } from "@/types/success-story";

import { CaseStudyCard } from "./CaseStudyCard";

type CaseStudiesSectionProps = {
  caseStudies: SuccessStoriesContent["caseStudies"];
};

export function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  const { heading } = caseStudies;

  return (
    <section aria-labelledby="case-studies-heading" className="page-section success-cases" id="case-studies">
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large section-heading--light"
          description={heading.description}
          eyebrow={heading.eyebrow}
          id="case-studies-heading"
          title={heading.title}
        />
        <ExpandableList
          className="case-grid"
          items={caseStudies.items.map((study, index) => ({
            key: `${study.client}-${index}`,
            node: <CaseStudyCard study={study} />,
          }))}
        />
      </div>
    </section>
  );
}
