import {test, expect, Browser, Page, BroweserContext} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('mouseHover test', async()=>{
   
    const browser = await chromium.launchPersistentContext('',{headless: false, channel: 'chrome'});

    const page = await browser.newPage();
    
    await page.goto("https://www.spicejet.com");
    await page.getByText('Add-ons').first().hover();
     page.getByText('Taxi').first().click();

});
