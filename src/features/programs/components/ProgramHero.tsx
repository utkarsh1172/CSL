import Image from "next/image";
import Link from "next/link";

import { BoomCounter } from "@/components/ui/BoomCounter";
import { RevealLines } from "@/components/ui/RevealLines";
import type { ProgramHero as ProgramHeroContent } from "@/types/program";

type ProgramHeroProps = {
  hero: ProgramHeroContent;
};

export function ProgramHero({ hero }: ProgramHeroProps) {
  return (
    <section aria-labelledby="program-heading" className="program-hero">
      <div className="program-hero__visual">
        <Image alt={hero.imageAlt} fill priority sizes="100vw" src={hero.imageSrc} />
      </div>

      <div className="section-shell program-hero__inner">
        <div className="program-hero__content">
          <p className="program-hero__eyebrow" data-reveal="eyebrow">
            {hero.eyebrow}
          </p>

          <h1 data-reveal="lines" id="program-heading">
            <span className="program-hero__line">
              <RevealLines text={hero.title} />
            </span>{" "}
            {/* One rising unit, so the gradient sweeps across the whole phrase rather than per word. */}
            <span className="program-hero__line">
              <span className="reveal-word text-gradient-sweep program-hero__accent">{hero.accent}</span>
            </span>
          </h1>

          <p className="program-hero__summary" data-reveal="rise">
            {hero.summary}
          </p>
          <p className="program-hero__statement" data-reveal="rise">
            {hero.statement}
          </p>

          <div className="program-hero__actions" data-reveal="rise">
            <p className="program-hero__rating">
              *Rated <BoomCounter value={hero.rating} />
            </p>
            <div>
              <Link className="button button--primary" data-boom-click="" href="/contact">
                Start Your Journey
              </Link>
              <a className="button button--light" data-boom-click="" href="#talk-to-advisor">
                Schedule a Free Call
              </a>
            </div>
          </div>
        </div>

        {/* Each figure counts up once the panel is in view. */}
        <dl className="program-hero__stats" data-reveal="left" data-reveal-delay="4">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>
                <BoomCounter value={stat.value} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
