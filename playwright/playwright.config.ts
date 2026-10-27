import { fileURLToPath } from 'node:url';
import { defineConfig, devices } from '@playwright/test';
import { cucumberReporter, defineBddConfig } from 'playwright-bdd';
import { env } from '../shared/env';

const testDir = defineBddConfig({
  // playwright-bdd checks featuresRoot against the working directory, and the VS Code extension runs from the repo root.
  featuresRoot: fileURLToPath(new URL('../features', import.meta.url)),
  features: '../features/**/*.feature',
  steps: ['./steps/**/*.ts', './fixtures.ts'],
});

export default defineConfig({
  testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [
    ['list'],
    cucumberReporter('html', { outputFile: '../reports/playwright/cucumber-report.html' }),
    ['html', { outputFolder: '../reports/playwright/html', open: 'never' }],
  ],
  use: {
    baseURL: env.baseUrl,
    testIdAttribute: 'data-test',
    headless: env.headless,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
