import { SectionHeading } from "@/components/sections/SectionHeading";
import { BoomCounter } from "@/components/ui/BoomCounter";
import { LineIcon } from "@/components/ui/LineIcon";
import type { Program } from "@/types/program";

type DeliverablesSectionProps = {
  deliverables: Program["deliverables"];
};

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="deliverable-panel__check" viewBox="0 0 12 12">
      <path d="m2.2 6.4 2.5 2.5 5.1-5.6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="button__arrow" viewBox="0 0 16 16">
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

const panelTones = ["blue", "green"] as const;

export function DeliverablesSection({ deliverables }: DeliverablesSectionProps) {
  const { heading, fee, payment, scholarship } = deliverables;

  return (
    <section aria-labelledby="deliverables-heading" className="page-section program-deliverables" id="deliverables">
      <div className="section-shell">
        <SectionHeading
          align="start"
          className="section-heading--large"
          eyebrow={heading.eyebrow}
          id="deliverables-heading"
          title={heading.title}
        />

        <div className="deliverable-panels">
          {deliverables.panels.map((panel, index) => (
            <article
              className={`deliverable-panel deliverable-panel--${panelTones[index]}`}
              data-reveal="card"
              data-reveal-delay={String(index + 1)}
              key={panel.title}
            >
              <header>
                <span className="deliverable-panel__icon">
                  <LineIcon name={panel.icon} />
                </span>
                <span>
                  <h3>{panel.title}</h3>
                  <p>{panel.subtitle}</p>
                </span>
              </header>
              <ul data-reveal-children="">
                {panel.items.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Fee banner: the figures count up once it scrolls into view. */}
        <div className="fee-banner" data-reveal="zoom">
          <dl className="fee-banner__facts">
            <div>
              <dt>{fee.label}</dt>
              <dd className="fee-banner__figure">
                <BoomCounter value={fee.value} />
              </dd>
            </div>
            <div>
              <dt>{payment.label}</dt>
              <dd>{payment.detail}</dd>
            </div>
            <div>
              <dt>{scholarship.label}</dt>
              <dd className="fee-banner__figure">
                <BoomCounter value={scholarship.value} />
              </dd>
            </div>
          </dl>
          <div className="fee-banner__enquiry">
            <span>{deliverables.enquiryLabel}</span>
            <a className="fee-banner__cta" data-boom-click="" href="#talk-to-advisor">
              Talk to an Advisor
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
