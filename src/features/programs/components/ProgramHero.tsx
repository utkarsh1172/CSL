import Image from "next/image";
import Link from "next/link";

import { BoomCounter } from "@/components/ui/BoomCounter";
import { RevealLines } from "@/components/ui/RevealLines";
import type { Program } from "@/types/program";

type ProgramHeroProps = {
  hero: Program["hero"];
};

export function ProgramHero({ hero }: ProgramHeroProps) {
  const hasBackgroundArtwork = Boolean(hero.backgroundImageSrc);

  return (
    <section
      aria-labelledby="program-heading"
      className={`program-hero${hasBackgroundArtwork ? " program-hero--artwork" : ""}`}
    >
      {hero.backgroundImageSrc ? (
        <div aria-hidden="true" className="program-hero__background">
          <Image alt="" fill preload sizes="100vw" src={hero.backgroundImageSrc} />
        </div>
      ) : null}
      {/* A slow-drifting glow and grid give the dark backdrop a live, technical feel. */}
      <div aria-hidden="true" className="program-hero__backdrop" />
      <div className="program-hero__visual">
        <Image
          alt={hero.imageAlt}
          fill
          loading={hasBackgroundArtwork ? "eager" : undefined}
          preload={!hasBackgroundArtwork}
          sizes="(max-width: 900px) 88vw, 50vw"
          src={hero.imageSrc}
        />
      </div>

      <div className="section-shell program-hero__inner">
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

        <dl className="program-hero__stats" data-reveal="rise">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <dt>
                <span className="program-hero__stat-value">
                  <BoomCounter value={stat.value} />
                </span>
                <span className="program-hero__stat-label">{stat.label}</span>
              </dt>
              <dd>{stat.detail}</dd>
            </div>
          ))}
        </dl>

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
    </section>
  );
}
