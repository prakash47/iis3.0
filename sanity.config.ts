import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
import { schemaTypes } from "./src/sanity/schema";
import { projectId, dataset, apiVersion } from "./src/sanity/env";

/**
 * Embedded Studio config, mounted at /studio. projectId/dataset come from the
 * guarded env - if projectId is empty (not connected yet) the Studio route renders
 * a placeholder instead of mounting, so the build stays green. The `sanity` CLI
 * (typegen / deploy) reads this file from the repo root.
 */
export default defineConfig({
  name: "iis-resources",
  title: "Intention InfoService Resources",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion }), codeInput()],
});
