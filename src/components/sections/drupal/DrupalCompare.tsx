import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// A DECISION-AXIS table on CONTENT STRUCTURE + how the site is built - a FOURTH distinct axis from the
// live siblings: SanityCompare = content-model, StrapiCompare = hosting-ownership, ContentfulCompare =
// governance-scale. Drupal's = a structured traditional CMS vs a simpler page-based CMS vs a headless
// backend. RED-TEAM LOCK: col 1 MUST read "Structured traditional CMS (Drupal)", never just "traditional"
// - both SanityCompare and ContentfulCompare already use "traditional page-based CMS" for the WordPress
// class, so "Structured" is Drupal's differentiator (it is ALSO a traditional CMS). WordPress and the
// headless family (Sanity/Strapi/Contentful) are named descriptively ONCE in the caption, no verdict, no
// scored product column, never "Drupal is better than WordPress" (fit, not verdict).
const cols = ["", "Structured traditional CMS (Drupal)", "A simpler page-based CMS", "A headless content backend"];
const rows = [
  { dim: "Content shape", a: "Deeply structured types, taxonomy, relationships", b: "Pages and posts, edited in a themed admin", c: "Typed content served over an API" },
  { dim: "Structure & governance", a: "Workflow, roles and multilingual native in core", b: "Added through plugins as you need them", c: "The model in the backend; governance varies" },
  { dim: "Who renders the site", a: "Drupal renders it, or run it decoupled", b: "The CMS renders it via a theme", c: "A separate front end you build" },
  { dim: "Editing", a: "Structured editing, roles, staged review", b: "Familiar admin, huge plugin ecosystem", c: "In the backend's own editor" },
  { dim: "Ownership & hosting", a: "GPL, self-hosted - you own code, site and data", b: "Self-host and own the whole site", c: "SaaS is rented; self-hosted you own" },
  { dim: "Best when", a: "The content model itself is genuinely complex", b: "One team edits mostly simple content", c: "The front end is fully separate, API-first" },
];

export function DrupalCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Structured traditional CMS vs page-based vs headless"
            title={<>Drupal, a simpler CMS, or a headless backend? <span className="gradient-text">Match the CMS to your content</span></>}
            sub="We're stack-agnostic, so this is fair, not a pitch. The real choice is not brand versus brand - it is how structured your content actually is, and how you want the site built."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    {cols.map((c, i) => (
                      <th
                        key={c || "dim"}
                        scope="col"
                        className={
                          i === 1
                            ? "bg-brand-500/10 p-4 font-bold text-brand-600 dark:text-brand-400"
                            : "p-4 font-semibold text-foreground"
                        }
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.dim} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                      <th scope="row" className="p-4 font-semibold text-foreground">{r.dim}</th>
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.a}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.b}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Drupal earns its keep when the content model itself is genuinely complex - deep taxonomies,
            many interrelated types, fine-grained roles and real multilingual. When a team edits mostly
            simple content, a page-based CMS like{" "}
            <Link href="/technologies/wordpress" className="font-medium text-brand-500 hover:text-brand-600">
              WordPress
            </Link>{" "}
            is the simpler, familiar-admin call. And when the front end is fully separate and API-first, a
            headless backend such as{" "}
            <Link href="/technologies/sanity" className="font-medium text-brand-500 hover:text-brand-600">
              Sanity
            </Link>
            , Contentful or Strapi fits the shape better. We recommend the fit, not a badge we hold.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
