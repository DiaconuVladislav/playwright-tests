import { APIResponse, expect } from '@playwright/test';

export async function expectApiSuccess(
  response: APIResponse,
  expectedStatus: number
): Promise<void> {
  expect(response.status()).toBe(expectedStatus);
  expect(response.ok()).toBeTruthy();
  expect(response.headers()['content-type']).toContain('application/json');
}

export async function expectApiError(
  response: APIResponse,
  expectedStatus: number
): Promise<void> {
  expect(response.status()).toBe(expectedStatus);
  expect(response.ok()).toBeFalsy();
  expect(response.headers()['content-type']).toContain('application/json');

  const body = await response.json();

  expect(body).toEqual({});
}