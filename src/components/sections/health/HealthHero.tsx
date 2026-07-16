import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconLock, IconLayers, IconEye, IconRefresh, IconShield } from "@/components/icons";

// THE WORD "APP" IS DELIBERATELY ABSENT from every headline surface, exactly as on the edtech
// page. We have shipped zero mobile apps of any kind, and "healthcare app development" in an H1
// or a meta description implies a mobile portfolio. "Patient portal" and "healthcare software"
// everywhere instead, and the app intent is routed to /services/mobile-app-development.
//
// THE WORD "COMPLIANT" NEVER APPEARS as a property of us or of software, on this page or any
// other. HIPAA is used only as a NOUN inside true sentences.
//
// The chips are architecture and process facts, not outcomes. "We never store your patients'
// PHI" is the precise verb: a portal front end momentarily handles PHI in the browser's DOM, so
// "never touch" would be false. "Store" survives an adversarial read.
const trustChips = [
  { icon: <IconLayers className="h-4 w-4" />, label: "Open standards: FHIR, SMART on FHIR, HL7 v2" },
  { icon: <IconLock className="h-4 w-4" />, label: "We never store your patients' PHI" },
  { icon: <IconCheck className="h-4 w-4" />, label: "We'll tell you when your EHR already does it" },
];

// Not a "tech in 2026" card - an industry page has no version. Where edtech's card listed the
// gates a buyer fails on, this one states WHO EACH OBLIGATION BINDS, because that allocation is
// the page's thesis and healthcare's structural difference: unlike FERPA on the education page,
// HIPAA reaches the vendor directly the moment it handles PHI on a covered entity's behalf.
//
// WCAG 2.1 AA is the legally load-bearing target here too: the 2024 ACA Section 1557 final rule
// adopts WCAG 2.1 Level AA for the web content and mobile apps of covered health programs. It is
// the same version the ADA Title II rule adopts. Do NOT write 2.2. Print NO deadline - they exist
// and they have shifted.
const bindings = [
  { icon: <IconShield className="h-4 w-4" />, k: "HIPAA", v: "Binds you - and us, if we handle PHI" },
  { icon: <IconLock className="h-4 w-4" />, k: "PHI custody", v: "Your HIPAA-eligible infrastructure" },
  { icon: <IconRefresh className="h-4 w-4" />, k: "Interoperability", v: "FHIR, SMART on FHIR, HL7 v2" },
  { icon: <IconEye className="h-4 w-4" />, k: "Accessibility", v: "WCAG 2.1 AA, under Section 1557" },
];

/**
 * The SECOND bespoke industry page, built on the pattern edtech established.
 *
 * The H1 carries the money keywords ("healthcare software", "patient portals") because the slug
 * does not - `/industries/healthcare` is a sector namespace. The gradient span carries the thesis,
 * which is also the page's costliest sentence: the patient data stays on the client's side of the
 * business-associate boundary, and out of ours.
 */
export function HealthHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Healthcare &amp; Patient Portals</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Custom healthcare software and patient portals -{" "}
                <span className="gradient-text">built so patient data stays in your infrastructure, and out of ours.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds patient and provider portals, health-tech front ends and
                the integrations behind them, on the standards healthcare actually runs on: FHIR and
                the US Core profiles, SMART on FHIR to launch inside the system of record, HL7 v2
                where the legacy interface is still the interface. Protected health information stays
                inside the HIPAA-eligible infrastructure you already own. And because most briefs
                that arrive labelled &quot;patient portal&quot; describe something the EHR you are
                already paying for can do, that is usually the first thing we will tell you.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Discuss your project
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#when-not" variant="ghost" size="lg">
                  When we&apos;d say no
                </Button>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                A paid discovery first, a fixed price before any build, and the code is yours.
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
                  Where the obligations land
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Who is bound
                  </span>
                </p>
                <ul className="relative z-[1] mt-5 space-y-4">
                  {bindings.map((b) => (
                    <li key={b.k} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-brand-500">
                        {b.icon}
                      </span>
                      <div className="min-w-0">
                        <span className="block text-xs text-muted-foreground">{b.k}</span>
                        <span className="block font-display text-sm font-semibold text-foreground">{b.v}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="relative z-[1] mt-5 border-t border-border pt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  The boundary is the architecture. Everything else follows from it.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
