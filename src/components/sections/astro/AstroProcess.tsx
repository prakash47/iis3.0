import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconDatabase, IconLayout, IconGauge, IconRocket } from "@/components/icons";

// An Astro-shaped method whose first gate is honest: "is this even a content site?" - we are
// willing to argue AGAINST Astro when it is the wrong tool. Static-first, with every island a
// deliberate opt-in. Performance and SEO built in from the start, measured on the client's pages
// after launch (never a fabricated score, never our Next.js numbers). Distinct from the Next.js
// build process and the WordPress process framings.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Decide if it is Astro at all", timeframe: "first", deliverable: "We start by deciding whether your project is a content site. If it needs to behave like an app we route you to Next.js, if it is editor-run content to WordPress, if it sells products to Shopify or WooCommerce. Choosing Astro is a call we are willing to argue against." },
  { icon: <IconDatabase className="h-6 w-6" />, title: "Model the content, typed", timeframe: "before layout", deliverable: "Before layout, we define the content schema through the Content Layer - collections, field types and the source, whether Markdown and MDX, a headless CMS or a database - so the data contract is explicit and content mistakes become build errors, not production bugs." },
  { icon: <IconLayout className="h-6 w-6" />, title: "Build static-first, add islands", timeframe: "in sprints", deliverable: "The site is static HTML by default. Interactivity is added one island at a time, each with a named client directive, so every byte of shipped JavaScript maps to a specific, reviewable decision. Server Islands go in only where a slot genuinely must render per request." },
  { icon: <IconGauge className="h-6 w-6" />, title: "Performance and SEO by construction", timeframe: "throughout", deliverable: "Semantic HTML, built-in image optimization, View Transitions and prefetch are part of the build from the start, not an audit at the end, and we build to pass Core Web Vitals. We measure on your delivered pages after launch - the number that matters is yours, not one printed here." },
  { icon: <IconRocket className="h-6 w-6" />, title: "Deploy, hand over, migrate", timeframe: "on delivery", deliverable: "We pick the rendering mode per route and the adapter to match your infrastructure, wire a CMS as the source if editors need one, and hand over a documented codebase you own. Moving off Gatsby, Jekyll, Hugo or a heavy WordPress theme is a scoped lane of its own, with URLs mapped so your SEO survives." },
];

export function AstroProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            How we build a content site on Astro -{" "}
            <span className="gradient-text">static-first, JavaScript where it earns its place</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            The first decision is whether Astro is even right for the job. From there it is static HTML
            by default, interactivity added island by island, and performance built in rather than
            bolted on - and most content sites go from kickoff to live in weeks, not months.
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
