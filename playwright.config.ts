import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  retries: 1,
  timeout: 60000,
  use: {
    headless: process.env.HEADLESS === 'true',
    baseURL: process.env.BASE_URL || 'https://viewpoint.glasslewis.com/WD/?siteId=DemoClient'
  },
  reporter: [['html', { outputFolder: 'test-results' }]]
});
