import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconServer, IconCheck, IconDatabase, IconBolt, IconGrid, IconCpu, IconClock, IconRefresh, IconEye, IconSpark, IconLayers, IconShield } from "@/components/icons";

// The E-E-A-T CENTREPIECE and main proof substitute (there is NO own-site Python to
// inspect). Correct, current 2026 vocabulary - Python 3.14, free-threading opt-in,
// FastAPI, Pydantic v2, SQLAlchemy 2.0, uv/Ruff, mypy, Polars. Dated framing (Python 2,
// print statement, "no types", "Python can't do concurrency", pip-only) marks an amateur.
const caps = [
  { icon: <IconServer className="h-5 w-5" />, t: "APIs with FastAPI + Pydantic v2", d: "Typed, async HTTP APIs where the models, validation and OpenAPI docs all come from one set of Pydantic v2 models (whose core is compiled in Rust, so it's fast). The contract is the code, not a stale doc." },
  { icon: <IconCheck className="h-5 w-5" />, t: "Type hints, checked - not decorative", d: "Modern Python is no longer just dynamic. We annotate across the codebase and gate CI with mypy or pyright, so a wrong shape is caught before runtime - far closer to a statically checked language than its reputation." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "The data layer", d: "SQLAlchemy 2.0 (the modern typed, async-capable API), Alembic for versioned migrations, PostgreSQL as the default store. Real competence here is indexing, pooling, transaction boundaries and killing N+1 queries, not just calling an ORM." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Async, and the GIL stated honestly", d: "asyncio on ASGI (uvicorn/gunicorn) for high-concurrency I/O-bound work. And the honest line: the default interpreter's GIL means CPU-bound parallelism needs multiprocessing, a C-extension, or the new opt-in free-threaded build - not just more threads." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Data engineering & pipelines", d: "ETL and batch work with pandas, and Polars (Rust-backed, often several times faster and lighter) for the heavy transforms, orchestrated with Airflow or Prefect. Idempotent, observable, tested pipelines - not notebooks in production." },
  { icon: <IconCpu className="h-5 w-5" />, t: "ML integration - honestly scoped", d: "Loading and serving models with scikit-learn, PyTorch and Hugging Face - inference endpoints, batching, GPU-vs-CPU serving, wiring results into your product. That's integration engineering; a productized AI feature is our AI development service, not here." },
  { icon: <IconClock className="h-5 w-5" />, t: "Background jobs & queues", d: "Slow or flaky work - emails, reports, third-party calls, scheduled tasks, pipeline steps - moved off the request path onto Celery or the lighter RQ with Redis: retries with backoff, periodic jobs, concurrency limits, separate workers." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Automation & scripting", d: "Scraping, file and data wrangling, internal CLIs, glue between systems, scheduled operational scripts. We build these to be reliable and re-runnable, because a small script has a way of quietly becoming load-bearing." },
  { icon: <IconEye className="h-5 w-5" />, t: "Testing at every level", d: "pytest with fixtures and parametrization, coverage gates, and integration tests exercised against real database containers rather than over-mocked. Fast enough to run on every commit, so a green suite actually means something." },
  { icon: <IconSpark className="h-5 w-5" />, t: "Modern tooling", d: "uv (the Rust-based, dramatically faster package and environment manager that became the 2026 default) or Poetry for dependencies, and Ruff for lint and format in one pass. Reproducible, locked environments, not works-on-my-machine." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Packaging & deployment", d: "Isolated virtual environments, multi-stage non-root Docker images, and deploys to containers or serverless with a clean CI/CD path. Pinned, lockfile-driven builds, so what you test is what you ship." },
  { icon: <IconShield className="h-5 w-5" />, t: "Security & supply-chain hygiene", d: "Validation at every trust boundary with Pydantic, parameterised queries, secrets kept out of code, least-privilege config, and dependency auditing - the pip and PyPI ecosystem is a real attack surface, so lockfiles and scanning matter." },
];

export function PythonCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we engineer Python"
            title="Python the 2026 way, not the 2015 way"
            sub="There's no live Python running this static site to point at, so the proof is the depth. This is current to Python 3.14 - not the print-statement, requirements-txt-and-pray Python of years past."
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

        {/* The ML-honesty note - the biggest fabrication risk on this page, defused
            in the open. Fires the ai-development boundary cross-link. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              We do ML engineering, not ML theatre
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              That means the real, unglamorous work: data pipelines, feature engineering, evaluation
              harnesses, model serving behind a typed API, and the MLOps around it. What it does not
              mean is an invented accuracy number, a borrowed research reputation, or a benchmark we
              can&apos;t reproduce on your data - because accuracy is a property of your data, not of
              us, and any figure quoted before we&apos;ve seen it would be meaningless. If what you
              actually want is an AI product - a chatbot on your content, a RAG assistant, an AI
              feature in your app - that&apos;s a scoped service on our{" "}
              <Link href="/services/ai-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                AI development
              </Link>{" "}
              page. This page covers Python and the engineering under it; that page is the AI product on top.
            </p>
          </div>
        </Reveal>

        {/* The senior-opinion default-architecture line */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Our default Python architecture:</span>{" "}
              FastAPI with Pydantic v2 for a typed async API, SQLAlchemy 2.0 and Alembic over
              PostgreSQL for data, type hints checked with mypy or pyright, uv and Ruff for a fast
              reproducible toolchain, pytest from the first commit, containerised with Docker on a
              current supported Python. We reach for Django when a build genuinely wants
              batteries-included web and admin, and add Celery on Redis when work needs to leave the
              request path. We stay current on the free-threaded build and the JIT - and we don&apos;t
              bill either as production performance before it has earned it.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
