import Image from "next/image";

import { SectionHeading } from "@/components/sections/SectionHeading";
import type { Program } from "@/types/program";

import { CurriculumMonths } from "./CurriculumMonths";
import { JourneyPath } from "./JourneyPath";

type CurriculumSectionProps = {
  curriculum: Program["curriculum"];
};

export function CurriculumSection({ curriculum }: CurriculumSectionProps) {
  const { heading } = curriculum;

  return (
    <section
      aria-labelledby="curriculum-heading"
      className="page-section page-section--ruled program-curriculum"
      id="curriculum"
    >
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large section-heading--light"
          eyebrow={heading.eyebrow}
          id="curriculum-heading"
          title={heading.title}
        />

        <figure className="journey-media" data-reveal="zoom" data-reveal-delay="2">
          <Image alt={curriculum.imageAlt} fill sizes="(max-width: 900px) 100vw, 720px" src={curriculum.imageSrc} />
          <JourneyPath stages={curriculum.journey} />
        </figure>

        <CurriculumMonths months={curriculum.months} />
      </div>
    </section>
  );
}
