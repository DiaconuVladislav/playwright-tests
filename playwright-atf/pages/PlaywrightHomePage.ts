import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { environment } from '../config/environment';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export class PlaywrightHomePage extends BasePage {
  readonly pageTitle: Locator;
  readonly getStartedLink: Locator;
  readonly header: Header;
  readonly footer: Footer;

  constructor(page: Page) {
    super(page);

    this.pageTitle = page.getByRole('heading', {
      level: 1,
    });

    this.getStartedLink = page.getByRole('link', {
      name: 'Get started',
    });

    this.header = new Header(page);    
    this.footer = new Footer(page);	
  }

  async open(): Promise<void> {
    await this.navigate(environment.baseUrl);
  }

  async clickGetStarted(): Promise<void> {
    await this.getStartedLink.click();
  }
}