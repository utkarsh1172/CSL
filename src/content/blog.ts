import type { BlogPostSummary } from "@/types/blog";

const sharedPost = {
  title: "When Is The Best Time To Invest In PMP Training And Certification In Canada?",
  excerpt:
    "Travelling in sea has many advantages. Some of the advantages of transporting",
  imageSrc: "/images/pages/blog/pmp-training-card.png",
  href: "/insights",
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
