import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLayers, IconDatabase, IconCreditCard, IconLayout, IconLock, IconClock, IconGauge, IconCpu, IconSearch, IconCode, IconPlane, IconRefresh } from "@/components/icons";

// The E-E-A-T CENTREPIECE and the entire proof substitute - there is no own-site WooCommerce to
// inspect. Current 2026 vocabulary: HPOS, the block-based Cart and Checkout, the Store API and the
// Additional Checkout Fields API, the Product Collection block, Action Scheduler, WooPayments.
//
// FOUR HARD RULES ENFORCED HERE:
// 1. NO deprecation deadline for the classic shortcode checkout. Unlike Shopify's checkout.liquid,
//    WooCommerce has announced NO sunset date. Direction is signalled by "new capabilities are
//    block-first", never by a date we would be inventing.
// 2. Card 5 states the PCI trade in PLAIN METHOD LANGUAGE. No SAQ letters, no PCI DSS requirement
//    numbers - printing compliance codes on a marketing page invites an "are you a QSA?" attack and
//    goes stale as the standard revises. And never a blanket "PCI-compliant" badge: on self-hosted
//    WooCommerce compliance is shared between the merchant, the host and the gateway.
// 3. NO numbers anywhere. Not HPOS's marketing multipliers, not order-count thresholds, not KB or
//    millisecond figures, and never a Lighthouse or CWV score for a store we have not built.
// 4. Every card is OFFER language ("we build", "we tune"), never a record ("our Woo stores").
const caps = [
  { icon: <IconLayers className="h-5 w-5" />, t: "Custom store on WooCommerce core", d: "A store built on standard, open-source WooCommerce and WordPress rather than a locked page-builder theme. You own the code, the database and the store, and any competent WooCommerce developer can pick it up without us in the room." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "HPOS order infrastructure", d: "We build on High-Performance Order Storage - WooCommerce's dedicated, indexed order tables - so order search, admin and reporting stay fast well past the point where the old shared post tables start to drag." },
  { icon: <IconCreditCard className="h-5 w-5" />, t: "Block Cart & Checkout, done right", d: "The block-based Cart and Checkout that now ships as the default, extended through the Store API and the Additional Checkout Fields API rather than the old checkout hooks - with an honest fallback to the classic checkout when a store-critical extension isn't block-compatible yet." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Custom block theme on Full Site Editing", d: "A lean custom block theme with the Product Collection block and Interactivity-API-driven filters - not a heavy multipurpose commerce theme carrying features you'll never use and JavaScript you'll never remove." },
  { icon: <IconLock className="h-5 w-5" />, t: "Payments wired scope-aware", d: "WooPayments, Stripe or PayPal, with the checkout-form decision made deliberately: card fields hosted by your gateway keep card data off your server and your compliance scope small, while inline fields on your own page widen it. We tell you which trade you are choosing before you choose it." },
  { icon: <IconClock className="h-5 w-5" />, t: "Subscriptions, bookings and memberships", d: "Recurring revenue, appointments and gated content built on vetted extensions with the right data model - and a short, audited list, because every paid extension is an annual licence, a performance cost and one more thing an author can abandon." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Performance engineering for dynamic stores", d: "Cart, checkout and account pages are per-visitor, so they can't be page-cached - which is why object caching matters far more on a store than on a blog. We tune what actually moves the needle: caching, a lean plugin footprint, controlled autoload, and sessions kept out of the options table." },
  { icon: <IconCpu className="h-5 w-5" />, t: "Background jobs on Action Scheduler", d: "Renewals, emails, webhooks and syncs run through Action Scheduler, moved off traffic-triggered WP-Cron onto a real server cron - so scheduled work actually fires on time as order volume grows instead of quietly falling behind." },
  { icon: <IconSearch className="h-5 w-5" />, t: "SEO with real URL control", d: "The permalink control WordPress gives you and hosted platforms don't, with WooCommerce's real trap handled: category, tag and filter combinations spawn near-duplicate URLs fast, so we design the information architecture, canonicals and crawl rules rather than discover them later." },
  { icon: <IconCode className="h-5 w-5" />, t: "Headless only when it's warranted", d: "A Next.js front end over WPGraphQL and the Store API when there is a concrete reason. We are honest that WooCommerce was never designed API-first, so headless means rebuilding cart, checkout and session and losing your extensions' front ends - so we default to a well-built monolith." },
  { icon: <IconPlane className="h-5 w-5" />, t: "International, multi-currency and B2B", d: "Multiple languages, multiple currencies, and wholesale or customer-group pricing with vetted extensions. Flexibility is what WooCommerce is genuinely good at here, and plugin-stacking risk is what we manage rather than ignore." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Migrations and replatforming", d: "Moving a store onto WooCommerce from Shopify, Magento or another platform: products, customers and orders imported, and - because the URL structures differ - every old URL 301-mapped before launch so hard-won rankings survive the move." },
];

export function WooCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we build WooCommerce"
            title="WooCommerce the 2026 way, not the 2015 way"
            sub="There's no WooCommerce running this static Next.js site to point at, so the proof is the depth. This is current WooCommerce - HPOS, the block Cart and Checkout on the Store API, a lean block theme, disciplined caching and a short extension list - not the multipurpose-theme-and-a-dozen-plugins build that earns WooCommerce its slow, fragile reputation."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caps.map((c) => (
            <div key={c.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {c.icon}
              </span>
              <h3 className="mt-4 font-display text-sm font-semibold text-foreground">{c.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </Reveal>

        {/* The senior-opinion default-build line. Stated as an APPROACH ("here is how we would
            build yours"), never as a record ("here is what we have built"). */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Our default WooCommerce build:</span>{" "}
              standard WordPress and WooCommerce core on quality managed hosting, with HPOS on and the
              block-based Cart and Checkout as the default - falling back to the classic checkout only
              when a store-critical extension isn&apos;t block-ready, and saying so when that&apos;s the
              case. A lean custom block theme on Full Site Editing, not a heavy multipurpose theme
              stuffed with plugins, because that is precisely how WooCommerce stores earn their slow,
              bloated reputation. A deliberately short, audited extension list, preferring
              well-maintained extensions that declare HPOS and block compatibility, because every paid
              extension is an annual licence and a maintenance liability. Payments through WooPayments
              or Stripe with the compliance-scope decision made on purpose rather than by accident.
              Performance engineered where it counts - object caching, page caching for the pages that
              can be cached, lean autoload, Action Scheduler on a real server cron - and measured on
              your real store after launch, never handed to you as a score for a store we
              haven&apos;t built. Headless is the exception, not the default: WooCommerce was never
              designed API-first, so going headless means rebuilding cart, checkout and session and
              giving up your extensions&apos; front ends, and it is worth it only when a genuinely
              differentiated storefront or an existing React team justifies it. And because a
              self-hosted store is software you own and must keep patched - core, theme, extensions,
              PHP and its payment surface - we pair every build with a care plan. That ownership is
              WooCommerce&apos;s whole point, and its whole responsibility.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
