"use client";
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

/** Client boundary for the embedded Studio. Keeping the `sanity`/NextStudio imports
 *  inside a "use client" module keeps the heavy Studio bundle (and its browser-only
 *  deps like swr) OUT of the server component graph, where they break the build. */
export function StudioClient() {
  return <NextStudio config={config} />;
}
