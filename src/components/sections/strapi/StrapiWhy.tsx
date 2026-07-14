import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCode, IconDatabase, IconCpu, IconServer, IconTag, IconRefresh } from "@/components/icons";

// THE SIGNATURE (unspent): the ownership-SCOPE flip - "own the software, not just the content". It
// passes a two-way collision test ONLY because the axis is SCOPE of ownership (which software you
// own), NOT price of ownership. The live WooCommerce signature ("The honest price of owning your
// store") is COST of ownership (maintenance bill as the headline) - so the maintenance-responsibility
// material here MUST stay demoted (a Proof card + the #when-not anti-rec), NEVER a heading. It also
// does NOT re-run Sanity's "content as data" (that is the content MODEL; this is who owns the running
// software - orthogonal) and it reciprocates Sanity's own "what you do not own is the Content Lake".
// The "standard Strapi any team can read" claim lives in the Proof no-in-house-layer card, NOT here
// (PHP owns code legibility).
const pillars = [
  { icon: <IconCode className="h-5 w-5" />, t: "Own the running software", d: "Strapi's Community Edition is MIT-licensed and open-source, so a self-hosted build is software you own - the code and the React admin are yours to read, patch and extend, not a hosted service you rent access to." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Own the data and the database", d: "Your content lives in a database you control - PostgreSQL or MySQL in production, SQLite for local work - on infrastructure you run. The data is not in someone else's cloud; it is in yours, and it is yours to back up and move." },
  { icon: <IconCpu className="h-5 w-5" />, t: "Extend it in Node, no ceiling", d: "When the generated API is not enough, you drop into Node - custom controllers, services, routes, middleware and lifecycle hooks, all TypeScript-first. You are not waiting on a vendor's roadmap for a feature; you build it." },
  { icon: <IconServer className="h-5 w-5" />, t: "A real API from your model", d: "Define a content type and Strapi generates its REST endpoints out of the box, with filtering, population and pagination; a typed GraphQL API is available via its official plugin. The contract falls out of the model, so the front end asks for exactly what it renders." },
  { icon: <IconTag className="h-5 w-5" />, t: "A genuinely free open core", d: "The open-source Community Edition is free to self-host forever - no per-seat fees, no cap on API requests, admin users or content entries. A handful of advanced features live in paid editions, and we tell you which before you commit; the core is a real product, not a trial." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Host it your way", d: "Run it yourself for full control, or use Strapi's own managed Strapi Cloud to skip the DevOps - the same open-source CMS either way. You choose where it lives, not a vendor whose only option is their platform." },
];

export function StrapiWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        {/* THE SIGNATURE - the ownership-SCOPE flip. Own the software, not just the content. */}
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                A hosted headless CMS hands you your content.{" "}
                <span className="gradient-text">Strapi hands you the software.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Every headless CMS gives you your content over an API. The difference is what happens to
                the software that serves it. A hosted, SaaS headless CMS runs the backend for you - you
                own what you put in, but the application stays theirs. Strapi is the one where the software
                is yours too: the Community Edition is open-source and MIT-licensed, so you self-host it,
                you control the database, and you extend it in Node. You own the running CMS, not just the
                content inside it. The honest flip side - because the software is yours, keeping it patched
                and current is yours too - is real, and we put it on the table below rather than hide it.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why Strapi"
            title="What owning your CMS gives you"
            sub="Strapi's whole proposition is that you own the backend, not rent it. Here is what that buys you - and, honestly, when renting a managed CMS is the smarter call."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {p.icon}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{p.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </Reveal>

        {/* The anti-recommendation - route the maintenance-averse and the editor-first away. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When a self-hosted CMS is the wrong call
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              Owning the software is the upside; running it is the trade. If your team does not want to
              patch a server, manage deploys and keep a self-hosted app current, that is a real reason to
              rent instead - a managed, hosted CMS like{" "}
              <Link href="/technologies/sanity" className="font-medium text-brand-500 hover:text-brand-600">
                Sanity
              </Link>{" "}
              (or Strapi&apos;s own managed Strapi Cloud) is the cleaner call, and we will say so before
              you spend anything. If what you actually want is a team editing whole pages through a
              familiar themed admin, that is{" "}
              <Link href="/technologies/wordpress" className="font-medium text-brand-500 hover:text-brand-600">
                WordPress
              </Link>
              . Not sure which side you are on?{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
                We will make that call with you
              </Link>{" "}
              before we quote.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
