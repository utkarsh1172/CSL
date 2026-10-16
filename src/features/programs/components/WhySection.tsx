import Image from "next/image";

import { SectionHeading } from "@/components/sections/SectionHeading";
import type { ProgramWhy } from "@/types/program";

type WhySectionProps = {
  why: ProgramWhy;
};

export function WhySection({ why }: WhySectionProps) {
  return (
    <section
      aria-labelledby="why-heading"
      className="program-section program-section--ruled program-why"
    >
      <div className="section-shell">
        <SectionHeading
          align="start"
          className="program-heading program-why__heading"
          eyebrow={why.eyebrow}
          id="why-heading"
          title={why.statement}
        />

        <figure className="program-why__media" data-reveal="zoom" data-reveal-delay="2">
          <Image alt={why.imageAlt} fill sizes="(max-width: 900px) 100vw, 790px" src={why.imageSrc} />
        </figure>

        <ul className="program-why__gaps" data-reveal-children="">
          {why.gaps.map((gap) => (
            <li key={gap}>
              <span aria-hidden="true">X</span>
              {gap}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
