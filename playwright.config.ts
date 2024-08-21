import { defineConfig } from '@playwright/test';
import { loadEnv } from './src/utils/env';

loadEnv(process.env.NODE_ENV || 'test');

export default defineConfig({
  projects: [
    {
      name: 'api-tests',
      testMatch: /src\/tests\/(api|mock)\/.*\.test\.ts$/,
      use: {
        baseURL: process.env.BASE_URL,
      },
    },
    {
      name: 'web-tests', 
      testMatch: /src\/tests\/web\/.*\.test\.ts$/,
      use: {
        baseURL: process.env.WEB_URL,
        browserName: 'chromium', // (chromium, firefox, webkit)
        headless: false, 
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
      },
    },
  ],
});
