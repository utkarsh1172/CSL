import type { Mentor } from "@/types/content";

// Domain specialists of the cSuite Networks partnership (csuitenetworks.com/specialists), shown
// as the program's coaches with their own specialist titles. Photos are square crops of the
// portraits there, kept in /images/people; LinkedIn links are the ones cSuite publishes.

/** Coach roster shown when the program faculty panel flips to its second side. */
export const coaches: Mentor[] = [
  {
    name: "Dr. Shreekant Chaudhari",
    role: "Specialist, Cybersecurity",
    imageSrc: "/images/people/shreekant-chaudhari.jpg",
    linkedinHref: "https://www.linkedin.com/in/shreekantc/",
  },
  {
    name: "Dr. Saurabh Bhatnagar",
    role: "Specialist, Artificial Intelligence",
    imageSrc: "/images/people/saurabh-bhatnagar.jpg",
    linkedinHref: "https://www.linkedin.com/in/saurabhbhatnagar22/",
  },
  {
    name: "Adrien Payong",
    role: "Specialist, Artificial Intelligence",
    imageSrc: "/images/people/adrien-payong.jpg",
    linkedinHref: "https://www.linkedin.com/in/adrien-payong-2a0a781ba/",
  },
];
