import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import { BoomCounter } from "@/components/ui/BoomCounter";
import { RevealLines } from "@/components/ui/RevealLines";
import type { HomeHero as HomeHeroContent } from "@/types/home";

type HomeHeroProps = {
  hero: HomeHeroContent;
};

export function HomeHero({ hero }: HomeHeroProps) {
  return (
    <section aria-labelledby="home-heading" className="home-hero">
      <div className="home-hero__visual">
        <Image alt={hero.imageAlt} fill priority sizes="100vw" src={hero.imageSrc} />
      </div>

      <div className="section-shell home-hero__inner">
        <div className="home-hero__content">
          <p className="home-hero__eyebrow" data-reveal="eyebrow">
            {hero.eyebrow}
          </p>

          <h1 data-reveal="lines" id="home-heading">
            <RevealLines text={hero.title} />{" "}
            {/* One rising unit on its own line, so the gradient sweeps across the whole phrase. */}
            <span className="home-hero__line">
              <span className="reveal-word text-gradient-sweep home-hero__accent">{hero.accent}</span>
            </span>
          </h1>

          <div className="home-hero__summary" data-reveal="rise">
            {hero.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="home-hero__actions" data-reveal="rise">
            <p className="home-hero__rating">
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

        <p className="home-hero__audience" data-reveal="right" data-reveal-delay="5">
          {hero.audience.label}{" "}
          {hero.audience.roles.map((role, index) => (
            <Fragment key={role}>
              {index > 0 ? <span aria-hidden="true"> . </span> : null}
              <strong>{role}</strong>
              {index < hero.audience.roles.length - 1 ? <span className="sr-only">,</span> : null}
            </Fragment>
          ))}
        </p>

        {/* Each figure counts up once the panel is in view. */}
        <dl className="home-hero__stats" data-reveal="left" data-reveal-delay="4">
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
