import { defineCliConfig } from "sanity/cli";
import { projectId, dataset } from "./src/sanity/env";

/** CLI config for `sanity` commands (dataset import, typegen, deploy). Reads the
 *  same guarded env as the app, so it targets the connected project. */
export default defineCliConfig({
  api: { projectId, dataset },
});
