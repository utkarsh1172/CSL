import { RevealLines } from "@/components/ui/RevealLines";
import type { Program } from "@/types/program";

type RecognitionSectionProps = {
  recognition: Program["recognition"];
};

function ShareIcon() {
  return (
    <svg aria-hidden="true" className="recognition-badges__icon" viewBox="0 0 24 24">
      <circle cx="18" cy="5" r="2.6" />
      <circle cx="6" cy="12" r="2.6" />
      <circle cx="18" cy="19" r="2.6" />
      <path d="m8.3 10.8 7.4-4.4M8.3 13.2l7.4 4.4" />
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
                {badge}
                <ShareIcon />
              </li>
            ))}
          </ul>
        </div>

        {/* A drawn sample certificate and digital badge; swap for the real artwork when ready. */}
        <div
          aria-label={`Sample Canada School of Leadership certificate for the ${recognition.certificateProgram}, with its digital badge`}
          className="certificate-stack"
          data-reveal="zoom"
          data-reveal-delay="2"
          role="img"
        >
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
        </div>
      </div>
    </section>
  );
}
