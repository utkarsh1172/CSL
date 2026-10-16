import type { Program } from "@/types/program";

export const aiLeadershipProgram: Program = {
  slug: "ai-leadership",
  name: "AI Leadership Program",
  metaDescription:
    "An executive AI leadership program for tech leaders: mentorship, platform visibility and a proof-of-work portfolio that turn experience into leadership capital.",
  hero: {
    eyebrow: "Executive Program",
    title: "AI Leadership Program",
    accent: "For Tech Leaders.",
    summary:
      "A leadership transformation ecosystem for experienced professionals moving beyond employment dependency.",
    statement: "We are not an education provider. We are a leadership activation system.",
    rating: "4.9/5",
    // Placeholder until the cohort event photograph is added under /images/pages/programs.
    imageSrc: "/images/pages/blog/cybersecurity-leadership-for-executives.jpg",
    imageAlt: "Technology leaders gathered at a Canada School of Leadership session",
    stats: [
      { value: "15+", label: "Regions Leadership Presence" },
      { value: "15+", label: "Industry Domains Covered" },
      { value: "95%", label: "Professionals Face Transition Gaps" },
      { value: "3-Layer", label: "Leadership Transformation Model" },
    ],
  },
  advisor: {
    title: "Explore the AI Leadership program",
    intro:
      "Speak with a program advisor about the curriculum, learning model, eligibility and fit for your leadership journey.",
  },
  capitals: {
    heading: {
      eyebrow: "What CSL Builds",
      title: "Five dimensions of",
      accent: "leadership capital",
      description:
        "Most professionals focus on acquiring skills. CSL builds the capital that compounds beyond a single job title.",
    },
    coreLabel: "CSL",
    coreCaption: "Capital Core",
    // Diagram order runs clockwise from the top.
    dimensions: [
      {
        id: "knowledge",
        label: "Knowledge",
        name: "Knowledge Capital",
        description: "Executive programs & structured learning",
        score: 70,
        icon: "book",
      },
      {
        id: "network",
        label: "Network",
        name: "Network Capital",
        description: "Global mentor, advisor & peer community",
        score: 88,
        icon: "users",
      },
      {
        id: "brand",
        label: "Brand",
        name: "Brand Capital",
        description: "Thought leadership & personal positioning",
        score: 82,
        icon: "megaphone",
      },
      {
        id: "advisory",
        label: "Advisory",
        name: "Advisory Capital",
        description: "Consulting & advisory opportunities",
        score: 75,
        icon: "briefcase",
      },
      {
        id: "influence",
        label: "Influence",
        name: "Influence Capital",
        description: "Industry recognition & long-term impact",
        score: 92,
        icon: "award",
      },
    ],
  },
  trustedBy: {
    title: "Trusted by",
    accent: "Industry Leaders",
  },
  comparison: {
    heading: {
      eyebrow: "Program Curriculum",
      title: "Two systems.",
      accent: "One works.",
      description:
        "Traditional programs focus on knowledge. CSL focuses on building leadership capital — across every dimension.",
    },
    traditional: {
      tag: "Traditional",
      title: "Programs end. Growth stalls.",
      bars: [34, 52, 66, 60, 44, 30, 18],
      axis: ["Start", "Program End", "5 Years"],
    },
    csl: {
      tag: "CSL Ecosystem",
      title: "Ecosystem compounds. Leadership scales.",
      bars: [14, 22, 30, 40, 52, 64, 80],
      axis: ["Start", "Activation", "5+ Years"],
      benefits: [
        { label: "Global Network", icon: "users" },
        { label: "Media & Visibility", icon: "mic" },
        { label: "Recognition & Credibility", icon: "star" },
        { label: "Ongoing Opportunities", icon: "chart" },
      ],
    },
    columns: ["Dimension", "Traditional", "CSL"],
    rows: [
      {
        dimension: "Approach",
        icon: "head",
        traditional: "Knowledge transfer",
        csl: "Identity transformation",
      },
      {
        dimension: "Output",
        icon: "target",
        traditional: "Curriculum completion",
        csl: "Execution & visibility",
      },
      {
        dimension: "Mentorship",
        icon: "users",
        traditional: "Optional / cohort-led",
        csl: "Central + regional system",
      },
      {
        dimension: "Network",
        icon: "nodes",
        traditional: "Class peers only",
        csl: "Global cSuite community",
      },
      {
        dimension: "Proof",
        icon: "shield",
        traditional: "Certificate",
        csl: "Live portfolio & advisory",
      },
      {
        dimension: "Horizon",
        icon: "sunrise",
        traditional: "Program duration",
        csl: "Lifetime ecosystem",
      },
    ],
  },
  ecosystem: {
    heading: {
      eyebrow: "The Core Ecosystem",
      title: "The CSL Leadership",
      accent: "Ecosystem.",
      description: "Three interlocking systems — engineered to work as one.",
    },
    systems: [
      {
        tag: "Direction & Strategy",
        title: "Mentorship System",
        icon: "compass",
        points: [
          "Central Leadership Mentors (strategy + direction)",
          "Regional Execution Mentors (implementation + support)",
        ],
      },
      {
        tag: "Reach & Visibility",
        title: "Platform System",
        icon: "sitemap",
        points: [
          "Powered by cSuite Networks",
          "Global exposure & leadership networking",
          "Visibility cycles & cross-region engagement",
        ],
      },
      {
        tag: "Proof & Identity",
        title: "Portfolio System",
        icon: "document",
        points: [
          "Executive identity building",
          "LinkedIn authority positioning",
          "Thought leadership output",
          "Proof-of-work portfolio",
          "Consulting readiness profile",
        ],
      },
    ],
  },
  why: {
    eyebrow: "Why This Exists",
    statement:
      "95% of senior professionals fail in transition — not due to lack of experience, but due to lack of system.",
    // Placeholder until the leadership workshop photograph is added under /images/pages/programs.
    imageSrc: "/images/pages/blog/mentorship-programs-employee-retention.jpg",
    imageAlt: "Senior professionals collaborating around a table during a leadership workshop",
    gaps: [
      "No visibility structure",
      "No execution environment",
      "No positioning framework",
      "No mentorship architecture",
    ],
  },
  faqs: [
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
      question: "What do I leave the program with?",
      answer:
        "A live leadership portfolio, an executive positioning profile and ongoing access to the CSL mentor and cSuite community.",
    },
    {
      question: "Do you offer corporate or team enrolment?",
      answer:
        "Yes. Organizations can enrol cohorts or request a tailored leadership track. Use the advisor form to tell us about your team.",
    },
  ],
};
