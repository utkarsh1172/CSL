import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { AnalyticsTags } from "@/components/layout/AnalyticsTags";
import { JsonLd } from "@/components/seo/JsonLd";
import { BoomClickEffects } from "@/components/ui/BoomClickEffects";
import { CtaTracking } from "@/components/ui/CtaTracking";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { isIndexable, siteConfig, siteUrl } from "@/config/site";
import { siteStructuredData } from "@/lib/seo/structured-data";

import "./globals.css";

// Search Console (and Bing Webmaster Tools) ownership tags, when the codes are configured.
const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.BING_SITE_VERIFICATION;

// Site-wide defaults. Each page sets its own canonical URL and social cards through
// createPageMetadata (src/lib/seo/metadata.ts); icons, the manifest and the share image come
// from the files beside this layout.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  publisher: siteConfig.name,
  category: "education",
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: isIndexable
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false },
  verification: {
    google: googleVerification,
    other: bingVerification ? { "msvalidate.01": bingVerification } : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.backgroundColor,
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    // data-scroll-behavior lets Next.js pause the global smooth scrolling during route changes,
    // so every page opens at the top instead of easing to a spot hidden under the sticky header.
    <html data-scroll-behavior="smooth" lang={siteConfig.language} suppressHydrationWarning>
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
        <JsonLd data={siteStructuredData()} />
        {children}
      </body>
    </html>
  );
}
