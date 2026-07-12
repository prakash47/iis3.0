import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconType, IconLayout, IconDatabase, IconServer, IconRocket } from "@/components/icons";

// A Sanity-shaped method whose first move is the whole game: model the content before any UI, because
// every later decision (Studio, queries, front end) inherits from the schema. Method-not-outcome,
// selection-framed. The front-end pairing routes to Next.js/Astro; the migration path loads into a
// non-production dataset and maps URLs before cutover. Distinct from the WordPress and Astro processes.
const steps = [
  { icon: <IconType className="h-6 w-6" />, title: "Model the content first", timeframe: "first", deliverable: "Before any UI, we design the schema in TypeScript - documents, reusable objects, references, Portable Text and validation - agreed in your repo as code. Getting the content shape right is the whole game, because everything downstream inherits from it." },
  { icon: <IconLayout className="h-6 w-6" />, title: "Build the Studio as a product", timeframe: "before content", deliverable: "We stand up Sanity Studio in your repository, configure the structure so editors navigate the way they work, add custom input components and previews where a plain field is not enough, and set roles, collaboration and the editorial workflow to your real team." },
  { icon: <IconDatabase className="h-6 w-6" />, title: "Write the data layer in GROQ", timeframe: "in sprints", deliverable: "We author the queries the front end needs - filtered, dereferenced and projected to exactly the fields each view renders - and generate TypeScript types from them, so the data contract is checked end to end. We choose cached or real-time reads per surface." },
  { icon: <IconServer className="h-6 w-6" />, title: "Pair the front end, make it reactive", timeframe: "the build", deliverable: "We build the site on Next.js (app-grade, SEO-critical) or Astro (content-and-marketing), reading Sanity over GROQ, and wire GROQ-powered webhooks to on-demand revalidation so a publish refreshes exactly the affected routes - plus the image pipeline and, if needed, internationalization." },
  { icon: <IconRocket className="h-6 w-6" />, title: "Migrate, verify, hand over", timeframe: "on delivery", deliverable: "For a move onto Sanity we script the extract and transform, load into a non-production dataset first, verify content and relationships, then cut over with URLs mapped. We hand you a Studio and schema you own in your repo, documented, with the queries and revalidation wired." },
];

export function SanityProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            How we build on Sanity -{" "}
            <span className="gradient-text">model the content first, and everything follows</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            The content model is the foundation the Studio, the queries and the front end all sit on, so
            we design it before we build anything - and most Sanity builds go from kickoff to live in
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
