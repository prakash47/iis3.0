import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/jsonLd";
import { metadataFrom } from "@/lib/seo/metadata";
import { technologyPageSeo } from "@/config/seo";
import { webDesignDevTiers, priceCurrency } from "@/content/pricing";
import { CtaBand } from "@/components/sections/CtaBand";
import { JavaHero } from "@/components/sections/java/JavaHero";
import { JavaScope } from "@/components/sections/java/JavaScope";
import { JavaWhy } from "@/components/sections/java/JavaWhy";
import { JavaCapabilities } from "@/components/sections/java/JavaCapabilities";
import { JavaProof } from "@/components/sections/java/JavaProof";
import { JavaProcess } from "@/components/sections/java/JavaProcess";
import { JavaCompare } from "@/components/sections/java/JavaCompare";
import { JavaPricing } from "@/components/sections/java/JavaPricing";
import { JavaFaq } from "@/components/sections/java/JavaFaq";

const SLUG = "java-spring-boot";
const PATH = `/technologies/${SLUG}`;

export const metadata: Metadata = metadataFrom(technologyPageSeo(SLUG)!);

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Technologies", path: "/technologies" },
  { name: "Java & Spring Boot", path: PATH },
];

export default function JavaSpringBootPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "Java & Spring Boot Development",
          description:
            "Java and Spring Boot development services - enterprise-grade backends, REST and GraphQL APIs, microservices and transaction-heavy systems on the JVM, built on Java 25 LTS and Spring Boot 4, for startups, scale-ups and enterprise teams, at transparent published fixed prices. You own the code, no lock-in.",
          path: PATH,
          serviceType: "Java and Spring Boot development",
          offers: webDesignDevTiers.map((t) => ({
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
          name: "Java & Spring Boot Development Services",
          dateModified: new Date().toISOString(),
        })}
      />

      <JavaHero crumbs={crumbs} />
      <JavaScope />
      <JavaWhy />
      <JavaCapabilities />
      <JavaProof />
      <JavaProcess />
      <JavaCompare />
      <JavaPricing />
      <JavaFaq />

      <CtaBand
        title="Ready to build with Java and Spring Boot?"
        subtitle="Get a fixed-price quote or a Discovery Sprint for a Java and Spring Boot backend - standard Spring Boot you own outright, no lock-in, and a straight answer on whether Java is even the right call. No quote wall, no hourly rate."
        primary={{ label: "Get a fixed quote", href: "/contact" }}
        secondary={{ label: "See custom software", href: "/services/custom-software-development" }}
      />
    </>
  );
}
