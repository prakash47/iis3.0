import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. Plain strings, no anchors - the same array
// feeds the schema, and links would leak into it.
//
// SELF-COMPETITION GUARD. FAQPage nodes already ship on the homepage, /services, /technologies,
// eight money pages and thirteen spokes. DELIBERATELY OMITTED here: "do you do staff augmentation"
// (the /technologies hub owns that entity verbatim) and a generic "how long does it take" (the
// homepage owns the 2-6 / 6-10 week ladder). Cost and ownership are kept ONLY because the
// education answers are genuinely different, and they do not restate the homepage price ladder.
//
// GUARDRAILS ENFORCED:
// - Never "FERPA/COPPA/GDPR compliant" or "certified" as a property of us or of software.
// - Never a legal conclusion. Whether a law applies to a buyer is their counsel's call.
// - Accessibility: METHOD, never OUTCOME. WCAG 2.1 AA (the ADA Title II standard), never 2.2.
// - ZERO statistics. No market sizes, no LMS cost ranges, no learner counts, no adoption figures.
// - ZERO portfolio implication. "we have not built an LMS" is stated plainly, twice.
// - "app" never appears as a capability we have delivered - we have shipped zero mobile apps.
// - 1EdTech certifies PRODUCTS; Axim certifies NOBODY. Both are category errors if disclaimed
//   as agency badges, so both are described correctly instead.
// - The Student Privacy Pledge is deliberately not mentioned: it was retired, so there is nothing
//   to sign and nothing to have not signed.
const faqs = [
  {
    question: "Should we build a custom LMS, or use Moodle, Canvas or Open edX?",
    answer:
      "Usually you should not build. Most briefs labelled 'custom LMS' describe a gradebook, an enrolment engine, a course player and a SCORM runtime, and those are solved problems. Moodle gives you open source and plugin depth, Canvas gives you a hosted platform with a clean integration surface, and Open edX gives you structured course delivery at scale. The honest first question is whether one of them already does most of it, and whether the rest can ride on LTI 1.3, a few plugins and a custom tool. Building custom is right when the learning model itself is the product - adaptive paths, cohort programmes, a marketplace, a credential-native experience - and the off-the-shelf platform actively fights you. That category is real and much smaller than the number of people who ask for it.",
  },
  {
    question: "Have you built an LMS before?",
    answer:
      "No, and we will not dress that up. We have no education clients, no university logos and no learner counts, and you should weigh that against whatever else we say. Our production work is a custom, full-stack online store on its own backend, and a corporate site. What we offer instead is standards depth - LTI, OneRoster, SCORM, xAPI, QTI - an accurate account of who each regulation actually binds, and a willingness to tell you not to build when you should not. If a portfolio in education is your deciding criterion, there are firms who have one, and we would rather you knew that now than after a discovery.",
  },
  {
    question: "Are you FERPA compliant?",
    answer:
      "That question has no honest yes, from us or from anyone else, because FERPA does not bind software vendors. It binds educational agencies and institutions. A vendor comes inside FERPA only through the school-official exception, which requires it to perform an institutional service, operate under the institution's direct control, use the records only for the contracted purpose, and never re-disclose them. So 'FERPA-compliant vendor' is a category error, and a firm selling you one is selling you a phrase. What we build is the machinery the exception depends on: role-scoped access, purpose limitation in the data model, audit logging, retention and deletion you control, and contract terms that place us under your direction.",
  },
  {
    question: "Do we need COPPA compliance, and who is responsible for it?",
    answer:
      "COPPA liability sits with the operator of the service, and who that is depends on how you deploy. In a school deployment the school can consent on a parent's behalf, but only for educational use with no commercial purpose attached. Offered directly to families, there is no school in the loop, and the operator - you - must obtain verifiable parental consent itself. We do not decide whether COPPA applies to you; that is a question for your counsel. What we build is the consent capture, the data minimisation and the third-party disclosure controls that either path requires, and we flag early which path you are actually on, because it changes the data model.",
  },
  {
    question: "Will the platform be WCAG compliant, and can you give us a VPAT?",
    answer:
      "We will not tell you a platform conforms before it has been built and tested, and we do not have a VPAT to hand you. A VPAT is a document authored about a finished product, and a completed one is an accessibility conformance report - so any firm handing you theirs is handing you a document about their software, not yours. Here is what is true: public schools, community colleges and public universities buy against WCAG 2.1 AA, the standard the 2024 ADA Title II web rule adopts. We build to it as a method - semantic structure, keyboard operability, screen-reader labelling, contrast, focus order, captions - verify on real assistive technology rather than a checker score, and help you populate the conformance report and the HECVAT your procurement will ask for.",
  },
  {
    question: "What is LTI, and do we need LTI 1.3?",
    answer:
      "LTI is the standard that lets an external tool launch inside an LMS with the user's identity and course context already established, so nobody has to log in twice or copy grades by hand. LTI 1.3 is the current version: it authenticates with OAuth2 and signed tokens, and LTI Advantage adds three services on top - Names and Role Provisioning so your tool knows who is in the course, Deep Linking so an instructor can place specific content, and Assignment and Grade Services so scores flow back into the gradebook. Yes, you need 1.3. The older LTI 1.1 reached end-of-life and is no longer certified, and we do not build new integrations to it.",
  },
  {
    question: "What is the difference between SCORM and xAPI, and which do we need?",
    answer:
      "SCORM packages a course so an LMS can launch it and record completion and a score. It persists because an enormous library of existing content uses it and migrating that content is expensive - which is a better reason than inertia. xAPI records learning as statements sent to a Learning Record Store, a database that sits outside the LMS, and it earns its keep only when learning genuinely happens across systems: a simulation, a mobile activity, something that happened on the job. cmi5 is the bridge, adding course structure and a launch protocol back to xAPI. Most buyers who ask for xAPI do not need it, and an LRS is real infrastructure somebody then has to run. We will tell you which of the three your product actually calls for.",
  },
  {
    question: "Can you integrate with our student information system?",
    answer:
      "That is usually the real work. Rostering runs through OneRoster over REST or CSV, and many districts mandate Clever or ClassLink as the middleware, while higher education tends to sit on Banner or Workday Student. The integration that breaks is almost never the handshake. It is term rollover, a student changing section mid-year, identity matching across two systems that disagree about who somebody is, and a nightly file with malformed rows that nobody notices until grades are wrong. We design for those explicitly, and we stand the feed up against real data early rather than at the end.",
  },
  {
    question: "What is an LXP, and is it different from an LMS?",
    answer:
      "Yes, and conflating them is a common scoping error. An LMS is the system of record: enrolments, completion, grades, compliance. An LXP is a discovery and experience layer, usually for corporate learning - it recommends content, aggregates it from many sources, and organises skills. It sits beside or on top of an LMS rather than replacing it, because it is not built to be the record that a regulator or a registrar relies on. If what you need is the record, you need an LMS. If what you need is people to find and want the content, you may need neither, and a decent content strategy instead.",
  },
  {
    question: "Are you a Moodle Partner, or 1EdTech certified?",
    answer:
      "No to the first, and the second is a category error worth correcting. 1EdTech, formerly IMS Global, certifies products rather than development companies - a tool passes interoperability testing, earns the certification and appears in the product directory, and the process is gated on paid membership. There is no '1EdTech certified developer' for a firm to be. We hold no membership and no certified product, and on a build for you the certification would be yours to earn as the product owner. Moodle runs an official Moodle Certified Partner and Certified Service Provider programme, vetted on a track record of Moodle work; we are not in it and could not be yet, because the track record is the requirement. Instructure runs a Canvas partner programme; we are not a partner and integrate through the published APIs. Open edX is different again: Axim Collaborative, which stewards it, does not certify or endorse service providers at all, so there is no certification to hold. We also hold no SOC 2 and no ISO 27001, and have never been audited for either.",
  },
  {
    question: "What does a custom learning platform cost?",
    answer:
      "We publish one number here and refuse to invent the other. Every agency page in this sector prints a custom-LMS price band, and none of them can know what your rostering feed, your term rollover or your accessibility gate will cost. So a learning platform enters through a paid Discovery Sprint from $1,000, which is one to two weeks and ends in a written scope, an integration and risk audit, and a fixed price for the build - credited toward that build. If discovery concludes you should extend an existing platform instead, you keep the scope and the recommendation, and the expensive engagement never happens. Marketing sites and mobile builds have their own published starting prices, and ongoing care runs from $100 a month.",
  },
  {
    question: "Who owns the code, and who owns the student data?",
    answer:
      "You own both, and in education that is not a nicety. The repository, the IP and every student, staff and assessment record are yours, on infrastructure registered in your name, handed over on final payment with no licence back to us. It matters more here than anywhere else we work, because the legal obligations attached to those records - FERPA, state student-privacy law, GDPR - are the institution's, and an institution that does not control its own data cannot meaningfully discharge them. We also build to open standards precisely so another team can take the work forward without asking us.",
  },
  {
    question: "Can you take over a learning platform somebody else built?",
    answer:
      "Often, and the first step is an audit rather than a quote. We look at what the platform actually does, the state of the dependencies, whether the integrations are on current standards or a dead version of LTI, how the roles and permissions are modelled, and how much of the original intent survives in the code. Sometimes the honest answer is that a rescue is far cheaper than a rewrite. Sometimes it is the opposite, and sometimes the right answer is to move onto an existing platform and retire the custom one. We would rather tell you which before you commit than after.",
  },
  {
    question: "Do you build mobile learning apps?",
    answer:
      "We build mobile apps as a service, and we have not shipped one for anyone yet - not in education, not in any sector. We say so plainly on our mobile app development page rather than let a learning platform's web build imply a mobile portfolio. In practice many education products need a responsive web experience far more than they need a native app, and the store review, offline behaviour and device fragmentation that come with an app are real costs. If you genuinely need one, that page sets out the honest terms, the published prices and what we have and have not done.",
  },
  {
    question: "Can you add AI tutoring, feedback or grading?",
    answer:
      "Yes, as an assistive layer grounded in your own material, and with guardrails education actually requires rather than the ones a demo skips. The distinctive constraint is that your users are often minors, so consent, data-use limits and whether student work is used to train a model are engineering decisions before they are policy statements. Our posture on assessment is human-in-the-loop: AI can draft feedback and surface patterns, and it should not be the autonomous score of record. We will also tell you when a feature is being added because it is fashionable rather than because it teaches anyone anything.",
  },
  {
    question: "How do you handle GDPR for learners in the EU?",
    answer:
      "GDPR makes the institution the controller and a firm like us the processor, and there is no general certificate a development company can hold to prove it behaves like one - so we will not claim to be a certified anything. What we build is the processor posture: data-processing terms, the mechanics that let a data subject exercise their rights, minimisation so you are not holding what you do not need, and hosting in the region where residency is required. Children's data carries additional protection, and the digital-consent age varies by member state, which is a scoping question we raise early rather than discover at launch.",
  },
];

export function EdtechFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Building for education, answered" />
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
