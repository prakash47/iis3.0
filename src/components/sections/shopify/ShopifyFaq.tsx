import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD - the AEO goldmine (Shopify vs WooCommerce
// vs custom, do-I-need-Plus, what-is-headless, cost, lock-in, ownership, checkout, speed).
// Every answer concedes the honest downside first, then differentiates on method, and routes
// intent to the right sibling page.
//
// GUARDRAILS ENFORCED:
// - Q3 restates the WordpressFaq lock verbatim in substance (product-first -> Shopify,
//   content-led with full control and ownership -> WooCommerce). Never contradict it.
// - Q10 answers with METHOD and an explicit refusal - never a Lighthouse or CWV number.
// - Q11 does NOT say "you own your store": Shopify hosts it. Data, domain and code are yours.
// - Q15 names only CURRENTLY REAL programs. The standalone "Shopify Plus Partner" program was
//   sunset in Dec 2024 and the Shopify Experts Marketplace was retired in Dec 2023, so
//   disclaiming either by name would falsely imply it still exists (the Django lesson).
// - Q16 leads with a plain "No" before any headless nuance, or it reads as a dodge.
// - No stat repeats: the single attributed BuiltWith line lives in ShopifyWhy, not here.
// - Costs are byte-identical to src/content/pricing.ts.
const faqs = [
  {
    question: "What is Shopify used for?",
    answer:
      "Shopify is a hosted commerce platform for selling products online. You get the catalog, cart, checkout, payments, inventory, shipping, tax and reporting as managed software you subscribe to, rather than infrastructure you build and secure yourself. It is the standard choice for product-first stores - direct-to-consumer brands, retail, and businesses that want to sell online without running commerce infrastructure. It is not a general website platform: for a content-led site with a shop attached, WooCommerce on WordPress fits better, and for a genuinely bespoke commerce model, custom software does.",
  },
  {
    question: "Is Shopify good for SEO?",
    answer:
      "Yes, with known constraints. Shopify is fast, clean and HTTPS by default, generates sitemaps, and lets you control page titles, meta descriptions, URL handles and robots.txt.liquid. The constraints are real though: Shopify forces the /products/, /collections/, /pages/ and /blogs/ path prefixes, so you cannot build arbitrary nested URLs, and theme links can quietly generate duplicate collection-scoped product URLs that need fixing. Its native blog is also basic compared with WordPress. Good technical work manages these rather than fights them - and if content marketing is the core of your growth plan, that is a genuine argument for a content-led setup.",
  },
  {
    question: "Shopify vs WooCommerce - which should I choose?",
    answer:
      "For a serious, product-first store, Shopify is usually the cleaner choice - checkout, payments, inventory and PCI compliance are handled for you. WooCommerce is the right call when the store is content-led - a blog or brand site with a shop attached - and you want full control and ownership, since it is a WordPress plugin on hosting you own. The trade is straightforward: Shopify rents you a solved checkout and charges you in subscriptions, apps and gateway fees; WooCommerce gives you ownership and charges you in maintenance. We build both, and WooCommerce has its own page.",
  },
  {
    question: "Shopify vs a custom ecommerce build - when do I actually need custom?",
    answer:
      "Less often than agencies suggest. A custom build wins when the commerce model is the product: complex B2B pricing hierarchies, a multi-vendor marketplace, deep ERP or logistics logic, or checkout rules that outgrow even Shopify Plus. It also wins when you need full data residency or control that a hosted platform cannot give you. For everything else, Shopify's solved checkout, payments and PCI are worth more than the flexibility you give up - and the custom path costs more to build and to keep running than most stores ever recover. We build custom commerce and we will still recommend Shopify when it fits, because recommending by fit is the point.",
  },
  {
    question: "Do I need Shopify Plus, or is standard Shopify enough?",
    answer:
      "Most stores do not need Plus. Plus is Shopify's enterprise plan, priced on a contract and materially more expensive than the standard plans. What it genuinely unlocks is deep checkout customisation through Checkout Extensibility and Shopify Functions, native B2B with company accounts, price lists and payment terms, higher API limits, more staff accounts and expansion stores. If bespoke checkout logic or real B2B wholesale is core to how you sell, Plus is what you are buying. If it is not, a standard plan plus a well-built theme does the job, and we will tell you so rather than sell you the upgrade.",
  },
  {
    question: "What is headless Shopify?",
    answer:
      "Headless Shopify means Shopify keeps the commerce back end - the catalog, the cart, the admin and the hosted checkout - while a separate front end renders the storefront, pulling data through the Storefront API and handling logins through the Customer Account API. Shopify's own first-party path is Hydrogen, its React framework, deployed on Oxygen, its edge hosting. A Next.js or React front end is the alternative when there is a concrete reason for it, such as sharing one framework across your marketing site and store. Either way, checkout stays Shopify's. Nobody rebuilds checkout.",
  },
  {
    question: "Is headless Shopify worth it?",
    answer:
      "Usually not, and we would rather say so before you spend the money. Headless costs more to build and more to run, it takes longer, and you give up things that come free with a theme: the native theme editor, many app front ends, and Shopify's first-party support path. It earns its keep when the storefront experience is genuinely a competitive differentiator, when traffic is high enough that front-end performance moves real revenue, or when you already have a front-end team living in React. For the large majority of stores, a well-built Online Store 2.0 theme is the better business decision - even though the headless rebuild would be worth more to us.",
  },
  {
    question: "How much does a Shopify store cost to build?",
    answer:
      "A Shopify store is priced by the same published fixed-price web tiers as the rest of our work. A store is the Commerce Sprint, from $7,000, and a smaller storefront with a tight catalog can land on the Growth Site, from $4,000. The lower tiers are not stores: the $300 Starter and $1,500 Launch Sprint are simple marketing and content sites, and the $12,000 MVP Sprint is a custom web-app build. You see the price before you commit - no quote wall. Separately, you pay Shopify for your plan and any app vendors for their apps, directly and at their price, with no markup from us, and ongoing care runs on published monthly plans starting at $100.",
  },
  {
    question: "Do you build custom Shopify themes, or just use pre-made ones?",
    answer:
      "We build custom Online Store 2.0 themes: JSON templates, sections everywhere, theme blocks, and content modelled in metafields and metaobjects, so your team gets on-brand drag-and-drop editing and you get markup we control and keep light. Where a stock theme genuinely fits a simple catalog and the budget is tight, we will configure one well rather than over-engineer, and say so. What we will not do is ship a heavy multipurpose theme stuffed with apps you do not need, because that is exactly how Shopify stores end up slow and expensive to run.",
  },
  {
    question: "Can you make a Shopify store fast?",
    answer:
      "We can do the work that makes it fast, and we will not hand you a score for a store that does not exist yet. On Shopify a developer controls less than most agencies admit: Shopify owns the server, the CDN, the JavaScript the platform injects on every page, and the entire hosted checkout. What we do control is the theme code, the images and fonts, and above all the app list - each installed app adds its own JavaScript to every page, and code left behind by apps you removed is a common silent tax. So we build a lean theme, audit the apps down to what earns its place, and measure real Core Web Vitals on your real pages after launch. Anyone promising you a specific speed score before the build is guessing.",
  },
  {
    question: "Do I own my Shopify store and my data?",
    answer:
      "Partly, and the honest answer matters here. Shopify is a hosted platform, so the checkout, the admin and the hosting are Shopify's - that is the trade you are buying. What you genuinely own is your data, which exports out, your domain, your brand and your content, and the theme code or front-end repository we write, which lives in your repository. We build under your Shopify account with you as the owner, and work as a staff account you can remove the day we finish. Nothing about your store is held hostage on our side. Anyone telling you that you fully own a hosted store is selling, not explaining.",
  },
  {
    question: "Can I migrate off Shopify later, or am I locked in?",
    answer:
      "You can leave, but it is real work, so plan for it rather than assume it. Your products, customers and orders export out, and your domain and content are portable. What does not port is the theme, which is Liquid and Shopify-specific, along with app-held data such as subscriptions or loyalty balances, and any checkout logic built on Shopify Functions. So budget for a rebuild of the storefront layer and a careful URL and redirect plan, not a copy and paste. If you do outgrow Shopify, we can migrate you to WooCommerce or a custom build - and we will tell you what is portable and what is not before you commit, not after.",
  },
  {
    question: "How do I migrate to Shopify from WooCommerce without losing my SEO?",
    answer:
      "With a redirect plan written before the migration starts, not after it breaks. Products, customers and orders import cleanly enough through CSV or the Admin API. The risk is the URLs: Shopify forces its own /products/ and /collections/ paths, so your old WooCommerce or Magento URL structure cannot be reproduced, and every page you rank for changes address. The work that protects your rankings is a comprehensive 301 map from every old URL to its new one, preserving titles, meta and internal links, then resubmitting the sitemap and watching the index. Sites that skip this lose rankings; sites that do it properly generally recover. This is the same discipline we apply to every replatform.",
  },
  {
    question: "Can you customize the Shopify checkout?",
    answer:
      "Within Shopify's rules, yes - and it is worth understanding what those rules are. Checkout customisation is now done with checkout UI extensions, the branding API and Shopify Functions, and the deeper controls are a Shopify Plus feature. Shopify is retiring the old methods - checkout.liquid and additional scripts - and Shopify Scripts stopped running in mid-2026, so anything built on those needs migrating to Functions. Even on Plus, checkout extensions run sandboxed: you extend Shopify's checkout at defined points, you never rebuild it and you never touch card data. That is exactly what keeps your PCI burden light, so it is a feature as much as a limit.",
  },
  {
    question: "Are you a Shopify Partner?",
    answer:
      "No, and we will not imply otherwise. Shopify runs a real, publicly checkable Partner Program with a Partner Directory, partner tiers and Verified Skills credentials earned through Shopify Academy. We hold no Shopify partner tier, nobody on the team holds a Verified Skills credential, and we are not listed in the Partner Directory. Those are real programs we are simply not in. What we bring instead is the current-standard Shopify depth on this page, published fixed prices, standard code and accounts you own outright, and a company that has been incorporated since 2016. If a directory-listed partner is a hard requirement for you, we will tell you plainly on the first call.",
  },
  {
    question: "Does this website run on Shopify?",
    answer:
      "No. This site is a static Next.js and React build, and there is no Shopify behind it - no products, no cart, no checkout, no admin. We will not pretend otherwise. The honest nuance is that a headless Shopify store is two halves, a storefront front end and Shopify's commerce back end, and the front-end half is the same craft this page is built with. The Shopify half is not running here, and that is the half you would be paying us for. So our Shopify proof is the depth on this page and the code and data you will own, not a badge or a borrowed case study.",
  },
];

export function ShopifyFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Shopify development, answered" />
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
