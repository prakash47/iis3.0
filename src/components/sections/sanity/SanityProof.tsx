import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The honest-proof section - the FRESHEST fence of any spoke. Every prior zero-own-site spoke says
// "not X, permanently"; Sanity is the only one where the honest answer is "not YET, by plan" - and
// choosing Sanity as our OWN future CMS (config already says so: seo.ts blog/resources come from
// Sanity later) is a real endorsement no competitor can fake. CARD 1 = the Shopify-style hosted-SaaS
// ownership (content/schema/Studio/GROQ yours; the Content Lake is Sanity's hosted service) - NEVER
// "own the platform", NEVER flat "no lock-in". CARD 5 = partner/cert disclaim (Agency Partner named +
// disclaimed; Developer Certification individual + currently partner/enterprise-gated - we could not
// even sit it today; byte-locked SOC2/ISO/HIPAA). CARD 6 = no markup + no invented score. The bridge
// links the 2 real projects on the CONTENT-MODELLING problem-shape ONLY - never welds a CWV/Lighthouse
// or headless-performance claim to them (the /work cards carry placeholder metrics).
const riskReversal = [
  { t: "You own your content, schema, Studio and queries", d: "Here is the honest line on lock-in, drawn the same way we drew it for Shopify. Your content is structured JSON you can export at any time through Sanity's CLI; your schema and your Sanity Studio are open-source (MIT) and live in your own repository; and your GROQ queries are yours - so the parts that encode your work are portable and in your hands. What you do not own is the Content Lake: that is Sanity's hosted service, a SaaS you pay Sanity for directly. Migrating off any hosted platform is real work, and we won't pretend it isn't - but your content is exportable, structured data rather than a database held hostage, and you can move to any other Sanity developer without asking us." },
  { t: "No in-house layer, by construction", d: "Standard, open Sanity any competent team can pick up: a conventional Studio, schemas defined in TypeScript, GROQ and Portable Text, on the mainstream npm and Node toolchain. We never wrap your content model in a bespoke framework only we understand, so a bigger team or the next agency can take it over without us in the room." },
  { t: "We adopt or migrate after an audit", d: "Already have a Sanity project, or a CMS you want moved onto structured content? We start with a paid audit, model your content and map your URLs with redirects so the SEO survives, and pick the codebase up where it is - no rip-and-replace as a reflex." },
  { t: "Senior people, direct, since 2016", d: "You talk to the engineers who model your schemas and write your GROQ - no account-manager layer, no offshore hand-off, no juniors learning Sanity on your budget. Intention InfoService is a real, incorporated company, small and senior on purpose, so the content model stays consistent from build to deploy." },
  { t: "Honest about partners, certs and attestations", d: "The Sanity agency partner program is real - Sanity vets agencies with a track record of shipping Sanity work into a public directory - and we are not a Sanity agency partner and are not in that directory; it is earned on a body of Sanity work we do not yet have, and we won't imply otherwise. There is no company-level Sanity certification: the Sanity Developer Certification is an individual credential a developer earns, and the exam is currently offered only to developers at Sanity's own partner agencies and enterprise customers - so it is not something we could even sit today, let alone hold as a company badge. We hold no SOC 2 report and no ISO 27001 certification, and there is no HIPAA certification for anyone to hold. If your project legally needs a vendor who carries a formal attestation, we will say so plainly." },
  { t: "No markup, and no score we invented", d: "You pay Sanity directly for the Content Lake at their own price - no referral markup or affiliate kickback that could quietly shape what we recommend - and we will not show you a Core Web Vitals or Lighthouse score for a Sanity build that does not exist yet. Performance is engineered on your real content and measured on your real pages after launch." },
];

export function SanityProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>Our own blog is a placeholder. <span className="gradient-text">Sanity is what we plan to put behind it.</span></>}
            sub="Our site is a static Next.js and React build. The blog is an empty-state placeholder, and wiring it up to Sanity is on our own to-do list, not shipped - so Sanity powers none of what you're reading yet, and we won't pretend the 'yet' is already done. Here's the honest adjacency, stated as adjacency and never as a track record: Sanity is API-first and pairs with Next.js and React, and Sanity Studio is itself a React application, which is our home ground - which is exactly why it's the headless CMS we would reach for, and the one we plan to adopt for our own blog. But React competence is not a shipped-Sanity claim, and we will not show you a Core Web Vitals or Lighthouse score for a Sanity build we haven't shipped."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The depth on this page is the demo
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The capability detail above is written by people who know current Sanity practice cold -
              schemas defined in TypeScript, GROQ with generated types, Portable Text, the Content Lake and
              datasets, the Live Content API alongside the cached API CDN, a Studio built as a React
              product, and on-demand revalidation on a Next.js front end. Dated or hand-wavy Sanity
              vocabulary is how a buyer spots an amateur; ours is current, and that competence, stated as
              capability and never as a result we invented, is the proof that actually travels. Everything
              we claimed is a decision you can inspect on a build we ship, not a number you have to believe.
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

        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The real work behind this honesty
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production work is two real web builds - a custom, full-stack Next.js store and a
              corporate site. The honest bridge is the problem-shape, never the platform: a store&apos;s
              catalog is content modelled once as structured data and queried many ways, which is precisely
              the problem Sanity exists to solve. Neither was built on Sanity, and we won&apos;t relabel
              them as Sanity projects - but you can{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                walk the two real builds this site is actually made of
              </Link>{" "}
              and see a team that ships real web software with real front-end engineering. The Sanity-specific
              proof is not a borrowed case study - it is the current-standard depth on this page and the
              standard, open Sanity code you would own outright.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
