import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The honest-proof section, and the hardest one on the site to get right.
//
// HONESTY-LADDER PLACEMENT: Shopify sits with the zero-own-site-connection group (angular,
// python, laravel, django, java-spring-boot, wordpress). No Liquid, no Shopify admin, no
// Storefront API and no hosted checkout runs here. So the page says so, plainly.
//
// THE HEADLESS HALF-CLAIM IS FENCED, NOT LEANED ON. A headless build is two halves; our own
// site demonstrates only the generic front-end half, and our site is not even a commerce front
// end (no cart, no checkout, no products). The half we cannot show - Storefront API wiring,
// cart state, the hand-off to Shopify's checkout - is the half a buyer actually pays for. So
// the fence is explicit, and the wedge is a scoped nuance, never the spine.
//
// THE SPINE is the anti-upsell instead: our one production store is a custom, full-stack
// Next.js build (founder-confirmed 2026-07-10) - the expensive path we can genuinely do - and
// we still tell most merchants to use Shopify. Recommending against our own demonstrated
// capability is the Shopify-native version of the WordPress "recommend by fit" move, and it is
// stronger, because "we didn't build our own brochure site on Shopify" would cost nothing to
// say and therefore prove nothing.
//
// The WordPress-style "we didn't build this site on X" line is deliberately NOT used here.
//
// Card 5 carries both Shopify-specific honesty moves: no fabricated Lighthouse/CWV score, and
// the partner disclaim. The disclaim names ONLY currently-real programs (Partner Program,
// Partner Directory, partner tiers, Verified Skills). It must never say "we are not a Shopify
// Plus Partner" - that standalone program was sunset in December 2024, so disclaiming it would
// falsely imply it still exists. Same reason the retired Shopify Experts Marketplace is unnamed.
const riskReversal = [
  { t: "You own the accounts, the code and the data", d: "Your store lives on your Shopify account, your domain and your billing, with you as the account owner - not a store we control and rent back to you. The theme code, or the front-end repository for a headless build, sits in your own repository. We work as a staff account you can remove the day we finish. Nothing is held hostage on our side, and you can move to any other Shopify developer without asking our permission." },
  { t: "Standard Liquid or standard Next.js, no proprietary framework", d: "We build a standard Online Store 2.0 theme in plain Liquid and JSON templates that any competent Shopify developer can read, or, for headless, a standard front end on the Shopify Storefront API. We don't trap your store inside an in-house page-builder or a bespoke framework only we understand, so a bigger team or another agency can pick it up without us in the room." },
  { t: "No markup on apps, and a deliberately short app list", d: "You pay Shopify and any app vendors directly, at their own price. We take no referral markup and no affiliate kickback that could quietly shape what we recommend. And we keep the app list short on purpose: native theme features, metaobjects and one small custom app usually beat a stack of overlapping monthly subscriptions that slow the store and pile up on your bill." },
  { t: "The lock-in question, answered honestly", d: "Here's the part most agencies skip: Shopify is a hosted platform, so the checkout, the admin and the hosting are Shopify's. That is the trade you are buying, and we won't pretend it isn't. What you are not locked into is us. Your products, customers and orders export out, your domain and your code are portable, and if you ever outgrow Shopify we can migrate you to WooCommerce or a custom build. We'll tell you exactly what is portable and what isn't before you commit, not after." },
  { t: "No invented speed score, and no badge we haven't earned", d: "We won't show you a Lighthouse or Core Web Vitals score for a store we haven't built yet - and on Shopify that refusal matters even more than elsewhere, because Shopify owns the server, the CDN, the platform JavaScript and the whole checkout. Performance is engineered on your real store and measured on your real pages after launch. We also hold no Shopify partner tier and no Shopify Verified Skills credential, and we are not listed in Shopify's Partner Directory. Those are real, publicly checkable programs we are simply not in, and we won't imply otherwise." },
  { t: "Senior people direct, on fixed prices", d: "You talk to the people who actually build your theme, choose your apps and write your Functions - no account-manager layer, no offshore hand-off, no juniors learning Shopify on your budget. Intention InfoService is a real, incorporated company, small and senior since 2016. Published fixed prices, billed against clear milestones, with an NDA on request." },
];

export function ShopifyProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We won&apos;t pretend this page is a <span className="gradient-text">Shopify store.</span></>}
            sub="It isn't one. There's no Shopify behind it - no products, no cart, no checkout, no admin - just a static Next.js and React build. Here's the honest nuance most agencies blur, though. A headless Shopify store is two halves: a storefront front end, and Shopify's commerce back end. The front-end half is the same craft you're inspecting right now. The Shopify half - the Storefront API wiring, the cart state, the hand-off to Shopify's hosted checkout, the admin - is not running here, and it happens to be the half you'd actually be paying us for. So we won't dress a fast marketing site up as a Shopify track record. Bolting a 'Powered by Shopify' badge onto a page that sells nothing would take five minutes, and cost us the one thing this whole site is built to earn."
          />
        </Reveal>

        {/* THE INTEGRITY PANEL - the spine of this page. We argue against our own most billable
            option, from the one position that makes the argument credible: we can actually build
            the expensive alternative, and have. */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                The most honest thing we can tell a store owner
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                The most profitable thing we could sell you is the thing we can already prove we
                build: a custom, full-stack storefront on the exact stack this page is written in.
                Our own production store work is precisely that - a custom Next.js build with its own
                back end, its own catalog, cart, checkout and payments. Not a Shopify store. The
                expensive path, and we can genuinely walk it.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                And we will still tell most merchants to use Shopify instead. A standard Online Store
                2.0 theme, built well, is the right call for the large majority: faster to ship,
                cheaper to run, and easier for your team - and for the next developer - to maintain.
                Headless earns its keep only when a store genuinely outgrows the theme layer, and even
                then Hydrogen is Shopify&apos;s own first-party path before ours is. We&apos;ll tell you
                which one you are before you spend anything, even when the honest answer is the cheaper
                build that&apos;s worth less to us. Almost every Shopify agency you&apos;ll compare us
                against can only build Shopify, which makes &quot;Shopify is the right choice&quot; a
                habit rather than a judgement. We can build the alternative. We&apos;re recommending
                Shopify anyway.
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
              The capability detail above is written by people who follow current Shopify, not a 2018
              theme-and-apps shop: Online Store 2.0 with JSON templates, sections and theme blocks;
              metafields and metaobjects for structured content; the Storefront API with Hydrogen and
              Oxygen for headless; Shopify Functions for cart and discount logic; Checkout Extensibility
              rather than the checkout.liquid and additional scripts Shopify is retiring; the GraphQL
              Admin API with REST treated as legacy. Dated Shopify vocabulary - &quot;we&apos;ll install
              a premium theme and a few apps,&quot; or &quot;we&apos;ll just edit checkout.liquid,&quot;
              or a Shopify Script for your discounts, which stopped executing in mid-2026 - is how you
              spot the shop that ships a slow store that breaks at the next platform change. Ours is
              current, and that competence, stated as capability and never as a speed score we
              invented, is the proof that actually travels.
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

        {/* The bridge. The real store is a custom, full-stack Next.js build - NOT Shopify, and
            never relabelled as one. It proves the problem shape, not the platform. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              We ship the problem Shopify solves - honestly labelled
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production work includes a custom, full-stack Next.js online store on its own back
              end - a product catalog, a cart, a checkout and payments flow, and an admin a
              non-technical team runs day to day. It is not a Shopify store, and we won&apos;t relabel
              it as one. It proves one true thing: this team ships a working catalog, cart and checkout
              that holds up in production, which is exactly the problem shape Shopify exists to solve.
              Our{" "}
              <Link href="/work" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                work page
              </Link>{" "}
              features two other real builds, described honestly. The Shopify-specific proof
              isn&apos;t a borrowed case study or a partner badge we didn&apos;t earn - it&apos;s the
              current-standard depth on this page, and the standard theme code, exportable data and
              accounts you&apos;ll own outright.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
