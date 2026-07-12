/**
 * Guarded Sanity env access. NEVER throws on missing vars (do not use the
 * assertValue/throw pattern from Sanity starters) - an empty projectId is a valid
 * "not configured yet" state so the build stays GREEN with no env, no network, no
 * content, and lights up the moment the founder connects a project.
 */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";

/** True only once a real Sanity project is wired via env vars. */
export const isSanityConfigured = projectId.length > 0;
