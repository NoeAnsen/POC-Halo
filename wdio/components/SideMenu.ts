import { $ } from '@wdio/globals';

class SideMenu {
  get openButton() {
    return $('aria/Open Menu');
  }

  get logoutLink() {
    return $('[data-test="logout-sidebar-link"]');
  }

  async open() {
    await this.openButton.click();
  }

  async clickLogout() {
    // The menu slides in, so the link is in the DOM before it can receive clicks.
    await this.logoutLink.waitForClickable();
    await this.logoutLink.click();
  }

  async logout() {
    await this.open();
    await this.clickLogout();
  }
}

export default new SideMenu();
