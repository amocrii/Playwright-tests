import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 60000,
  use: {
    headless: process.env.HEADLESS === 'true',
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    baseURL: process.env.BASE_URL || 'https://www.google.com'
  },
  reporter: [['html', { outputFolder: 'test-results' }]],
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
    { name: 'WebKit', use: { browserName: 'webkit' } }
  ]
});
