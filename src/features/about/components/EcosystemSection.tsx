import { SectionHeading } from "@/components/sections/SectionHeading";
import { LineIcon } from "@/components/ui/LineIcon";
import type { AboutEcosystem } from "@/types/about";

type EcosystemSectionProps = {
  ecosystem: AboutEcosystem;
};

export function EcosystemSection({ ecosystem }: EcosystemSectionProps) {
  const { heading, systems } = ecosystem;

  return (
    <section aria-labelledby="ecosystem-heading" className="page-section about-ecosystem">
      <div className="section-shell">
        <SectionHeading
          accent={heading.accent}
          align="start"
          className="section-heading--large section-heading--light"
          description={heading.description}
          eyebrow={heading.eyebrow}
          id="ecosystem-heading"
          title={heading.title}
        />

        {/* The first system is featured; hovering or focusing another hands the highlight over. */}
        <ol className="ecosystem-grid" data-reveal-children="">
          {systems.map((system, index) => (
            <li
              className={`ecosystem-card${index === 0 ? " ecosystem-card--featured" : ""}`}
              key={system.title}
              tabIndex={0}
            >
              <span aria-hidden="true" className="ecosystem-card__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="ecosystem-card__icon">
                <LineIcon name={system.icon} />
              </span>
              <p className="ecosystem-card__tag">{system.tag}</p>
              <h3>{system.title}</h3>
              <ul>
                {system.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <span aria-hidden="true" className="ecosystem-card__rule" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
