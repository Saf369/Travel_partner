import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url().optional(),
  PORT: z.string().default('3000'),
  JWT_SECRET: z.string().optional(),
});

// Avoid failing at startup if env variables are missing for now
// export const env = envSchema.parse(process.env);
