import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The intra-SSG-family comparison - Astro vs Eleventy vs Hugo - the way WordpressCompare does
// WP-vs-Webflow-vs-Squarespace and WooCompare does Woo-vs-Magento-vs-PrestaShop. All three are
// static-site generators with NO spoke and NO roadmap here, so zero internal cannibalization, and
// it wins the "Astro vs Hugo / Astro vs 11ty" AEO queries WITHOUT re-staging the Next.js|WordPress|
// Astro|React table (which the live NextjsCompare owns). Astro highlighted at col index 1. Fair and
// qualitative - Hugo genuinely wins the build-speed row, which keeps the table honest. Next.js
// appears only in the caption as a routing destination (app intent), never as a scored competitor.
const cols = ["", "Astro", "Eleventy (11ty)", "Hugo"];
const rows = [
  { dim: "What it is", a: "Component-based content framework", b: "Minimalist JavaScript static-site generator", c: "Go-based static-site generator" },
  { dim: "Best for", a: "Content sites that want components and light interactivity", b: "Lean, flexible static sites across many template languages", c: "Very large content and docs sites" },
  { dim: "Interactivity", a: "Islands - React, Vue or Svelte where needed", b: "Add your own JavaScript by hand", c: "Minimal - templates only, JavaScript by hand" },
  { dim: "Components & templating", a: "Astro components plus framework islands", b: "Nunjucks, Liquid and more, no component model", c: "Go templates, no JavaScript component model" },
  { dim: "Build speed", a: "Fast", b: "Fast", c: "Fastest, even at huge scale" },
  { dim: "Our take", a: "Our default for a modern content site", b: "When you want minimal and template-first", c: "When raw build speed at large scale leads" },
];

export function AstroCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Astro vs Eleventy vs Hugo"
            title={<>The honest static-site <span className="gradient-text">framework comparison</span></>}
            sub="We're stack-agnostic, so this is fair, not a pitch. All three build fast static sites - the real choice is how much you want a component model and islands versus raw templates and build speed."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
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
            Astro is our default when a content site wants a real component model and islands of
            interactivity; Eleventy and Hugo are strong when you want something more minimal or the
            fastest possible builds at large scale. One thing none of these three is: an application
            framework. A site that is really an app belongs on{" "}
            <Link href="/technologies/nextjs" className="font-medium text-brand-500 hover:text-brand-600">
              Next.js, for a site that behaves like an application
            </Link>
            , and we will tell you when that is the honest answer.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
