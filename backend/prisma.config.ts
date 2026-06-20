// prisma.config.ts
// Prisma 7 configuration - connection URL lives here instead of schema.prisma

import { defineConfig } from "prisma/config";

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL ?? "",
  },
});
