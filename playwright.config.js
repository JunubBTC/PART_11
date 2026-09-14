const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  use: {
    baseURL: 'http://127.0.0.1:5001'
  },
  webServer: {
    command: 'npm run build && npm run start-prod',
    url: 'http://127.0.0.1:5001',
    reuseExistingServer: !process.env.CI
  }
})