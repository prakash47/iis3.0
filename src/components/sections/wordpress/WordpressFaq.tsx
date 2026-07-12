import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD - the AEO goldmine (is-WordPress-relevant/
// slow/insecure, WP vs Webflow/Wix/Squarespace/custom/Next.js/Shopify, headless, own it, cost,
// maintenance). Every answer concedes the honest downside then differentiates on method, is
// 2026-correct (block themes/FSE, headless via REST/WPGraphQL, PHP 8.x), and routes intent.
// CONSISTENCY LOCK: never claims WP is faster than a custom Next.js build; market share stated
// as "over 40%" (W3Techs, honestly softened from the ~43% peak); NO fabricated CWV. Cost
// byte-identical to the published web tiers + care plans.
const faqs = [
  {
    question: "What is WordPress used for?",
    answer:
      "WordPress is the world's most widely used content management system (CMS), powering over 40% of all websites (W3Techs, 2026). It is the standard choice for content-driven sites a team edits itself - marketing and brochure sites, blogs, corporate and news sites, membership and community sites - through a familiar admin with a huge ecosystem of themes and plugins. With WooCommerce it also runs online stores. It is a website and content platform, not a framework for bespoke custom software, which is Laravel, Django or a custom Next.js build.",
  },
  {
    question: "Is WordPress still relevant in 2026?",
    answer:
      "Yes, overwhelmingly. WordPress runs over 40% of the web - roughly two in five sites - which makes 'is WordPress still relevant' the wrong question. It has slipped a little from its roughly 43% peak, but even the lowest honest count is larger than any other single way to build a website, and it has modernized: block themes and Full Site Editing are now standard, and it works well headless behind a Next.js front end. The real question is whether it's right for your project, and sometimes the honest answer is no.",
  },
  {
    question: "Is WordPress slow? How do you make it fast?",
    answer:
      "Badly-built WordPress is slow; well-built WordPress is fast, and the difference is engineering, not the platform. Most slow WordPress sites are slow for the same three reasons: cheap shared hosting, a heavy multipurpose theme, and a pile of overlapping plugins. We build the opposite - good managed hosting, real caching, a lean block theme, a short audited plugin list, and image and Core Web Vitals work. We won't show you a performance score for a site that doesn't exist yet, but we engineer for speed from the first decision and measure it on your real pages after launch.",
  },
  {
    question: "Is WordPress secure?",
    answer:
      "WordPress core is not the weak point - out-of-date plugins, weak passwords and neglected updates are. Security data for 2026 shows the large majority of WordPress vulnerabilities live in plugins, not core (Patchstack), and most hacked sites are simply ones nobody kept current. Secure WordPress is a maintenance discipline: few well-maintained plugins, prompt updates, strong hosting, backups and monitoring. That is exactly what our care plans cover, which is why WordPress and ongoing maintenance belong together.",
  },
  {
    question: "WordPress vs a custom website - which do I need?",
    answer:
      "Different jobs. WordPress is the fastest, lowest-cost path when your team needs to edit a content, blog or brochure site itself through a familiar admin with themes and plugins. A custom build - Next.js, Laravel or Django - wins when you need bespoke product features, app-like interactivity, unusual data models or top-tier performance; a custom Next.js build is the fast path, and it's the one we chose for our own site. And you don't always have to pick a side: headless WordPress gives you the WordPress admin for editors and a Next.js front end for speed. We build both and recommend honestly.",
  },
  {
    question: "WordPress vs Webflow?",
    answer:
      "Both build content and marketing sites without a large custom engineering effort. Webflow is a hosted visual builder with clean output but a closed platform and per-seat pricing; WordPress is open-source, self-hosted, endlessly extensible via plugins, and yours to own and move. Choose WordPress when you want full ownership, a huge plugin ecosystem and no platform lock-in; choose Webflow when a designer wants a hosted visual canvas and you're happy inside its ecosystem. If raw speed and custom interactivity matter most, a custom Next.js build beats both.",
  },
  {
    question: "WordPress vs Wix or Squarespace?",
    answer:
      "Wix and Squarespace are all-in-one hosted builders that are quick and easy for a very simple site, but you're limited to their features and can't leave the platform. WordPress is open-source and self-hosted, so it scales much further - large content archives, custom functionality, WooCommerce - and you own the site and can host it anywhere. For a tiny brochure site with no growth plans a hosted builder can be enough; for anything you expect to grow or customize, WordPress is the more flexible long-term choice.",
  },
  {
    question: "WordPress vs Shopify for an online store?",
    answer:
      "For a serious, product-first store, Shopify is usually the cleaner choice - checkout, payments, inventory and PCI compliance are handled for you. WordPress sells online through WooCommerce, which is the right call when the store is content-led - a blog or brand site with a shop attached - and you want full control and ownership. We build both, and they have their own pages: see WooCommerce and Shopify. If you're deciding purely on ecommerce, start there, not on this page.",
  },
  {
    question: "What is headless WordPress?",
    answer:
      "Headless WordPress uses WordPress purely as the content back end - your editors keep the admin they know - while a separate, faster front end, typically Next.js or React, renders the site by pulling content through the WordPress REST API or WPGraphQL. You get the WordPress editing experience with the speed, security and modern architecture of a custom front end. It's more involved than a traditional WordPress build, so it earns its keep when editor-friendliness and top-tier performance both matter. This is where our WordPress and Next.js work meet.",
  },
  {
    question: "Do I own my WordPress site?",
    answer:
      "Yes. WordPress is open-source (GPL) software, so with a self-hosted WordPress.org site you fully own the site, your content and your data, and you can host it wherever you like - no platform lock-in. We build on your own hosting and hand over full access, so you're never dependent on us to keep the site running. That differs from WordPress.com's hosted plans and from closed builders like Wix or Squarespace, where you rent the platform.",
  },
  {
    question: "How much does a WordPress website cost?",
    answer:
      "It depends on scope, but our WordPress sites use the same published fixed-price web tiers as the rest of our work: a simple brochure or content site starts at $300 (Starter), a small business site around $1,500 (Launch Sprint), a larger multi-section marketing site around $4,000 (Growth Site) and a WooCommerce store around $7,000 (Commerce Sprint). You see the price before you commit - no quote wall. Ongoing care is separate, on published monthly plans starting at $100.",
  },
  {
    question: "Does WordPress need maintenance?",
    answer:
      "Yes, more than most platforms. Because WordPress relies on regularly updated core, themes and plugins, it needs ongoing updates, security patching, backups and monitoring - and skipping this is the single biggest cause of hacked WordPress sites. We offer published monthly care plans starting at $100, plus a one-time Website Health Audit from $100, for exactly this reason. If you plan to run WordPress, budget for care from day one.",
  },
  {
    question: "Do you build custom themes or use page builders?",
    answer:
      "Both, chosen for fit. For most sites we build a lean custom block theme on Full Site Editing so the site is fast, on-brand and free of page-builder bloat. Where a client's team is already comfortable with a page builder and the site is straightforward, we'll use it well - Bricks for cleaner markup over Elementor's heavier output - rather than over-engineer. What we won't do is ship a heavy premium theme stuffed with plugins you don't need, because that is how WordPress sites end up slow.",
  },
  {
    question: "Does this website run on WordPress?",
    answer:
      "No - and we won't pretend it does. This site is a static Next.js and React build, and the toolchain that compiles it runs on Node, not PHP, so WordPress powers none of what you're reading. We chose Next.js for our own site on purpose, because it's a site we fully control and we wanted the fast custom path - and we'll still recommend WordPress the moment it's the right call for you. Recommending by fit, not by habit, is the point.",
  },
  {
    question: "Can you rescue or speed up my existing WordPress site?",
    answer:
      "Yes. We audit an existing WordPress site's performance, security and plugin load, then fix what's slow or risky - hosting and caching, image and Core Web Vitals work, removing bloated plugins and hardening security. If WordPress no longer fits and you'd be better on a custom Next.js build, we'll say so and can migrate you with your URLs and SEO preserved. Ongoing, we keep the site healthy on a care plan.",
  },
];

export function WordpressFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="WordPress development, answered" />
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
