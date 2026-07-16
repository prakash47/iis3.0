import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconTag, IconLayout, IconCreditCard, IconLayers, IconLock, IconRefresh, IconArrow } from "@/components/icons";

// WooCommerce's lane, stated in the exact vocabulary already published on the Shopify and
// WordPress pages: the CONTENT-LED store you want to own and grow. Every card is OFFER language
// ("we build"), never a track record ("the stores we've built") - we have shipped zero Woo stores.
//
// The routing callout concedes the product-first store to Shopify (the locked position), the
// bespoke commerce model to custom software, and the no-store case to Next.js. It also carries
// the FIRST of four in-body care-plan links: WooCommerce is self-hosted, so upkeep is the buyer's
// and naming it early is the page's whole trust posture.
const uses = [
  { icon: <IconTag className="h-5 w-5" />, t: "Store builds & launches", d: "A store taken from an empty install to launch: catalog, variations and collections, product pages, cart and the block checkout, payments, shipping and tax, and an admin your team runs day to day." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Custom block themes", d: "A bespoke design as a lean custom block theme on Full Site Editing, with the Product Collection block - not a bought multipurpose commerce theme carrying features you'll never use and JavaScript you'll never remove." },
  { icon: <IconCreditCard className="h-5 w-5" />, t: "Checkout, cart & payments", d: "The block-based Cart and Checkout extended the supported way, with WooPayments, Stripe or PayPal wired so card data stays off your server and your compliance burden stays as small as it can be." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Custom extensions & integrations", d: "Bespoke plugins for the workflows no off-the-shelf extension covers, and clean integrations with your ERP, CRM, accounting or 3PL over the WooCommerce REST API and webhooks." },
  { icon: <IconLock className="h-5 w-5" />, t: "Subscriptions, memberships & B2B", d: "Recurring revenue, gated content, bookings and wholesale or customer-group pricing, built on vetted extensions with the right data model - and a deliberately short list, because every extension is a renewal bill." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Migrations & replatforming", d: "Moving a store onto WooCommerce from Shopify, Magento or another platform - products, customers and orders imported, and every old URL 301-mapped before launch so hard-won rankings survive the move." },
];

export function WooScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with WooCommerce"
            title="The stores you want to own and grow"
            sub="WooCommerce is the open-source commerce plugin that turns WordPress into a store you host yourself. It is at its strongest when content leads and ownership matters - a brand or editorial site with a real shop attached. A typical WooCommerce engagement is one of these:"
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

        {/* Boundary routing. Anchors are deliberately worded differently from the five inbound
            anchors already pointing here ("WooCommerce, WordPress ecommerce", "WooCommerce",
            "a content-led store on WooCommerce" x2, "WooCommerce has its own page"). */}
        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Where WooCommerce ends, and where we&apos;ll send you
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                WooCommerce is a commerce plugin, not the answer to everything. When your project is
                really one of these, we&apos;ll point you to the right place rather than force it onto
                WooCommerce:
              </p>

              <ul className="mt-6 grid gap-3">
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      You never want to touch updates, hosting or security
                    </span>
                    {" - "}
                    then a self-hosted store is the wrong shape for you.{" "}
                    <Link href="/technologies/shopify" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      A fully hosted store on Shopify
                    </Link>{" "}
                    runs the infrastructure for you. If you do stay self-hosted, budget from day one
                    for{" "}
                    <Link href="/services/website-maintenance-services" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      a care plan that keeps it patched
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      There&apos;s no store, just content
                    </span>
                    {" - "}
                    a marketing, brochure or editorial site with nothing to sell doesn&apos;t need a
                    commerce plugin at all. That&apos;s{" "}
                    <Link href="/technologies/wordpress" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      a plain WordPress content site
                    </Link>
                    , or a leaner{" "}
                    <Link href="/technologies/nextjs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      custom Next.js build
                    </Link>{" "}
                    if speed is the point.
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      Your commerce model is genuinely bespoke
                    </span>
                    {" - "}
                    complex B2B pricing hierarchies, a multi-vendor marketplace, deep ERP logic or
                    checkout rules no plugin should carry. That&apos;s{" "}
                    <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      a ground-up custom commerce platform
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
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
