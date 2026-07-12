import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconLayers, IconEye, IconRefresh, IconRocket } from "@/components/icons";

// A PHP-shaped process built around the page's biggest lane: legacy modernization, done
// incrementally rather than as a big-bang rewrite. The named practices - characterization
// tests and seams (Michael Feathers) and the strangler-fig migration (Martin Fowler) - are
// real, recognized concepts, not invented method. Modernization triggers are framed as
// mechanism ("an end-of-life line stops getting security patches"), never as printed
// deadlines. New builds follow the same assess-first discipline. Distinct from the Laravel
// build process (data-model-first) and the Node/Python process framings.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Assess before touching", timeframe: "days", deliverable: "We map the PHP version, the dependencies, how config and secrets are handled, and where untrusted input reaches SQL - and produce a risk-ordered picture of what is dangerous, what is merely dated, and what is fine. No changes yet." },
  { icon: <IconLayers className="h-6 w-6" />, title: "Onto a supported line, under Composer", timeframe: "first", deliverable: "The highest-value, lowest-drama step: get the runtime onto a PHP line that still receives security patches, and bring the code under Composer with PSR-4 autoloading so it can adopt modern tooling at all." },
  { icon: <IconEye className="h-6 w-6" />, title: "Pin the behavior, then analyse", timeframe: "before changes", deliverable: "Characterization tests to lock what the system does today, including its quirks, so later changes have a safety net - then static analysis with a baseline, so no new bugs of known classes get in while we work through the old ones." },
  { icon: <IconRefresh className="h-6 w-6" />, title: "Modernize incrementally", timeframe: "in sprints", deliverable: "Rector applies the mechanical upgrades - syntax to the target PHP line, PHPDoc into real types - as reviewed pull requests, while we refactor the risky parts by hand behind the tests. The system keeps running the whole time." },
  { icon: <IconRocket className="h-6 w-6" />, title: "Extract seams, or stop", timeframe: "on delivery", deliverable: "Where the app genuinely needs a framework, we carve out seams and stand up new functionality behind one, replacing the old system piece by piece. Where it does not, we stop - modern raw PHP is a legitimate destination. Either way you own a documented, tested codebase outright." },
];

export function PhpProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            How we modernize a legacy PHP codebase -{" "}
            <span className="gradient-text">without a big-bang rewrite</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            The instinct to throw it all away is usually wrong - a rewrite restarts the clock on every
            bug the old system already fixed. We move it forward incrementally, with the lights on. A
            new build follows the same assess-first discipline, and most work moves in weeks, not
            months.
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
