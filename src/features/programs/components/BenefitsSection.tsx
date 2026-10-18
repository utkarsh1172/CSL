import Image from "next/image";

import { SectionHeading } from "@/components/sections/SectionHeading";
import type { Program } from "@/types/program";

import { JourneyPath } from "./JourneyPath";

type BenefitsSectionProps = {
  benefits: Program["benefits"];
};

export function BenefitsSection({ benefits }: BenefitsSectionProps) {
  const { heading } = benefits;

  return (
    <section aria-labelledby="benefits-heading" className="page-section program-benefits" id="benefits">
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large section-heading--light"
          description={heading.description}
          eyebrow={heading.eyebrow}
          id="benefits-heading"
          title={heading.title}
        />

        <div className="benefits-layout">
          {/* The first outcome is featured; hovering or focusing another hands the highlight over. */}
          <ol className="benefit-list" data-reveal-children="">
            {benefits.items.map((benefit, index) => (
              <li
                className={`benefit-item${index === 0 ? " benefit-item--featured" : ""}`}
                key={benefit.title}
                tabIndex={0}
              >
                <span aria-hidden="true" className="benefit-item__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.detail}</p>
                </span>
              </li>
            ))}
          </ol>

          <figure className="journey-media journey-media--tall" data-reveal="zoom" data-reveal-delay="2">
            <Image alt={benefits.imageAlt} fill sizes="(max-width: 900px) 100vw, 340px" src={benefits.imageSrc} />
            <JourneyPath stages={benefits.journey} />
          </figure>
        </div>
      </div>
    </section>
  );
}
