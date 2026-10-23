import Image from "next/image";

import { SectionHeading } from "@/components/sections/SectionHeading";
import type { HomeOutcomes } from "@/types/home";

type OutcomesSectionProps = {
  outcomes: HomeOutcomes;
};

/** The roles participants step into: tall photos with the role set over a dark fade, rising in turn. */
export function OutcomesSection({ outcomes }: OutcomesSectionProps) {
  const { heading } = outcomes;

  return (
    <section aria-labelledby="outcomes-heading" className="page-section home-outcomes" id="outcomes">
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large section-heading--light"
          description={heading.description}
          eyebrow={heading.eyebrow}
          id="outcomes-heading"
          title={heading.title}
        />

        <ul className="outcome-roles">
          {outcomes.roles.map((role, index) => (
            <li data-reveal="up" data-reveal-delay={index} key={role.title}>
              <figure className="outcome-role">
                {/* Decorative: the caption names the role. */}
                <Image
                  alt=""
                  fill
                  sizes="600px"
                  src={role.imageSrc}
                  style={{ objectPosition: role.imagePosition }}
                />
                <figcaption>{role.title}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
