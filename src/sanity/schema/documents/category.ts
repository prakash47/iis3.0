import { defineType, defineField } from "sanity";

/** Shared topic taxonomy across all three surfaces. Keep categories mirrored to the
 *  services (Web Development, Mobile, AI, SEO & AI Search, UI/UX) - never invent a
 *  category with no money-page home. */
export const category = defineType({
  name: "category",
  title: "Category / Topic",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      description: "Must NOT match any /services, /technologies or /industries slug (cannibalization guard).",
      validation: (r) => r.required(),
    }),
    defineField({ name: "description", type: "text", rows: 2 }),
  ],
});
