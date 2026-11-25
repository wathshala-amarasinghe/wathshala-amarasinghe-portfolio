import { expect, test } from "@playwright/test";
import {
  readContactBody,
  reserveContactAttempt,
} from "../../src/lib/contact-request";

test("unknown case study returns 404 and offers a link home", async ({
  page,
}) => {
  const response = await page.goto("/work/portfolio-not-found");
  expect(response?.status()).toBe(404);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex"
  );
  await page.getByRole("link", { name: "Back to portfolio" }).click();
  await expect(
    page.getByRole("heading", { level: 1, name: /digital products/i })
  ).toBeVisible();
});

test("caps streamed contact bodies without relying on Content-Length", async () => {
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(new Uint8Array(8_500));
      controller.enqueue(new Uint8Array(8_500));
      controller.close();
    },
  });
  const request = new Request("http://localhost/api/contact", {
    method: "POST",
    body: stream,
    duplex: "half",
  } as RequestInit);
  await expect(readContactBody(request)).resolves.toMatchObject({
    ok: false,
    status: 413,
  });
});

test("contact quota limits SMTP attempts without opening an SMTP connection", () => {
  const headers = new Headers();
  for (let count = 0; count < 5; count += 1) {
    expect(reserveContactAttempt(headers)).toBe(0);
  }
  expect(reserveContactAttempt(headers)).toBeGreaterThan(0);
});

test("contact retains input on failure and announces confirmed success", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/#contact");
  const form = page.locator("#contact form");
  await form.getByLabel("Your Name").fill("Test Visitor");
  await form.getByLabel("Your Email").fill("visitor@example.com");
  await form.getByLabel("Message").fill("A test message.");
  let requests = 0;
  await page.route("**/api/contact", (route) => {
    requests += 1;
    if (requests === 1)
      return route.fulfill({
        status: 502,
        contentType: "text/html",
        body: "Temporary error",
      });
    return route.fulfill({ json: { success: true } });
  });
  await form.getByRole("button", { name: "Send Message" }).click();
  await expect(form.getByRole("alert")).toContainText(
    "Delivery could not be confirmed"
  );
  await expect(form.getByLabel("Message")).toHaveValue("A test message.");
  await form.getByRole("button", { name: "Send Message" }).click();
  await expect(form.getByRole("status")).toContainText("Message sent");
  await expect(form.getByLabel("Message")).toHaveValue("");
  expect(requests).toBe(2);
});

test("mobile menu is hidden when closed and restores keyboard focus", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "Mobile Chrome");
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open navigation menu" });
  const dialog = page.getByRole("dialog", { name: "Navigation menu" });
  await expect(dialog).toHaveCount(0);
  await trigger.focus();
  await page.keyboard.press("Enter");
  await expect(
    dialog.getByRole("button", { name: "Close navigation menu" })
  ).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    dialog.getByRole("link", { name: "Home", exact: true })
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
});

test("KAVON fits at 1024 px and its image dialog returns focus", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "chromium");
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/work/kavon");
  await expect(page.locator("h1:visible")).toHaveCount(1);
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth)
  ).toBeLessThanOrEqual(1024);
  await expect(page.locator("#portfolio-structured-data")).toHaveCount(0);
  const trigger = page.getByRole("button", { name: /Enlarge image/ }).first();
  await trigger.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Close image" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(trigger).toBeFocused();
});
