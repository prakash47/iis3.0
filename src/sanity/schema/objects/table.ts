import { defineType, defineField, defineArrayMember } from "sanity";

/** A concrete table object type (NOT a reference to a plugin `table` type, which
 *  would dangle and error the Studio). First row is treated as the header. */
export const tableType = defineType({
  name: "table",
  title: "Table",
  type: "object",
  fields: [
    defineField({
      name: "rows",
      type: "array",
      of: [
        defineArrayMember({
          name: "row",
          type: "object",
          fields: [
            defineField({
              name: "cells",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
          ],
          preview: {
            select: { cells: "cells" },
            prepare: ({ cells }: { cells?: string[] }) => ({
              title: (cells ?? []).join("  |  ") || "Row",
            }),
          },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Table" }) },
});
