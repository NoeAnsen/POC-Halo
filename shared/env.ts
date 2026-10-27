import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';

// Each runner starts from its own workspace folder, so the root .env is resolved from this file.
dotenv.config({ path: fileURLToPath(new URL('../.env', import.meta.url)), quiet: true });

export const env = {
  baseUrl: process.env.BASE_URL ?? 'https://www.saucedemo.com',
  password: process.env.SAUCE_PASSWORD,
  headless: process.env.HEADLESS !== 'false',
};
