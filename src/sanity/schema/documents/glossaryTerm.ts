import { defineType, defineField, defineArrayMember } from "sanity";

/** Glossary term - defines ONE concept, answer-first, and links out to the relevant
 *  money page. `definition` is the liftable one-to-three-sentence answer (and the
 *  DefinedTerm schema `description`). `seeAlso` routes to /technologies/* or
 *  /services/* so the term FEEDS the spokes rather than competing with them. */
export const glossaryTerm = defineType({
  name: "glossaryTerm",
  title: "Glossary term",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Term", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "definition",
      type: "text",
      rows: 4,
      description: "Answer-first, one to three sentences. This is the liftable definition + the DefinedTerm description.",
      validation: (r) => r.required().max(400),
    }),
    defineField({ name: "body", type: "blockContent", title: "Extended explanation (optional)" }),
    defineField({ name: "category", type: "reference", to: [{ type: "category" }] }),
    defineField({
      name: "relatedTerms",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "glossaryTerm" }] })],
    }),
    defineField({
      name: "seeAlso",
      title: "See also (money pages)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({
              name: "href",
              type: "string",
              description: "Site-relative path, e.g. /technologies/sanity",
            }),
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        }),
      ],
    }),
    defineField({ name: "seo", type: "seo" }),
  ],
  preview: { select: { title: "title", subtitle: "definition" } },
});
