import type { HomePageContent } from "@/types/home";

export const homePage: HomePageContent = {
  metaDescription:
    "A leadership transformation ecosystem that re-positions senior professionals: mentorship, visibility and positioning for CTOs, CIOs, CISOs, VPs and senior executives.",
  hero: {
    eyebrow: "A Leadership Transformation Ecosystem",
    title: "Where senior professionals don't get educated. They get",
    accent: "re-positioned.",
    summary: [
      "Most professionals don't fail because they lack experience.",
      "They fail because their experience never becomes visible, structured, or directional.",
      "CSL exists for one reason — to turn what you already know into what the market finally recognizes.",
    ],
    rating: "4.9/5",
    // Placeholder until the home hero photograph is added under /images/pages/home.
    imageSrc: "/images/pages/blog/cybersecurity-leadership-for-executives.jpg",
    imageAlt: "Senior executives standing together at a Canada School of Leadership event",
    audience: {
      label: "For",
      roles: ["CTOs", "CIOs", "CISOs", "VPs", "Senior Executives"],
    },
    stats: [
      { value: "5,000+", label: "CXO Mentoring Sessions" },
      { value: "20+", label: "Countries Active" },
      { value: "30+", label: "Industry Domains" },
      { value: "5-Step", label: "Leadership Transition Framework" },
    ],
  },
  advisor: {
    title: "Explore the AI Leadership program",
    intro:
      "Speak with a program advisor about the curriculum, learning model, eligibility and fit for your leadership journey.",
  },
  plateau: {
    heading: {
      eyebrow: "The Plateau",
      title: "Why most senior professionals plateau",
      description:
        "Experienced professionals often have the knowledge, achievements and credibility — but lack the positioning, visibility and ecosystem required for their next level.",
    },
    // Placeholder until the cohort networking photograph is added under /images/pages/home.
    imageSrc: "/images/pages/blog/emotional-intelligence-leadership-skill.jpg",
    imageAlt: "Two senior professionals celebrating a breakthrough together",
    gaps: [
      { title: "Identity Gap", question: "What's your next leadership identity?" },
      { title: "Visibility Gap", question: "Is your expertise visible to the right people?" },
      { title: "Positioning Gap", question: "Does your professional story reflect your value?" },
      { title: "Influence Gap", question: "Are you shaping decisions or only executing them?" },
    ],
    brochureLabel: "Download Brochure",
    // Until the brochure PDF is published, the advisor form sends it on request.
    brochureHref: "#talk-to-advisor",
  },
};
