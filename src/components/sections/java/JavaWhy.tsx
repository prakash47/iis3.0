import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck, IconBolt, IconLayers, IconGauge, IconTrendingUp, IconCode } from "@/components/icons";

// Fit-framed benefits + the "Is Java still worth it in 2026?" myth-buster (the #1 buyer
// objection - Java framed as "old/verbose/enterprise-dinosaur") answered honestly WITH the
// real trade-off concession + the industry-scale fact stated as EVIDENCE ABOUT THE
// PLATFORM (never our clients, no brand names) + the "when NOT to use Java" cross-link
// engine. Consistency-locked: strict typing, mature multithreading (MODERNIZED by virtual
// threads, not "repaired"), JVM-native, long-lived teams. Java is NOT called "our default".
const pillars = [
  { icon: <IconCheck className="h-5 w-5" />, t: "Strict typing catches errors early", d: "Static, strict-by-default typing - now with records, sealed types and exhaustive pattern matching - means the compiler catches a whole class of errors before runtime. On a system that must stay correct for years, that's the point, not ceremony." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Mature multithreading, modernized", d: "Java's multithreading is deep and proven, and virtual threads (Project Loom) now let a Spring Boot service carry enormous concurrent I/O in plain blocking code - the throughput teams once needed reactive stacks for, without the complexity." },
  { icon: <IconLayers className="h-5 w-5" />, t: "The deepest enterprise ecosystem", d: "Spring, Hibernate, Kafka and the whole Maven-hardened middleware stack - decades of battle-tested libraries for exactly the transactional, integration-heavy work large systems need." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Built for load and longevity", d: "The JVM is one of the most optimized runtimes there is, and Java is engineered for systems that run under real load and stay maintainable for a decade, not a quarter." },
  { icon: <IconTrendingUp className="h-5 w-5" />, t: "A huge, long-lived talent pool", d: "Java is one of the largest, most stable talent pools in software, so what we build is a safe, well-supported bet a long-lived team can maintain long after we hand it over." },
  { icon: <IconCode className="h-5 w-5" />, t: "Modern, not verbose", d: "2026 Java reads far closer to Kotlin than to Java 8 - records, sealed classes, pattern matching, text blocks and var have cut the boilerplate that earned the old reputation." },
];

export function JavaWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        {/* The myth-buster - answered with real facts, an honest trade-off concession,
            and the industry-scale fact framed as platform evidence, not our clients. */}
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Is Java still worth it in 2026? <span className="gradient-text">Yes - and it&apos;s not the Java you remember.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                The &quot;old, verbose, enterprise-dinosaur&quot; reputation is real, and it comes from
                real history: pre-modern Java was ceremony-heavy, and the JVM&apos;s startup and memory
                footprint were genuine costs for small services. Pretending otherwise would be
                dishonest. What changed is a lot. Java 25 LTS (September 2025) is a modern language -
                records, sealed types and pattern matching cut the boilerplate. Virtual threads,
                finalized in Java 21, let a Spring Boot service handle enormous concurrent I/O in
                plain, readable code, so much of the reason teams once reached for complex reactive
                stacks is simply gone. GraalVM native images compile a Spring Boot app to a
                fast-starting, low-memory binary, answering the old serverless weak spots. And Spring
                Boot 4 (November 2025) keeps the dominant enterprise framework firmly current. Java
                runs a large share of the world&apos;s banking, payments and enterprise systems, which
                is evidence the platform scales, not a claim about who we&apos;ve worked with. The
                honest limit: Java isn&apos;t the fastest way to ship a small app, and it isn&apos;t
                where the data and ML ecosystem lives - and where the load is heavy and the system
                lives for a decade, it&apos;s one of the safest 2026 picks.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why Java and Spring Boot"
            title="Why teams build enterprise backends on Java"
            sub="Java and Spring Boot are what we reach for when a system is large, transaction-heavy and has to stay correct under load for years. Here's what it buys you - and, honestly, when it's the wrong tool."
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

        {/* The anti-recommendation - the cross-link engine across the whole backend family.
            Java can be overkill; talking a buyer OUT of it is the proof the recommendation is honest. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When Java isn&apos;t the right call
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              Java and Spring Boot earn their keep on large, transaction-heavy, long-lived systems.
              Plenty of projects aren&apos;t that, and forcing them onto Java is cost you don&apos;t
              need. For a small CRUD app, MVP or content-and-admin platform you want live fast, a
              batteries-included framework ships sooner - that&apos;s{" "}
              <Link href="/technologies/django" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Django
              </Link>{" "}
              or{" "}
              <Link href="/technologies/laravel" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Laravel
              </Link>
              . For a data, analytics or ML backend, the gravity is in{" "}
              <Link href="/technologies/python" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Python
              </Link>
              . For a real-time-first product - chat, presence, streaming -{" "}
              <Link href="/technologies/nodejs" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                Node.js
              </Link>{" "}
              on the event loop fits more naturally (though when the concurrency is heavy and
              JVM-native, virtual threads make Java a strong answer too). Not sure, or the backend is
              the product?{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                We&apos;ll pick the right stack
              </Link>{" "}
              and scope it properly.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
