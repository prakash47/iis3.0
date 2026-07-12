import { defineType, defineField } from "sanity";

/** Blog post - dated, first-person / experience-led. Authorship is the Organization
 *  (byline hardcoded in the render); no free-text author field, so no fabricated
 *  human persona can be typed. A Person reference is a clean later addition once a
 *  real bio/photo exists. */
export const post = defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "This is the H1 and the Article headline. Keep under 110 characters.",
      validation: (r) => r.required().max(110),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "excerpt", type: "text", rows: 3, validation: (r) => r.max(200) }),
    defineField({ name: "category", type: "reference", to: [{ type: "category" }] }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      description: "Leave empty until actually published. Never backdate (fabrication ban).",
    }),
    defineField({ name: "body", type: "blockContent" }),
    defineField({ name: "seo", type: "seo" }),
  ],
  preview: { select: { title: "title", subtitle: "slug.current" } },
});
