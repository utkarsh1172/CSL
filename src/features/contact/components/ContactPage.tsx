import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { contactFaqs } from "@/content/pages/contact";

import { ContactAdvisorSection } from "./ContactAdvisorSection";
import { ContactDetails } from "./ContactDetails";
import { ContactFaq } from "./ContactFaq";
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
        <ContactFaq faqs={contactFaqs} />
      </main>
      <SiteFooter />
    </>
  );
}
