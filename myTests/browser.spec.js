import {test, expect, Browser, Page, BroweserContext} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('login test with browserContext', async()=>{

    const browser = await chromium.launch({headless: false, channel: 'chrome'});

    //browsercontext1
    const browserContext_1 = await browser.newContext();
    const page1 = await browserContext_1.newPage();

    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailId_1 = await page1.locator('#input-email');
    const pwd_1 = await page1.locator('#input-password');
    const loginBtn_1 = await page1.locator("[value='Login']");

    await emailId_1.fill("rimamajumder08@gmail.com");
    await pwd_1.fill("Bangalore@123");
    await loginBtn_1.click();

    //browsercontext 2
    const browserContext_2 = await browser.newContext();
    const page2 = await browserContext_2.newPage();

    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailId_2 = await page2.locator('#input-email');
    const pwd_2 = await page2.locator('#input-password');
    const loginBtn_2 = await page2.locator("[value='Login']");

    await emailId_2.fill("rimamajumder08@gmail.com");
    await pwd_2.fill("Bangalore@123");
    await loginBtn_2.click();

    await browserContext_1.close();
    await browserContext_2.close();

    await browser.close();


});
