export type Environment = 'dev' | 'qa' | 'prod' | 'test';

type EnvironmentConfig = {
  baseUrl: string;
  apiBaseUrl: string;
  jsonPlaceholderApiUrl: string;
};

const environments: Record<Environment, EnvironmentConfig> = {
  dev: {
    baseUrl: 'https://playwright.dev/',
    apiBaseUrl: 'https://playwright.dev',
    jsonPlaceholderApiUrl: 'https://jsonplaceholder.typicode.com',
  },

  qa: {
    baseUrl: 'https://playwright.dev/',
    apiBaseUrl: 'https://playwright.dev',
    jsonPlaceholderApiUrl: 'https://jsonplaceholder.typicode.com',
  },

  prod: {
    baseUrl: 'https://playwright.dev/',
    apiBaseUrl: 'https://playwright.dev',
    jsonPlaceholderApiUrl: 'https://jsonplaceholder.typicode.com',
  },

  test: {
    baseUrl: 'https://playwrightlab.github.io/index.html?#',
    apiBaseUrl: 'https://playwrightlab.github.io/index.html?#',
    jsonPlaceholderApiUrl: 'https://jsonplaceholder.typicode.com',
  },
};

const currentEnvironment =
  (process.env.TEST_ENV as Environment) || 'dev';

export const environment = environments[currentEnvironment];