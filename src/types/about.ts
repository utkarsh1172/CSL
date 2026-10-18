import type { FaqItem } from "./content";
import type { LineIconName } from "./icon";

/** Two-tone heading copy: `title` renders in ink, `accent` in brand blue. */
export type AboutHeading = {
  eyebrow?: string;
  title: string;
  accent: string;
  description?: string;
};

export type AboutStat = {
  /** Counted up on reveal, e.g. "15+", "95%" or "3-Layer". */
  value: string;
  label: string;
};

export type AboutHero = {
  eyebrow: string;
  title: string;
  accent: string;
  summary: string;
  statement: string;
  rating: string;
  imageSrc: string;
  imageAlt: string;
  stats: AboutStat[];
};

export type LeadershipCapital = {
  id: string;
  /** Short label on the orbit diagram. */
  label: string;
  name: string;
  description: string;
  /** Meter fill, 0-100. */
  score: number;
  icon: LineIconName;
};

export type AboutCapitals = {
  heading: AboutHeading;
  coreLabel: string;
  coreCaption: string;
  dimensions: LeadershipCapital[];
};

export type GrowthChart = {
  tag: string;
  /** Arrow in the tag: a falling line for traditional programs, a rising one for CSL. */
  icon: LineIconName;
  title: string;
  /** Bar heights as a percentage of the tallest bar, left to right. */
  bars: number[];
  /** Three axis labels: start, middle and end. */
  axis: [string, string, string];
};

export type ComparisonRow = {
  dimension: string;
  traditional: string;
  csl: string;
};

export type AboutComparison = {
  heading: AboutHeading;
  traditional: GrowthChart;
  csl: GrowthChart;
  columns: [string, string, string];
  rows: ComparisonRow[];
};

export type EcosystemSystem = {
  tag: string;
  title: string;
  icon: LineIconName;
  points: string[];
};

export type AboutEcosystem = {
  heading: AboutHeading;
  systems: EcosystemSystem[];
};

export type AboutWhy = {
  eyebrow: string;
  statement: string;
  imageSrc: string;
  imageAlt: string;
  gaps: string[];
};

export type AboutPageContent = {
  metaDescription: string;
  hero: AboutHero;
  advisor: {
    title: string;
    intro: string;
  };
  capitals: AboutCapitals;
  trustedBy: AboutHeading;
  comparison: AboutComparison;
  ecosystem: AboutEcosystem;
  why: AboutWhy;
  faqs: FaqItem[];
};
