import type { Metadata } from "next";
import type { ReactNode } from "react";

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
    <html lang="en" suppressHydrationWarning>
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
        {children}
      </body>
    </html>
  );
}
