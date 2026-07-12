import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconGrid, IconSpark, IconBolt, IconTrendingUp, IconDevice, IconShield } from "@/components/icons";

// Business-framed benefits, not buzzwords - and, crucially, the honest "when React
// alone isn't enough" block that routes SEO/framework intent to Next.js. That
// honesty is the intellectual center of the page and the cross-link engine.
const pillars = [
  { icon: <IconGrid className="h-5 w-5" />, t: "Reusability that compounds", d: "Build a UI vocabulary once and reuse it across the whole product - faster features, a consistent design, lower long-term cost." },
  { icon: <IconSpark className="h-5 w-5" />, t: "The biggest ecosystem & talent pool", d: "The most-used UI library on earth: more solved problems, more libraries, and developers who can maintain your code long after we hand it over." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Interactivity done right", d: "The best-in-class experience for rich, app-like interfaces that update instantly as users interact, without full page reloads." },
  { icon: <IconTrendingUp className="h-5 w-5" />, t: "One model that scales", d: "The same component and hook model works from a single widget to a large app, so teams and codebases grow without switching paradigms." },
  { icon: <IconDevice className="h-5 w-5" />, t: "Skills carry to mobile", d: "The same React mental model powers native mobile through React Native, so web and app share concepts and a lot of logic." },
  { icon: <IconShield className="h-5 w-5" />, t: "A low-regret default", d: "Meta-backed, React 19 shipped with a compiler, and it tops the usage surveys - choosing React in 2026 is the safe, well-supported bet." },
];

export function ReactWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why React"
            title="Why teams build UIs on React"
            sub="React is the UI library we reach for when interactivity, reuse and a maintainable codebase all matter. Here's what it buys you - and, honestly, when it isn't enough on its own."
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

        {/* The honesty wedge - and the SEO routing to Next.js and the web hub */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When React alone isn&apos;t the right tool
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A plain React app renders in the browser, so by itself it&apos;s a weak choice for
              pages that must rank in Google - it ships a near-empty HTML shell. If SEO and server
              rendering matter, you want a React framework, which is{" "}
              <Link href="/technologies/nextjs" className="font-medium text-brand-500 hover:text-brand-600">
                Next.js
              </Link>
              . And a simple content site or blog may not need React at all - static HTML can be
              lighter and cheaper, and we&apos;ll say so rather than over-engineer. Not sure which
              way to go?{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
                We&apos;ll pick the right stack
              </Link>{" "}
              for the job.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
