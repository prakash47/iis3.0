import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The website-platform comparison for THIS page: WordPress vs Webflow vs Squarespace,
// WordPress highlighted. Deliberately NOT WordPress vs Next.js (that would contradict
// NextjsCompare, which already published Next.js as the faster/custom path) - the Next.js
// split is owned honestly in the caption + Why. High-AEO ("WordPress vs Webflow/Wix 2026"),
// zero cannibalization (we have no Webflow/Wix/Squarespace pages). Fair and qualitative -
// WordPress's honest edge is ownership + flexibility, and it needs deliberate performance work.
const cols = ["", "WordPress", "Webflow", "Squarespace"];
const rows = [
  { dim: "What it is", wp: "Open-source, self-hosted CMS", webflow: "Hosted visual design builder", squarespace: "All-in-one hosted builder" },
  { dim: "Best for", wp: "Content sites you own and grow", webflow: "Designer-led marketing sites", squarespace: "Simple sites, fast to launch" },
  { dim: "Ownership", wp: "You own it - host anywhere", webflow: "Hosted on Webflow", squarespace: "Hosted on Squarespace" },
  { dim: "Flexibility", wp: "Endless - plugins & custom code", webflow: "High design, capped features", squarespace: "Limited to its templates" },
  { dim: "Performance", wp: "Fast when engineered", webflow: "Good by default", squarespace: "Good, but capped" },
  { dim: "Editing", wp: "Familiar admin, huge ecosystem", webflow: "Visual editor, per-seat", squarespace: "Easy, all-in-one" },
  { dim: "Our take", wp: "When you want to own it and grow", webflow: "When design precision leads", squarespace: "When simple and hosted is enough" },
];

export function WordpressCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="WordPress vs Webflow vs Squarespace"
            title={<>The honest 2026 <span className="gradient-text">website-platform comparison</span></>}
            sub="We're stack-agnostic, so this is fair, not a pitch. All three build content sites - the real choice is about ownership, flexibility, and how much you want to run yourself."
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
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.wp}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.webflow}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.squarespace}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Wix sits close to Squarespace - easiest, all-in-one, and capped. And if raw speed and
            bespoke interactivity matter most, a custom{" "}
            <Link href="/technologies/nextjs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              Next.js build
            </Link>{" "}
            beats all three - or run headless WordPress behind a Next.js front end to get the WordPress
            editing experience with that speed. We recommend the fit, not the platform we sell.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
