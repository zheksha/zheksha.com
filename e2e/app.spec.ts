import { expect, test } from "@playwright/test"

test("homepage renders core sections", async ({ page }) => {
  await page.goto("/")

  await expect(page.getByText("Summary | Hello World", { exact: true })).toBeVisible()
  await expect(page.getByText("Experience | Work & Impact", { exact: true })).toBeVisible()
  await expect(page.getByRole("link", { name: "zheksha@gmail.com" })).toBeVisible()
})
