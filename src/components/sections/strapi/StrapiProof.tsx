import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The honest-proof section - a PERMANENT zero (the fresh beat vs Sanity's "not yet, by plan"): our
// site does not run Strapi AND, unlike Sanity, Strapi is NOT our planned own-site CMS. Strong Node/
// React adjacency (Strapi is Node + a React admin) fenced hard, never a shipped-Strapi claim. CARD 1 =
// the ownership flip (own code + data + database - genuinely stronger than the hosted-SaaS siblings),
// ending by pointing at CARD 2. CARD 2 = the DEMOTED self-hosting-responsibility honesty (the WooCommerce
// maintenance-cost material lives HERE, never as a heading, or it re-runs the live "honest price of owning
// your store"). CARD 3 carries the "standard Strapi any team can read" claim (off PHP's code-legibility
// turf). CARD 6 = the partner/cert disclaim (REWRITTEN to avoid self-contradiction: Strapi issues no
// individual dev cert; the online certs are third-party; SOC 2 is a Strapi Enterprise feature not ours).
// Bridge = 2 real web projects on the problem-shape ONLY (never Strapi-relabelled, never a CWV weld).
const riskReversal = [
  { t: "You own the code, the data and the database", d: "This is the ownership a hosted headless CMS structurally can't give you. Strapi's Community Edition is MIT-licensed and open-source, so with a self-hosted build you own the running application itself - not just your content, but the code, the React admin and the database it sits on, whether that's PostgreSQL, MySQL or SQLite. You host it, you control the data, and you extend it in Node. Where a SaaS headless CMS lets you own your content while it keeps the software, here the software is yours too, and you can hand the whole thing to any other Strapi developer without asking us. The honest flip side is the next card: because the software is yours, keeping it current is yours too." },
  { t: "Self-hosted means someone has to run it - us, or you", d: "Owning the software is the upside; running it is the honest trade. A self-hosted Strapi instance has to be patched, hardened, deployed and kept current - Strapi ships security fixes on a rolling basis, and applying them is real work: assess it, test in staging, deploy in a window. So we put that on the table before you buy, not after. We can carry it for you on a published monthly care plan, or your own team can - and because it is standard open-source Strapi, that upkeep is portable and nobody holds it hostage, us included. You pay your own host, or Strapi Cloud, directly, with no markup from us. And if never thinking about any of this is what you want, that is a sign you want a managed option - a hosted CMS or Strapi's own managed Strapi Cloud - and we will tell you that before you spend anything." },
  { t: "Standard Strapi, no framework only we understand", d: "Your content types are defined the documented way, your customizations are ordinary Node controllers, services and middleware, and the admin is stock Strapi on the mainstream npm and Node toolchain - not a proprietary layer that only works while we're in the room. Any competent Node team can read and pick it up. You talk to the engineers who model your content and write your code: no account-manager layer, no offshore hand-off, no juniors learning Strapi on your budget." },
  { t: "We adopt or migrate after an audit", d: "Already running Strapi, or on a CMS you want moved onto a self-hosted headless backend? We start with a paid audit, model your content types, and map your URLs with redirects so the SEO survives - then pick the codebase up where it is, rather than rip-and-replace as a reflex. If you are mid-upgrade, we will tell you honestly what moving to the current Strapi line involves before you commit." },
  { t: "A registered company since 2016, senior people direct", d: "Intention InfoService is a real, incorporated company, small and senior on purpose, so your Strapi build stays with the people who modelled it instead of rotating hands. You work directly with the engineers, at published fixed prices billed against clear milestones, with an NDA on request. For startups, SMBs and enterprises worldwide." },
  { t: "Honest about partners, certifications and scores", d: "The Strapi Partner Program is real - agencies apply and are vetted, earning a Strapi Partner badge and a listing in Strapi's public partner directory - and we are not a Strapi partner and are not in that directory. Strapi does not issue an individual developer certification; the 'Strapi certificates' advertised online are third-party course-completion certificates from training platforms, not a credential Strapi grants - so we won't claim a Strapi certification we don't hold, and we won't pretend the partner program doesn't exist to dodge the question. We hold no SOC 2 report and no ISO 27001 certification, and there is no HIPAA certification for anyone to hold - and note SOC 2 is a compliance feature of Strapi's paid Enterprise edition, not an attestation we carry. We also won't show you a Core Web Vitals or Lighthouse score for a Strapi build we haven't shipped; performance is engineered on your real content and measured on your real pages after launch." },
];

export function StrapiProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>This site&apos;s content runs on Sanity, <span className="gradient-text">not Strapi - and that is deliberate.</span></>}
            sub="Our own site is a static Next.js and React build, and it does not run Strapi - not the runtime, not the admin. Here is the honest part that separates this page from our Sanity one: our own blog, guides and glossary now run on Sanity, but Strapi runs nothing here and is not going to, so this is a permanent zero, not a 'not yet.' The adjacency is real and worth stating plainly as adjacency, never as a track record: Strapi is a Node.js and TypeScript application whose admin panel is a React app, and Node and React are what we build every day - which is exactly why we can read a Strapi codebase cold. But knowing Node and React is not the same as having shipped a Strapi CMS, and we won't blur the two. And we won't show you a Core Web Vitals or Lighthouse score for a Strapi build we haven't shipped."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The depth on this page is the demo
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The capability detail above is written by people who know current Strapi practice cold -
              content types and components, the Document Service API, REST out of the box and GraphQL via
              the official plugin, custom Node controllers, the Vite-built React admin, RBAC, i18n and the
              media library in the free core, and an honest read on which features sit in the paid
              editions. Dated Strapi vocabulary - a build still centred on the old Entity Service API - is
              how a buyer spots an amateur; ours is current, and that competence, stated as capability and
              never as a result we invented, is the proof that travels. Everything here is a decision you
              can inspect on a build we ship, not a number you have to believe.
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
              Our production work is two real web builds - a custom, full-stack Next.js store on its own
              back end, and a corporate site. Neither is a Strapi project, and we won&apos;t relabel them
              as one. What they honestly prove is the problem-shape a Strapi buyer cares about: the store
              models a product catalog once and serves it to a storefront, a cart, a checkout and an admin
              a non-technical team runs day to day, which is the same model-once, serve-many job a headless
              CMS exists to do. You can{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                see the two production builds whose code the client owns outright
              </Link>{" "}
              and a team that ships real web software with real Node and front-end engineering. The
              Strapi-specific proof is not a borrowed case study or a partner badge we didn&apos;t earn -
              it is the current-standard depth on this page and the standard, self-hosted Strapi code,
              database and all, that you would own outright.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
