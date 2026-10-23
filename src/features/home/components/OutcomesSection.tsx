import Image from "next/image";

import { SectionHeading } from "@/components/sections/SectionHeading";
import type { HomeOutcomes } from "@/types/home";

type OutcomesSectionProps = {
  outcomes: HomeOutcomes;
};

/** What participants gain, then the roles they step into; each row rises in card by card. */
export function OutcomesSection({ outcomes }: OutcomesSectionProps) {
  const { heading } = outcomes;

  return (
    <section
      aria-labelledby="outcomes-heading"
      className="page-section page-section--ruled home-outcomes"
      id="outcomes"
    >
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

        <ul className="outcome-shifts">
          {outcomes.shifts.map((shift, index) => (
            <li data-reveal="up" data-reveal-delay={index} key={shift.title}>
              <article className="outcome-shift">
                <div className="outcome-shift__media">
                  {/* Decorative: the title beside it carries the meaning. */}
                  <Image
                    alt=""
                    fill
                    sizes="(max-width: 720px) 240px, 320px"
                    src={shift.imageSrc}
                    style={{ objectPosition: shift.imagePosition }}
                  />
                </div>
                <div className="outcome-shift__body">
                  <h3>{shift.title}</h3>
                  <p>{shift.summary}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <h3 className="home-outcomes__roles-title" data-reveal="up">
          {outcomes.rolesTitle}
        </h3>
        <ul className="outcome-roles">
          {outcomes.roles.map((role, index) => (
            <li data-reveal="up" data-reveal-delay={index} key={role.title}>
              <figure className="outcome-role">
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
