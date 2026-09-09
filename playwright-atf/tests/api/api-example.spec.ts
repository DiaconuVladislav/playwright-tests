import { test, expect } from '../../fixtures/test.fixture';
import {  expectApiSuccess,  expectApiError,} from '../../api/assertions/api.assertions';
import {  userIds,  newPostData,  updatedPostData,  patchPostData,} from '../data/api.test-data';

test.describe('API Tests', () => {

  // =========================
  // USERS
  // =========================

  test.describe('Users API', () => {

    test('GET user should return successful response', async ({ playwrightApi }) => {
      const response = await playwrightApi.getUserRaw(1);

      await expectApiSuccess(response, 200);
    });

    test('GET user should return valid user data', async ({ playwrightApi }) => {
      const user = await playwrightApi.getUser(1);

      expect(user.id).toBe(1);
      expect(user.name).toBeTruthy();
      expect(user.username).toBeTruthy();
      expect(user.email).toBeTruthy();
    });

    for (const userId of userIds) {
    test(`GET user ${userId} should return correct user ID`, async ({ playwrightApi }) => {
    const user = await playwrightApi.getUser(userId);

    expect(user.id).toBe(userId);
  });
}    
    
    test('GET non-existing user should return 404', async ({ playwrightApi }) => {
      const response = await playwrightApi.getUserRaw(999);

      await expectApiError(response, 404);
    });

    test('GET user with ID 0 should return 404', async ({ playwrightApi }) => {
      const response = await playwrightApi.getUserRaw(0);

      await expectApiError(response, 404);
    });

    test('GET user with negative ID should return 404', async ({ playwrightApi }) => {
      const response = await playwrightApi.getUserRaw(-1);

      await expectApiError(response, 404);
    });

  });


  // =========================
  // POSTS - GET
  // =========================

  test.describe('Posts GET API', () => {

    test('GET posts should return successful response', async ({ playwrightApi }) => {
      const posts = await playwrightApi.getPosts();

      expect(posts.length).toBeGreaterThan(0);
    });

    test('GET posts should return valid post data', async ({ playwrightApi }) => {
      const posts = await playwrightApi.getPosts();

expect(posts.length).toBeGreaterThan(0);

const firstPost = posts[0];

if (!firstPost) {
  throw new Error('Posts array is empty');
}

expect(firstPost.id).toBeTruthy();
expect(firstPost.userId).toBeTruthy();
expect(firstPost.title).toBeTruthy();
expect(firstPost.body).toBeTruthy();
    });

  });


  // =========================
  // POSTS - CRUD
  // =========================

  test.describe('Posts CRUD API', () => {

    test('POST should create a new post', async ({ playwrightApi }) => {

      const newPost = {
        title: 'Playwright API Test',
        body: 'This post was created by an automated test',
        userId: 1,
      };

      const result = await playwrightApi.createPost(newPostData);

      expect(result.status).toBe(201);
      expect(result.post.title).toBe(newPostData.title);
      expect(result.post.body).toBe(newPostData.body);
      expect(result.post.userId).toBe(newPostData.userId);
      expect(result.post.id).toBeTruthy();
    });


    test('PUT should update an existing post', async ({ playwrightApi }) => {

      const updatedPost = {
        title: 'Updated Playwright API Test',
        body: 'This post was updated by an automated test',
        userId: 1,
      };

      const result = await playwrightApi.updatePost(1, updatedPostData);

      expect(result.status).toBe(200);
      expect(result.post.id).toBe(1);
      expect(result.post.title).toBe(updatedPostData.title);
      expect(result.post.body).toBe(updatedPostData.body);
      expect(result.post.userId).toBe(updatedPostData.userId);
    });


    test('PATCH should partially update an existing post', async ({ playwrightApi }) => {

      const patchData = {
        title: 'Partially Updated Title',
      };

      const result = await playwrightApi.patchPost(1, patchPostData);

      expect(result.post.title).toBe(patchPostData.title);
      expect(result.status).toBe(200);
      expect(result.post.id).toBe(1);
      expect(result.post.body).toBeTruthy();
      expect(result.post.userId).toBeTruthy();
    });


    test('DELETE should remove an existing post', async ({ playwrightApi }) => {

      const status = await playwrightApi.deletePost(1);

      expect(status).toBe(200);
    });

  });

});