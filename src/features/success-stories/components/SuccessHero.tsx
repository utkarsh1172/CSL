import Image from "next/image";
import type { CSSProperties } from "react";

import { BoomCounter } from "@/components/ui/BoomCounter";
import { RevealLines } from "@/components/ui/RevealLines";
import type { SuccessStoriesContent } from "@/types/success-story";

type SuccessHeroProps = {
  hero: SuccessStoriesContent["hero"];
};

// Representative portraits are decorative; the adjacent count carries the alumni meaning.
const alumniPortraits = [
  {
    src: "/images/pages/success-stories/alumni/alumni-troy-spoelma.jpg",
    position: "50% 42%",
  },
  {
    src: "/images/pages/success-stories/alumni/alumni-tony-luginsland.jpg",
    position: "50% 28%",
  },
  {
    src: "/images/pages/success-stories/alumni/alumni-ryan-hoffman.jpg",
    position: "50% 32%",
    scale: 1.55,
  },
  {
    src: "/images/pages/success-stories/alumni/alumni-vitaly-gariev.jpg",
    position: "66% 42%",
  },
  {
    src: "/images/pages/success-stories/alumni/alumni-annika-palmari.jpg",
    position: "50% 28%",
  },
  {
    src: "/images/pages/success-stories/alumni/alumni-dwayne-joe.jpg",
    position: "50% 28%",
  },
] as const;

export function SuccessHero({ hero }: SuccessHeroProps) {
  return (
    <section aria-labelledby="success-heading" className="success-hero">
      <div className="success-hero__visual">
        <Image alt={hero.imageAlt} fill preload sizes="(max-width: 900px) 100vw, 58vw" src={hero.imageSrc} />
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
            {alumniPortraits.map((portrait, index) => (
              <span
                className="success-hero__avatar"
                data-pop=""
                key={portrait.src}
                style={
                  {
                    "--avatar-position": portrait.position,
                    "--avatar-scale": "scale" in portrait ? portrait.scale : 1,
                    "--grow-index": index,
                  } as CSSProperties
                }
              >
                <Image alt="" fill loading="eager" sizes="56px" src={portrait.src} />
              </span>
            ))}
          </span>
          <span
            className="success-hero__count"
            data-pop=""
            style={{ "--grow-index": alumniPortraits.length } as CSSProperties}
          >
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
