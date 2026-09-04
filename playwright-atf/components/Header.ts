import { Locator, Page } from '@playwright/test';

export class Header {
  readonly logo: Locator;
  readonly docsLink: Locator;
  readonly apiLink: Locator;

  constructor(page: Page) {
    this.logo = page.getByRole('link', {
      name: /Playwright logo/i,
    });

    this.docsLink = page.getByRole('link', {
      name: 'Docs',
    });

    this.apiLink = page.getByRole('link', {
      name: 'API',
    });
  }

  async clickDocs(): Promise<void> {
    await this.docsLink.click();
  }

  async clickApi(): Promise<void> {
    await this.apiLink.click();
  }

  async isVisible(): Promise<boolean> {
    return this.logo.isVisible();
  }
}