import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconBolt, IconCpu, IconServer } from "@/components/icons";

const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own 100% of the code" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconBolt className="h-4 w-4" />, label: "Java 25 LTS + Spring Boot 4" },
];

// IMPORTANT: Java/Spring Boot power NOTHING in our stack (site is Next.js/React SSG;
// even the build runs on Node, not the JVM). So this card describes JAVA & SPRING BOOT
// IN 2026 - it does NOT claim "this site's stack, inspect it". The signature = enterprise,
// transaction-heavy, strict typing, JVM-native (consistency-locked to what the Node/Python
// compare tables already published about Java). Virtual threads framed as multithreading MODERNIZED.
const at2026 = [
  { icon: <IconCpu className="h-4 w-4" />, k: "Runtime", v: "Java 25 LTS (or 21), on the JVM" },
  { icon: <IconServer className="h-4 w-4" />, k: "Framework", v: "Spring Boot 4, Spring Framework 7" },
  { icon: <IconBolt className="h-4 w-4" />, k: "Concurrency", v: "Virtual threads (Project Loom)" },
  { icon: <IconCheck className="h-4 w-4" />, k: "Typing", v: "Static, strict by default" },
];

/**
 * Java & Spring Boot spoke hero - our 8th tech spoke, 5th backend spoke, THE enterprise
 * backend and the hardest trust case on the site. The angle: enterprise-grade Java/Spring
 * Boot ENGINEERING, honestly sized - senior-direct, own the code, published price, no
 * enterprise-body-shop opacity. No own-site claim (Angular/Python/Laravel/Django model);
 * no borrowed enterprise logos; number-free at brand level. The honest-size frame is banked
 * in the capsule.
 */
export function JavaHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Java &amp; Spring Boot development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Java and Spring Boot development services - enterprise backends, APIs and
                microservices,{" "}
                <span className="gradient-text">engineered to run for years.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds custom Java backend systems and Spring Boot APIs and
                microservices - on the JVM, in modern Java 25 (or Kotlin), with strict static typing,
                mature multithreading and virtual threads. Enterprise-grade engineering at transparent
                published fixed prices, and you own 100% of the standard Spring Boot code, with no
                lock-in. We&apos;re a small senior team and honest about it - if you need a certified
                vendor with a big bench and formal SLAs, we&apos;ll tell you that&apos;s not us. For
                startups, scale-ups and enterprise teams worldwide.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Get a fixed quote
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#how-we-work" variant="ghost" size="lg">
                  See how we work
                </Button>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                Fixed price, code you own, no lock-in.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {trustChips.map((c) => (
                  <li key={c.label}>
                    <TrustChip icon={c.icon}>{c.label}</TrustChip>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 lg:justify-self-end">
              <div className="card glow-border relative w-full max-w-sm overflow-hidden p-6">
                <p className="relative z-[1] flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Java &amp; Spring Boot in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-700 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    25 LTS
                  </span>
                </p>
                <ul className="relative z-[1] mt-5 space-y-4">
                  {at2026.map((g) => (
                    <li key={g.k} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-brand-500">
                        {g.icon}
                      </span>
                      <div className="min-w-0">
                        <span className="block text-xs text-muted-foreground">{g.k}</span>
                        <span className="block font-display text-sm font-semibold text-foreground">{g.v}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="relative z-[1] mt-5 border-t border-border pt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  Modern Java - records, sealed types, pattern matching, native images.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
