/**
 * Lightweight list of program pages for menus. The header is a client component, so it reads
 * this instead of the full program content. `index.ts` checks it matches the programs there.
 */
export const programCatalog = [{ slug: "ai-leadership", name: "AI Leadership Program" }] as const;

/** Menu links for every program page; add a program to the catalog and it appears here. */
export function getProgramLinks() {
  return programCatalog.map((program) => ({ label: program.name, href: `/programs/${program.slug}` }));
}
