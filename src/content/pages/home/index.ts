import type { HomePageContent } from "@/types/home";

// The home page has no form of its own; enquiries go to the advisor form on the contact page.
const advisorHref = "/contact#talk-to-advisor";

// Photos throughout are placeholders cropped from existing site photography until the home page
// photography is added under /images/pages/home.
export const homePage: HomePageContent = {
  metaDescription:
    "Canada School of Leadership and cSuite Networks join forces to provide world-class leadership education, exclusive executive community access and real-world application for senior professionals.",
  hero: {
    eyebrow: "A Strategic Partnership",
    title: "Leadership development for a more influential",
    accent: "tomorrow.",
    summary:
      "Canada School of Leadership and cSuite Networks join forces to provide world-class leadership education, exclusive executive community access and real-world application for today's senior professionals.",
    primaryAction: { label: "Explore Leadership Programs", href: "#programs" },
    // Until a community sign-up page exists, the advisor form takes membership enquiries.
    secondaryAction: { label: "Join the Community", href: advisorHref },
    portrait: {
      imageSrc: "/images/pages/blog/stay-interviews-retention-conversation.jpg",
      imagePosition: "36% 30%",
      imageAlt: "A senior professional in conversation at a Canada School of Leadership session",
    },
    journey: {
      steps: ["Learn", "Connect", "Apply", "Lead"],
      href: "#how-it-works",
      label: "See how the leadership activation system works",
    },
    cards: [
      {
        title: "Exclusive CXO Community",
        href: "#partnership",
        imageSrc: "/images/pages/blog/leading-hybrid-teams-without-losing-momentum.jpg",
        imagePosition: "70% 40%",
      },
      {
        title: "Practical Leadership for Real-World Impact",
        href: "#how-it-works",
        imageSrc: "/images/pages/blog/best-time-to-invest-in-pmp-training-canada.jpg",
        imagePosition: "18% 40%",
      },
    ],
    stats: [
      { value: "5,000+", label: "Senior professionals" },
      { value: "20+", label: "Global markets" },
      { value: "30+", label: "Industry domains" },
      { value: "5-Step", label: "Leadership activation system" },
    ],
  },
  trustedBy: "Trusted by leaders in global organizations",
  plateau: {
    heading: {
      eyebrow: "The Plateau",
      title: "Why most senior professionals plateau",
      description:
        "Experienced professionals often have the knowledge, achievements and credibility — but lack the positioning, visibility and ecosystem required for their next level.",
    },
    imageSrc: "/images/pages/blog/emotional-intelligence-leadership-skill.jpg",
    imageAlt: "Two senior professionals celebrating a breakthrough together",
    gaps: [
      { title: "Identity Gap", question: "What's your next leadership identity?" },
      { title: "Visibility Gap", question: "Is your expertise visible to the right people?" },
      { title: "Positioning Gap", question: "Does your professional story reflect your value?" },
      { title: "Influence Gap", question: "Are you shaping decisions or only executing them?" },
    ],
    gapsHref: advisorHref,
    brochureLabel: "Download Brochure",
    // Until the brochure PDF is published, the advisor form sends it on request.
    brochureHref: advisorHref,
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
    viewAllHref: advisorHref,
    // Programs without their own page yet lead to the advisor form.
    programs: [
      {
        title: "CXO Leadership Masterclass",
        summary: "Strategic decision-making for the modern executive",
        href: advisorHref,
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
        href: advisorHref,
        imageSrc: "/images/pages/blog/leading-hybrid-teams-without-losing-momentum.jpg",
      },
      {
        title: "Mentorship & Advisory",
        summary: "Guidance from global industry leaders",
        href: advisorHref,
        imageSrc: "/images/pages/blog/stay-interviews-retention-conversation.jpg",
      },
    ],
  },
  outcomes: {
    heading: {
      eyebrow: "Outcome",
      title: "What changes",
      accent: "after CSL",
    },
    roles: [
      {
        title: "Independent Consultants",
        imageSrc: "/images/pages/blog/microlearning-for-busy-professionals.jpg",
        imagePosition: "55% 40%",
      },
      {
        title: "Strategic Advisors",
        imageSrc: "/images/pages/blog/emotional-intelligence-leadership-skill.jpg",
        imagePosition: "80% 30%",
      },
      {
        title: "Board-Level Contributors",
        imageSrc: "/images/pages/blog/top-5-myths-about-the-pmp-exam.jpg",
        imagePosition: "62% 50%",
      },
      {
        title: "Startup Mentors",
        imageSrc: "/images/pages/blog/best-time-to-invest-in-pmp-training-canada.jpg",
        imagePosition: "82% 50%",
      },
      {
        title: "Executive Thought Leaders",
        imageSrc: "/images/pages/blog/cybersecurity-leadership-for-executives.jpg",
        imagePosition: "73% 40%",
      },
    ],
  },
  activation: {
    heading: {
      eyebrow: "How It Works",
      title: "A connected leadership",
      accent: "activation system.",
    },
    steps: [
      { title: "Learn", summary: "World-class programs designed for senior leaders" },
      { title: "Connect", summary: "Join an exclusive executive community" },
      { title: "Engage", summary: "Participate in events, roundtables and peer learning" },
      { title: "Apply", summary: "Turn insights into real business impact" },
      { title: "Lead", summary: "Strengthen your influence and career positioning" },
    ],
  },
  testimonials: {
    heading: {
      eyebrow: "Testimonials",
      title: "What leaders say about their",
      accent: "learning experience.",
      description:
        "Perspectives from technology leaders on how the program shaped their thinking, decision-making and approach to AI.",
    },
  },
  callToAction: {
    eyebrow: "Be part of what's next",
    title: "Invest in your next",
    accent: "chapter.",
    summary:
      "Access leadership programs, a global executive community and opportunities to grow your influence.",
    primaryAction: { label: "Explore Programs", href: "#programs" },
    secondaryAction: { label: "Enquire Now", href: advisorHref },
  },
};
