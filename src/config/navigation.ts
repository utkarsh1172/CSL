import type { NavigationGroup } from "@/types/navigation";

export const navigationGroups: NavigationGroup[] = [
  {
    label: "Programs",
    links: [
      { label: "All Programs", href: "/programs" },
      { label: "Leadership Programs", href: "/programs/leadership" },
      { label: "Executive Programs", href: "/programs/executive" },
    ],
  },
  {
    label: "Discover",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Why CSL", href: "/about#why-csl" },
      { label: "Our Approach", href: "/about#our-approach" },
    ],
  },
  {
    label: "Insights",
    links: [
      { label: "All Insights", href: "/insights" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Program Brochures", href: "/resources/brochures" },
      { label: "Frequently Asked Questions", href: "/#faqs" },
    ],
  },
];
