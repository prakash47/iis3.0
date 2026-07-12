import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonLd";

// Answer-first, mirrored 1:1 into FAQPage JSON-LD. Cost is answered with the real
// published numbers; response time is stated honestly (one business day); no
// fabricated uptime %, SLA clock, client counts or certifications.
const faqs = [
  {
    question: "What is website maintenance?",
    answer:
      "Website maintenance is the ongoing work of keeping a live site healthy after launch - applying software updates, running security scans, taking backups, monitoring uptime and performance, fixing small issues, and making minor content changes. It's the difference between a site that quietly degrades and one that stays fast, secure and working.",
  },
  {
    question: "What is included in a website maintenance plan?",
    answer:
      "Our care plans cover updates (core, plugins and dependencies, tested in staging), scheduled offsite backups, security monitoring and malware scans, uptime monitoring, performance checks, broken-link and form checks, a set amount of content edits, and a plain monthly health report. Higher plans add more frequent updates, performance optimization, more edit time and priority support.",
  },
  {
    question: "What is the difference between website maintenance and web hosting?",
    answer:
      "Hosting keeps your site online - it's the server your site lives on. Maintenance keeps your site working, secure, updated and healthy on that server. Your host won't update your software, test your backups, fix a broken form or tell you when performance slips. Hosting is the address; maintenance is the upkeep.",
  },
  {
    question: "Do I need a website maintenance plan?",
    answer:
      "If your site matters to your business, yes. Software left un-updated is the most common way sites get hacked, backups fail silently, and speed decays over time. A maintenance plan is low-cost insurance against a hacked, broken or slow site - and it saves you the time and stress of doing it yourself.",
  },
  {
    question: "What happens if I don't maintain my website?",
    answer:
      "Over time, outdated software opens security holes, plugins break each other, forms and checkouts stop working, backups you never tested turn out to be missing, and speed drifts down along with your search rankings. Most of it is invisible until something fails at the worst moment. Maintenance is about catching those quietly, before they cost you.",
  },
  {
    question: "How often should a website be updated?",
    answer:
      "Security patches should be applied as they're released; core, plugin and dependency updates monthly at minimum, tested before they go live. Backups should run continuously and be verified. We work on a fixed cadence - daily and weekly monitoring and backups, monthly updates and reporting, quarterly deeper reviews.",
  },
  {
    question: "How much does website maintenance cost?",
    answer:
      "Our care plans are published and month-to-month: Essential from $100/month, Growth from $200/month, and Pro from $300/month, differing by update frequency, support time and depth of care. If you'd rather start with a one-time check, a Website Health Audit & Tune-up is $100. No quote wall, no lock-in.",
  },
  {
    question: "Are your maintenance plans month-to-month or contract-based?",
    answer:
      "Month-to-month, with no long-term contract and no lock-in. You can cancel anytime and you keep everything - your site, hosting, domain and accounts are always yours. We'd rather earn your renewal each month than trap you in a contract.",
  },
  {
    question: "Can you maintain a website you didn't build?",
    answer:
      "Yes, on any stack. We start with a one-time Website Health Audit & Tune-up (from $100) so we both know exactly what we're taking on - we won't blindly promise to keep a codebase healthy we've never seen. After the audit, you can roll onto a monthly care plan, or just keep the report and fixes.",
  },
  {
    question: "Do you maintain WordPress, Shopify, Next.js and custom sites?",
    answer:
      "Yes - we're stack-agnostic. We maintain WordPress and Shopify sites, headless and custom CMS builds, and Next.js, React or fully custom sites alike. We're not a WordPress-only care shop. For stack-specific questions, we point you to the relevant technologies page.",
  },
  {
    question: "What's in the monthly report?",
    answer:
      "A plain, readable summary: which updates we applied and what changed, security scan results, a confirmed and restorable backup, a performance and Core Web Vitals snapshot, and anything we spotted that needs attention with our recommendation. Maintenance is invisible by nature, so the report makes it visible.",
  },
  {
    question: "What happens if my site goes down or gets hacked?",
    answer:
      "Uptime monitoring alerts us when a site goes down, and if the worst happens we can restore from a recent, verified backup and work to clean and secure the site. We describe our process honestly rather than promise a guaranteed downtime figure - what we commit to is responding within one business day and being straight with you about timelines.",
  },
  {
    question: "How fast do you respond to support requests?",
    answer:
      "We respond within one business day, and you reach the senior person who actually does the work - not a ticket queue. Higher-tier plans get prioritized support. We keep this commitment honest and don't advertise an instant-response SLA we couldn't reliably keep as a small senior team.",
  },
];

export function MaintenanceFaq() {
  return (
    <Section className="bg-muted/50">
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Website maintenance, answered" />
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
