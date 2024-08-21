import { Page } from '@playwright/test'

export async function login(page: Page, username: string, password: string) {
  await page.goto(`${process.env.WEB_URL}/login`)

  await page.fill('input[name="username"]', username)
  await page.fill('input[name="password"]', password)
  await page.click('button[id="login"]')

//   await page.waitForURL(`${process.env.BASE_URL}/dashboard`)
}
