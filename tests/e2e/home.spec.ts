import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Homepage", () => {
  test("renders hero and projects", async ({ page }) => {
    await page.goto("/");

    // Verify hero text exists (filtering out the sidebar h1)
    await expect(
      page.getByRole("heading", { level: 1, name: /digital products/i })
    ).toContainText(/people love to use/i);

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

  test("filters projects by discipline", async ({ page }) => {
    await page.goto("/");

    const workSection = page.locator("#work");
    const projectCards = workSection.locator("[data-project]");

    await expect(projectCards).toHaveCount(6);

    await workSection
      .getByRole("button", { name: "Web Development", exact: true })
      .click();
    await expect(projectCards).toHaveCount(3);
    expect(
      await projectCards.evaluateAll((cards) =>
        cards.map((card) => card.dataset.project)
      )
    ).toEqual(["kavon", "smart-web-pos", "event-management"]);

    await workSection
      .getByRole("button", { name: "UI/UX Design", exact: true })
      .click();
    await expect(projectCards).toHaveCount(6);

    await workSection
      .getByRole("button", { name: "Graphic & Logo Design", exact: true })
      .click();
    await expect(projectCards).toHaveCount(1);
    await expect(
      workSection.getByRole("heading", {
        name: "Graphic & Logo Design",
      })
    ).toBeVisible();
    await expect(projectCards.first()).toHaveAttribute(
      "data-project",
      "beverly-hills-hiriketiya"
    );

    await workSection
      .getByRole("button", { name: "Video Editing", exact: true })
      .click();
    await expect(projectCards).toHaveCount(0);
    await expect(
      workSection.getByRole("heading", { name: "Video Editing" })
    ).toBeVisible();
  });

  test("shows the education certificate on desktop and mobile", async ({
    page,
  }) => {
    await page.goto("/");

    const educationSection = page.locator("#work-experience");
    const certificateTrigger = educationSection
      .getByRole("button", { name: /Figma to Lottie/i })
      .first();

    await expect(certificateTrigger).toBeVisible();
    await expect(certificateTrigger).toContainText("LottieFiles");
    await expect(certificateTrigger).toContainText("06/10/2026");

    const isMobile = await page.evaluate(() => window.innerWidth < 1024);
    if (isMobile) {
      await educationSection
        .getByRole("button", { name: "View certificate", exact: true })
        .click();
      const certificateDialog = page.getByRole("dialog", {
        name: "Figma to Lottie",
      });
      await expect(certificateDialog).toBeVisible();
      await expect(
        certificateDialog.getByRole("heading", {
          name: "Figma to Lottie",
        })
      ).toBeVisible();
      await expect(
        certificateDialog.getByRole("img", {
          name: /LottieFiles for Figma course certificate/i,
        })
      ).toBeVisible();
    } else {
      await certificateTrigger.hover();
      await expect(
        page.getByRole("img", {
          name: /LottieFiles for Figma course certificate/i,
        })
      ).toBeVisible();
    }
  });

  test("accessibility check", async ({ page }) => {
    await page.goto("/");
    // Ensure animations don't interfere with initial a11y checks
    await page.waitForLoadState("networkidle");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
