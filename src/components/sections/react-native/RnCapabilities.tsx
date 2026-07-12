import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconCpu, IconLayers, IconCode, IconBolt, IconGrid, IconDatabase, IconChat, IconGauge, IconRocket, IconRefresh, IconCheck, IconClock } from "@/components/icons";

// The E-E-A-T CENTREPIECE and the entire proof substitute - we have shipped zero apps, so the
// depth of what this page knows about the NATIVE layer is the demo. This grid is the evidence for
// the "The React part is the easy part" thesis: eleven of these twelve cards are about things
// React does not teach you.
//
// FIVE HARD RULES ENFORCED HERE:
// 1. NO VERSION NUMBERS. The New Architecture is the default and the legacy bridge is being retired
//    from React Native itself - both true regardless of which point release you read. The exact
//    cutover versions move across sources, so we signal by feature, never by number.
// 2. NO AHEAD-OF-TIME NATIVE COMPILATION CLAIM. Hermes precompiles JavaScript to bytecode. Static
//    Hermes is a research compiler and Hermes V1 is experimental opt-in - neither ships as a
//    "compiles to a native binary" capability, so we never say it does.
// 3. NO APPLE/GOOGLE POLICY NUMBERS. No review times, no rejection rates, no clause numbers, no
//    deadlines. MobileProcess deliberately says "we plan around the current requirements".
// 4. NO BENCHMARKS. No fps, no cold-start percentages, no crash-free rates, no Flutter comparisons
//    by number. Performance is a mechanism we engineer and measure on YOUR build.
// 5. CAPABILITY TENSE ONLY. "We build", "we vet", "we keep" - never "we've shipped", "our apps",
//    "the apps we've upgraded".
//
// CodePush: Microsoft retired the hosted App Center CodePush service, and open-sourced a standalone
// server. Implying the hosted service still exists is a dated-vocabulary tell a technical buyer
// will catch, so card 10 names EAS Update or a self-hosted server and says the old one was retired.
const caps = [
  { icon: <IconCpu className="h-5 w-5" />, t: "The New Architecture, by default", d: "Fabric for rendering, TurboModules for native code loaded on demand, and the JSI for direct JavaScript-to-native calls, bridgeless. We build New-Architecture-only, because the legacy bridge is being retired from React Native itself." },
  { icon: <IconLayers className="h-5 w-5" />, t: "Expo where it earns its place", d: "React Native's own documentation now recommends starting with a framework, and Expo is that framework. We use it for routing, native APIs and the build pipeline, and we say plainly when a project's constraints mean going without one." },
  { icon: <IconCode className="h-5 w-5" />, t: "Native modules when the ecosystem stops", d: "When no library exists for the SDK, the sensor or the legacy system you need, we write the Swift and Kotlin ourselves and expose it cleanly to JavaScript. This is the line most React teams cannot cross, and it is where cross-platform projects actually fail." },
  { icon: <IconBolt className="h-5 w-5" />, t: "Hermes and startup engineering", d: "Hermes precompiles your JavaScript to bytecode so the app has less to do before the first screen appears. Cold start is engineered - bundle size, lazy native modules, what work happens before first paint - and measured on your build, not promised as a number." },
  { icon: <IconGrid className="h-5 w-5" />, t: "Navigation that survives the product", d: "Typed, file-based routing with Expo Router, or React Navigation where a project calls for it, with deep links, universal links and state restoration designed in from the start rather than bolted on when marketing asks for them." },
  { icon: <IconDatabase className="h-5 w-5" />, t: "Offline-first and local data", d: "A real local store, a sync strategy and explicit conflict rules - and an honest conversation about which screens genuinely need to work offline. Most apps do not need full offline, and the ones that do need it designed, not added." },
  { icon: <IconChat className="h-5 w-5" />, t: "Push, permissions and deep links", d: "Push notifications on both platforms, permission flows that ask at the moment the user understands why, and deep links that survive cold starts. These are small features with a long tail of platform-specific edge cases." },
  { icon: <IconGauge className="h-5 w-5" />, t: "List and animation performance", d: "Long lists that recycle rather than mount forever, and animations and gestures driven on the UI thread so they do not stutter when JavaScript is busy. We profile on real, mid-range devices - the ones your users actually hold." },
  { icon: <IconRocket className="h-5 w-5" />, t: "Build, signing and store release", d: "Cloud builds, code signing, TestFlight and Play internal testing tracks, and submission to both stores. We build to each store's current review and testing requirements, confirmed at kickoff, so a launch date is a real date." },
  { icon: <IconRefresh className="h-5 w-5" />, t: "Over-the-air updates, inside the rules", d: "JavaScript fixes and content changes pushed over the air through EAS Update, or a self-hosted open-source server - the old hosted CodePush service was retired. We stay inside what the stores permit and never promise to route around review." },
  { icon: <IconCheck className="h-5 w-5" />, t: "Testing and real-device QA", d: "Unit and component tests, end-to-end flows driven on real devices, and an OS-version matrix that reflects your actual audience rather than the newest phone in the room. Simulators do not catch what real hardware does." },
  { icon: <IconClock className="h-5 w-5" />, t: "Upgrades that don't strand the app", d: "React Native moves, and the reason so many apps rot on ancient versions is one un-migrated native dependency holding everything back. We vet the dependency tree before we adopt anything, and we treat upgrades as planned work rather than a crisis." },
];

export function RnCapabilities() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we build React Native"
            title="Twelve things React doesn't teach you"
            sub="This grid is the argument of this page. Almost none of it is React. It is the native layer that decides whether an app ships on time, passes review, feels right in the hand, and is still upgradable in two years - and it is what we engineer."
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
              <span className="font-semibold text-foreground">Our default React Native build:</span>{" "}
              Expo and TypeScript, on the New Architecture, with typed file-based routing. We start
              with a framework because React Native&apos;s own guidance now says to, and because the
              alternative is quietly rebuilding one yourself. We keep the dependency list short and
              check that every native library has moved to the New Architecture before we adopt it,
              since one that has not is the single most common reason an app cannot be upgraded later.
              Server state through a query cache, local state kept small and close to where it is
              used, and a fast key-value store for the things that must survive a cold start. Native
              modules written by hand when the ecosystem stops, not worked around with a hack that
              will break at the next OS release. Animations and gestures on the UI thread, lists that
              recycle, profiling on real mid-range devices. Builds, signing and store submission run
              through a real pipeline, with over-the-air updates for JavaScript fixes inside the rules
              the stores actually publish. And Expo is a choice, not a cage: it is the open-source
              framework, your code stays portable, and its paid cloud is a convenience we can use or
              skip. Where we would go without a framework is when a project has unusual native
              constraints that a framework genuinely gets in the way of - and we would tell you that
              before the build, not during it.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
