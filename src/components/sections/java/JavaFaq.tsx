import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD - the AEO goldmine (Java vs Node/Python/
// .NET/Go, Spring Boot vs plain Java, is-Java-relevant, virtual threads, microservices,
// Kotlin, migration, cost). Every answer is 2026-correct (Java 25 LTS, Spring Boot 4, virtual
// threads, GraalVM), honest, and routes intent. CONSISTENCY LOCK: Q3/Q4 use the EXACT wording
// the Node/Python FAQs published ("Java with Spring Boot is the safer pick for large,
// transaction-heavy enterprise systems..."). Industry-scale facts are platform evidence, never
// our clients, no brand names, no fabricated adoption stats. Cost byte-identical to tiers.
const faqs = [
  {
    question: "What is Spring Boot used for?",
    answer:
      "Spring Boot is the most widely used framework for building backends on Java (and Kotlin) - REST and gRPC APIs, microservices, and large business systems. It layers auto-configuration, an embedded server and production defaults on top of the Spring ecosystem, so teams ship services fast without wiring everything by hand. It is the default choice for enterprise Java backends, and on Spring Boot 4 it targets modern Java with virtual threads and GraalVM native images.",
  },
  {
    question: "Is Java good for backend development?",
    answer:
      "Yes - Java is one of the most proven backend languages there is, and it runs a large share of the world's banking, insurance and enterprise systems. Its strengths are exactly what heavy backends need: strict static typing that catches errors at compile time, mature multithreading, a deep, enterprise-hardened library ecosystem, and long-term stability. With Spring Boot on top, it is a strong default when the workload is large, transaction-heavy and long-lived.",
  },
  {
    question: "Java vs Node.js - which is better?",
    answer:
      "Java with Spring Boot is the safer pick for large, transaction-heavy enterprise systems with strict typing and long-lived teams. Node.js is faster to build with, lighter to run, and better for real-time and API-gateway work. Neither is better in the abstract - it depends on your workload and your team, and we build in both.",
  },
  {
    question: "Java vs Python - which should I choose?",
    answer:
      "Java with Spring Boot is the safer pick for large, transaction-heavy enterprise systems with strict static typing and long-lived teams. Python is faster to build with, far stronger for data and machine learning, and more readable for evolving products. Neither wins in the abstract - it depends on your workload and team, and we build in both.",
  },
  {
    question: "Java vs .NET (C#) for backend?",
    answer:
      "Both are mature, statically typed, enterprise-grade platforms, and honestly the deciding factor is usually your team and your ecosystem, not raw capability. Java on the JVM has the broadest cross-platform reach, the largest open-source middleware ecosystem, and Spring Boot as a de-facto standard; .NET is an excellent choice for teams already invested in the Microsoft and Azure stack. We build Java and Spring Boot; if your organization is committed to .NET, we will tell you that plainly rather than talk you onto our stack.",
  },
  {
    question: "Java vs Go for backend?",
    answer:
      "Go compiles to a single small binary with fast startup and low memory, which makes it excellent for infrastructure, high-throughput networked services and cloud-native tooling. Java brings a richer ecosystem, mature frameworks like Spring Boot, and a stronger fit for complex business logic and large, long-lived enterprise systems - and virtual threads plus GraalVM native images have closed much of the old startup and footprint gap. For heavy business systems where a JVM team and the Spring ecosystem matter, Java is usually the better long-term fit.",
  },
  {
    question: "Spring Boot vs plain Java or plain Spring?",
    answer:
      "Plain Java gives you the language and standard library but no web framework - you would assemble everything yourself. Spring is the broader application framework; Spring Boot is the opinionated layer on top that adds auto-configuration, an embedded server and production-ready defaults, so you can ship a service in minutes instead of days. For almost every backend we build, Spring Boot on modern Java is the right starting point.",
  },
  {
    question: "Is Java still relevant or worth it in 2026?",
    answer:
      "Yes, and it is more modern than its reputation suggests. Java 25 LTS (September 2025, supported into the 2030s) builds on a decade of language modernization - records, sealed classes and pattern matching cut the old verbosity - and virtual threads from Project Loom plus GraalVM native images address the historical JVM concurrency and startup-and-memory trade-offs. It still runs an enormous share of enterprise and banking systems, Spring Boot remains the dominant backend framework, and the talent pool is large. The honest trade-offs remain - Java is more ceremonious than Python or Node for small services, and a warm JVM uses more memory than a Go binary - but for large, transaction-heavy systems those are usually acceptable, and virtual threads plus native images narrow them further.",
  },
  {
    question: "What are virtual threads in Java?",
    answer:
      "Virtual threads (Project Loom) are lightweight threads managed by the JVM rather than the operating system, so a Spring Boot service can handle very large numbers of concurrent requests with simple blocking code instead of complex async plumbing. They reached production in Java 21 and matured in Java 25, which fixed the earlier thread-pinning limitation. In practice they give Java much of Node's high-concurrency I/O benefit while keeping Java's strict typing and mature tooling - you turn them on in Spring Boot with a single property.",
  },
  {
    question: "Is Spring Boot good for microservices?",
    answer:
      "Yes - Spring Boot is the standard for Java microservices, and Spring Cloud adds the surrounding pieces: service discovery, configuration, resilience and API gateways. It also fits both directions of the common 2026 pattern - building new microservices, and breaking a legacy monolith apart incrementally using the Strangler Fig approach. We will also tell you when a modular monolith is the smarter, cheaper choice, because microservices are not free.",
  },
  {
    question: "Kotlin or Java for Spring Boot?",
    answer:
      "Both are first-class on Spring Boot - Spring Boot 4 shipped next-level Kotlin support - so this is a team-and-preference call, not a capability gap. Kotlin is more concise and adds null safety and coroutines, which many teams prefer for new services; Java has the larger talent pool and is the safer default for a big existing Java codebase. We build Spring Boot in either. Kotlin for native Android is a different job - that lives on our mobile app development page.",
  },
  {
    question: "Can you migrate our legacy Java, or move Java 8 to Java 21 or 25?",
    answer:
      "Yes - upgrading old Java (Java 8 or 11) to Java 21 or 25 LTS and migrating legacy Java EE or older Spring to modern Spring Boot is core work, and one of the highest-value things you can do in 2026. We do it incrementally and safely, typically with the Strangler Fig pattern so the old and new run side by side until each piece is proven, rather than a risky big-bang rewrite. Because scope varies a lot, we usually start a migration with a paid Discovery Sprint to map the system and de-risk the plan before quoting the build.",
  },
  {
    question: "Does this website run on Java?",
    answer:
      "No - and we won't pretend it does. This site is a static Next.js and React build, and even the build toolchain runs on Node, not the JVM, so Java and Spring Boot power none of what you're reading. We could have added a Powered-by-Spring-Boot badge in minutes; we didn't, because that's the moment you could no longer trust anything else on the page. The proof here is the engineering depth of this page and the standard Spring Boot code, database and IP you own outright.",
  },
  {
    question: "How much does Java or Spring Boot development cost?",
    answer:
      "We publish fixed tiers instead of a quote wall: Starter from $300, Launch Sprint from $1,500, Growth Site from $4,000, Commerce Sprint from $7,000, and an MVP Sprint from $12,000 for a web app with a real backend. Most serious Java and Spring Boot work is a bespoke system, so the honest path is a custom-software Discovery Sprint from $1,000 that scopes the architecture and gives you a fixed price before any build starts. Either way the pricing is published up front - no quote wall.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes - you own 100% of the code, IP and data outright. We build on standard, open-source Spring Boot with no proprietary framework and no lock-in, so any competent Java team can maintain it after us. Intention InfoService has been a registered company since 2016, and ownership is written into the engagement.",
  },
];

export function JavaFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Java and Spring Boot, answered" />
        </Reveal>
        <Reveal className="mt-9">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-foreground">
                  {f.question}
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-brand-500 transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
