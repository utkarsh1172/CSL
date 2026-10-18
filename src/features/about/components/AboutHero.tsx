import Image from "next/image";
import Link from "next/link";

import { BoomCounter } from "@/components/ui/BoomCounter";
import { RevealLines } from "@/components/ui/RevealLines";
import type { AboutHero as AboutHeroContent } from "@/types/about";

type AboutHeroProps = {
  hero: AboutHeroContent;
};

export function AboutHero({ hero }: AboutHeroProps) {
  return (
    <section aria-labelledby="about-heading" className="about-hero">
      <div className="about-hero__visual">
        <Image alt={hero.imageAlt} fill priority sizes="100vw" src={hero.imageSrc} />
      </div>

      <div className="section-shell about-hero__inner">
        <div className="about-hero__content">
          <p className="about-hero__eyebrow" data-reveal="eyebrow">
            {hero.eyebrow}
          </p>

          <h1 data-reveal="lines" id="about-heading">
            <span className="about-hero__line">
              <RevealLines text={hero.title} />
            </span>{" "}
            {/* One rising unit, so the gradient sweeps across the whole phrase rather than per word. */}
            <span className="about-hero__line">
              <span className="reveal-word text-gradient-sweep about-hero__accent">{hero.accent}</span>
            </span>
          </h1>

          <p className="about-hero__summary" data-reveal="rise">
            {hero.summary}
          </p>
          <p className="about-hero__statement" data-reveal="rise">
            {hero.statement}
          </p>

          <div className="about-hero__actions" data-reveal="rise">
            <p className="about-hero__rating">
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
        <dl className="about-hero__stats" data-reveal="left" data-reveal-delay="4">
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
