// /** @type{import("drizzle-kit").Config} */
// export default {
//   schema: "./schema.ts",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: "postgresql://hszaman_owner:CH96FRiuPmJL@ep-raspy-water-a5l1ytqv.us-east-2.aws.neon.tech/ai-interview?sslmode=require"
//   }
// }


import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://hszaman_owner:CH96FRiuPmJL@ep-raspy-water-a5l1ytqv.us-east-2.aws.neon.tech/ai-interview?sslmode=require",
  }
});

