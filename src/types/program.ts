import type { FaqItem } from "./content";
import type { LineIconName } from "./icon";

/** Two-tone heading copy: `title` renders in ink, `accent` in brand blue. */
export type ProgramHeading = {
  eyebrow?: string;
  title: string;
  accent: string;
  description?: string;
};

export type ProgramStat = {
  /** Counted up on reveal, e.g. "15+", "95%" or "3-Layer". */
  value: string;
  label: string;
};

export type ProgramHero = {
  eyebrow: string;
  title: string;
  accent: string;
  summary: string;
  statement: string;
  rating: string;
  imageSrc: string;
  imageAlt: string;
  stats: ProgramStat[];
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

export type ProgramCapitals = {
  heading: ProgramHeading;
  coreLabel: string;
  coreCaption: string;
  dimensions: LeadershipCapital[];
};

export type GrowthChart = {
  tag: string;
  title: string;
  /** Bar heights as a percentage of the chart height, left to right. */
  bars: number[];
  /** Three axis labels: start, middle and end. */
  axis: [string, string, string];
};

export type ComparisonRow = {
  dimension: string;
  icon: LineIconName;
  traditional: string;
  csl: string;
};

export type ProgramComparison = {
  heading: ProgramHeading;
  traditional: GrowthChart;
  csl: GrowthChart & {
    benefits: { label: string; icon: LineIconName }[];
  };
  columns: [string, string, string];
  rows: ComparisonRow[];
};

export type EcosystemSystem = {
  tag: string;
  title: string;
  icon: LineIconName;
  points: string[];
};

export type ProgramEcosystem = {
  heading: ProgramHeading;
  systems: EcosystemSystem[];
};

export type ProgramWhy = {
  eyebrow: string;
  statement: string;
  imageSrc: string;
  imageAlt: string;
  gaps: string[];
};

export type Program = {
  slug: string;
  name: string;
  metaDescription: string;
  hero: ProgramHero;
  advisor: {
    title: string;
    intro: string;
  };
  capitals: ProgramCapitals;
  trustedBy: ProgramHeading;
  comparison: ProgramComparison;
  ecosystem: ProgramEcosystem;
  why: ProgramWhy;
  faqs: FaqItem[];
};
