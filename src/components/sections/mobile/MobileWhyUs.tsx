import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCheck } from "@/components/icons";

// Concrete, checkable operating claims - never adjectives. Every one is TRUE
// and confirmed (the four risk-reversal claims were founder-confirmed).
const reasons = [
  { t: "Stack-agnostic, not stack-locked", d: "We recommend native or cross-platform for your product and budget, not the one we happen to sell." },
  { t: "The native-or-cross-platform call, in writing", d: "We make the decision with you in discovery - before you spend on a build you don't need.", link: { label: "See how it works", href: "#how-we-work" } },
  { t: "Published fixed prices, no quote wall", d: "You see a starting price before you talk to us, and a fixed price before we start.", link: { label: "See pricing", href: "/pricing" } },
  { t: "You own 100% of the code and IP", d: "Full ownership transfers to you on final payment - no lock-in, no license back to us." },
  { t: "We submit to the App Store and Google Play", d: "Store submission and release is part of the build, not left on your plate." },
  { t: "Senior people, direct", d: "You work with the people building your app - a registered company since 2016, no account managers or offshore handoff." },
];

export function MobileWhyUs() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why us"
            title="Why teams choose us for their app"
            sub="Six things you can check, not adjectives you have to trust."
          />
        </Reveal>

        <Reveal group className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.t} className="card flex flex-col p-6">
              <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                <IconCheck className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-foreground">{r.t}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              {r.link && (
                <Link
                  href={r.link.href}
                  className="mt-4 inline-flex text-sm font-semibold text-brand-700 transition-colors hover:text-brand-600 dark:text-brand-400"
                >
                  {r.link.label}
                </Link>
              )}
            </div>
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
