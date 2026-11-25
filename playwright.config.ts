import { defineConfig, devices } from "@playwright/test";

const port = process.env.PORTFOLIO_TEST_PORT ?? "3000";
const baseURL = `http://localhost:${port}`;
const useProductionBuild = process.env.PORTFOLIO_TEST_PRODUCTION === "1";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 60_000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
  ],
  webServer: {
    command: `node node_modules/next/dist/bin/next ${useProductionBuild ? "start" : "dev"} --hostname localhost --port ${port}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI && !useProductionBuild,
    timeout: 120000,
  },
});
