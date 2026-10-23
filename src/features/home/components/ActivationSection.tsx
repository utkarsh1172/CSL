import type { CSSProperties } from "react";

import { SectionHeading } from "@/components/sections/SectionHeading";
import type { HomeActivation } from "@/types/home";

type ActivationSectionProps = {
  activation: HomeActivation;
};

/**
 * Five steps on one line. When the timeline scrolls into view the line draws itself in and each
 * node pops as the line reaches it; afterwards a light keeps travelling the line and every node
 * ripples as it passes, so the system reads as live. Stacks into a vertical timeline on phones.
 */
export function ActivationSection({ activation }: ActivationSectionProps) {
  const { heading } = activation;

  return (
    <section
      aria-labelledby="activation-heading"
      className="page-section home-activation"
      id="how-it-works"
    >
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large section-heading--light"
          description={heading.description}
          eyebrow={heading.eyebrow}
          id="activation-heading"
          title={heading.title}
        />

        <div className="activation" data-reveal="grow">
          <div aria-hidden="true" className="activation__track">
            <span className="activation__progress" />
            <span className="activation__spark" />
          </div>

          <ol className="activation__steps">
            {activation.steps.map((step, index) => (
              <li
                className="activation__step"
                key={step.title}
                style={{ "--step-index": index } as CSSProperties}
              >
                <span aria-hidden="true" className="activation__node">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.summary}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
