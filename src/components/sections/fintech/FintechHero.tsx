import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconLock, IconLayers, IconRefresh, IconShield, IconServer } from "@/components/icons";

// THE WORD "APP" IS DELIBERATELY ABSENT from every headline surface, exactly as on the edtech and
// healthcare pages. We have shipped zero mobile apps of any kind, and "fintech app development" in
// an H1 or a meta implies a mobile portfolio. "Fintech software" and "payments" everywhere; the
// app intent routes to /services/mobile-app-development.
//
// THE WORD "COMPLIANT" NEVER APPEARS as a property of us or of software, and "bank-grade" is
// banned. PCI DSS, SOC 2, GLBA appear only as nouns inside true sentences.
//
// The chips are architecture and boundary facts, not outcomes. "We don't hold your customers'
// money" is the you-are-not-the-bank spine; it is hedged in prose ("almost never the bank") and
// stated flatly only as a claim about US, which is always true.
const trustChips = [
  { icon: <IconLayers className="h-4 w-4" />, label: "Open rails: card networks, ACH, ISO 20022, open banking" },
  { icon: <IconLock className="h-4 w-4" />, label: "We don't hold your customers' money" },
  { icon: <IconCheck className="h-4 w-4" />, label: "We'll tell you when the real project is a licence" },
];

// Not a "tech in 2026" card - an industry page has no version. Where healthcare's card stated who
// each obligation binds, this one states WHERE THE MONEY AND THE LICENCE ACTUALLY LIVE, because
// that is the page's thesis and fintech's structural difference: the regulated entity is a sponsor
// bank, a processor or a licensed transmitter, almost never the fintech and never its software
// vendor. Crypto is scoped out here too, plainly.
const facts = [
  { icon: <IconServer className="h-4 w-4" />, k: "The funds", v: "Your bank or processor holds them" },
  { icon: <IconShield className="h-4 w-4" />, k: "The licence", v: "Your sponsor bank or transmitter" },
  { icon: <IconRefresh className="h-4 w-4" />, k: "The ledger", v: "Yours, reconciled to theirs" },
  { icon: <IconLock className="h-4 w-4" />, k: "Crypto", v: "Not us - out of scope, on purpose" },
];

/**
 * The THIRD bespoke industry page, built on the pattern edtech and healthcare established.
 *
 * The H1 carries the money keywords ("fintech software", "payments") because the slug does not -
 * /industries/fintech is a sector namespace. The gradient span carries the two theses no other
 * page has: (a) you are not the bank, the money moves on rails you rent, and (b) the ledger has to
 * reconcile to the penny (the Synapse lesson). "reconcile to the penny" is framed as an obligation
 * the build must meet, never a guaranteed outcome we warrant.
 */
export function FintechHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>FinTech &amp; Payments</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Custom fintech software and payments -{" "}
                <span className="gradient-text">built so the money moves on rails you rent, and the ledger has to reconcile to the penny.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds embedded-payment front ends, financial dashboards,
                back-office tooling and the reconciliation and ledger software behind them, on the
                rails fintech actually runs on: payment processors, card networks, ACH, and
                open-banking access through providers like Plaid. You are almost never the bank, so
                the money moves on a licensed provider you rent - a processor or a sponsor bank - and
                the software&apos;s job is to instruct it and prove where it went. We do not hold
                customer funds and we do not build crypto, and the first thing we will usually tell
                you is that renting those rails beats building them.
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
                  Where the money and licence live
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Not with us
                  </span>
                </p>
                <ul className="relative z-[1] mt-5 space-y-4">
                  {facts.map((f) => (
                    <li key={f.k} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-brand-500">
                        {f.icon}
                      </span>
                      <div className="min-w-0">
                        <span className="block text-xs text-muted-foreground">{f.k}</span>
                        <span className="block font-display text-sm font-semibold text-foreground">{f.v}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="relative z-[1] mt-5 border-t border-border pt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  Your ledger is a claim about their money until it reconciles.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
