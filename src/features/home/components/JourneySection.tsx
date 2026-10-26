import type { CSSProperties } from "react";

import { SectionHeading } from "@/components/sections/SectionHeading";
import type { HomeJourney } from "@/types/home";

type JourneySectionProps = {
  journey: HomeJourney;
};

/** A five-stage CSL journey, alternating around a line and stacking vertically on phones. */
export function JourneySection({ journey }: JourneySectionProps) {
  const { heading, steps } = journey;

  return (
    <section
      aria-labelledby="home-journey-heading"
      className="page-section page-section--ruled home-journey"
      id="csl-journey"
    >
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large section-heading--light home-journey__heading"
          description={heading.description}
          eyebrow={heading.eyebrow}
          id="home-journey-heading"
          suffix={heading.suffix}
          title={heading.title}
        />

        <div className="csl-journey" data-reveal="grow">
          <div aria-hidden="true" className="csl-journey__track">
            <span className="csl-journey__progress" />
            {/* Lights the line from the first stage to the one being pointed at. */}
            <span className="csl-journey__highlight" />
          </div>

          <ol className="csl-journey__steps">
            {steps.map((step, index) => (
              <li
                className={`csl-journey__step csl-journey__step--${index % 2 === 0 ? "above" : "below"}`}
                key={`${step.title}-${index}`}
                style={{ "--journey-step": index } as CSSProperties}
              >
                <div className="csl-journey__card">
                  <h3>{step.title}</h3>
                  <p>{step.summary}</p>
                </div>
                <span aria-hidden="true" className="csl-journey__node">
                  {index + 1}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
