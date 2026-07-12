import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBuilding, IconGauge, IconLayout, IconRefresh, IconCode, IconGrid } from "@/components/icons";

// The enterprise services grid - the keyword + capability spine. "Enterprise
// Angular" and "Angular migration" are the two highest-value terms, so they lead.
const uses = [
  { icon: <IconBuilding className="h-5 w-5" />, t: "Enterprise web apps", d: "Structured, TypeScript-first applications for banking, fintech, healthcare and large internal teams - built to stay consistent over years." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "AngularJS & version migrations", d: "AngularJS (end-of-life since 2021) rebuilt on modern Angular, or older Angular upgraded to standalone, signals and zoneless - URLs and behaviour preserved." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Dashboards & admin panels", d: "Data-heavy, role-based interfaces with complex forms, tables and real-time views - Angular's home turf." },
  { icon: <IconLayout className="h-5 w-5" />, t: "SaaS & line-of-business apps", d: "Front-ends for products and internal systems, with authentication, permissions and long maintenance horizons." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Angular Material UI", d: "Accessible, themeable enterprise UI on Angular Material and the CDK - not a from-scratch component kit every time." },
  { icon: <IconCode className="h-5 w-5" />, t: "API integration & consulting", d: "Typed integration with your APIs and back-office systems, plus architecture reviews when you need senior judgment, not a body shop." },
];

export function AngularWhat() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with Angular"
            title="Enterprise apps built to last"
            sub="Angular is the opinionated, batteries-included framework large organizations reach for. A typical Angular engagement is one of these:"
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

        {/* Boundary + cross-links. Angular is self-contained (own SSR) - it does NOT
            route SEO to Next.js. React is the honest alternative; custom-software owns systems. */}
        <Reveal className="mt-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Angular is one of the stacks behind our{" "}
            <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
              web design and development services
            </Link>
            . Building an enterprise system or SaaS platform?{" "}
            <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
              Custom software development
            </Link>{" "}
            covers the systems side. Want a more flexible, library-first approach instead? See our{" "}
            <Link href="/technologies/react" className="font-medium text-brand-500 hover:text-brand-600">
              React development
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
