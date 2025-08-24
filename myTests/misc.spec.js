import {test,expect} from '@playwright/test'


test.describe.configure(({mode : 'parallel'}));

test('misc actions', async({page})=>{
     
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")

});

test('misc actions', async({page})=>{
     
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

});

test('misc actions', async({page})=>{
     
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

});



