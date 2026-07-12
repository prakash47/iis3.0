import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconRocket, IconRefresh, IconShield } from "@/components/icons";

// Three honest engagement modes (Pagepro-style), the ones a Next.js buyer
// actually arrives with. Migration and rescue are high-intent, under-served lanes.
const modes = [
  { icon: <IconRocket className="h-6 w-6" />, t: "New Next.js build", d: "From a fixed-price discovery to a live App Router site or app, shipped in weeks. Scope agreed and priced up front, code you own at the end." },
  { icon: <IconRefresh className="h-6 w-6" />, t: "Migration & replatform", d: "Move a WordPress, Create React App, Gatsby or legacy Next.js site to a modern App Router build - incrementally, with URLs and SEO rankings preserved." },
  { icon: <IconShield className="h-6 w-6" />, t: "Rescue, takeover & care", d: "Inherited a Next.js codebase that's slow or stalled? We audit it, stabilize it, and can keep it healthy on a care plan." },
];

export function NextjsProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            Three ways to <span className="gradient-text">start with Next.js</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Whether you&apos;re starting fresh, moving off an old stack, or rescuing a build that
            stalled - most projects go from kickoff to live in weeks, not months.
          </p>
        </Reveal>

        <Reveal group className="mt-14 grid gap-5 lg:grid-cols-3">
          {modes.map((m) => (
            <div key={m.t} className="rounded-2xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur transition-colors duration-300 hover:border-brand-400/40">
              <span aria-hidden="true" className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] text-brand-300">
                {m.icon}
              </span>
              <h3 className="mt-5 font-display text-base font-semibold text-white">{m.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{m.d}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-6">
          <p className="text-sm text-slate-400">
            Rescue and care pair with our{" "}
            <Link href="/services/website-maintenance-services" className="font-medium text-brand-300 hover:text-brand-200">
              website maintenance plans
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
