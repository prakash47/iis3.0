import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconType, IconGrid, IconFileText, IconServer, IconDatabase, IconCode, IconBolt, IconLayout, IconLock, IconSpark, IconCpu, IconLayers } from "@/components/icons";

// The E-E-A-T CENTREPIECE and proof SUBSTITUTE (no Strapi portfolio, no partner badge, our site does
// not run Strapi). Each card is a checkable engineering decision on a build we'd deliver, in current
// Strapi 5 vocabulary. CORRECTIONS from red-team: GraphQL is via Strapi's OFFICIAL PLUGIN (only REST
// is core/out-of-the-box); the Document Service API replaced the v4 Entity Service (dead-name, never
// current); the admin build is Vite (replaced Webpack); databases are PostgreSQL/MySQL/SQLite (do NOT
// exclude MariaDB - it is also supported). EDITION SPLIT precise: the free MIT Community Edition core
// vs paid features - Content History / Releases / Live Preview / Strapi AI in Growth, review workflows
// and audit logs in Enterprise, and SSO is a PAID feature (not Enterprise-only). Never imply paid is
// free. Strapi AI named as Strapi's own, feature-framed (no beta/GA). No version pins, no CWV score.
const caps = [
  { icon: <IconType className="h-5 w-5" />, t: "Collection types, single types, components", d: "You model content in the Content-Type Builder or in code: collection types for repeatable entries (posts, products), single types for one-off global content (a homepage, settings), and reusable components composed into either. Each field is typed, and the model lives in your repository. What you check: the content model is code you own and can diff." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Relations and dynamic zones", d: "Content types link through typed one-to-one, one-to-many and many-to-many relations, so a delete respects what still references it. A dynamic zone lets an editor assemble a page from a chosen set of components in any order. What you check: a landing page is composable blocks the editor controls, not one frozen template." },
  { icon: <IconFileText className="h-5 w-5" />, t: "The Document Service API", d: "Server code and plugins read and write content through the Document Service API, the current line's data layer, which works on documents - one documentId grouping an entry's draft, published version and locales - so draft & publish and internationalization are first-class. A build still centred on the older Entity Service API is a tell it is a version behind." },
  { icon: <IconServer className="h-5 w-5" />, t: "A REST API from the model", d: "Define a content type and Strapi generates its REST endpoints out of the box - no hand-rolled CRUD. You shape each response with query parameters: filter on any field, select fields, populate related content and media to the depth a view needs, sort and paginate. The API contract falls out of the content model." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "GraphQL via the official plugin", d: "Install Strapi's official GraphQL plugin and the same content model is exposed as a typed graph - the same filtering, pagination and population, resolved in one query - so you can choose REST or GraphQL per surface. We tell you which fits each screen rather than defaulting to one out of habit." },
  { icon: <IconCode className="h-5 w-5" />, t: "Custom controllers, services, middleware", d: "When the generated API is not enough, you drop into Node: custom routes, controllers and services, route policies, global or route-level middleware, and lifecycle hooks on create, update and publish. The current line is TypeScript-first, so extension code is typed against your model. Node and React are what we build every day - real adjacency, not a shipped-Strapi claim." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Webhooks and revalidation", d: "Publishing and other content events fire webhooks to an endpoint you define. On a Next.js front end that call triggers on-demand revalidation, so an editor's change refreshes only the affected routes within seconds instead of a full rebuild. What you check: the publish-to-live path is wired to the pages that changed." },
  { icon: <IconLayout className="h-5 w-5" />, t: "A React admin, and plugins", d: "The admin panel is a React application - built with Vite in the current line, which replaced the older Webpack build - and you can customize and extend it or write your own plugin. The ecosystem adds official and community plugins for GraphQL, internationalization, users and permissions, documentation and more. A bespoke editing experience is a normal request for us." },
  { icon: <IconLock className="h-5 w-5" />, t: "RBAC, i18n and media - the open core", d: "Role-based access control, internationalization for multi-locale content, and the media library are part of the free, MIT-licensed Community Edition - along with content types, the REST and GraphQL APIs, the Document Service, draft & publish, the plugin system and a full-screen content preview. We are precise about that line so you know what the open core gives you before anyone pays for anything." },
  { icon: <IconSpark className="h-5 w-5" />, t: "Editorial at scale, named by edition", d: "Some features sit in Strapi's paid editions, and we will not imply they are free: Content History, Releases, side-by-side live preview and Strapi's AI features - including an AI Content-Type Builder that drafts content types from a prompt - are in the paid Growth edition; single sign-on is a paid feature, and review workflows and audit logs are in Enterprise. If your team needs these, we scope the edition into the plan openly, and enable Strapi's AI as Strapi's own feature, not a proprietary offering of ours." },
  { icon: <IconCpu className="h-5 w-5" />, t: "Self-hosted, on your database", d: "You run Strapi on infrastructure you control, backed by the database you choose - PostgreSQL or MySQL in production, SQLite for local work. Because the Community Edition is open source, you own and control the running software itself, not only the content: the code is MIT-licensed, yours to read, patch, extend in Node and self-host. The honest operational counterweight is stated plainly in the ownership and process sections, not buried." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Front-end pairing and migrations", d: "Strapi is the content backend, not the website: the site is built on a front end that reads its API - Next.js for app-grade and SEO-critical builds, Astro for content-first sites. Moving onto Strapi from WordPress or a legacy CMS is a defined task: model the target types first, script the extract and transform, verify in a non-production instance, then cut over with redirects so the URLs survive." },
];

export function StrapiCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we engineer Strapi"
            title="From content model to a self-hosted API your front end reads"
            sub="There is no Strapi running this Next.js site to point at, so the proof is the discipline. Every card is a decision you can inspect on a build we deliver - a content type in the repository, a populated query, a piece of custom Node - and we are precise about what the free open-source core gives you versus what sits in Strapi's paid editions, because that honesty is the point. Strapi is a widely adopted open-source headless CMS used by teams of many sizes; none of them are our clients, and we will not borrow their work as ours."
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
              <span className="font-semibold text-foreground">How we take on a Strapi build:</span>{" "}
              model the content types and components first, because every endpoint and screen inherits
              from that model; wire the editorial workflow - roles, locales, draft & publish, and only
              the paid features you actually need - to how your team really works; extend the API in
              typed Node only where the generated REST or GraphQL genuinely falls short; then build the
              front end that reads it in{" "}
              <Link href="/technologies/nextjs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Next.js
              </Link>{" "}
              or{" "}
              <Link href="/technologies/astro" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Astro
              </Link>
              . And when the real job is a team editing pages in a familiar admin, we will tell you that
              is{" "}
              <Link href="/technologies/wordpress" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                WordPress
              </Link>
              , not Strapi.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
