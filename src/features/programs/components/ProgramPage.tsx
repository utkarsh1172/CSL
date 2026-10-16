import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FaqSection } from "@/components/sections/FaqSection";
import type { Program } from "@/types/program";

import { CapitalSection } from "./CapitalSection";
import { ComparisonSection } from "./ComparisonSection";
import { EcosystemSection } from "./EcosystemSection";
import { ProgramHero } from "./ProgramHero";
import { TrustedSection } from "./TrustedSection";
import { WhySection } from "./WhySection";

type ProgramPageProps = {
  program: Program;
};

export function ProgramPage({ program }: ProgramPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="program-page">
        <ProgramHero hero={program.hero} />
        <CapitalSection advisor={program.advisor} capitals={program.capitals} />
        <TrustedSection heading={program.trustedBy} />
        <ComparisonSection comparison={program.comparison} />
        <EcosystemSection ecosystem={program.ecosystem} />
        <WhySection why={program.why} />
        <FaqSection
          align="start"
          className="program-section program-section--ruled"
          faqs={program.faqs}
          idPrefix="program"
        />
      </main>
      <SiteFooter />
    </>
  );
}
