import {test,expect} from '@playwright/test'


test.describe.configure(({mode : 'parallel'}));

test('open naveen', async({page})=>{
     
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
    await page.screenshot({path: 'screenshot.png'});
    const frame =page.frameLocator("");
    const frame2= page.frame('name: code');
    frame2.getAttribute("name");
    

});

test('open hrm', async({page})=>{
     
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    page.close();

});

test('open hrmagain', async({page})=>{
     
    await page.goto("https://google.com")

});



