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

/** Placeholder photos are cropped from wide shots, so each card names the part to show. */
export type OutcomePhoto = {
  imageSrc: string;
  /** CSS object-position for the crop, e.g. "20% 40%". */
  imagePosition?: string;
};

export type OutcomeShift = OutcomePhoto & {
  title: string;
  summary: string;
};

export type OutcomeRole = OutcomePhoto & {
  title: string;
};

export type HomeOutcomes = {
  heading: HomeHeading;
  /** What participants gain, in order. */
  shifts: OutcomeShift[];
  rolesTitle: string;
  /** The roles participants move into. */
  roles: OutcomeRole[];
};

export type ActivationStep = {
  title: string;
  summary: string;
};

export type HomeActivation = {
  heading: HomeHeading;
  /** Shown in order along the timeline. */
  steps: ActivationStep[];
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
  outcomes: HomeOutcomes;
  activation: HomeActivation;
  faqs: FaqItem[];
};
