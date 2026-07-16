import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";

// Named SYSTEM types - this grid IS the keyword lane and the self-qualifier that
// draws the boundary against the web and mobile pages. Capabilities, never a
// client claim.
const scope = [
  { t: "Internal tools & admin dashboards", d: "Replace a spreadsheet or a fragile process with software built for one team." },
  { t: "Customer & partner portals", d: "Multi-user systems with authentication, roles, permissions and your data." },
  { t: "SaaS platforms", d: "Multi-tenant products with accounts, billing, tenancy and an admin back office." },
  { t: "APIs & integrations", d: "Connect your CRM, ERP, payments, auth provider or legacy database - cleanly." },
  { t: "Workflow automation", d: "Kill manual, repetitive work with software that runs the process for you." },
  { t: "Data pipelines & dashboards", d: "Move, clean and surface your data where your team can actually use it." },
  { t: "Legacy modernization", d: "Replace software that no longer fits, migrating your data without losing it." },
  { t: "Bespoke business systems", d: "When off-the-shelf tools just can't do it, we build the system that can." },
];

export function CustomScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build"
            title="Bespoke systems, not off-the-shelf tools"
            sub="The software your business runs on when a spreadsheet or a SaaS subscription no longer fits. A typical engagement covers:"
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2">
          {scope.map((s) => (
            <div key={s.t} className="card flex items-start gap-3 p-5">
              <span aria-hidden="true" className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-500">
                <IconCheck className="h-3.5 w-3.5" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{s.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Clean boundary vs the neighbouring money pages */}
        <Reveal className="mt-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Need a website, web app or PWA as your web presence?{" "}
            <Link href="/services/web-design-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              See web design &amp; development
            </Link>
            . A native iOS or Android app?{" "}
            <Link href="/services/mobile-app-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              See mobile app development
            </Link>
            . An AI chatbot or AI automation?{" "}
            <Link href="/services/ai-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              See AI development
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
