import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The backend comparison for THIS page: Java vs Node vs Python, Java highlighted.
// CONSISTENCY LOCK (verbatim): every cell matches what NodejsCompare and PythonCompare
// already published - Java's own cells ("JVM language + framework" / "Large, transaction-heavy
// enterprise" / "Mature multithreading" / "Maven, enterprise-hardened" / "Large, enterprise-
// leaning" / "Static, strict by default" / "When the load is heavy and JVM-native"), and the
// Node/Python cells match what those pages say about themselves. Java is NOT "our default"
// (honest). The .NET/Go question is answered in prose below, not a table row (no such pages).
const cols = ["", "Java & Spring Boot", "Node.js", "Python"];
const rows = [
  { dim: "What it is", java: "JVM language + framework", node: "JavaScript runtime on V8", python: "General-purpose language" },
  { dim: "Best for", java: "Large, transaction-heavy enterprise", node: "Real-time, high-concurrency, API-first", python: "ML, data science, automation" },
  { dim: "Concurrency", java: "Mature multithreading", node: "Single-thread event loop, async I/O", python: "Threads or async, CPU-limited" },
  { dim: "Ecosystem", java: "Maven, enterprise-hardened", node: "npm, the largest registry", python: "PyPI, deep AI and data stack" },
  { dim: "Talent pool", java: "Large, enterprise-leaning", node: "Very large, shared with front-end JS", python: "Very large, data and AI heavy" },
  { dim: "Typing", java: "Static, strict by default", node: "TypeScript, opt-in", python: "Type hints, optional" },
  { dim: "Our take", java: "When the load is heavy and JVM-native", node: "Our default for real-time and API-first", python: "Our pick when AI or data is the core" },
];

export function JavaCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Java vs Node.js vs Python"
            title={<>The honest 2026 <span className="gradient-text">backend comparison</span></>}
            sub="We're stack-agnostic, so this is fair, not a pitch. All three are excellent - the real choice in 2026 is about your workload, your team, and how long the system has to last."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[780px] border-collapse text-left text-sm">
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
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.java}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.node}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.python}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            What about .NET or Go? .NET is the equivalent on the Microsoft stack, and Go wins for
            ultra-lean, low-latency infrastructure services - we build in Java and Spring Boot on the
            JVM, and we&apos;ll tell you honestly if your team is better served elsewhere. Weighing the
            other backends we build? See{" "}
            <Link href="/technologies/nodejs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              Node.js for real-time and API-first work
            </Link>{" "}
            and{" "}
            <Link href="/technologies/python" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              Python for data, ML and automation
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
