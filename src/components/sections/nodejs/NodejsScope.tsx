import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconServer, IconBolt, IconLayers, IconRefresh, IconClock, IconDatabase, IconCheck } from "@/components/icons";

// Backend use-cases - deliberately distinct from the front-end spokes (which sell
// interfaces you can see). This spoke owns the server you can't see: APIs, real-time,
// data, jobs, integrations. Cross-links route front-end intent to react/nextjs.
const uses = [
  { icon: <IconServer className="h-5 w-5" />, t: "REST & GraphQL APIs", d: "Clean, versioned APIs - REST for public and partner surfaces, GraphQL when many clients need to shape their own queries. The core of most Node work." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Real-time services", d: "Chat, live dashboards, presence, notifications and collaborative features over WebSockets, Socket.IO or Server-Sent Events - Node's home turf." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Backends for web & mobile apps", d: "The server behind a React, Next.js or React Native front end - auth, data, business logic and integrations, typed end to end." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Microservices & integrations", d: "Splitting a system into focused services, or wiring in payments, CRMs, webhooks and third-party APIs, with queues that keep slow work off the request path." },
  { icon: <IconClock className="h-5 w-5" />, t: "Background jobs & automation", d: "Email, PDF generation, scheduled tasks, data pipelines and workflow automation - moved off the request path with BullMQ and Redis." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Data & streaming", d: "PostgreSQL, MongoDB and Redis behind a typed data layer, plus streaming large uploads, exports and AI output without exhausting memory." },
];

const needIt = [
  "User accounts, login and roles",
  "Real-time features - chat, live data, presence",
  "A public or partner API other apps consume",
  "Payments, webhooks and third-party integrations",
  "Background jobs, queues and scheduled work",
  "Server-side business logic and data you own",
];

const skipIt = [
  "A marketing, brochure or content site - static is faster, cheaper and safer",
  "A form that just needs email or a managed form service",
  "Content that fits neatly in a CMS",
  "An early MVP a managed backend (Supabase or Firebase) already covers",
];

export function NodejsScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with Node.js"
            title="The server side, done properly"
            sub="Node.js is a backend runtime, so this is where the server logic lives. A typical Node engagement is one of these:"
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

        {/* The honest intellectual center of the page - the decision aid no competitor
            offers. Pre-qualifies leads and funnels honest broad intent correctly. */}
        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Do you even need a Node backend?
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Most agencies sell you a backend before asking whether you need one. We ask first -
                a live server is real cost and real surface to secure, so it should earn its place.
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-5">
                  <p className="font-display text-sm font-bold text-foreground">You need a Node backend when</p>
                  <ul className="mt-4 grid gap-2.5">
                    {needIt.map((i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span aria-hidden="true" className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-500">
                          <IconCheck className="h-3 w-3" />
                        </span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-5">
                  <p className="font-display text-sm font-bold text-foreground">You probably don&apos;t - and we&apos;ll say so - when</p>
                  <ul className="mt-4 grid gap-2.5">
                    {skipIt.map((i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span aria-hidden="true" className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground">
                          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
                        </span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Our own site is the worked example: Node compiles it, but it needs no live Node
                server, so we didn&apos;t run one. If a static or hybrid build covers you, we build
                that with{" "}
                <Link href="/technologies/nextjs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                  Next.js
                </Link>{" "}
                instead. Need the front end for a Node API? That&apos;s{" "}
                <Link href="/technologies/react" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                  React
                </Link>
                . And a product-scale system lives under{" "}
                <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                  custom software development
                </Link>
                .
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
