import { browser } from '@wdio/globals';
import { env } from '../shared/env';

const windowSize = '--window-size=1280,720';
const ui = process.env.WDIO_UI === 'true';

export const config: WebdriverIO.Config = {
  runner: 'local',
  tsConfigPath: './tsconfig.json',

  specs: ['../features/**/*.feature'],
  maxInstances: 5,
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: env.headless ? ['--headless=new', windowSize] : [windowSize],
      },
    },
  ],

  logLevel: 'warn',
  baseUrl: env.baseUrl,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: 'cucumber',
  reporters: ['spec'],
  services: ui ? ['devtools'] : [],
  cucumberOpts: {
    require: ['./steps/**/*.ts'],
    format: [['html', '../reports/wdio/cucumber-report.html']],
    timeout: 60000,
  },

  // Scenarios of the same feature share one browser session, unlike Playwright's per-test context.
  afterScenario: async () => {
    await browser.deleteCookies();
    await browser.execute(() => window.localStorage.clear());
  },
};
