import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. Plain strings, no anchors - the same array
// feeds the schema, and links would leak into it. FAQPage question count == visible details count
// because both read this one array.
//
// SELF-COMPETITION GUARD. FAQPage nodes already ship on the homepage, /services, /technologies,
// eight money pages, thirteen spokes and the edtech page. DELIBERATELY OMITTED here: any
// stack-agnostic "what do you build with / are you stack-agnostic" answer (the site already ships
// it 5x - a sixth is duplicate body text); "do you do staff augmentation" (the /technologies hub
// owns it verbatim); and a generic "how long does it take" (the homepage owns the week ladder).
// Cost and ownership are kept ONLY because the healthcare answers are genuinely PHI/BAA-shaped, not
// FERPA paraphrases of the edtech FAQ.
//
// GUARDRAILS ENFORCED:
// - Never "HIPAA/GDPR compliant" or "certified" as a property of us or of software.
// - Never a legal conclusion about the buyer (whether HIPAA/1557/SaMD applies is their counsel's).
// - Every "this binds you" clause is immediately paired with "and here is what we build".
// - Accessibility: METHOD, never OUTCOME. WCAG 2.1 AA (the Section 1557 standard), never 2.2. No date.
// - ZERO statistics. The only number is the 18 Safe Harbor identifier categories - the literal text
//   of 45 CFR 164.514(b)(2), a regulatory fact like "WCAG 2.1 AA", with no efficacy claim attached.
// - "app" never appears as a capability we have delivered - we have shipped zero mobile apps.
// - HIPAA cert = none exists (branch b). SOC 2 = a report, not a certification. ONC/Epic/Oracle/
//   athenahealth listings attach to products. All named correctly or corrected, never dead names.
// - The precise verb is "store", never "touch" - a front end handles PHI in the DOM, stores none.
const faqs = [
  {
    question: "Can you build a HIPAA-compliant app?",
    answer:
      "No one can hand you a 'HIPAA-compliant app', and a firm that says it can is selling you a phrase. Compliance under HIPAA is an operational state of an organisation - a covered entity or a business associate - made of risk analysis, policies, training, contracts and breach procedures. It is not a property a developer bakes into software. There is also no HIPAA certification: the Department of Health and Human Services says it does not endorse or recognise private certifications, and Amazon Web Services says the same about itself. What we build is software that keeps protected health information inside your own HIPAA-eligible infrastructure, engineered to the practices the Security Rule describes, so that you can operate it as part of your own compliance - which is the only place compliance can actually live.",
  },
  {
    question: "Do you sign a business associate agreement (BAA)?",
    answer:
      "No, not today, and we would rather tell you that on the first call than after a discovery. A BAA is the contract you sign with a vendor that creates, receives, maintains or transmits your patients' PHI, and it makes that vendor a business associate, directly liable under HITECH. We architect specifically so that we are not that vendor: the patient data stays inside the infrastructure you already run, and what we build reaches it at request time rather than storing a copy we would have to sign a BAA to hold. If a build genuinely cannot avoid us holding PHI, that changes the engagement, and it is not one we take on. If a signed BAA is a hard requirement for you, you should choose a firm that offers one, and we will say so plainly.",
  },
  {
    question: "Have you built healthcare software before?",
    answer:
      "No, and we will not dress that up. We have no healthcare clients, no hospital logos and no patient portal in production, and you should weigh that against whatever else we say. Our production work is a custom, full-stack online store on its own backend, and a corporate site. What we offer instead is standards depth - FHIR, US Core, SMART on FHIR, HL7 v2 - an accurate account of who each regulation actually binds and where the business-associate boundary falls, and a willingness to tell you not to build when your record system already does the job. If a portfolio in healthcare is your deciding criterion, there are firms who have one, and we would rather you knew that now than after a discovery.",
  },
  {
    question: "Where will our patients' data actually live?",
    answer:
      "Inside your own HIPAA-eligible infrastructure - your cloud tenant, your database, your account, under the business associate agreement you hold with your cloud provider - and not on a system we operate and rent back to you. This is the question we think you should ask every vendor first, because most pages in this sector never answer it. What we build reads and writes the data through your infrastructure rather than copying it into ours, so the records you are accountable for do not expand onto servers you cannot audit. A portal front end momentarily handles data in the browser to display it; it stores none of it at rest on our side. Storing the least data we can is the point, not a limitation.",
  },
  {
    question: "Should we build a custom patient portal, or use the one our EHR already ships?",
    answer:
      "Usually you should use the one you already pay for. Most briefs labelled 'patient portal' describe scheduling, secure messaging, results and bill-pay, and the major record systems ship all of that in their own portal, kept up to date and inside their own compliance boundary. The honest first question is whether the built-in portal does eighty per cent of it, and whether the rest can ride on a small SMART on FHIR app on top. Building a bespoke front end is right when the experience itself is the product and the record system actively fights it - a condition-specific programme, a multi-provider network the EHR was never designed to span, an intake flow that decides whether people show up. That category is real, and much smaller than the number of people who ask for it.",
  },
  {
    question: "What is SMART on FHIR, and do we need it?",
    answer:
      "SMART on FHIR is the open standard that lets an app launch inside a record system, authorised through OAuth 2.0 under the user's own credentials, and read or write clinical data through the system's FHIR interface - while the EHR stays the system of record. It matters because it is the mechanism that lets you add functionality without standing up a second database of patient data: the record system keeps holding the data, and your app holds none of it. If you are adding a focused capability on top of an EHR you already run, it is very often what you need, and it keeps you on the safe side of the custody boundary. If you are building something the record system has no concept of, you may need more, and we will tell you which.",
  },
  {
    question: "Can you integrate with Epic, Oracle Health or athenahealth?",
    answer:
      "We build to the standards those systems expose - FHIR, US Core and SMART on FHIR - and against their developer sandboxes and synthetic data, which is how integration is built and tested before any real record is involved. We should be precise about credentials, though: each of them runs a marketplace that lists products, not development companies. Epic lists apps in its Showroom, Oracle Health lists validated integrations, and athenahealth lists solutions in its Marketplace, and we hold none of those listings because we have no healthcare product of our own to list. On a build for you, that listing - if your product needs one - would be yours to earn as its owner, and we build the integration you would list. We have not integrated one of these in production, and we say so.",
  },
  {
    question: "Is our product a medical device, and can you handle that?",
    answer:
      "That is a determination for you and your regulatory counsel, not for us, so we will not tell you your product is or is not a device. What we can tell you is where the line sits: if software is meant to diagnose, to drive a specific treatment decision, to interpret a medical image or a signal from a device, or for a patient to rely on primarily, it may be regulated as Software as a Medical Device, which needs a quality system and a regulatory strategy before it needs a web team. If that is your product, we build the workflow, data and interface layers around a cleared device, but we are not your regulatory or clinical-validation partner, and we will point you to one rather than take a project we are not equipped to carry.",
  },
  {
    question: "Who owns the code, and who is responsible for the patient data?",
    answer:
      "You own the code outright - the repository, the data model, the integration and the IP, on infrastructure registered in your name, handed over on final payment with no licence back to us. The patient data was always yours, and stays inside your infrastructure throughout, which is deliberate: the legal responsibility for those records under HIPAA is the covered entity's, and an organisation that does not control its own patient data cannot meaningfully discharge that responsibility. We build to open standards precisely so another team, or your record system's own vendor, can carry the work forward without asking us, and without you holding data on a system only we understand.",
  },
  {
    question: "Will the product be WCAG compliant, and can you give us a VPAT?",
    answer:
      "We will not tell you a product conforms before it has been built and tested, and we do not have a VPAT to hand you - a VPAT is a document authored about a finished product, so any firm handing you theirs is handing you a document about their software, not yours. Here is what is true: the 2024 Section 1557 final rule adopts WCAG 2.1 AA for the web content and mobile apps of covered health programs, and a health system's procurement will ask about it. We build to that standard as a method - semantic structure, keyboard operability, screen-reader labelling, contrast, focus order - verify on real assistive technology rather than a checker score, and help you populate the accessibility conformance report and the security questionnaire your buyer actually reads.",
  },
  {
    question: "Do you build a mobile app for patients, or a web portal?",
    answer:
      "We build mobile apps as a service, and we have not shipped one for anyone yet - not in healthcare, not in any sector - and we say so plainly on our mobile app development page rather than let a portal's web build imply a mobile portfolio. In practice many healthcare products need a responsive, accessible web experience far more than a native app, and the store review, offline behaviour and device fragmentation an app brings are real costs on top of the health-data ones. If you genuinely need a native app, that page sets out the honest terms and the published prices, and the same PHI-custody rules apply: the data belongs in your infrastructure, not on the device or on us.",
  },
  {
    question: "Can you add AI to a healthcare product?",
    answer:
      "Yes, as an assistive layer grounded in your own approved material, with human-in-the-loop review and explicit non-diagnostic guardrails. The hard boundary is clinical decision-making: the moment software is intended to drive a treatment decision or a diagnosis, it can become a regulated medical device, and whether it has crossed that line is a question for your regulatory counsel. So we keep AI on the assistive side of it - drafting, summarising and surfacing your own content - and we keep patient data out of any model or prompt pipeline that would put it in front of a third party. We will also tell you when a feature is being added because it is fashionable rather than because it helps a patient or a clinician.",
  },
  {
    question: "How do you handle GDPR for patients in the EU?",
    answer:
      "GDPR treats health data as a special category, which means processing needs both a lawful basis and a specific Article 9 condition, and it makes the institution the controller and a firm like us the processor. There is no general certificate a development company can hold to prove it behaves like a processor, so we will not claim to be a certified anything. What we build is the processor posture: data-processing terms, the mechanics that let a data subject exercise their rights, minimisation so you are not holding what you do not need, and hosting in the region where residency is required. Which conditions and bases apply to your product is a question for your counsel, and one we raise early because it shapes the data model.",
  },
  {
    question: "What does custom healthcare software cost?",
    answer:
      "We publish one number here and refuse to invent the other. Every agency page in this sector prints a custom-healthcare-software price band, and none of them can know whether your patient data will leave the record system at all - which is the single biggest driver of the cost. So a health build enters through a paid Discovery Sprint from $1,000, which is one to two weeks and ends in a written scope, a data-flow map showing where PHI lives and who becomes a business associate, and a fixed price for the build, credited toward it. If discovery concludes your record system already does the job, you keep the scope and the recommendation, and the expensive engagement never happens. Marketing sites and mobile builds have their own published starting prices.",
  },
  {
    question: "Do you hold SOC 2, HITRUST or ISO 27001?",
    answer:
      "No to all three, and it is worth being precise about what each one is. A SOC 2 is an attestation report a CPA firm writes about an organisation's controls, not a certificate you pass, and we have not undergone a SOC 2 examination. ISO 27001 is a genuine certification held by an organisation, and we are not certified to it. HITRUST CSF is the healthcare-specific certification, at its e1, i1 and r2 levels, held by an organisation, and we hold none of them. And there is no HIPAA certification at all for anyone to hold. We complete your security questionnaire honestly, including the parts where the answer is no, and evidence the parts that are genuinely ours - the access model, the audit logging, the data-flow diagram. If procurement gates on a supplier who carries those attestations, that is not us, and you should choose a firm that does.",
  },
];

export function HealthFaq() {
  return (
    <Section>
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Building for healthcare, answered" />
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
