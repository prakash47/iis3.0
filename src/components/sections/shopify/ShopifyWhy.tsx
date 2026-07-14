import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLock, IconClock, IconLayers, IconPlane, IconTrendingUp, IconBolt } from "@/components/icons";

// Fit-framed benefits + the "is Shopify too limited for a serious brand?" myth-buster
// (concede-then-differentiate) + the "when NOT to use Shopify" cross-link engine.
// Market share is stated ONCE, attributed and conservatively ("roughly a quarter of the top
// one million ecommerce sites, per BuiltWith") - the house style set by WordPress's "over 40%
// per W3Techs". Every other number on this page is qualitative. Pillar 6 states performance as
// METHOD, never a score: on Shopify we control even less than on WordPress (Shopify owns the
// server, the CDN, the injected platform JS and the entire hosted checkout), so promising a
// Core Web Vitals figure would be doubly dishonest.
const pillars = [
  { icon: <IconLock className="h-5 w-5" />, t: "Checkout, payments and PCI are solved", d: "The hardest, most expensive, most security-critical part of a store already works, and keeps working. Shopify carries the cardholder-data environment and the checkout so nobody has to rebuild it, and your budget goes to the storefront instead." },
  { icon: <IconClock className="h-5 w-5" />, t: "Live in weeks, not quarters", d: "There's no infrastructure to stand up, no payment gateway to certify, no server to harden. A well-scoped store goes from catalog model to launch in weeks, which is the single biggest reason most merchants should not be building custom." },
  { icon: <IconLayers className="h-5 w-5" />, t: "The largest commerce ecosystem", d: "Apps and integrations for reviews, loyalty, subscriptions, shipping and almost anything else, so you reach a capable store fast. The trick is choosing few, well-maintained ones, because every app is a monthly bill and a page-weight cost." },
  { icon: <IconPlane className="h-5 w-5" />, t: "It grows with you", d: "Shopify Markets for selling into other countries with their own currencies and languages, native B2B and wholesale on Plus, and POS for in-person retail - one back office from your first order to multi-market and the shop floor." },
  { icon: <IconTrendingUp className="h-5 w-5" />, t: "A huge, hireable talent pool", d: "Shopify runs roughly a quarter of the top one million ecommerce sites (BuiltWith), so there is always someone who can maintain what we build. You are never dependent on one agency, and that is exactly how it should be." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Fast, when the app list is short", d: "The levers a developer actually controls on Shopify are a lean theme, disciplined images and fonts, and above all a short, vetted app list - because each app injects its own JavaScript into every page. We do that work and measure it on your real store, not on a slide." },
];

export function ShopifyWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        {/* The myth-buster. Concedes the genuine limitation (you do not fully control checkout
            on standard plans) BEFORE differentiating - which is what makes the other two answers
            credible. Fold Plus and SEO in here rather than spending three glow cards. */}
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Is Shopify too limited for a serious brand?{" "}
                <span className="gradient-text">The honest answer has three parts.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Templated:</span> no. Shopify runs
                plenty of serious brands, and a custom Online Store 2.0 theme with sections, theme
                blocks and metaobjects goes far past a stock theme - and when a store genuinely
                outgrows the theme layer, a headless front end on the Storefront API removes the
                front-end ceiling entirely.{" "}
                <span className="font-semibold text-foreground">Checkout control:</span> here is the
                real limitation, stated plainly. On standard plans you do not fully control the
                checkout, and deep checkout customisation is a Shopify Plus feature, delivered through
                Checkout Extensibility and Shopify Functions. Even on Plus, checkout extensions run
                sandboxed - you extend Shopify&apos;s checkout, you never rebuild it. If bespoke
                checkout logic is core to your business, that is a genuine constraint you should know
                before you choose, not after.{" "}
                <span className="font-semibold text-foreground">SEO:</span> Shopify is not bad for SEO
                - it is fast, clean and HTTPS by default - though it does force URL patterns you
                don&apos;t control, which good technical work manages rather than fights. The
                through-line: Shopify&apos;s real limits are specific and knowable. We&apos;ll tell you
                exactly where they are, and whether you actually need Plus to get past them, because
                most stores don&apos;t.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why Shopify"
            title="Why serious stores are built on Shopify"
            sub="Shopify is the platform we reach for when the business leads with product and nobody wants to run commerce infrastructure. Here's what it buys you - and, honestly, when it's the wrong tool."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {p.icon}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{p.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </Reveal>

        {/* The anti-recommendation - the cross-link engine. Consistent with the position
            WordpressFaq already published: product-first store -> Shopify, content-led store ->
            WooCommerce with full control and ownership. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to use Shopify
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              Shopify is the right tool for a lot of stores and the wrong one for some, and we&apos;d
              rather say so up front. When the store is content-led - a blog or brand site with a shop
              attached, where you want full control and ownership -{" "}
              <Link href="/technologies/woocommerce" className="font-medium text-brand-500 hover:text-brand-600">
                a content-led store on WooCommerce
              </Link>{" "}
              is usually the better fit. When your commerce model is genuinely bespoke - complex B2B
              pricing, a marketplace, deep ERP integration, or checkout logic that outgrows even Plus -
              that&apos;s{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                custom software
              </Link>
              . When you don&apos;t need a store at all, a{" "}
              <Link href="/technologies/nextjs" className="font-medium text-brand-500 hover:text-brand-600">
                custom Next.js build
              </Link>{" "}
              is the leaner call. And when the store itself is fine but the storefront needs to be
              faster or more custom than a theme allows, the answer isn&apos;t leaving Shopify - it&apos;s
              a headless front end on top of it. Whichever you choose, a live store needs ongoing app,
              theme and content work, so we pair it with{" "}
              <Link href="/services/website-maintenance-services" className="font-medium text-brand-500 hover:text-brand-600">
                care plans
              </Link>
              . Recommending the right platform, even when it isn&apos;t Shopify, is the whole point.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
