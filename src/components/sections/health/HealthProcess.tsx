import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconLock, IconLayers, IconEye, IconShield } from "@/components/icons";

// The distinctive healthcare beats: a data-flow map that decides the whole engagement BEFORE
// anything is designed, a consent-and-segmentation model before features, integration against
// sandboxes and synthetic data before real PHI ever appears, and accessibility verified on
// assistive technology because Section 1557 makes it a gate.
//
// METHOD tense throughout. We have never run this process for a healthcare client, so every step
// is "we will", never "we have". No compliance outcome is promised at any step. The first step is
// where the business-associate boundary is drawn - the decision the rest of the page turns on.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery & the data-flow map", timeframe: "1-2 weeks", deliverable: "A paid discovery that ends in a written scope, a fixed build quote credited toward the build, and a map of exactly where patient data flows - and therefore whether the work can stay outside the business-associate boundary. If your record system already does most of it, we say so, and the engagement gets smaller." },
  { icon: <IconLock className="h-6 w-6" />, title: "Consent, roles and the PHI boundary", timeframe: "before design", deliverable: "Who may see what, which data is sensitive enough to segment, where consent is captured, and which surfaces are allowed to hold identifiable data - modelled before any feature. These are schema decisions, and retrofitting them after the schema is set is the expensive path." },
  { icon: <IconLayers className="h-6 w-6" />, title: "Integration on sandboxes and synthetic data", timeframe: "weeks", deliverable: "The SMART on FHIR launch, the FHIR reads and writes and any HL7 v2 feed stood up early against vendor sandboxes and synthetic records - so the integration is proven before real PHI is anywhere near it, and real data first appears only inside your own infrastructure at deployment." },
  { icon: <IconEye className="h-6 w-6" />, title: "Accessibility & security-review readiness", timeframe: "throughout", deliverable: "Built to WCAG 2.1 AA as a method and verified on real assistive technology, not a checker score - then we help you answer the security questionnaire your buyer sends, honestly, including the parts where the answer is that we hold no HITRUST, no SOC 2 and no signed agreement." },
  { icon: <IconShield className="h-6 w-6" />, title: "Deploy, hand over & care", timeframe: "on delivery", deliverable: "Deployed onto HIPAA-eligible cloud in your name, then handed over: the repository, the code, the IP and the infrastructure are yours. Care runs on the non-PHI surfaces only - the marketing site, the front-end layer, the pipeline - while backups and access to anything holding patient data stay inside your infrastructure, not ours." },
];

export function HealthProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            The data-flow map comes <span className="gradient-text">before the build</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            We map exactly where patient data goes before anyone designs a screen, because that map
            decides whether the work stays outside the business-associate boundary - which is the
            decision the rest of the engagement turns on. Then we model consent and roles before the
            features, and prove the integrations against synthetic data before real records exist.
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
