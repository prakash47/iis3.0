import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconShield, IconLayout, IconCreditCard, IconCode, IconDatabase } from "@/components/icons";

// "You own your STORE" would be a lie on a hosted platform - Shopify owns the checkout,
// the admin and the hosting, and can suspend an account. What a merchant genuinely owns is
// the data (exportable), the domain and the code. Chip 3 is the app-markup promise, which is
// a real, checkable commitment no badge-waving competitor makes.
const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own your data, domain & code" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconShield className="h-4 w-4" />, label: "No markup on apps" },
];

// Shopify is SaaS with no public version number, so there is no version trap here - currency
// is signalled purely by FEATURES, which is what the version-conservative rule prefers anyway.
// This card describes MODERN SHOPIFY. It does NOT claim "this site's stack, inspect it": our
// site is a static Next.js build with no Shopify behind it. See ShopifyProof.
const at2026 = [
  { icon: <IconLayout className="h-4 w-4" />, k: "Build model", v: "Custom Online Store 2.0 themes" },
  { icon: <IconCreditCard className="h-4 w-4" />, k: "Checkout", v: "Checkout Extensibility + Functions" },
  { icon: <IconCode className="h-4 w-4" />, k: "Headless-ready", v: "Storefront API, Hydrogen or Next.js" },
  { icon: <IconDatabase className="h-4 w-4" />, k: "Content model", v: "Metafields + metaobjects" },
];

/**
 * Shopify spoke hero - our 10th tech spoke, and the first ecommerce-platform spoke.
 * Zero own-site proof (this site is not a Shopify store), so the hero sells the OFFER and the
 * fit-honesty, never a track record. Number-free at brand level: concrete prices live only in
 * ShopifyPricing, the FAQ and the Offer schema.
 */
export function ShopifyHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>Shopify development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                Shopify development services - custom stores, headless storefronts and migrations,{" "}
                <span className="gradient-text">from a team that will tell you when you don&apos;t need them.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds on Shopify: custom Online Store 2.0 themes, cart and
                discount logic as Shopify Functions, checkout extensions, headless storefronts on the
                Storefront API, custom apps and integrations, and migrations that keep your rankings
                intact. Because we&apos;re stack-agnostic, you also get a straight answer on the
                questions that cost real money - whether Shopify is the right platform for you at all,
                whether you actually need Shopify Plus, and whether a standard theme beats the headless
                rebuild that would earn us more. Transparent published fixed prices. For startups, SMBs
                and enterprises worldwide.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Get a fixed quote
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#how-we-work" variant="ghost" size="lg">
                  See how we work
                </Button>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                Fixed price, no markup on apps, and a straight answer on fit.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {trustChips.map((c) => (
                  <li key={c.label}>
                    <TrustChip icon={c.icon}>{c.label}</TrustChip>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 lg:justify-self-end">
              <div className="card glow-border relative w-full max-w-sm overflow-hidden p-6">
                <p className="relative z-[1] flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Shopify in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    OS 2.0
                  </span>
                </p>
                <dl className="relative z-[1] mt-5 space-y-4">
                  {at2026.map((g) => (
                    <div key={g.k} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-brand-500">
                        {g.icon}
                      </span>
                      <div className="min-w-0">
                        <dt className="text-xs text-muted-foreground">{g.k}</dt>
                        <dd className="font-display text-sm font-semibold text-foreground">{g.v}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
                <p className="relative z-[1] mt-5 border-t border-border pt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  Current Shopify - not the theme-and-apps shop of 2018.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
