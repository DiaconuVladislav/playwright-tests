import { APIResponse, expect } from '@playwright/test';

export function expectStatus(
  response: APIResponse,
  expectedStatus: number
): void {
  expect(response.status()).toBe(expectedStatus);
}

export function expectSuccess(response: APIResponse): void {
  expect(response.ok()).toBeTruthy();
}

export function expectError(response: APIResponse): void {
  expect(response.ok()).toBeFalsy();
}

export function expectJson(response: APIResponse): void {
  expect(response.headers()['content-type']).toContain(
    'application/json'
  );
}

export async function expectApiSuccess(
  response: APIResponse,
  expectedStatus: number
): Promise<void> {
  expectStatus(response, expectedStatus);
  expectSuccess(response);
  expectJson(response);
}

export async function expectApiError(
  response: APIResponse,
  expectedStatus: number
): Promise<void> {
  expectStatus(response, expectedStatus);
  expectError(response);
  expectJson(response);

  const body = await response.json();

  expect(body).toEqual({});
}