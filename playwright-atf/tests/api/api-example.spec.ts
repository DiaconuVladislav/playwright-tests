import { test, expect } from '../../fixtures/test.fixture';
import { validatePlaywrightHomeResponse } from '../../api/schemas/validateResponse';

test.describe('API Tests', () => {

  test('GET home page should return successful response', async ({ playwrightApi }) => {

    const response = await playwrightApi.getHomePage();

    await validatePlaywrightHomeResponse(response);

  });

  test('GET user should return valid user data', async ({ playwrightApi }) => {

    const user = await playwrightApi.getUser(1);

    expect(user.id).toBe(1);
    expect(user.name).toBeTruthy();
    expect(user.username).toBeTruthy();
    expect(user.email).toContain('@');

  });

});