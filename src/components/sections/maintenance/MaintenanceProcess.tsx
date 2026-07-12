import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconRefresh, IconShield, IconFileText, IconCheck } from "@/components/icons";

// Makes an invisible recurring service tangible: the one-time onboarding, then the
// repeating monthly rhythm. The response line is HONEST (one business day) - no
// fabricated hard SLA. Updates are tested in staging, never automated-and-forgotten.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Onboard & audit", timeframe: "week one", deliverable: "We start with a health audit and set up monitoring, backups and access - so we know exactly what we're caring for." },
  { icon: <IconRefresh className="h-6 w-6" />, title: "Update & test", timeframe: "monthly", deliverable: "Updates applied and tested in staging before they touch your live site - never automated and forgotten." },
  { icon: <IconShield className="h-6 w-6" />, title: "Scan & back up", timeframe: "ongoing", deliverable: "Security scans and verified backups on a fixed schedule, with alerts if something looks wrong." },
  { icon: <IconFileText className="h-6 w-6" />, title: "Report", timeframe: "monthly", deliverable: "A plain report: what we updated, backups confirmed, security events, and how the site is performing." },
  { icon: <IconCheck className="h-6 w-6" />, title: "Support", timeframe: "one business day", deliverable: "You reach the senior person who does the work, not a ticket queue - and we respond within one business day." },
];

export function MaintenanceProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How it works
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            Care that runs <span className="gradient-text">like clockwork</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Maintenance should be boring - in the best way. We onboard once, then repeat the same
            reliable rhythm every month, and send you a report so you can always see it happening.
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
