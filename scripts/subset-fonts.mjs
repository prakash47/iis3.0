/**
 * One-off font instancing for LCP: restrict the variable-weight axis of the two
 * self-hosted fonts to the range the site actually uses (400-800; grep shows zero
 * font-thin/extralight/light/black usage), and subset glyphs to Latin + the site's
 * symbol inventory. Smaller font payloads reach the browser sooner on throttled
 * mobile, which is exactly where the H1 (Sora) LCP was stamping late.
 *
 * Run from website/:  node scripts/subset-fonts.mjs
 * Output: src/app/fonts/{inter,sora}-latin-wght-400-800.woff2 (originals kept for revert).
 */
import { readFile, writeFile } from "node:fs/promises";
import subsetFont from "subset-font";

// Printable ASCII + Latin-1 supplement (accented names in future Sanity content)
// + typographic punctuation safety + the site's known symbols (arrow, bullet,
// rupee/euro for future content). The site itself is ASCII-only by rule.
let text = "";
for (let c = 0x20; c <= 0x7e; c++) text += String.fromCharCode(c);
for (let c = 0xa0; c <= 0xff; c++) text += String.fromCharCode(c);
text += "–—‘’“”…•′″→₹€";

const jobs = [
  { in: "src/app/fonts/inter-latin-wght-normal.woff2", out: "src/app/fonts/inter-latin-wght-400-800.woff2" },
  { in: "src/app/fonts/sora-latin-wght-normal.woff2", out: "src/app/fonts/sora-latin-wght-400-800.woff2" },
];

for (const j of jobs) {
  const buf = await readFile(j.in);
  const sub = await subsetFont(buf, text, {
    targetFormat: "woff2",
    variationAxes: { wght: { min: 400, max: 800 } },
  });
  await writeFile(j.out, sub);
  console.log(`${j.in}  ${(buf.length / 1024).toFixed(1)}KB -> ${j.out}  ${(sub.length / 1024).toFixed(1)}KB  (${Math.round((1 - sub.length / buf.length) * 100)}% smaller)`);
}
