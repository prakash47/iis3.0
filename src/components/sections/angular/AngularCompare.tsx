import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The Angular-vs-React comparison - the money comparison for this page (distinct
// from the React page's React-vs-Angular-vs-Vue and the Next.js page's vs-WordPress).
// Kept calm and fair (not a "winner" scoreboard) and qualitative (no unverifiable
// stats) - an even-handed table is itself an E-E-A-T signal.
const cols = ["", "Angular", "React"];
const rows = [
  { dim: "Type", angular: "Complete framework - batteries included", react: "UI library - assemble your own stack" },
  { dim: "Structure", angular: "Enforced conventions, consistent at scale", react: "You decide the architecture" },
  { dim: "Best for", angular: "Large teams, regulated industries, long-lived apps", react: "Startups, MVPs, fast-iterating product teams" },
  { dim: "Reactivity (2026)", angular: "Signals + zoneless change detection", react: "Hooks + concurrent rendering" },
  { dim: "SEO / server rendering", angular: "Built-in SSR + hydration", react: "Needs a framework (Next.js)" },
  { dim: "Ecosystem", angular: "Curated and official (Material, CDK, CLI)", react: "Largest, most third-party choice" },
  { dim: "Talent pool", angular: "Deep in enterprise, smaller overall", react: "Larger overall" },
];

export function AngularCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Angular vs React"
            title={<>No universal winner - <span className="gradient-text">just the right fit</span></>}
            sub="We build both, so this is fair, not a pitch. Choose Angular for structure at scale; choose React for flexibility and the largest ecosystem."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
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
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.angular}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.react}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            If your project is small or wants maximum flexibility, we&apos;ll steer you to{" "}
            <Link href="/technologies/react" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              React
            </Link>{" "}
            - and build it that way. We recommend the fit, not the framework we happen to sell.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
