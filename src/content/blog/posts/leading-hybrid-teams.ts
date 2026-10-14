import { editorialTeamAuthor } from "../authors";
import { defineBlogPost } from "../define-blog-post";

export const leadingHybridTeamsPost = defineBlogPost({
  // Unsplash photo-1588196749597-9ff075ee6b5b (Unsplash License), 3840×1449 crop.
  imageSrc: "/images/pages/blog/leading-hybrid-teams-without-losing-momentum.jpg",
  imageAlt: "A laptop showing a video call with a grid of remote team members",
  slug: "leading-hybrid-teams-without-losing-momentum",
  title: "How To Lead Hybrid Teams Without Losing Momentum Or Connection",
  shortTitle: "Hybrid Leadership",
  excerpt:
    "Practical rituals, clear communication norms and fair visibility for every member of a hybrid team.",
  category: "Leadership",
  publishedAt: "2026-08-28T00:00:00.000Z",
  author: editorialTeamAuthor,
  tags: ["Leadership", "Hybrid Work", "Communication"],
  tldr: [
    "Hybrid teams need deliberate structure, not more meetings.",
    "Clear communication norms reduce delays and second-guessing.",
    "Fair visibility matters as much as flexibility for remote members.",
    "Rituals such as weekly priorities and demos keep everyone aligned.",
  ],
  quote: {
    text: "The great enemy of communication, we find, is the illusion of it.",
    attribution: "William H. Whyte",
  },
  introduction: {
    title: "Key takeaways",
    paragraphs: [
      "Hybrid work gives people flexibility, but it also splits a team's attention across locations, time zones and channels. Leaders who keep momentum make expectations explicit instead of hoping they spread naturally.",
    ],
    bullets: [
      "Agree where decisions are made and recorded so nobody misses them.",
      "Design meetings for the people who are remote, not only for the room.",
      "Recognize outcomes rather than visibility in the office.",
    ],
  },
  stats: [
    { value: "3", label: "Weekly rituals to keep alignment", trend: "Rhythm" },
    { value: "4", label: "Channels to define clearly", trend: "Norms" },
    { value: "24h", label: "Reply window for async requests", trend: "Pace" },
  ],
  comparison: {
    title: "Office-first vs. hybrid-first habits",
    columns: ["Practice", "Office-first habit", "Hybrid-first habit"],
    rows: [
      [
        "Meetings",
        "Remote attendees join a room conversation",
        "Everyone joins on their own screen with a shared agenda",
      ],
      ["Decisions", "Made in hallway conversations", "Documented in a shared channel within a day"],
      ["Updates", "Shared verbally at desks", "Posted asynchronously with clear owners"],
      ["Recognition", "Goes to the most visible people", "Tied to outcomes and shared publicly"],
    ],
  },
  sections: [
    {
      title: "Why Hybrid Teams Lose Momentum",
      paragraphs: [
        "Momentum rarely disappears in one dramatic moment. It erodes when updates live in private chats, decisions happen between the people who share an office and remote colleagues learn about changes after the fact.",
        "The fix is not constant check-ins. It is a shared operating rhythm that tells everyone where to look, when to contribute and how quickly to expect a response.",
      ],
    },
    {
      title: "Set Norms Your Team Can Rely On",
      paragraphs: [
        "Write down a small number of working agreements and revisit them every quarter. Clear norms remove guesswork and protect focus time.",
      ],
      bullets: [
        "Choose one channel for urgent issues and one for decisions.",
        "Share agendas before meetings and notes with owners afterwards.",
        "Protect overlapping hours for collaboration and leave the rest for deep work.",
        "Rotate meeting times when the team spans several time zones.",
      ],
      note: {
        title: "Keep in mind",
        body: "Norms only work when leaders follow them first. If you answer urgent questions in private messages, the team will too.",
      },
    },
    {
      title: "Key Takeaways",
      paragraphs: ["Hybrid teams thrive when structure replaces assumptions."],
      bullets: [
        "Make information easy to find for every member, wherever they work.",
        "Use a predictable weekly rhythm for priorities, progress and demos.",
        "Measure contribution by outcomes, not by who is seen in the office.",
      ],
    },
  ],
  cta: {
    title: "Build a stronger hybrid leadership practice",
    points: ["Lead distributed teams with confidence", "Create communication habits that scale"],
    label: "Explore Programs",
    href: "/programs",
  },
  faqIntro: "Find quick answers about leading hybrid and distributed teams effectively.",
  faqs: [
    {
      question: "How often should a hybrid team meet?",
      answer:
        "Most teams benefit from a short weekly planning session and a regular demo or review. Use asynchronous updates for everything else.",
    },
    {
      question: "How do I keep remote members included?",
      answer:
        "Run meetings so everyone joins on equal terms, share materials in advance and rotate who leads discussions.",
    },
    {
      question: "Should hybrid teams have fixed office days?",
      answer:
        "Shared office days can help with collaboration, but they work best when the time is used for activities that benefit from being together.",
    },
    {
      question: "What tools do hybrid teams need?",
      answer:
        "A reliable video platform, a shared workspace for documents and one agreed channel for decisions cover most needs.",
    },
    {
      question: "How do I measure performance fairly?",
      answer:
        "Agree on clear outcomes for each role and review progress against them rather than relying on visibility or hours online.",
    },
  ],
});
