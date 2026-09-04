import { expect } from '@playwright/test';

export function expectStatus(
  actualStatus: number,
  expectedStatus: number
): void {
  expect(actualStatus).toBe(expectedStatus);
}