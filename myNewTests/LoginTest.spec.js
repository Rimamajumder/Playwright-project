 import {test, expect, chromium} from '@playwright/test'


 test('login test @regression', async()=>{

    const browser = await chromium.launch();

    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    const userName = page.getByPlaceholder('Username');
    await userName.fill("Admin");
    
    const password = page.getByPlaceholder('Password');
    await password.fill("admin123");

    const loginBtn = page.locator("[Type='submit']");

    await loginBtn.click();

    const title = await page.title();
   
    expect(title).toEqual("OrangeHRM");
    expect(page).toHaveTitle("OrangeHRM");
    console.log("The aplication is launched-"+ title);

    await page.waitForTimeout(1000);

 });