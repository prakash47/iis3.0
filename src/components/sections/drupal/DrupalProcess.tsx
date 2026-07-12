import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconType, IconShield, IconLayout, IconRefresh, IconRocket } from "@/components/icons";

// A Drupal-shaped method that leads with the content model (every serious Drupal build does) and is
// distinguished by the GOVERNANCE-as-code spine and the SEO-safe Drupal-7 migration. Method-not-outcome,
// selection-framed. The theme step routes the decoupled front-end build to Next.js/Astro; the migration
// path loads into a non-production copy and maps URLs before cutover; the launch is a config-managed
// deploy. Distinct from the sibling processes.
const steps = [
  { icon: <IconType className="h-6 w-6" />, title: "Model the content first", timeframe: "first", deliverable: "Before any theme, we design the content model - types, fields, validations, taxonomy and entity references - as the contract everything downstream inherits from. Getting the structure right is the decision that decides whether the next three years are calm or painful." },
  { icon: <IconShield className="h-6 w-6" />, title: "Configure the governance", timeframe: "the platform", deliverable: "We set up the editorial machinery Drupal ships natively - content moderation and workflows, fine-grained roles and the Access Policy API, staged content changes for review, and multilingual - wired to how your teams actually approve and translate, with the configuration managed as code, not clicked." },
  { icon: <IconLayout className="h-6 w-6" />, title: "Build the front end", timeframe: "the build", deliverable: "We build the theme with Single Directory Components and Layout Builder for a traditional Drupal site - or, when the project wants an application-grade front end, run Drupal decoupled over JSON:API or GraphQL and build the front end in Next.js or Astro. Drupal owns the structured content; the front end is free to be what the product needs." },
  { icon: <IconRefresh className="h-6 w-6" />, title: "Migrate, if you are moving", timeframe: "on a move", deliverable: "For a move onto Drupal 11 - most often off Drupal 7, which is now past its end of life - we script the extract and transform through the Migrate API into a fresh, non-production copy, verify content, taxonomy and references, and map URLs with redirects before cutover, so the SEO survives the move." },
  { icon: <IconRocket className="h-6 w-6" />, title: "Launch, and hand over", timeframe: "on delivery", deliverable: "We deploy with the configuration in code, so the launch is repeatable and reviewed, and hand you a documented Drupal site you own outright, running on hosting in your own name. We can carry the ongoing security updates on a care plan, or hand it to any competent Drupal team - it is standard Drupal." },
];

export function DrupalProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            How a Drupal build runs -{" "}
            <span className="gradient-text">from discovery to launch</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            The content model and the governance are the foundation everything else sits on, so we build
            them first - and most Drupal builds go from kickoff to live in weeks, not months.
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
