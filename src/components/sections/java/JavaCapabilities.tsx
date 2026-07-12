import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconServer, IconDatabase, IconLayout, IconBolt, IconLayers, IconLock, IconChat, IconEye, IconTrendingUp, IconCpu, IconSpark, IconCheck } from "@/components/icons";

// The E-E-A-T CENTREPIECE and main proof substitute (there is NO own-site Java to
// inspect - this is the hardest trust page, so depth carries it). Current 2026 vocabulary -
// Java 25 LTS, Spring Boot 4 / Spring Framework 7, virtual threads (Loom), GraalVM native,
// records/sealed/pattern-matching, Spring Data/Security/Cloud, JUnit 5/Testcontainers.
// Dated framing (Java 8, XML Spring config, J2EE, "Spring = Spring Boot", "Java can't do
// concurrency") would detonate the proof. Virtual threads = mature multithreading MODERNIZED.
const caps = [
  { icon: <IconServer className="h-5 w-5" />, t: "Spring Boot core, used properly", d: "Auto-configuration, starters and convention-over-configuration, with Actuator health, metrics and readiness/liveness probes wired from day one. Annotation and Java config only, typed configuration properties, profiles per environment - never the XML Spring of a decade ago." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "The data layer", d: "Spring Data JPA and Hibernate for the domain, jOOQ or plain SQL where you need real query control, and Flyway or Liquibase for versioned migrations over PostgreSQL. The senior work is transaction boundaries, fetch strategies, HikariCP pooling and killing N+1 queries." },
  { icon: <IconLayout className="h-5 w-5" />, t: "REST and API design", d: "Spring Web MVC endpoints with Bean Validation at the boundary, OpenAPI contracts generated from the code, consistent ProblemDetail (RFC 9457) errors, pagination and first-class API versioning - native in Spring Boot 4." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Virtual threads & concurrency", d: "Blocking-style Spring MVC on virtual threads (Loom, Java 21) for massive I/O concurrency without the reactive tax, enabled and tuned correctly, with WebFlux and Reactor reserved for genuine streaming and backpressure. We give you the honest call on which model fits." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Microservices, and the modular monolith first", d: "Spring Cloud when a system genuinely needs it - config, discovery, Spring Cloud Gateway, Resilience4j circuit breakers. The judgment we lead with: start with a well-structured modular monolith and split to services only when scale or team boundaries justify the distributed-systems tax." },
  { icon: <IconLock className="h-5 w-5" />, t: "Security", d: "Spring Security done to its strengths: OAuth2 and OIDC, JWT or opaque-token resource servers, session vs stateless made deliberately, method-level security, CSRF where it applies, and secure password hashing. Defaults on by design, not bolted on late." },
  { icon: <IconChat className="h-5 w-5" />, t: "Messaging and events", d: "Event-driven and asynchronous work with Apache Kafka or RabbitMQ, Spring Integration for enterprise integration patterns, and Spring Batch for large, restartable, chunked jobs. Idempotency and dead-letter handling thought through, not fire-and-forget." },
  { icon: <IconEye className="h-5 w-5" />, t: "Testing, a genuine enterprise strength", d: "JUnit 5, Spring Boot Test slices, MockMvc for the web layer, and Testcontainers so integration tests run against a real Postgres, Kafka or Redis in Docker instead of over-mocked fakes. Fast enough to gate every commit - this is where Java's tooling maturity shows." },
  { icon: <IconTrendingUp className="h-5 w-5" />, t: "Observability", d: "Micrometer metrics through Actuator to Prometheus, Micrometer Tracing with OpenTelemetry for distributed traces, and structured logging with correlation IDs. You can see latency, errors and saturation in production, not guess." },
  { icon: <IconCpu className="h-5 w-5" />, t: "Build and deploy", d: "Gradle or Maven, reproducible multi-stage non-root Docker images, Kubernetes with proper probes and resource limits, GraalVM native images where startup and memory matter, and real JVM tuning where sustained throughput does." },
  { icon: <IconSpark className="h-5 w-5" />, t: "Kotlin on Spring Boot, first-class", d: "Spring Boot supports Kotlin as a first-class JVM language - null-safety, data classes, coroutines, concise DSLs - and we build in it when a team prefers it. (Android and Kotlin native mobile is a different service; here Kotlin means the backend.)" },
  { icon: <IconCheck className="h-5 w-5" />, t: "Strong typing and correctness as a feature", d: "Static, strict-by-default typing, now with records, sealed types and exhaustive pattern matching, plus JSpecify null-safety in Spring Framework 7. For large, long-lived, transaction-heavy systems, the compiler catching a whole class of errors before runtime is the point." },
];

export function JavaCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we engineer Java and Spring Boot"
            title="Java the 2026 way, not the Java 8 way"
            sub="There's no live Java running this static Next.js site to point at, so the proof is the depth. This is current to Java 25 LTS and Spring Boot 4 on Spring Framework 7 - virtual threads, records, GraalVM native images - not the XML-config, J2EE, hand-rolled-thread-pool Java its reputation is stuck on."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caps.map((c) => (
            <div key={c.t} className="card flex flex-col p-5">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                {c.icon}
              </span>
              <h3 className="mt-4 font-display text-sm font-semibold text-foreground">{c.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </Reveal>

        {/* The senior-opinion default-architecture line */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Our default Spring Boot architecture:</span>{" "}
              Java 21 or 25 LTS on Spring Boot 3.5 or 4, structured as a modular monolith by default -
              clean module boundaries first, microservices only when scale or team size truly justifies
              them. Spring MVC on virtual threads for simple, high-concurrency I/O without the reactive
              tax; Spring Data JPA over PostgreSQL with Flyway migrations and jOOQ or SQL where query
              control matters; Spring Security with OAuth2 and OIDC; JUnit 5 with Testcontainers from
              the first commit so tests run against real infrastructure; Actuator, Micrometer and
              OpenTelemetry for observability; Gradle builds into layered, non-root Docker images on
              Kubernetes; GraalVM native images where startup and memory dominate. Kotlin when the team
              prefers it. We reach for WebFlux only when streaming and backpressure are the real
              requirement, and we&apos;ll point you to Django, Python or Node when the JVM isn&apos;t the
              honest fit.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
