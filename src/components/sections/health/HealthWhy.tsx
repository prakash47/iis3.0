import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLayers, IconLock, IconEye, IconDatabase, IconSearch, IconShield } from "@/components/icons";

// THE MYTH-BUSTER dismantles the category's own load-bearing phrase. "HIPAA-compliant software"
// is on the H1, the title tag and often the URL slug of essentially every competing page in this
// sector, and it describes something that cannot exist as stated. HHS states it "does not endorse
// or otherwise recognize private organizations' certifications" regarding the Security Rule, and
// AWS writes on its own compliance page that "there is no HIPAA certification for a cloud service
// provider". Refusing the phrase costs us the exact-match head term. Explaining WHY is the trade.
//
// ZERO STATISTICS. No market sizes, no breach counts, no "X% of healthcare orgs", no penalty
// figures, no HITRUST breach-rate marketing numbers. Authority here comes from knowing who each
// law binds and from being willing to talk a buyer out of the sale.
//
// QUALITATIVE, FIRST-PARTY-ATTRIBUTED FACTS ARE ALLOWED and carry no client claim: HHS on
// certifications, AWS on its own wording, the FTC's GoodRx and Premom actions. Attach NO number.
//
// THE ANTI-RECOMMENDATION MUST HAVE BOTH HALVES. "Don't build" without a specific "here is when
// custom genuinely wins" reads as inability rather than judgement. Keep them adjacent.
//
// NEVER A LEGAL CONCLUSION about the buyer. "This may be a regulated medical device, and that is a
// determination for you and your regulatory counsel" - never "that is Software as a Medical Device".
const pillars = [
  { icon: <IconShield className="h-5 w-5" />, t: "Here, the law reaches the vendor", d: "HIPAA binds covered entities, and it binds their business associates directly. A software firm becomes one the moment it creates, receives, maintains or transmits protected health information on a covered entity's behalf, and its own subcontractors become business associates in turn. So where a vendor stands relative to that boundary is an architecture decision, and we make it deliberately. What we build is the data plane that keeps the records inside your infrastructure." },
  { icon: <IconLock className="h-5 w-5" />, t: "The least data to lose", d: "Every party who holds a copy of a record is another place it can leak from, and another notification you may have to make. Data minimisation is not a virtue we advertise, it is the shape of the system: opaque references instead of stored identifiers, request-time reads instead of a synchronised copy, and no standing production key on our side." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Integration is the product", d: "Almost nothing in healthcare stands alone. The record system, the practice-management system, the identity provider, the payer and the lab all have to agree, and the standards that make them agree - FHIR, the US Core profiles, SMART on FHIR, HL7 v2 - are where a health build is won or lost. They are published, and they are free to build to." },
  { icon: <IconEye className="h-5 w-5" />, t: "Accessibility is a funded-program gate", d: "The 2024 Section 1557 final rule adopts WCAG 2.1 Level AA for the web content and mobile apps of covered health programs, and a health system's procurement asks about it before it asks for a demo. We build to it as a method and verify on real assistive technology. We do not tell you a product conforms before it exists." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Sensitive data is not one thing", d: "Substance-use records carry heightened consent rules on top of HIPAA. Reproductive and mental-health data are reached by state consumer-health laws that HIPAA never touches. Those are not policy paragraphs, they are segmentation and consent decisions in the schema. What we build is consent as first-class data, and the segmentation the sensitive categories require." },
  { icon: <IconSearch className="h-5 w-5" />, t: "We would rather scope than guess", d: "A health build is custom software. It enters through a paid discovery that ends in a written scope, a data-flow map and a fixed price - because the alternative is a number invented before anyone knew whether your data would leave the record system at all, which is the question that decides the cost." },
];

export function HealthWhy() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Can you buy HIPAA-compliant software?{" "}
                <span className="gradient-text">No - and the phrase itself is the tell.</span>
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                It is the most common phrase in this category. It is in the headlines, the title tags
                and sometimes the web addresses of the firms you are comparing us against. And it
                describes something that cannot exist. Compliance under HIPAA is an operational state
                of an organisation - a covered entity or a business associate - made out of risk
                analysis, policies, training, contracts and breach procedures. It is not a property a
                developer bakes into an application and hands over.{" "}
                <span className="font-semibold text-foreground">There is also no HIPAA certification.</span>{" "}
                The Department of Health and Human Services says it does not endorse or otherwise
                recognise private organisations&apos; certifications regarding the Security Rule, and
                Amazon Web Services writes on its own compliance page that there is no HIPAA
                certification for a cloud service provider. A badge saying otherwise is a private
                product, sold by whoever printed it.{" "}
                <span className="font-semibold text-foreground">So what should you ask instead?</span>{" "}
                Ask where the patient data will physically live. Ask who becomes a business associate
                when it does. Ask which of the parties in the diagram would have to notify a breach.
                Those questions have real answers, they are answered further down this page, and a
                firm that leads with the badge usually has not thought about them.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <SectionHeading
            eyebrow="Why healthcare is different"
            title="What building for healthcare actually demands"
            sub="Every sector claims to be special. In this one the regulation reaches past the buyer and grabs the vendor, the data subject can be harmed rather than merely inconvenienced, and the system of record is a platform you do not own and cannot replace."
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

        {/* The anti-recommendation. id="when-not" matches the thirteen technology spokes and the
            edtech page, so the site-wide "we tell you when not to" promise is one click from the
            hero button. BOTH HALVES ARE PRESENT: four honest refusals, then the case where custom
            genuinely wins. Refusals without that second half read as inability, not judgement. */}
        <Reveal className="mt-6">
          <div id="when-not" className="rounded-2xl border border-border bg-surface p-6 scroll-mt-24">
            <h3 className="font-display text-base font-semibold text-foreground">
              When we&apos;d tell you not to build, and when we&apos;d turn the work down
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-justify">
              If the record system you already pay for ships a patient portal that does most of this,
              configure it, or put a small app on top of it through SMART on FHIR, and keep your
              money. That is the answer most often, and it is the column we highlight in the table
              below. If your product is meant to diagnose, to drive a specific treatment decision, to
              interpret a medical image or a signal from a device, or for a patient to rely on
              primarily, then it may be a regulated medical device - a determination for you and your
              regulatory counsel, not for us - and it needs a regulatory strategy and a quality system
              before it needs a web team. We build the workflow, data and interface layers around a
              cleared device; we are not your regulatory or clinical-validation partner, and we will
              say so rather than take the project. If the build genuinely requires us to hold your
              patients&apos; data, we are not your vendor today, for reasons this page spends its
              length on. And if procurement gates on a supplier who carries a HITRUST certification, a
              SOC 2 report or a signed business associate agreement, we do not clear that gate, and
              you should choose a firm that does.{" "}
              <span className="font-semibold text-foreground">Where a custom build genuinely wins:</span>{" "}
              when the experience is the product and the record system actively fights it - a
              condition-specific programme, a multi-provider network the EHR was never designed to
              span, an intake or triage flow that decides whether people show up at all. That is{" "}
              <Link href="/services/custom-software-development" className="font-medium text-brand-700 hover:text-brand-600 dark:text-brand-400">
                a paid discovery before any build quote
              </Link>
              , and we will make that case with you in writing rather than assume it. Talking you out
              of a build you do not need is the only credential we can offer before the first health
              build ships.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
