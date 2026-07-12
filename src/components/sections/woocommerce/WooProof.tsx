import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The honest-proof section, and the MOST-ZERO page on the honesty ladder.
//
// WooCommerce is a WordPress plugin written in PHP; this site is a static Next.js/React build
// compiled by Node. Woo powers nothing here - not the runtime, not the build, not the package
// manager. And unlike the Shopify page there is no "front-end half" to fence: our own store work
// is a custom Next.js build on its own back end, NOT a headless WooCommerce front end. So this
// page makes no own-site claim of any kind, and has no nuance to hedge.
//
// WHY NEITHER PRIOR SIGNATURE WORKS HERE:
// - WordPress's move ("we didn't even build this site on WordPress") is spent, and it is trivial
//   here: nobody would build a brochure site on a store plugin, so saying it costs nothing and
//   therefore proves nothing.
// - Shopify's move (the anti-upsell: "we can build the expensive custom store and still tell you
//   to use Shopify") is spent AND collides with our own locked position, which is that a serious
//   product-first store is usually cleaner on Shopify - so on this page the honest recommendation
//   is frequently not WooCommerce at all, and the anti-upsell spine collapses.
//
// THE SPINE IS THE HONEST PRICE OF OWNERSHIP. Shopify's move ran against our interest by talking a
// buyer DOWN from an expensive build. This one runs against our interest in the opposite direction:
// it puts an ONGOING COST on the table - the maintenance every other Woo agency leaves off the
// quote - and then routes the maintenance-averse buyer to Shopify, where our recurring revenue is
// smaller. Same DNA, opposite vector, so it reads as a new move rather than a repeat.
//
// FOUR DEFUSERS keep it a trust move rather than a retainer upsell, and ALL FOUR must survive:
// (1) it routes buyers away to Shopify; (2) it says the care is PORTABLE and never locked to us;
// (3) the price is published, not a mystery retainer; (4) it is anchored to a verifiable general
// truth, not a scare. Maintenance is heavy IN BODY but deliberately absent from the CtaBand.
//
// Card 5 carries the partner disclaim. "WooExpert" is a RETIRED name (renamed to Woo Partner in
// March 2025, marketplace replaced by the Woo agency directory), so it must never appear. And
// because NO official WooCommerce developer certification exists, we use the Django move - "there
// is none to hold" - rather than "we hold no certification", which would imply one exists. The
// tier ladder is contested across sources, so we name the PROGRAM and no tier.
const riskReversal = [
  { t: "You own all of it - the store, the code and the data", d: "This is the ownership a hosted platform structurally cannot give you. Standard, self-hosted WooCommerce under the GPL, on hosting you control, your domain, your database, your admin - not a store account we control and rent back to you. The theme, the custom code, the products, the customers and the orders are yours from day one, and you can move to any other WordPress or WooCommerce developer without asking our permission. The honest flip side is the one this page is about: because the software is yours, keeping it current is yours too." },
  { t: "Standard WooCommerce, no framework only we understand", d: "A clean block theme plus standard WooCommerce and reputable, widely-used extensions any competent WordPress developer can read, with template overrides done the documented way - not a proprietary page-builder or an in-house theme framework that only works while we're in the room. You talk to the people who actually build the store and choose the extensions: no account-manager layer, no offshore hand-off, no juniors learning WooCommerce on your budget." },
  { t: "No markup on extensions, and a deliberately short list", d: "You buy any paid WooCommerce extensions and their licences directly, at the vendor's price - we take no referral markup and no affiliate kickback that could quietly shape what we recommend. And we keep the list short and audited on purpose: core WooCommerce plus a little custom code usually beats a stack of overlapping plugins, because every extension is a renewal bill, a performance cost, and one more thing its author can abandon." },
  { t: "Updates that don't take your store down", d: "A WooCommerce store breaks on updates when they're applied blind to the live site. We work the opposite way: a staging environment and Git-based deploys, so core, theme, extension and PHP updates are tested away from your store before they ship, with a backup taken before every change and a clean rollback if anything regresses. The store keeps taking orders while the work happens somewhere else." },
  { t: "No invented speed score, and no badge we haven't earned", d: "We won't show you a Lighthouse or Core Web Vitals score for a store we haven't built yet. Performance is engineered on your real store - a lean theme, a short extension list, object caching, a host sized for dynamic pages - and measured on your real pages after launch. We're also not a Woo Partner and we're not listed in Woo's agency directory: that's Automattic's real, publicly checkable agency program, and we're simply not in it. There's no official WooCommerce developer certification to hold either, so nobody selling you WooCommerce holds one." },
  { t: "A registered company since 2016, with milestones and a straight answer on fit", d: "Intention InfoService is a real, incorporated company, small and senior on purpose, so your store stays with the people who built it instead of rotating hands. Published fixed prices billed against clear milestones, and an NDA on request. And if a hosted store you never have to maintain is what you actually want, we'll tell you Shopify is the cleaner call before you buy, not after." },
];

export function WooProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We won&apos;t pretend this page is a <span className="gradient-text">WooCommerce store.</span></>}
            sub="It isn't one, and there's no half-truth to dress up here. WooCommerce is a WordPress plugin written in PHP; this site is a static Next.js and React build, and the toolchain that compiles it runs on Node. So WooCommerce powers none of what you're reading - not the runtime, not the build, not even the package manager - and our site isn't a headless WooCommerce front end either. Bolting a 'Built with WooCommerce' badge onto a page that sells nothing would take five minutes and cost us the one thing this whole site is built to earn. So instead of a badge, here's the depth - and the one thing about WooCommerce most agencies won't put in writing."
          />
        </Reveal>

        {/* THE INTEGRITY PANEL - the spine. It names an ongoing cost we could quietly omit, says
            the care is portable and not ours to hold, and routes the maintenance-averse buyer to
            the platform where our recurring revenue is smaller. */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                The honest price of owning your store
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                WooCommerce gives you something a hosted platform never can: a store you truly own -
                the software, the checkout, the code and the database, under no account anyone can
                suspend. That ownership is the entire reason to choose it. It is also the catch. A
                store you own is a store you maintain. Core, extensions, PHP, your payment gateway and
                your security are now yours to keep current, and when a WooCommerce store turns slow,
                breaks on an update or gets compromised, the cause is almost always an un-maintained
                site rather than WooCommerce itself. The plugin is free. A store that stays fast and
                safe for years is not.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                So here is the line most WooCommerce agencies leave off the quote. We put the ongoing
                cost of ownership on the table before you buy, not after, as published{" "}
                <Link href="/services/website-maintenance-services" className="font-medium text-brand-500 hover:text-brand-600">
                  monthly care plans
                </Link>{" "}
                rather than a mystery retainer, because a build price with no maintenance plan is
                exactly how good stores rot. And we&apos;ll say the uncomfortable half out loud: this
                is true whether we do the upkeep, your team does it in-house, or you hand it to
                another developer entirely. Your store is standard, self-hosted WooCommerce under the
                GPL, so that care is portable and nobody holds it hostage, us included. If never
                thinking about any of this is what you actually want, that is a sign you want a hosted
                store, and we&apos;ll point you to{" "}
                <Link href="/technologies/shopify" className="font-medium text-brand-500 hover:text-brand-600">
                  Shopify
                </Link>{" "}
                before you spend anything - even though the WooCommerce build and its care plan are
                worth more to us. Naming the cost we could quietly omit is the most honest thing on
                this page.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The depth on this page is the demo
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The capability detail above is written by people who follow current WooCommerce, not a
              2015 theme-and-plugins shop: a lean block theme on Full Site Editing, the Cart and
              Checkout blocks on the Store API rather than the old shortcodes, High-Performance Order
              Storage for orders that scale, custom features built the documented way with WooCommerce
              hooks, filters and the REST API, background jobs on Action Scheduler, object caching and
              a host tuned for the dynamic pages a store can never fully cache. Dated WooCommerce
              vocabulary - &quot;we&apos;ll buy a multipurpose theme and stack a dozen plugins on
              it&quot; - is how you spot the shop that ships the slow, fragile store WooCommerce keeps
              getting blamed for. Ours is current, and that competence, stated as capability and never
              as a speed score we invented, is the proof that actually travels.
            </p>
          </div>
        </Reveal>

        <Reveal group className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riskReversal.map((r) => (
            <div key={r.t} className="card p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">{r.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </Reveal>

        {/* The bridge. It claims the PROBLEM SHAPE and the OWNERSHIP PROPERTY, never the platform.
            Singular store: we have built one, and it is not a WooCommerce store. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The problem WooCommerce solves, and the ownership - honestly labelled
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production work is real web projects: an online store and a corporate site. The
              store is a custom, full-stack Next.js build on its own back end - a product catalog, a
              cart, a checkout and payments flow, and an admin a non-technical team runs day to day -
              and, like a WooCommerce store, it is software the client owns outright rather than rents
              from a platform. It is not built on WooCommerce, though: WooCommerce is PHP on
              WordPress, and this isn&apos;t, so we won&apos;t relabel it as one.{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                See our work
              </Link>
              , described honestly. What it proves is two true things a WooCommerce buyer actually
              cares about: this team ships a working catalog, cart and checkout that holds up in
              production, and we build a store you own rather than one you rent. The
              WooCommerce-specific proof isn&apos;t a borrowed case study or a partner badge we
              didn&apos;t earn - it&apos;s the current-standard depth on this page, and the standard,
              self-hosted store, code and database you&apos;ll own outright.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
