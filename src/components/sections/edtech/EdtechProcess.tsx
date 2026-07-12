import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconLock, IconLayers, IconEye, IconShield } from "@/components/icons";

// The distinctive education beats: a build-versus-buy verdict BEFORE anything is designed, a
// privacy and roles model before features, integration before polish, and accessibility verified
// on assistive technology rather than a checker score.
//
// METHOD tense throughout. We have never run this process for an education client, so every step
// is "we will", never "we have". And no compliance outcome is promised at any step.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery & a build-or-extend verdict", timeframe: "1-2 weeks", deliverable: "A paid discovery that ends in a written scope and a fixed build quote, credited toward the build - and an honest verdict first on whether an existing platform already does most of this. If it does, we say so, and the engagement gets smaller." },
  { icon: <IconLock className="h-6 w-6" />, title: "People, roles and privacy posture", timeframe: "before design", deliverable: "Students, guardians, staff, enrolments and roles modelled before any feature. Consent capture, retention, deletion and who-sees-what are data-model decisions, and retrofitting them after the schema is set is the expensive path." },
  { icon: <IconLayers className="h-6 w-6" />, title: "Integration first, not last", timeframe: "weeks", deliverable: "The LTI 1.3 launch, the OneRoster feed, the identity provider and the grade write-back stood up early against real data - because the handshake is easy and it is term rollover, section changes and malformed nightly files that break education builds." },
  { icon: <IconEye className="h-6 w-6" />, title: "Accessibility & procurement readiness", timeframe: "throughout", deliverable: "Built to WCAG 2.1 AA as a method and verified on real assistive technology, not a checker score - then we help you populate the accessibility conformance report and the security questionnaire your buyer will ask for before they ask for a demo." },
  { icon: <IconShield className="h-6 w-6" />, title: "Launch, hand over & term one", timeframe: "on delivery", deliverable: "Load-tested against term start rather than an average day, then handed over: the repository, the code, the IP, the infrastructure in your name. Optional care from $100/month keeps it patched, because a platform that carries student records is never finished." },
];

export function EdtechProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            The verdict comes <span className="gradient-text">before the build</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            We decide whether you should build at all before anyone designs a screen, model the
            people and the privacy before the features, and stand the integrations up against real
            data early - because that is the part that fails, and it fails at term start.
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
