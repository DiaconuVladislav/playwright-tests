import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Directory containing all tests
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Prevent test.only from being committed to CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests on CI
  retries: process.env.CI ? 2 : 0,

  // One worker on CI, default locally
  workers: process.env.CI ? 1 : undefined,

  // Test timeout
  timeout: 30_000,

  // Expect timeout
  expect: {
    timeout: 5_000,
  },

  // Test reporter
  reporter: [
    ['html', { outputFolder: 'reports/html', open: 'never' }],
    ['list'],
  ],

  // Shared test settings
  use: {
    // Base URL can later come from environment variables
    // Example:
    // baseURL: 'https://example.com',

    // Capture screenshot only when test fails
    screenshot: 'only-on-failure',

    // Record video only when test fails
    video: 'retain-on-failure',

    // Collect trace on first retry
    trace: 'on-first-retry',

    // Browser context settings
    headless: true,

    // Ignore HTTPS errors in test environments
    ignoreHTTPSErrors: true,
  },

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
});