import { expect } from '@playwright/test';
import { Given, Then, When } from '../fixtures';

Given('I am on the login page', async ({ loginPage }) => {
  await loginPage.open();
});

Given('I am logged in as {string}', async ({ loginPage, inventoryPage }, username: string) => {
  await loginPage.loginAs(username);
  await expect(inventoryPage.title).toBeVisible();
});

When('I log in as {string}', async ({ loginPage }, username: string) => {
  await loginPage.loginAs(username);
});

When(
  'I log in with username {string} and password {string}',
  async ({ loginPage }, username: string, password: string) => {
    await loginPage.login(username, password);
  },
);

When('I log out', async ({ inventoryPage }) => {
  await inventoryPage.menu.logout();
});

Then('I should see the products page', async ({ page, inventoryPage }) => {
  await expect(page).toHaveURL(inventoryPage.path);
  await expect(inventoryPage.title).toHaveText('Products');
});

Then('I should see the login error {string}', async ({ loginPage }, message: string) => {
  await expect(loginPage.errorMessage).toHaveText(message);
});

Then('I should see the login page', async ({ page, loginPage }) => {
  await expect(page).toHaveURL(loginPage.path);
  await expect(loginPage.loginButton).toBeVisible();
});
