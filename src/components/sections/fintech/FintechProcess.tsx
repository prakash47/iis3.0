import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconDatabase, IconLayers, IconLock, IconShield } from "@/components/icons";

// The distinctive fintech beats: a money-flow map that decides the whole engagement BEFORE anything
// is designed, the ledger and reconciliation model before features, integration proven against
// sandboxes before real funds, and a care handover that never points a standard plan at a
// funds-bearing system.
//
// METHOD tense throughout. We have never run this process for a fintech client, so every step is
// "we will", never "we have". No compliance outcome is promised at any step. The first step draws
// the line between what stays outside the regulated binding and what does not.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery & the money-flow map", timeframe: "1-2 weeks", deliverable: "A paid discovery that ends in a written scope, a fixed build quote credited toward the build, and a map of exactly where funds and account data flow - and therefore whether the work stays on the software side of the regulated line. If a processor and a sponsor bank already do the regulated part, we say so, and the engagement gets smaller." },
  { icon: <IconDatabase className="h-6 w-6" />, title: "Ledger & reconciliation model first", timeframe: "before design", deliverable: "The double-entry ledger, the money-as-integer rules, and how the ledger reconciles against the processor and the bank, modelled before any feature. Exactly-once posting, corrections as compensating entries and the audit trail are schema decisions, and retrofitting them after the schema is set is the expensive path." },
  { icon: <IconLayers className="h-6 w-6" />, title: "Integration on sandboxes and test rails", timeframe: "weeks", deliverable: "The processor, open-banking and identity integrations stood up early against vendor sandboxes and test rails, with webhook replay and reconciliation proven before real money is anywhere near them - so the failure modes surface in test, and real funds first move only inside your own environment at go-live." },
  { icon: <IconLock className="h-6 w-6" />, title: "Security & procurement readiness", timeframe: "throughout", deliverable: "Least-privilege access, encryption of account data, and the audit trail a written security program is evidenced with, built in from the start - then we help you answer the security questionnaire your buyer or your bank sends, honestly, including the parts where the answer is that we hold no SOC 2 report and no signed attestation." },
  { icon: <IconShield className="h-6 w-6" />, title: "Deploy, hand over & care", timeframe: "on delivery", deliverable: "Deployed into your own environment, then handed over: the repository, the code, the ledger schema and the IP are yours. Care runs on the non-financial surfaces only - the marketing site, the front-end code, the pipeline - while access to and backups of anything holding account data or moving funds stay inside your environment, run by you or by the bank and processor under the agreements we don't sign." },
];

export function FintechProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            The money-flow map comes <span className="gradient-text">before the build</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            We map exactly where funds and account data go before anyone designs a screen, because
            that map decides whether the work stays on the software side of the regulated line - the
            decision the rest of the engagement turns on. Then we model the ledger and the
            reconciliation before the features, and prove the integrations against sandboxes before
            real money moves.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-8 right-8 top-7 hidden h-px bg-gradient-to-r from-brand-500/60 via-accent-400/50 to-transparent lg:block"
          />
          <Reveal group className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((p) => (
              <div
                key={p.title}
                className="group/step relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="relative z-[1] flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] text-brand-300 shadow-[0_0_0_7px_var(--band)] backdrop-blur transition-colors duration-300 group-hover/step:border-brand-400/50 group-hover/step:text-brand-200">
                  {p.icon}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 lg:justify-start">
                  <h3 className="font-display text-base font-semibold text-white">{p.title}</h3>
                  <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold text-brand-300">
                    {p.timeframe}
                  </span>
                </div>
                <p className="mt-2.5 max-w-[15rem] text-sm leading-relaxed text-slate-400 lg:max-w-none">
                  {p.deliverable}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
