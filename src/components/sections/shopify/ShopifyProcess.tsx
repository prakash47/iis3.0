import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconGrid, IconCode, IconRefresh, IconGauge } from "@/components/icons";

// A Shopify-shaped process with the distinctive beats: a platform fit-check up front (we'll
// tell you if Shopify is wrong for you, or if you don't need Plus), a catalog/content model
// before design, an explicit app audit, and a data-migration + test-order QA gate.
//
// Framed as METHOD - how we would build yours - never as a battle-tested Shopify track record.
// We have shipped no Shopify store, so "our proven Shopify pipeline" would be an overstatement.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery & platform fit-check", timeframe: "2-3 days", deliverable: "We map your catalog, your operations and who runs the store, then agree scope and a fixed price - and if Shopify is the wrong platform for you, or you don't need the Plus plan a sales call would sell you, this is where we say so." },
  { icon: <IconGrid className="h-6 w-6" />, title: "Catalog & content model", timeframe: "days", deliverable: "We model products, variants, collections and the structured content around them in metafields and metaobjects, and design the storefront - because the catalog structure is what the whole store is built on, not an afterthought." },
  { icon: <IconCode className="h-6 w-6" />, title: "Build: theme or headless", timeframe: "weeks", deliverable: "We build a lean custom Online Store 2.0 theme, or a headless storefront on the Storefront API where that's genuinely the right call, plus any Functions, checkout extensions or custom app the store needs - demoed on a preview URL each week." },
  { icon: <IconRefresh className="h-6 w-6" />, title: "Data, apps & QA", timeframe: "before launch", deliverable: "Products, customers and orders imported, every old URL 301-mapped if you're replatforming, the app list audited down to what earns its place, and real test orders run end to end through checkout, tax, shipping and fulfilment." },
  { icon: <IconGauge className="h-6 w-6" />, title: "Launch, train & care", timeframe: "on delivery", deliverable: "We launch, hand over the Shopify account, the code and every login, and train your team on the admin - then keep the theme, apps and content healthy on a care plan, because a live store is never finished." },
];

export function ShopifyProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            From catalog model to <span className="gradient-text">a store your team runs</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            We decide the platform and model the catalog before anyone designs a page, and we&apos;ll
            tell you at the start if Shopify is the wrong fit - so what launches is a fast, lean store
            your team can actually run, not one to rescue in a year.
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
