import { defineType, defineField, defineArrayMember } from "sanity";

/** The Portable Text body: headings, lists, quotes, inline marks, external +
 *  internal links, images (alt required), code blocks (@sanity/code-input) and the
 *  concrete `table` object type. */
export const blockContent = defineType({
  name: "blockContent",
  title: "Body",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          defineArrayMember({
            name: "link",
            type: "object",
            title: "External link",
            fields: [
              defineField({ name: "href", type: "url", validation: (r) => r.required() }),
              defineField({ name: "nofollow", type: "boolean", initialValue: false }),
            ],
          }),
          defineArrayMember({
            name: "internalLink",
            type: "object",
            title: "Internal link",
            fields: [
              defineField({
                name: "href",
                type: "string",
                description: "Site-relative path, e.g. /technologies/nextjs",
              }),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", type: "string", title: "Alt text", validation: (r) => r.required() }),
        defineField({ name: "caption", type: "string" }),
      ],
    }),
    defineArrayMember({ type: "code", options: { withFilename: true } }),
    defineArrayMember({ type: "table" }),
  ],
});
