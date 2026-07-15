import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { mobileAppDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { SwiftuiHero } from "@/components/sections/swiftui/SwiftuiHero";
import { SwiftuiScope } from "@/components/sections/swiftui/SwiftuiScope";
import { SwiftuiWhy } from "@/components/sections/swiftui/SwiftuiWhy";
import { SwiftuiCapabilities } from "@/components/sections/swiftui/SwiftuiCapabilities";
import { SwiftuiProof } from "@/components/sections/swiftui/SwiftuiProof";
import { SwiftuiProcess } from "@/components/sections/swiftui/SwiftuiProcess";
import { SwiftuiCompare } from "@/components/sections/swiftui/SwiftuiCompare";
import { SwiftuiPricing } from "@/components/sections/swiftui/SwiftuiPricing";
import { SwiftuiFaq } from "@/components/sections/swiftui/SwiftuiFaq";

const SLUG = "swiftui";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "SwiftUI", path: PATH },
];

/**
 * THIRD MOBILE SPOKE (after react-native + flutter), and the first native-APPLE one.
 *
 * PRICING from mobileAppDevTiers (Starter App $500, Mobile App Build $15,000), NOT webDesignDevTiers.
 * The serviceSchema name/serviceType are DISTINCT from the mobile money page's Service node AND from
 * the react-native and flutter spokes, which all already carry these same two Offers - a distinct
 * name is the only thing stopping a fourth duplicate Service node in the graph.
 *
 * HONESTY: cleanest-zero end (like flutter). No Swift/SwiftUI in this site's runtime, build or
 * tooling. Zero mobile apps shipped, ever, including zero native iOS. No own-site-as-proof wedge, and
 * no Lighthouse/CWV number (web proof does not transfer to a native app). The signature is the
 * platform-treadmill relationship ("On Apple's platform you are a guest, not the host"), genuinely
 * distinct from react-native's "the React part is the easy part" and flutter's pixel-craft.
 *
 * VERSION-CONSERVATIVE: no iOS/Xcode point-version numbers anywhere (WWDC ships a new generation each
 * year); currency is signalled by FEATURES (SwiftData, Observation/@Observable, Swift 6 concurrency,
 * the SwiftUI Instrument, native WebView). Liquid Glass is named as Apple's current design material,
 * never "this year's". The App Store / Apple policy trap is honored - no review times, rates or fees.
 */
export default function SwiftuiPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "SwiftUI App Development",
          description:
            "SwiftUI app development services - native iOS and Apple-platform apps built in Swift with SwiftUI, the Observation framework, SwiftData and Apple's own SDKs, for startups, SMBs and enterprises, at transparent published fixed prices. You own the code, the IP and the Apple Developer account, and we submit your app to the App Store for you.",
          path: PATH,
          serviceType: "SwiftUI app development",
          offers: mobileAppDevTiers.map((t) => ({
            name: t.name,
            priceValue: t.fromValue,
            priceCurrency,
            description: t.for,
          })),
        })}
      />
      <JsonLd
        data={webPageSchema({
          path: PATH,
          name: "SwiftUI App Development Services",
        })}
      />

      <SwiftuiHero crumbs={crumbs} />
      <SwiftuiScope />
      <SwiftuiWhy />
      <SwiftuiCapabilities />
      <SwiftuiProof />
      <SwiftuiProcess />
      <SwiftuiCompare />
      <SwiftuiPricing />
      <SwiftuiFaq />

      {/* Hub = the mobile money page, like the two sibling mobile spokes. Every commitment this page
          inherits - store submission, code + IP + account ownership, milestone billing, care plans,
          and the native-vs-cross-platform call - is defined there, so routing a mobile-intent buyer
          to a web hub would contradict its own locks. */}
      <CtaBand
        title="Ready to build your native iOS app?"
        subtitle="Get a fixed-price quote for a native SwiftUI app on iPhone, iPad and the rest of the Apple platforms - plus a straight answer on whether fully native is the right call for your product, or whether cross-platform would serve you better. No quote wall, and you own the code, the IP and the Apple Developer account."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See mobile app development", href: "/services/mobile-app-development" }}
      />
    </>
  );
}
