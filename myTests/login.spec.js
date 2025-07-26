import {test, expect, Browser, Page} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('login test', async()=>{

    const browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailId = await page.locator('#input-email');
    const pwd = await page.locator('#input-password');
    const loginBtn = await page.locator("[value='Login']");

    await emailId.fill("rimamajumder08@gmail.com");
    await pwd.fill("Bangalore@123");
    await loginBtn.click();

    const title = await page.title();
    console.log("home page title: ", title);

    await page.screenshot({path: 'homepage.png'});

    expect(title).toEqual('My Account');

    browser.close();
});
