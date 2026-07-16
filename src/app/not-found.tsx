import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

/**
 * Branded 404. Lives at the ROOT (not inside the (marketing) group) so it covers BOTH
 * unmatched top-level URLs AND notFound() calls from marketing routes (bad /work, /blog
 * or /guides slugs). It REUSES the founder-final Header/Footer unmodified - no edits to
 * those components - so a dead URL lands on chrome with real routes back into the site,
 * not Next's bare default. Next serves this with a 404 status automatically.
 */
export default function NotFound() {
  const links = [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Our work" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Section>
          <Container>
            <div className="mx-auto max-w-2xl py-16 text-center sm:py-24">
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-400">
                404
              </p>
              <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                This page could not be found
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                The page you were looking for may have moved or never existed. Here are a few good
                places to pick things back up.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand-400 hover:text-brand-600"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <div className="mt-10">
                <Button href="/">Back to home</Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
