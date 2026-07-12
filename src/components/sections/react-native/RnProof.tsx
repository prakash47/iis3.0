import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// THE MOST DANGEROUS PAGE ON THE SITE, and this is the section that decides it.
//
// TWO AXES, NEVER CONFLATED:
// (a) "Does this technology run our site?" - a clean ZERO, identical to WooCommerce and Angular.
//     Nothing here is React Native. This site renders to the DOM through React-DOM; React Native
//     renders to native iOS and Android views through Fabric and a native toolchain. So the
//     "inspect it, this page IS the technology" move (react/nextjs) is FORBIDDEN here.
// (b) "Is there checkable ADJACENT proof?" - uniquely on this site, yes. React really does run
//     this site, and ReactFaq + ReactWhy ALREADY publish that the React model and much logic carry
//     over to React Native. We are consistency-locked to that. We cannot pretend the bridge does
//     not exist, and we must not let it carry more weight than it can bear.
//
// THE LAUNDERING SENTENCE this page exists to refuse: "React Native is basically React, and we've
// done React for years, so your app is covered." Any softer cousin of it is the same crime.
// So: web proof and technology fact are stated as SEPARATE claims with an explicit seam between
// them. Never one sentence that lets web evidence stand in for app capability.
//
// We also deliberately do NOT restage the React DevTools demo here. ReactProof owns that device;
// re-running it would duplicate a sibling AND flirt with the trap. We reference it in words and
// LINK to the react page for the inspectable proof.
//
// THE SIGNATURE is "The React part is the easy part." It is kept OUT of the H1 on purpose: as a
// hero slogan a skimmer reads it as "these are React web people dabbling in mobile". Down here it
// has room to flip into seniority, because naming the hard part precisely - and then engineering
// each piece in the 12-card grid above - is exactly the knowledge a React-only developer lacks.
// The hard parts are OWNED, never listed as warnings. And there is no invented "40/60" split.
//
// VERB TENSE: we have shipped ZERO apps. Capability tense throughout. The ONE permitted "we've
// shipped" is the backend engine, web-scoped, carrying MobileProof's exact fence.
const riskReversal = [
  { t: "We submit to the stores, and plan for their rules", d: "App Store and Google Play submission and release is part of the build, not your problem. We build to each store's current review and testing requirements, which we confirm at kickoff, so the launch date you're given is a real one rather than a hopeful one." },
  { t: "Real native views, and senior people on the native layer", d: "React Native drives the platform's own components, not a web page in a shell. The native side - modules, permissions, signing, store review - is where cross-platform projects actually fail, and you work directly with the senior engineers handling it. No account-manager layer, no offshore hand-off." },
  { t: "Built current, and never stranded", d: "We build on the New Architecture rather than a legacy setup, and we check that every native dependency has moved to it before adopting it, because one that hasn't is the usual reason an app can never be upgraded. Version upgrades are planned work. Optional care plans start from $100 a month and cover monitoring, crash triage, OS-version updates and app-store compliance, with no lock-in." },
  { t: "Your accounts, your code, 100%", d: "The Apple Developer and Google Play accounts are registered in your name, and 100% of the code and IP transfers to you on final payment. We hand over the repository and the store accounts, so you can publish and hire freely with no licence back to us." },
  { t: "A fixed price, paid by milestone", d: "We scope the native work - modules, permissions, push, deep links, offline - in a short discovery, under an NDA on request, and agree a fixed price before any build. Payments are tied to delivered, approved milestones, never 100% upfront, and the native surprises are found in discovery rather than in your invoice." },
  { t: "Expo is a choice, not a cage", d: "When we use Expo it is the open-source framework, and your code stays portable - it can move away from the framework whenever you want. Expo's paid cloud services are a convenience we can use or skip. There is no proprietary layer only we understand and nothing is held hostage on our side." },
];

export function RnProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We won&apos;t pretend this page is a <span className="gradient-text">React Native app.</span></>}
            sub="It can't be one. A web page renders to the DOM; React Native renders to real native iOS and Android views through an entirely different renderer and a native toolchain. There is no React Native in this site's runtime, none in its build, and not a single native view anywhere on it. So instead of a badge, here is the honest thing this page has that a mobile brochure page never does."
          />
        </Reveal>

        {/* THE SIGNATURE. Web proof and technology fact are stated as two separate claims, with an
            explicit seam, so neither can stand in for the other. */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                The React part is the easy part
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Most mobile pitches run the same move: &quot;we know React, and React Native is
                basically React, so your app is covered.&quot; We won&apos;t run it, because it is the
                one claim on a mobile page that is quietly false. Two separate things are true here,
                and it matters that they stay separate. First, a fact about us: the interface
                you&apos;re reading is a live React 19 build, and you can go and inspect it on{" "}
                <Link href="/technologies/react" className="font-medium text-brand-500 hover:text-brand-600">
                  React on the web, the DOM side of the same model
                </Link>
                . That proves one thing and only one thing - we ship real React on the web. It is not
                an app, and we won&apos;t offer a website as app proof. Second, and separately, a
                published property of the technology rather than a claim about us: a React Native app
                is written in that same component, hook and state model, so the React layer and much
                of the logic do carry over.
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                That carry-over is real. It is also the easy part. The app is everything that
                isn&apos;t React: native modules and the New Architecture, the Metro bundler and the
                Hermes engine, the native build and release pipeline, code signing, App Store and
                Google Play review, device and OS-version fragmentation, offline sync, permissions,
                push, deep links, and the version upgrades that keep an app alive for years. Knowing
                React tells you none of that. Naming it precisely - and engineering each piece, which
                is what the twelve cards above are - is how you tell a team that understands mobile
                from a web developer who has never had to ship the native layer. That is the standard
                we hold this page to.
              </p>
            </div>
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

        {/* THE DISCLAIM. Both named programs are REAL, LIVE and first-party checkable, so both get
            the name-and-disclaim treatment. React Native's Partners programme is documented in the
            framework's own repository and you join it by being referred by an existing partner and
            committing to contribute - it is a core-contributor stewardship group, not a badge an
            agency buys. Expo calls its list "trusted consultants", NOT a partner program, so we use
            Expo's own word. There is no agency-level React Native certification in existence; Meta
            publishes an individual course certificate, which is a different thing entirely. And the
            store memberships are not credentials - saying so must not contradict the money page's
            commitment that we submit for you. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              We&apos;re honest about badges too - here are the exact ones we don&apos;t have
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              React Native does run an official Partners programme, listed in the framework&apos;s own
              repository. Meta, Microsoft, Expo, Shopify, Callstack, Software Mansion and a handful of
              others are in it, and you join by being referred by an existing partner and committing
              real engineering to React Native itself - it is a stewardship group for the people who
              maintain the framework, not a badge an app firm buys. We are not in it, and we are not
              core contributors to React Native either. Expo separately keeps a directory of trusted
              consultants, and we are not listed there. There is no agency-level React Native
              certification in existence, either - Meta publishes an individual course certificate,
              which is not a credential for a company, so nobody selling you React Native holds one.
              And the Apple Developer and Google Play accounts are not credentials at all: they are
              the paid memberships required to publish, which we register in your name and use to
              submit your app for you. What we offer instead of a badge is the depth on this page,
              published fixed prices, and code you own outright.
            </p>
          </div>
        </Reveal>

        {/* THE BRIDGE. It leads with the non-claim, then makes the one honest, web-scoped claim,
            carrying MobileProof's exact fence. It never grows a second sentence that drifts. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              We haven&apos;t shipped a mobile app. Here&apos;s what we have shipped.
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              We&apos;re a growing mobile practice, so we won&apos;t pretend to a portfolio we
              haven&apos;t shipped yet, and you&apos;ll find no app screenshots, store ratings or
              download counts on this page. What we can point at is real. Our production store is a
              custom, full-stack build on its own back end, with a working catalog, cart, checkout,
              payments, accounts and an admin a non-technical team runs day to day. The backend, APIs
              and authentication behind it are the exact engine a serious app calls, and unlike a
              picture of a phone, that is software running in production.{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                See our work
              </Link>{" "}
              - web projects, honestly labelled, never dressed up as app screenshots. The React Native
              proof on this page isn&apos;t a borrowed case study or a partner badge we didn&apos;t
              earn. It is the depth of what this page knows about the native layer, the backend
              we&apos;ve genuinely shipped, and terms you can hold us to in writing.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
