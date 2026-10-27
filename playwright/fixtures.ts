import { createBdd, test as base } from 'playwright-bdd';
import { InventoryPage } from './pages/InventoryPage';
import { LoginPage } from './pages/LoginPage';

type PageFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
});

export const { Given, When, Then } = createBdd(test);
