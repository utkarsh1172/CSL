import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

import { BoomCounter } from "@/components/ui/BoomCounter";
import { RevealLines } from "@/components/ui/RevealLines";
import type { HomeHero as HomeHeroContent } from "@/types/home";

type HomeHeroProps = {
  hero: HomeHeroContent;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="button__arrow" viewBox="0 0 16 16">
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" className="hero-card__chevron" viewBox="0 0 12 12">
      <path d="m4.5 2.5 3.5 3.5-3.5 3.5" />
    </svg>
  );
}

/**
 * The partnership pitch on a pale sky wash. Beside it, an executive portrait with the activation
 * steps on a floating card over its corner and two linked cards alongside; the headline numbers
 * count up along the foot.
 */
export function HomeHero({ hero }: HomeHeroProps) {
  return (
    <section aria-labelledby="home-heading" className="home-hero">
      <div className="section-shell">
        <div className="home-hero__inner">
          <div className="home-hero__content">
            <p className="home-hero__eyebrow" data-reveal="up">
              {hero.eyebrow}
            </p>

            <h1 data-reveal="lines" id="home-heading">
              <RevealLines text={hero.title} />{" "}
              {/* One rising unit on its own line, so the gradient sweeps across the whole word. */}
              <span className="home-hero__line">
                <span className="reveal-word text-gradient-sweep home-hero__accent">{hero.accent}</span>
              </span>
            </h1>

            <p className="home-hero__summary" data-reveal="rise">
              {hero.summary}
            </p>

            <div className="home-hero__actions" data-reveal="rise">
              <Link className="button button--primary" data-boom-click="" href={hero.primaryAction.href}>
                {hero.primaryAction.label}
                <ArrowIcon />
              </Link>
              <Link className="button home-hero__secondary" data-boom-click="" href={hero.secondaryAction.href}>
                {hero.secondaryAction.label}
              </Link>
            </div>
          </div>

          <div className="home-hero__visual">
            <div className="home-hero__portrait-frame" data-reveal="zoom" data-reveal-delay="2">
              <figure className="home-hero__portrait">
                <Image
                  alt={hero.portrait.imageAlt}
                  fetchPriority="high"
                  fill
                  loading="eager"
                  sizes="(max-width: 1000px) 70vw, 380px"
                  src={hero.portrait.imageSrc}
                  style={{ objectPosition: hero.portrait.imagePosition }}
                />
              </figure>

              {/* The four steps light up in turn, echoing the activation timeline further down. */}
              <Link className="home-hero__journey" href={hero.journey.href}>
                <span className="home-hero__journey-steps">
                  {hero.journey.steps.map((step, index) => (
                    <span key={step} style={{ "--step-index": index } as CSSProperties}>
                      {step}
                    </span>
                  ))}
                </span>
                <span className="sr-only">: {hero.journey.label}</span>
                <span aria-hidden="true" className="home-hero__journey-go">
                  <ArrowIcon />
                </span>
              </Link>
            </div>

            <ul className="home-hero__cards">
              {hero.cards.map((card, index) => (
                <li data-reveal="left" data-reveal-delay={3 + index} key={card.title}>
                  <Link className="hero-card" href={card.href}>
                    <span className="hero-card__media">
                      {/* Decorative: the title under it names the link. */}
                      <Image
                        alt=""
                        fill
                        loading="eager"
                        sizes="(max-width: 1000px) 45vw, 280px"
                        src={card.imageSrc}
                        style={{ objectPosition: card.imagePosition }}
                      />
                    </span>
                    <span className="hero-card__title">
                      {card.title}
                      <ChevronIcon />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Each figure counts up once the row is in view. */}
        <dl className="home-hero__stats" data-reveal="up" data-reveal-delay="3">
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
