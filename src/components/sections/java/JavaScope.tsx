import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconDatabase, IconServer, IconLayers, IconBuilding, IconRefresh, IconClock } from "@/components/icons";

// Enterprise / transaction-heavy use-cases - consistency-locked to the "Large,
// transaction-heavy enterprise" cell the Node/Python pages already published about Java.
// The callout below routes front-end intent to react/angular/nextjs and keeps the Kotlin
// boundary (backend here, Android mobile -> mobile page).
const uses = [
  { icon: <IconDatabase className="h-5 w-5" />, t: "Transaction-heavy platforms", d: "Order, payment, inventory and ledger systems where correctness under concurrent load is non-negotiable - Java's transactional integrity and strict typing are built for this." },
  { icon: <IconServer className="h-5 w-5" />, t: "High-throughput REST & gRPC APIs", d: "Versioned REST and gRPC APIs and backend-for-frontend layers, built to hold up under real load with virtual threads and proper connection management." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Microservices & event-driven systems", d: "Spring Cloud microservices and Kafka event-driven pipelines when a system genuinely needs them - and the honest call to start with a modular monolith when it doesn't." },
  { icon: <IconBuilding className="h-5 w-5" />, t: "Core enterprise & regulated systems", d: "Long-lived business systems with compliance, reliability and audit needs - the kind that must stay correct and maintainable for a decade, not a quarter." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Legacy Java modernization", d: "Upgrading Java 8 or 11 to Java 21 or 25 LTS, and migrating legacy Java EE or older Spring to modern Spring Boot - incrementally, with the Strangler Fig pattern, not a risky big-bang rewrite." },
  { icon: <IconClock className="h-5 w-5" />, t: "Integrations & batch", d: "Enterprise integrations, message-driven workflows and large restartable batch jobs with Spring Integration and Spring Batch - the unglamorous plumbing large systems run on." },
];

export function JavaScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build with Java and Spring Boot"
            title="The systems that have to be correct"
            sub="Java and Spring Boot earn their keep on large, transaction-heavy, long-lived systems where strict typing and JVM performance pay off. A typical engagement is one of these:"
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

        {/* Front-end pairing + Kotlin boundary. Spring Boot is an API/service backend, so
            it pairs with a separate front end; and Kotlin here means the backend, not mobile. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The front end, and where Kotlin fits
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A Spring Boot backend usually exposes a clean REST or GraphQL API and pairs with a
              separate front end -{" "}
              <Link href="/technologies/react" className="font-medium text-brand-500 hover:text-brand-600">
                React
              </Link>
              ,{" "}
              <Link href="/technologies/angular" className="font-medium text-brand-500 hover:text-brand-600">
                Angular
              </Link>{" "}
              or{" "}
              <Link href="/technologies/nextjs" className="font-medium text-brand-500 hover:text-brand-600">
                Next.js
              </Link>{" "}
              - rather than rendering its own UI (it can serve HTML via Thymeleaf, but usually
              doesn&apos;t), and we build both sides. And Kotlin is a first-class JVM language for
              Spring Boot backends, so we build in it where a team prefers it - that&apos;s Kotlin on
              the server. Native Android with Kotlin is a different job, and it lives on our{" "}
              <Link href="/services/mobile-app-development" className="font-medium text-brand-500 hover:text-brand-600">
                mobile app development
              </Link>{" "}
              page.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
