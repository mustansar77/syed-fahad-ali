/**
 * Unit Tests — About Section
 * Tests: section heading, stat labels, highlight card titles, counters
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import About from "@/components/About";



describe("About — Unit", () => {
  it("renders the section heading", () => {
    render(<About />);
    expect(screen.getByText(/the person behind/i)).toBeInTheDocument();
    expect(screen.getByText(/the code/i)).toBeInTheDocument();
  });

  it("renders all stat labels", () => {
    render(<About />);
    ["Years Experience", "Projects Shipped", "Technologies", "Happy Clients"].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("renders counter elements (start from 0)", () => {
    render(<About />);
    // All 4 counters should be present (they show "+" suffixes)
    const plusSigns = screen.getAllByText("+");
    expect(plusSigns.length).toBe(4);
  });

  it("renders all highlight card titles", () => {
    render(<About />);
    ["MERN Stack Expert", "AI Integration", "Project Leadership", "CS Student"].forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("mentions the university", () => {
    render(<About />);
    expect(screen.getAllByText(/Islamia University of Bahawalpur/i).length).toBeGreaterThan(0);
  });
});
