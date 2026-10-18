import type { ReactNode } from "react";

import { RevealLines } from "@/components/ui/RevealLines";

type LeadCardProps = {
  headingId: string;
  title: string;
  /** Highlighted tail of the title; omit for a single-tone heading. */
  accent?: string;
  eyebrow?: string;
  intro?: string;
  /** "compact" trims padding and type so the card fits a narrow sticky sidebar. */
  variant?: "default" | "compact";
  className?: string;
  /** The form, usually a LeadForm. */
  children: ReactNode;
};

/** Cream "Get Started" card that frames a lead form beside page copy. */
export function LeadCard({
  headingId,
  title,
  accent,
  eyebrow = "Get Started",
  intro,
  variant = "default",
  className,
  children,
}: LeadCardProps) {
  return (
    <aside
      aria-labelledby={headingId}
      className={`lead-card lead-card--${variant}${className ? ` ${className}` : ""}`}
      data-reveal="card"
      data-reveal-delay="2"
    >
      <p className="lead-card__eyebrow">{eyebrow}</p>
      <h2 data-reveal="lines" id={headingId}>
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
      {intro ? <p className="lead-card__intro">{intro}</p> : null}
      {children}
    </aside>
  );
}
