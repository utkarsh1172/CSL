import Image from "next/image";
import type { CSSProperties } from "react";

import { BoomCounter } from "@/components/ui/BoomCounter";
import { LineIcon } from "@/components/ui/LineIcon";
import { RevealLines } from "@/components/ui/RevealLines";
import type { SuccessStoriesContent } from "@/types/success-story";

type SuccessHeroProps = {
  hero: SuccessStoriesContent["hero"];
};

// Decorative alumni badges; the count beside them carries the meaning.
const avatarCount = 6;

export function SuccessHero({ hero }: SuccessHeroProps) {
  return (
    <section aria-labelledby="success-heading" className="success-hero">
      <div className="success-hero__visual">
        <Image alt={hero.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 55vw" src={hero.imageSrc} />
      </div>

      <div className="section-shell success-hero__inner">
        <p className="success-hero__eyebrow" data-reveal="eyebrow">
          {hero.eyebrow}
        </p>

        <h1 data-reveal="lines" id="success-heading">
          <span className="success-hero__line">
            <RevealLines text={hero.title} />
          </span>{" "}
          {/* One rising unit, so the gradient sweeps across the whole phrase rather than per word. */}
          <span className="success-hero__line">
            <span className="reveal-word text-gradient-sweep success-hero__accent">{hero.accent}</span>
          </span>
        </h1>

        <p className="success-hero__summary" data-reveal="rise">
          {hero.summary}
        </p>

        {/* Badges pop in one after another, then the count rolls up. */}
        <div className="success-hero__alumni" data-reveal="rise">
          <span aria-hidden="true" className="success-hero__avatars">
            {Array.from({ length: avatarCount }, (_, index) => (
              <span
                className="success-hero__avatar"
                data-pop=""
                key={index}
                style={{ "--grow-index": index } as CSSProperties}
              >
                <LineIcon name="user" />
              </span>
            ))}
          </span>
          <span className="success-hero__count" data-pop="" style={{ "--grow-index": avatarCount } as CSSProperties}>
            <BoomCounter value={hero.alumniCount} />
            <span className="sr-only"> {hero.alumniLabel}</span>
          </span>
        </div>

        <div className="success-hero__actions" data-reveal="rise">
          <a className="button button--primary" data-boom-click="" href="#case-studies">
            Explore Success Stories
          </a>
          <a className="button button--light" data-boom-click="" href="#talk-to-advisor">
            Schedule a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
