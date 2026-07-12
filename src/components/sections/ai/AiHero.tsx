import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Pill } from "@/components/ui/Pill";
import { TrustChip } from "@/components/ui/TrustChip";
import { IconArrow, IconLock, IconCheck, IconShield, IconChat, IconCpu, IconTag, IconPin } from "@/components/icons";

const trustChips = [
  { icon: <IconLock className="h-4 w-4" />, label: "Your data isn't used to train models" },
  { icon: <IconCheck className="h-4 w-4" />, label: "You own the code, prompts & data" },
  { icon: <IconShield className="h-4 w-4" />, label: "Grounded, with human oversight" },
];

const glance = [
  { icon: <IconChat className="h-4 w-4" />, k: "We build", v: "Chatbots, assistants, automation & AI features" },
  { icon: <IconCpu className="h-4 w-4" />, k: "Models", v: "Model-agnostic - Claude, GPT, open models" },
  { icon: <IconTag className="h-4 w-4" />, k: "Pricing", v: "Scoped to your requirement, fixed quote" },
  { icon: <IconPin className="h-4 w-4" />, k: "Serves", v: "US, UK, UAE, EU & India" },
];

/**
 * AI development money-page hero. This is the hardest honest-proof case on the
 * site - our own site has no AI, so "our site is the proof" does NOT transfer.
 * The wedge is grounded/practical AI + you-own-everything + prove-it-on-a-pilot.
 * Number-free (AI is scoped to requirement; there is no fixed price to show).
 */
export function AiHero({ crumbs }: { crumbs: { name: string; path: string }[] }) {
  return (
    <div className="aurora">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Section className="relative z-[1] pt-6 sm:pt-8">
        <Container>
          <Breadcrumbs items={crumbs} />

          <div className="mt-8 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Pill dot>AI development &amp; automation</Pill>

              <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                AI development and automation, grounded in your data{" "}
                <span className="gradient-text">- not the hype.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Intention InfoService builds applied AI that earns its place: AI chatbots and
                assistants trained on your own content, AI workflow automation, and AI features
                built into your existing site or app. Grounded in your data, with guardrails and
                human oversight, on mainstream models - and you own the code, the prompts and the
                data. For startups, SMBs and enterprises across the US, UK, UAE, Europe and India.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <Button href="/contact" size="lg">
                  Book a discovery call
                  <IconArrow className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
                <Button href="#how-we-work" variant="ghost" size="lg">
                  See how we work
                </Button>
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                We scope it to your requirement and give you a fixed quote before any build. NDA on request.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {trustChips.map((c) => (
                  <li key={c.label}>
                    <TrustChip icon={c.icon}>{c.label}</TrustChip>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 lg:justify-self-end">
              <div className="card glow-border relative w-full max-w-sm overflow-hidden p-6">
                <p className="relative z-[1] text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  At a glance
                </p>
                <dl className="relative z-[1] mt-5 space-y-4">
                  {glance.map((g) => (
                    <div key={g.k} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-brand-500">
                        {g.icon}
                      </span>
                      <div className="min-w-0">
                        <dt className="text-xs text-muted-foreground">{g.k}</dt>
                        <dd className="font-display text-sm font-semibold text-foreground">{g.v}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
