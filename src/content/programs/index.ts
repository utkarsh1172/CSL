import type { Program } from "@/types/program";

import { aiLeadershipProgram } from "./ai-leadership";
import { programCatalog } from "./catalog";

/** Every program page; add new programs here and they get a /programs/[slug] route. */
const programList: Program[] = [aiLeadershipProgram];

const programs = new Map(programList.map((program) => [program.slug, program]));

if (programs.size !== programList.length) {
  throw new Error("Each program must have a unique slug; the same program is listed twice.");
}

// The menu reads the catalog, so a program missing from it would never be linked (and vice versa).
const catalogMismatch =
  programCatalog.length !== programList.length ||
  programCatalog.some((entry) => programs.get(entry.slug)?.name !== entry.name);

if (catalogMismatch) {
  throw new Error("src/content/programs/catalog.ts must list every program with its slug and name.");
}

export function getProgramSlugs() {
  return programList.map((program) => program.slug);
}

export function getProgramBySlug(slug: string) {
  return programs.get(slug);
}
