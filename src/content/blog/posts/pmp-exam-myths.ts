import { editorialTeamAuthor } from "../authors";
import { defineBlogPost } from "../define-blog-post";

export const pmpExamMythsPost = defineBlogPost({
  // Unsplash photo-1454165804606-c3d57bc86b40 (Unsplash License), 3840×1449 crop.
  imageSrc: "/images/pages/blog/top-5-myths-about-the-pmp-exam.jpg",
  imageAlt: "A professional writing study notes beside an open laptop",
  slug: "top-5-myths-about-the-pmp-exam",
  title: "Top 5 Myths About The PMP Exam And What Is Actually True",
  shortTitle: "PMP Exam Myths",
  excerpt:
    "Separate fact from fiction about PMP eligibility, study time, agile content and passing the exam.",
  category: "Learning",
  publishedAt: "2026-06-17T00:00:00.000Z",
  author: editorialTeamAuthor,
  tags: ["Learning", "PMP", "Project Management"],
  tldr: [
    "The PMP exam rewards judgement, not memorization.",
    "Agile and hybrid approaches are a significant part of the exam.",
    "Eligibility depends on documented project leadership experience.",
    "A structured study plan matters more than total study hours.",
  ],
  quote: {
    text: "Plans are worthless, but planning is everything.",
    attribution: "Dwight D. Eisenhower",
  },
  introduction: {
    title: "Key takeaways",
    paragraphs: [
      "The Project Management Professional (PMP) certification from the Project Management Institute (PMI) is one of the most recognized credentials in project management. Its popularity also means plenty of outdated advice.",
    ],
    bullets: [
      "Many myths come from older versions of the exam that no longer reflect current content.",
      "Situational questions test how you would act as a project leader, not what you can recite.",
      "Checking PMI's current requirements is the best way to avoid surprises.",
    ],
  },
  stats: [
    { value: "35", label: "Hours of required PM education", trend: "PMI" },
    { value: "36", label: "Months leading projects with a degree", trend: "Eligibility" },
    { value: "3", label: "Domains in the exam outline", trend: "ECO" },
  ],
  comparison: {
    title: "PMP exam myths vs. reality",
    columns: ["Topic", "Myth", "Reality"],
    rows: [
      [
        "Preparation",
        "Memorize the guide and you will pass",
        "Situational questions test applied judgement",
      ],
      [
        "Agile content",
        "The exam only covers predictive projects",
        "Agile and hybrid approaches feature throughout",
      ],
      ["Experience", "Any project work qualifies", "You need documented experience leading projects"],
      [
        "Study time",
        "More hours always mean a better score",
        "A focused plan with practice exams works best",
      ],
    ],
  },
  sections: [
    {
      title: "Why PMP Myths Persist",
      paragraphs: [
        "The PMP exam has evolved over the years, but advice from earlier versions still circulates in forums and study groups. Candidates who follow outdated tips can spend weeks preparing for the wrong things.",
        "The most reliable approach is to start from PMI's current exam content outline and choose preparation materials that align with it.",
      ],
    },
    {
      title: "Five Myths To Leave Behind",
      paragraphs: [
        "These beliefs come up often among first-time candidates. Each one can quietly derail an otherwise solid study plan.",
      ],
      bullets: [
        "Myth 1: You can pass by memorizing definitions and formulas.",
        "Myth 2: Agile content is a small add-on to traditional project management.",
        "Myth 3: Any job that involves projects meets the experience requirement.",
        "Myth 4: You need months of full-time study to be ready.",
        "Myth 5: Failing the first attempt means you are not cut out for project leadership.",
      ],
      note: {
        title: "Keep in mind",
        body: "PMI updates the PMP exam and eligibility requirements periodically. Confirm the current exam content outline, fees and policies on PMI's website before you apply.",
      },
    },
    {
      title: "Key Takeaways",
      paragraphs: ["Preparing well means studying the right content in the right way."],
      bullets: [
        "Base your plan on the current exam content outline.",
        "Practise situational questions and review why each answer is correct.",
        "Document your project experience carefully before you submit your application.",
      ],
    },
  ],
  cta: {
    title: "Prepare for the PMP with expert guidance",
    points: [
      "Study with a structured, exam-aligned plan",
      "Practise situational questions with feedback",
    ],
    label: "Enrol Now",
    href: "/programs",
  },
  faqIntro:
    "Find quick answers about PMP exam preparation, eligibility and common misconceptions.",
  faqs: [
    {
      question: "Is the PMP exam mostly memorization?",
      answer:
        "No. Most questions are situational and ask how a project leader should respond in a specific scenario.",
    },
    {
      question: "Does the exam include agile content?",
      answer:
        "Yes. Agile and hybrid approaches appear throughout the exam alongside predictive project management.",
    },
    {
      question: "What experience do I need to apply?",
      answer:
        "PMI requires documented experience leading projects plus 35 hours of project management education. The number of months depends on your education level.",
    },
    {
      question: "How long should I study?",
      answer:
        "It varies by experience. Many candidates follow a structured plan over several weeks that includes regular practice exams.",
    },
    {
      question: "What happens if I do not pass on my first attempt?",
      answer:
        "PMI allows retakes within your eligibility period. Review your performance report and focus on the weakest areas.",
    },
  ],
});
