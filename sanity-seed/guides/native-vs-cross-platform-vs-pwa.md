<!-- category: Mobile; seeAlso: /services/mobile-app-development, /technologies/react-native, /technologies/flutter, /glossary#progressive-web-app-pwa -->

# Native vs cross-platform vs PWA: which mobile approach fits

**The short version:** most products should start cross-platform - one codebase that ships to both the App Store and Google Play, built with React Native or Flutter. Go fully native (separate iOS and Android apps in each platform's own tools) when you need the deepest platform fidelity, heavy device features, or the last few percent of performance. Consider a [PWA](/glossary#progressive-web-app-pwa) - a website that installs to the home screen and works offline - when you want an installable, no-app-store experience for a lighter or content-first product, and you can live with Apple's limits on what web apps may do on iOS. The choice is about reach, device access, and how much you share with the web, not about which technology is "modern."

## Decide the approach before you pick the framework

"React Native or Flutter" only matters once you have decided you are building cross-platform at all. Get the approach right first, because it is the decision that is expensive to reverse: moving from a PWA to a native store presence, or from cross-platform to fully native, means rebuilding, not refactoring.

Three approaches, defined plainly:

- **Native** - two separate apps, one for iOS built in Apple's tools (Swift/SwiftUI) and one for Android built in Google's (Kotlin). Each speaks its platform's language directly.
- **Cross-platform** - one codebase that ships to both stores. [React Native](/technologies/react-native) and [Flutter](/technologies/flutter) are the two serious options. You write once and ship two apps.
- **PWA** - a website with extra capabilities: it installs to the home screen, runs full-screen without browser chrome, works offline, and can send push notifications (with real caveats on iOS, below). No app store, no download - the user visits a URL and taps "Add to Home Screen," or you prompt them.

## When is native the right call?

Native fits when the app has to do things only the platform does well, or has to feel exactly like the platform in every gesture and transition.

Best for:
- Apps leaning hard on device hardware and OS features: advanced camera pipelines, Bluetooth/BLE peripherals, ARKit/ARCore, background location, health and sensor data, secure enclave work.
- Products where high-framerate interaction and instant cold start are the product - high-end games, pro creative tools.
- Teams that already have separate iOS and Android specialists shipping platform-specific features on each.

The trade-off is duplication. You maintain two codebases, two build pipelines, and usually two people or two teams. Every feature is built twice. That is the honest price of maximum fidelity, and for most business apps you are paying it for headroom you never use.

## Why cross-platform is the sensible default

For the large majority of products - marketplaces, SaaS companions, booking and ordering apps, community and content apps, internal tools - cross-platform is the right starting point. One codebase, both stores, one team, and access to most device features through plugins.

Best for:
- Any app that needs to be in both stores without doubling the build.
- Products whose interface is standard-ish (lists, forms, feeds, maps, chat) rather than a bespoke rendering engine.
- Teams that want to ship both platforms at one team's pace.

The trade-off is a performance and fidelity ceiling. It is high, and most apps never reach it, but it exists. Very heavy animation, deep platform-specific UX, or exotic hardware access can push you into writing native modules anyway, and at that point some of the "write once" advantage erodes.

Which framework depends on your team and your UI. [React Native](/technologies/react-native) is the default when your team or product already lives in React and JavaScript - shared mental model with the web, one hiring pool. [Flutter](/technologies/flutter) is the stronger pick when the interface itself is the product - custom, animation-rich UI - because it draws its own pixels for a consistent look on both platforms (it uses Dart). Neither is universally better; pick on the team you have and the UI you are building.

## When does a PWA make sense?

A PWA behaves like an installed app: home-screen icon, full-screen launch, offline support via a service worker, and push notifications. There is no store download and no review process - you ship it the way you ship a website.

Best for:
- Content-first and lighter products: publications, docs, dashboards, tools, storefronts where the core experience is already a good website.
- Reaching users who will not install a store app for a first, low-commitment visit.
- Teams that want one deployment for web and "app," updated instantly with no store review cycle.

**The honest PWA caveat:** on iOS, Apple limits what web apps can do. Web push works on iOS only for PWAs the user has actually added to the home screen, and several native capabilities (deep hardware access, background behavior, certain APIs) are restricted or absent compared with Android. A PWA also will not appear in an App Store or Google Play search unless you wrap it (for example with Capacitor or a Trusted Web Activity) and submit a store build. If store discovery or a store badge on your marketing page matters, a raw PWA does not give you that.

## Side by side

| | Native | Cross-platform | PWA |
|---|---|---|---|
| **What it is** | Separate iOS + Android apps in each platform's own tools | One codebase for both stores (React Native / Flutter) | A website that installs to the home screen |
| **App store presence** | Yes, both | Yes, both | No, unless wrapped |
| **Device / hardware access** | Fullest | Broad; native modules for the rest | Limited, more so on iOS |
| **Performance ceiling** | Highest | High; enough for most apps | Good for content/UI, not heavy compute |
| **Offline** | Full | Full | Yes, via service worker |
| **Cost / effort** | Highest (two codebases) | Moderate (one codebase) | Lowest (one web build) |
| **Update model** | Store review each release | Store review each release | Instant, like a website |
| **Best when** | Deep fidelity / heavy device features | Most products; both stores, one team | Lighter or content-first, no store needed |

## How do I decide?

Work through these in order. The first "yes" that genuinely applies usually settles it.

1. **Do you need to be in the app stores, or need heavy device features?** If store presence is non-negotiable (users expect to find you there) or you rely on serious hardware and OS access, rule out the raw PWA. You are choosing between native and cross-platform.
2. **How much is shared with the web, and how content-first is it?** If the product is essentially a good website that would benefit from installability and offline, and you can accept iOS's limits and no store listing, a PWA gets you there fastest and cheapest.
3. **Do you need the deepest platform fidelity or the top of the performance envelope?** If yes - pro tools, hardware-heavy, or fidelity-is-the-product - go native and accept two codebases. If no, choose cross-platform.
4. **Then, and only then, pick the framework.** [React Native](/technologies/react-native) if you live in React and JavaScript; [Flutter](/technologies/flutter) if custom, animation-rich UI is the whole point.

Budget and timeline sit across all of this. Native costs the most because you build twice. Cross-platform is one team and one codebase for both stores. A PWA is the least effort because it is one web build, but it buys the least reach into the stores and iOS capabilities. Do not pay for native headroom you will not use, and do not force a PWA into a job that needs the store and the hardware. For how these approaches map to real budgets, see [/pricing](/pricing).

## When we would tell you NOT to use each

- **Not native** when it is a standard business app and you are choosing it for prestige or a vague "native is faster." You will pay double to maintain two codebases for fidelity your users will not notice.
- **Not cross-platform** when the product is hardware-heavy or performance-critical and will end up as mostly native modules anyway - at that point you carry the cost of cross-platform and native both.
- **Not a PWA** when you need store discovery, in-app purchase through the stores, or the iOS capabilities Apple restricts for web apps. Wrapping helps with the store listing but does not remove the underlying web limits.

## The bottom line

Start cross-platform unless you have a specific reason not to. It serves most products, gets you into both stores with one team, and keeps the framework decision (React Native vs Flutter) as a second, lower-stakes step. Reach for native when platform fidelity or heavy device features are the point, and for a PWA when an installable, content-first web experience is genuinely enough and the App Store is not part of the plan.

If you want a second set of eyes on which approach fits your product - and, once that is settled, whether React Native or Flutter is the better build - Intention InfoService does that scoping as part of [mobile app development](/services/mobile-app-development). For how the framework choice plays out in practice, see [React Native](/technologies/react-native) and [Flutter](/technologies/flutter); for what a PWA is and is not, the [PWA glossary entry](/glossary#progressive-web-app-pwa).
