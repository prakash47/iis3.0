import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The honest-proof section - a PERMANENT own-site zero with a FRESH beat on the CONTENT-COMPLEXITY axis.
// Sanity "not yet, by plan"; Strapi "permanent, unlike Sanity"; Contentful "enterprise governance is
// overkill for our one small team" (scale axis); WordPress "we did not build our site on WordPress".
// Drupal's beat = our content is too SIMPLE to need Drupal's native structural power (complexity axis).
// CARD (a) = the DEMOTED self-hosted ownership (you own the code, the site and the data - GPL, self-hosted;
// you pay your own hosting, NEVER "own the host"; the ONLY place the spent ownership signature lives).
// CARD (e) = partner/cert/attestation disclaim (BOTH the Drupal Certified Partner program AND the Acquia
// Solution Partner Program named + disclaimed + NO tier; Acquia certs INDIVIDUAL not company-level;
// byte-locked SOC2/ISO/HIPAA line). CARD (f) = no-invented-score + the community-governance TRUST asset
// (GPL, Drupal Association + community, no single vendor owns it - positive, NO competitor named). Bridge
// = 2 real web projects on the structured-content problem-shape ONLY, never Drupal-relabelled, fresh
// /work anchor. No CWV/Lighthouse for an unshipped Drupal build.
const riskReversal = [
  { t: "You own the code, the site and the data", d: "Drupal is open-source under the GPL and runs on hosting you control, so what we build is yours to keep - the full codebase, the running site and every row of content. There is no proprietary layer of ours holding it hostage and no license anyone can revoke. You pay for your own hosting in your own name (you rent the servers, not us - we never claim you own the host), and if you ever part ways with us, a standard Drupal build is something any competent Drupal team can pick up and carry forward." },
  { t: "Standard Drupal, nothing only we understand", d: "We build with core Drupal and well-established contributed modules - the Field API, Views, Taxonomy, Layout Builder, Content Moderation and the rest of the tools the wider community maintains. We do not wrap your site in a private framework or a bespoke abstraction that makes you dependent on us. Anyone who knows current Drupal can read what we deliver, because it is just Drupal, built the way Drupal is meant to be built." },
  { t: "We audit first, then adopt or migrate", d: "If you already run Drupal, we start by reading what you have - the version, the modules, the content model and the technical debt - before we touch anything. If you are still on Drupal 7, which is now past its end of life, the honest move is a planned migration to Drupal 11, and the core Migrate API is the path we use to carry your content and structure across. We scope the upgrade from what the audit actually finds, not from a guess." },
  { t: "Senior people, direct, since 2016", d: "Intention InfoService has been a small senior team since we incorporated in 2016. The people who scope your Drupal work are the people who write it - no account layer between you and the build, no junior handoff after the pitch, no offshore relay. When you ask why the content model is shaped a certain way, you get the answer from the person who shaped it, at published fixed prices billed against clear milestones, with an NDA on request." },
  { t: "Honest about partners, certs and attestations", d: "We are straight about the badges we do not carry. We are not a Drupal Certified Partner - that is the non-profit Drupal Association's own program, earned through a volume of contribution credits we have not put in, and we are not in its public partner directory. We are not an Acquia partner either; the Acquia Solution Partner Program is Acquia's separate commercial agency program, and we are not in it. There is no company-level Drupal certification: the Acquia certifications are individual credentials a developer earns through Acquia Academy, not a company badge, so we will never claim a company holds one. We hold no SOC 2 report and no ISO 27001 certification, and there is no HIPAA certification for anyone to hold; SOC 2 is an attestation report, not a certification, and we describe it that way every time." },
  { t: "No invented scores, and a platform no one owns", d: "You will not find fabricated ratings, star counts or awards on this page, because we do not have them and will not manufacture them, and we will not show you a Core Web Vitals or Lighthouse score for a Drupal build we have not shipped. What we can point to is the platform itself: Drupal is open-source under the GPL, stewarded by the non-profit Drupal Association together with its founder and a large contributor community, and no single vendor owns it, can relicense it, or can pull the rug. That vendor-neutral, community-owned foundation is a real, checkable trust asset - and it belongs to Drupal whether you hire us or anyone else." },
];

export function DrupalProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We have not built our own site in Drupal, <span className="gradient-text">because our content is too simple to need it.</span></>}
            sub="Honesty first: we have shipped zero Drupal work, and this page will not borrow anyone else's. Our own site is a handful of simple content types on a static Next.js build, and the blog we are planning will sit on a lighter structured CMS, not a full traditional CMS. Drupal's native power is built for content structures far more complex than ours - deep taxonomies, many interrelated types, fine-grained editorial roles, real multilingual - so using it here would be over-engineering, not a proof point. What we can show you is method and a command of current Drupal practice, not a portfolio we do not have. When your content is genuinely that complex is exactly when this platform earns its keep - and when it is not, we will tell you."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The depth on this page is the demo
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              With no Drupal portfolio to point at, the honest substitute is command of the platform as it
              stands in 2026. We are people who know current Drupal practice cold - Drupal 11 and its
              class-based hooks, the Field API and Views, Content Moderation and Workspaces for staging
              content, the Access Policy API for context-aware permissions, Single Directory Components on
              the front end, and the in-browser page building of Drupal Canvas. We would rather show you
              that we understand where the platform is and where it is going than dress up work we have not
              done. Depth you can question in a conversation is worth more than a case study you have to
              take on faith, and everything here is a decision you can inspect on a build we deliver.
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
              We have shipped two production builds, both on the web, and neither one is Drupal. What one
              of them shares with Drupal is the shape of the problem, not the tooling: our custom
              full-stack store models a structured catalog once - products, categories, attributes and the
              relationships between them - and then serves that single model many ways, through search,
              filtering and checkout. Structuring content once so it holds together as one coherent system,
              instead of scattering it across pages, is precisely the problem a traditional CMS like Drupal
              is built to solve. We will not relabel that store as Drupal experience; we are showing you
              that we already think in structured content models. You can{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                see the structured content model behind the two builds we actually shipped
              </Link>{" "}
              and a team that ships real web software. The Drupal-specific proof is the current-standard
              depth on this page and the standard, open Drupal you would own outright.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
