 import {test, expect, Browser, Page, BroweserContext} from '@playwright/test'
 import {webkit, chromium, firefox} from 'playwright'
 
 test('login test with browserContext', async()=>{
 
     const browser = await chromium.launch({headless: false, channel: 'chrome'});
 
     //browsercontext1
      const browserContext = await browser.newContext();
     const page = await browserContext.newPage();

     await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

     //1.Id locator
     const firstName = page.locator('id=input-firstname');
     const lastName = page.locator('id=input-lastname');
     
     await firstName.fill("Naveen");
     await lastName.fill("Automation Labs");

     //2. class name
     const logo = page.locator('.img-responsive');
     const logoExist = await logo.isEnabled();
     console.log(logoExist);

     //3. text locator
     const header = page.locator('text=Register Account');
     const headerExist = header.isEnabled();
     console.log(headerExist);

     //4. CSS
     const email = page.locator('css=input#input-email');
     const telephone = page.locator('css=input[name="telephone"]');
     const privacyCheckBox = page.locator('css=input[type="checkbox"]');
     await email.fill("naveen@gmail.com");
     await telephone.fill("88888888");
     await privacyCheckBox.click();

     //5.xpath
     const password = page.locator('xpath=//input[@id="input-password"]');
     const search = page.locator('xpath=//input[@name="search" and @type="text"]');

     await password.fill("test@123");
     await search.fill("macbook");

     //6.getByTestId

     await page.getByTestId('username').fill("naven");
     await page.getByTestId('login').click();

     //7.getByRole
     await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible();
     await expect(page.getByRole('link', { name: 'Forgotten Password' })).toBeVisible();
     await expect(page.getByRole('radio', { name: 'Yes' })).toBeVisible();
     await expect(page.getByRole('checkbox')).toBeVisible();
     await expect(page.getByRole('button', {name: 'Continue'})).click();





     await new Promise(() => {}); //prevents your script from exiting

 });