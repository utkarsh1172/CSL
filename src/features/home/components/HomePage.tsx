import { LeadForm } from "@/components/forms/LeadForm";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StickyAsideLayout } from "@/components/layout/StickyAsideLayout";
import { FaqSection } from "@/components/sections/FaqSection";
import { LeadCard } from "@/components/sections/LeadCard";
import { TrustedSection } from "@/components/sections/TrustedSection";
import { homePage } from "@/content/pages/home";
import { testimonials } from "@/content/shared/testimonials";

import { ActivationSection } from "./ActivationSection";
import { HomeHero } from "./HomeHero";
import { OutcomesSection } from "./OutcomesSection";
import { PartnershipSection } from "./PartnershipSection";
import { PlateauSection } from "./PlateauSection";
import { ProgramsSection } from "./ProgramsSection";
import { TestimonialsSection } from "./TestimonialsSection";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="home-page">
        <HomeHero hero={homePage.hero} />
        <StickyAsideLayout
          aside={
            <LeadCard
              headingId="home-advisor-heading"
              intro={homePage.advisor.intro}
              title={homePage.advisor.title}
              variant="compact"
            >
              <LeadForm
                className="lead-form lead-form--light"
                idPrefix="home-advisor"
                submitLabel="Talk to an Advisor"
                withMessage
              />
            </LeadCard>
          }
          asideId="talk-to-advisor"
        >
          <PlateauSection plateau={homePage.plateau} />
          <PartnershipSection partnership={homePage.partnership} />
          <ProgramsSection programs={homePage.programs} />
          <TrustedSection heading={homePage.trustedBy} />
          <TestimonialsSection content={homePage.testimonials} testimonials={testimonials} />
          <OutcomesSection outcomes={homePage.outcomes} />
          <ActivationSection activation={homePage.activation} />
          {/* The header's "Frequently Asked Questions" link lands here (/#faqs). */}
          <FaqSection
            align="start"
            className="page-section page-section--ruled"
            faqs={homePage.faqs}
            idPrefix="home"
          />
        </StickyAsideLayout>
      </main>
      <SiteFooter />
    </>
  );
}
