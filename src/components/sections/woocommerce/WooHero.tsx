import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconCheck, IconTag, IconShield, IconLayout, IconCreditCard, IconDatabase, IconServer } from "@/components/icons";

// The ownership claim here is genuinely the STRONGEST on the site, and it is a deliberate
// contrast with the Shopify hero. Shopify is hosted, so there the honest chip is "You own your
// data, domain & code". WooCommerce is self-hosted and GPL, so the merchant really does own the
// store software, the checkout and the database too. What we must NOT say is "you own the host"
// - hosting is infrastructure you rent and control, not something you own.
const trustChips = [
  { icon: <IconCheck className="h-4 w-4" />, label: "You own the store, code & data" },
  { icon: <IconTag className="h-4 w-4" />, label: "Published fixed pricing" },
  { icon: <IconShield className="h-4 w-4" />, label: "No markup on extensions" },
];

// WooCommerce has no marketing version number to anchor on, so currency is signalled purely by
// FEATURES - which is what the version-conservative rule prefers anyway. Badge = HPOS, the single
// clearest "this is modern Woo, not a 2015 build" tell. This card describes WooCommerce; it makes
// NO own-site claim (our site is a static Next.js build, and WooCommerce is PHP on WordPress).
const at2026 = [
  { icon: <IconLayout className="h-4 w-4" />, k: "Build model", v: "Block theme + WooCommerce core" },
  { icon: <IconCreditCard className="h-4 w-4" />, k: "Checkout", v: "Cart & Checkout blocks + your gateway" },
  { icon: <IconDatabase className="h-4 w-4" />, k: "Orders", v: "High-Performance Order Storage" },
  { icon: <IconServer className="h-4 w-4" />, k: "Data & APIs", v: "REST API + Store API" },
];

/**
 * WooCommerce spoke hero - our 11th tech spoke, and the most-zero page on the honesty ladder:
 * WooCommerce is a WordPress plugin written in PHP, and this site is a static Next.js build
 * compiled by Node, so Woo powers nothing here - not the runtime, not the build, not even the
 * package manager. The hero therefore sells the OFFER and the ownership trade, never a record.
 * Number-free at brand level; concrete prices live only in WooPricing, the FAQ and Offer schema.
 */
export function WooHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>WooCommerce development</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                WooCommerce development services - an online store you own outright,{" "}
                <span className="gradient-text">and the honest cost of owning it.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds custom WooCommerce stores: a lean block theme, the
                block-based Cart and Checkout, High-Performance Order Storage, bespoke extensions and
                integrations, and migrations that keep your rankings intact. WooCommerce is
                open-source software you self-host, so unlike a hosted platform you own the store, the
                checkout, the code and the database outright. And, honestly, you own keeping them
                current too - which is the part most agencies leave off the quote and we put on it.
                Transparent published fixed prices. For startups, SMBs and enterprises worldwide.
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
                Fixed price, no markup on extensions, and the running costs named up front.
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
                  WooCommerce in 2026
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold normal-case tracking-normal text-emerald-600 dark:text-emerald-400">
                    <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    HPOS
                  </span>
                </p>
                <ul className="relative z-[1] mt-5 space-y-4">
                  {at2026.map((g) => (
                    <li key={g.k} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-brand-500">
                        {g.icon}
                      </span>
                      <div className="min-w-0">
                        <span className="block text-xs text-muted-foreground">{g.k}</span>
                        <span className="block font-display text-sm font-semibold text-foreground">{g.v}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="relative z-[1] mt-5 border-t border-border pt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                  Current WooCommerce - not a bought theme and a dozen plugins.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
