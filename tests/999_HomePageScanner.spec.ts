import { test } from '@playwright/test';

test('Discover page elements', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const elements = await page.evaluate(() => {
    const sections = ['header', 'main', 'footer'];

    const result: Record<string, unknown[]> = {};

    for (const section of sections) {
      const root = document.querySelector(section);

      if (!root) {
        result[section] = [];
        continue;
      }

      result[section] = Array.from(
        root.querySelectorAll(
          'a, button, input, textarea, select, img, h1, h2, h3'
        )
      ).map((element, index) => ({
        index,
        tag: element.tagName.toLowerCase(),
        text: element.textContent?.trim(),
        id: element.id || null,
        role: element.getAttribute('role'),
        ariaLabel: element.getAttribute('aria-label'),
        href: element.getAttribute('href'),
        type: element.getAttribute('type'),
        name: element.getAttribute('name'),
      }));
    }

    return result;
  });

  console.log(JSON.stringify(elements, null, 2));
});