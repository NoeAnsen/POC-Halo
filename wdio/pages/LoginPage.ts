import { $ } from '@wdio/globals';
import { passwordFor } from '../../shared/users';
import Page from './Page';

class LoginPage extends Page {
  readonly path = '/';

  get usernameInput() {
    return $('[data-test="username"]');
  }

  get passwordInput() {
    return $('[data-test="password"]');
  }

  get loginButton() {
    return $('[data-test="login-button"]');
  }

  get errorMessage() {
    return $('[data-test="error"]');
  }

  async fillUsername(username: string) {
    await this.usernameInput.setValue(username);
  }

  async fillPassword(password: string) {
    await this.passwordInput.setValue(password);
  }

  async submit() {
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.submit();
  }

  async loginAs(username: string) {
    await this.login(username, passwordFor(username));
  }
}

export default new LoginPage();
