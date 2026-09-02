import { test, expect, Page } from '@playwright/test';

const elements = [
{locator: (page: Page) => page.getByRole('link', { name: 'Playwright logo Playwright' }),
name: 'Playwright logo',
text: 'Playwright',
attribute:{   type: 'href',  value: '/',},
},
{locator: (page: Page) => page.getByRole('link', { name: 'Docs' } ),
name: 'Docs logo',
text: 'Docs',
attribute:{   type: 'href',  value: '/docs/intro',},
},
{locator: (page: Page) => page.getByRole('link', { name: 'MCP', exact: true  }),
name: 'MCP logo',
text: 'MCP',
attribute:{   type: 'href',  value: '/mcp/introduction'  ,},
},
{locator: (page: Page) => page.getByRole('link', { name: 'CLI', exact: true  }),
name: 'CLI logo',
text: 'CLI',
attribute:  {  type: 'href',  value: '/agent-cli/introduction',},
},
{locator: (page: Page) => page.getByRole('link', { name: 'API'  }),
name: 'API logo',
text: 'API',
attribute:  {  type: 'href',  value: '/docs/api/class-playwright',},
},
{locator: (page: Page) => page.getByRole('button', { name: 'Node.js'  }),
name: 'Node',
text: 'Node.js', 
},
{locator: (page: Page) => page.getByRole('link', { name: 'GitHub repository'  }),
name: 'GitHub logo',
text: '',
attribute:{  type: 'href',  value: 'https://github.com/microsoft/playwright',},
},
{locator: (page: Page) => page.getByRole('link', { name: 'Discord server'  }),
name: 'Discord server logo',
text: '',
attribute:{  type: 'href',  value: 'https://aka.ms/playwright/discord',},
},
{locator: (page: Page) => page.getByRole('button', { name: 'Switch between dark and light'  }),
name: 'dark and light',
text: '',
},
{locator: (page: Page) => page.getByRole('button', { name: 'Search (Control+k)' }),
name: 'Search logo',
text: 'SearchCtrlK'
}
];

test.describe('Тесты главной страницы', () => {
  test.beforeEach(async({page}) => {
  await page.goto('https://playwright.dev/');
  });

test('Проверка отображения элементов навигации HEADER', async ({ page }) => {
  elements.forEach(({locator, name}) => {
 test.step(`Проверка отображения элементов ${name}`, async ()=> {
  await expect(locator(page)).toBeVisible();
  });  
  } )  
});

test('Проверка названия элементов навигации HEADER', async ({ page }) => {
  elements.forEach(({locator, name, text}) => {
   if(text){
    test.step(`Проверка названия элемента навигации ${text}`, async ()=> { 
   await expect(locator(page)).toContainText(text);
  });
}
  })  
});

test('Проверка HREF элементов навигации HEADER', async ({ page }) => {
  elements.forEach(({locator, name, attribute}) => {
   if(attribute){
    test.step(`Проверка HREF элемента навигации HEADER ${name}`, async ()=> { 
   await expect(locator(page)).toHaveAttribute(attribute?.type, attribute?.value);
  });
}
  })  
});   

test('Проверка LIGHT/DARK mode', async ({ page }) => {
  await page.getByRole('button', { name: 'Switch between dark and light' }).click();
  await page.getByRole('button', { name: 'Switch between dark and light' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
  });

test('Проверка HEADER mode', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Playwright enables reliable' })).toContainText('Playwright enables reliable web automation for testing, scripting, and AI agents.');
  });

test('Проверка GET STARTED button', async ({ page }) => {
 await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
 await expect.soft(page.getByRole('banner')).toContainText('Get started');
 await expect.soft(page.getByRole('link', { name: 'Get started' })).toHaveAttribute('href', '/docs/intro');
 });

});