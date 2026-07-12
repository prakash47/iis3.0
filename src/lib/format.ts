const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Deterministic UTC date format (no timezone/ICU drift across build environments). */
export function formatDate(iso?: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

/** Rough reading time (minutes) from the word count of a Portable Text body. */
export function readingTime(body: unknown): number {
  if (!Array.isArray(body)) return 1;
  let words = 0;
  for (const block of body as { _type?: string; children?: { text?: string }[] }[]) {
    if (block?._type !== "block") continue;
    for (const c of block.children ?? []) {
      words += (c?.text ?? "").split(/\s+/).filter(Boolean).length;
    }
  }
  return Math.max(1, Math.round(words / 200));
}
