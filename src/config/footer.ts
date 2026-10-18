import type { NavigationGroup, NavigationLink } from "@/types/navigation";

export const footerLinkGroups: NavigationGroup[] = [
  {
    label: "Discover",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Blogs & Articles", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
      { label: "Accreditation", href: "/about#accreditation" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Program Brochures", href: "/resources/brochures" },
      { label: "Testimonials", href: "/success-stories#testimonials" },
      { label: "Mentors & Coaches", href: "/about#mentors" },
      { label: "Case Studies", href: "/success-stories#case-studies" },
    ],
  },
];

export const footerQuickLinks: NavigationLink[] = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

export const footerLeadershipPrograms: NavigationLink[] = [
  { label: "AI Leadership Program", href: "/programs/ai-leadership" },
  { label: "CIO Leadership Program", href: "/programs/cio-leadership" },
  { label: "CDO Leadership Program", href: "/programs/cdo-leadership" },
  { label: "CISO Leadership Program", href: "/programs/ciso-leadership" },
  { label: "CXO Leadership Program", href: "/programs/cxo-leadership" },
  { label: "CAIO Leadership Program", href: "/programs/caio-leadership" },
  { label: "Cybersecurity Leadership Program", href: "/programs/cybersecurity-leadership" },
  { label: "Data & AI Leadership Program", href: "/programs/data-ai-leadership" },
  {
    label: "Digital Transformation Leadership Program",
    href: "/programs/digital-transformation-leadership",
  },
];

export const footerPartnerNetwork = [
  { region: "Middle East", locations: ["UAE", "Saudi", "Qatar"] },
  { region: "Europe", locations: ["UK", "Germany", "Netherlands", "Denmark"] },
  { region: "Africa", locations: ["South Africa", "East Africa", "West Africa"] },
  { region: "APAC", locations: ["Singapore", "Philippines", "Australia"] },
] as const;

export const footerRegionalPrograms: NavigationLink[] = [
  { label: "AI Leadership Program in USA", href: "/programs/ai-leadership/usa" },
  { label: "AI Leadership Program in UK", href: "/programs/ai-leadership/uk" },
  { label: "AI Leadership Program in UAE", href: "/programs/ai-leadership/uae" },
];
