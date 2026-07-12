import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCpu, IconServer, IconChat, IconLock, IconDatabase, IconClock, IconRefresh, IconCode, IconEye, IconGauge, IconShield, IconLayers } from "@/components/icons";

// The E-E-A-T CENTREPIECE and the main proof substitute (there is no live own-site
// Node backend to inspect). Correct, current 2026 Node vocabulary - Node 24/26,
// native type-stripping, node:test, worker threads, Fastify/NestJS/Hono, Prisma/
// Drizzle, BullMQ, Zod. Dated framing (callbacks, Express-4-as-latest, "multi-threaded",
// "runs TypeScript with full type-checking") would instantly mark us as amateur.
const caps = [
  { icon: <IconCpu className="h-5 w-5" />, t: "The event loop, and its limits", d: "Non-blocking, single-threaded I/O for huge concurrency - and the judgment to know CPU-bound work belongs on worker threads or a different runtime, not the main thread. Knowing where that line is is the clearest sign of Node seniority." },
  { icon: <IconServer className="h-5 w-5" />, t: "API design: REST, GraphQL, tRPC", d: "Versioned REST for public and partner surfaces, GraphQL when clients shape their own queries over a rich graph, tRPC for end-to-end type safety when both ends are TypeScript. The skill is choosing per boundary, not defaulting." },
  { icon: <IconChat className="h-5 w-5" />, t: "Real-time systems", d: "Bidirectional real-time over WebSockets and Socket.IO, scaled horizontally with a Redis adapter, plus Server-Sent Events for one-way streams like notifications and token-by-token AI output. Reconnection and backpressure handled, not hand-waved." },
  { icon: <IconLock className="h-5 w-5" />, t: "Auth done properly", d: "Stateless JWT with rotating refresh tokens, server-side sessions when revocation must be instant, OAuth 2.0 and OpenID Connect for SSO, argon2 or bcrypt hashing - and a clean split between authentication and role- or attribute-based authorization." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "The data layer", d: "Typed access with Prisma or Drizzle, PostgreSQL as the default relational store, MongoDB where a document model truly fits, Redis for cache, sessions and rate limits. Real competence is migrations, indexing, pooling and killing N+1 queries." },
  { icon: <IconClock className="h-5 w-5" />, t: "Background jobs and queues", d: "Slow or flaky work - email, PDFs, third-party calls, webhooks - moved off the request path with BullMQ on Redis: retries with backoff, scheduled and repeatable jobs, concurrency limits and dead-letter handling, on a separate worker process." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Streaming and file handling", d: "Large uploads, exports and pipelines processed without loading everything into memory, using Node streams and first-class Web Streams with .toWeb() and .fromWeb() interop - with correct backpressure so one big file can't exhaust the server." },
  { icon: <IconCode className="h-5 w-5" />, t: "TypeScript-first", d: "Types from the database schema to the API contract to the client. In 2026 that includes Node's native type-stripping for a build-free run path - paired with a real tsc gate in CI, because Node strips types, it does not check them." },
  { icon: <IconEye className="h-5 w-5" />, t: "Testing at every level", d: "Unit and integration tests on the built-in node:test runner or Vitest, HTTP assertions with Supertest, end-to-end coverage with Playwright, exercised against real database containers rather than over-mocked - fast enough to run on every commit." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Observability and logging", d: "Structured JSON logs with pino, distributed tracing and metrics via OpenTelemetry, health and readiness endpoints, error tracking. When something breaks at 2am, minutes-versus-hours comes down to whether the service was built to be observed." },
  { icon: <IconShield className="h-5 w-5" />, t: "Security to an OWASP standard", d: "Input validation with Zod at every trust boundary, rate limiting, security headers with Helmet, correct CORS, secrets kept out of code, dependency and supply-chain auditing, and Node's stable permission model where it fits. Validate at the edge, never trust the client." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Deployment and architecture", d: "Containerised with multi-stage, non-root Docker images, or shipped as edge or serverless functions, with zero-downtime CI/CD. And the honest call itself: a well-structured modular monolith first, microservices only when a real scaling or team-boundary reason appears." },
];

export function NodejsCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we engineer Node.js"
            title="Node the 2026 way, not the 2019 way"
            sub="On a backend, the fastest way to tell a real Node team from a reseller is the vocabulary. Here's the depth we bring - current to Node 24 LTS and Node 26, not the callbacks-and-Express-4 Node of years past."
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

        {/* The senior-opinion line - a distinct competence signal, framework choice by fit */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Our default backend architecture:</span>{" "}
              a well-structured modular monolith, TypeScript typed end to end, on Fastify for a fast
              focused API or NestJS when a larger team needs strong conventions - and Hono when the
              work belongs at the edge. PostgreSQL through Prisma or Drizzle, Redis for cache and
              BullMQ queues, Zod validation at every trust boundary, pino and OpenTelemetry from the
              first commit, containerised and deployed on a current LTS line. We split into
              microservices only when a real reason appears - premature microservices buy
              distributed-systems pain before you have the problem they solve.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
