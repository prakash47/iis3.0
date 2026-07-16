import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBolt, IconChat, IconCode, IconLayers, IconTrendingUp, IconShield } from "@/components/icons";

// Fit-framed benefits (about server workload characteristics, not rendering) - and
// the honest "when NOT to use Node" block that routes intent to the sibling backend
// spokes and the hubs. That honesty is the intellectual center and the cross-link engine.
const pillars = [
  { icon: <IconBolt className="h-5 w-5" />, t: "Built for concurrency and I/O", d: "The non-blocking event loop handles thousands of simultaneous connections without a thread per request, so I/O-bound work - APIs talking to databases and other services - stays fast under load." },
  { icon: <IconChat className="h-5 w-5" />, t: "Real-time is first-class", d: "WebSockets, streaming and live updates are native strengths, not bolt-ons. It's why chat, live dashboards and collaborative apps so often run on Node." },
  { icon: <IconCode className="h-5 w-5" />, t: "One language across the stack", d: "JavaScript and TypeScript on both the front and back end means shared types, shared logic and one team across the whole app - fewer handoffs, fewer bugs." },
  { icon: <IconLayers className="h-5 w-5" />, t: "The largest ecosystem on earth", d: "npm is the biggest package registry there is, so there's a maintained library for almost any service you need to talk to - less code to write and own." },
  { icon: <IconTrendingUp className="h-5 w-5" />, t: "Serverless and edge-ready", d: "Node runs in containers, on traditional servers, and as serverless or edge functions - so the same skills scale from a small API to a distributed system." },
  { icon: <IconShield className="h-5 w-5" />, t: "Typed end to end", d: "TypeScript from the database schema through the API contract to the client removes a whole category of integration bugs before the code even runs." },
];

export function NodejsWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Node.js"
            title="Why teams build backends on Node"
            sub="Node is the runtime we reach for when concurrency, real-time and a JavaScript-everywhere team all matter. Here's what it buys you - and, honestly, when it's the wrong tool."
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

        {/* The anti-recommendation - the strongest trust signal and the cross-link
            engine to the sibling backend spokes and the hubs. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to use Node
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              Node.js is our default for I/O-bound backends - APIs, real-time and streaming. It is
              the wrong tool when the work is CPU-bound: heavy number-crunching, video or image
              processing, or large in-process computation can block Node&apos;s single-threaded event
              loop and stall every other request. For machine learning, data science and serious
              numerical work,{" "}
              <Link href="/technologies/python" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Python
              </Link>{" "}
              is years ahead, and we&apos;d build that in Python. For large, transaction-heavy
              enterprise systems where your team already lives in the JVM,{" "}
              <Link href="/technologies/java-spring-boot" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Java and Spring Boot
              </Link>{" "}
              is often the better long-term fit. And plenty of projects need no custom backend at all.
              Not sure which way to go?{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                We&apos;ll pick the right stack
              </Link>{" "}
              for the job, not the one this page happens to be about.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
