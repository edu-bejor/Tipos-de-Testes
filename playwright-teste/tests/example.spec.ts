import { test, expect } from '@playwright/test';
import { chromium } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page:any }) => {
  const browser = await chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://google.com');
  const input = await page.locator("input[class='gLFyf gsfi']");
  await input.fill('MackLeaps');
  console.log(await input.textContent())

});
