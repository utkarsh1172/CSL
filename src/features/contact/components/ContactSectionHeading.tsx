import type { ReactNode } from "react";

import { RevealLines } from "@/components/ui/RevealLines";

type ContactSectionHeadingProps = {
  id: string;
  eyebrow: ReactNode;
  title: string;
  accent: string;
  description?: string;
  align?: "center" | "start";
};

/** Eyebrow with a drawn underline, a two-tone headline that rises line by line, and a summary. */
export function ContactSectionHeading({
  id,
  eyebrow,
  title,
  accent,
  description,
  align = "center",
}: ContactSectionHeadingProps) {
  return (
    <div className={`contact-heading contact-heading--${align}`}>
      <p className="contact-heading__eyebrow" data-reveal="eyebrow">
        {eyebrow}
      </p>
      <h2 data-reveal="lines" id={id}>
        <RevealLines text={title} />{" "}
        <span className="contact-heading__accent">
          <RevealLines text={accent} />
        </span>
      </h2>
      {description ? (
        <p className="contact-heading__summary" data-reveal="rise" data-reveal-delay="2">
          {description}
        </p>
      ) : null}
    </div>
  );
}
