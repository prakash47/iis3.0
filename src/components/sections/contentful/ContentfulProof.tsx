import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The honest-proof section - a PERMANENT own-site zero with a FRESH beat. Sanity used "not yet, by plan"
// (we will adopt Sanity for our blog); Strapi used "permanent, unlike Sanity". Contentful's beat turns
// the fence into the argument: we would not put our OWN site on Contentful, and the honest reason IS the
// signature - our site is one small team's content, exactly the case where Contentful's enterprise
// governance is overkill. CARD 1 = hosted-SaaS ownership (content + model + front-end code yours and
// exportable via CMA/CLI; the platform is rented, billed by Contentful directly - NEVER "own the
// platform", NEVER flat "no lock-in", and NO "(soon Salesforce)" here - the acquisition is treated once,
// in its own section). CARD 5 = partner/cert/attestation disclaim (Solution Partner named + disclaimed +
// NO tier; certification is INDIVIDUAL not company-level; byte-locked SOC2/ISO/HIPAA line). CARD 6 = no
// markup + no invented score. Bridge = 2 real web projects on the problem-shape ONLY (never Contentful-
// relabelled, never a CWV weld; the corporate site is NOT labelled a CMS build). Fresh /work anchor.
const riskReversal = [
  { t: "You own your content and content model, not the platform", d: "Here is the honest line on lock-in, drawn the same way we drew it for a hosted store. Your content and your content model - the type definitions, entries, assets and relationships - are yours and exportable at any time through the Content Management API or the CLI, and the front-end code we write is yours too. What you do not own is the running platform: Contentful is a hosted service you rent, billed to you directly by Contentful. We will not tell you that you own the platform, and we will not wave away switching cost with a flat 'no lock-in' - it is a SaaS backend. The honest version is better: your content is portable and yours, the software that serves it is theirs, and you choose it knowing exactly which is which." },
  { t: "Standard Contentful, no in-house layer", d: "We build on Contentful the way Contentful ships it - standard content types, the documented APIs, the App Framework where an extension genuinely helps - not a proprietary layer only we understand. Wrapping your content in a bespoke framework would quietly convert Contentful's lock-in into ours, so we don't. Any team fluent in current Contentful practice can pick up the space and keep going without us in the room." },
  { t: "We adopt or migrate after an audit", d: "Most teams that call us already have content somewhere - a legacy CMS, a pile of pages, another headless tool. We don't start by ripping it out. We start with a paid audit, model the target on Contentful, script the extract and transform, and verify the result in a non-production environment before anything is served, with URLs mapped and redirected before cutover. You watch the migration prove itself in a safe environment first." },
  { t: "Senior people, direct, since 2016", d: "You talk to the engineers who model your content and wire the governance - no account-manager layer, no offshore hand-off, no juniors learning Contentful on your budget. Intention InfoService is a real, incorporated company, small and senior on purpose, so the content model stays consistent from build to deploy, at published fixed prices billed against clear milestones, with an NDA on request." },
  { t: "Honest about partners, certifications and attestations", d: "Contentful runs a Solution Partner program with a public partner directory - and we are not a Contentful Solution Partner and are not listed in that directory; name it, so you can check it. On certification: there is no company-level or agency-level Contentful certification to hold. Contentful's certifications are individual credentials a person earns, issued as verified-skill badges, not a badge a company carries - so 'we are certified' would be a category error, and we won't claim it. Any SOC 2, ISO or similar attestation you have seen is Contentful's, held by the platform as a vendor feature, never ours. For our own part, we hold no SOC 2 report and no ISO 27001 certification, and there is no HIPAA certification for anyone to hold; SOC 2 is an attestation report, not a certification, and we describe it that way every time." },
  { t: "No markup, and no score we invented", d: "You pay Contentful directly for the platform, on their own plan - a genuine free tier to explore, paid plans scaling by spaces, users, locales and usage up to a custom enterprise plan - and we take no referral markup that could quietly shape what we recommend; our fee is for the build. And we will not show you a Core Web Vitals or Lighthouse score for a Contentful build that does not exist yet. Performance is engineered on your real content and measured on your real pages after launch." },
];

export function ContentfulProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We wouldn&apos;t put our own site on Contentful - <span className="gradient-text">and that is the recommendation working.</span></>}
            sub="No Contentful build lives on this domain, and there is a fit reason, not an excuse. Our site is one small team's content - a handful of pages, one voice, one release at a time - and that is exactly the case where Contentful's enterprise governance is weight without payoff, so we would steer ourselves toward something leaner. That is the same call we would make for you if your shape were ours. (For the record, our own blog, guides and glossary run on Sanity, not Contentful, so Contentful is a permanent zero on our own domain.) We show no performance numbers for a Contentful build here; any speed figures on this site belong to our own Next.js build and would not honestly transfer to work we have not shipped."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The depth on this page is the demo
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              We won&apos;t tell you we &quot;ship Contentful,&quot; because we have not shipped one yet,
              and saying otherwise would be the exact overclaim this page exists to avoid. What we can
              stand behind is knowledge: we are people who know current Contentful practice cold -
              environments and aliases, Merge across environments, roles and tasks and releases, the four
              purpose-built APIs, governed visual assembly, and orchestration across spaces and brands.
              When you have no logos to point at, the honest proof is that you can explain the platform
              better than the pitch decks can, and every claim here is a decision you can inspect on a
              build we deliver, not a number you have to believe.
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
              We have not shipped a Contentful build, so we will not dress one up. What we can show you is
              the problem shape Contentful is built for, already solved in production on our own stack.
              Our production work is real, custom full-stack Next.js builds - a professional-training
              platform rebuild and a financial-services site. The training platform is a
              WordPress-to-Next.js rebuild that models a large course catalog once - courses, cities,
              categories, relationships - then serves that single model to many surfaces at once: a fast
              filterable catalog, templated per-city course landing pages, demo-class and enquiry funnels,
              and a headless CMS the marketing team runs itself. The financial-services site does the same
              with structured pages for ten loan categories, a real-time EMI calculator, and apply enquiry
              funnels. Model the content
              once, serve it to many surfaces, keep it coherent as it changes: that is the coordination
              job Contentful scales up across teams, brands and channels. The tool would differ; the
              discipline is the one we already practise. You can{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                walk the two builds where one model already feeds many surfaces
              </Link>{" "}
              and see a team that ships real web software - never a Contentful case study we don&apos;t
              have. The Contentful-specific proof is the current-standard depth on this page and the
              standard, exportable Contentful content you would own outright.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
