import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// A DECISION-AXIS table, not a scored product grid. Sanity's whole competitor set is poisoned for a
// scored table: Strapi, Contentful and Drupal are now LIVE siblings, WordPress is a LIVE spoke, and
// the remaining headless names (Storyblok/Prismic/Payload) are exactly the future-spoke candidates the
// keyword lane says not to seed. So the columns are content-model CATEGORIES, never products: Sanity's
// lane (highlighted col 1), the traditional page-based category (WordPress-class), and the hosted
// site-builder category (Wix/Squarespace-class, genuinely no-spoke/no-roadmap). This wins "Sanity vs a
// traditional CMS" + "headless vs traditional" intent and routes editor-first teams out, while naming
// zero sibling or future-spoke products as scored columns. Contentful/Strapi appear once, descriptively, in the
// caption as the same-family note - never a scored row, never a "we compare and beat" verdict.
const cols = ["", "Structured & headless (Sanity)", "Traditional & page-based", "Hosted site builder"];
const rows = [
  { dim: "Content shape", a: "Typed, reusable data you query", b: "Pages edited in a themed admin", c: "Blocks in a drag-and-drop UI" },
  { dim: "Who edits day to day", a: "Editors, once developers model the schema", b: "Editors, in a familiar admin", c: "Anyone, visually, no developer" },
  { dim: "Reuse across surfaces", a: "One source to web, app and beyond", b: "Mostly a single website", c: "The one site on the builder" },
  { dim: "Front-end freedom", a: "Any front end you build (Next.js, Astro)", b: "The theme, or headless with work", c: "The builder's own templates" },
  { dim: "Hosting & ownership", a: "Studio and schema yours; Content Lake hosted", b: "Self-host and own the whole site", c: "Hosted - you rent the platform" },
  { dim: "Best when", a: "Content is structured and reused, with custom workflows", b: "One team edits one site, simply", c: "A quick site with no developers" },
];

export function SanityCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Headless & structured vs traditional & page-based"
            title={<>Sanity or a traditional CMS? <span className="gradient-text">Match the CMS to how your team works</span></>}
            sub="We're stack-agnostic, so this is fair, not a pitch. The real choice is not brand versus brand - it is whether your content is structured and reused, or a single site your team edits in place."
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
                            ? "bg-brand-500/10 p-4 font-bold text-brand-700 dark:text-brand-400"
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
            Sanity earns its keep when content is genuinely structured and reused across surfaces, when
            you need custom editorial workflows, or when the CMS has to outlive the original build. When a
            single team just edits pages in a familiar admin, a traditional CMS like{" "}
            <Link href="/technologies/wordpress" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              WordPress
            </Link>{" "}
            is often the simpler, cheaper call - and we will say so. Sanity sits in the same structured,
            headless family as Contentful and Strapi; the right one depends on your editorial model and
            budget, and we recommend the fit, not a badge we hold.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
