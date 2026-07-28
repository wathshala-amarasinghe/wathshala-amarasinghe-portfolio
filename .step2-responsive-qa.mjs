import { chromium } from "@playwright/test";

const viewports = [
  [360, 800],
  [390, 844],
  [768, 1024],
  [1024, 900],
  [1440, 1000],
  [1920, 1080],
];

const browser = await chromium.launch({ headless: true });
const results = [];

for (const [width, height] of viewports) {
  const page = await browser.newPage({ viewport: { width, height } });
  await page.goto("http://127.0.0.1:3100/#home", {
    waitUntil: "networkidle",
  });

  const result = await page.evaluate(() => {
    const requiredIds = [
      "home",
      "about",
      "services",
      "experience",
      "projects",
      "contact",
    ];
    const menuButton = document.querySelector(
      'button[aria-controls="mobile-navigation"]',
    );
    const desktopNav = document.querySelector(
      'nav[aria-label="Primary navigation"]',
    );
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    return {
      overflow: document.documentElement.scrollWidth > window.innerWidth,
      mainCount: document.querySelectorAll("main").length,
      missingIds: requiredIds.filter((id) => !document.getElementById(id)),
      menuVisible:
        menuButton instanceof HTMLElement && menuButton.offsetParent !== null,
      desktopVisible:
        desktopNav instanceof HTMLElement && desktopNav.offsetParent !== null,
      headerPosition: header ? getComputedStyle(header).position : null,
      footerVisible: footer instanceof HTMLElement,
    };
  });

  if (width < 1024) {
    await page.getByRole("button", { name: "Open navigation menu" }).click();
    result.mobileMenuOpened = await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .isVisible();
  }

  results.push({ viewport: `${width}x${height}`, ...result });
  await page.close();
}

await browser.close();

const failures = results.filter(
  (result) =>
    result.overflow ||
    result.mainCount !== 1 ||
    result.missingIds.length > 0 ||
    result.headerPosition !== "sticky" ||
    !result.footerVisible ||
    (Number.parseInt(result.viewport) < 1024 &&
      (!result.menuVisible ||
        result.desktopVisible ||
        !result.mobileMenuOpened)) ||
    (Number.parseInt(result.viewport) >= 1024 &&
      (result.menuVisible || !result.desktopVisible)),
);

console.log(JSON.stringify(results, null, 2));
if (failures.length > 0) process.exit(1);
