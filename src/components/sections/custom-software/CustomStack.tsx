import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrow } from "@/components/icons";

// Hub-and-spoke router for the systems stack. Java & Spring Boot carries the
// enterprise-grade signal (as a fact, not a boast). Mainstream open stacks = the
// honest anti-lock-in proof: any competent team can take the system over.
interface Tech {
  name: string;
  slug: string | null;
  outcome: string;
}

const stackGroups: { title: string; items: Tech[] }[] = [
  {
    title: "Backend & systems",
    items: [
      { name: "Node.js", slug: "nodejs", outcome: "Scalable JavaScript APIs, services and real-time features." },
      { name: "Python", slug: "python", outcome: "APIs, data pipelines and ML-ready backends with FastAPI or Flask." },
      { name: "Laravel", slug: "laravel", outcome: "Robust PHP applications and back offices, built to last." },
      { name: "Django", slug: "django", outcome: "Python systems with security and an admin built in." },
      { name: "Java & Spring Boot", slug: "java-spring-boot", outcome: "Enterprise-grade backends at scale." },
    ],
  },
  {
    title: "Product interface",
    items: [
      { name: "Next.js", slug: "nextjs", outcome: "Fast, SEO-ready dashboards and product front-ends." },
      { name: "React", slug: "react", outcome: "Interactive, component-driven interfaces for complex apps." },
    ],
  },
  {
    title: "Data",
    items: [
      { name: "Databases & data layer", slug: null, outcome: "PostgreSQL, MySQL and more - the right data layer, designed for your system." },
    ],
  },
];

export function CustomStack() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Technology"
            title={<>The stacks we build <span className="gradient-text">systems with</span></>}
            sub="Mainstream, open stacks - no proprietary framework, no lock-in, so any competent team can take your system over later. We pick the right tool for the job:"
          />
        </Reveal>

        <div className="mt-10 space-y-10">
          {stackGroups.map((group) => (
            <Reveal key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {group.title}
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((t) => (
                  <div key={t.name} className="card flex flex-col p-5">
                    <h4 className="font-display text-base font-semibold text-foreground">{t.name}</h4>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{t.outcome}</p>
                    {t.slug && (
                      <Link
                        href={`/technologies/${t.slug}`}
                        className="group mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-400"
                      >
                        Explore {t.name} development
                        <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <Link
            href="/technologies"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-400"
          >
            See all technologies we build with
            <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
