import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// A genuinely FAIR comparison - a rigged table reads as a sales gimmick and kills
// the trust the proof band built. This also wins AEO for the "Next.js vs X"
// queries. The honesty block below funnels non-fit buyers to the web-dev service.
const cols = ["Dimension", "Next.js", "WordPress", "Astro", "Plain React"];
const rows = [
  { dim: "Best for", next: "SEO-critical sites & web apps that grow", wp: "Content sites editors fully control", astro: "Mostly-static content & marketing", react: "Client-heavy app UIs, no SEO need" },
  { dim: "SEO out of the box", next: "Strong - server-rendered HTML", wp: "Good, with plugins", astro: "Strong - static HTML", react: "Weak - client-only render" },
  { dim: "Performance", next: "Fast, tuned per route", wp: "Varies with plugins & host", astro: "Very fast for static", react: "Heavy client JS by default" },
  { dim: "App-like interactivity", next: "Excellent", wp: "Limited", astro: "Light (islands)", react: "Excellent" },
  { dim: "Non-dev editing", next: "Via a headless CMS", wp: "Best-in-class", astro: "Via a CMS", react: "None" },
  { dim: "Our honest take", next: "Our default for apps & SEO-critical sites", wp: "Great content-first - or headless behind Next.js", astro: "We'll pick it for content-only sites", react: "Rarely alone - Next.js does more" },
];

export function NextjsCompare() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Next.js vs the alternatives"
            title={<>Honest about when Next.js <span className="gradient-text">wins - and when it doesn&apos;t</span></>}
            sub="We're stack-agnostic, so this table is fair, not a sales pitch. Next.js is often the right answer, but not always."
          />
        </Reveal>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    {cols.map((c, i) => (
                      <th
                        key={c}
                        scope="col"
                        className={
                          i === 1
                            ? "bg-brand-500/10 p-4 font-bold text-brand-600 dark:text-brand-400"
                            : "p-4 font-semibold text-foreground"
                        }
                      >
                        {i === 0 ? "" : c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r, i) => (
                    <tr key={r.dim} className={i < rows.length - 1 ? "border-b border-border" : ""}>
                      <th scope="row" className="p-4 font-semibold text-foreground">{r.dim}</th>
                      <td className="bg-brand-500/[0.07] p-4 align-top font-medium text-foreground">{r.next}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.wp}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.astro}</td>
                      <td className="p-4 align-top text-muted-foreground">{r.react}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* The trust wedge: when Next.js is NOT the answer */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;ll tell you not to use Next.js
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A simple content site or blog with little interactivity? A tuned WordPress or Astro
              build can be lighter and easier for your team to edit. A tiny brochure site on a tight
              budget? Our{" "}
              <Link href="/pricing" className="font-medium text-brand-500 hover:text-brand-600">
                Starter tier
              </Link>{" "}
              may be the honest answer without the full Next.js apparatus. If Next.js isn&apos;t
              right for you, we&apos;ll say so and build the right thing instead - that&apos;s the
              point of hiring a{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
                full-service, stack-agnostic team
              </Link>{" "}
              over a single-framework shop.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
