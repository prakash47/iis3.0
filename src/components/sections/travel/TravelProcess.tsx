import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconShield, IconLayers, IconRefresh, IconServer } from "@/components/icons";

// The distinctive travel beats: a promise-and-status map that decides the whole engagement BEFORE
// anything is designed, honest availability and disruption modelled before the happy path,
// integration under the client's supplier agreements, and a care handover that never points a
// standard plan at traveller PII, a booking-funds path or licensed distribution data.
//
// METHOD tense throughout. We have never run this process for a travel client, so every step is
// "we will", never "we have". No compliance outcome promised. The first step draws the line: what
// the software can honestly promise, and what a feature would do to the client's regulated status.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery & the promise-and-status map", timeframe: "1-2 weeks", deliverable: "A paid discovery that ends in a written scope, a fixed build quote credited toward the build, and a map of what the software can honestly promise, where traveller data and money flow, and which features - above all bundling - would change your regulated status. If an off-the-shelf engine already does most of it, we say so, and the engagement gets smaller." },
  { icon: <IconShield className="h-6 w-6" />, title: "Honest availability & disruption first", timeframe: "before the happy path", deliverable: "How availability is reconfirmed against the system of record at commit, how inventory is held with a short lock, and how disruption - cancellations, misconnects, refunds - is modelled as a first-class state. These are the parts that only matter on the worst day, so they are designed before the search box is polished, not bolted on after launch." },
  { icon: <IconLayers className="h-6 w-6" />, title: "Integration under your supplier agreements", timeframe: "weeks", deliverable: "Front ends and adapters built to the NDC and OpenTravel standards, with GDS, channel-manager and property-system connectivity under your own commercial agreements, proven against sandboxes and test inventory before real bookings are involved - and each channel's display and redistribution rules honoured in the code." },
  { icon: <IconRefresh className="h-6 w-6" />, title: "Payments, accessibility & the review surfaces", timeframe: "throughout", deliverable: "Payments on a licensed processor so the software never holds funds, the reservation system built so it can identify, describe, hold and guarantee accessible rooms, WCAG success criteria as a method, and the refund and notification paths that reach a traveller who is already on the way - built in, not retrofitted." },
  { icon: <IconServer className="h-6 w-6" />, title: "Deploy, hand over & care", timeframe: "on delivery", deliverable: "Deployed into your own environment, then handed over: the repository, the code and the integrations are yours. Care runs on the non-sensitive surfaces only - the marketing site, the front-end code, the pipeline - while backups, access and monitoring of anything holding traveller data, moving booking funds or storing licensed distribution data stay inside your environment, run by you, the accredited seller, the processor or the GDS." },
];

export function TravelProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            The promise-and-status map comes <span className="gradient-text">before the build</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            We map what the software can honestly promise, where the money and the traveller data
            flow, and which features would change your regulated status, before anyone designs a
            screen - because that map decides what we build honestly and what we flag. Then we design
            availability and disruption before the happy path, and integrate suppliers under your
            agreements.
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
