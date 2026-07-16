import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLayout, IconTag, IconCreditCard, IconLayers, IconCode, IconRefresh, IconArrow } from "@/components/icons";

// Shopify's lane - product-first, hosted stores - stated in the exact vocabulary the
// WordPress page already published ("Shopify is usually the cleaner choice for a serious,
// product-first store; checkout, payments, inventory and PCI are handled for you").
// Every card is OFFER language ("we build"), never a track record ("the stores we've built").
// The routing callout concedes content-led stores to WooCommerce, bespoke commerce models to
// custom software, and no-store-at-all to Next.js - the anti-cannibalization spine.
const uses = [
  { icon: <IconTag className="h-5 w-5" />, t: "Store builds & launches", d: "A product-first store taken from an empty admin to launch: catalog and collection structure, product pages, cart, payments, shipping and tax setup, and the reporting your team runs the business on." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Custom Online Store 2.0 themes", d: "A bespoke design as a lean custom theme on JSON templates, sections and theme blocks - on-brand and fast, not a bought multipurpose theme carrying features you'll never use." },
  { icon: <IconCreditCard className="h-5 w-5" />, t: "Checkout, cart & discount logic", d: "Custom discounts, bundles, delivery and payment rules built as Shopify Functions, plus checkout UI extensions where Shopify allows them - the supported path now that Scripts have been retired." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Custom apps & integrations", d: "Private apps and extensions for workflows an off-the-shelf app can't do, and clean integrations with your ERP, PIM, CRM or 3PL over the GraphQL Admin API and webhooks." },
  { icon: <IconCode className="h-5 w-5" />, t: "Headless storefronts", d: "When the storefront experience is genuinely the differentiator, we serve a custom front end off the Storefront API - Hydrogen on Oxygen when Shopify-native fits, a Next.js front end when your stack does." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Migrations & replatforming", d: "Moving a store onto Shopify from WooCommerce, Magento or another platform - products, customers and orders imported, and every old URL 301-mapped so hard-won rankings survive the move." },
];

export function ShopifyScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build on Shopify"
            title="The product-first stores Shopify exists for"
            sub="Shopify is the hosted commerce platform for stores that lead with product: checkout, payments, inventory and PCI are handled for you, so the work goes into the storefront, the catalog and the operations behind it. A typical Shopify engagement is one of these:"
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {uses.map((u) => (
            <div key={u.t} className="card flex items-start gap-4 p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {u.icon}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{u.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{u.d}</p>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Boundary routing - concede content-led stores, bespoke commerce and non-stores to the
            right siblings. Anchors are deliberately worded differently from the inbound anchors
            on WordpressScope ("Shopify ... for a fully hosted store with nothing to maintain")
            and WebDevStack ("Headless or custom storefronts that convert"). */}
        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Where Shopify ends, and where we&apos;ll send you
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Shopify is a commerce platform, not the answer to everything. When your project is
                really one of these, we&apos;ll point you to the right place rather than force it onto
                Shopify:
              </p>

              <ul className="mt-6 grid gap-3">
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      The store is content-led
                    </span>
                    {" - "}
                    a blog or brand site with a shop attached, where you want full control and
                    ownership, is a job for{" "}
                    <Link href="/technologies/woocommerce" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      a content-led store on WooCommerce
                    </Link>{" "}
                    running on{" "}
                    <Link href="/technologies/wordpress" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      WordPress
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      Your commerce model is genuinely bespoke
                    </span>
                    {" - "}
                    complex B2B pricing, a multi-vendor marketplace, deep ERP logic or checkout rules
                    that outgrow even Shopify Plus - that&apos;s{" "}
                    <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      a fully custom commerce build you own outright
                    </Link>
                    , often on{" "}
                    <Link href="/technologies/laravel" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      Laravel
                    </Link>{" "}
                    or{" "}
                    <Link href="/technologies/django" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      Django
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      You don&apos;t actually need a store
                    </span>
                    {" - "}
                    a marketing site with a buy button or two doesn&apos;t justify paying for Shopify.
                    A leaner{" "}
                    <Link href="/technologies/nextjs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      custom Next.js build
                    </Link>{" "}
                    or a{" "}
                    <Link href="/services/web-design-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      standard website build
                    </Link>{" "}
                    will do the job for less.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
