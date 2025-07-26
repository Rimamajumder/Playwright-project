import {test, expect, Browser, Page, BroweserContext} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('Chaining locator test', async()=>{
   
    const browser = await chromium.launchPersistentContext('',{headless: false, channel: 'chrome'});

    const page = await browser.newPage();
    
    await page.goto("https://www.orangehrm.com/30-day-free-trial/");

    const countryDropdown = 'select#Contact_CountryCode';

    await page.selectOption(countryDropdown, {value: 'AD'});
    await page.selectOption(countryDropdown, {label: 'Australia'});
    await page.selectOption(countryDropdown, {index: 10});

    const allOptions = await page.$$(countryDropdown + '> option');
    console.log(allOptions.length);

    for(const e of allOptions){
        const text = await e.textContent();
        console.log(text);
         if(text === 'India'){
            await page.selectOption(countryDropdown, {label: 'India'});
            break;
            }
            
    }




});
