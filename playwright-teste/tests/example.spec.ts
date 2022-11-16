import { test, expect } from '@playwright/test';
import { chromium } from '@playwright/test';

test('homepage has title and links to intro page', async ({ page:any }) => {
  const browser = await chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://github.com/login');
  const inputemail = await page.locator("input[class='form-control input-block js-login-field']");
  await inputemail.fill('levtruts@gmail.com');
  await page.waitForTimeout(3000);
  const inputsenha = await page.locator("input[class='form-control form-control input-block js-password-field']");
  await inputsenha.fill('lfs123!@#');
  await page.waitForTimeout(3000);
  await page.click("input[class='btn btn-primary btn-block js-sign-in-button']");
  await page.waitForTimeout(3000);

});
