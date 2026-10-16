import type { Metadata } from "next";

import { aiLeadershipProgram } from "@/content/programs/ai-leadership";
import { ProgramPage } from "@/features/programs/components/ProgramPage";

export const metadata: Metadata = {
  title: "About Us",
  description: aiLeadershipProgram.metaDescription,
};

// About Us shows the flagship AI Leadership Program page until it has a design of its own.
export default function AboutRoute() {
  return <ProgramPage program={aiLeadershipProgram} />;
}
