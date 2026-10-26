import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ContactPopup } from "@/components/forms/ContactPopup";
import { AnalyticsTags } from "@/components/layout/AnalyticsTags";
import { BoomClickEffects } from "@/components/ui/BoomClickEffects";
import { CtaTracking } from "@/components/ui/CtaTracking";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Canada School of Leadership",
    template: "%s | Canada School of Leadership",
  },
  description: "Leadership development for professionals and organizations.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    // data-scroll-behavior lets Next.js pause the global smooth scrolling during route changes,
    // so every page opens at the top instead of easing to a spot hidden under the sticky header.
    <html data-scroll-behavior="smooth" lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
              if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
              var root = document.documentElement;
              root.classList.add('motion-ready');
              window.setTimeout(function () {
                if (!root.hasAttribute('data-motion-active')) root.classList.remove('motion-ready');
              }, 1800);
            })();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ScrollReveal />
        <BoomClickEffects />
        <CtaTracking />
        <AnalyticsTags />
        {children}
        <ContactPopup />
      </body>
    </html>
  );
}
