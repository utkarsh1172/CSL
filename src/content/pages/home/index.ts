import type { HomePageContent } from "@/types/home";

export const homePage: HomePageContent = {
  metaDescription:
    "A leadership transformation ecosystem that re-positions senior professionals: mentorship, visibility and positioning for CTOs, CIOs, CISOs, VPs and senior executives.",
  hero: {
    eyebrow: "A Strategic Partnership",
    title: "Leadership development for a more influential",
    accent: "tomorrow.",
    summary: [
      "Canada School of Leadership and cSuite Networks join forces to provide world-class leadership education, exclusive executive community access and real-world application for today's senior professionals.",
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
    imageSrc: "/images/pages/home/executive-networking-clear.png",
    imageAlt: "Four senior leaders networking at an executive event",
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
  journey: {
    heading: {
      eyebrow: "The CSL Journey",
      title: "How transformation",
      accent: "actually",
      suffix: "happens",
      description:
        "You already have the experience. We only reorganize how the world sees it.",
    },
    steps: [
      {
        title: "Identity Mapping",
        summary: "Understanding your current leadership positioning gap",
      },
      {
        title: "Execution Design",
        summary: "Defining what actions convert experience into visibility",
      },
      {
        title: "Visibility Building",
        summary: "Creating public leadership presence through structured output",
      },
      {
        title: "Portfolio Formation",
        summary: "Converting work into documented authority",
      },
      {
        title: "Market Transition",
        summary: "Positioning for consulting, advisory, or leadership elevation",
      },
    ],
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
  // Photos are placeholders cropped from existing site photography until the outcome
  // photography is added under /images/pages/home.
  outcomes: {
    heading: {
      eyebrow: "Outcome",
      title: "What changes after",
      accent: "CSL",
      description: "Real growth. Lasting influence.",
    },
    shifts: [
      {
        title: "Executive presence",
        summary: "Speak with confidence and credibility.",
        imageSrc: "/images/pages/blog/best-time-to-invest-in-pmp-training-canada.jpg",
        imagePosition: "16% 40%",
      },
      {
        title: "Strategic influence",
        summary: "Shape decisions beyond your team.",
        imageSrc: "/images/pages/blog/cisa-certified-role-interview-questions.jpg",
        imagePosition: "62% 30%",
      },
      {
        title: "Stronger peer relationships",
        summary: "Build a trusted network of peers and advisors.",
        imageSrc: "/images/pages/blog/mentorship-programs-employee-retention.jpg",
        imagePosition: "55% 35%",
      },
      {
        title: "Advisory and boardroom readiness",
        summary: "Be ready for new opportunities.",
        imageSrc: "/images/pages/blog/leading-hybrid-teams-without-losing-momentum.jpg",
        imagePosition: "75% 40%",
      },
      {
        title: "A clearer professional positioning",
        summary: "Stand out in a complex landscape.",
        imageSrc: "/images/pages/blog/stay-interviews-retention-conversation.jpg",
        imagePosition: "38% 35%",
      },
    ],
    rolesTitle: "Where CSL leaders go next",
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
