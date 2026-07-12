/**
 * Shared heading-anchor slugify. This is the SINGLE source of truth for heading
 * ids - it must be used by BOTH the Portable Text heading serializer and the table
 * of contents builder, or the TOC links 404 against their own page.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
