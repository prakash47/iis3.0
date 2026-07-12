import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconRefresh, IconDatabase, IconGauge, IconShield } from "@/components/icons";

// Problem framing = the persuasion engine of a maintenance page (upkeep is easy to
// defer). Honest, no fabricated stats - just the real ways a live site degrades.
const risks = [
  { icon: <IconRefresh className="h-5 w-5" />, t: "Software ages", d: "CMS cores, plugins and dependencies fall behind, and outdated software is the most common way sites get hacked." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Backups fail silently", d: "The time to discover your backup was never running is not the day after a crash. Backups need to be tested, not assumed." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Speed decays", d: "Unoptimized images and creeping bloat slow a site over time, and Core Web Vitals slip along with your rankings." },
  { icon: <IconShield className="h-5 w-5" />, t: "Small fixes pile up", d: "A broken form, a dead link, an expired certificate - little issues stack up quietly until one of them costs you a customer." },
];

export function MaintenanceWhy() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why upkeep matters"
            title="A launched site is not a finished site"
            sub="Going live is the start of a website's life, not the end. Like anything you rely on, it needs regular care to stay fast, secure and working - here's what quietly goes wrong when it doesn't."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {risks.map((r) => (
            <div key={r.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {r.icon}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{r.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
