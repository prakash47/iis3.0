import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLayers, IconType, IconDatabase, IconRefresh, IconGrid, IconServer, IconArrow } from "@/components/icons";

// What we build WITH Sanity - the content-modelling + Studio + data-layer work, always paired with
// a Next.js or Astro front end. The whole rest of the site already names Sanity as the headless
// SOURCE our front ends read (NextjsCapabilities, AstroScope, WebDevScope); this page reciprocates:
// Sanity is the content backend, the FRONT-END build routes OUT to Next.js/Astro (front-end-qualified
// anchors), and editor-first page-based teams route OUT to WordPress. Never absorb Next.js/Astro
// front-end terms or WordPress editor-content terms.
const uses = [
  { icon: <IconType className="h-5 w-5" />, t: "Content modelling & schema design", d: "The foundation: your content types modelled as typed schemas in code - documents, reusable objects, references and Portable Text - shaped around how your team actually works, reviewed in your repo like any other code." },
  { icon: <IconLayers className="h-5 w-5" />, t: "A custom Sanity Studio", d: "Sanity Studio stood up in your repository and built as a product, not a rented admin: custom input components, a structure editors can navigate, roles and real-time collaboration wired to your real editorial workflow." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "The GROQ data layer", d: "The queries the front end needs, written in GROQ - filtered, dereferenced and projected to exactly the fields each view renders - with TypeScript types generated from them, so the data contract is checked end to end." },
  { icon: <IconServer className="h-5 w-5" />, t: "The front end that reads it", d: "Sanity is the backend; the site is built on a front end that reads it over GROQ or the API - Next.js for app-grade and SEO-critical sites, Astro for content sites - with visual, in-context preview so editors see changes live." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Editorial workflows & multi-locale", d: "Coordinated publishing that groups related changes to go live together, scheduling for individual documents, a shared media library, and field- or document-level internationalization for multi-language content." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Migrations onto Sanity", d: "Moving off WordPress or a legacy CMS onto structured content: we model the target schema first, script the extract and transform, load into a non-production dataset to verify, and map URLs with redirects so the SEO survives the cutover." },
];

const routes = [
  {
    label: "The front end for an app or an SEO-critical site",
    href: "/technologies/nextjs",
    anchor: "Next.js, the React front end that reads Sanity",
    tail: "is where that build happens - server rendering, on-demand revalidation from Sanity, and the interactivity of a real application. Sanity models and stores the content; the site itself is the front end.",
  },
  {
    label: "The front end for a fast content or marketing site",
    href: "/technologies/astro",
    anchor: "Astro, a fast content-site front end over Sanity",
    tail: "is the leaner pairing when the site is mostly static content - Astro reads Sanity as its source and ships almost no JavaScript. We build both front ends and pick the fit.",
  },
  {
    label: "A team that just wants to edit whole pages in a familiar admin",
    href: "/technologies/wordpress",
    anchor: "WordPress, the traditional page-based CMS",
    tail: "is often the right, cheaper call - a themed admin your team already knows, with plugins. Sanity earns its keep when content is structured and reused across surfaces, not when a single team edits pages in place.",
  },
];

export function SanityScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with Sanity"
            title="Structured content, a custom Studio, and the front end that reads it"
            sub="Sanity is the content backend - we model your content, build the Studio your editors use, and write the data layer, then pair it with a front end that renders fast. A typical Sanity engagement is one of these:"
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {uses.map((u) => (
            <div key={u.t} className="card flex items-start gap-4 p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {u.icon}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{u.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{u.d}</p>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Boundary callout - Sanity is the backend; route the front-end build to Next.js/Astro,
            and editor-first page-based teams to WordPress. */}
        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Sanity is the backend - here is what reads it, and when it is the wrong CMS
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Sanity does not render your website; it stores and serves your content. The site is a
                front end, and sometimes Sanity is not the right CMS at all - here is where each of
                those goes:
              </p>

              <ul className="mt-6 grid gap-3">
                {routes.map((r) => (
                  <li key={r.href} className="rounded-2xl border border-border bg-surface p-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                        <IconArrow className="h-4 w-4 text-brand-500" />
                        {r.label}
                      </span>
                      {" - "}
                      <Link href={r.href} className="font-medium text-brand-500 hover:text-brand-600">
                        {r.anchor}
                      </Link>{" "}
                      {r.tail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
