import { browser } from '@wdio/globals';

export default abstract class Page {
  abstract readonly path: string;

  get url() {
    return new URL(this.path, browser.options.baseUrl).href;
  }

  async open() {
    await browser.url(this.path);
  }
}
