import type { Mentor } from "@/types/content";

// Chief mentors of the cSuite Networks partnership, as published on csuitenetworks.com.
// Photos are square head-and-shoulders crops of the portraits there, kept in /images/people;
// LinkedIn links are the ones cSuite publishes for each mentor.

/** Chief mentors shown on the program and success stories pages. */
export const mentors: Mentor[] = [
  {
    name: "Dr. Trilok Singh",
    role: "Chief Mentor, India & Global",
    imageSrc: "/images/people/trilok-singh.jpg",
    linkedinHref: "https://www.linkedin.com/in/drtriloksingh/",
  },
  {
    name: "Dr. Suresh A Shan",
    role: "Chief Mentor, Asia",
    imageSrc: "/images/people/suresh-a-shan.jpg",
    linkedinHref: "https://www.linkedin.com/in/assuresh/",
  },
  {
    name: "Dr. Sona Saha Das",
    role: "Chief Mentor, Digital Transformation",
    imageSrc: "/images/people/sona-saha-das.jpg",
    linkedinHref: "https://www.linkedin.com/in/sonasahadas/",
  },
];
