import { LeadForm } from "@/components/forms/LeadForm";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StickyAsideLayout } from "@/components/layout/StickyAsideLayout";
import { LeadCard } from "@/components/sections/LeadCard";
import { homePage } from "@/content/pages/home";

import { HomeHero } from "./HomeHero";
import { PlateauSection } from "./PlateauSection";

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
        </StickyAsideLayout>
      </main>
      <SiteFooter />
    </>
  );
}
