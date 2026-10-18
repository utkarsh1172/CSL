import type { FaqItem, HeadingContent } from "./content";
import type { LineIconName } from "./icon";

export type ProgramStat = {
  /** Counted up on reveal when numeric, e.g. "15+"; text such as "Real-World" shows as is. */
  value: string;
  label: string;
  detail: string;
};

/** One stop in the sticky in-page navigation; `id` matches a section anchor. */
export type ProgramNavLink = {
  id: string;
  label: string;
};

export type CurriculumMonth = {
  title: string;
  month: string;
  summary: string;
};

export type FlagshipProgram = {
  title: string;
  summary: string;
  href: string;
};

export type DeliverablePanel = {
  title: string;
  subtitle: string;
  icon: LineIconName;
  items: string[];
};

export type ProgramBenefit = {
  title: string;
  detail: string;
};

export type ProgramAuthority = {
  title: string;
  detail: string;
};

export type Program = {
  slug: string;
  name: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    summary: string;
    rating: string;
    imageSrc: string;
    imageAlt: string;
    stats: ProgramStat[];
  };
  /** Sticky in-page navigation, in page order. */
  navigation: ProgramNavLink[];
  advisor: {
    title: string;
    intro: string;
  };
  /** The brochure PDF, or the advisor form until one is published. */
  brochureHref: string;
  overview: {
    eyebrow: string;
    title: string;
    summary: string;
    details: { label: string; value: string }[];
    imageSrc: string;
    imageAlt: string;
  };
  curriculum: {
    heading: HeadingContent;
    journey: string[];
    imageSrc: string;
    imageAlt: string;
    months: CurriculumMonth[];
  };
  flagship: {
    heading: HeadingContent;
    programs: FlagshipProgram[];
  };
  deliverables: {
    heading: HeadingContent;
    panels: [DeliverablePanel, DeliverablePanel];
    fee: { label: string; value: string };
    payment: { label: string; detail: string };
    scholarship: { label: string; value: string };
    enquiryLabel: string;
  };
  benefits: {
    heading: HeadingContent;
    items: ProgramBenefit[];
    journey: string[];
    imageSrc: string;
    imageAlt: string;
  };
  mentors: {
    heading: HeadingContent;
    mentorCount: string;
    coachCount: string;
    footnote: string;
  };
  testimonials: {
    heading: HeadingContent;
  };
  recognition: {
    eyebrow: string;
    /** The headline reads `titleStart` + accent + line break + `titleEnd`. */
    titleStart: string;
    accent: string;
    titleEnd: string;
    summary: string;
    badges: string[];
    certificateProgram: string;
  };
  difference: {
    heading: HeadingContent;
    banner: {
      lead: string;
      emphasis: string;
      summary: string;
      timeline: string[];
      stages: string[];
      imageSrc: string;
      imageAlt: string;
    };
    authorities: ProgramAuthority[];
  };
  callToAction: {
    title: string;
    accent: string;
  };
  /** Questions about CSL itself, shown first. */
  organisationFaqs: FaqItem[];
  /** Questions about this program. */
  faqs: FaqItem[];
};
