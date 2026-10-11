import type { BlogPostDetail, BlogPostSummary } from "@/types/blog";

export const pmpTrainingSlug = "best-time-to-invest-in-pmp-training-canada";

const sharedPost = {
  title: "When Is The Best Time To Invest In PMP Training And Certification In Canada?",
  excerpt:
    "Learn when PMP training creates the most value and how to choose the right certification path.",
  imageSrc: "/images/pages/blog/pmp-training-hero.png",
  href: `/blog/${pmpTrainingSlug}`,
};

export const blogCategories = [
  "Leadership",
  "IT & Cyber Security",
  "Learning",
  "Employee Retention",
] as const;

export const blogPosts: BlogPostSummary[] = [
  { ...sharedPost, id: "pmp-training-1", category: "Leadership" },
  { ...sharedPost, id: "pmp-training-2", category: "IT & Cyber Security" },
  { ...sharedPost, id: "pmp-training-3", category: "Learning" },
  { ...sharedPost, id: "pmp-training-4", category: "Employee Retention" },
  { ...sharedPost, id: "pmp-training-5", category: "Leadership" },
  { ...sharedPost, id: "pmp-training-6", category: "IT & Cyber Security" },
  { ...sharedPost, id: "pmp-training-7", category: "Learning" },
  { ...sharedPost, id: "pmp-training-8", category: "Employee Retention" },
  { ...sharedPost, id: "pmp-training-9", category: "Leadership" },
];

export const blogPostDetails: Record<string, BlogPostDetail> = {
  [pmpTrainingSlug]: {
    ...sharedPost,
    id: "pmp-training-canada",
    slug: pmpTrainingSlug,
    category: "Leadership",
    publishedAt: "2023-03-16T00:00:00.000Z",
    author: {
      name: "Premal D.",
      role: "Content Strategist",
      organization: "CSuite Networks",
      initials: "PD",
      bio: "Premal specializes in executive thought leadership and content strategy. She works with CXOs and senior leaders to create impactful narratives that drive influence and industry change.",
    },
    tags: ["AI", "IT & Cyber security", "IT & Cyber security"],
    tldr: [
      "Digital leadership is no longer optional; it is a business imperative.",
      "The biggest opportunity lies in people, process and culture alignment.",
      "CXOs must build digital fluency, not just rely on technology teams.",
      "Start with small, measurable steps to create long-term impact.",
    ],
    quote: {
      text: "People worry that computers will get too smart and take over the world, but the real problem is that they are too stupid and they have already taken over the world.",
      attribution: "Pedro Domingos",
    },
    introduction: {
      title: "Key takeaways",
      paragraphs: [
        "The Project Management Institute offers the Certified Associate in Project Management (CAPM) and the Project Management Professional (PMP).",
      ],
      bullets: [
        "Professionals with CAPM credentials earn an average salary of $77,000, while those with a PMP earn an average of $120,000.",
        "Both credentials for entrepreneurs sit among the most in-demand professional certifications you can get right now.",
        "You can prepare for the CAPM as an entry-level certification or advance your career with the PMP when you have the required project experience.",
      ],
    },
    stats: [
      { value: "72%", label: "High-value project skills", trend: "+8%" },
      { value: "28%", label: "Career growth potential", trend: "+4%" },
      { value: "13%", label: "Salary uplift reported", trend: "+1.3%" },
    ],
    comparison: {
      title: "CAPM vs. PMP certification: overview",
      columns: ["Criteria", "CAPM", "PMP"],
      rows: [
        ["Best for", "Entry-level project managers", "Experienced project leaders"],
        ["Experience", "Secondary degree plus 23 hours of project management education", "Documented project leadership experience"],
        ["Exam investment", "$300 for non-members; $225 for PMI members", "Varies by membership and location"],
        ["Credential focus", "Project management foundations", "Advanced project leadership"],
      ],
    },
    sections: [
      {
        title: "What Is PMP Certification?",
        paragraphs: [
          "Project leaders often compare the CAPM and PMP certifications to decide which path is right for them. When you are ready to take the next step, consider enrolling in the Google Project Management Professional Certificate. During this seven-course, beginner-friendly series, you will gain an opportunity to learn about the practices and skills that support modern project management.",
          "If you need to build a thriving career in project management, a certification can provide a shareable credential and more than 100 hours of project management education you can apply toward your goals.",
        ],
      },
      {
        title: "Prepare for your next step",
        paragraphs: [
          "Choosing the right moment to invest in certification depends on your experience, the roles you want next and how quickly you can apply what you learn.",
        ],
        bullets: [
          "Use CAPM to establish a recognized foundation when you are early in your career.",
          "Choose PMP when you can validate project leadership experience and want a senior credential.",
          "Plan study time around real projects so that frameworks become practical habits.",
        ],
        note: {
          title: "Keep in mind",
          body: "PMI updates its exams periodically. Review the current exam outline and eligibility requirements before you enrol in a preparation program.",
        },
      },
      {
        title: "Key Takeaways",
        paragraphs: [
          "The best time to invest is when the credential supports a clear next move—not simply when you have an open space in your calendar.",
        ],
        bullets: [
          "Connect the certification to a role, promotion or project responsibility you want to earn.",
          "Compare training formats, instructor access and exam preparation support before choosing a provider.",
          "Create a study schedule with measurable weekly milestones and a target exam date.",
        ],
      },
    ],
    cta: {
      title: "Build job-ready skills with ZOC Learning",
      points: ["Unleash in-demand skills", "Align skill development with business"],
      label: "Enrol Now",
      href: "/programs",
    },
    faqs: [
      {
        question: "Is this an AI technical certification?",
        answer: "No. It is an executive leadership pathway, not a programming or machine-learning engineering course.",
      },
      {
        question: "Do I need a technical background?",
        answer: "No. The content is designed to make technical ideas clear to project and business leaders.",
      },
      {
        question: "Is this suitable for entry-level professionals?",
        answer: "Yes. CAPM is especially suitable for professionals who are building their first formal project-management foundation.",
      },
      {
        question: "What is the duration?",
        answer: "The recommended timeline depends on your selected program and weekly study schedule. An advisor can help you plan the right path.",
      },
      {
        question: "Is the learning completely self-paced?",
        answer: "The learning model combines flexible study with structured milestones and advisor support.",
      },
    ],
    relatedPosts: [
      {
        id: "related-pmp-time",
        title: "When Is The Best Time To Invest In PMP Training and Certification in Canada?",
        href: `/blog/${pmpTrainingSlug}`,
      },
      {
        id: "related-cisa",
        title: "Frequently Asked Questions in a CISA Certified Role Interview",
        href: "/blog",
      },
      {
        id: "related-pmp-exams",
        title: "Top 5 Myths About the PMP Exams",
        href: "/blog",
      },
    ],
  },
};

export function getBlogPostBySlug(slug: string) {
  return blogPostDetails[slug];
}

export function getBlogPostSlugs() {
  return Object.keys(blogPostDetails);
}
