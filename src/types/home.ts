/** Two-tone heading copy: `title` renders in ink, `accent` in brand blue. */
export type HomeHeading = {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
};

export type HomeLink = {
  label: string;
  href: string;
};

export type HomeStat = {
  /** Counted up on reveal, e.g. "5,000+", "20+" or "5-Step". */
  value: string;
  label: string;
};

/** Placeholder photos are cropped from wide shots, so each one names the part to show. */
export type HomePhoto = {
  imageSrc: string;
  /** CSS object-position for the crop, e.g. "20% 40%". */
  imagePosition?: string;
};

export type HeroCard = HomePhoto & {
  title: string;
  href: string;
};

export type HomeHero = {
  eyebrow: string;
  title: string;
  /** Highlighted closing word, swept with the brand gradient. */
  accent: string;
  summary: string;
  primaryAction: HomeLink;
  secondaryAction: HomeLink;
  portrait: HomePhoto & {
    imageAlt: string;
  };
  /** The floating card over the portrait: the activation steps, linking to the timeline. */
  journey: {
    steps: string[];
    href: string;
    label: string;
  };
  cards: [HeroCard, HeroCard];
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
  /** Where each gap card leads. */
  gapsHref: string;
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

export type OutcomeRole = HomePhoto & {
  title: string;
};

export type HomeOutcomes = {
  heading: HomeHeading;
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

export type HomeCallToAction = {
  eyebrow: string;
  title: string;
  accent: string;
  summary: string;
  primaryAction: HomeLink;
  secondaryAction: HomeLink;
  /** Photo for the right half; without one, a drawn sunrise over the mountains is shown. */
  imageSrc?: string;
};

export type HomePageContent = {
  metaDescription: string;
  hero: HomeHero;
  /** Label over the logo band under the hero. */
  trustedBy: string;
  plateau: HomePlateau;
  partnership: HomePartnership;
  programs: HomePrograms;
  outcomes: HomeOutcomes;
  activation: HomeActivation;
  testimonials: {
    heading: HomeHeading;
  };
  callToAction: HomeCallToAction;
};
