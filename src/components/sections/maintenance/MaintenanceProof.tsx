import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrow, IconCheck, IconGauge, IconShield, IconFileText } from "@/components/icons";
import { siteConfig } from "@/config/site";

// The honest substitute for the uptime-stats + testimonials slot we cannot fill.
// Primary wedge: our OWN live site runs on the exact care we sell, and the visitor
// can verify it via third-party tools - no self-reported uptime %, no fabricated
// SLA, no "sites maintained" count, no client logos. All checkable or honest.
const pagespeed = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(siteConfig.url)}`;

const reportRows = [
  { icon: <IconCheck className="h-4 w-4" />, t: "Updates applied", d: "Core, plugins and dependencies, with what changed" },
  { icon: <IconShield className="h-4 w-4" />, t: "Security & backups", d: "Scan results and a confirmed, restorable backup" },
  { icon: <IconGauge className="h-4 w-4" />, t: "Performance", d: "A speed and Core Web Vitals snapshot" },
  { icon: <IconFileText className="h-4 w-4" />, t: "Anything to watch", d: "Issues we spotted and what we recommend next" },
];

const riskReversal = [
  { t: "You own everything", d: "Your site, hosting, domain, accounts and logins stay yours. We work inside your accounts - we never hold your site hostage." },
  { t: "Month-to-month, no lock-in", d: "Care plans are month-to-month. Cancel anytime, keep everything. We earn the next month; we don't trap you into it." },
  { t: "We'll adopt a site we didn't build", d: "Inherited a site or lost your original builder? We start with a one-time health audit, so we both know what we're taking on." },
  { t: "Senior people, direct", d: "You reach the person who does the work, not a ticket queue - a registered company since 2016." },
  { t: "Updates tested first", d: "Updates run in staging before they touch production, so an update never takes your live site down." },
  { t: "Response within one business day", d: "An honest commitment we can keep: we respond within one business day, and tell you a realistic timeline up front." },
];

export function MaintenanceProof() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Proof, honestly"
            title={<>We can&apos;t show you a wall of client sites. <span className="gradient-text">We can show you ours.</span></>}
            sub="We're a growing practice, so instead of borrowed uptime badges and testimonials, we'll show you the more honest signal - our own live site, kept exactly the way we'd keep yours, and inviting you to check it."
          />
        </Reveal>

        {/* Own-site-as-proof: invite external verification, assert no numbers */}
        <Reveal className="mt-10">
          <div className="card glow-border relative overflow-hidden p-6 sm:p-8">
            <div className="relative z-[1]">
              <h3 className="font-display text-lg font-bold text-foreground">
                We run this site on the same care we&apos;d sell you
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                intentioninfoservice.com is kept fast, patched, backed up and current - the discipline
                this page is about. Don&apos;t take our word for it. Check it yourself: run our site
                through Google&apos;s own tools, and see that it loads over HTTPS on current software.
                That is proof precisely because you don&apos;t have to trust a number we typed.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={pagespeed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-brand-600 transition-colors hover:border-brand-400/50 dark:text-brand-400"
                >
                  Check our speed on PageSpeed Insights
                  <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* The monthly report as a concrete, named deliverable */}
        <Reveal className="mt-6">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="font-display text-base font-semibold text-foreground">
              What lands in your inbox every month
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Maintenance is invisible by nature, so we make it visible. Every month you get a plain,
              readable health report - not a wall of jargon:
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {reportRows.map((r) => (
                <li key={r.t} className="flex items-start gap-3 rounded-xl border border-border bg-muted/50 p-4">
                  <span aria-hidden="true" className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-brand-500">
                    {r.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{r.t}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Risk-reversal grid - the trust engine for a young practice */}
        <Reveal group className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riskReversal.map((r) => (
            <div key={r.t} className="card p-5">
              <h3 className="font-display text-sm font-semibold text-foreground">{r.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
