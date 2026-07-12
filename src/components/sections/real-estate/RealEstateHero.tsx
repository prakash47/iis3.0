import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconShield, IconLayers, IconSearch, IconLock, IconEye } from "@/components/icons";

// THE WORD "APP" IS DELIBERATELY ABSENT from every headline surface, exactly as on the edtech,
// healthcare and fintech pages. Zero mobile apps shipped; "real estate app development" in an H1 or
// meta implies a mobile portfolio. "Listing portals" and "property search" everywhere; the app
// intent routes to /services/mobile-app-development.
//
// THE WORD "COMPLIANT" NEVER APPEARS as a property of us or of software; "fair-housing compliant"
// and "ADA compliant" are banned. We claim the METHOD (design against disparate impact; build to
// WCAG as a method), never the OUTCOME.
//
// The chips are architecture and boundary facts. "We won't build the approve/decline that screens
// your tenants" is the signature's fenced product, stated as a claim about US (always true).
const trustChips = [
  { icon: <IconShield className="h-4 w-4" />, label: "Search and ranking designed against disparate impact" },
  { icon: <IconCheck className="h-4 w-4" />, label: "We won't build the tenant approve/decline of record" },
  { icon: <IconLayers className="h-4 w-4" />, label: "Built to open standards: RESO Web API, IDX, VOW" },
];

// Not a "tech in 2026" card - an industry page has no version. Where healthcare's card stated who
// each obligation binds and fintech's stated where the money lives, this one states WHERE THE
// FAIR-HOUSING RISK AND THE DECISIONING SIT, because that is the page's thesis and real estate's
// structural difference: the risk lives in the logic we write, not in data or money we hold.
const facts = [
  { icon: <IconSearch className="h-4 w-4" />, k: "The fair-housing risk", v: "In the filter and the ranking" },
  { icon: <IconEye className="h-4 w-4" />, k: "Screening decisions", v: "A person and a validated provider" },
  { icon: <IconLock className="h-4 w-4" />, k: "The listing data", v: "Yours, under your MLS licence" },
  { icon: <IconShield className="h-4 w-4" />, k: "The money and licence", v: "With the broker, not with us" },
];

/**
 * The FOURTH bespoke industry page, built on the pattern edtech, healthcare and fintech established.
 *
 * The H1 carries the money keywords ("real estate software", "listing portals") because the slug
 * does not. The gradient span carries the thesis no other page has: fair housing is a property of
 * the algorithm - a search filter, a ranking, a screening score can produce a discriminatory
 * outcome with no intent - so we design against disparate impact as a method, never a claimed
 * outcome. The failure lives in the LOGIC, not in data (healthcare) or money (fintech) we hold.
 */
export function RealEstateHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Real Estate &amp; Listing Portals</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Custom real estate software and listing portals -{" "}
                <span className="gradient-text">designed against disparate impact from the first requirement, not promised around it.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds listing portals, property search and filtering, map
                search, agent and broker CRM, and lead flows - on the open standards real estate runs
                on: the RESO Web API and Data Dictionary, IDX and VOW, built under your MLS agreement.
                In housing, a filter or a ranking can produce a discriminatory outcome with nobody
                intending one, and the responsibility reaches the software - so we design against
                disparate impact as a first requirement. What we will not build is the automated
                tenant approve/decline of record or the valuation the market acts on, because that is
                where the liability is made.
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
                  Where the risk actually sits
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    In the logic
                  </span>
                </p>
                <dl className="relative z-[1] mt-5 space-y-4">
                  {facts.map((f) => (
                    <div key={f.k} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-brand-500">
                        {f.icon}
                      </span>
                      <div className="min-w-0">
                        <dt className="text-xs text-muted-foreground">{f.k}</dt>
                        <dd className="font-display text-sm font-semibold text-foreground">{f.v}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
                <p className="relative z-[1] mt-5 border-t border-border pt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  A neutral-looking filter is still a fair-housing decision.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
