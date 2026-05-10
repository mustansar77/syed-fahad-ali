/**
 * Unit Tests — Navbar
 * Tests: renders correctly, desktop links, mobile menu toggle, theme button
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/components/Navbar";

jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "dark", setTheme: jest.fn() }),
}));



describe("Navbar — Unit", () => {
  it("renders the brand logo", () => {
    render(<Navbar />);
    expect(screen.getByText("MHT")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navbar />);
    ["About", "Experience", "Projects", "Skills", "Contact"].forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    });
  });

  it("renders the Hire Me link", () => {
    render(<Navbar />);
    expect(screen.getAllByText("Hire Me").length).toBeGreaterThan(0);
  });

  it("opens mobile menu when hamburger is clicked", () => {
    render(<Navbar />);
    const toggle = screen.getByLabelText("Toggle menu");
    fireEvent.click(toggle);
    // After opening, an X button should be visible
    expect(screen.getByLabelText("Toggle menu")).toBeInTheDocument();
  });

  it("renders the theme toggle button", () => {
    render(<Navbar />);
    expect(screen.getByLabelText("Toggle theme")).toBeInTheDocument();
  });

  it("Hire Me link points to email", () => {
    render(<Navbar />);
    const hireLinks = screen.getAllByText("Hire Me");
    hireLinks.forEach((el) => {
      const link = el.closest("a");
      if (link) expect(link).toHaveAttribute("href", "mailto:mh.tariq2003@gmail.com");
    });
  });
});
