import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconType, IconServer, IconGrid, IconShield, IconLock, IconLayers, IconLayout, IconPen, IconBolt, IconCode, IconDatabase, IconRefresh } from "@/components/icons";

// The E-E-A-T CENTREPIECE and proof SUBSTITUTE (no Drupal portfolio, no partner tier, our site does not
// run Drupal). Each card is a checkable engineering decision - a content type, a Views config, an
// environment workflow - never a shipped-project claim. Current 2026 vocabulary, feature-framed, NO
// point-version pins, NO Lighthouse/CWV. RED-TEAM FIXES BAKED IN: (card 4) core Workspaces stages
// CONTENT changes; staging configuration alongside content is the Workspaces Extra CONTRIB module, not
// core. (card 5) Access Policy API examples = domain, time, user attributes (the documented contexts).
// (card 7) the visual builder is "Drupal Canvas" (NEVER "Experience Builder" - dead-name + a Contentful
// collision on our own site), described capability-first and maturity-neutral (Canvas has shipped - do
// NOT call it "emerging", and do NOT pin a version). "Starshot" is NOT printed here (named once, in the
// FAQ). AI is not claimed as ours. Decoupled front-end pairing routes OUT to Next.js/Astro.
const caps = [
  { icon: <IconType className="h-5 w-5" />, t: "The Field API, entities and bundles", d: "We model the domain as content entities and bundles with typed fields (text, reference, date, media) and validation set at the schema level, so an editor, an event and a product each become a first-class type whose shape is enforced everywhere it is used. The content model is a real system you can query and reference, not loosely typed posts." },
  { icon: <IconServer className="h-5 w-5" />, t: "Views, the core query builder", d: "Views composes filtered, sorted, paged and access-aware listings against the content model in the admin UI, rendered as pages, blocks, feeds or JSON without hand-writing the SQL. A faceted directory, a related-content rail and a REST endpoint can all be Views over the same entities; when something needs more, we drop to a custom query or plugin." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Taxonomy and structured relationships", d: "Controlled vocabularies, hierarchical terms and entity-reference fields make content relate to content in ways the system understands, not tags in a string. Deep category trees, cross-referenced topics, faceted filtering and term-driven access all sit on the same relationship graph, which is what keeps a large content estate navigable as it grows." },
  { icon: <IconShield className="h-5 w-5" />, t: "Content Moderation, Workflows and Workspaces", d: "We configure editorial states and transitions (draft, review, published, archived) so content moves through defined gates rather than flipping live on save. Core Workspaces stages content changes in an isolated workspace to review and publish in one step; paired with the Workspaces Extra contrib module, configuration can be staged alongside content." },
  { icon: <IconLock className="h-5 w-5" />, t: "Roles and the Access Policy API", d: "Drupal's roles and permissions are fine-grained by default, and the newer Access Policy API extends them to context-aware access - who can see or do what can depend on domain, time of day or user attributes, not just a static role grant. We express least-privilege access as policy rather than as bespoke access code scattered through the codebase." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Core multilingual", d: "Multilingual is in core across three layers - content translation, configuration translation and interface translation - so a single site serves genuinely localized content with per-language editorial workflow. We model language from the start rather than bolting a translation plugin onto an English-only build after the fact." },
  { icon: <IconLayout className="h-5 w-5" />, t: "Layout Builder and Drupal Canvas", d: "Layout Builder composes pages from blocks and fielded content into sections and regions, per page or per content type, without hand-editing a template for every arrangement. Drupal CMS adds Drupal Canvas, an in-browser visual page-building tool that lets non-technical builders assemble and arrange pages directly; we scope which surfaces get free-form building and which stay locked to a governed template." },
  { icon: <IconPen className="h-5 w-5" />, t: "Single Directory Components", d: "We build the front end as Single Directory Components: each keeps its Twig template, metadata schema, CSS and JS together in one directory, so a card, a hero or a media object is a self-contained, reusable unit. This maps the theme layer onto the same component thinking a modern front-end team already uses, and gives Layout Builder a clean, documented set of blocks to place." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Recipes, Project Browser and Drupal CMS", d: "Drupal CMS is the official distribution aimed at faster adoption; it bundles Recipes (composable, applyable feature packs that configure a slice of functionality in one step), Project Browser (find and install modules from the admin UI) and automatic updates. We use Recipes to stand up standard capability blocks as repeatable configuration, and we are honest that several of these pieces are fast-moving and still maturing." },
  { icon: <IconCode className="h-5 w-5" />, t: "The Symfony, Twig and Composer foundation", d: "Under the admin UI, Drupal is a modern PHP application: Symfony components for the HTTP and service layer, Twig for templating, Composer for dependencies, and Drush as the command-line workhorse for deployments, cache and config sync. That foundation is what lets us run Drupal through a real pipeline with configuration managed as code, changes reviewed and deployments scripted." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Decoupled with JSON:API and GraphQL", d: "Drupal ships JSON:API in core and adds GraphQL through contrib, so the same structured content that renders the traditional site can serve a separate front end over an API. When a project wants an application-grade front end, we run Drupal as the decoupled backend and route the presentation-layer build to Next.js or Astro, where the framework work actually lives." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "The Migrate API and Drupal 7 to 11", d: "Drupal 7 reached end of life in January 2025, so the honest move for anyone still on it is a migration to the current Drupal 11 line. We use the core Migrate API to map old content types, fields, taxonomy and users into a freshly modelled Drupal 11 site - treating the move as a chance to fix the content model rather than photocopy it - with URLs mapped and redirects planned before cutover." },
];

export function DrupalCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we engineer Drupal"
            title="How we build on Drupal 11"
            sub="There is no Drupal running this Next.js site to point at, so the proof is the discipline. Everything here is a decision you can inspect on a build we deliver - a content type, a Views config, a migration - which is the point: you should never have to take our word for what a well-structured Drupal site looks like."
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
              <span className="font-semibold text-foreground">How we take on a Drupal build:</span>{" "}
              model the content types and taxonomy first, because every later decision inherits from the
              model; configure the governance - workflow, roles and multilingual - as a real system;
              manage the configuration as code; then build the theme, or, when the project wants an
              application-grade front end, run Drupal decoupled and build that front end in{" "}
              <Link href="/technologies/nextjs" className="font-medium text-brand-500 hover:text-brand-600">
                Next.js
              </Link>{" "}
              or{" "}
              <Link href="/technologies/astro" className="font-medium text-brand-500 hover:text-brand-600">
                Astro
              </Link>
              . And when the content is really a handful of simple pages, we will tell you that is a
              simpler{" "}
              <Link href="/technologies/wordpress" className="font-medium text-brand-500 hover:text-brand-600">
                CMS
              </Link>
              &apos;s job, not Drupal&apos;s.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
