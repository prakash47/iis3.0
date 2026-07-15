import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { mobileAppDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { KotlinHero } from "@/components/sections/kotlin/KotlinHero";
import { KotlinScope } from "@/components/sections/kotlin/KotlinScope";
import { KotlinWhy } from "@/components/sections/kotlin/KotlinWhy";
import { KotlinCapabilities } from "@/components/sections/kotlin/KotlinCapabilities";
import { KotlinProof } from "@/components/sections/kotlin/KotlinProof";
import { KotlinProcess } from "@/components/sections/kotlin/KotlinProcess";
import { KotlinCompare } from "@/components/sections/kotlin/KotlinCompare";
import { KotlinPricing } from "@/components/sections/kotlin/KotlinPricing";
import { KotlinFaq } from "@/components/sections/kotlin/KotlinFaq";

const SLUG = "kotlin";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "Kotlin", path: PATH },
];

/**
 * THE LAST MOBILE SPOKE - native ANDROID, completing the SwiftUI/Kotlin native pair (SwiftUI = iOS).
 *
 * PRICING from mobileAppDevTiers (Starter App $500, Mobile App Build $15,000), NOT webDesignDevTiers.
 * serviceSchema name/serviceType are the FIFTH distinct pair - the mobile money page + react-native +
 * flutter + swiftui spokes all already carry these same two Offers, so a distinct name is the only
 * thing stopping a fifth duplicate Service node.
 *
 * HONESTY: cleanest-zero (no Kotlin anywhere; no declarative-echo to fence, unlike SwiftUI). Zero
 * mobile apps shipped, ever, including zero native Android. No own-site-as-proof, no Lighthouse/CWV
 * number. The signature is FRAGMENTATION ("you ship to a landscape nobody controls") - the SPATIAL
 * mirror of SwiftUI's temporal "guest on Apple's controlled platform"; kept off the temporal
 * treadmill beat, which is SwiftUI's lane.
 *
 * BOUNDARY: Kotlin here = native Android ONLY. "Kotlin on a Spring Boot backend" is the
 * /technologies/java-spring-boot page's lane (which fences it), reciprocated here. KMP is a headline
 * CAPABILITY (share the logic, keep each platform native), never a challenger to the "cross-platform
 * RN/Flutter is the smart default" lock.
 *
 * VERSION-CONSERVATIVE: no Android/Kotlin point-versions; currency via FEATURES (Jetpack Compose,
 * Material 3, coroutines/Flow, the K2 compiler, Kotlin Multiplatform, Compose Multiplatform). NO
 * device counts / OS-version shares / crash-free figures (the fragmentation thesis carries no number).
 */
export default function KotlinPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "Kotlin Android App Development",
          description:
            "Kotlin Android app development services - native Android apps built in Kotlin and Jetpack Compose, with the Jetpack architecture libraries, Material 3 and Kotlin Multiplatform for shared logic, for startups, SMBs and enterprises, at transparent published fixed prices. You own the code, the IP and the Google Play Developer account, and we submit your app to the Play Store for you.",
          path: PATH,
          serviceType: "Kotlin Android app development",
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
          name: "Kotlin Android App Development Services",
        })}
      />

      <KotlinHero crumbs={crumbs} />
      <KotlinScope />
      <KotlinWhy />
      <KotlinCapabilities />
      <KotlinProof />
      <KotlinProcess />
      <KotlinCompare />
      <KotlinPricing />
      <KotlinFaq />

      {/* Hub = the mobile money page, like the three sibling mobile spokes. Every commitment this page
          inherits - Play submission, code + IP + account ownership, milestone billing, care plans, and
          the native-vs-cross-platform call - is defined there. */}
      <CtaBand
        title="Ready to build your native Android app?"
        subtitle="Get a fixed-price quote for a native Kotlin app on Android - plus a straight answer on whether fully native is the right call for your product, or whether cross-platform or Kotlin Multiplatform would serve you better. No quote wall, and you own the code, the IP and the Google Play Developer account."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See mobile app development", href: "/services/mobile-app-development" }}
      />
    </>
  );
}
