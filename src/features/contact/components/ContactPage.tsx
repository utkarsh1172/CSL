import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FaqSection } from "@/components/sections/FaqSection";
import { contactFaqs } from "@/content/pages/contact";

import { ContactAdvisorSection } from "./ContactAdvisorSection";
import { ContactDetails } from "./ContactDetails";
import { ContactHero } from "./ContactHero";
import { FranchiseSection } from "./FranchiseSection";
import { PartnerMapSection } from "./PartnerMapSection";
import { SpotlightSection } from "./SpotlightSection";

export function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="contact-page">
        <ContactHero />
        <ContactDetails />
        <ContactAdvisorSection />
        <FranchiseSection />
        <SpotlightSection />
        <PartnerMapSection />
        <FaqSection faqs={contactFaqs} idPrefix="contact" />
      </main>
      <SiteFooter />
    </>
  );
}
