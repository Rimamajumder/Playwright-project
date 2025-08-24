 import {test , expect, chromium} from '@playwright/test'

 test.describe('group',{tag: '@regression'},() => {
        test('Add employee to PIM Page' , async({page})=>{
      
    
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")

    const userName = page.getByPlaceholder('Username');
    await userName.fill("Admin");
    
    const password = page.getByPlaceholder('Password');
    await password.fill("admin123");

    const loginBtn = page.locator("[Type='submit']");

    await loginBtn.click();
    
    await expect(page.getByRole('link', { name: 'PIM' })).toBeVisible();

    const addButton = page.getByRole('button' ,{ name: 'Add'})

    await addButton.click()

    await page.waitForTimeout(1000)
    await page.locator("css=input[name='firstName']").fill("Gabriel")

   await page.locator("css=input[name='lastName']").fill("franch")
   await page.getByRole("button",{name: "save"}).click()

   //  await new Promise(() => {});
 });

      test.fail('This test should is broken',  async()=>{

        console.log("it should faile")


 });

 test.skip('This test should is not required',  async()=>{

        console.log("It should skip")


 });
  test.slow('This test should is slow',  async()=>{

        console.log("it should slowmo")


 })
})

 



 