import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconType, IconGrid, IconPen, IconDatabase, IconServer, IconLayers, IconLayout, IconChat, IconCpu, IconCode, IconBolt, IconRefresh } from "@/components/icons";

// The E-E-A-T CENTREPIECE and proof SUBSTITUTE (no Sanity portfolio, no badge, our site does not run
// Sanity yet). Each card is a checkable engineering decision - the schema in the repo, the query, the
// API you'd call - never a shipped-project claim. Current 2026 vocabulary, feature-framed, no version
// pins, no Lighthouse/CWV number. CORRECTIONS from red-team: the cached delivery is the "API CDN" and
// real-time is the "Live Content API" (two distinct things - do not merge). Content Releases is feature-
// framed with NO plan tier and the deprecated "Scheduled Publishing" is never named. The GraphQL caveat
// (no subscriptions/mutations, real-time is GROQ-only) is stated honestly. AI features are named as
// Sanity's own, never our AI service. The front-end pairing routes OUT to Next.js/Astro.
const caps = [
  { icon: <IconType className="h-5 w-5" />, t: "Typed schemas, in code", d: "Content types are modelled as typed schemas in TypeScript - documents and reusable objects with named, typed fields - so the content model is a contract that lives in your repository and is reviewable in a pull request. What you check: the schema is code you own, not a config buried in a vendor's admin." },
  { icon: <IconGrid className="h-5 w-5" />, t: "References and the content graph", d: "A reference field points one document at another with real referential integrity, so queries walk the links and a delete is blocked while something still points at it. You compose a graph, not duplicated fields - change an author's bio once and every post reflects it." },
  { icon: <IconPen className="h-5 w-5" />, t: "Portable Text and validation", d: "Rich text is Portable Text - open, JSON-based structured content, not an HTML string - so the front end decides how each mark, heading and embedded block renders. Validation rules on the schema (required, length, custom) enforce the model at author time, not at build time." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "GROQ: joins in one request", d: "GROQ filters, dereferences relationships inline, projects exactly the fields a view needs, orders and paginates - all in a single request, no waterfall of follow-up calls. Paired with generated TypeScript types, the shape of the data is type-checked against the schema in your editor." },
  { icon: <IconServer className="h-5 w-5" />, t: "The Content Lake and datasets", d: "Content lives in the Content Lake as structured JSON, in one or more datasets - a production set plus staging or preview sets - so a migration or schema change is rehearsed against a copy first. Reads come cached through the API CDN for fast public delivery, or uncached for fresh, consistent reads. (The Content Lake is Sanity's hosted service - see the ownership section.)" },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Real-time, and GROQ or GraphQL", d: "Sanity is real-time at its core: the Live Content API serves low-staleness reads alongside the cached API CDN, so you pick freshness per surface, and Studio listens to the same stream. GROQ is the native language; a typed GraphQL API is available too, with an honest caveat we would tell you up front - GraphQL here does not do subscriptions or mutations, so anything real-time or write-heavy goes through GROQ." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Studio as a React product", d: "Sanity Studio is an open-source React application you configure in code, deploy yourself, and keep in your repository - so we treat it as a product: custom input components, structure editors can navigate, document actions and in-context previews. Building React interfaces on an API is the exact work we do every day." },
  { icon: <IconChat className="h-5 w-5" />, t: "Editorial operations", d: "Studio ships real-time collaborative editing with presence, plus roles and permissions for who can edit, review and publish. For launches that span many documents, Sanity supports grouping related changes to publish together and scheduling individual documents, and assets live in a shared, searchable media library. We wire these to your real editorial workflow." },
  { icon: <IconCpu className="h-5 w-5" />, t: "AI, as Sanity's own capability", d: "Sanity ships AI as content operations - inline, field-level assistance in Studio, AI-assisted authoring, and schema-aware editorial automation that can create and update documents that fit your model within an editor's permissions. We enable and configure what you want; we do not rebrand Sanity's AI as a proprietary offering of ours." },
  { icon: <IconCode className="h-5 w-5" />, t: "The front-end pairing", d: "Sanity is the content backend, not the website. The site is built and deployed on a front end that reads Sanity over GROQ - Next.js for app-grade and SEO-critical sites, Astro for content sites - with visual, in-context editing and live preview. The front-end build is real work we route to those pages; Sanity owns the CMS side." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Webhooks, revalidation and images", d: "Publishing fires GROQ-powered webhooks - you describe which changes matter and Sanity calls your endpoint only for those - which on a Next.js front end triggers on-demand revalidation, so an edit refreshes exactly the affected routes within seconds. Images run through Sanity's transform pipeline and CDN: store the original once, request sized, cropped, format-shifted variants at the URL." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Internationalization and migration", d: "Multi-locale content is handled with field-level or document-level internationalization, chosen per project. Moving onto Sanity from WordPress or a legacy CMS is a real migration: model the target schema first, script the extract and transform, and load into a non-production dataset to verify content and relationships before cutover - a defined engineering task, not a copy-paste marathon." },
];

export function SanityCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we engineer Sanity"
            title="From schema to query to a live front end"
            sub="There is no Sanity running this Next.js site to point at, so the proof is the discipline. Everything here is a decision you can inspect on a build we deliver - a schema in the repo, a GROQ query, a Studio config - which is the point: you should never have to take our word for what good structured content looks like."
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
              <span className="font-semibold text-foreground">How we take on a Sanity build:</span>{" "}
              model the content as typed schemas first, because every later decision inherits from it;
              stand up the Studio as a product wired to how your team edits; write the data layer in GROQ
              with generated types; then build the front end that reads it in{" "}
              <Link href="/technologies/nextjs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Next.js
              </Link>{" "}
              or{" "}
              <Link href="/technologies/astro" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Astro
              </Link>
              , with on-demand revalidation so a publish refreshes only the affected routes. And when the
              job is really a team editing pages in a familiar admin, we will tell you that is{" "}
              <Link href="/technologies/wordpress" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                WordPress
              </Link>
              , not Sanity.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
