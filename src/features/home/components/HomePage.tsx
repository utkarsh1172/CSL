import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { homePage } from "@/content/pages/home";
import { testimonials } from "@/content/shared/testimonials";

import { ActivationSection } from "./ActivationSection";
import { CallToActionSection } from "./CallToActionSection";
import { HomeHero } from "./HomeHero";
import { OutcomesSection } from "./OutcomesSection";
import { PartnershipSection } from "./PartnershipSection";
import { PlateauSection } from "./PlateauSection";
import { ProgramsSection } from "./ProgramsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { TrustedBand } from "./TrustedBand";

/**
 * Full-width sections in the order of the home page design: the problem (plateau), the
 * partnership that answers it, the programs, the outcomes and how they're reached, proof from
 * participants, then a closing invitation. Enquiries go to the contact page's advisor form.
 */
export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="home-page">
        <HomeHero hero={homePage.hero} />
        <TrustedBand label={homePage.trustedBy} />
        <PlateauSection plateau={homePage.plateau} />
        <PartnershipSection partnership={homePage.partnership} />
        <ProgramsSection programs={homePage.programs} />
        <OutcomesSection outcomes={homePage.outcomes} />
        <ActivationSection activation={homePage.activation} />
        <TestimonialsSection content={homePage.testimonials} testimonials={testimonials} />
        <CallToActionSection callToAction={homePage.callToAction} />
      </main>
      <SiteFooter />
    </>
  );
}
