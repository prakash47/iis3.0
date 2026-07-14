import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLock, IconTag, IconPen, IconLayers, IconSearch, IconGrid } from "@/components/icons";

// Fit-framed benefits + the COMMERCE-specific myth-buster + the "when NOT to use WooCommerce"
// cross-link engine (in-body care-plan link #2).
//
// The myth-buster is deliberately NOT "is WordPress slow / insecure" - WordpressWhy already owns
// that, and re-running it would split the same query across two of our own pages. Woo's unique
// misconceptions are "it's free", "it can't scale", and the self-hosted PCI question.
//
// STATS DISCIPLINE: exactly ONE attributed market-share line on this page, in pillar 4, stated
// qualitatively - trackers put WooCommerce anywhere from 8% to 49% depending on what they measure,
// so a bare percentage is a credibility landmine. The "most widely used ecommerce platform" claim
// is robustly true across all of them. A single qualitative Patchstack clause sits in the
// myth-buster; those two attributed clauses are the ceiling for the whole page.
const pillars = [
  { icon: <IconLock className="h-5 w-5" />, t: "You own the whole store", d: "Not the data and the domain - the whole thing. WooCommerce and WordPress are open-source under the GPL, so the store software, the theme, the checkout and the database are yours, on hosting you control, under no account anyone can suspend. This is the one thing a hosted platform structurally cannot give you." },
  { icon: <IconTag className="h-5 w-5" />, t: "No platform rent, and no gatekeeper", d: "There's no monthly platform subscription and no cut of your sales for using the checkout you'd rather use. You choose the gateway, the host and the extensions, and nobody can change the terms of your store from the outside or decide a product category is no longer welcome." },
  { icon: <IconPen className="h-5 w-5" />, t: "Content and commerce in one place", d: "Your store sits inside WordPress, which is still the best content stack on the web. Buying guides, editorial, comparison content and a real blog live alongside the products rather than bolted on - which is exactly why content-led brands pick WooCommerce." },
  { icon: <IconLayers className="h-5 w-5" />, t: "The largest ecosystem and talent pool", d: "WooCommerce is the most widely used ecommerce platform on the web (W3Techs), so there is an extension for almost anything and always someone who can maintain what we build. You are never dependent on one agency, and that is exactly how it should be." },
  { icon: <IconSearch className="h-5 w-5" />, t: "Real URL and SEO control", d: "You control your permalink structure, with none of the fixed product and collection paths a hosted platform imposes. That freedom comes with a trap - filter and category URLs multiply fast - which is a thing we design around rather than discover after launch." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Flexible where hosted platforms are capped", d: "Any currency, any gateway, unlimited product options, wholesale pricing, gated content, custom checkout logic in your own code. The ceiling is your engineering budget rather than a plan tier - which is a genuine advantage, and a genuine responsibility." },
];

export function WooWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        {/* The myth-buster. Each strand concedes the true part first. Note there is no
            deprecation-deadline claim and no bare statistic anywhere in here. */}
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Is WooCommerce really free, and can it run a serious store?{" "}
                <span className="gradient-text">Three honest answers.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Free:</span> the plugin is, the store
                isn&apos;t - and pretending otherwise is how WooCommerce projects blow their budget.
                You pay for hosting, for any premium extensions and their yearly renewals, for your
                payment gateway&apos;s per-transaction fee, and for the upkeep that keeps it all
                current. WooCommerce&apos;s real advantage was never &quot;free&quot;; it&apos;s
                ownership and no platform rent, so we quote the whole cost, including the ongoing
                part, up front.{" "}
                <span className="font-semibold text-foreground">At scale:</span> yes, but only when
                it&apos;s engineered for it - High-Performance Order Storage for the order tables,
                real object caching, a host built for dynamic commerce pages that can&apos;t be fully
                page-cached, and a disciplined extension list. Cheap shared hosting and a bloated
                multipurpose theme is what makes people believe WooCommerce can&apos;t scale; that is
                build quality, not the platform.{" "}
                <span className="font-semibold text-foreground">Secure and compliant:</span> because
                you self-host, more of the security burden is genuinely yours than on a hosted
                platform, and that is the honest price of owning it. The large majority of
                vulnerabilities in this ecosystem sit in plugins and themes rather than in core
                (Patchstack), so we keep the extension list short and audited, patch promptly, and
                keep card data off your server by using your gateway&apos;s hosted fields, which keeps
                your compliance scope as small as it can be. The through-line: WooCommerce is as
                cheap, as fast and as safe as it is resourced and maintained - and that difference is
                engineering, which is exactly what we sell.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why WooCommerce"
            title="Why brands build stores they own"
            sub="WooCommerce is the platform we reach for when ownership and content matter more than never touching infrastructure. Here's what it buys you - and, honestly, when it's the wrong tool."
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

        {/* The anti-recommendation - the cross-link engine, and care-plan link #2.
            The Shopify sentence and the trade line are restated from the positions already
            published in ShopifyFaq and WordpressFaq, so the three pages can never disagree. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to use WooCommerce
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              WooCommerce is the right tool for a lot of stores and the wrong one for some, and
              we&apos;d rather say so up front. For a serious, product-first store,{" "}
              <Link href="/technologies/shopify" className="font-medium text-brand-500 hover:text-brand-600">
                Shopify is usually the cleaner choice
              </Link>{" "}
              - checkout, payments, inventory and PCI compliance are handled for you, and you never
              run the infrastructure. That is the real trade: Shopify rents you a solved checkout and
              charges you in subscriptions, apps and gateway fees; WooCommerce gives you ownership and
              charges you in maintenance. If you never want to think about updates, hosting or
              security, that is a vote for a hosted store, not a self-hosted one. When your commerce
              model is genuinely bespoke - complex B2B pricing, a marketplace, deep ERP logic - that
              is{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                a ground-up custom commerce platform
              </Link>
              . And when you don&apos;t really need a store at all, a{" "}
              <Link href="/technologies/nextjs" className="font-medium text-brand-500 hover:text-brand-600">
                lean custom Next.js build
              </Link>{" "}
              does the job for less. WooCommerce&apos;s lane is the content-led store you want to own
              and grow, on{" "}
              <Link href="/technologies/wordpress" className="font-medium text-brand-500 hover:text-brand-600">
                the WordPress build underneath it
              </Link>{" "}
              - and because it&apos;s self-hosted, we pair it with{" "}
              <Link href="/services/website-maintenance-services" className="font-medium text-brand-500 hover:text-brand-600">
                monthly care plans
              </Link>{" "}
              from the day it launches. Recommending the right platform, even when it isn&apos;t
              WooCommerce, is the whole point.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
