import { test, expect } from '../../fixtures/test.fixture';
import { validatePlaywrightHomeResponse } from '../../api/schemas/validateResponse';

test.describe('API Tests', () => {

  test('GET home page should return successful response', async ({ playwrightApi }) => {

    const response = await playwrightApi.getHomePage();

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    await validatePlaywrightHomeResponse(response);

  });

});