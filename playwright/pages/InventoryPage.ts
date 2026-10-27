import type { Locator, Page } from '@playwright/test';
import { SideMenu } from '../components/SideMenu';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly path = '/inventory.html';
  readonly title: Locator;
  readonly menu: SideMenu;

  constructor(page: Page) {
    super(page);
    this.title = page.getByTestId('title');
    this.menu = new SideMenu(page);
  }
}
