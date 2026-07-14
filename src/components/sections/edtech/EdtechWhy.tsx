import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLayers, IconLock, IconEye, IconRefresh, IconSearch, IconShield } from "@/components/icons";

// The build-vs-buy myth-buster + fit pillars + the anti-recommendation (id="when-not", the same
// id the thirteen technology spokes carry, so the site's "we tell you when not to" promise is
// one click from anywhere).
//
// ZERO STATISTICS. Killed: "online education market > $221B", "LMS market $30.07B -> $88.41B at
// 16.6% CAGR", agency "custom LMS $50k-$200k" ranges, learner counts, years-in-EdTech. All
// vendor-blog or marketing figures, all checkable, none adds authority. Authority here comes from
// standards knowledge and from the willingness to talk a buyer out of the sale.
//
// QUALITATIVE ECOSYSTEM FACTS ARE ALLOWED and carry no client claim: Moodle/Canvas/Open edX are
// the dominant platforms; LTI 1.1 is end-of-life; SCORM persists on its installed base; xAPI needs
// an LRS. These are the E-E-A-T substance. Attach NO number to any of them.
//
// THE ANTI-RECOMMENDATION MUST HAVE BOTH HALVES. "Don't build" without a specific "here is when
// custom genuinely wins" reads as inability rather than judgement. Keep them adjacent.
const pillars = [
  { icon: <IconLayers className="h-5 w-5" />, t: "Integration is the product", d: "Almost nothing in education stands alone. The LMS, the student information system, the identity provider and the content library all have to agree, and the standards that make them agree - LTI 1.3, OneRoster, QTI - are where an education build is won or lost." },
  { icon: <IconEye className="h-5 w-5" />, t: "Accessibility is a gate, not a feature", d: "Public schools and universities buy against WCAG 2.1 AA under the ADA Title II rule, and procurement asks for a VPAT before it asks for a demo. Gates fail late, which is why we treat it as build work from the first component rather than a pre-launch audit." },
  { icon: <IconLock className="h-5 w-5" />, t: "Privacy is a design constraint", d: "Students, and often minors. Roles, consent, retention, deletion and who may see what are data-model decisions, not settings. Retrofitting them after the schema is set is the expensive path, and everybody who has done it knows it." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Rostering is where builds actually break", d: "The LTI handshake almost never fails. What fails is term rollover, a student moving section mid-year, identity matching across two systems, and a nightly file with malformed rows. We design for that, because it is the part nobody demos." },
  { icon: <IconSearch className="h-5 w-5" />, t: "We would rather scope than guess", d: "An education platform is custom software. It enters through a paid discovery that ends in a written scope and a fixed price, because the alternative is a number invented before anyone knew what a term rollover meant in your institution." },
  { icon: <IconShield className="h-5 w-5" />, t: "Open standards, so you can leave", d: "LTI, OneRoster, QTI and SCORM exist precisely so a platform is not a prison. We build to the published specs, on mainstream open tools, and you own the code and the data outright. Nothing here needs us to keep running." },
];

export function EdtechWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Should you build a custom LMS?{" "}
                <span className="gradient-text">Usually not - and we&apos;d rather say so first.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Most briefs that arrive labelled &quot;custom LMS&quot; describe a gradebook, an
                enrolment engine, a course player and a SCORM runtime. Those are solved problems.
                Moodle, Canvas and Open edX are the platforms most of the world already runs on:
                Moodle when you want open source and plugin depth, Canvas when you want a hosted
                platform with a clean integration surface, Open edX when you deliver structured
                courses at scale. Rebuilding what they give you for free is the most expensive way to
                arrive at parity, and you inherit the maintenance forever. The honest first question
                is whether an existing platform already does eighty per cent of it, and whether the
                remaining twenty can ride on LTI 1.3, a few plugins and a custom tool.{" "}
                <span className="font-semibold text-foreground">So when is custom right?</span> When
                the learning model itself is the product - adaptive paths, cohort-based programmes, a
                marketplace, credential-native experiences - and the off-the-shelf LMS actively
                fights the thing you are trying to teach. That is a real category, we build in it,
                and it is much smaller than the number of people who ask for it.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why education is different"
            title="What building for education actually demands"
            sub="Every sector claims to be special. This one has procurement gates that fail you outright, a data subject who is often a minor, and a set of interoperability standards you do not get to opt out of."
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

        {/* The anti-recommendation. id="when-not" matches the thirteen technology spokes, so the
            site-wide "we tell you when not to" promise is one click from the hero button. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to build
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              If you are a training company whose real job is to sell and deliver courses, a
              configured platform will beat a custom build on cost and on time, and we will point you
              at Moodle, Canvas or Open edX rather than take the engagement. If your differentiator
              is the content rather than the software, do not buy an engineering project to solve a
              content problem. If you serve under-13 learners and cannot yet answer the consent,
              hosting and accessibility questions, we scope those before anyone writes code - and
              when the answer is that an existing platform already clears the gate, that is our
              recommendation. And if what you actually need is the site that sells the programme
              rather than the platform that delivers it, that is{" "}
              <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
                a website, and a much smaller number
              </Link>
              . Where custom genuinely wins - an adaptive engine, a cohort model, a marketplace, an
              assessment product - it is{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                custom software, scoped in a paid discovery
              </Link>
              , and we will say that just as plainly. Talking you out of a build you do not need is
              the only credential we can offer before the first one ships.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
