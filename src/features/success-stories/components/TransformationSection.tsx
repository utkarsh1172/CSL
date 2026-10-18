import Image from "next/image";
import type { CSSProperties } from "react";

import { RevealLines } from "@/components/ui/RevealLines";
import type { SuccessStoriesContent } from "@/types/success-story";

type TransformationSectionProps = {
  transformation: SuccessStoriesContent["transformation"];
};

export function TransformationSection({ transformation }: TransformationSectionProps) {
  return (
    <section aria-labelledby="transformation-heading" className="page-section success-transformation">
      <div className="section-shell">
        <div className="transformation-card" data-reveal="zoom">
          <div aria-hidden="true" className="transformation-card__visual">
            <Image alt="" fill sizes="(max-width: 900px) 100vw, 800px" src={transformation.imageSrc} />
          </div>

          <div className="transformation-card__copy">
            <h2 data-reveal="lines" id="transformation-heading">
              <RevealLines text={transformation.title} />
            </h2>
            <p>{transformation.summary}</p>
            <h3>{transformation.outcomesLabel}</h3>
            <ul className="transformation-card__outcomes">
              {transformation.outcomes.map((outcome, index) => (
                <li data-pop="" key={outcome} style={{ "--grow-index": index } as CSSProperties}>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          {/* Each stage of the journey arrives in turn, linked by arrows. */}
          <ol
            aria-label={transformation.journey.join(", then ")}
            className="transformation-card__journey"
          >
            {transformation.journey.map((stage, index) => (
              <li key={stage}>
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="transformation-card__step-arrow"
                    data-pop=""
                    style={{ "--grow-index": index * 2 + 2 } as CSSProperties}
                  >
                    →
                  </span>
                ) : null}
                <span data-pop="" style={{ "--grow-index": index * 2 + 3 } as CSSProperties}>
                  {stage}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
