import { post } from "./documents/post";
import { guide } from "./documents/guide";
import { glossaryTerm } from "./documents/glossaryTerm";
import { category } from "./documents/category";
import { seoType } from "./objects/seo";
import { blockContent } from "./objects/blockContent";
import { tableType } from "./objects/table";

export const schemaTypes = [
  post,
  guide,
  glossaryTerm,
  category,
  seoType,
  blockContent,
  tableType,
];
