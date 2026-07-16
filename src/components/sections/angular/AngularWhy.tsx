import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconGrid, IconCheck, IconShield, IconTrendingUp, IconBuilding, IconLayers } from "@/components/icons";

// Enterprise-case benefits (structure/consistency over flexibility), plus two
// trust-building blocks: the honest "Is Angular dead?" correction (the biggest
// AEO query for Angular) and the "when Angular isn't right" anti-recommendation
// that routes non-fit buyers to React or the web hub.
const pillars = [
  { icon: <IconGrid className="h-5 w-5" />, t: "Structure for large teams", d: "Angular is opinionated on purpose - routing, DI, forms and HTTP come from one place, so a big team writes code that stays consistent over years." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Batteries included", d: "You're not assembling a router plus a data library plus a forms library and hoping they keep agreeing - fewer moving parts, fewer upgrade-day surprises." },
  { icon: <IconCheck className="h-5 w-5" />, t: "TypeScript-native", d: "Angular was rebuilt around TypeScript - type safety runs through templates, forms and DI, catching whole classes of bugs at compile time." },
  { icon: <IconShield className="h-5 w-5" />, t: "Built for regulated domains", d: "Consistency, auditability, testability and accessibility make Angular a strong fit for banking, fintech, healthcare and government." },
  { icon: <IconTrendingUp className="h-5 w-5" />, t: "Maintainable for years", d: "A predictable release cadence, first-party upgrade tooling and a conventional structure any Angular developer can read - low total cost of ownership." },
  { icon: <IconBuilding className="h-5 w-5" />, t: "Google-backed longevity", d: "Actively developed by Google on a steady cadence - you're building on a framework that will still be here for the life of your app." },
];

export function AngularWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Angular"
            title="When structure beats flexibility"
            sub="Angular's opinionation is the feature, not the bug. For large, long-lived, form-heavy apps, enforced convention beats creative freedom - here's the honest case."
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

        {/* The "Is Angular dead?" myth-buster - the biggest AEO query for Angular */}
        <Reveal className="mt-6">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-lg font-bold text-foreground">
                Is Angular dead in 2026? No.
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                The &quot;Angular is dead&quot; line is a leftover from the painful AngularJS-to-Angular-2
                era, and it hasn&apos;t been true for years. Angular is actively developed by Google,
                currently at v22 (June 2026), with roughly 3.8 million weekly npm downloads and heavy
                enterprise adoption. What people usually mean is that <em>AngularJS</em> (1.x, a
                different, older framework) reached end of life in 2021 - and that part is true.
                Modern Angular reinvented itself with signals, standalone components and zoneless
                change detection. It&apos;s in a genuine renaissance, and strongest exactly where you&apos;d
                want it: enterprise.
              </p>
            </div>
          </div>
        </Reveal>

        {/* The honest anti-recommendation that routes non-fit buyers away */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When Angular isn&apos;t the right choice
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              Angular is overkill for a small marketing site, a simple content page, or a team that
              wants maximum flexibility and a minimal footprint - its structure is overhead you
              don&apos;t need at that size. If that&apos;s you,{" "}
              <Link href="/technologies/react" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                React
              </Link>{" "}
              or a lighter stack is the better call, and{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                we&apos;ll build it that way
              </Link>
              . Talking you out of the heavier framework when you don&apos;t need it is the whole
              point of a stack-agnostic team.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
