import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/JsonLd";
import { getProgramBySlug, getProgramSlugs } from "@/content/programs";
import { ProgramPage } from "@/features/programs/components/ProgramPage";
import { createPageMetadata } from "@/lib/seo/metadata";
import { programStructuredData } from "@/lib/seo/structured-data";

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

  return createPageMetadata({
    title: program.name,
    description: program.metaDescription,
    path: `/programs/${program.slug}`,
    image: { src: program.hero.imageSrc, alt: program.hero.imageAlt },
  });
}

export default async function ProgramRoute({ params }: ProgramRouteProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <JsonLd data={programStructuredData(program)} />
      <ProgramPage program={program} />
    </>
  );
}
