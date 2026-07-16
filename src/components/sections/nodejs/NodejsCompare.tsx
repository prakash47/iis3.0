import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The distinct comparison for THIS page: Node vs other BACKENDS (not a rebuilt
// front-end framework table). Fair and qualitative - no unverifiable stats. Links
// laterally to the python and java-spring-boot sibling spokes. Node is the
// highlighted brand column.
const cols = ["", "Node.js", "Python", "Java / Spring"];
const rows = [
  { dim: "What it is", node: "JavaScript runtime on V8", python: "General-purpose language", java: "JVM language + framework" },
  { dim: "Best for", node: "I/O-bound APIs, real-time, streaming", python: "ML, data science, automation", java: "Large, transaction-heavy enterprise" },
  { dim: "Concurrency", node: "Single-thread event loop, async I/O", python: "Threads or async, CPU-limited", java: "Mature multithreading" },
  { dim: "Ecosystem", node: "npm, the largest registry", python: "PyPI, deep AI and data stack", java: "Maven, enterprise-hardened" },
  { dim: "Talent pool", node: "Very large, shared with front-end JS", python: "Very large, data and AI heavy", java: "Large, enterprise-leaning" },
  { dim: "Typing", node: "TypeScript, opt-in and end-to-end", python: "Type hints, optional", java: "Static, strict by default" },
  { dim: "Our take", node: "Our default for real-time and API-first", python: "Our pick when AI or data is the core", java: "When the load is heavy and JVM-native" },
];

export function NodejsCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Node vs Python vs Java"
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
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.node}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.python}</td>
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
            The 2026 reality: many teams run both - Node.js for the public API and real-time layer,
            Python behind it for AI and data work. Weighing the other side? See our{" "}
            <Link href="/technologies/python" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              Python
            </Link>{" "}
            and{" "}
            <Link href="/technologies/java-spring-boot" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              Java and Spring Boot
            </Link>{" "}
            pages, and we&apos;ll recommend the fit, not the framework we happen to sell.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
