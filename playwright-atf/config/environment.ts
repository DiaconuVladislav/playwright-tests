export type Environment = 'dev' | 'qa' | 'prod' | 'test';

type EnvironmentConfig = {
  baseUrl: string;
  apiBaseUrl: string;
};

const environments: Record<Environment, EnvironmentConfig> = {
  dev: {
    baseUrl: 'https://playwright.dev/',
    apiBaseUrl: 'https://playwright.dev',
  },

  qa: {
    baseUrl: 'https://playwright.dev/',
    apiBaseUrl: 'https://playwright.dev',
  },

  prod: {
    baseUrl: 'https://playwright.dev/',
    apiBaseUrl: 'https://playwright.dev',
  },
   test: {
    baseUrl: 'https://playwrightlab.github.io/index.html?#',
    apiBaseUrl: 'https://playwrightlab.github.io/index.html?#',
  },
};

const currentEnvironment =
  (process.env.TEST_ENV as Environment) || 'dev';

export const environment = environments[currentEnvironment];