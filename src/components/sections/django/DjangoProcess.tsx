import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconGrid, IconCode, IconEye, IconServer } from "@/components/icons";

// A Django-shaped process with the distinctive, true-to-the-framework beat: models ->
// migrations -> admin, which gives the client a usable back-office EARLY (often week one).
// Distinct from Node's API/real-time, Python's data-audit and Laravel's view-layer framing.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery & data model", timeframe: "2-3 days", deliverable: "We map the entities, roles and integrations, agree scope and a fixed price, and design the data model - which in Django is where the app really starts." },
  { icon: <IconGrid className="h-6 w-6" />, title: "Models, migrations & admin", timeframe: "days", deliverable: "Models and migrations first, which gives you a working admin back-office early - often a usable internal tool in week one, before the front end exists." },
  { icon: <IconCode className="h-6 w-6" />, title: "Views, API & UI", timeframe: "weeks", deliverable: "Views and DRF or Django Ninja APIs, with templates and HTMX or a decoupled React front end - demoed on a live URL every week, never a black box." },
  { icon: <IconEye className="h-6 w-6" />, title: "Test & harden", timeframe: "ongoing", deliverable: "pytest-django, a security pass on Django's defaults, and a performance pass with eager loading and caching - so it ships solid and observable." },
  { icon: <IconServer className="h-6 w-6" />, title: "Deploy & hand over", timeframe: "on delivery", deliverable: "Deployed on ASGI behind Gunicorn with CI/CD and migrations in the pipeline, documented and handed over - a standard Django repo, admin and database you own outright." },
];

export function DjangoProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            From data model to <span className="gradient-text">a running Django app</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Django&apos;s natural build order is models, migrations, then the admin - so you get a
            usable back-office early, often in week one - and most builds go from kickoff to live in
            weeks, not months.
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
