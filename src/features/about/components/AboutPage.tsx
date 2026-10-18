import { LeadForm } from "@/components/forms/LeadForm";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StickyAsideLayout } from "@/components/layout/StickyAsideLayout";
import { FaqSection } from "@/components/sections/FaqSection";
import { LeadCard } from "@/components/sections/LeadCard";
import { aboutPage } from "@/content/pages/about";

import { AboutHero } from "./AboutHero";
import { CapitalSection } from "./CapitalSection";
import { ComparisonSection } from "./ComparisonSection";
import { EcosystemSection } from "./EcosystemSection";
import { TrustedSection } from "./TrustedSection";
import { WhySection } from "./WhySection";

export function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="about-page">
        <AboutHero hero={aboutPage.hero} />
        <StickyAsideLayout
          aside={
            <LeadCard
              headingId="about-advisor-heading"
              intro={aboutPage.advisor.intro}
              title={aboutPage.advisor.title}
              variant="compact"
            >
              <LeadForm
                className="lead-form lead-form--light"
                idPrefix="about-advisor"
                submitLabel="Talk to an Advisor"
                withMessage
              />
            </LeadCard>
          }
          asideId="talk-to-advisor"
        >
          <CapitalSection capitals={aboutPage.capitals} />
          <TrustedSection heading={aboutPage.trustedBy} />
          <ComparisonSection comparison={aboutPage.comparison} />
          <EcosystemSection ecosystem={aboutPage.ecosystem} />
          <WhySection why={aboutPage.why} />
          <FaqSection
            align="start"
            className="page-section page-section--ruled"
            faqs={aboutPage.faqs}
            idPrefix="about"
          />
        </StickyAsideLayout>
      </main>
      <SiteFooter />
    </>
  );
}
