import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import playwright from 'eslint-plugin-playwright';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: ['**/node_modules/', '**/.features-gen/', '**/test-results/', 'reports/'],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    files: ['playwright/**/*.ts'],
    extends: [playwright.configs['flat/recommended']],
  },
  {
    // playwright-bdd runs each step inside a generated test(), which the plugin cannot see.
    files: ['playwright/steps/**/*.ts'],
    rules: {
      'playwright/no-standalone-expect': 'off',
    },
  },
  prettier,
);
