import { editorialTeamAuthor } from "../authors";
import { defineBlogPost } from "../define-blog-post";

export const mentorshipRetentionPost = defineBlogPost({
  // Unsplash photo-1522202176988-66273c2fd55f (Unsplash License), 3840×1449 crop.
  imageSrc: "/images/pages/blog/mentorship-programs-employee-retention.jpg",
  imageAlt: "Three colleagues laughing together during a conversation at a shared table",
  slug: "mentorship-programs-employee-retention",
  title: "How Mentorship Programs Improve Employee Retention And Growth",
  shortTitle: "Mentorship & Retention",
  excerpt:
    "Discover how structured mentoring builds belonging, accelerates development and keeps talent engaged.",
  category: "Employee Retention",
  publishedAt: "2026-04-21T00:00:00.000Z",
  author: editorialTeamAuthor,
  tags: ["Employee Retention", "Mentorship", "Career Development"],
  tldr: [
    "People stay where they can see a future for themselves.",
    "Mentoring builds relationships that make employees feel valued.",
    "Structure turns good intentions into a consistent program.",
    "Mentors grow as leaders while they support others.",
  ],
  quote: {
    text: "Train people well enough so they can leave, treat them well enough so they don't want to.",
    attribution: "Richard Branson",
  },
  introduction: {
    title: "Key takeaways",
    paragraphs: [
      "Mentorship connects employees with experienced colleagues who can share perspective, open doors and help them navigate their careers. When it is well designed, it becomes one of the most effective retention tools an organization has.",
    ],
    bullets: [
      "Mentees gain guidance, confidence and visibility for their development.",
      "Mentors strengthen their coaching and leadership skills.",
      "Organizations build stronger internal networks and a pipeline of future leaders.",
    ],
  },
  stats: [
    { value: "6", label: "Months for a mentoring cycle", trend: "Cycle" },
    { value: "2", label: "Check-ins each month", trend: "Rhythm" },
    { value: "3", label: "Goals for every mentee", trend: "Focus" },
  ],
  comparison: {
    title: "Mentoring vs. coaching",
    columns: ["Criteria", "Mentoring", "Coaching"],
    rows: [
      ["Focus", "Long-term career growth", "Specific skills or performance goals"],
      ["Duration", "Often several months or longer", "Usually shorter and time-bound"],
      ["Led by", "An experienced colleague", "A trained coach or manager"],
      ["Best for", "Belonging, perspective and networks", "Targeted development and accountability"],
    ],
  },
  sections: [
    {
      title: "Why Mentorship Supports Retention",
      paragraphs: [
        "Employees are more likely to stay when they feel supported and can see a path forward. A mentor provides both: a trusted relationship and practical guidance on how to grow inside the organization.",
        "Mentorship also helps new hires settle in faster, connects people across teams and gives high-potential employees a reason to invest in their future with you.",
      ],
    },
    {
      title: "Design A Program That Lasts",
      paragraphs: [
        "The strongest programs balance structure with flexibility so relationships can develop naturally.",
      ],
      bullets: [
        "Match mentors and mentees based on goals, not only on seniority.",
        "Set expectations for meeting frequency and the length of each cycle.",
        "Give mentors simple guides for goal setting and feedback conversations.",
        "Collect feedback at the midpoint and end of every cycle.",
      ],
      note: {
        title: "Keep in mind",
        body: "Mentorship should never replace a manager's responsibility for development. It works best as an additional source of support and perspective.",
      },
    },
    {
      title: "Key Takeaways",
      paragraphs: [
        "Mentorship turns development into a relationship that people value and want to keep.",
      ],
      bullets: [
        "Start small with a pilot group and clear goals.",
        "Recognize mentors for the time and care they invest.",
        "Measure engagement and internal mobility to show impact.",
      ],
    },
  ],
  cta: {
    title: "Build a culture where people grow and stay",
    points: ["Develop mentors who lead with purpose", "Create clear paths for career growth"],
    label: "Explore Programs",
    href: "/programs",
  },
  faqIntro:
    "Find quick answers about designing mentorship programs that support engagement and retention.",
  faqs: [
    {
      question: "What is the difference between mentoring and coaching?",
      answer:
        "Mentoring focuses on long-term growth through an experienced colleague, while coaching usually targets specific skills over a shorter period.",
    },
    {
      question: "How long should a mentoring relationship last?",
      answer:
        "Many programs run in cycles of several months, with the option to continue informally afterwards.",
    },
    {
      question: "Who should become a mentor?",
      answer:
        "Look for people who listen well, share knowledge generously and are committed to others' growth, regardless of title.",
    },
    {
      question: "How do we match mentors and mentees?",
      answer:
        "Match based on goals, skills and interests. Let participants share preferences and review matches before they begin.",
    },
    {
      question: "How can we measure success?",
      answer:
        "Track participant feedback, engagement scores, internal promotions and retention among program participants.",
    },
  ],
});
