import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The honest-proof section - Django is the furthest honest end (tied with Python/Laravel):
// Django/Python power NOTHING here (site is Next.js/React SSG; build runs on Node, not
// Python). Angular/Python/Laravel model, NOT Node's build wedge. Card 5 carries the
// Django-SPECIFIC honesty: unlike Laravel there is NO official Django partner program or
// certification - so we do NOT say "we're not a Django Partner" (that would imply one
// exists); we say no such program exists. Card 1 promotes schema/data (Django crown jewels).
// NO borrowed famous-user logos, NO fabricated counts/metrics/case studies.
const riskReversal = [
  { t: "You own 100% of the code, schema and data", d: "A standard Django project in your repository, deployed to your cloud - your AWS, GCP, Azure or a host you choose, your PostgreSQL, your domain. The source, the models, the migrations, the admin and the data live in your database and your repo, yours from day one. The schema and data are never held hostage on our side." },
  { t: "No lock-in, by construction", d: "Standard Django and mainstream open source - the Django ORM, DRF, PostgreSQL, Celery and Redis, Wagtail where it fits - in the conventional Django project layout any competent Django team can read. We never wrap your app in an in-house abstraction only we understand." },
  { t: "Senior people, direct", d: "You talk to the engineers who write your Django, design your models and shape your admin - no account-manager layer, no offshore hand-off, no juniors learning the ORM on your budget." },
  { t: "Transparent, published fixed pricing", d: "The same published tiers as the rest of the site, no metered surprises and no quote wall. A Django web app or content platform lands on the upper web tiers; a genuinely bespoke system, SaaS or API enters through a fixed-price Discovery Sprint that ends in a written scope and a fixed build quote - never a mystery hourly rate." },
  { t: "Security-minded, honestly", d: "We build on Django's own strong defaults - CSRF, the ORM's parameterised queries against SQL injection, template auto-escaping against XSS, clickjacking middleware, hashed auth and, in Django 6.0, native Content Security Policy - plus OWASP practices. We hold no SOC 2 report and no ISO 27001 certification, and there is no HIPAA certification for anyone to hold. There is no official Django partner program or certification to hold either, so we won't imply one exists. If your project legally needs a vendor who carries a formal attestation, we'll say so plainly." },
  { t: "A registered company since 2016", d: "Intention InfoService is a real, incorporated company, small and senior on purpose - so a Django codebase stays architecturally consistent from the first migration to deployment instead of passing between rotating hands." },
];

export function DjangoProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We won&apos;t pretend this page <span className="gradient-text">is Django.</span></>}
            sub="Our React and Next.js pages can say 'this page is the technology, inspect it.' This one can't, and we won't fake it. Our site is a static Next.js and React build, and even the toolchain that compiles it runs on Node, not Python - so Django and Python power none of what you're reading: not the runtime, not the build, not a single view or query. Django is exactly the framework that could plausibly render a page like this, which is why bolting a 'Built with Django' badge onto one that isn't would be so easy - and so disqualifying. We didn't, because the moment we fake that is the moment nothing else here is trustworthy."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The depth on this page is the demo
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The capability detail above is written by people who actually ship modern Django -
              typed models and the ORM, class-based and first-class async views, the admin as a real
              product surface, DRF for APIs, Celery on Redis for background work, Channels for
              WebSockets, Wagtail where content needs an editorial platform. It&apos;s current to
              Django 5.2 LTS and Django 6.0: the built-in background-tasks framework, native Content
              Security Policy, template partials, and async promoted to a first-class path. Dated or
              hand-wavy Django vocabulary is how you spot an amateur on a Django page. Ours is current,
              and that competence, stated as capability and never as a result we invented, is the
              proof that actually travels.
            </p>
          </div>
        </Reveal>

        <Reveal group className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riskReversal.map((r) => (
            <div key={r.t} className="card p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">{r.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              We ship web applications built from the same parts a Django app is - honestly labelled
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production work is real web projects - an e-commerce store and a corporate site -
              built from the exact primitives a Django application is made of: relational data models,
              an authenticated accounts and roles layer, a catalog-and-orders admin surface, a checkout
              and payments flow, content and product APIs, and third-party integrations that have to
              not break.{" "}
              <Link href="/work" className="font-medium text-brand-500 hover:text-brand-600">
                See our work
              </Link>
              , described honestly - and never relabelled as Django or Python projects, because they
              weren&apos;t, and we won&apos;t dress a web build up as something it wasn&apos;t. What they
              prove is one true thing: this team ships working software that models real data, handles
              auth, payments and an admin, and holds up in production. The Django-specific proof
              isn&apos;t a borrowed case study or a famous logo - it&apos;s the depth on this page and the
              standard-Django code, migrations, admin and database you&apos;ll own outright.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
