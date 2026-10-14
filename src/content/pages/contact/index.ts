export const contactDetails = {
  email: "info@zoclearnings.com",
  phoneLabel: "Canada +1 6812 026 094",
  phoneHref: "tel:+16812026094",
  address: "Concord Cityplace Way, Downtown Toronto",
  mapQuery: "Concord CityPlace, Toronto, ON",
  linkedinHref: "https://www.linkedin.com",
} as const;

export const contactHero = {
  title: "Canada School of",
  accent: "For Tech Leaders.",
  summary:
    "A leadership transformation ecosystem for experienced professionals moving beyond employment dependency.",
  rating: "4.9/5",
  imageSrc: "/images/pages/blog/cybersecurity-leadership-for-executives.jpg",
  imageAlt: "Technology leaders walking through a modern office corridor",
} as const;

/**
 * Typographic wordmarks; swap each for the organisation's approved logo file when available.
 * The sector line shows on the back of each flip card.
 */
export const spotlightBrands = [
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
] as const;

export type PartnerRegion = {
  id: string;
  name: string;
  /** Short badge shown in the region pill; North America shows the Canada flag instead. */
  code: string;
  /** Tag shown above the region's marker when it is selected or hovered. */
  markerLabel: string;
  /** [longitude, latitude] of the region's marker. */
  coordinates: readonly [number, number];
  locations: readonly string[];
  /** ISO 3166-1 numeric ids of partner countries, tinted on the map. Singapore (702) is too small
   * for the 110m outlines, so only its marker shows. */
  countryIds: readonly string[];
};

export const partnerRegions: PartnerRegion[] = [
  {
    id: "north-america",
    name: "North America",
    code: "CA",
    markerLabel: "Toronto HQ",
    coordinates: [-79.38, 43.65],
    locations: ["Canada"],
    countryIds: ["124"],
  },
  {
    id: "europe",
    name: "Europe",
    code: "EU",
    markerLabel: "Europe",
    coordinates: [8.68, 50.11],
    locations: ["UK", "Germany", "Netherlands", "Denmark"],
    countryIds: ["826", "276", "528", "208"],
  },
  {
    id: "middle-east",
    name: "Middle East",
    code: "AE",
    markerLabel: "Middle East",
    coordinates: [55.27, 25.2],
    locations: ["UAE", "Saudi", "Qatar"],
    countryIds: ["784", "682", "634"],
  },
  {
    id: "africa",
    name: "Africa",
    code: "AF",
    markerLabel: "Africa",
    coordinates: [28.05, -12],
    locations: ["South Africa", "East Africa", "West Africa"],
    countryIds: ["710", "404", "834", "800", "231", "646", "566", "288", "686", "384"],
  },
  {
    id: "apac",
    name: "APAC",
    code: "SG",
    markerLabel: "APAC",
    coordinates: [103.82, 1.35],
    locations: ["Singapore", "Philippines", "Australia"],
    countryIds: ["702", "608", "036"],
  },
];

export type ContactFaq = {
  question: string;
  answer: string;
};

export const contactFaqs: ContactFaq[] = [
  {
    question: "Is this an AI technical certification?",
    answer:
      "No. It is an executive AI leadership program, not a programming or machine-learning engineering course.",
  },
  {
    question: "Do I need a technical background?",
    answer:
      "No. The program is built for experienced leaders. You will learn to evaluate, sponsor and govern AI initiatives without writing code.",
  },
  {
    question: "Is this suitable for entry-level professionals?",
    answer:
      "The program is designed for mid-career and senior professionals who already lead teams, functions or transformation work.",
  },
  {
    question: "What is the duration?",
    answer:
      "Duration depends on the track you choose. A program advisor will share the current cohort schedule and weekly time commitment.",
  },
  {
    question: "Is the learning completely self-paced?",
    answer:
      "No. Self-paced modules are combined with live sessions, mentor conversations and peer discussions so you stay accountable.",
  },
  {
    question: "How quickly will the team respond to my enquiry?",
    answer:
      "Our team responds promptly, usually within one business day, by email or at the phone number you share with us.",
  },
  {
    question: "Do you offer corporate or team training?",
    answer:
      "Yes. Organizations can enrol cohorts or request a tailored leadership program. Use the advisor form to tell us about your team.",
  },
  {
    question: "Can I visit the Toronto office?",
    answer:
      "Yes, by appointment. Book a consultation and an advisor will confirm a time at our Concord Cityplace Way office.",
  },
];
