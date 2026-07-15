import type { Metadata } from "next";
import { isSanityConfigured } from "@/sanity/env";
import { StudioClient } from "./StudioClient";

export const dynamic = "force-static";
export const metadata: Metadata = {
  title: { absolute: "Studio" },
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

/**
 * Embedded Sanity Studio. This SERVER component imports no `sanity` code - only the
 * env guard and the client wrapper - so the Studio bundle never enters the server
 * graph. Gated on isSanityConfigured (red-team F2): a plain placeholder renders
 * until the founder connects the project, so NextStudio never mounts with an empty
 * projectId at build.
 */
export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <p style={{ maxWidth: "34rem", color: "#64748b", lineHeight: 1.6 }}>
          The content Studio becomes available once the Sanity project is connected. Set{" "}
          <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> in the environment to enable it.
        </p>
      </div>
    );
  }
  return <StudioClient />;
}
