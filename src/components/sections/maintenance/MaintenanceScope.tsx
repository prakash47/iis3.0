import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck, IconClock, IconRefresh, IconGauge } from "@/components/icons";

// The spine of the page, grouped by CADENCE (what happens ongoing vs monthly vs
// quarterly) - a tangible, honest way to show continuous value. Capabilities only,
// never a fabricated stat.
const groups = [
  {
    icon: <IconClock className="h-5 w-5" />,
    cadence: "Every day & week",
    items: [
      "Uptime monitoring with alerts if the site goes down",
      "Security scans for malware and vulnerabilities",
      "Scheduled offsite backups, ready to restore",
      "Anomaly and error checks",
    ],
  },
  {
    icon: <IconRefresh className="h-5 w-5" />,
    cadence: "Every month",
    items: [
      "Core, plugin, theme and dependency updates - tested in staging",
      "Performance and speed checks (Core Web Vitals)",
      "Broken-link, form and checkout checks",
      "Content edits and small changes",
      "A plain-English health report",
    ],
  },
  {
    icon: <IconGauge className="h-5 w-5" />,
    cadence: "Every quarter",
    items: [
      "SSL and certificate verification",
      "A deeper security and dependency review",
      "A performance and image-optimization pass",
      "User, permission and access review",
    ],
  },
];

const notIncluded = [
  { label: "a new site or a rebuild", href: "/services/web-design-development", anchor: "web design & development" },
  { label: "more traffic and rankings", href: "/services/digital-marketing", anchor: "digital marketing" },
  { label: "new software or system features", href: "/services/custom-software-development", anchor: "custom software" },
];

export function MaintenanceScope() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What's included"
            title="Everything it takes to keep a site healthy"
            sub="A care plan is not a vague promise to 'keep an eye on things'. It's a defined set of work on a fixed cadence - here's exactly what happens, and how often."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-5 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.cadence} className="card flex flex-col p-6">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-2 text-brand-500">
                  {g.icon}
                </span>
                <h3 className="font-display text-base font-semibold text-foreground">{g.cadence}</h3>
              </div>
              <ul className="mt-5 space-y-2.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        {/* Stack-agnostic note */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              We maintain the site you have, on any stack
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              WordPress, Shopify, a headless CMS, a Next.js or React build, or a fully custom site -
              we are not a WordPress-only care shop. For stack-specific questions, see the{" "}
              <Link href="/technologies" className="font-medium text-brand-500 hover:text-brand-600">
                technologies we work with
              </Link>
              .
            </p>
          </div>
        </Reveal>

        {/* What's NOT included + cross-links (the honest boundary) */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-muted/50 p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              What a care plan is not
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              Maintenance keeps your existing site healthy - it isn&apos;t{" "}
              {notIncluded.map((n, i) => (
                <span key={n.href}>
                  <Link href={n.href} className="font-medium text-brand-500 hover:text-brand-600">
                    {n.label}
                  </Link>
                  {i < notIncluded.length - 2 ? ", " : i === notIncluded.length - 2 ? ", or " : ""}
                </span>
              ))}
              . Bigger content or feature changes are quoted separately, and we&apos;ll always tell
              you honestly which side of the line something falls on. One boundary is firm: these
              plans take backups of, and hold access to, ordinary websites, so we do not point them
              at a system that stores protected health information - that would make us a business
              associate under HIPAA. For healthcare builds we care for the non-PHI surfaces only,{" "}
              <Link href="/industries/healthcare" className="font-medium text-brand-500 hover:text-brand-600">
                on the terms set out on our healthcare page
              </Link>
              . The same firm boundary holds for financial account data, cardholder data and any
              system that sits in the path money moves along - we don&apos;t point standard care
              plans at those either, and a fintech build is cared for{" "}
              <Link href="/industries/fintech" className="font-medium text-brand-500 hover:text-brand-600">
                on the terms set out on our fintech page
              </Link>
              . And it holds again for a real-estate build that stores tenant or applicant personal
              information or carries MLS listing data under a redistribution-limited licence, cared
              for{" "}
              <Link href="/industries/real-estate" className="font-medium text-brand-500 hover:text-brand-600">
                on the terms set out on our real-estate page
              </Link>
              . And a fourth time for a travel build that stores traveller passport or personal data,
              sits in a booking-payments path, or carries GDS, channel or supplier data under a
              redistribution-limited agreement, cared for{" "}
              <Link href="/industries/travel" className="font-medium text-brand-500 hover:text-brand-600">
                on the terms set out on our travel page
              </Link>
              . And a fifth time for an entertainment or media build that stores rights-licensed
              content under a redistribution-limited licence, holds user uploads and the moderation
              records behind them, or carries the viewing data the VPPA reaches - taking a routine
              offsite backup of any of those would put a copy of licensed content, user-uploaded
              material or viewing records on a system we run, cared for{" "}
              <Link href="/industries/entertainment-media" className="font-medium text-brand-500 hover:text-brand-600">
                on the terms set out on our entertainment and media page
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
