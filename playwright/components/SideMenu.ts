import type { Locator, Page } from '@playwright/test';

export class SideMenu {
  readonly openButton: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.openButton = page.getByRole('button', { name: 'Open Menu' });
    this.logoutLink = page.getByTestId('logout-sidebar-link');
  }

  async open() {
    await this.openButton.click();
  }

  async clickLogout() {
    await this.logoutLink.click();
  }

  async logout() {
    await this.open();
    await this.clickLogout();
  }
}
