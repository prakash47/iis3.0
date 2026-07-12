import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconLayers, IconGrid, IconServer, IconDatabase, IconCode, IconSpark, IconArrow } from "@/components/icons";

// CAPABILITY TENSE ONLY. We have zero healthcare clients and have integrated zero EHRs, so every
// card describes what a job of this shape involves and how we would approach it - never "the
// portals we build" or "our healthcare clients". The word "app" stays out of the headings.
//
// EVERY CARD IS INSIDE THE PHI-FREE BOUNDARY. None of them requires Intention InfoService to
// create, receive, maintain or transmit protected health information on a covered entity's
// behalf, which is the four-verb trigger for business-associate status. That is not a coincidence;
// it is the scope of the business this page describes.
//
// Anchors are worded differently from every inbound link on the site, including the homepage
// grid's "Explore healthcare software development".
const uses = [
  { icon: <IconGrid className="h-5 w-5" />, t: "Patient and provider portals", d: "The interface people actually use to book, message, pay a bill, view results and manage a record - reading and writing through the systems that already hold the data, rather than copying it into a new database somebody now has to defend." },
  { icon: <IconLayers className="h-5 w-5" />, t: "SMART on FHIR apps and integration", d: "An app that launches inside the record system, authorised through OAuth 2.0 under the user's own credentials, so the EHR stays the system of record and the custody boundary. We build to the published specification, which is free to anyone." },
  { icon: <IconServer className="h-5 w-5" />, t: "Booking, intake and pre-auth surfaces", d: "Scheduling, registration, forms and payment flows that post straight into the processor and the practice-management system you already run under their agreements, rather than parking identifiable information on a server we control." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Operational tooling on de-identified data", d: "Dashboards, reporting and workflow tools built on de-identified or aggregate datasets, so the people analysing throughput and no-show rates are not handling identifiable records to do it." },
  { icon: <IconCode className="h-5 w-5" />, t: "Public sites and pre-login surfaces", d: "Provider directories, find-a-doctor search, service lines, location and hours, price-transparency displays fed from your systems, and the content that ranks. None of it holds patient data at all, and it is the majority of most healthcare web work." },
  { icon: <IconSpark className="h-5 w-5" />, t: "AI features, grounded and non-diagnostic", d: "Assistance grounded in your own approved material, with human-in-the-loop review. Explicitly not clinical decision support and not a diagnosis: the moment software is intended to drive a treatment decision, it is a different regulatory animal, and we say so." },
];

export function HealthScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build for healthcare"
            title="The surfaces around the record, not the record itself"
            sub="Healthcare software is mostly interface, integration and constraint. The system of record already exists, it is expensive, and it is where the patient data belongs. The interesting engineering is what you can build around it without becoming one more place a breach can happen. A typical engagement is one of these:"
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
                What this page is, and where the build actually lives
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                This page is about the sector, what building for it demands, and which side of the
                compliance boundary we stand on. The engagement itself is priced and scoped on the
                service pages:
              </p>

              <ul className="mt-6 grid gap-3">
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      A bespoke system, scoped before it is priced
                    </span>
                    {" - "}
                    a portal or an integration layer is custom software, so it enters through{" "}
                    <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
                      the discovery-first way we price a bespoke build
                    </Link>
                    . Which stack it lands on is a separate question, answered on{" "}
                    <Link href="/technologies" className="font-medium text-brand-500 hover:text-brand-600">
                      how we decide what to build it with
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      The site in front of the practice, not the system behind it
                    </span>
                    {" - "}
                    the public site that people find you through holds no patient data and is a
                    different job with its own published starting prices. That is{" "}
                    <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
                      a healthcare marketing site, priced and published
                    </Link>
                    , and being found in the first place is{" "}
                    <Link href="/services/digital-marketing" className="font-medium text-brand-500 hover:text-brand-600">
                      an organic growth engagement
                    </Link>
                    .
                  </p>
                </li>
                <li className="rounded-2xl border border-border bg-surface p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                      <IconArrow className="h-4 w-4 text-brand-500" />
                      Patients on phones
                    </span>
                    {" - "}
                    a native patient experience is a separate build, and we have not shipped a mobile
                    app for anyone yet, in this sector or any other. The honest terms are set out on{" "}
                    <Link href="/services/mobile-app-development" className="font-medium text-brand-500 hover:text-brand-600">
                      mobile app development, on honest terms
                    </Link>
                    . Assistive features route to{" "}
                    <Link href="/services/ai-development" className="font-medium text-brand-500 hover:text-brand-600">
                      AI features, grounded in your own data
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
