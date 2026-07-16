import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLayers, IconGrid, IconCheck, IconRefresh, IconServer, IconSpark, IconArrow } from "@/components/icons";

// CAPABILITY TENSE ONLY. We have zero education clients and have never built an LMS, so every
// card describes what a job of this shape involves and how we would approach it - never "the
// LMS platforms we build" or "our education clients". The word "app" stays out of headings.
//
// The boundary callout funnels UP. The industry page does not compete with the money pages for
// their head terms; a bespoke education platform is custom-software-shaped and enters through
// the Discovery Sprint. Anchors are all worded differently from the homepage grid's inbound
// "Explore EdTech & LMS development".
const uses = [
  { icon: <IconGrid className="h-5 w-5" />, t: "Extending the LMS you already run", d: "A custom tool launched into Moodle, Canvas or Open edX over LTI 1.3, passing grades back through Assignment and Grade Services. Usually cheaper, faster and more maintainable than rebuilding a gradebook." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Custom learning platforms", d: "When the learning model itself is the product - adaptive paths, cohort-based programmes, marketplaces, credential-native experiences - and an off-the-shelf LMS actively fights you rather than helping." },
  { icon: <IconServer className="h-5 w-5" />, t: "Student and parent portals", d: "Enrolment, records, schedules, results and communication, with the role hierarchy and audit trail an institution needs, and the access controls its FERPA obligations depend on." },
  { icon: <IconCheck className="h-5 w-5" />, t: "Assessment and item banking", d: "Question types, reusable and versioned item banks, scoring rules, and QTI import and export so your items are portable rather than locked into one vendor's format." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Rostering, SIS and migrations", d: "OneRoster feeds, Clever or ClassLink where a district mandates them, nightly SFTP files where reality intrudes, and moving content and grades off a legacy platform without losing either." },
  { icon: <IconSpark className="h-5 w-5" />, t: "AI features, with the guardrails", d: "Tutoring, feedback and content generation grounded in your own material - built with the consent, data-use and human-in-the-loop constraints that education, unlike most sectors, actually requires." },
];

export function EdtechScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build for education"
            title="Learning platforms, and the plumbing behind them"
            sub="Education software is mostly integration and constraint. The interesting engineering is rarely the course page - it is rostering, grade write-back, term rollover, consent, and clearing an accessibility gate you cannot argue with. A typical engagement is one of these:"
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

        <Reveal className="mt-8">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Where the education work stops, and the rest of the site takes over
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                This page is about the sector and what building for it actually demands. The build
                itself lives on the service pages:
              </p>

              <ul className="mt-6 grid gap-3">
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      A bespoke platform, scoped and priced
                    </span>
                    {" - "}
                    a learning platform is custom software, so it enters through a paid discovery
                    that ends in a written scope and a fixed build quote. See{" "}
                    <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      how we scope and build a bespoke platform
                    </Link>
                    , and{" "}
                    <Link href="/technologies" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      how we choose the stack
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      A course-marketing site, not the LMS
                    </span>
                    {" - "}
                    the site that sells the programme is a different job from the platform that
                    delivers it. That is{" "}
                    <Link href="/services/web-design-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      our web design and development service
                    </Link>
                    , and growing enrolment organically is{" "}
                    <Link href="/services/digital-marketing" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      an organic growth engagement
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      Learners on phones
                    </span>
                    {" - "}
                    a native mobile learning experience is a separate build, and we have not shipped
                    a mobile app for anyone yet. We say so plainly on{" "}
                    <Link href="/services/mobile-app-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      building a mobile learning app
                    </Link>
                    , where the honest terms are set out. AI features route to{" "}
                    <Link href="/services/ai-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                      adding AI features to a learning product
                    </Link>
                    .
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
