import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";

// App TYPES as capabilities + honest one-liners - never a client name or a claim
// we cannot back. Sets scope, prequalifies leads, and fences the mobile hub
// against the web + custom-software money pages.
const scope = [
  { t: "Consumer & marketplace apps", d: "Two-sided marketplaces, social and content apps with clean, fast flows." },
  { t: "On-demand & booking apps", d: "Scheduling, delivery and booking apps with maps, payments and notifications." },
  { t: "Fintech & wallet apps", d: "Secure payment, wallet and finance apps with biometric auth (capability, built to your compliance needs)." },
  { t: "Health & fitness apps", d: "Tracking, wellness and care apps with sensors, reminders and sync." },
  { t: "Internal & field-team apps", d: "Apps for staff and field teams - forms, offline capture and dashboards." },
  { t: "Apps with backends & real-time", d: "Chat, live tracking and presence, built on the backend and APIs your app needs." },
  { t: "Offline-first apps", d: "Apps that keep working with no signal and sync cleanly when they reconnect." },
  { t: "PWAs (install-free)", d: "A progressive web app is an install-free alternative to a native app - lighter reach without the store." },
];

export function MobileScope() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we build"
            title="Apps we build for iOS and Android"
            sub="From a simple single-purpose app to a full product with a real-time backend. A typical engagement covers:"
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2">
          {scope.map((s) => (
            <div key={s.t} className="card flex items-start gap-3 p-5">
              <span aria-hidden="true" className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-500">
                <IconCheck className="h-3.5 w-3.5" />
              </span>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground">{s.t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Clean boundary vs the neighbouring money pages */}
        <Reveal className="mt-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Not building a native app? Need a website, web app or a web-presence PWA?{" "}
            <Link href="/services/web-design-development" className="font-medium text-brand-500 hover:text-brand-600">
              See web design &amp; development
            </Link>
            . Building a SaaS platform or internal system without a mobile app?{" "}
            <Link href="/services/custom-software-development" className="font-medium text-brand-500 hover:text-brand-600">
              See custom software development
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
