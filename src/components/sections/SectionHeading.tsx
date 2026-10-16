import type { ReactNode } from "react";

import { RevealLines } from "@/components/ui/RevealLines";

type SectionHeadingProps = {
  id: string;
  title: string;
  /** Highlighted tail of the title; omit for a single-tone heading. */
  accent?: string;
  eyebrow?: ReactNode;
  description?: string;
  align?: "center" | "start";
  className?: string;
};

/** Eyebrow with a drawn underline, a two-tone headline that rises line by line, and a summary. */
export function SectionHeading({
  id,
  title,
  accent,
  eyebrow,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}${className ? ` ${className}` : ""}`}>
      {eyebrow ? (
        <p className="section-heading__eyebrow" data-reveal="eyebrow">
          {eyebrow}
        </p>
      ) : null}
      <h2 data-reveal="lines" id={id}>
        <RevealLines text={title} />
        {accent ? (
          <>
            {" "}
            <span className="section-heading__accent">
              <RevealLines text={accent} />
            </span>
          </>
        ) : null}
      </h2>
      {description ? (
        <p className="section-heading__summary" data-reveal="rise" data-reveal-delay="2">
          {description}
        </p>
      ) : null}
    </div>
  );
}
