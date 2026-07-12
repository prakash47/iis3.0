import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLayers, IconRefresh, IconFileText, IconSearch, IconCheck, IconEye, IconLock, IconPlay, IconGauge, IconBuilding, IconDatabase, IconSpark } from "@/components/icons";

// The E-E-A-T CENTREPIECE. We have zero education clients, so the depth of what this page knows
// about education's actual failure modes is the entire substitute for a portfolio.
//
// FIVE HARD RULES ENFORCED HERE:
// 1. CAPABILITY TENSE ONLY. "We integrate", "we design", "we author" - never "our LMS platforms",
//    "our education clients", "in our experience with districts", "the schools we work with".
// 2. NO OUTCOME GUARANTEES. Card 2 says a section change is "far less likely to orphan a grade",
//    not "never orphans"; card 11 says rollover "archives last term's records rather than
//    corrupting this term's" as an intent, not a warranty. Twelve confident cards with zero proof
//    read as an implied practice unless the honest-proof block sits right after them - it does.
// 3. WCAG 2.1 AA, NEVER 2.2. The 2024 ADA Title II web rule adopts "WCAG Version 2.1, Level AA"
//    as the technical standard for state and local government, which expressly includes public
//    schools, community colleges and public universities. 2.2 is the current W3C Recommendation
//    but is not the legal gate, and Section 508 still formally references 2.0. One version, the
//    one that actually decides a purchase. And ACCESSIBILITY IS A METHOD CLAIM, never an outcome.
// 4. NO STATISTICS, NO VERSION NUMBERS beyond the standards' own names (LTI 1.3, SCORM 2004 are
//    entity names, not currency signals). No market sizes, no cost ranges, no adoption figures.
// 5. NO COMPLIANCE OUTCOME. Card 7 allocates the obligations; it never says we make anyone
//    compliant, and it never implies a certification or an audit we do not hold.
const caps = [
  { icon: <IconLayers className="h-5 w-5" />, t: "LTI 1.3 and LTI Advantage", d: "We integrate tools and platforms over LTI 1.3, secured with OAuth2 and signed tokens, using the three Advantage services: Names and Role Provisioning, Deep Linking, and Assignment and Grade Services. LTI 1.1 is end-of-life and no longer certified; we do not build new integrations to it." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Rostering and SIS sync", d: "OneRoster over REST or CSV, and through Clever or ClassLink where a district mandates them. We design term rollover and enrolment sync deliberately, so that a student moving section mid-year is far less likely to orphan a grade." },
  { icon: <IconFileText className="h-5 w-5" />, t: "SCORM, xAPI and cmi5", d: "SCORM 1.2 and 2004 for LMS-bound completion and compliance training, which persist because the installed content library is enormous. xAPI with a Learning Record Store, or cmi5 as the bridge, when tracking genuinely has to leave the LMS - and we will tell you when it doesn't." },
  { icon: <IconSearch className="h-5 w-5" />, t: "Build versus extend, decided first", d: "Most custom-LMS briefs are better served by extending Moodle, Canvas or Open edX over LTI and plugins than by rebuilding a gradebook and an enrolment engine. We make that call with you in discovery, in writing, before anyone commits a budget." },
  { icon: <IconCheck className="h-5 w-5" />, t: "Assessment, item banking and QTI", d: "Question types, reusable and versioned item banks, scoring rules, and QTI import and export so your items stay portable. We are candid about the limits and the consent problems of AI-assisted grading and remote proctoring, particularly with minors." },
  { icon: <IconEye className="h-5 w-5" />, t: "Accessibility as a procurement gate", d: "Public education buys against WCAG 2.1 AA under the ADA Title II rule, and asks for a VPAT. We author semantic structure and ARIA, verify keyboard and screen-reader behaviour on real assistive technology, and help populate the VPAT and HECVAT your procurement needs." },
  { icon: <IconLock className="h-5 w-5" />, t: "Student-data privacy by design", d: "FERPA binds the school. COPPA binds the operator. GDPR binds the controller, and several US state laws bind the provider directly. We build the role-scoped access, consent capture, audit logging, retention and deletion each of those actually needs." },
  { icon: <IconPlay className="h-5 w-5" />, t: "Video and content delivery", d: "Lecture video is the largest line item in most education products and the first thing to buckle. We architect encoding, CDN delivery and adaptive streaming so a launch week of concurrent viewers sinks neither the budget nor the buffer." },
  { icon: <IconGauge className="h-5 w-5" />, t: "Enrolment spikes and term-start load", d: "Education traffic is not smooth. It spikes at term start, at assignment deadlines and inside exam windows. We load-test and cache the enrolment, login and gradebook paths against those exact peaks rather than an averaged curve." },
  { icon: <IconBuilding className="h-5 w-5" />, t: "Multi-tenancy for districts and campuses", d: "A bootcamp platform and a district platform are different animals, and conflating them is the classic scoping error. We design tenant isolation, role hierarchies and per-school configuration so one district's data, branding and admins never bleed into another's." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Gradebook integrity and term rollover", d: "Grades are the highest-trust data in the system. We make grade writes idempotent and auditable, and we design term and section rollover to archive last term's records rather than corrupt this term's - which is where the silent data loss usually happens." },
  { icon: <IconSpark className="h-5 w-5" />, t: "AI in learning, built with consent", d: "Tutoring, feedback and content generation grounded in your own material, with human-in-the-loop review rather than autonomous scoring of record. Education routinely involves minors, so consent, data-use limits and hallucination risk in assessment are engineering constraints, not disclaimers." },
];

export function EdtechCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we build for education"
            title="Twelve things an education build turns on"
            sub="Almost none of it is the course page. This is the layer education products are actually judged on - and it is where a team that has read the specifications is worth more than a team that has seen the demo."
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

        {/* Stated as an APPROACH ("here is how we would build yours"), never as a record. */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Our default for an education product:</span>{" "}
              don&apos;t start with a custom LMS. Start by asking whether an existing platform already
              does most of it, and whether the rest can ride on LTI 1.3, OneRoster and a few custom
              tools. That is usually the fastest, cheapest and most maintainable answer, and saying so
              costs us the larger engagement. Build custom only when the learning model itself is the
              product - and then it is a full-stack web application on the right stack, integrated
              over those same open standards, with a Learning Record Store added only if data
              genuinely has to leave the system. Model the people and the privacy posture before the
              features: students, guardians, enrolments and roles first, with the access controls the
              school-official exception depends on, the consent capture COPPA needs, and in-region
              hosting where residency is required - all designed in, because retrofitting them after
              the schema is set is the expensive path. Accessibility from the first component rather
              than a pre-launch audit, because it is a gate and gates fail late. Load-test the
              enrolment, login and gradebook paths against term start rather than an average day. And
              write the rollover logic before you need it, not after a term has already been lost.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
