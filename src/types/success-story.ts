import type { HeadingContent, Mentor, Testimonial } from "./content";

export type StoryVideo = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  /** Where the episode plays; without one the card shows as a preview only. */
  href?: string;
};

export type CaseStudy = {
  client: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  /** CSS object-position, to keep the person in frame. */
  imagePosition?: string;
  /** The full story; "Read More" shows only when it exists. */
  href?: string;
};

export type SuccessStoriesContent = {
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    summary: string;
    imageSrc: string;
    imageAlt: string;
    /** Counted up beside the avatar stack, e.g. "45+". */
    alumniCount: string;
    alumniLabel: string;
  };
  advisor: {
    title: string;
    intro: string;
  };
  testimonials: {
    heading: HeadingContent;
    items: Testimonial[];
  };
  videos: {
    heading: HeadingContent;
    items: StoryVideo[];
  };
  faculty: {
    heading: HeadingContent;
    panelLabel: string;
    total: string;
    footnote: string;
    members: Mentor[];
  };
  caseStudies: {
    heading: HeadingContent;
    items: CaseStudy[];
  };
  transformation: {
    title: string;
    summary: string;
    outcomesLabel: string;
    outcomes: string[];
    journey: string[];
    imageSrc: string;
    imageAlt: string;
  };
};
