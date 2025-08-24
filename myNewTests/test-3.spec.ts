import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locat
  await page.locator('label').filter({ hasText: 'Female' }).locator('span').click();or('div').filter({ hasText: /^Date of BirthGenderMaleFemale$/ }).locator('i').click();
  await page.getByText('20', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).locator('i').click();
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByText('13').click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).locator('i').nth(2).click();
  await page.getByRole('option', { name: 'Married' }).click();
  await page.locator('label').filter({ hasText: 'Female' }).locator('span').click();
});