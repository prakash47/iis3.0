import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCode, IconDatabase, IconRefresh, IconBolt, IconTrendingUp, IconShield } from "@/components/icons";

// Fit-framed benefits - about workload and team, not buzzwords - and the honest
// "when NOT to use Python" block that routes intent to the sibling backend/framework
// spokes and the AI service. That honesty is the intellectual center and cross-link engine.
const pillars = [
  { icon: <IconCode className="h-5 w-5" />, t: "Readability that scales", d: "Python's clarity is a business asset: a small senior team moves fast, and you inherit a codebase the next team can actually read - lower long-term cost." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "The unmatched data & AI ecosystem", d: "The No. 1 language for data, machine learning and scientific computing - pandas, NumPy, scikit-learn, PyTorch. When your backend touches data, the libraries are already there." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "A glue language for anything", d: "Python connects systems - APIs, databases, files, cloud services, legacy tools. It's the default choice for the automation and integration work no one else wants to own." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Fast to build, fast to change", d: "Less ceremony per feature means quicker iteration - ideal for MVPs, internal tools and evolving products where the spec is still moving." },
  { icon: <IconTrendingUp className="h-5 w-5" />, t: "A huge, hireable talent pool", d: "Python is consistently among the most-used and most-taught languages, so there's always someone to maintain what we build long after we hand it over." },
  { icon: <IconShield className="h-5 w-5" />, t: "Typed and modern, not just dynamic", d: "2026 Python is type-hinted and checked with mypy or pyright, and FastAPI with Pydantic v2 gives it modern async performance - far from its old scripting reputation." },
];

export function PythonWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Python"
            title="Why teams build on Python"
            sub="Python is the language we reach for when data, AI, automation or a clean readable codebase matter most. Here's what it buys you - and, honestly, when it's the wrong tool."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {p.icon}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{p.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </Reveal>

        {/* The anti-recommendation - the strongest trust signal and the cross-link
            engine to the sibling spokes and the AI service. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to use Python
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              Python is our pick when the core of the job is AI or ML, data, automation, or a clean
              typed API. It is the wrong tool - and we&apos;ll say so - when the work is raw CPU-bound,
              latency-critical compute: Python is comparatively slow in hot loops, so if the whole
              product is a low-latency engine we&apos;d reach for Go or Rust and scope it through a{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                custom software Discovery Sprint
              </Link>{" "}
              rather than force the language. If you want a real-time, I/O-heavy app in one JavaScript
              language across the stack, that&apos;s{" "}
              <Link href="/technologies/nodejs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Node.js, the other backend runtime
              </Link>
              . If it&apos;s a content and admin-heavy web app, that&apos;s a{" "}
              <Link href="/technologies/django" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Django, the batteries-included Python web framework
              </Link>{" "}
              decision. And if what you actually want is a finished AI product, that&apos;s our{" "}
              <Link href="/services/ai-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                AI development
              </Link>{" "}
              service, priced to the requirement.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
