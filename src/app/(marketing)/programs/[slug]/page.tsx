import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProgramBySlug, getProgramSlugs } from "@/content/programs";
import { ProgramPage } from "@/features/programs/components/ProgramPage";

type ProgramRouteProps = {
  params: Promise<{ slug: string }>;
};

// Only the programs in src/content/programs exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getProgramSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProgramRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    return {
      title: "Program not found",
    };
  }

  return {
    title: program.name,
    description: program.metaDescription,
    openGraph: {
      title: program.name,
      description: program.metaDescription,
    },
  };
}

export default async function ProgramRoute({ params }: ProgramRouteProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return <ProgramPage program={program} />;
}
