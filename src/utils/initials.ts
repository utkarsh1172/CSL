/** Two-letter initials for avatar placeholders, skipping an honorific such as "Dr.". */
export function initialsOf(name: string) {
  return name
    .replace(/^(Dr|Mr|Mrs|Ms|Prof)\.\s*/, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}
