import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrow } from "@/components/icons";

export type ReadingLink = { href: string; label: string };

/**
 * A small "Further reading" block that links a money/spoke page DOWN to the relevant
 * informational Resources docs (guides/blog/glossary) with descriptive anchors. This is
 * the commercial -> informational direction the anti-cannibalization matrix wants: a
 * money page never links Resources with a commercial anchor, and Resources never links a
 * money page with an informational one. Server-rendered, no client JS.
 */
export function FurtherReading({
  links,
  heading = "Further reading",
}: {
  links: ReadingLink[];
  heading?: string;
}) {
  if (!links.length) return null;
  return (
    <Section>
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-foreground">{heading}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-start gap-2 text-sm font-medium text-brand-500 hover:text-brand-600"
                  >
                    <IconArrow className="mt-0.5 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                    <span>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
