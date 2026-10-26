import { mentors } from "@/content/shared/mentors";
import { testimonials } from "@/content/shared/testimonials";
import type { Testimonial } from "@/types/content";
import type { CaseStudy, StoryVideo, SuccessStoriesContent } from "@/types/success-story";

const learningHeading = {
  title: "What leaders say about their",
  accent: "learning experience.",
  description:
    "Perspectives from technology leaders on how the program shaped their thinking, decision-making and approach to AI.",
};

// Placeholder testimonials, like the placeholder case studies below, so the list has more to open
// behind "Show More". Replace each with an approved participant quote; with three or fewer
// testimonials in total, the button hides itself.
const placeholderTestimonials: Testimonial[] = Array.from({ length: 3 }, () => ({
  quote:
    "Perspectives from technology leaders on how the program shaped their thinking, decision-making and approach to AI.",
  name: "Name Of Leader",
  role: "Leadership Role",
  organization: "Organisation",
  region: "Region",
}));

// Placeholder episodes until the podcast thumbnails and links are supplied.
const placeholderVideos: StoryVideo[] = Array.from({ length: 6 }, (_, index) => ({
  title: `Leadership podcast episode ${index + 1}`,
  imageSrc: "/images/pages/blog/leading-hybrid-teams-without-losing-momentum.jpg",
  imageAlt: "Technology leaders in conversation on a video call",
}));

// Placeholder case studies, as in the design, until approved client stories are supplied.
const placeholderPortraits = [
  { imageSrc: "/images/pages/blog/emotional-intelligence-leadership-skill.jpg", imagePosition: "27% center" },
  { imageSrc: "/images/pages/blog/stay-interviews-retention-conversation.jpg", imagePosition: "45% center" },
  { imageSrc: "/images/pages/blog/cisa-certified-role-interview-questions.jpg", imagePosition: "70% center" },
];

const placeholderCaseStudies: CaseStudy[] = Array.from({ length: 6 }, (_, index) => ({
  client: "Name Of Client",
  summary: "Perspectives from technology leaders on how the program shaped their thinking.",
  imageAlt: "Portrait of a program participant",
  ...placeholderPortraits[index % placeholderPortraits.length],
}));

export const successStories: SuccessStoriesContent = {
  hero: {
    eyebrow: "Success Stories",
    title: "From Leadership Potential to",
    accent: "Leadership Impact",
    summary:
      "Real stories of professionals and organizations who transformed their leadership capabilities, visibility, and influence through CSL.",
    // Placeholder until the hero portrait is added under /images/pages/success-stories.
    imageSrc: "/images/pages/blog/stay-interviews-retention-conversation.jpg",
    imageAlt: "A program graduate smiling during a leadership conversation",
    alumniCount: "45+",
    alumniLabel: "leaders transformed through CSL",
  },
  advisor: {
    title: "Explore the AI Leadership program",
    intro:
      "Speak with a program advisor about the curriculum, learning model, eligibility and fit for your leadership journey.",
  },
  testimonials: {
    heading: { eyebrow: "Testimonials", ...learningHeading },
    items: [...testimonials, ...placeholderTestimonials],
  },
  videos: {
    heading: { eyebrow: "Video", ...learningHeading },
    items: placeholderVideos,
  },
  faculty: {
    heading: {
      eyebrow: "Faculty",
      title: "Seamlessly add mentoring to",
      accent: "existing leadership.",
      description:
        "Boost the impact of your development efforts with scalable mentoring. Tailored matches between leaders bring real connection into the learning experience.",
    },
    panelLabel: "Faculty",
    total: "10",
    footnote: "Faculties · 20 Countries",
    members: mentors,
  },
  caseStudies: {
    heading: { eyebrow: "Case Studies", ...learningHeading },
    items: placeholderCaseStudies,
  },
  transformation: {
    title: "The Transformation",
    summary:
      "We believe our learners do not need another theory or certification, they need real Transformation to face real Leadership challenges without fear of losing jobs.",
    outcomesLabel: "Key Outcome",
    outcomes: ["Leadership Growth", "Executive Presence", "Career Advancement"],
    journey: ["Expertise", "Confidence", "Visibility", "Influence", "Impact"],
    imageSrc: "/images/pages/blog/emotional-intelligence-leadership-skill.jpg",
    imageAlt: "Two leaders celebrating a breakthrough in a meeting room",
  },
};
