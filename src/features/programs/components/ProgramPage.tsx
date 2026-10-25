import { LeadForm } from "@/components/forms/LeadForm";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StickyAsideLayout } from "@/components/layout/StickyAsideLayout";
import { FaqSection } from "@/components/sections/FaqSection";
import { LeadCard } from "@/components/sections/LeadCard";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { mentors } from "@/content/shared/mentors";
import { testimonials } from "@/content/shared/testimonials";
import type { Program } from "@/types/program";

import { BenefitsSection } from "./BenefitsSection";
import { CurriculumSection } from "./CurriculumSection";
import { DeliverablesSection } from "./DeliverablesSection";
import { DifferenceSection } from "./DifferenceSection";
import { FlagshipSection } from "./FlagshipSection";
import { MentorsSection } from "./MentorsSection";
import { OverviewSection } from "./OverviewSection";
import { ProgramCallToAction } from "./ProgramCallToAction";
import { ProgramHero } from "./ProgramHero";
import { ProgramSubnav } from "./ProgramSubnav";
import { RecognitionSection } from "./RecognitionSection";

type ProgramPageProps = {
  program: Program;
};

export function ProgramPage({ program }: ProgramPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="program-page">
        <ProgramHero hero={program.hero} />
        <ProgramSubnav links={program.navigation} />
        <StickyAsideLayout
          aside={
            <LeadCard
              headingId="program-advisor-heading"
              intro={program.advisor.intro}
              title={program.advisor.title}
              variant="compact"
            >
              <LeadForm
                className="lead-form lead-form--light"
                idPrefix="program-advisor"
                submitLabel="Talk to an Advisor"
                withMessage
              />
            </LeadCard>
          }
          asideId="talk-to-advisor"
        >
          <OverviewSection brochureHref={program.brochureHref} overview={program.overview} />
          <CurriculumSection curriculum={program.curriculum} />
          <FlagshipSection flagship={program.flagship} />
          <DeliverablesSection deliverables={program.deliverables} />
          <BenefitsSection benefits={program.benefits} />
          <MentorsSection content={program.mentors} mentors={mentors} />
          <TestimonialsSection
            heading={program.testimonials.heading}
            headingId="program-testimonials-heading"
            testimonials={testimonials}
          />
          <RecognitionSection recognition={program.recognition} />
          <DifferenceSection difference={program.difference} />
          <ProgramCallToAction brochureHref={program.brochureHref} callToAction={program.callToAction} />
          {/* Temporarily hidden: organisation-wide CSL FAQ block. */}
          {/*
            <FaqSection
              align="start"
              className="page-section"
              faqs={program.organisationFaqs}
              idPrefix="program-csl"
            />
          */}
          <FaqSection
            accent="Leadership Program"
            align="start"
            className="page-section program-faqs"
            eyebrow=""
            faqs={program.faqs}
            idPrefix="program"
            sectionId="program-faqs"
          />
        </StickyAsideLayout>
      </main>
      <SiteFooter />
    </>
  );
}
