import { editorialTeamAuthor } from "../authors";
import { defineBlogPost } from "../define-blog-post";

export const stayInterviewsPost = defineBlogPost({
  // Unsplash photo-1551836022-d5d88e9218df (Unsplash License), 3840×1449 crop.
  imageSrc: "/images/pages/blog/stay-interviews-retention-conversation.jpg",
  imageAlt: "A manager smiling during a one-on-one conversation with a colleague",
  slug: "stay-interviews-retention-conversation",
  title: "Stay Interviews: The Retention Conversation Most Managers Skip",
  shortTitle: "Stay Interviews",
  excerpt:
    "Learn how regular stay interviews uncover what keeps people engaged before they start looking elsewhere.",
  category: "Employee Retention",
  publishedAt: "2026-03-10T00:00:00.000Z",
  author: editorialTeamAuthor,
  tags: ["Employee Retention", "Engagement", "Management"],
  tldr: [
    "Stay interviews ask employees what keeps them and what might push them away.",
    "They surface issues while there is still time to act.",
    "Simple, consistent questions work better than long surveys.",
    "Follow-through is what builds trust in the process.",
  ],
  quote: {
    text: "To win in the marketplace you must first win in the workplace.",
    attribution: "Doug Conant",
  },
  introduction: {
    title: "Key takeaways",
    paragraphs: [
      "Exit interviews explain why people left. Stay interviews explain why people remain and what could change their minds. They are short, structured conversations between a manager and an employee about engagement, growth and frustrations.",
    ],
    bullets: [
      "They focus on the future rather than reviewing past performance.",
      "They give managers early warning about retention risks.",
      "They show employees that their experience matters before they decide to leave.",
    ],
  },
  stats: [
    { value: "5", label: "Questions to open the conversation", trend: "Guide" },
    { value: "30", label: "Minutes per stay interview", trend: "Format" },
    { value: "2", label: "Conversations per person each year", trend: "Rhythm" },
  ],
  comparison: {
    title: "Stay interviews vs. exit interviews",
    columns: ["Criteria", "Stay interview", "Exit interview"],
    rows: [
      ["Timing", "While the employee is engaged", "After the decision to leave"],
      ["Purpose", "Understand what keeps people", "Understand why people left"],
      ["Who benefits", "The employee and the current team", "Future employees"],
      ["Outcome", "Actions that improve retention now", "Lessons for the organization"],
    ],
  },
  sections: [
    {
      title: "Why Stay Interviews Matter",
      paragraphs: [
        "By the time someone resigns, the reasons are often months old. Stay interviews create space to hear about workload, growth, recognition and team dynamics while there is still time to respond.",
        "They also strengthen the relationship between managers and their teams. Employees who feel heard are more likely to raise concerns early instead of quietly disengaging.",
      ],
    },
    {
      title: "Questions To Ask In A Stay Interview",
      paragraphs: [
        "Keep the conversation open and curious. These questions are a strong starting point.",
      ],
      bullets: [
        "What do you look forward to most when you start your workday?",
        "What would make your job more satisfying?",
        "What might tempt you to leave?",
        "What skills would you like to develop this year?",
        "How can I better support you as your manager?",
      ],
      note: {
        title: "Keep in mind",
        body: "Separate stay interviews from performance reviews. Employees speak more openly when the conversation is not tied to ratings or compensation decisions.",
      },
    },
    {
      title: "Key Takeaways",
      paragraphs: [
        "Stay interviews turn retention from guesswork into an ongoing conversation.",
      ],
      bullets: [
        "Hold them regularly and keep the format consistent.",
        "Listen more than you speak and note specific actions.",
        "Follow up on what you heard so employees see results.",
      ],
    },
  ],
  cta: {
    title: "Equip managers to retain great people",
    points: ["Lead meaningful development conversations", "Turn feedback into practical action"],
    label: "Explore Programs",
    href: "/programs",
  },
  faqIntro:
    "Find quick answers about running stay interviews that improve engagement and retention.",
  faqs: [
    {
      question: "What is a stay interview?",
      answer:
        "It is a structured conversation with a current employee about what keeps them engaged and what might lead them to leave.",
    },
    {
      question: "Who should conduct stay interviews?",
      answer:
        "Usually the employee's direct manager, because they are best placed to act on what they hear.",
    },
    {
      question: "How often should we hold them?",
      answer:
        "Many teams hold them once or twice a year, with extra conversations after major changes.",
    },
    {
      question: "Should stay interviews be anonymous?",
      answer:
        "No. They are personal conversations. Use anonymous surveys separately if you need broader, confidential feedback.",
    },
    {
      question: "What should happen after the interview?",
      answer:
        "Agree on one or two actions, share what you can change and check back on progress within a few weeks.",
    },
  ],
});
