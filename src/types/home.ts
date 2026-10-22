import type { FaqItem } from "./content";

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

export type HomePartner = {
  name: string;
  /** Logo file; without one the name is set as a typographic wordmark. */
  logoSrc?: string;
  title: string;
  points: string[];
};

export type HomePartnership = {
  heading: HomeHeading;
  /** Shown either side of the link badge, in order. */
  partners: [HomePartner, HomePartner];
};

export type FeaturedProgram = {
  title: string;
  summary: string;
  href: string;
  imageSrc: string;
};

export type HomePrograms = {
  heading: HomeHeading;
  viewAllLabel: string;
  viewAllHref: string;
  programs: FeaturedProgram[];
};

export type HomePageContent = {
  metaDescription: string;
  hero: HomeHero;
  advisor: {
    title: string;
    intro: string;
  };
  plateau: HomePlateau;
  partnership: HomePartnership;
  programs: HomePrograms;
  trustedBy: HomeHeading;
  testimonials: {
    heading: HomeHeading;
  };
  faqs: FaqItem[];
};
