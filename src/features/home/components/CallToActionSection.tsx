import Image from "next/image";
import Link from "next/link";

import { RevealLines } from "@/components/ui/RevealLines";
import type { HomeCallToAction } from "@/types/home";

type CallToActionSectionProps = {
  callToAction: HomeCallToAction;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="button__arrow" viewBox="0 0 16 16">
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

/** A drawn sunrise over layered ridges, with a lone figure on the near peak, until a photo is supplied. */
function SunriseArt() {
  return (
    <svg className="home-cta__art" preserveAspectRatio="xMidYMid slice" viewBox="0 0 600 400">
      <defs>
        <linearGradient id="cta-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#2c4a7c" />
          <stop offset="0.45" stopColor="#b9718a" />
          <stop offset="0.72" stopColor="#f2a25c" />
          <stop offset="1" stopColor="#ffd79a" />
        </linearGradient>
        <radialGradient id="cta-sun" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#fffbe9" />
          <stop offset="0.35" stopColor="#ffe3a1" stopOpacity="0.95" />
          <stop offset="1" stopColor="#ffb764" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect fill="url(#cta-sky)" height="400" width="600" />
      <circle className="home-cta__sun-glow" cx="440" cy="230" fill="url(#cta-sun)" r="120" />
      <circle cx="440" cy="230" fill="#fff6d8" r="26" />
      <path d="M0 262 70 214l58 30 76-62 70 52 64-40 86 56 78-44 98 58v136H0Z" fill="#8a6f8e" opacity="0.55" />
      <ellipse className="home-cta__mist home-cta__mist--far" cx="300" cy="268" fill="#fff" opacity="0.32" rx="300" ry="16" />
      <path d="M0 300 90 250l62 34 88-60 84 62 70-34 96 52 110-40v176H0Z" fill="#4c4466" opacity="0.85" />
      <ellipse className="home-cta__mist home-cta__mist--near" cx="280" cy="318" fill="#fff" opacity="0.28" rx="320" ry="18" />
      <path d="M0 400V332l120-40 70 30 86-74 34 6 22-10 62 54 90 26 116-16v92Z" fill="#1d2135" />
      {/* A lone climber on the summit, looking out at the sun. */}
      <path
        d="M311 238c3.4 0 5.6-2.4 5.6-5.4s-2.2-5.4-5.6-5.4-5.6 2.4-5.6 5.4 2.2 5.4 5.6 5.4Zm-7 2.6c-3 1.2-4.6 4-4.8 7.6l-.6 13.4 3.8.6 1.6-11.4.6 15.4-2.4 18.8h5.2l3-16.6 2.8 16.6h5.2l-2.2-19.2.4-15.4 1.4 11.2 3.8-.6-.8-13.6c-.2-3.4-1.8-6-4.8-7.2l-2.2-.8h-7.2Z"
        fill="#141726"
      />
    </svg>
  );
}

/** Closing invitation: copy on a soft royal wash that fades into a sunrise on the right. */
export function CallToActionSection({ callToAction }: CallToActionSectionProps) {
  return (
    <section aria-labelledby="home-cta-heading" className="page-section home-cta">
      <div className="section-shell">
        <div className="home-cta__panel" data-reveal="zoom">
          <div className="home-cta__content">
            <p className="home-cta__eyebrow">{callToAction.eyebrow}</p>
            <h2 data-reveal="lines" id="home-cta-heading">
              <RevealLines text={callToAction.title} />{" "}
              <span className="section-heading__accent">
                <RevealLines text={callToAction.accent} />
              </span>
            </h2>
            <p className="home-cta__summary">{callToAction.summary}</p>
            <div className="home-cta__actions">
              <Link className="button button--primary" data-boom-click="" href={callToAction.primaryAction.href}>
                {callToAction.primaryAction.label}
                <ArrowIcon />
              </Link>
              <Link className="button home-cta__secondary" data-boom-click="" href={callToAction.secondaryAction.href}>
                {callToAction.secondaryAction.label}
              </Link>
            </div>
          </div>

          <div aria-hidden="true" className="home-cta__visual">
            {callToAction.imageSrc ? (
              <Image alt="" fill sizes="(max-width: 760px) 100vw, 560px" src={callToAction.imageSrc} />
            ) : (
              <SunriseArt />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
