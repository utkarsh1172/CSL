import type { Program } from "@/types/program";

import { aiLeadershipProgram } from "./ai-leadership";

/** Every program page; add new programs here and they get a /programs/[slug] route. */
const programList: Program[] = [aiLeadershipProgram];

const programs = new Map(programList.map((program) => [program.slug, program]));

if (programs.size !== programList.length) {
  throw new Error("Each program must have a unique slug; the same program is listed twice.");
}

export function getProgramSlugs() {
  return programList.map((program) => program.slug);
}

export function getProgramBySlug(slug: string) {
  return programs.get(slug);
}
