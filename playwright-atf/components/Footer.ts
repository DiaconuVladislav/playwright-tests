import { Locator, Page } from '@playwright/test';

export class Footer {
  readonly container: Locator;
  readonly githubLink: Locator;
  readonly gettingStartedLink: Locator;

  constructor(page: Page) {
    this.container = page.locator('footer');

    this.githubLink = this.container.getByRole('link', {
      name: 'GitHub',
    });

    this.gettingStartedLink = this.container.getByRole('link', {
      name: 'Getting started',
    });
  }

  async clickGitHub(): Promise<void> {
    await this.githubLink.click();
  }

  async clickGettingStarted(): Promise<void> {
    await this.gettingStartedLink.click();
  }

  async isVisible(): Promise<boolean> {
    return this.container.isVisible();
  }
}