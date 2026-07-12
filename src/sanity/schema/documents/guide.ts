import { defineType, defineField } from "sanity";

/** Guide - evergreen, maintained "how to / how to decide / vs" pillar. Same shape as
 *  a post; the distinction is editorial (a guide is kept current, a post is dated).
 *  `dateModified` comes from the real _updatedAt, never stamped. */
export const guide = defineType({
  name: "guide",
  title: "Guide",
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
      description: "First-published date. The 'Last updated' date uses the real _updatedAt automatically.",
    }),
    defineField({ name: "body", type: "blockContent" }),
    defineField({ name: "seo", type: "seo" }),
  ],
  preview: { select: { title: "title", subtitle: "slug.current" } },
});
