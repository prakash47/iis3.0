import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { mobileAppDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { FurtherReading } from "@/components/sections/FurtherReading";
import { FlutterHero } from "@/components/sections/flutter/FlutterHero";
import { FlutterScope } from "@/components/sections/flutter/FlutterScope";
import { FlutterWhy } from "@/components/sections/flutter/FlutterWhy";
import { FlutterCapabilities } from "@/components/sections/flutter/FlutterCapabilities";
import { FlutterProof } from "@/components/sections/flutter/FlutterProof";
import { FlutterProcess } from "@/components/sections/flutter/FlutterProcess";
import { FlutterCompare } from "@/components/sections/flutter/FlutterCompare";
import { FlutterPricing } from "@/components/sections/flutter/FlutterPricing";
import { FlutterFaq } from "@/components/sections/flutter/FlutterFaq";

const SLUG = "flutter";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "Flutter", path: PATH },
];

export default function FlutterPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          // Offers come from mobileAppDevTiers, NOT webDesignDevTiers. Three Service entities on
          // this site now carry the same two Offers (the mobile money page, react-native, and this
          // page), so the distinct name and serviceType are the only thing keeping them from
          // reading as duplicate nodes in the graph. No own-site claim: nothing here is Dart.
          name: "Flutter App Development",
          description:
            "Flutter app development services - cross-platform iOS and Android apps from one Dart codebase, with Impeller rendering, a custom design system, accessibility semantics, native interop and store submission, for startups, SMBs and enterprises, at transparent published fixed prices. You own the code, the IP and the store accounts, and we submit your app to the App Store and Google Play.",
          path: PATH,
          serviceType: "Flutter app development",
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
          name: "Flutter App Development Services",
        })}
      />

      <FlutterHero crumbs={crumbs} />
      <FlutterScope />
      <FlutterWhy />
      <FlutterCapabilities />
      <FlutterProof />
      <FlutterProcess />
      <FlutterCompare />
      <FlutterPricing />
      <FlutterFaq />

      <FurtherReading
        links={[
          { href: "/guides/react-native-vs-flutter", label: "Guide: React Native vs Flutter - how to decide" },
          { href: "/guides/native-vs-cross-platform-vs-pwa", label: "Guide: native vs cross-platform vs PWA" },
        ]}
      />

      {/* Hub = the mobile money page, mirroring the react-native spoke. The subtitle is
          deliberately NOT a noun-swapped clone of react-native's: it leads with the Flutter
          question ("is the interface really the whole product?") before offering the honest
          alternative. The closing ownership clause is a shared brand commitment and may repeat. */}
      <CtaBand
        title="Ready to build your Flutter app?"
        subtitle="Get a fixed-price quote for a Flutter app on iOS and Android, drawn from one Dart codebase - plus an honest read on whether the interface really is the whole product, or whether React Native or going fully native would serve you better. No quote wall, and you own the code, the IP and the store accounts."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See mobile app development", href: "/services/mobile-app-development" }}
      />
    </>
  );
}
