import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The honest-proof section - zero-own-site (our site is Next.js, not Astro) but the CLOSEST-adjacent
// spoke: same npm/Node/TypeScript ecosystem, and Astro islands can be React, which our site is. The
// fence is mandatory and welded to the concession: our fast static site proves we know fast static
// web, but it is a Next.js build, and a pure content site on Astro ships EVEN LESS JavaScript than
// ours - that concession is exactly what makes the JS-diet criticism credible instead of hypocritical.
// CRITICAL FACT FIX (red-team): our Next.js site compiles on Webpack/Turbopack, NOT Vite - never
// claim Vite for OUR site (Vite is an Astro fact only). NO Lighthouse/CWV self-demo (our numbers are
// Next.js's). Card 5 carries the partner/cert disclaim: the Astro Agency Partner program is REAL ->
// name + disclaim (Laravel treatment, not a false denial); no official Astro-framework cert (Flutter
// narrowing, scoped to the framework because Astronomer's Airflow "Astro" sells one); MIT + platform-
// agnostic + Cloudflare-stewarded governance (no independent-foundation overclaim, no lock-in implica-
// tion); byte-locked SOC2/ISO/HIPAA line. Never "Astro Studio" (dead name). Headline is fresh (NOT the
// WordPress "we didn't even build this site on X" verbatim).
const riskReversal = [
  { t: "You own 100% of the code, content and IP", d: "A standard Astro project in your repository - your content, your domain - handed over in full. The source, the content collections, the config and the build all live on your side from day one; nothing is held hostage on ours, and you can move to any other Astro developer without asking our permission." },
  { t: "No lock-in - deploy anywhere", d: "Astro is MIT-licensed, open-source and platform-agnostic: it builds to static or hybrid output that deploys to any host - Cloudflare, Netlify, Vercel, your own server, anywhere. That stayed true after the Astro team joined Cloudflare in early 2026 - staying open to every platform was a stated condition of the deal - so you are never tied to one vendor's cloud to run your own site." },
  { t: "Standard, open Astro any team can pick up", d: "Conventional Astro - islands, content collections, the Content Layer, MDX, a clean project structure any Astro developer can read - on the mainstream npm and Node toolchain. We never wrap your site in an in-house layer only we understand." },
  { t: "We adopt or migrate after an audit", d: "Already have an Astro site, or a WordPress or old static build you want moved onto Astro? We start with a paid audit, model your content and map your URLs with redirects so your SEO survives the move, and pick the codebase up where it is - no rip-and-replace as a reflex." },
  { t: "Honest about partners, certs and attestations", d: "The Astro Agency Partner program is real - Astro hand-picks agencies with a track record of shipping Astro sites into a public directory - and we are not an Astro Agency Partner and are not listed in it; it is vetted on a body of Astro work we do not yet have, and we won't imply otherwise. There is also no official certification for the Astro web framework - the Astro certificates you will see are third-party course-completion certificates, not a company credential. The honest governance answer is the license: Astro is MIT-licensed, open-source and platform-agnostic, now stewarded by the Cloudflare team that builds it, so your assurance is that your site deploys anywhere, not a badge. We hold no SOC 2 report and no ISO 27001 certification, and there is no HIPAA certification for anyone to hold. If your project legally needs a vendor who carries a formal attestation, we will say so plainly." },
  { t: "Senior people, direct, since 2016", d: "You talk to the engineers who write your Astro and structure your content - no account-manager layer, no offshore hand-off, no juniors learning islands on your budget. Intention InfoService is a real, incorporated company, small and senior on purpose, so a content site stays architecturally consistent from build to deploy instead of passing between rotating hands." },
];

export function AstroProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>Our own site is a Next.js build, <span className="gradient-text">not an Astro one.</span></>}
            sub="Our React and Next.js pages can say 'this page is the technology, inspect it.' This one can't, and we won't fake it. Our site is a static Next.js and React build on the same npm, Node and TypeScript ecosystem Astro lives in - and an Astro island can be React, which our site is - but it is Next.js, not Astro. Here's the honest part most agencies skip: our site being fast and static proves we know fast static web, but a pure content site built on Astro would ship even less JavaScript than ours does, because that is Astro's default and our site is a growing platform, not pure content. We won't dress a Next.js build up as Astro proof, and we won't show you a performance score for a site we haven't built yet."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The depth on this page is the demo
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The capability detail above is written by people who know current Astro practice cold -
              islands and Server Islands, the Content Layer for typed content from Markdown, MDX or a
              headless CMS, content collections, View Transitions, Starlight for docs, React or Vue
              islands, deployed anywhere. Dated or hand-wavy Astro vocabulary is how a buyer spots an
              amateur; ours is current, and that competence, stated as capability and never as a
              performance score we invented, is the proof that actually travels. Everything we claimed
              is a decision you can inspect on a build we ship, not a number you have to believe.
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
              We ship the exact kind of site Astro is built for - honestly labelled
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production work is two real web builds - a mostly-static corporate site and a custom
              Next.js store - and the first is the exact shape Astro is made for: content, pages, fast
              static delivery, an editing path. You can{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                see the mostly-static site and the store we actually built
              </Link>
              , described for what they are and never relabelled as Astro projects, because they
              weren&apos;t. What they prove is one true thing: this team ships fast, content-driven web
              that holds up in production. The Astro-specific proof is not a borrowed case study - it is
              the current-standard depth on this page and the standard, open Astro code you would own
              outright.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
