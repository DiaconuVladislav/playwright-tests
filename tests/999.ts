import { test, expect } from '@playwright/test';

test('999.md', async ({ page }) => {
  await page.goto('https://999.md/ru');
  await page.getByRole('button', { name: 'Transport https://i.' }).click();
  await page.goto('https://999.md/ru/category/transport');
  await page.getByTestId('subcategory-item-659').click();
});