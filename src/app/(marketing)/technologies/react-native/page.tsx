import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { mobileAppDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { RnHero } from "@/components/sections/react-native/RnHero";
import { RnScope } from "@/components/sections/react-native/RnScope";
import { RnWhy } from "@/components/sections/react-native/RnWhy";
import { RnCapabilities } from "@/components/sections/react-native/RnCapabilities";
import { RnProof } from "@/components/sections/react-native/RnProof";
import { RnProcess } from "@/components/sections/react-native/RnProcess";
import { RnCompare } from "@/components/sections/react-native/RnCompare";
import { RnPricing } from "@/components/sections/react-native/RnPricing";
import { RnFaq } from "@/components/sections/react-native/RnFaq";

const SLUG = "react-native";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "React Native", path: PATH },
];

export default function ReactNativePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          // FIRST spoke whose offers come from mobileAppDevTiers, NOT webDesignDevTiers. Copying
          // the react or woocommerce assembly would emit the wrong five web tiers here. The name
          // and serviceType are deliberately distinct from the mobile money page's Service entity,
          // which already carries these same two Offers - two clearly different services, not a
          // duplicate. No own-site claim: this site contains no React Native.
          name: "React Native App Development",
          description:
            "React Native app development services - cross-platform iOS and Android apps from one codebase on the New Architecture, with Expo, hand-written native modules, offline sync, push, deep links and store submission, for startups, SMBs and enterprises, at transparent published fixed prices. You own the code, the IP and the store accounts, and we submit your app to the App Store and Google Play.",
          path: PATH,
          serviceType: "React Native app development",
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
          name: "React Native App Development Services",
          dateModified: new Date().toISOString(),
        })}
      />

      <RnHero crumbs={crumbs} />
      <RnScope />
      <RnWhy />
      <RnCapabilities />
      <RnProof />
      <RnProcess />
      <RnCompare />
      <RnPricing />
      <RnFaq />

      {/* First spoke whose hub is the mobile money page. Every commitment this page inherits -
          store submission, code and IP ownership, milestone billing, care plans - is defined
          there, so routing a mobile-intent buyer to a web hub would contradict its own locks. */}
      <CtaBand
        title="Ready to build your React Native app?"
        subtitle="Get a fixed-price quote for a React Native app on iOS and Android - plus a straight answer on whether React Native, Flutter or going fully native is the right call for your product. No quote wall, and you own the code, the IP and the store accounts."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See mobile app development", href: "/services/mobile-app-development" }}
      />
    </>
  );
}
