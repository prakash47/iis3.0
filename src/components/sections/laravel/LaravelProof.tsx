import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The honest-proof section - Laravel is the furthest honest end of the six spokes,
// tied with Python: PHP is a different LANGUAGE and RUNTIME from anything here. Nothing
// is Laravel or PHP - not runtime (Next.js/React SSG), not build (Node), not even the
// package manager (npm, not Composer). So this is modelled on ANGULAR/PYTHON, NOT Node's
// build-toolchain wedge. Card 5 carries the Laravel-only honesty: NO Laravel Partner
// status (a real, public, checkable program we're not in) and NO certification claim.
const riskReversal = [
  { t: "You own 100% of the code, IP and data", d: "A standard Laravel application in your repository, deployed to your cloud - Laravel Cloud, Forge on your own AWS or DigitalOcean, or any host you like. The source, the migrations, the schema and the data live in your database and your domain, yours from day one. Nothing is held hostage on our side." },
  { t: "No lock-in, by construction", d: "Standard Laravel and mainstream open source - Eloquent, Blade with Livewire or an Inertia front end, MySQL or PostgreSQL, Composer - in the conventional Laravel skeleton any competent Laravel team can read. We never wrap your app in an in-house framework only we understand." },
  { t: "Senior people, direct", d: "You talk to the engineers who write your Laravel and design your schema - no account-manager layer, no offshore hand-off, no juniors learning Eloquent on your budget." },
  { t: "Transparent, published fixed pricing", d: "The same published tiers as the rest of the site, no metered surprises and no quote wall. A Laravel web app or SaaS lands on the upper web tiers; a genuinely bespoke system or API enters through a fixed-price Discovery Sprint that ends in a written scope and a fixed build quote - never a mystery hourly rate." },
  { t: "Security-minded, honestly", d: "We build on Laravel's own protections - CSRF, Eloquent's parameter binding against SQL injection, Blade's auto-escaping, hashed auth, signed URLs, rate limiting - plus OWASP practices. We hold no SOC 2 report and no ISO 27001 certification, and there is no HIPAA certification for anyone to hold; and we are not an official Laravel Partner and hold no Laravel certification - we won't imply either. If your project legally needs a vendor who carries a formal attestation, we'll say so plainly." },
  { t: "A registered company since 2016", d: "Intention InfoService is a real, incorporated company, small and senior on purpose - so a Laravel codebase stays architecturally consistent from migration to deployment instead of passing between rotating hands." },
];

export function LaravelProof() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We won&apos;t pretend this page <span className="gradient-text">is Laravel.</span></>}
            sub="Our React and Next.js pages can say 'this page is the technology, inspect it.' This one can't, and we won't fake it. Our site is a static Next.js and React build, and even the toolchain that compiles it runs on Node, not PHP - so Laravel and PHP power none of what you're reading: not the runtime, not the build, not a single package. Bolting a 'Powered by Laravel' badge onto a page that isn't one would take five minutes, and it would cost us the exact thing this whole site is built to earn."
          />
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              The depth on this page is the demo
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              The capability detail above is written by people who actually ship modern Laravel -
              Eloquent and typed models, Blade with Livewire or an Inertia front end, queues and
              Horizon, Reverb for realtime, Pest for testing, deployed on Laravel Cloud or Forge.
              It&apos;s current to Laravel 13 and PHP 8.4 and 8.5: the first-party AI SDK, JSON:API
              resources, native vector search, PHP attributes for configuration. Dated or hand-wavy
              PHP vocabulary is how you spot an amateur on a Laravel page. Ours is current, and that
              competence, stated as capability and never as a result we invented, is the proof that
              actually travels.
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
              We ship web applications built from the same parts - honestly labelled
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Our production work is real, custom web builds - a professional-training platform
              rebuild and a financial-services site - built from the exact primitives a Laravel
              application is made of: relational data models, a large searchable and filterable
              catalog, enquiry and enrolment funnels, a real-time affordability calculator, an admin
              surface a non-technical team runs itself, and third-party integrations that have to not
              break.{" "}
              <Link href="/work" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                See our work
              </Link>
              , described honestly - and never relabelled as Laravel or PHP projects, because they
              weren&apos;t, and we won&apos;t dress a web build up as something it wasn&apos;t. What they
              prove is one true thing: this team ships working software that models real data, runs
              filterable catalogs and enquiry funnels, and holds up in production. The Laravel-specific proof isn&apos;t a
              borrowed case study - it&apos;s the depth on this page and the standard-Laravel code,
              migrations and database you&apos;ll own outright.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
