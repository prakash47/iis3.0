import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// A DECISION-AXIS table on WHO RUNS THE BACKEND - not a scored product grid. Sanity's competitor set
// is poisoned for a scored table: Contentful, Sanity and Drupal are all LIVE siblings now, so
// none may be a scored column. Columns are hosting-ownership CATEGORIES: self-hosted open-source Strapi
// (highlighted col 1, the page's spine), a hosted SaaS headless CMS, and managed Strapi Cloud (the same
// open-source Strapi, hosted by Strapi). This wins the "self-hosted vs SaaS headless CMS / own the CMS"
// intent. Sanity/Contentful named once in the caption as the SaaS alternatives (no verdict); Payload/
// Directus named once as the open-source peers (no spoke, no roadmap). Never say Strapi is "better".
const cols = ["", "Self-hosted open-source (Strapi)", "Hosted SaaS headless CMS", "Managed (Strapi Cloud)"];
const rows = [
  { dim: "Who runs the backend", a: "You, or us on a care plan", b: "The vendor runs it for you", c: "Strapi runs it, managed" },
  { dim: "What you own", a: "The code, the data and the database", b: "Your content; the vendor keeps the software", c: "The code; Strapi hosts it" },
  { dim: "Database control", a: "Yours - PostgreSQL, MySQL or SQLite", b: "The vendor's store, not yours to touch", c: "Managed for you" },
  { dim: "Extend in code", a: "Yes - custom Node, no hard ceiling", b: "Within the vendor's plugins and limits", c: "Yes - the same open-source Strapi" },
  { dim: "Maintenance", a: "Yours, or ours on a care plan", b: "None - the vendor patches it", c: "Handled by Strapi" },
  { dim: "Cost model", a: "Free open-source core; you pay your own hosting", b: "A subscription, often per seat or usage", c: "A managed-hosting subscription" },
];

export function StrapiCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Self-hosted open-source vs hosted SaaS"
            title={<>Who runs the backend? <span className="gradient-text">Match the model to your team</span></>}
            sub="We're stack-agnostic, so this is fair, not a pitch. The real choice with a headless CMS is not brand versus brand - it is who owns and runs the software behind your content."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    {cols.map((c, i) => (
                      <th
                        key={c || "dim"}
                        scope="col"
                        className={
                          i === 1
                            ? "bg-brand-500/10 p-4 font-bold text-brand-600 dark:text-brand-400"
                            : "p-4 font-semibold text-foreground"
                        }
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.dim} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                      <th scope="row" className="p-4 font-semibold text-foreground">{r.dim}</th>
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.a}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.b}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Self-hosted Strapi and managed Strapi Cloud are the same open-source CMS, hosted differently;
            a hosted SaaS headless CMS such as{" "}
            <Link href="/technologies/sanity" className="font-medium text-brand-500 hover:text-brand-600">
              Sanity
            </Link>{" "}
            or Contentful keeps the software and rents you the backend. Payload and Directus are other
            self-hosted, open-source options in the same space. The deciding question is who you want
            running the backend, and we recommend by fit, not by a badge we hold.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
