import { APIResponse, expect } from '@playwright/test';
import { PlaywrightHomeResponse } from './PlaywrightHomeSchema';

export async function validatePlaywrightHomeResponse(
  response: APIResponse
): Promise<void> {

  const contentType = response.headers()['content-type'] ?? null;

  const actualResponse: PlaywrightHomeResponse = {
    status: response.status(),
    contentType,
  };

  expect(actualResponse.status).toBe(200);
  expect(actualResponse.contentType).toContain('text/html');
}