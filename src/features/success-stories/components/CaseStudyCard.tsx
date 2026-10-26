import Image from "next/image";
import Link from "next/link";

import type { CaseStudy } from "@/types/success-story";

type CaseStudyCardProps = {
  study: CaseStudy;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="case-card__arrow" viewBox="0 0 24 24">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

/** Portrait card: the photo slowly zooms and the arrow nudges forward on hover. */
export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="case-card">
      <Image
        alt={study.imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 250px"
        src={study.imageSrc}
        style={study.imagePosition ? { objectPosition: study.imagePosition } : undefined}
      />
      <div className="case-card__body">
        <h3>
          {study.client}
          <ArrowIcon />
        </h3>
        <p>
          {study.summary}
          {study.href ? (
            <>
              {" "}
              <Link data-boom-click="" href={study.href}>
                Read More
              </Link>
            </>
          ) : null}
        </p>
      </div>
    </article>
  );
}
