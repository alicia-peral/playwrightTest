import { test, expect } from '@playwright/test';

test('birds', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Aceptar todo' }).click();
  await page.getByRole('combobox', { name: 'Buscar' }).click();
  await page.getByRole('combobox', { name: 'Buscar' }).fill('birds');
});

