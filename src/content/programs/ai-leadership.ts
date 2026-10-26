import type { Program } from "@/types/program";

export const aiLeadershipProgram: Program = {
  slug: "ai-leadership",
  name: "AI Leadership Program",
  metaDescription:
    "An executive AI leadership program for CXOs, CIOs, CTOs, CISOs and senior technology leaders who want the strategic capability to lead AI-driven transformation.",
  hero: {
    eyebrow: "Executive Program",
    title: "AI Leadership Program",
    accent: "For Tech Leaders.",
    summary:
      "For aspiring CXOs, CIOs, CTOs, CISOs, CAIOs, Senior IT Leaders, Digital Transformation Leaders, who want to develop the strategic capability to lead AI-driven transformation.",
    rating: "4.9/5",
    backgroundImageSrc: "/images/pages/programs/ai-leadership/hero-background.png",
    imageSrc: "/images/pages/programs/ai-leadership/hero-presenter.png",
    imageAlt: "An AI leadership program facilitator holding a tablet",
    stats: [
      { value: "15+", label: "Countries", detail: "" },
      { value: "25+", label: "Regions", detail: "" },
      {
        value: "500+",
        label: "StartUp Founders",
        detail: "",
      },
      {
        value: "Real-World",
        label: "AI Projects",
        detail: "",
      },
    ],
  },
  navigation: [
    { id: "overview", label: "Program Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "flagship", label: "Flagship Programs" },
    { id: "deliverables", label: "Executive deliverables" },
    { id: "benefits", label: "Post Program Benefits" },
    { id: "faculty", label: "Mentor & Coaches" },
    { id: "testimonials", label: "Testimonials" },
    { id: "recognition", label: "Digital Recognition" },
    // The program's own FAQ list; the organisation-wide one (id "faqs") is hidden for now.
    { id: "program-faqs", label: "FAQs" },
  ],
  advisor: {
    title: "Explore the AI Leadership program",
    intro:
      "Speak with a program advisor about the curriculum, learning model, eligibility and fit for your leadership journey.",
  },
  brochureHref: "#talk-to-advisor",
  overview: {
    eyebrow: "Program Overview",
    title: "AI Leadership Program Overview",
    summary:
      "The Canada School of Leadership AI Leadership Program is designed for experienced technology professionals who are responsible for technology strategy, transformation, innovation or business change. The program focuses on the leadership challenges involved in adopting and scaling AI across organisations, combining executive learning, practical activities, strategic thinking and applied transformation work.",
    details: [
      { label: "Designed for", value: "Sr. Tech Professionals | CXOs | Start-up Founders" },
      { label: "Learning Approach", value: "Experience & Activity Based / No Theory" },
      { label: "Duration", value: "8 to 12 months" },
      { label: "Mode", value: "100% Online + Engagement-based Learning" },
    ],
    imageSrc: "/images/pages/programs/ai-leadership/overview-ai-chip-clear.png",
    imageAlt: "Artificial intelligence processor illuminated on a circuit board",
  },
  curriculum: {
    heading: {
      eyebrow: "Program Curriculum",
      title: "Designed for leaders who already understand",
      accent: "foundation to capstone.",
    },
    journey: ["AI Awareness", "AI Strategy", "AI Governance", "AI Transformation", "AI-Driven Leadership"],
    imageSrc: "/images/pages/programs/ai-leadership/curriculum-ai-collaboration.png",
    imageAlt: "Technology leaders collaborating around an AI system display",
    months: [
      {
        title: "AI Leadership Foundation",
        month: "Month 1",
        summary: "Executive AI mindset and strategic perspective",
      },
      {
        title: "Generative & Agentic AI",
        month: "Month 2",
        summary: "GenAI, LLMs, agents and intelligent workflows",
      },
      {
        title: "AI Governance & Cybersecurity",
        month: "Month 3",
        summary: "Responsible AI, governance, risk and cyber resilience",
      },
      {
        title: "Enterprise AI Transformation",
        month: "Month 4",
        summary: "Operating models, data, cloud and integration",
      },
      {
        title: "AI Innovation & Business Value",
        month: "Month 5",
        summary: "Use cases, business models, investment and ROI",
      },
      {
        title: "Capstone & Executive Leadership",
        month: "Month 6",
        summary: "AI transformation blueprint and executive presentation",
      },
    ],
  },
  flagship: {
    heading: {
      eyebrow: "Flagship Programs",
      title: "A staged climb from foundation to",
      accent: "capstone.",
      description:
        "Each month builds executive capability on the previous one, ending with a board-ready AI transformation blueprint.",
    },
    programs: [
      {
        title: "Executive Leadership Program",
        summary: "Each month builds executive capability on the previous one.",
        href: "/programs/executive",
      },
      {
        title: "AI Leadership Program",
        summary: "Each month builds executive capability on the previous one.",
        href: "/programs/ai-leadership",
      },
      {
        title: "CISO Leadership Program",
        summary: "Each month builds executive capability on the previous one.",
        href: "/programs/ciso-leadership",
      },
    ],
  },
  deliverables: {
    heading: {
      eyebrow: "Deliverables & Fees",
      title: "Executive deliverables",
    },
    panels: [
      {
        title: "Deliverables",
        subtitle: "Learn by doing, discussing and applying.",
        icon: "book",
        items: [
          "Case Studies",
          "Hands-On Activities",
          "Virtual Sessions",
          "Practical Projects",
          "Peer Discussions",
          "Events & Engagements",
        ],
      },
      {
        title: "Who is this for?",
        subtitle: "Designed for experienced technology leaders.",
        icon: "users",
        items: [
          "Senior Technology Professionals",
          "CIOs / CTOs / CISOs",
          "IT & Digital Transformation Leaders",
          "Enterprise Architects",
          "Technology Entrepreneurs",
          "Startup Founders / CEOs",
        ],
      },
    ],
    fee: { label: "Program Fee", value: "USD 8,000" },
    payment: { label: "Flexible EMI Options", detail: "Make your learning journey easier" },
    scholarship: { label: "Scholarship Available", value: "Up to 25%" },
    enquiryLabel: "Corporate / Group Enquiry",
  },
  benefits: {
    heading: {
      eyebrow: "Post Program Benefits",
      title: "What will you be able to",
      accent: "do differently?",
      description:
        "Participants do not simply consume content — they reflect, apply, discuss and build.",
    },
    items: [
      {
        title: "Think beyond AI tools",
        detail: "Develop an executive understanding of AI rather than a tool-by-tool conversation.",
      },
      {
        title: "Build an AI strategy",
        detail: "Translate AI possibilities into strategic priorities aligned with business goals.",
      },
      {
        title: "Lead responsible AI adoption",
        detail: "Navigate AI adoption with the right balance of innovation, governance, risk and responsibility.",
      },
      {
        title: "Evaluate AI opportunities",
        detail: "Assess AI use cases for business value, feasibility, impact and scalability.",
      },
      {
        title: "Understand GenAI & Agentic AI",
        detail: "Explore the evolving capabilities of GenAI and Agentic AI and their implications for leadership.",
      },
    ],
    journey: ["AI Awareness", "AI Strategy", "AI Governance", "AI Transformation", "AI-Driven Leadership"],
    imageSrc: "/images/pages/programs/ai-leadership/benefits-ai-leadership.png",
    imageAlt: "A technology leader presenting a digital market dashboard to a colleague",
  },
  mentors: {
    heading: {
      eyebrow: "Mentor & Coaches",
      title: "Seamlessly add mentoring to",
      accent: "existing leadership.",
      description:
        "Boost the impact of your development efforts with scalable mentoring. Tailored matches between leaders bring real connection into the learning experience.",
    },
    mentorCount: "10",
    coachCount: "12",
    footnote: "Chief Mentors · 20 Countries",
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
  recognition: {
    eyebrow: "Certification & Digital Recognition",
    titleStart: "Earn a",
    accent: "Credential",
    titleEnd: "You Can Showcase",
    summary:
      "Complete the program and receive a formal Canada School of Leadership credential designed for professional recognition, digital sharing and career visibility.",
    badges: ["LinkedIn Ready", "Digital Badge", "Credential Verification"],
    certificateProgram: "AI Leadership Program",
    imageSrc: "/images/pages/programs/ai-leadership/recognition-certificate.png",
    imageAlt: "Canada School of Leadership executive certificate with digital credential and LinkedIn recognition",
  },
  difference: {
    heading: {
      eyebrow: "About Canada School of Leadership",
      title: "Real experience. Real authority.",
      accent: "Real Transformation",
      description:
        "We believe our learners do not need another theory or certification, they need real transformation to face real leadership challenges without fear of losing jobs. We put them into extensive engagement.",
    },
    banner: {
      lead: "De-Risk your career with",
      emphasis: "Real Experience & Real Transformation",
      summary:
        "We believe our learners do not need another theory or certification, they need real transformation to face real leadership challenges without fear of losing jobs.",
      timeline: ["Month 1", "Month 2", "Month 3", "Final stage"],
      stages: ["Self-Realization", "Receptiveness", "UnLearn", "Relearn", "Model building"],
      imageSrc: "/images/pages/blog/emotional-intelligence-leadership-skill.jpg",
      imageAlt: "Two leaders celebrating a breakthrough in a meeting room",
    },
    authorities: [
      {
        title: "Regional Authority",
        detail: "Regional meetups, CXO portfolio, digital assets, and go-to-market learning.",
        icon: "earth",
      },
      {
        title: "Academic Authority",
        detail: "International publications, white papers, guest speakers, interactions with academic experts.",
        icon: "graduation-cap",
      },
      {
        title: "Leadership Authority",
        detail:
          "Executive interviews, group discussions, leadership events, & opportunities to demonstrate leadership thinking.",
        icon: "business",
      },
      {
        title: "Mentoring Authority",
        detail: "1:1 counselling sessions, peer mentoring, & access to an experienced industry network.",
        icon: "mentoring",
      },
      {
        title: "Learning Experience",
        detail:
          "LMS, eLearning, blended learning, eBooks, audiobooks, pre-recorded sessions, and experience-based learning resources.",
        icon: "brain",
      },
      {
        title: "Practice Authority",
        detail:
          "Learn from Domain Specialists and Practice Leaders who bring real-world perspectives & challenges into your leadership journey.",
        icon: "rocket",
      },
    ],
  },
  callToAction: {
    title: "Want to understand whether this program fits your",
    accent: "leadership journey?",
  },
  organisationFaqs: [
    {
      question: "What is the Canada School of Leadership?",
      answer:
        "CSL is a leadership education platform focused on helping experienced professionals build practical executive capability, authority and visibility.",
    },
    {
      question: "Who teaches and mentors CSL participants?",
      answer:
        "Participants learn from experienced practitioners, executives, mentors and coaches with regional and global leadership perspectives.",
    },
    {
      question: "Does CSL offer global participation?",
      answer:
        "Yes. Programs are designed for professionals across regions, with online learning and engagement opportunities that support a global cohort.",
    },
    {
      question: "What makes CSL learning different?",
      answer:
        "CSL combines executive learning with applied activities, mentoring, peer exchange, professional recognition and real organisational context.",
    },
  ],
  faqs: [
    {
      question: "Is this an AI technical certification?",
      answer:
        "No. It is an executive AI leadership program, not a programming or machine-learning engineering course.",
    },
    {
      question: "Do I need a technical background?",
      answer:
        "A technology background helps, but participants do not need to be AI developers. The focus is strategic, business, governance and leadership.",
    },
    {
      question: "Is this suitable for entry-level professionals?",
      answer: "No. The program is intentionally positioned for experienced professionals and leaders.",
    },
    {
      question: "What is the duration?",
      answer:
        "Six months, allowing participants to progress through the strategic areas while applying learning to practical contexts.",
    },
    {
      question: "Is the learning completely self-paced?",
      answer:
        "It combines structured digital learning with activities, expert perspectives, mentoring and peer interaction. The advisor explains the exact delivery format.",
    },
    {
      question: "Will I work on a real business situation?",
      answer:
        "Yes. Participants apply learning to their own organisational or strategic context, brought together in the capstone.",
    },
    {
      question: "What is the capstone project?",
      answer:
        "An Executive AI Transformation Blueprint covering current state, opportunities, priority use cases, governance and risk, technology, ROI, people and a phased roadmap.",
    },
    {
      question: "Will this help me become an AI engineer?",
      answer:
        "That is not the purpose. The focus is on becoming a more capable AI-aware executive, strategist and transformation leader.",
    },
    {
      question: "How do I know if the program is right for me?",
      answer:
        "Speak with a CSL program advisor about your experience, current role and leadership objectives.",
    },
  ],
};
