import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrow } from "@/components/icons";

// Mobile-only hub-and-spoke router. Cross-platform + native groups, each card
// linking to its real /technologies/* spoke. Mobile only - web/back-end stacks
// live on the web-design-development page.
interface Tech {
  name: string;
  slug: string | null;
  outcome: string;
}

const stackGroups: { title: string; items: Tech[] }[] = [
  {
    title: "Cross-platform",
    items: [
      { name: "React Native", slug: "react-native", outcome: "One codebase for iOS and Android, shipped fast." },
      { name: "Flutter", slug: "flutter", outcome: "Fast, expressive cross-platform apps from a single codebase." },
    ],
  },
  {
    title: "Native",
    items: [
      { name: "SwiftUI", slug: "swiftui", outcome: "Modern, fully native iOS apps when the product demands it." },
      { name: "Kotlin", slug: "kotlin", outcome: "Modern, fully native Android apps." },
    ],
  },
  {
    title: "Install-free",
    items: [
      { name: "Progressive Web Apps", slug: null, outcome: "An install-free alternative to a native app - lighter reach, no app store." },
    ],
  },
];

export function MobileStack() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Technology"
            title={<>The stacks we build <span className="gradient-text">apps with</span></>}
            sub="We're stack-agnostic and pick the right tool for your app - cross-platform when speed and budget matter, fully native when the product demands it. Go deeper on each:"
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
