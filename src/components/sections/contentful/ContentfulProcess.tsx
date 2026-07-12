import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconType, IconShield, IconServer, IconRefresh, IconRocket } from "@/components/icons";

// A Contentful-shaped method that leads with the model (like every headless build) but is distinguished
// by the ENVIRONMENT/GOVERNANCE spine and the SEO-safe migration - the two things that make Contentful
// Contentful. Method-not-outcome, selection-framed. The front-end pairing routes to Next.js/Astro; the
// migration path loads into a non-production environment and maps URLs before cutover; the release is an
// alias repoint. Distinct from Sanity's "model the content first, and everything follows".
const steps = [
  { icon: <IconType className="h-6 w-6" />, title: "Model the content types first", timeframe: "first", deliverable: "Before any UI, we design the content model - typed content types, fields and validations, references and the content graph - agreed as the contract everything downstream inherits from. Getting the model right is the decision that decides whether the next three years are calm or painful." },
  { icon: <IconShield className="h-6 w-6" />, title: "Stand up governance", timeframe: "the platform", deliverable: "We set up spaces and environments, define roles and permissions down to types and fields, and wire the editorial workflow - tasks and review, scheduled publishing, releases and localization - to how your teams actually approve and ship. This is the coordination layer, configured to your reality, not a default." },
  { icon: <IconServer className="h-6 w-6" />, title: "Wire the delivery", timeframe: "the build", deliverable: "We connect the front end - Next.js for app-grade and SEO-critical, Astro for content sites - reading Contentful over the Delivery or GraphQL API, with drafts served through the Preview API. Webhooks fire on publish and drive on-demand revalidation so an edit refreshes exactly the affected routes within seconds." },
  { icon: <IconRefresh className="h-6 w-6" />, title: "Migrate in a safe environment", timeframe: "on a move", deliverable: "For a move onto Contentful we script the extract and transform through the Management API and run the whole import into a non-production environment, where we verify counts, references and rendered output before anything touches production. URLs are mapped and redirects planned before cutover, so the SEO survives the move." },
  { icon: <IconRocket className="h-6 w-6" />, title: "Release, and hand over", timeframe: "on delivery", deliverable: "We release by repointing an environment alias at the tested environment - no code change, instant rollback by repointing back - and hand you a governed Contentful space and a front end you own, documented, with the model, the workflow and the revalidation wired. What you keep is standard, exportable Contentful." },
];

export function ContentfulProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            How we implement Contentful -{" "}
            <span className="gradient-text">and migrate onto it without breaking SEO</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            The content model and the governance are the foundation the delivery sits on, so we build
            them first - and most Contentful builds go from kickoff to live in weeks, not months.
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
