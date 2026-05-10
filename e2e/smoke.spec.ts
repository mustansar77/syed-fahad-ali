/**
 * Smoke Tests — Critical path verification
 * These tests verify that the most essential features of the portfolio work.
 * Run with: npx playwright test e2e/smoke.spec.ts
 */
import { test, expect } from "@playwright/test";

test.describe("Smoke Tests", () => {
  test("page loads with correct title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Mustansar Hussain Tariq/);
  });

  test("hero section is visible on load", async ({ page }) => {
    await page.goto("/");
    const hero = page.locator("#hero");
    await expect(hero).toBeVisible();
    await expect(page.getByText("Mustansar")).toBeVisible();
    await expect(page.getByText("Hussain Tariq")).toBeVisible();
  });

  test("navbar is present and visible", async ({ page }) => {
    await page.goto("/");
    const navbar = page.locator("header");
    await expect(navbar).toBeVisible();
    await expect(page.getByText("MHT")).toBeVisible();
  });

  test("page returns 200 status", async ({ request }) => {
    const response = await request.get("/");
    expect(response.status()).toBe(200);
  });

  test("no critical console errors on load", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    // Filter out common benign errors
    const critical = errors.filter(
      (e) => !e.includes("favicon") && !e.includes("picsum") && !e.includes("DevTools")
    );
    expect(critical).toHaveLength(0);
  });

  test("hero carousel has two slide dots", async ({ page }) => {
    await page.goto("/");
    const dots = page.getByRole("button", { name: "Go to slide" });
    await expect(dots).toHaveCount(2);
  });
});
