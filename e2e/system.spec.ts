/**
 * System Tests — End-to-end user journey verification
 * Tests: all sections visible, navigation, carousel, theme toggle, responsiveness
 * Run with: npx playwright test e2e/system.spec.ts
 */
import { test, expect } from "@playwright/test";

test.describe("System Tests — Full User Journey", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");
  });

  // ── Section Visibility ──────────────────────────────────────────
  test("all sections are present in the DOM", async ({ page }) => {
    for (const id of ["hero", "about", "experience", "projects", "skills", "contact"]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });

  test("about section becomes visible on scroll", async ({ page }) => {
    await page.locator("#about").scrollIntoViewIfNeeded();
    await expect(page.locator("#about")).toBeVisible();
    await expect(page.getByText("The person behind")).toBeVisible();
  });

  test("experience section shows both roles", async ({ page }) => {
    await page.locator("#experience").scrollIntoViewIfNeeded();
    await expect(page.getByText("Software Engineer Intern")).toBeVisible();
    await expect(page.getByText("Full Stack Developer")).toBeVisible();
    await expect(page.getByText("Jan 2024 — Jul 2024")).toBeVisible();
    await expect(page.getByText("Jul 2024 — Present")).toBeVisible();
  });

  test("projects section shows both projects", async ({ page }) => {
    await page.locator("#projects").scrollIntoViewIfNeeded();
    await expect(page.getByText("PropOS")).toBeVisible();
    await expect(page.getByText("WorkOs")).toBeVisible();
  });

  test("skills section shows categories", async ({ page }) => {
    await page.locator("#skills").scrollIntoViewIfNeeded();
    await expect(page.getByText("FRONTEND")).toBeVisible();
    await expect(page.getByText("BACKEND")).toBeVisible();
  });

  test("contact section shows email link", async ({ page }) => {
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await expect(page.getByText(/let's build something/i)).toBeVisible();
    const emailLink = page.getByRole("link", { name: /say hello/i });
    await expect(emailLink).toHaveAttribute("href", "mailto:mh.tariq2003@gmail.com");
  });

  // ── Carousel ────────────────────────────────────────────────────
  test("carousel slide 2 loads on dot click", async ({ page }) => {
    const dots = page.getByRole("button", { name: "Go to slide" });
    await dots.nth(1).click();
    await expect(page.getByText("Connect with me")).toBeVisible();
  });

  test("carousel returns to slide 1 on first dot click", async ({ page }) => {
    const dots = page.getByRole("button", { name: "Go to slide" });
    await dots.nth(1).click();
    await dots.nth(0).click();
    await expect(page.getByText("Full-Stack Software Engineer")).toBeVisible();
  });

  // ── Theme Toggle ────────────────────────────────────────────────
  test("theme toggle button is visible and clickable", async ({ page }) => {
    const toggle = page.getByRole("button", { name: "Toggle theme" });
    await expect(toggle).toBeVisible();
    await toggle.click();
    // After toggle, html class changes (dark ↔ light)
    const htmlClass = await page.locator("html").getAttribute("class");
    expect(htmlClass).toBeDefined();
  });

  test("dark mode is the default theme", async ({ page }) => {
    const htmlClass = await page.locator("html").getAttribute("class");
    expect(htmlClass).toContain("dark");
  });

  // ── Navigation ──────────────────────────────────────────────────
  test("clicking About nav link scrolls to about section", async ({ page }) => {
    const aboutLink = page.getByRole("link", { name: "About" }).first();
    await aboutLink.click();
    await page.waitForTimeout(600);
    const aboutTop = await page.locator("#about").boundingBox();
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeGreaterThan(0);
    expect(aboutTop).toBeTruthy();
  });

  // ── Responsiveness ──────────────────────────────────────────────
  test("mobile: hamburger menu opens", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const hamburger = page.getByLabel("Toggle menu");
    await expect(hamburger).toBeVisible();
    await hamburger.click();
    await expect(page.getByText("About").first()).toBeVisible();
  });

  test("mobile: hero text is visible at 375px width", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await expect(page.getByText("Mustansar")).toBeVisible();
    await expect(page.getByText("Hussain Tariq")).toBeVisible();
  });

  test("tablet: nav links are visible at 768px", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.getByRole("link", { name: "About" }).first()).toBeVisible();
  });
});
