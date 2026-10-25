import { LeadForm } from "@/components/forms/LeadForm";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StickyAsideLayout } from "@/components/layout/StickyAsideLayout";
import { LeadCard } from "@/components/sections/LeadCard";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { successStories } from "@/content/pages/success-stories";

import { CaseStudiesSection } from "./CaseStudiesSection";
import { FacultySection } from "./FacultySection";
import { SuccessHero } from "./SuccessHero";
import { TransformationSection } from "./TransformationSection";
import { VideosSection } from "./VideosSection";

export function SuccessStoriesPage() {
  const { advisor } = successStories;

  return (
    <>
      <SiteHeader />
      <main className="success-page">
        <SuccessHero hero={successStories.hero} />
        <StickyAsideLayout
          aside={
            <LeadCard
              headingId="success-advisor-heading"
              intro={advisor.intro}
              title={advisor.title}
              variant="compact"
            >
              <LeadForm
                className="lead-form lead-form--light"
                idPrefix="success-advisor"
                submitLabel="Talk to an Advisor"
                withMessage
              />
            </LeadCard>
          }
          asideId="talk-to-advisor"
        >
          <TestimonialsSection
            className="success-block"
            contained={false}
            heading={successStories.testimonials.heading}
            headingId="testimonials-heading"
            showSeeMore={false}
            testimonials={successStories.testimonials.items}
          />
          <VideosSection videos={successStories.videos} />
          <FacultySection faculty={successStories.faculty} />
          <CaseStudiesSection caseStudies={successStories.caseStudies} />
          <TransformationSection transformation={successStories.transformation} />
        </StickyAsideLayout>
      </main>
      <SiteFooter />
    </>
  );
}
