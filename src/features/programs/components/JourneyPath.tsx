import { Fragment, type CSSProperties } from "react";

type JourneyPathProps = {
  stages: string[];
  className?: string;
};

/** "A → B → C" stage line laid over a photo; each stage pops in after the one before. */
export function JourneyPath({ stages, className }: JourneyPathProps) {
  return (
    <p className={`journey-path${className ? ` ${className}` : ""}`}>
      {stages.map((stage, index) => (
        <Fragment key={stage}>
          {index > 0 ? (
            <span
              aria-hidden="true"
              className="journey-path__arrow"
              data-pop=""
              style={{ "--grow-index": index * 2 - 1 } as CSSProperties}
            >
              →
            </span>
          ) : null}
          <span data-pop="" style={{ "--grow-index": index * 2 } as CSSProperties}>
            {stage}
          </span>{" "}
        </Fragment>
      ))}
    </p>
  );
}
