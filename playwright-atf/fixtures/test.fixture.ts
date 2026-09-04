import { test as base } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';
import { ApiClient } from '../api/ApiClient';
import { PlaywrightApi } from '../api/endpoints/PlaywrightApi';
import { environment } from '../config/environment';

type TestFixtures = {
  homePage: PlaywrightHomePage;
  apiClient: ApiClient;
  playwrightApi: PlaywrightApi;
};

export const test = base.extend<TestFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new PlaywrightHomePage(page);

    await use(homePage);
  },

  apiClient: async ({ request }, use) => {
    const apiClient = new ApiClient(request, environment.apiBaseUrl);
    await use(apiClient);
  },

  playwrightApi: async ({ apiClient }, use) => {
    const playwrightApi = new PlaywrightApi(apiClient);

    await use(playwrightApi);
  },
});

export { expect } from '@playwright/test';