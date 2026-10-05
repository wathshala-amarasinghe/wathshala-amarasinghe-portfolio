import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Homepage", () => {
  test("renders hero and projects", async ({ page }) => {
    await page.goto("/");

    // Verify hero text exists (filtering out the sidebar h1)
    await expect(
      page.getByRole("heading", { level: 1, name: /digital products/i })
    ).toContainText(/form/i);

    // Verify navigation renders (on desktop)
    const isMobile = await page.evaluate(() => window.innerWidth < 1024);
    if (!isMobile) {
      await expect(
        page.getByRole("navigation", { name: "Page sections" })
      ).toBeVisible();
    }

    // No horizontal scroll
    const box = await page.evaluate(() => ({
      width: document.documentElement.scrollWidth,
      viewport: window.innerWidth,
    }));
    expect(box.width).toBeLessThanOrEqual(box.viewport);
  });

  test("accessibility check", async ({ page }) => {
    await page.goto("/");
    // Ensure animations don't interfere with initial a11y checks
    await page.waitForLoadState("networkidle");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
