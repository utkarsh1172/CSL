import { editorialTeamAuthor } from "../authors";
import { defineBlogPost } from "../define-blog-post";

export const microlearningPost = defineBlogPost({
  // Unsplash photo-1563986768609-322da13575f3 (Unsplash License), 3840×1449 crop.
  imageSrc: "/images/pages/blog/microlearning-for-busy-professionals.jpg",
  imageAlt: "A professional checking a short lesson on a phone while working on a laptop",
  slug: "microlearning-for-busy-professionals",
  title: "Microlearning: How Busy Professionals Keep Their Skills Current",
  shortTitle: "Microlearning",
  excerpt:
    "Short, focused learning sessions help professionals build skills steadily without pausing their careers.",
  category: "Learning",
  publishedAt: "2026-05-26T00:00:00.000Z",
  author: editorialTeamAuthor,
  tags: ["Learning", "Professional Development", "Productivity"],
  tldr: [
    "Short, focused sessions fit around demanding schedules.",
    "Spacing reviews over time helps knowledge stick.",
    "Applying a skill at work right away accelerates learning.",
    "Microlearning complements, rather than replaces, deeper programs.",
  ],
  quote: {
    text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
    attribution: "Brian Herbert",
  },
  introduction: {
    title: "Key takeaways",
    paragraphs: [
      "Microlearning breaks skills into short, focused lessons that can be completed in minutes. For professionals balancing work, family and growth, it offers a realistic way to keep learning every week.",
    ],
    bullets: [
      "Each session focuses on one idea, technique or decision.",
      "Regular review helps move knowledge from short-term to long-term memory.",
      "Learning sticks best when it is applied at work soon after the lesson.",
    ],
  },
  stats: [
    { value: "10", label: "Minutes per focused session", trend: "Format" },
    { value: "3", label: "Spaced reviews per key concept", trend: "Recall" },
    { value: "5", label: "Days a week to build the habit", trend: "Habit" },
  ],
  comparison: {
    title: "Traditional training vs. microlearning",
    columns: ["Criteria", "Traditional training", "Microlearning"],
    rows: [
      ["Session length", "Half-day or full-day workshops", "Five to fifteen minutes"],
      ["Timing", "Scheduled well in advance", "Fits into gaps in the workday"],
      ["Retention", "Single exposure to content", "Spaced repetition and quick practice"],
      ["Best for", "Complex topics and deep discussion", "Reinforcing skills and building habits"],
    ],
  },
  sections: [
    {
      title: "Why Microlearning Works",
      paragraphs: [
        "Long workshops can be valuable, but much of what we learn in a single session fades without reinforcement. Microlearning addresses this by revisiting ideas in short bursts and connecting them to real work.",
        "Because sessions are brief, they are easier to schedule and easier to repeat. Over a quarter, a few minutes a day adds up to meaningful progress.",
      ],
    },
    {
      title: "Build A Microlearning Routine",
      paragraphs: ["A good routine is simple enough to sustain during busy weeks."],
      bullets: [
        "Pick one skill to focus on for the next four to six weeks.",
        "Schedule short sessions at the same time each day.",
        "Apply one idea at work within a day of learning it.",
        "Review earlier lessons at increasing intervals to strengthen recall.",
      ],
      note: {
        title: "Keep in mind",
        body: "Microlearning is most effective when it supports a clear goal. Pair it with structured programs or coaching when you need to master complex topics.",
      },
    },
    {
      title: "Key Takeaways",
      paragraphs: ["Consistency beats intensity when it comes to building professional skills."],
      bullets: [
        "Keep sessions short and focused on one outcome.",
        "Use spaced review to make knowledge last.",
        "Connect every lesson to a task you will complete this week.",
      ],
    },
  ],
  cta: {
    title: "Keep your skills growing every week",
    points: [
      "Flexible learning built around your schedule",
      "Practical lessons you can apply immediately",
    ],
    label: "Explore Programs",
    href: "/programs",
  },
  faqIntro:
    "Find quick answers about using microlearning to build skills alongside a demanding role.",
  faqs: [
    {
      question: "What is microlearning?",
      answer:
        "It is an approach that delivers learning in short, focused units, often lasting a few minutes, that each cover a single idea or skill.",
    },
    {
      question: "Can microlearning replace full courses?",
      answer:
        "It works best alongside deeper programs. Use it to reinforce concepts, build habits and keep skills current.",
    },
    {
      question: "How often should I study?",
      answer:
        "Short daily sessions are easier to sustain than occasional long ones. Even a few minutes on most workdays builds momentum.",
    },
    {
      question: "What topics suit microlearning?",
      answer:
        "Frameworks, communication techniques, tool skills and decision checklists all work well in short formats.",
    },
    {
      question: "How do I know it is working?",
      answer:
        "Track whether you are applying new skills at work and whether colleagues notice changes in your results.",
    },
  ],
});
