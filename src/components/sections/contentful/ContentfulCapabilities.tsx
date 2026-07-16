import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconType, IconGrid, IconPen, IconServer, IconLayers, IconShield, IconLayout, IconBuilding, IconDatabase, IconCpu, IconCode, IconRefresh } from "@/components/icons";

// The E-E-A-T CENTREPIECE and proof SUBSTITUTE (no Contentful portfolio, no partner tier, our site does
// not run Contentful). Each card is a checkable engineering decision - a content type, an API call, an
// environment workflow - never a shipped-project claim. Current 2026 vocabulary, feature-framed, NO
// version pins, NO Lighthouse/CWV. DEAD-NAME DISCIPLINE (red-team): the retired "Compose" app and any
// unconfirmable "Launch" product are NEVER named - governed visual page building = Studio + Experience
// Builder, release management = releases + scheduled publishing, described as CAPABILITIES. AI is named
// as CONTENTFUL'S OWN, never rebranded as our service. The four APIs (CDA/CMA/CPA/GraphQL) named as a
// feature. The front-end pairing routes OUT to Next.js/Astro.
const caps = [
  { icon: <IconType className="h-5 w-5" />, t: "Typed content models", d: "We model your domain as content types with typed fields and validations - required flags, ranges, patterns, allowed values and which types a reference may point at - so an editor cannot violate the shape by accident and the front end can trust that a product always has a price of the right type. What you check: the model is an explicit contract, not free text." },
  { icon: <IconGrid className="h-5 w-5" />, t: "References and the content graph", d: "Entries reference other entries, so an article points at an author and a landing page composes a list of section blocks - a graph, not a pile of pages. Cross-space references let a shared library of brand assets or global components live in one space and be consumed by many, so a disclaimer or token is authored once and reused everywhere." },
  { icon: <IconPen className="h-5 w-5" />, t: "Rich Text as structured JSON", d: "The Rich Text field stores a structured JSON document - nodes, marks and embedded entry references - not a pre-baked HTML string. The front end decides how every heading, list and embedded component renders, so the same authored paragraph becomes semantic React on a website and clean markup in an email, from one source." },
  { icon: <IconServer className="h-5 w-5" />, t: "Four purpose-built APIs", d: "We match the API to the job rather than force one to do everything: the Content Delivery API serves published content fast to the live site, the Content Preview API serves drafts to a preview build, the Content Management API is the write and automation surface for migrations and integrations, and the GraphQL Content API asks for exactly the fields and linked entries a view needs in one round trip." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Environments, aliases and Merge", d: "This is the capability that separates Contentful from a database with a nice editor. An environment is an isolated copy of the model and data; we branch it, evolve the model there while production keeps serving, then promote by repointing an alias - no code change, and rollback as cheap as pointing it back. Merge computes and applies the changeset between two environments, so a model change is reviewed and promoted like code." },
  { icon: <IconShield className="h-5 w-5" />, t: "Roles, tasks, publishing and releases", d: "Roles and permissions scope who can edit, publish or only comment, down to specific content types and fields. Tasks and comments turn review into a tracked step on an entry; scheduled publishing lands a change at a set time; and releases group related entries so a product launch's page, banner and nav publish together, atomically, instead of leaking half-finished." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Governed visual assembly", d: "Contentful Studio and Experience Builder give content teams a visual canvas where they compose pages from design-system components that we register - components with defined props, bound to structured content, inside the same roles and review governance. The distinction that matters: this is assembly constrained to the approved component library, so brand and structure hold while marketers move without a developer in the loop." },
  { icon: <IconBuilding className="h-5 w-5" />, t: "Orchestration across brands and channels", d: "Contentful's orchestration connects content across environments, spaces, brands and channels and manages apps centrally in any environment. In practice that is a parent brand pushing a shared component or policy to many sub-brand spaces, or one content set fanning out to web, app and commerce without being re-authored per surface - the coordination layer a single site never needs and a multi-brand enterprise cannot live without." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Localization at scale", d: "Locales are first-class: a field localizes per market, fallbacks define what an unfilled locale inherits, and translation workflows - human or connected translation-vendor apps - plug into the same review and publishing governance. A page exists once as a structured entry with per-locale values, and a structural change reaches every locale at once, not forty forked copies that drift." },
  { icon: <IconCpu className="h-5 w-5" />, t: "Personalization and AI, as Contentful's own", d: "Personalization runs through Contentful's own capability (built on its Ninetailed acquisition), letting editors define audiences and variants against structured content. Contentful also ships its own AI inside the workspace - model, content and image generation. These are Contentful's platform features that we wire and govern; we do not rebrand them as an AI service of ours." },
  { icon: <IconCode className="h-5 w-5" />, t: "App Framework, webhooks and revalidation", d: "The App Framework lets us extend the editor itself - custom field editors, sidebar widgets, dashboards - and the Marketplace supplies ready integrations for translation, DAM, analytics and commerce, so the editing experience fits your workflow. On the outbound side, webhooks fire on publish and drive on-demand revalidation, so a Next.js or Astro front end updates the exact affected pages the moment content changes - no full rebuild, no stale cache." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Migrations onto Contentful", d: "Moving onto Contentful is a defined engineering sequence, not a copy-paste: we model the target content types, script the extract and transform from the legacy source through the Management API, and run the import into a non-production environment where we verify counts, references and rendered output before anything touches production. URL mapping is locked before cutover so SEO equity survives the move." },
];

export function ContentfulCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we engineer Contentful"
            title="Enterprise content governance, from environments to orchestration"
            sub="There is no Contentful running this Next.js site to point at, so the proof is the discipline. Everything here is a decision you can inspect on a build we deliver - a content type, an environment workflow, an API choice - which is the point: you should never have to take our word for what a well-run Contentful platform looks like."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caps.map((c) => (
            <div key={c.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {c.icon}
              </span>
              <h3 className="mt-4 font-display text-sm font-semibold text-foreground">{c.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </Reveal>

        {/* The senior-opinion default line. Offer-framed (how we WOULD build), never a record. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">How we take on a Contentful build:</span>{" "}
              model the content types first, because every later decision inherits from the model; stand
              up environments, roles and the editorial workflow as a governed platform; wire the APIs and
              the webhooks; then build the front end that reads it in{" "}
              <Link href="/technologies/nextjs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Next.js
              </Link>{" "}
              or{" "}
              <Link href="/technologies/astro" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Astro
              </Link>
              , with on-demand revalidation so a publish refreshes only the affected routes. And when the
              content is really one team editing one site, we will tell you that is a leaner{" "}
              <Link href="/technologies/sanity" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                CMS
              </Link>
              &apos;s job, not Contentful&apos;s.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
