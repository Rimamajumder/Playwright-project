import {test, expect, Browser, Page, BroweserContext} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('authication popup test', async()=>{

    const browser = await chromium.launch({headless: false});

    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    const username = 'admin';
    const password = 'admin';
   
    page.setExtraHTTPHeaders({Authorization : createAuthHeader});

    await page.goto('https://the-internet.herouapp.com/basic_auth');

});

function createAuthHeader(username, password){
         return  'Basic ' + btoa(username+':'+password);
         
}
