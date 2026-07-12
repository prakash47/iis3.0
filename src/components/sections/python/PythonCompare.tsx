import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The backend-choice comparison for THIS page: Python vs Node vs Java, Python as the
// highlighted brand column. CONSISTENCY LOCK: every cell matches what NodejsCompare
// already published about all three (Python best-for = ML/data/automation; concurrency
// = threads-or-async, CPU-limited; typing = optional) - entity consistency across the
// two tables is a ranking + trust signal. Fair and qualitative, no unverifiable stats.
const cols = ["", "Python", "Node.js", "Java / Spring"];
const rows = [
  { dim: "What it is", python: "General-purpose language", node: "JavaScript runtime on V8", java: "JVM language + framework" },
  { dim: "Best for", python: "ML, data science, automation", node: "I/O-bound APIs, real-time, streaming", java: "Large, transaction-heavy enterprise" },
  { dim: "Concurrency", python: "Threads or async, CPU-limited", node: "Single-thread event loop, async I/O", java: "Mature multithreading" },
  { dim: "Ecosystem", python: "PyPI, deep AI and data stack", node: "npm, the largest registry", java: "Maven, enterprise-hardened" },
  { dim: "Talent pool", python: "Very large, data and AI heavy", node: "Very large, shared with front-end JS", java: "Large, enterprise-leaning" },
  { dim: "Typing", python: "Type hints, optional", node: "TypeScript, opt-in", java: "Static, strict by default" },
  { dim: "Our take", python: "Our pick when AI or data is the core", node: "Our default for real-time and API-first", java: "When the load is heavy and JVM-native" },
];

export function PythonCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Python vs Node.js vs Java"
            title={<>The honest 2026 <span className="gradient-text">backend comparison</span></>}
            sub="We're stack-agnostic, so this is fair, not a pitch. All three are excellent - the real choice in 2026 is about your workload, your team, and what the backend has to do."
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
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.python}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.node}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.java}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            The 2026 reality: many teams run both - Python for the AI and data layer,{" "}
            <Link href="/technologies/nodejs" className="font-medium text-brand-500 hover:text-brand-600">
              Node.js for the real-time API edge
            </Link>
            . Weighing heavy enterprise instead? See our{" "}
            <Link href="/technologies/java-spring-boot" className="font-medium text-brand-500 hover:text-brand-600">
              Java and Spring Boot
            </Link>{" "}
            page - and we&apos;ll recommend the fit, not the language we happen to sell.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
