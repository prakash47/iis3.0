import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLayout, IconGrid, IconCreditCard, IconCpu, IconCode, IconServer, IconLayers, IconGauge, IconShield, IconSearch, IconRefresh, IconPlane } from "@/components/icons";

// The E-E-A-T CENTREPIECE and the whole proof substitute - there is no own-site Shopify to
// inspect. Current 2026 vocabulary throughout: Online Store 2.0 + theme blocks, metaobjects,
// Checkout Extensibility, Shopify Functions (Scripts stopped executing 30 June 2026), the
// Storefront and GraphQL Admin APIs (REST is legacy), Hydrogen on Oxygen.
//
// THREE HARD RULES ENFORCED HERE:
// 1. Card 8/9 state performance as METHOD ONLY - never a Lighthouse or CWV score, and never a
//    KB or seconds figure. On Shopify we control less than on WordPress (Shopify owns the
//    server, CDN, injected platform JS and the entire hosted checkout).
// 2. checkout.liquid is PRESENT-PROGRESSIVE ("is retiring"): Plus stores were sunset in 2025,
//    but non-Plus stores are not sunset until 26 Aug 2026. "Already retired for everyone" is false.
// 3. Every card is OFFER language ("we build", "we wire"), never a record ("the stores we've built").
const caps = [
  { icon: <IconLayout className="h-5 w-5" />, t: "Custom Online Store 2.0 themes", d: "A lean custom theme on JSON templates, sections everywhere and theme blocks - not a bought multipurpose theme carrying features you'll never use. Merchants get on-brand, drag-and-drop editing; you get markup we control and keep light." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Structured content with metaobjects", d: "Real stores are typed content - buying guides, size charts, ingredients, store locations - modelled as metafields and metaobjects and surfaced through dynamic sources, so the same data renders consistently everywhere and stays easy to edit." },
  { icon: <IconCreditCard className="h-5 w-5" />, t: "Checkout Extensibility", d: "Checkout UI extensions and the branding API on Shopify's hosted checkout - the supported path as Shopify retires checkout.liquid and additional scripts. We extend checkout where Shopify allows it, and we're honest that the checkout itself stays Shopify's." },
  { icon: <IconCpu className="h-5 w-5" />, t: "Shopify Functions", d: "Custom discounts, bundles, and delivery and payment customisation as WebAssembly Functions running inside Shopify's own infrastructure. This is what replaced Shopify Scripts, which stopped executing in mid-2026 - server-side commerce logic, done the supported way." },
  { icon: <IconCode className="h-5 w-5" />, t: "Headless storefronts", d: "A custom front end served off the Storefront API, with the Customer Account API for logins. Hydrogen on Oxygen is Shopify's own first-party path and the sensible default; a Next.js front end is the right call when there's a concrete reason, not by habit." },
  { icon: <IconServer className="h-5 w-5" />, t: "GraphQL Admin API integrations", d: "Catalog, orders, customers and fulfilment wired through the date-versioned GraphQL Admin API - REST is a legacy API now - with cost-aware queries and webhooks, so Shopify talks cleanly to your ERP, PIM, CRM or 3PL." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Custom apps & extensions", d: "Embedded admin apps built with App Bridge and Polaris, theme app blocks, and admin, checkout and POS extensions, shipped with the Shopify CLI - to add exactly the capability an off-the-shelf app can't, instead of renting three that nearly do." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Performance we can actually control", d: "A lean theme, disciplined images and fonts, and a short app list - the real levers on a platform where Shopify owns the server, the CDN, the platform JavaScript and the checkout. We do that work honestly and never hand you a Core Web Vitals score for a store we haven't built." },
  { icon: <IconShield className="h-5 w-5" />, t: "App footprint & bloat control", d: "Every app you install adds its own JavaScript to every page, and code left behind by apps you uninstalled is a common silent tax. We audit what's loading, remove the dead weight, and choose fewer, better apps - on Shopify the app list is the biggest lever on both speed and monthly cost." },
  { icon: <IconSearch className="h-5 w-5" />, t: "SEO that respects Shopify's rules", d: "We design around Shopify's fixed /products/ and /collections/ paths, kill the duplicate collection-URL trap that theme links quietly create, tune robots.txt.liquid and product structured data, and handle hreflang - so the store ranks despite the platform's known constraints." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Migrations with SEO intact", d: "Moving a store from WooCommerce, Magento or another platform: products, customers and orders imported, and - because Shopify's URL structure is not your old one - every old URL 301-mapped to its new path, so rankings survive the replatform instead of falling off a cliff." },
  { icon: <IconPlane className="h-5 w-5" />, t: "International, B2B & POS", d: "Shopify Markets for selling into other countries with their own currencies, languages and duties; native B2B with company accounts, price lists and payment terms on Plus; and POS for in-person retail - one back office as you grow into each." },
];

export function ShopifyCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we build Shopify"
            title="Shopify the 2026 way, not the 2018 way"
            sub="There's no Shopify running this static Next.js site to point at, so the proof is the depth. This is current Shopify - Online Store 2.0 and theme blocks, metaobjects, Checkout Extensibility and Functions, the Storefront and GraphQL Admin APIs - not the premium-theme-and-a-dozen-apps build that gives Shopify stores their slow reputation."
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

        {/* The senior-opinion default-build line. Note it deliberately argues AGAINST our own
            most billable option (the headless Next.js rebuild) - see ShopifyProof. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Our default Shopify build:</span>{" "}
              a lean custom Online Store 2.0 theme - JSON templates, sections, theme blocks - with
              content modelled properly in metaobjects rather than stuffed into page-builder sections.
              A deliberately short, vetted app list, because on Shopify the app footprint is the
              biggest lever on both speed and monthly cost. Checkout stays Shopify&apos;s hosted
              checkout, and that&apos;s a feature rather than a compromise: it carries payments, PCI
              and reliability so nobody rebuilds it. We extend it with checkout UI extensions and
              Shopify Functions instead of the retired Scripts. Integrations go through the
              date-versioned GraphQL Admin API, with REST treated as legacy. We engineer performance
              the honest way - a fast theme, disciplined apps, optimized media - and we&apos;re upfront
              that Shopify owns the server, the CDN and the checkout, so we tune what we control and
              never promise a score. Headless is the exception, not the default: it earns its keep when
              the storefront experience is genuinely the differentiator, and Hydrogen on Oxygen is
              Shopify&apos;s own first-party path before ours is.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
