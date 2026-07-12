import { defineType, defineField } from "sanity";

/** Per-document SEO. This is the source of per-doc metadata (title/description/OG/
 *  canonical/noindex), NOT config/seo.ts. `noindex` starts TRUE so nothing thin is
 *  ever indexed by default - the author flips it to false only when the piece is
 *  genuinely substantial, which also admits it to the sitemap and the listings. */
export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  options: { collapsible: true, collapsed: true },
  fields: [
    defineField({
      name: "metaTitle",
      type: "string",
      description: "Overrides the doc title in the <title> tag. Keep under 60 characters.",
      validation: (r) => r.max(60),
    }),
    defineField({
      name: "metaDescription",
      type: "text",
      rows: 2,
      validation: (r) => r.max(160),
    }),
    defineField({ name: "ogImage", type: "image", title: "Social share image" }),
    defineField({
      name: "canonical",
      type: "url",
      description: "Only set to point elsewhere; otherwise the page self-canonicalizes.",
    }),
    defineField({
      name: "noindex",
      type: "boolean",
      initialValue: true,
      description:
        "Starts true (noindex). Keep it until the piece is genuinely substantial, then flip to false to index it and add it to the sitemap.",
    }),
  ],
});
