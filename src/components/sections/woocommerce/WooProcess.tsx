import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconGrid, IconCode, IconRefresh, IconGauge } from "@/components/icons";

// A WooCommerce-shaped process with the distinctive beats: a platform fit-check up front (we'll
// tell you if a hosted store suits you better), a catalog and content model before design, an
// explicit extension audit, live-mode payment testing, and a handover that includes the upkeep plan.
//
// Framed as METHOD - how we would build yours - never as a battle-tested WooCommerce pipeline.
// We have shipped zero WooCommerce stores, so "our proven Woo process" would be an overstatement.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery & platform fit-check", timeframe: "2-3 days", deliverable: "We map your catalog, your operations and who runs the store, then agree scope and a fixed price - and if a hosted store you never have to patch suits you better than a self-hosted one, this is where we say so rather than after you've paid." },
  { icon: <IconGrid className="h-6 w-6" />, title: "Catalog & content model", timeframe: "days", deliverable: "We model products, variations, categories and the editorial content around them, and design the storefront - because on a content-led store the catalog and the content structure are the thing the whole build stands on." },
  { icon: <IconCode className="h-6 w-6" />, title: "Build: block theme, checkout & extensions", timeframe: "weeks", deliverable: "We build a lean custom block theme, the block Cart and Checkout, and any bespoke extension the store needs - choosing a short, audited list over a pile of overlapping plugins, and demoing it on a staging URL each week." },
  { icon: <IconRefresh className="h-6 w-6" />, title: "Data, payments & QA", timeframe: "before launch", deliverable: "Products, customers and orders imported, every old URL 301-mapped if you're replatforming, the extension list audited down to what earns its place, and real test orders run end to end through the live gateway, tax, shipping and fulfilment." },
  { icon: <IconGauge className="h-6 w-6" />, title: "Launch, hand over & care", timeframe: "on delivery", deliverable: "We launch, hand over the store, the code, the database and every login, and train your team on the admin - then keep core, extensions, PHP and backups current on a care plan, because a self-hosted store is never finished." },
];

export function WooProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            From catalog model to <span className="gradient-text">a store you own and run</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            We decide the platform and model the catalog before anyone designs a page, and we&apos;ll
            tell you at the start if a hosted store is the better fit - so what launches is a lean,
            fast store your team can actually run, not one to rescue in a year.
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
