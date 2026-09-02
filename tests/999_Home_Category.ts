import { test, expect } from '@playwright/test';

test('Select random category', async ({ page }) => {

    await page.goto('https://999.md/ru');

    const categoriesLocator = page.locator(
        '[data-testid="categories-container"] [role="button"]'
    );

    const categories: string[] = (await categoriesLocator.allTextContents())
        .map(category => category.trim());

    console.log('Number of categories:', categories.length);
    console.log('Categories:', categories);

    if (categories.length === 0) {
        throw new Error('No categories found');
    }

    const randomIndex = Math.floor(Math.random() * categories.length);
    const randomCategory = categories[randomIndex];

    console.log(`Selected random category: ${randomCategory}`);

    await categoriesLocator
        .filter({ hasText: randomCategory })
        .click();
});