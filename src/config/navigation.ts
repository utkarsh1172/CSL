import { getProgramLinks } from "@/content/programs/catalog";
import type { NavigationGroup } from "@/types/navigation";

export const navigationGroups: NavigationGroup[] = [
  {
    label: "Programs",
    // From the program catalog, so the menu only lists program pages that exist.
    links: getProgramLinks(),
  },
  {
    label: "Discover",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Why CSL", href: "/about#why-csl" },
      { label: "Our Approach", href: "/about#our-approach" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Success Stories", href: "/success-stories" },
      { label: "Program Brochures", href: "/resources/brochures" },
      { label: "Frequently Asked Questions", href: "/#faqs" },
    ],
  },
];
