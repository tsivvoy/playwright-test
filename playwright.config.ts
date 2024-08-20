import { defineConfig } from '@playwright/test'
import { loadEnv } from './src/utils/env'

loadEnv(process.env.NODE_ENV || 'test')

export default defineConfig({
  projects: [
    {
      name: 'api-tests',
      testMatch: /src\/tests\/(integration|mock)\/.*\.test\.ts$/,
      use: {
        baseURL: process.env.BASE_URL,
      },
    },
  ],
})
