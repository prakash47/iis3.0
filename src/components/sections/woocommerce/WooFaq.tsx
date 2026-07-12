import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. Answers are PLAIN STRINGS with no anchors,
// exactly like ShopifyFaq and WordpressFaq - the same array feeds the schema, and links would
// leak into it. The four in-body care-plan links live in Scope, Why, Proof and Pricing.
//
// GUARDRAILS ENFORCED:
// - Q3 restates the locked position verbatim in substance (product-first -> Shopify; content-led
//   with full control and ownership -> WooCommerce), plus the locked trade line from ShopifyFaq.
// - Q7 answers with METHOD and an explicit refusal - never a Lighthouse or CWV number.
// - Q9 CAN claim strong ownership: self-hosted GPL means the merchant owns the store software, the
//   checkout, the code and the data. But never "you own the host" - hosting is rented and controlled.
// - Q15 names only the CURRENT program. "WooExpert" was renamed to "Woo Partner" in March 2025 and
//   the WooExperts Marketplace became the Woo agency directory, so that dead name must never appear.
//   Tier ladders are contested across sources, so no tier is named. And because NO official
//   WooCommerce developer certification exists, we use the Django move ("there is none to hold")
//   rather than "we hold no certification", which would imply one exists.
// - Q16 leads with a plain "No" before any nuance.
// - The Woo rebrand is acknowledged ONCE, in Q1, as an entity fact. No domain claim - WooCommerce
//   trialled woo.com and moved back to woocommerce.com, so any "now at woo.com" line is false.
// - No deprecation deadline for the classic shortcode checkout: WooCommerce has announced none.
// - Zero bare numbers. The single attributed market-share line lives in WooWhy, not here.
// - Costs are byte-identical to src/content/pricing.ts and to the locked Commerce Sprint anchor.
const faqs = [
  {
    question: "What is WooCommerce used for?",
    answer:
      "WooCommerce is the open-source commerce plugin that turns a WordPress site into an online store, now branded simply Woo by its owner Automattic. It adds products, variations, a cart, a checkout, payments, shipping, tax and order management to WordPress, and you host and run the whole thing yourself. It is the standard choice for content-led stores - a brand, editorial or membership site with a real shop attached - and for anyone who wants to own their store outright rather than rent a platform. For a serious, product-first store where you never want to run infrastructure, a hosted platform is usually the cleaner call.",
  },
  {
    question: "Is WooCommerce really free, and what does a store cost to run?",
    answer:
      "The plugin is free and open-source; the store is not. There is no platform subscription and no cut of your sales, which is WooCommerce's real financial advantage. But you pay directly for managed hosting and an SSL certificate, for your payment gateway's per-transaction fees, for the annual licences on any premium extensions such as subscriptions, bookings or memberships, and for the ongoing upkeep that keeps core, extensions and PHP patched. Anyone selling you WooCommerce as simply free is leaving the second bill off the quote. We name those costs before you buy, and you pay hosting and extension vendors at their own price with no markup from us.",
  },
  {
    question: "WooCommerce vs Shopify - which should I choose?",
    answer:
      "For a serious, product-first store, Shopify is usually the cleaner choice - checkout, payments, inventory and PCI compliance are handled for you. WooCommerce is the right call when the store is content-led - a blog or brand site with a shop attached - and you want full control and ownership, since it is a WordPress plugin on hosting you own. The trade is straightforward: Shopify rents you a solved checkout and charges you in subscriptions, apps and gateway fees; WooCommerce gives you ownership and charges you in maintenance. We build both, and Shopify has its own page. If you never want to touch updates, hosting or security, that is a vote for the hosted platform.",
  },
  {
    question: "WooCommerce vs a fully custom ecommerce build - when do I need custom?",
    answer:
      "Less often than agencies suggest. WooCommerce already gives you the catalog, cart, checkout, payments and order management, plus an enormous extension ecosystem, on software you own. A fully custom build wins when the commerce model itself is the product: complex B2B pricing hierarchies, a multi-vendor marketplace, deep ERP or logistics logic, or checkout rules that no plugin should be carrying. It also wins when the plugin stack needed to fake those rules has become the real risk. For everything else, custom costs more to build and much more to keep running than most stores ever recover, and we will say so.",
  },
  {
    question: "Is WooCommerce good for SEO?",
    answer:
      "Yes, and it has a genuine edge over hosted platforms: you control your permalink structure, with none of the fixed product and collection paths a hosted store forces on you, and the store lives inside WordPress, which is still the strongest content and blogging stack on the web. That matters because content-led commerce is exactly WooCommerce's lane. The real trap is duplication - product, category, tag and filter combinations spawn near-duplicate URLs fast - so canonicals, crawl rules and information architecture have to be designed rather than discovered after launch. Product schema, sitemaps and canonicals come from a well-configured SEO plugin on top of clean markup, not instead of it.",
  },
  {
    question: "Is WooCommerce secure?",
    answer:
      "It can be, and the responsibility is genuinely yours in a way it is not on a hosted platform - that is the price of owning the store. WooCommerce and WordPress core are almost never the weak point. Compromised stores are nearly always compromised through an out-of-date extension, a weak login, or a site nobody kept current. Secure WooCommerce is therefore a maintenance discipline rather than a one-time setting: a short, audited extension list, prompt patching, strong managed hosting, hardened logins, backups and monitoring. We also keep card data off your server by using your gateway's hosted fields, which keeps your compliance scope as small as it can be. Compliance itself is shared between you, your host and your gateway, and nobody can honestly hand you a blanket badge for it.",
  },
  {
    question: "Is WooCommerce slow, and can you make it fast?",
    answer:
      "Badly built WooCommerce is slow; well-built WooCommerce is fast, and the difference is engineering. Stores have a structural challenge a blog does not: cart, checkout and account pages are different for every visitor, so they cannot be page-cached, which is why object caching, hosting quality and a lean extension list matter far more here. Most slow stores are slow for the same three reasons: cheap shared hosting, a bloated multipurpose theme, and a pile of overlapping plugins. We build the opposite. What we will not do is show you a Lighthouse or Core Web Vitals score for a store that does not exist yet - performance is engineered from the first decision and measured on your real pages after launch.",
  },
  {
    question: "Can WooCommerce handle a serious store at scale?",
    answer:
      "Yes, when it is engineered for it. High-Performance Order Storage moves orders into dedicated, indexed tables so order search, admin and reporting keep up as volume grows. Beyond that, scaling WooCommerce is about the things that actually bottleneck: object caching, hosting sized for dynamic pages, a disciplined extension list, controlled autoloaded options, and background jobs running on a real server cron rather than traffic-triggered WP-Cron. The stores that fall over are almost always the ones running a heavy theme and thirty plugins on budget shared hosting. That is build quality and resourcing, not a ceiling in the platform.",
  },
  {
    question: "Do I own my WooCommerce store and my data?",
    answer:
      "Yes, and more completely than on any hosted platform. WooCommerce and WordPress are open-source under the GPL, so the store software, the theme, the custom code, the checkout and the database are all yours, running on hosting you control and a domain you own. There is no account anyone can suspend and no platform that can change your terms. We build under your hosting and your logins and hand over everything, so you can move to any other WordPress or WooCommerce developer without asking our permission. The honest caveat is that paid extensions are annual licences: you keep running the code you have, but updates and support need an active licence.",
  },
  {
    question: "Does a WooCommerce store need ongoing maintenance?",
    answer:
      "Yes, more than any other kind of site we build, and anyone telling you otherwise is leaving a cost off the quote. Because WooCommerce is self-hosted software you own, core, theme, extension and PHP updates, security patching, backups and monitoring are yours to keep on top of, and a store carries payment and customer data on top of everything a normal site carries. Skipping this is the single biggest reason WooCommerce stores end up slow, broken or breached. This is true whether we do the upkeep, your team does it in-house, or another developer does - your store is standard GPL WooCommerce, so the care is portable and never locked to us. We publish ours as monthly care plans starting at $100, plus a one-time Website Health Audit from $100.",
  },
  {
    question: "How much does a WooCommerce store cost to build?",
    answer:
      "A WooCommerce store is priced by the same published fixed-price web tiers as the rest of our work. A store is the Commerce Sprint, from $7,000, and a smaller store with a tight catalog can land on the Growth Site, from $4,000. The lower tiers are not stores: the $300 Starter and $1,500 Launch Sprint are simple marketing and content sites, and the $12,000 MVP Sprint is a custom web-app build. You see the price before you commit - no quote wall. Separately, you pay for hosting and any premium extensions directly, at the vendor's price, and ongoing care runs on published monthly plans starting at $100.",
  },
  {
    question: "What is headless WooCommerce, and is it worth it?",
    answer:
      "Headless WooCommerce means keeping WordPress and WooCommerce as the back end while a separate front end, typically Next.js or React, renders the store by pulling data through WPGraphQL or the Store API. Usually it is not worth it, and we would rather say so before you spend the money. WooCommerce was never designed API-first, so going headless means rebuilding the cart, the checkout and session handling yourself, and the front ends of every extension you paid for simply stop rendering. It earns its keep only when a genuinely differentiated storefront is the competitive advantage, or you already have a React team. For most stores a well-built block theme is the better business decision, even though the headless build is worth more to us.",
  },
  {
    question: "Do you build custom WooCommerce themes and extensions?",
    answer:
      "Yes to both. For most stores we build a lean custom block theme on Full Site Editing with the Product Collection block, so the store is fast, on-brand and free of page-builder bloat, and we write bespoke extensions for the workflows no off-the-shelf plugin covers - built the documented way with WooCommerce hooks, filters and the REST API so they survive updates. What we will not do is ship a heavy multipurpose theme stacked with a dozen plugins you do not need, because that is exactly how WooCommerce stores end up slow, fragile and expensive to maintain.",
  },
  {
    question: "Can you migrate my store to WooCommerce without losing my SEO?",
    answer:
      "With a redirect plan written before the migration starts, not after something breaks. Products, customers and orders import cleanly enough from Shopify, Magento or most other platforms; reviews and data held inside a platform's own apps often do not, and passwords never transfer. The risk is the URLs: your old platform's structure will not be your new one, so every page you rank for changes address. The work that protects your rankings is a comprehensive 301 map from every old URL to its new one, preserving titles, meta and internal links, then resubmitting the sitemap and watching the index. Sites that skip this lose rankings; sites that do it properly generally recover.",
  },
  {
    question: "Are you a Woo Partner?",
    answer:
      "No, and we will not imply otherwise. Automattic, which owns WooCommerce, runs a real, publicly checkable agency program - the Woo Partner badge and the Woo agency directory, now part of Automattic for Agencies. We are not a Woo Partner and we are not listed in that directory. There is also no official WooCommerce developer certification in existence, so nobody selling you WooCommerce holds one, and we will not dress the absence of one up as a credential. What we bring instead is the current-standard WooCommerce depth on this page, published fixed prices, standard code and a store you own outright, and a company that has been incorporated since 2016.",
  },
  {
    question: "Does this website run on WooCommerce?",
    answer:
      "No. WooCommerce is a WordPress plugin written in PHP, and this site is a static Next.js and React build whose toolchain runs on Node - so WooCommerce powers none of what you are reading, and this is not a headless WooCommerce front end either. We will not pretend otherwise. Our WooCommerce proof is the depth on this page and the standard, self-hosted store, code and database you will own outright, not a badge or a borrowed case study. Our production store work is a custom, full-stack Next.js build on its own back end - the same problem shape, and the same ownership, on a different stack.",
  },
];

export function WooFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="WooCommerce development, answered" />
        </Reveal>
        <Reveal className="mt-9">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-foreground">
                  {f.question}
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-brand-500 transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
