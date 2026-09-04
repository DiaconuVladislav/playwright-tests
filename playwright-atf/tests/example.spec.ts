import { test, expect } from '../fixtures/test.fixture';

test.describe('Playwright Home Page', () => {

  test('should display the home page', async ({ homePage }) => {

    await homePage.open();

    // Page content
    await expect(homePage.pageTitle).toBeVisible();
    await expect(homePage.getStartedLink).toBeVisible();

    // Header
    await expect(homePage.header.logo).toBeVisible();
    await expect(homePage.header.docsLink).toBeVisible();
    await expect(homePage.header.apiLink).toBeVisible();
    
  // Footer
   await expect(homePage.footer.container).toBeVisible();
   await expect(homePage.footer.githubLink).toBeVisible();
   await expect(homePage.footer.gettingStartedLink).toBeVisible();	
  });

});