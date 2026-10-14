import { editorialTeamAuthor } from "../authors";
import { defineBlogPost } from "../define-blog-post";

export const emotionalIntelligencePost = defineBlogPost({
  // Unsplash photo-1600880292203-757bb62b4baf (Unsplash License), 3840×1449 crop.
  imageSrc: "/images/pages/blog/emotional-intelligence-leadership-skill.jpg",
  imageAlt: "Two colleagues sharing a high five in a bright office",
  slug: "emotional-intelligence-leadership-skill",
  title: "Why Emotional Intelligence Is The Leadership Skill Teams Remember Most",
  shortTitle: "Emotional Intelligence",
  excerpt:
    "See how self-awareness, empathy and steady judgement help leaders build trust under pressure.",
  category: "Leadership",
  publishedAt: "2026-09-22T00:00:00.000Z",
  author: editorialTeamAuthor,
  tags: ["Leadership", "Emotional Intelligence", "Team Culture"],
  tldr: [
    "Teams remember how a leader made them feel long after a project ends.",
    "Emotional intelligence is a set of skills that can be practised, not a fixed trait.",
    "Self-awareness and self-regulation come first; empathy builds on them.",
    "Small, repeatable habits create more change than one-off workshops.",
  ],
  quote: {
    text: "When dealing with people, let us remember we are not dealing with creatures of logic. We are dealing with creatures of emotion.",
    attribution: "Dale Carnegie",
  },
  introduction: {
    title: "Key takeaways",
    paragraphs: [
      "Emotional intelligence (EI) is the ability to recognize and manage your own emotions while understanding and influencing the emotions of others. Daniel Goleman's widely used model groups it into five components.",
    ],
    bullets: [
      "Self-awareness and self-regulation shape how leaders respond when plans change or pressure rises.",
      "Motivation, empathy and social skill determine how well leaders build trust and lead change.",
      "Each component can be strengthened through feedback, reflection and deliberate practice.",
    ],
  },
  stats: [
    { value: "5", label: "Components in Goleman's EI model", trend: "Model" },
    { value: "4", label: "Daily habits to practise", trend: "Habits" },
    { value: "90", label: "Days to build a feedback rhythm", trend: "Plan" },
  ],
  comparison: {
    title: "Reactive vs. emotionally intelligent responses",
    columns: ["Moment", "Reactive response", "Emotionally intelligent response"],
    rows: [
      ["Missed deadline", "Looks for someone to blame", "Asks what blocked progress and resets the plan"],
      [
        "Critical feedback",
        "Defends the decision immediately",
        "Listens fully, then responds with specifics",
      ],
      [
        "Team conflict",
        "Avoids it or picks a side",
        "Names the tension and facilitates a fair conversation",
      ],
      ["High pressure", "Passes stress down to the team", "Steadies the room and clarifies priorities"],
    ],
  },
  sections: [
    {
      title: "What Emotional Intelligence Looks Like At Work",
      paragraphs: [
        "Emotional intelligence shows up in ordinary moments: how a leader opens a difficult meeting, responds to a missed target or recognizes effort that nobody else noticed. These moments add up to the culture people experience every day.",
        "Leaders with strong EI are not always calm or agreeable. They notice what they are feeling, choose a response deliberately and stay curious about how others see the same situation.",
      ],
    },
    {
      title: "Build The Habits That Strengthen EI",
      paragraphs: [
        "Like any leadership capability, emotional intelligence grows through repetition. Choose a few habits and practise them consistently before adding more.",
      ],
      bullets: [
        "Pause before responding in tense conversations and name what you are feeling.",
        "Ask one open question in every one-to-one before offering advice.",
        "Request specific feedback on how your communication lands with the team.",
        "Close each week by reflecting on one interaction you would handle differently.",
      ],
      note: {
        title: "Keep in mind",
        body: "Emotional intelligence is not about suppressing emotion. The goal is to understand it and choose a response that serves the team and the situation.",
      },
    },
    {
      title: "Key Takeaways",
      paragraphs: [
        "Emotional intelligence turns good intentions into consistent behaviour that teams can rely on.",
      ],
      bullets: [
        "Start with self-awareness; it makes every other component easier to develop.",
        "Use 360-degree feedback to find blind spots you cannot see on your own.",
        "Model the behaviour you expect, especially when pressure is highest.",
      ],
    },
  ],
  cta: {
    title: "Lead with clarity and confidence",
    points: [
      "Strengthen self-awareness and empathy",
      "Turn feedback into everyday leadership habits",
    ],
    label: "Explore Programs",
    href: "/programs",
  },
  faqIntro:
    "Find quick answers about developing emotional intelligence as a leader and applying it with your team.",
  faqs: [
    {
      question: "Can emotional intelligence be learned?",
      answer:
        "Yes. Widely used models treat emotional intelligence as a set of skills that improve with feedback, reflection and deliberate practice.",
    },
    {
      question: "Is emotional intelligence the same as being nice?",
      answer:
        "No. Emotionally intelligent leaders still make difficult decisions and give direct feedback; they do it with awareness of the impact on people.",
    },
    {
      question: "How do I measure my emotional intelligence?",
      answer:
        "Validated self-assessments and 360-degree feedback are common starting points. Comparing both views helps reveal blind spots.",
    },
    {
      question: "Which component should I develop first?",
      answer:
        "Most leaders start with self-awareness because it makes self-regulation, empathy and social skill easier to build.",
    },
    {
      question: "How long does it take to see change?",
      answer:
        "Teams often notice small shifts within weeks when habits are practised consistently. Lasting change usually takes several months.",
    },
  ],
});
