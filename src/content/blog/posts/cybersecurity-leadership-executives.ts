import { editorialTeamAuthor } from "../authors";
import { defineBlogPost } from "../define-blog-post";

export const cybersecurityLeadershipPost = defineBlogPost({
  // Unsplash photo-1573164713988-8665fc963095 (Unsplash License), 3840×1449 crop.
  imageSrc: "/images/pages/blog/cybersecurity-leadership-for-executives.jpg",
  imageAlt: "Two professionals with tablets talking in a data centre corridor",
  slug: "cybersecurity-leadership-for-executives",
  title: "Cybersecurity Leadership: What Non-Technical Executives Need To Know",
  shortTitle: "Cyber Leadership",
  excerpt:
    "Understand cyber risk in business terms and ask the questions that keep your organization resilient.",
  category: "IT & Cyber Security",
  publishedAt: "2026-07-08T00:00:00.000Z",
  author: editorialTeamAuthor,
  tags: ["IT & Cyber Security", "Risk Management", "Governance"],
  tldr: [
    "Cybersecurity is a business risk, not only a technology issue.",
    "Executives set the tone through governance, budget and accountability.",
    "Asking the right questions matters more than knowing every tool.",
    "Practised incident response limits damage when something goes wrong.",
  ],
  quote: {
    text: "There are only two types of companies: those that have been hacked and those that will be.",
    attribution: "Robert S. Mueller III",
  },
  introduction: {
    title: "Key takeaways",
    paragraphs: [
      "Executives do not need to configure firewalls to lead on cybersecurity. They do need to understand which risks matter most, who owns them and how the organization will respond when an incident occurs.",
    ],
    bullets: [
      "Frame cyber risk alongside financial, operational and reputational risk.",
      "Assign clear ownership for critical systems and data.",
      "Rehearse incident response before a real event tests it.",
    ],
  },
  stats: [
    { value: "6", label: "Functions in NIST CSF 2.0", trend: "NIST" },
    { value: "4", label: "Board questions to ask quarterly", trend: "Govern" },
    { value: "2", label: "Incident exercises each year", trend: "Practice" },
  ],
  comparison: {
    title: "Technical vs. executive view of cyber risk",
    columns: ["Topic", "Technical view", "Executive view"],
    rows: [
      ["Vulnerabilities", "Open issues by severity", "Exposure of critical services and data"],
      ["Metrics", "Alerts handled and patches applied", "Risk trends against agreed tolerance"],
      ["Incidents", "Containment and recovery steps", "Customer, legal and reputational impact"],
      ["Investment", "Tool and headcount requests", "Risk reduced for each dollar spent"],
    ],
  },
  sections: [
    {
      title: "Why Cybersecurity Is A Leadership Issue",
      paragraphs: [
        "Cyber incidents disrupt operations, damage trust and can trigger legal and regulatory obligations. That makes cybersecurity a leadership responsibility that sits alongside strategy, finance and operations.",
        "When executives treat security as a shared business priority, teams get clearer direction, budgets align with real risks and response plans have the authority they need.",
      ],
    },
    {
      title: "Questions Every Executive Should Ask",
      paragraphs: [
        "You do not need technical depth to lead well. You need consistent, informed questions that keep security visible.",
      ],
      bullets: [
        "What are our most critical systems and data, and who owns them?",
        "Which risks exceed our tolerance, and what is the plan to reduce them?",
        "How quickly can we detect, contain and recover from an incident?",
        "When did we last test our response plan, and what did we learn?",
      ],
      note: {
        title: "Keep in mind",
        body: "Cybersecurity frameworks and regulatory expectations change over time. Review current guidance and obligations for your sector and jurisdiction with qualified advisors.",
      },
    },
    {
      title: "Key Takeaways",
      paragraphs: ["Strong cybersecurity leadership is visible, consistent and accountable."],
      bullets: [
        "Discuss cyber risk in business terms at every leadership level.",
        "Fund security based on risk reduction, not only on tool requests.",
        "Practise incident response so roles are clear before they are needed.",
      ],
    },
  ],
  cta: {
    title: "Lead with confidence on cyber risk",
    points: [
      "Translate technical risk into business decisions",
      "Strengthen governance and accountability",
    ],
    label: "Explore Programs",
    href: "/programs",
  },
  faqIntro:
    "Find quick answers about the role executives play in cybersecurity and digital risk.",
  faqs: [
    {
      question: "Do executives need technical cybersecurity training?",
      answer:
        "Not deep technical training. Executives benefit most from understanding risk, governance, responsibilities and how to oversee response plans.",
    },
    {
      question: "Who should own cybersecurity in an organization?",
      answer:
        "Security teams manage controls, but accountability for risk should sit with business leaders and be overseen by the executive team or board.",
    },
    {
      question: "How often should leadership review cyber risk?",
      answer:
        "Many organizations review key risks quarterly and receive faster updates when significant incidents or changes occur.",
    },
    {
      question: "What is a tabletop exercise?",
      answer:
        "It is a guided discussion that walks leaders through a simulated incident to test decisions, communication and roles.",
    },
    {
      question: "Where should we start if our program is new?",
      answer:
        "Identify critical assets, assign owners, assess the biggest risks and agree on an incident response plan.",
    },
  ],
});
