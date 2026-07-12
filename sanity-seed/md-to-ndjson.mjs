// Converts the guide markdown drafts in sanity-seed/guides/*.md into a Sanity NDJSON
// import file (guides.ndjson) with `guide` documents whose `body` is Portable Text
// matching the project schema (block styles h2/h3/h4/blockquote, bullet/number lists,
// strong/em/code decorators, internalLink/link annotations, and the custom `code` and
// `table` block types). Also emits the `category` documents the guides reference.
//
// Run from the website dir:  node sanity-seed/md-to-ndjson.mjs
// Then import with --replace (idempotent; categories/docs are reused across imports,
// so a plain import errors on an already-existing category id):
//   npx sanity dataset import sanity-seed/guides.ndjson production --replace
import { marked } from "marked";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

// Args: <inputSubdir=guides> <outFile=guides.ndjson> <docType=guide> <publishDate=>
// Guides:  node sanity-seed/md-to-ndjson.mjs
// Posts:   node sanity-seed/md-to-ndjson.mjs posts posts.ndjson post 2026-07-12
const args = process.argv.slice(2);
const inputSub = args[0] || "guides";
const outName = args[1] || "guides.ndjson";
const docType = args[2] || "guide"; // "guide" | "post"
const publishDate = args[3] || ""; // ISO date (posts need publishedAt; passed for reproducibility)
const srcDir = path.join(here, inputSub);

let k = 0;
const key = () => "k" + (k++).toString(36);

const CAT_SLUG = {
  "Web Development": "web-development",
  Mobile: "mobile",
  "SEO & AI Search": "seo-ai-search",
};

// --- inline tokens -> { children: [span], markDefs: [def] } ---
function inline(tokens) {
  const children = [];
  const markDefs = [];
  const walk = (toks, marks) => {
    for (const t of toks) {
      if (t.type === "text" || t.type === "escape") {
        children.push({ _type: "span", _key: key(), text: t.text, marks: [...marks] });
      } else if (t.type === "strong") {
        walk(t.tokens, [...marks, "strong"]);
      } else if (t.type === "em") {
        walk(t.tokens, [...marks, "em"]);
      } else if (t.type === "codespan") {
        children.push({ _type: "span", _key: key(), text: t.text, marks: [...marks, "code"] });
      } else if (t.type === "link") {
        const defKey = key();
        const href = t.href;
        markDefs.push(
          href.startsWith("/")
            ? { _type: "internalLink", _key: defKey, href }
            : { _type: "link", _key: defKey, href, nofollow: false },
        );
        walk(t.tokens, [...marks, defKey]);
      } else if (t.type === "br") {
        children.push({ _type: "span", _key: key(), text: " ", marks: [...marks] });
      } else if (t.tokens) {
        walk(t.tokens, marks);
      } else if (t.text != null) {
        children.push({ _type: "span", _key: key(), text: t.text, marks: [...marks] });
      }
    }
  };
  walk(tokens, []);
  if (children.length === 0) children.push({ _type: "span", _key: key(), text: "", marks: [] });
  return { children, markDefs };
}

// inline tokens -> plain visible text (for table cells, which are plain strings)
function plain(tokens) {
  let out = "";
  for (const t of tokens) {
    if (t.type === "text" || t.type === "escape" || t.type === "codespan") out += t.text;
    else if (t.tokens) out += plain(t.tokens);
    else if (t.text != null) out += t.text;
  }
  return out;
}

function textBlock(style, tokens, extra = {}) {
  const { children, markDefs } = inline(tokens);
  return { _type: "block", _key: key(), style, markDefs, children, ...extra };
}

function listItemInline(item) {
  for (const t of item.tokens) {
    if ((t.type === "text" || t.type === "paragraph") && t.tokens) return t.tokens;
  }
  return [{ type: "text", text: item.text || "" }];
}

function tokensToPT(tokens) {
  const out = [];
  for (const t of tokens) {
    if (t.type === "heading") {
      if (t.depth === 1) continue; // the H1 is the title, handled separately
      const style = t.depth === 2 ? "h2" : t.depth === 3 ? "h3" : "h4";
      out.push(textBlock(style, t.tokens));
    } else if (t.type === "paragraph") {
      out.push(textBlock("normal", t.tokens));
    } else if (t.type === "blockquote") {
      const innerInline = t.tokens.filter((x) => x.type === "paragraph").flatMap((x) => x.tokens);
      out.push(textBlock("blockquote", innerInline.length ? innerInline : [{ type: "text", text: plain(t.tokens) }]));
    } else if (t.type === "list") {
      const listItem = t.ordered ? "number" : "bullet";
      for (const item of t.items) {
        out.push(textBlock("normal", listItemInline(item), { listItem, level: 1 }));
      }
    } else if (t.type === "code") {
      out.push({ _type: "code", _key: key(), code: t.text, ...(t.lang ? { language: t.lang } : {}) });
    } else if (t.type === "table") {
      const rows = [];
      rows.push({ _type: "row", _key: key(), cells: t.header.map((c) => plain(c.tokens)) });
      for (const r of t.rows) rows.push({ _type: "row", _key: key(), cells: r.map((c) => plain(c.tokens)) });
      out.push({ _type: "table", _key: key(), rows });
    }
    // space / hr / html are skipped
  }
  return out;
}

function parseMeta(raw) {
  const m = raw.match(/<!--\s*category:\s*([^;]+);\s*seeAlso:\s*([^>]*?)\s*-->/i);
  if (!m) return { category: null, seeAlso: [] };
  const category = m[1].trim();
  const seeAlso = m[2].split(",").map((s) => s.trim()).filter(Boolean);
  return { category, seeAlso };
}

function makeExcerpt(md) {
  const m = md.match(/\*\*The short version:\*\*\s*([\s\S]*?)(?:\n\n|\n#)/);
  if (!m) return undefined;
  let t = m[1].replace(/\s+/g, " ").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*`]/g, "").trim();
  if (t.length > 200) {
    t = t.slice(0, 197);
    const lastSpace = t.lastIndexOf(" ");
    if (lastSpace > 120) t = t.slice(0, lastSpace);
    t = t.replace(/[,;:\s]+$/, "") + "...";
  }
  return t;
}

// --- run ---
const docs = [];
const cats = new Set();

const files = fs.readdirSync(srcDir).filter((f) => f.endsWith(".md")).sort();
for (const file of files) {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(srcDir, file), "utf8");
  const { category } = parseMeta(raw);
  const md = raw.replace(/^\s*<!--[\s\S]*?-->\s*/, "");
  const tokens = marked.lexer(md);
  const h1 = tokens.find((t) => t.type === "heading" && t.depth === 1);
  const title = h1 ? plain(h1.tokens) : slug;
  const body = tokensToPT(tokens);
  const excerpt = makeExcerpt(md);
  const doc = {
    _id: `${docType}-${slug}`,
    _type: docType,
    title,
    slug: { _type: "slug", current: slug },
    ...(excerpt ? { excerpt } : {}),
    // Posts are dated (the blog index requires publishedAt). Passed in for
    // reproducibility so re-running does not manufacture new freshness.
    ...(docType === "post" && publishDate ? { publishedAt: `${publishDate}T09:00:00.000Z` } : {}),
    body,
    seo: { _type: "seo", noindex: false },
  };
  if (category && CAT_SLUG[category]) {
    const cslug = CAT_SLUG[category];
    cats.add(category);
    doc.category = { _type: "reference", _ref: `category-${cslug}` };
  }
  docs.push(doc);
  console.log(`${file}: "${title}" | ${body.length} blocks | excerpt ${excerpt ? excerpt.length + "c" : "none"} | cat ${category || "none"}`);
}

const catDocs = [...cats].map((c) => ({
  _id: `category-${CAT_SLUG[c]}`,
  _type: "category",
  title: c,
  slug: { _type: "slug", current: CAT_SLUG[c] },
}));

const outPath = path.join(here, outName);
const ndjson = [...catDocs, ...docs].map((d) => JSON.stringify(d)).join("\n") + "\n";
fs.writeFileSync(outPath, ndjson, "utf8");
console.log(`\nWrote ${catDocs.length} categories + ${docs.length} ${docType}(s) -> ${outPath}`);
