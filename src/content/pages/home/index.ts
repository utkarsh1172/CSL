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
  partnership: {
    heading: {
      eyebrow: "The Partnership",
      title: "Two strengths. One powerful",
      accent: "ecosystem.",
    },
    partners: [
      {
        name: "Canada School of Leadership",
        logoSrc: "/images/brand/canada-school-of-leadership-black.png",
        title: "Leadership education and transformation",
        points: [
          "CXO and executive programs",
          "AI and future leadership",
          "Structured learning and mentorship",
          "Global faculty and industry experts",
        ],
      },
      {
        // Set as a wordmark until cSuite Networks' approved logo file is added.
        name: "cSuite Networks",
        title: "Executive community and leadership visibility",
        points: [
          "Exclusive CXO network",
          "Regional and global events",
          "Media, publications and insights",
          "Peer learning and collaboration",
        ],
      },
    ],
  },
  programs: {
    heading: {
      eyebrow: "Featured Programs",
      title: "Leadership experiences designed for",
      accent: "real impact.",
    },
    viewAllLabel: "View all programs",
    // Until a programs index page exists, an advisor shares the full catalogue.
    viewAllHref: "#talk-to-advisor",
    // Photos are placeholders until the program photography is added under /images/pages/home.
    // Programs without their own page yet lead to the advisor form.
    programs: [
      {
        title: "CXO Leadership Masterclass",
        summary: "Strategic decision-making for the modern executive",
        href: "#talk-to-advisor",
        imageSrc: "/images/pages/blog/best-time-to-invest-in-pmp-training-canada.jpg",
      },
      {
        title: "AI for Leaders",
        summary: "Practical AI strategies for business transformation",
        href: "/programs/ai-leadership",
        imageSrc: "/images/pages/blog/top-5-myths-about-the-pmp-exam.jpg",
      },
      {
        title: "Executive Roundtables",
        summary: "Peer insights. Real challenges. Meaningful outcomes.",
        href: "#talk-to-advisor",
        imageSrc: "/images/pages/blog/leading-hybrid-teams-without-losing-momentum.jpg",
      },
      {
        title: "Mentorship & Advisory",
        summary: "Guidance from global industry leaders",
        href: "#talk-to-advisor",
        imageSrc: "/images/pages/blog/stay-interviews-retention-conversation.jpg",
      },
    ],
  },
  trustedBy: {
    title: "Trusted by",
    accent: "Industry Leaders",
  },
  testimonials: {
    heading: {
      eyebrow: "Testimonials",
      title: "What leaders say about their",
      accent: "CSL experience",
      description:
        "Perspectives from technology leaders on how CSL shaped their thinking, decision-making and approach to leadership.",
    },
  },
  faqs: [
    {
      question: "Is CSL a traditional education program?",
      answer:
        "No. It is an execution-based leadership ecosystem. Instead of ending with a certificate, you leave with a live leadership portfolio, an executive positioning profile and ongoing access to the CSL mentor and cSuite community.",
    },
    {
      question: "Who is this designed for?",
      answer:
        "Senior professionals with 10+ years of experience aiming for advisory, consulting or leadership transitions, including CTOs, CIOs, CISOs, VPs and senior executives.",
    },
    {
      question: "Do I need to quit my job?",
      answer:
        "No. Transformation happens alongside your current role: self-paced modules are combined with live sessions, mentor conversations and peer discussions.",
    },
    {
      question: "Is this theory-based learning?",
      answer:
        "No. It is activity-driven execution and visibility building, grounded in real organisational context.",
    },
    {
      question: "What is the core outcome?",
      answer: "Career repositioning into leadership or independent advisory roles.",
    },
    {
      question: "What does the cSuite Networks partnership add?",
      answer:
        "CSL builds your leadership capability; cSuite Networks gives it reach, through an exclusive CXO network, regional and global events, media and publications, and peer learning with other executives.",
    },
    {
      question: "Do you offer corporate or team enrolment?",
      answer:
        "Yes. Organizations can enrol cohorts or request a tailored leadership track. Use the advisor form to tell us about your team.",
    },
  ],
};
