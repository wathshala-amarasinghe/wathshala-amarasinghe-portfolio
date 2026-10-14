import { expect, test } from "@playwright/test";
import { escapeHtml, validateContactSubmission } from "../../src/lib/contact";

const productionUrl = "https://wathshalaamarasinghe.com";

test.describe("SEO metadata", () => {
  test("returns the configured security headers", async ({ request }) => {
    const response = await request.get("/");
    const headers = response.headers();

    expect(headers["content-security-policy"]).toContain("default-src 'self'");
    expect(headers["content-security-policy"]).toContain(
      "frame-ancestors 'none'"
    );
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["x-frame-options"]).toBe("DENY");
    expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(headers["permissions-policy"]).toContain("camera=()");
  });

  test("publishes canonical and social metadata", async ({ page, request }) => {
    await page.goto("/");

    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      productionUrl
    );
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      "content",
      productionUrl
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /\/opengraph-image/
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      "content",
      "summary_large_image"
    );

    const socialImage = await request.get("/opengraph-image");
    expect(socialImage.ok()).toBeTruthy();
    expect(socialImage.headers()["content-type"]).toContain("image/png");
  });

  for (const project of [
    { slug: "lumi", heading: "LUMI" },
    { slug: "smart-web-pos", heading: "Smart Web POS System" },
    { slug: "nation-spice", heading: "Nation Spice" },
  ]) {
    test(`${project.heading} has a complete indexable case study`, async ({
      page,
    }) => {
      await page.goto(`/work/${project.slug}`);

      await expect(
        page.getByRole("heading", { level: 1, name: project.heading })
      ).toBeVisible();
      await expect(
        page.getByText("The challenge and my contribution")
      ).toBeVisible();
      await expect(
        page.getByText("How the direction was shaped")
      ).toBeVisible();
      await expect(page.getByText("What I would validate next")).toBeVisible();
      await expect(page.getByText("Case study content section")).toHaveCount(0);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `${productionUrl}/work/${project.slug}`
      );
    });
  }

  test("publishes robots and only public pages in the sitemap", async ({
    request,
  }) => {
    const robots = await request.get("/robots.txt");
    expect(robots.ok()).toBeTruthy();
    expect(await robots.text()).toContain(
      `Sitemap: ${productionUrl}/sitemap.xml`
    );

    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBeTruthy();
    const xml = await sitemap.text();
    const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(
      (match) => match[1]
    );
    expect(locations).toEqual([
      productionUrl,
      `${productionUrl}/work/kavon`,
      `${productionUrl}/work/lumi`,
      `${productionUrl}/work/smart-web-pos`,
      `${productionUrl}/work/nation-spice`,
    ]);
  });
});

test.describe("Contact API validation", () => {
  test("rejects header controls and escapes HTML email content", () => {
    expect(
      validateContactSubmission({
        user_name: "Attacker\r\nBcc: target@example.com",
        user_email: "sender@example.com",
        message: "This is a valid-length message.",
      }).success
    ).toBe(false);

    expect(escapeHtml('<img src=x onerror="alert(1)">')).toBe(
      "&lt;img src=x onerror=&quot;alert(1)&quot;&gt;"
    );

    expect(
      validateContactSubmission({
        user_name: "Test User",
        user_email: "test@example.com",
        message: "Hi",
      }).success
    ).toBe(true);
  });

  test("rejects unsupported, malformed and cross-origin requests", async ({
    request,
  }) => {
    const unsupported = await request.post("/api/contact", {
      data: "plain text",
      headers: { "Content-Type": "text/plain" },
    });
    expect(unsupported.status()).toBe(415);

    const malformed = await request.post("/api/contact", {
      data: "{not-json",
      headers: { "Content-Type": "application/json" },
    });
    expect(malformed.status()).toBe(400);

    const crossOrigin = await request.post("/api/contact", {
      data: {
        user_name: "Test User",
        user_email: "test@example.com",
        message: "This is a test message.",
      },
      headers: { Origin: "https://example.com" },
    });
    expect(crossOrigin.status()).toBe(403);
  });

  test("rejects invalid fields and oversized bodies", async ({ request }) => {
    const invalidEmail = await request.post("/api/contact", {
      data: {
        user_name: "Test User",
        user_email: "not-an-email",
        message: "This is a test message.",
      },
    });
    expect(invalidEmail.status()).toBe(400);

    const oversized = await request.post("/api/contact", {
      data: {
        user_name: "Test User",
        user_email: "test@example.com",
        message: "x".repeat(17_000),
      },
    });
    expect(oversized.status()).toBe(413);
  });
});
