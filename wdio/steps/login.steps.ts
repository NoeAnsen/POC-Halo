import { Given, Then, When } from '@wdio/cucumber-framework';
import { browser, expect } from '@wdio/globals';
import InventoryPage from '../pages/InventoryPage';
import LoginPage from '../pages/LoginPage';

Given('I am on the login page', async () => {
  await LoginPage.open();
});

Given('I am logged in as {string}', async (username: string) => {
  await LoginPage.loginAs(username);
  await expect(InventoryPage.title).toBeDisplayed();
});

When('I log in as {string}', async (username: string) => {
  await LoginPage.loginAs(username);
});

When(
  'I log in with username {string} and password {string}',
  async (username: string, password: string) => {
    await LoginPage.login(username, password);
  },
);

When('I log out', async () => {
  await InventoryPage.menu.logout();
});

Then('I should see the products page', async () => {
  await expect(browser).toHaveUrl(InventoryPage.url);
  await expect(InventoryPage.title).toHaveText('Products');
});

Then('I should see the login error {string}', async (message: string) => {
  await expect(LoginPage.errorMessage).toHaveText(message);
});

Then('I should see the login page', async () => {
  await expect(browser).toHaveUrl(LoginPage.url);
  await expect(LoginPage.loginButton).toBeDisplayed();
});
