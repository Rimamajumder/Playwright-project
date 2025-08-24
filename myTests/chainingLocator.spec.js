import {test, expect, Browser, Page, BroweserContext} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'
import {JSHandle} from 'playwright'

test('Chaining locator test', async()=>{
   
    const browser = await chromium.launchPersistentContext('',{headless: false, channel: 'chrome'});

    const page = await browser.newPage();
    
    await page.goto("https://www.orangehrm.com/30-day-free-trial/");

    await page.locator('form#Form_getForm_Name >> #Form_getForm_Name').fill('Naveen');
    await page.locator('form#Form_getForm_Name >> text=Get Your Free Trail').click();

    //approach 2

    const form = page.locator('form#Form_getForm_Name');
    const getYourFreeTrail = page.getByRole('button',{name: 'Get Your Free Trail'});

    await form.locator(getYourFreeTrail).click();

    //approach 3
     await page.locator('form#Form_getForm_Name').getByRole('button',{name: 'Get Your Free Trail'}).click();

     await elementHandle.dispatchEvent('click')
});
