import { env } from './env';

const SAUCE_USERS: readonly string[] = [
  'standard_user',
  'locked_out_user',
  'problem_user',
  'performance_glitch_user',
  'error_user',
  'visual_user',
];

export function passwordFor(username: string) {
  if (!SAUCE_USERS.includes(username)) {
    throw new Error(`Unknown SauceDemo user "${username}".`);
  }
  if (!env.password) {
    throw new Error('SAUCE_PASSWORD is not set yet. Please set it in your .env file.');
  }
  return env.password;
}
