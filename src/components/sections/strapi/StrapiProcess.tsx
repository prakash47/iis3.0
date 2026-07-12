import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconType, IconGrid, IconCode, IconServer, IconRocket } from "@/components/icons";

// A Strapi-shaped method whose first move is the content model, because every endpoint and screen
// inherits from it. Method-not-outcome. The front-end pairing routes to Next.js/Astro; the self-hosting
// step states the operational responsibility as METHOD (patching discipline, staging, care plans),
// never a "secure" guarantee. SIGNATURE GUARD: this band's H2 and step titles must NOT use "cost/price
// of owning" wording (that is the live WooCommerce signature); the maintenance material stays supporting.
const steps = [
  { icon: <IconType className="h-6 w-6" />, title: "Model the content types first", timeframe: "first", deliverable: "Before any UI, we design the collection types, single types and components in the Content-Type Builder or in code, with typed fields and relations, agreed in your repo. The content model is the contract every endpoint and screen inherits from, so getting its shape right is the whole game." },
  { icon: <IconGrid className="h-6 w-6" />, title: "Wire the editorial workflow", timeframe: "before content", deliverable: "We set roles and permissions, internationalization, draft & publish and the media library to how your team really works - and we scope only the paid-edition features you actually need, openly, rather than surfacing them at renewal." },
  { icon: <IconCode className="h-6 w-6" />, title: "Extend the API in Node", timeframe: "in sprints", deliverable: "Strapi generates the REST API from your model, and GraphQL via its plugin; where that is not enough we add typed Node - custom controllers, services, routes, middleware and lifecycle hooks - only where the generated API genuinely falls short." },
  { icon: <IconServer className="h-6 w-6" />, title: "Pair the front end, make it reactive", timeframe: "the build", deliverable: "We build the site on Next.js (app-grade, SEO-critical) or Astro (content-first) reading Strapi's API, and wire webhook-driven revalidation so a publish refreshes exactly the affected routes - never a full rebuild for a single edit." },
  { icon: <IconRocket className="h-6 w-6" />, title: "Deploy, hand over, and keep it current", timeframe: "on delivery", deliverable: "We deploy self-hosted on infrastructure you control - or on managed Strapi Cloud if you prefer - and hand you a codebase and database you own. Because self-hosting has to be patched and kept current, we can run it on a care plan or hand it to your team, tested in staging before anything ships." },
];

export function StrapiProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            How we build on Strapi -{" "}
            <span className="gradient-text">model the content types first, and you own what ships</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            The content model is the foundation the API, the admin and the front end all sit on, so we
            design it before we build anything - and because you self-host it, we are honest from the
            start about keeping it patched and current. Most Strapi builds go from kickoff to live in
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
