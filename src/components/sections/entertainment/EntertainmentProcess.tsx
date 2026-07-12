import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";
import { IconSearch, IconLock, IconShield, IconEye, IconRefresh } from "@/components/icons";

// The distinctive media beats: a rights-and-shelter map that decides the whole engagement BEFORE
// anything is designed, entitlement and safe-harbor machinery built before the happy path, and a care
// handover that never points a standard plan at rights-licensed content, user uploads or viewing data.
//
// METHOD tense throughout. We have never run this process for a media client, so every step is "we
// will", never "we have". No compliance outcome promised. The first step draws the line: which roles
// stay the client's, which pieces to buy rather than build, and where the rights, uploads and viewing
// data flow.
const steps = [
  { icon: <IconSearch className="h-6 w-6" />, title: "Discovery & the rights-and-shelter map", timeframe: "1-2 weeks", deliverable: "A paid discovery that ends in a written scope, a fixed build quote credited toward the build, and a map of what your platform will carry, who made it, where the rights, the uploads and the viewing data flow, and which roles - licensee, royalty payer, host of record - stay yours. If a packaged player, CMS or ticket engine already does most of a piece, we say so, and the engagement gets smaller." },
  { icon: <IconLock className="h-6 w-6" />, title: "Rights and entitlement first", timeframe: "before the happy path", deliverable: "How a licence becomes data the software checks before it serves - window, territory and availability as first-class fields - and how the paywall or entitlement gate is enforced server-side. The provable-licence layer is designed before the player or the article page is polished, because an item served without a right behind it is the failure the whole product is judged on." },
  { icon: <IconShield className="h-6 w-6" />, title: "Build the safe-harbor and moderation machinery", timeframe: "weeks", deliverable: "For a platform that hosts uploads: the DMCA notice-and-takedown and counter-notice pipeline with a review step, repeat-infringer tracking, the three-year agent renewal wired into your calendar, the moderation and CSAM-reporting workflow, and the DSA and OSA notice-and-action plumbing - built as two systems, copyright and content-tort, because they answer to two different shelters." },
  { icon: <IconEye className="h-6 w-6" />, title: "Consent, accessibility & the ticketing surfaces", timeframe: "throughout", deliverable: "The tag and consent layer that keeps third-party pixels near video behind consent and viewing identifiers off anything that leaves your domain, captions and audio description the player can deliver and WCAG success criteria as a method, and where ticketing is in scope, time-boxed seat holds, all-in pricing up front and enforceable purchase limits - built in, not retrofitted. Payments ride a licensed processor." },
  { icon: <IconRefresh className="h-6 w-6" />, title: "Deploy, hand over & care", timeframe: "on delivery", deliverable: "Deployed into your own environment, then handed over: the repository, the code, the rights metadata and the DMCA-agent registration are yours. Care runs on the non-sensitive surfaces only - the marketing site, the front-end code, the pipeline - while backups, access and monitoring of anything holding rights-licensed content, user uploads or viewing data stay inside your environment, run by you, not on a system we operate." },
];

export function EntertainmentProcess() {
  return (
    <section id="how-we-work" className="aurora bg-band py-10 sm:py-12">
      <div aria-hidden="true" className="bg-dots absolute inset-0" />
      <Container className="relative z-[1]">
        <Reveal>
          <Pill tone="onDark" className="mb-4 uppercase tracking-widest">
            How we work
          </Pill>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl">
            The rights-and-shelter map comes <span className="gradient-text">before the build</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            We map what your platform will carry, who authored it, where the rights, the uploads and the
            viewing data flow, and which roles stay yours, before anyone designs a screen - because that
            map decides what is worth building and what is better bought. Then we design the entitlement
            and safe-harbor machinery before the happy path, not after launch.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-8 right-8 top-7 hidden h-px bg-gradient-to-r from-brand-500/60 via-accent-400/50 to-transparent lg:block"
          />
          <Reveal group className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((p) => (
              <div
                key={p.title}
                className="group/step relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="relative z-[1] flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] text-brand-300 shadow-[0_0_0_7px_var(--band)] backdrop-blur transition-colors duration-300 group-hover/step:border-brand-400/50 group-hover/step:text-brand-200">
                  {p.icon}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 lg:justify-start">
                  <h3 className="font-display text-base font-semibold text-white">{p.title}</h3>
                  <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold text-brand-300">
                    {p.timeframe}
                  </span>
                </div>
                <p className="mt-2.5 max-w-[15rem] text-sm leading-relaxed text-slate-400 lg:max-w-none">
                  {p.deliverable}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
