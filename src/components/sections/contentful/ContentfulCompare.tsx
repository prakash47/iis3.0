import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// A DECISION-AXIS table on GOVERNANCE + SCALE - not a scored product grid, and a THIRD distinct axis from
// the siblings: SanityCompare is the content-MODEL axis ("Structured & headless | Traditional page-based
// | Hosted site builder"), StrapiCompare is the hosting-OWNERSHIP axis ("Self-hosted open-source | Hosted
// SaaS | Managed Strapi Cloud"). Contentful's axis = how much content governance you actually need, at
// what scale. Columns are CATEGORIES: the enterprise composable platform (Contentful, highlighted col 1),
// a leaner headless CMS, and a traditional page-based CMS. Sanity/Strapi/Drupal are all LIVE siblings
// now - NONE may be a scored column. They are named descriptively ONCE in the caption,
// no verdict, byte-consistent with SanityCompare (":84" same structured, headless family) and StrapiCompare
// (":80" a hosted SaaS CMS keeps the software and rents you the backend).
const cols = ["", "Enterprise composable platform (Contentful)", "A leaner headless CMS", "A traditional page-based CMS"];
const rows = [
  { dim: "Content shape", a: "Typed, reusable data, orchestrated across brands", b: "Typed, reusable data you query", c: "Pages edited in a themed admin" },
  { dim: "Who coordinates it", a: "Many teams, with roles, review and releases", b: "A team, once developers model the schema", c: "A team, in a familiar admin" },
  { dim: "Model & release control", a: "Environments, aliases and Merge - git for content", b: "Datasets or a self-hosted stack, lighter process", c: "Edit live, or a plugin-based workflow" },
  { dim: "Scale it fits", a: "Many teams, brands, locales and channels at once", b: "One to a few teams and surfaces", c: "One team editing one site" },
  { dim: "Front-end freedom", a: "Any front end you build (Next.js, Astro)", b: "Any front end you build (Next.js, Astro)", c: "The theme, or headless with work" },
  { dim: "Best when", a: "Content is a coordination problem across the org", b: "Content is structured but the team is small", c: "One team edits one site, simply" },
];

export function ContentfulCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Enterprise platform vs a leaner CMS vs page-based"
            title={<>Contentful, a leaner CMS, or page-based? <span className="gradient-text">Match the platform to your scale</span></>}
            sub="We're stack-agnostic, so this is fair, not a pitch. The real choice is not brand versus brand - it is how much content governance you actually need, and at what scale."
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
                            ? "bg-brand-500/10 p-4 font-bold text-brand-700 dark:text-brand-400"
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
            Contentful earns its keep when content is a coordination problem across many teams, brands and
            channels, and it is overkill below that scale. A leaner headless CMS like{" "}
            <Link href="/technologies/sanity" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              Sanity
            </Link>{" "}
            sits in the same structured, headless family - developer-first and lighter-weight - and{" "}
            <Link href="/technologies/strapi" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              Strapi
            </Link>{" "}
            is the self-hosted route when you want to own the running software. When a single team just
            edits pages in a familiar admin, a page-based CMS like{" "}
            <Link href="/technologies/wordpress" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
              WordPress
            </Link>{" "}
            is the simpler, cheaper call. We recommend the fit, not a badge we hold.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
