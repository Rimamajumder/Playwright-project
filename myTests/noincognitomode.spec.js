import {test, expect, Browser, Page, BroweserContext} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('No incognito test', async()=>{
   
    const browser = await chromium.launchPersistentContext('',{headless: false, channel: 'chrome'});

    const pages = await browser.newPage();
    const page = page[0];

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?rout=account/register");








});
 