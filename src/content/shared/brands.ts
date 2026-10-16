import type { IndustryBrand } from "@/types/content";

/**
 * Organisations shown in the spotlight and "Trusted by" strips.
 * Typographic wordmarks; swap each for the organisation's approved logo file when available.
 */
export const industryBrands: IndustryBrand[] = [
  { name: "Orion Health", mark: "ORION", sub: "HEALTH", tone: "orion", sector: "Healthcare technology" },
  { name: "Rogers", mark: "ROGERS", tone: "rogers", sector: "Telecommunications & media" },
  { name: "Scotiabank", mark: "Scotiabank", tone: "scotiabank", sector: "Banking & financial services" },
  { name: "Kyndryl", mark: "kyndryl", tone: "kyndryl", sector: "IT infrastructure services" },
  {
    name: "TCS Connected IT",
    mark: "TCS",
    sub: "Connected IT",
    tone: "tcs",
    sector: "IT services & consulting",
  },
];
