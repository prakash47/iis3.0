import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLock, IconLayers, IconRefresh, IconDatabase, IconServer, IconShield, IconEye, IconCode, IconGrid, IconFileText, IconCpu } from "@/components/icons";

// The E-E-A-T CENTREPIECE. We have zero healthcare clients and have integrated zero EHRs in
// production, so the depth of what this page knows about healthcare's actual failure modes and its
// standards is the entire substitute for a portfolio.
//
// SIX HARD RULES ENFORCED HERE:
// 1. CAPABILITY TENSE ONLY. "We build", "we design", "we author" - never "our healthcare clients",
//    "the portals we run", "in our experience with hospitals".
// 2. METHOD, NEVER OUTCOME. Nothing here is "HIPAA-compliant", "secure", "certified" or
//    "accessible" as a finished property. Card 9 is "accessibility engineering to WCAG 2.1 AA as
//    a method", never conformance. Twelve confident cards with zero proof read as an implied
//    practice unless the honest-proof block sits right after them - it does.
// 3. WCAG 2.1 AA, NEVER 2.2. The 2024 Section 1557 final rule adopts WCAG 2.1 Level AA for covered
//    health programs, matching the ADA Title II standard the edtech page uses. Print no deadline.
// 4. NO STATISTICS. No breach counts, no market sizes, no penalty figures, no HITRUST breach-rate
//    marketing numbers. The only number that appears is the count of Safe Harbor identifiers,
//    which is the literal text of 45 CFR 164.514(b)(2) - a citation of regulatory structure like
//    "WCAG 2.1 AA" or "FHIR", not a metric of our work - and it carries NO efficacy claim.
// 5. VERSION-CONSERVATIVE. Refer to the FHIR R4 family and signal currency through US Core / USCDI
//    rather than printing a contested release number. Standards' own names (SMART on FHIR, HL7 v2)
//    are entity names, not currency claims.
// 6. THE CLOUD-VENDOR NOUN. AWS/Google/Azure all say "eligible / covered / in-scope, under a BAA,
//    shared responsibility" and NONE says "HIPAA compliant". Card 12 mirrors their exact wording.
const caps = [
  { icon: <IconShield className="h-5 w-5" />, t: "PHI-free architecture by default", d: "We design so that protected health information stays inside the HIPAA-eligible infrastructure you already run. What we build reads and writes it at request time rather than copying it into a store we control, so the records you are accountable for do not expand onto a vendor's servers you cannot audit." },
  { icon: <IconLayers className="h-5 w-5" />, t: "SMART on FHIR app launch", d: "An app authorised through OAuth 2.0 that acts under the user's own credentials against the record system's FHIR endpoint, with the EHR staying the system of record. It is the mechanism that lets an app read and write clinical data while holding none of it - the custody boundary, made concrete." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "FHIR R4, US Core and USCDI", d: "We build to the open, published US-realm profiles rather than a proprietary schema, so the data model your integration speaks is the one regulators and other vendors already build to. The specification is dedicated to the public domain; anyone can implement it." },
  { icon: <IconServer className="h-5 w-5" />, t: "HL7 v2, C-CDA and legacy interfaces", d: "The modern API is not always the interface that exists. We ingest and exchange HL7 v2 messages and C-CDA documents where a lab, an older system or a payer still speaks them, and design toward TEFCA and QHIN-reachable networks without claiming to be one." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "De-identified and synthetic dev data", d: "We build and test on synthetic records and de-identified datasets - the Safe Harbor and Expert Determination methods the Privacy Rule names, Safe Harbor being the removal of its 18 enumerated identifier categories - so real patient data is not required to do the work, and does not sit in a test environment waiting to leak." },
  { icon: <IconLock className="h-5 w-5" />, t: "Least-privilege access and audit logging", d: "Role-based access, break-glass that is time-boxed and logged rather than a standing key we hold, and tamper-evident trails that record who reached what, and when. Where a task genuinely needs production access, you grant it, it is scoped, and it expires." },
  { icon: <IconFileText className="h-5 w-5" />, t: "Consent and authorisation as data", d: "HIPAA authorisation, the heightened consent that substance-use records require, and GDPR Article 9 conditions modelled as first-class, granular and revocable data rather than a checkbox - because the sensitive-data rules are a schema decision before they are a policy statement." },
  { icon: <IconEye className="h-5 w-5" />, t: "Accessibility engineering to WCAG 2.1 AA", d: "Semantic structure, keyboard operability, contrast, focus order and screen-reader support built in from the first component and verified on real assistive technology - claimed as a method and as build work, never as a conformance outcome or a VPAT we do not have." },
  { icon: <IconCode className="h-5 w-5" />, t: "Secure-by-design SDLC", d: "Threat modelling, dependency and secrets scanning, static and dynamic analysis in the pipeline, and documented change control - the engineering practices the Security Rule safeguards describe, run as a matter of course rather than produced for an audit that has not happened." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Tokenisation and minimisation at the edge", d: "Opaque references in place of stored identifiers, field-level separation of the identifying data from the rest, and boundaries drawn so the systems we touch hold no identifiable health information even as they drive a workflow that depends on it." },
  { icon: <IconCpu className="h-5 w-5" />, t: "Grounded, non-diagnostic AI", d: "Assistance grounded in your own approved material, with human-in-the-loop review and explicit non-diagnostic guardrails. We treat the line where software starts driving a clinical decision as a hard boundary, because crossing it changes what the software legally is." },
  { icon: <IconShield className="h-5 w-5" />, t: "HIPAA-eligible cloud, under your BAA", d: "We deploy only on the services AWS calls HIPAA-eligible, Google calls covered and Azure calls in-scope, configured on your own tenant under the business associate agreement you hold with the cloud provider. Their own wording is eligible, covered, in-scope, under a BAA, shared responsibility - and we use theirs, not a marketer's." },
];

export function HealthCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we build for healthcare"
            title="Twelve things a health build turns on"
            sub="Almost none of it is the screen a patient sees. This is the layer a health product is actually judged on - and it is where a team that has read the standards and the Privacy Rule is worth more than a team that has printed a badge."
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
              <span className="font-semibold text-foreground">Our default for a health product:</span>{" "}
              draw the business-associate boundary first, and build on the outside of it. Start by
              asking whether the record system you already pay for does most of this, and whether the
              rest can ride on a SMART on FHIR app and the published standards. That is usually the
              fastest, cheapest and safest answer, and saying so costs us the larger engagement. When
              a custom build genuinely is right, keep the protected health information inside your own
              HIPAA-eligible infrastructure, reach it at request time under scoped and expiring
              access rather than a standing key, and develop against synthetic and de-identified data
              so real records never enter a test environment. Model consent and the sensitive-data
              segments before the features, because retrofitting them after the schema is set is the
              expensive path. Treat accessibility as build work from the first component, because
              under Section 1557 it is a gate and gates fail late. And keep the analytics and error
              trackers off any surface that sees patient data, because that is the exact failure the
              Federal Trade Commission has already acted on against consumer health apps.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
