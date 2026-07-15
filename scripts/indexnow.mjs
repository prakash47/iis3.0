// Post-deploy IndexNow submitter. Fetches the live sitemap, extracts its URLs, and POSTs
// them to IndexNow (Bing, Yandex, Seznam, Naver - and indirectly several AI search engines
// that lean on Bing's index). Google does not support IndexNow.
//
// Run AFTER a production deploy, once the key file is live at the site root:
//   INDEXNOW_HOST=www.intentioninfoservice.com node scripts/indexnow.mjs
//
// The key is read from the public/<key>.txt file that ships with the site, so it never
// drifts from what Bing fetches to verify ownership.
import { readdirSync, readFileSync } from "node:fs";

const HOST = process.env.INDEXNOW_HOST || "www.intentioninfoservice.com";
const base = `https://${HOST}`;

function findKey() {
  const f = readdirSync("public").find((n) => /^[a-f0-9]{16,64}\.txt$/i.test(n));
  if (!f) throw new Error("No IndexNow key file (public/<hex>.txt) found.");
  return { key: readFileSync(`public/${f}`, "utf8").trim(), keyLocation: `${base}/${f}` };
}

async function main() {
  const { key, keyLocation } = findKey();
  const res = await fetch(`${base}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (!urlList.length) throw new Error("No URLs found in sitemap.");

  const r = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation, urlList }),
  });
  console.log(`IndexNow: ${r.status} ${r.statusText} (${urlList.length} URLs submitted)`);
}

main().catch((e) => {
  console.error("IndexNow submit failed:", e.message);
  process.exit(1);
});
