import { expect, test, type Page } from "@playwright/test";

async function openSectionNavigation(page: Page) {
  const isMobile = await page.evaluate(() => window.innerWidth < 1024);

  if (isMobile) {
    await page.getByRole("button", { name: "Open navigation menu" }).click();
    return page.getByRole("navigation", { name: "Mobile navigation" });
  }

  return page.getByRole("navigation", { name: "Page sections" });
}

test.describe("Cross-route section navigation", () => {
  test("case-study navigation returns to the requested homepage section", async ({
    page,
  }) => {
    await page.goto("/work/smart-web-pos", { waitUntil: "networkidle" });

    let navigation = await openSectionNavigation(page);
    await navigation.getByRole("link", { name: "Home", exact: true }).click();
    await expect(page).toHaveURL(/\/#hero$/);
    await expect(page.locator("#hero")).toBeInViewport();

    await page.goto("/work/smart-web-pos", { waitUntil: "networkidle" });
    navigation = await openSectionNavigation(page);
    await navigation
      .getByRole("link", { name: "Contact", exact: true })
      .click();
    await expect(page).toHaveURL(/\/#contact$/);
    await expect(page.locator("#contact")).toBeInViewport();
  });

  test("profile Let's talk button opens the homepage contact section", async ({
    page,
  }) => {
    await page.goto("/work/nation-spice", { waitUntil: "networkidle" });

    await page.getByRole("link", { name: "Let's talk" }).click();

    await expect(page).toHaveURL(/\/#contact$/);
    await expect(page.locator("#contact")).toBeInViewport();
  });
});
