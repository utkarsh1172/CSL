import { RevealLines } from "@/components/ui/RevealLines";
import type { Program } from "@/types/program";

type ProgramCallToActionProps = {
  callToAction: Program["callToAction"];
  brochureHref: string;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="button__arrow" viewBox="0 0 16 16">
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function ProgramCallToAction({ callToAction, brochureHref }: ProgramCallToActionProps) {
  return (
    <section aria-labelledby="program-cta-heading" className="page-section program-cta">
      <div className="section-shell">
        <h2 data-reveal="lines" id="program-cta-heading">
          <RevealLines text={callToAction.title} />{" "}
          <span className="section-heading__accent">
            <RevealLines text={callToAction.accent} />
          </span>
        </h2>
        <div className="program-cta__actions" data-reveal="rise" data-reveal-delay="2">
          <a className="program-cta__button" data-boom-click="" href={brochureHref}>
            Download Brochure
          </a>
          <a className="program-cta__button" data-boom-click="" href="#talk-to-advisor">
            Talk to an Advisor
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
