import Image from "next/image";

import { RevealLines } from "@/components/ui/RevealLines";
import type { Program } from "@/types/program";

type RecognitionSectionProps = {
  recognition: Program["recognition"];
};

function RecognitionBadgeIcon({ badge }: { badge: string }) {
  if (badge === "LinkedIn Ready") {
    return (
      <svg aria-hidden="true" className="recognition-badges__icon" viewBox="0 0 24 24">
        <circle cx="5" cy="5" r="1.75" />
        <path d="M3.25 9.25h3.5v11.5h-3.5zM10.25 20.75V9.25h3.5v1.6c.9-1.25 2.15-1.9 3.6-1.9 2.35 0 3.4 1.55 3.4 4.45v7.35h-3.5v-6.6c0-1.4-.5-2.1-1.5-2.1-1.25 0-2 1-2 2.65v6.05z" />
      </svg>
    );
  }

  if (badge === "Digital Badge") {
    return (
      <svg aria-hidden="true" className="recognition-badges__icon" viewBox="0 0 24 24">
        <circle cx="12" cy="8.5" r="5" />
        <path d="m8.8 12.3-1.25 8.2L12 18l4.45 2.5-1.25-8.2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="recognition-badges__icon" viewBox="0 0 24 24">
      <path d="m12 2.75 2.05 1.45 2.5-.25.95 2.3 2.25 1.15-.25 2.5 1.45 2.1-1.45 2.05.25 2.5-2.25 1.15-.95 2.3-2.5-.25L12 21.25 9.95 19.8l-2.5.25-.95-2.3-2.25-1.15.25-2.5L3.05 12 4.5 9.95l-.25-2.5L6.5 6.3l.95-2.3 2.5.25L12 2.75Z" />
      <path d="m8.75 12.1 2.05 2.05 4.45-4.55" />
    </svg>
  );
}

export function RecognitionSection({ recognition }: RecognitionSectionProps) {
  return (
    <section
      aria-labelledby="recognition-heading"
      className="page-section page-section--ruled program-recognition"
      id="recognition"
    >
      <div className="section-shell program-recognition__inner">
        <div className="section-heading section-heading--start section-heading--large section-heading--light">
          <p className="section-heading__eyebrow" data-reveal="eyebrow">
            {recognition.eyebrow}
          </p>
          <h2 data-reveal="lines" id="recognition-heading">
            <span className="program-recognition__line">
              <RevealLines text={recognition.titleStart} />{" "}
              <span className="section-heading__accent">
                <RevealLines text={recognition.accent} />
              </span>
            </span>{" "}
            <span className="program-recognition__line">
              <RevealLines text={recognition.titleEnd} />
            </span>
          </h2>
          <p className="section-heading__summary" data-reveal="rise" data-reveal-delay="2">
            {recognition.summary}
          </p>

          <ul className="recognition-badges" data-reveal-children="">
            {recognition.badges.map((badge) => (
              <li key={badge}>
                <RecognitionBadgeIcon badge={badge} />
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div
          aria-label={`Sample Canada School of Leadership certificate for the ${recognition.certificateProgram}, with its digital badge`}
          className={`certificate-stack${recognition.imageSrc ? " certificate-stack--image" : ""}`}
          data-reveal="zoom"
          data-reveal-delay="2"
          role="img"
        >
          {recognition.imageSrc ? (
            <Image
              alt={recognition.imageAlt ?? ""}
              fill
              sizes="(max-width: 400px) 100vw, 350px"
              src={recognition.imageSrc}
            />
          ) : (
            <>
              <div aria-hidden="true" className="certificate">
                <span className="certificate__brand">Canada School of Leadership</span>
                <span className="certificate__kind">Executive Certificate</span>
                <span className="certificate__line">This is to certify that</span>
                <span className="certificate__name">Your Name</span>
                <span className="certificate__line">has successfully completed the</span>
                <span className="certificate__program">{recognition.certificateProgram}</span>
                <span className="certificate__signatures">
                  <span />
                  <span />
                </span>
              </div>
              <div aria-hidden="true" className="certificate-badge">
                <span className="certificate-badge__brand">CSL</span>
                <span>{recognition.certificateProgram}</span>
                <span className="certificate-badge__seal">✓</span>
                <span className="certificate-badge__verified">Verified Credential</span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
