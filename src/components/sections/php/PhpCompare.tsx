import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The PHP-native decision, published nowhere else on the site: what to do with a PHP codebase
// you already own. Deliberately NOT a Laravel-vs-Django-vs-Node framework table (Laravel owns
// that) and NOT a runtime table (would cannibalize Laravel's "server-rendered CRUD" cell and
// contradict NodejsFaq). The HIGHLIGHTED column is "Keep and modernize" - the honest answer we
// are paid least for and the one we start from - the same integrity move as the industry pages,
// where the highlighted column is the one we do not most profit from. The framework column
// routes to Laravel; the rewrite column names Node/Python in prose (linked already in the
// anti-recommendation, so plain here) and routes the decision to custom software.
const cols = ["", "Keep and modernize", "Rebuild on a framework", "Rewrite in another language"];
const rows = [
  { dim: "What it means", a: "Upgrade and refactor the PHP you have, in place", b: "Rebuild the application on a PHP framework", c: "Start over in a different language" },
  { dim: "Best when", a: "The code still runs and the domain logic is sound", b: "You are staying in PHP but raw code has outgrown itself", c: "The workload has genuinely shifted, or the source is lost" },
  { dim: "Time & risk", a: "Lowest - incremental, reversible, the lights stay on", b: "Moderate - a real project, but PHP skills carry over", c: "Highest - it restarts the clock on every solved bug" },
  { dim: "What you own after", a: "The same codebase, now modern, typed and tested", b: "A standard framework application", c: "A new codebase in the new stack" },
  { dim: "Our honest take", a: "Usually the right call, and where we start", b: "When plain PHP is the bottleneck, not PHP itself", c: "A last resort, not a first move" },
];

export function PhpCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Modernize, rebuild or replace"
            title={<>What to do with the PHP <span className="gradient-text">you already own</span></>}
            sub="The most common PHP decision is not which framework to pick - it is what to do with the codebase you inherited. Here is the honest comparison, and the column we reach for first is not the one that bills the most."
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
            Most legacy PHP can be walked across the line in place, which is where we start. When plain
            PHP really is the limit, a new build on{" "}
            <Link href="/technologies/laravel" className="font-medium text-brand-500 hover:text-brand-600">
              Laravel, the framework layer over PHP
            </Link>{" "}
            is the move; when the workload has shifted to real-time or data, a rewrite to another
            language can be right, but it is the last resort, not the first. Not sure which situation
            you are in?{" "}
            <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
              We will scope it with you
            </Link>
            , and we will not sell you a rewrite because it bills more.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
