import {test, expect, Browser, Page, BroweserContext} from '@playwright/test'
 import {webkit, chromium, firefox} from 'playwright'

 test('type character sequentially ', async()=>{
    const browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page = await browser.newPage();

    await page.goto("https://www.flipkart.com/");

    await page.getByPlaceholder('Search for products, Brands and more').pressSequentially("macbook", {delay:500});

    await page.waitForTimeout(1500);

 })