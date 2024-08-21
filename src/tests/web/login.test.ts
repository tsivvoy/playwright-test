import { test, expect } from '@playwright/test'
import { login } from '../../web/helper/index'

test('should successfully log in', async ({ page }) => {
  const username = `${process.env.USERNAME}`
  const password = `${process.env.PASSWORD}`

  await login(page, username, password)

  await expect(page).toHaveURL(`${process.env.BASE_URL}/dashboard`);
  await expect(page.locator('text=Welcome, your-username')).toBeVisible();
})

test('should display an error message for invalid login', async ({ page }) => {
  const username = `blah`
  const password = `blah`

  await login(page, username, password)

  const errorMessage = page.locator('text=Invalid username/password')
  await expect(errorMessage).toBeVisible()
})
