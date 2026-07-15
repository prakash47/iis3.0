import { siteConfig, absoluteUrl } from "@/config/site";
import { services, technologies, industries } from "@/content/catalog";

export const dynamic = "force-static";

/**
 * /llms.txt - an honest, machine-readable index of the site for LLM/agent tools, built
 * from the same catalog + config that drives the pages (real URLs + one-line descriptions
 * only, nothing fabricated). Adoption of llms.txt is low and no major provider formally
 * honours it today, so we ship it as a near-zero-cost hedge and because the digital-marketing
 * page names it as a deliverable - not for any expected ranking or citation gain.
 */
export function GET() {
  const lines: string[] = [];
  lines.push(`# ${siteConfig.name}`);
  lines.push("");
  lines.push(`> ${siteConfig.entityDescription}`);
  lines.push("");
  lines.push("All prices are published in USD. We do not fabricate reviews, ratings, logos or case studies.");
  lines.push("");

  lines.push("## Services");
  for (const s of services) {
    lines.push(`- [${s.name}](${absoluteUrl(`/services/${s.slug}`)}): ${s.tagline}`);
  }
  lines.push("");

  lines.push("## Technologies");
  for (const t of technologies) {
    lines.push(`- [${t.name}](${absoluteUrl(`/technologies/${t.slug}`)}): ${t.tagline}`);
  }
  lines.push("");

  lines.push("## Industries");
  for (const i of industries) {
    lines.push(`- [${i.name}](${absoluteUrl(`/industries/${i.slug}`)}): ${i.tagline}`);
  }
  lines.push("");

  lines.push("## Key pages");
  lines.push(`- [Pricing](${absoluteUrl("/pricing")}): published fixed prices, in USD, no quote wall`);
  lines.push(`- [Work](${absoluteUrl("/work")}): real, anonymized case studies`);
  lines.push(`- [About](${absoluteUrl("/about")}): who we are, incorporated 2016`);
  lines.push(`- [Contact](${absoluteUrl("/contact")}): start a project`);
  lines.push(`- [Resources](${absoluteUrl("/resources")}): guides, blog and glossary`);
  lines.push("");

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
