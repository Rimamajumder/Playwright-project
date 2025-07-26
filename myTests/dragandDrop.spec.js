import {test, expect, Browser, Page, BroweserContext} from '@playwright/test'
 import {webkit, chromium, firefox} from 'playwright'

 test('drag and drop', async()=>{
    const browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page = await browser.newPage();

    await page.goto("");

    //approach1
    await page.locator('#draggable').dragTo(page.locator('#droppable'));

    //approach 2

    await page.locator('#draggable').hover();
    await page.mouse.down();
    await page.locator('#droppable').hover();
    await page.mouse.up();



    await page.waitForTimeout(1500);






 })