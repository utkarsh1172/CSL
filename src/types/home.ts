/** Two-tone heading copy: `title` renders in ink, `accent` in brand blue. */
export type HomeHeading = {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
};

export type HomeStat = {
  /** Counted up on reveal, e.g. "5,000+", "20+" or "5-Step". */
  value: string;
  label: string;
};

export type HomeHero = {
  eyebrow: string;
  title: string;
  /** Highlighted closing phrase, set on its own line. */
  accent: string;
  /** Short paragraphs under the headline, in order. */
  summary: string[];
  rating: string;
  imageSrc: string;
  imageAlt: string;
  /** Who the program is for: the lead-in word, then the roles. */
  audience: {
    label: string;
    roles: string[];
  };
  stats: HomeStat[];
};

export type PlateauGap = {
  title: string;
  question: string;
};

export type HomePlateau = {
  heading: HomeHeading;
  imageSrc: string;
  imageAlt: string;
  gaps: PlateauGap[];
  brochureLabel: string;
  brochureHref: string;
};

export type HomePageContent = {
  metaDescription: string;
  hero: HomeHero;
  advisor: {
    title: string;
    intro: string;
  };
  plateau: HomePlateau;
};
