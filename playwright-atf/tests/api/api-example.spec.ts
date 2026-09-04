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

test('POST create post should return valid post data', async ({ playwrightApi }) => {

  const postData = {
    title: 'Playwright API Test',
    body: 'This post was created by Playwright API test',
    userId: 1,
  };
  const response = await playwrightApi.createPost(postData);
  expect(response.status).toBe(201);
  expect(response.post.id).toBeTruthy();
  expect(response.post.title).toBe(postData.title);
  expect(response.post.body).toBe(postData.body);
  expect(response.post.userId).toBe(postData.userId);
});

});