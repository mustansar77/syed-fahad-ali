/**
 * Unit Tests — Footer
 * Tests: copyright text, back-to-top button, built-with text
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";



describe("Footer — Unit", () => {
  it("renders copyright with the correct name", () => {
    render(<Footer />);
    expect(screen.getByText("Mustansar Hussain Tariq")).toBeInTheDocument();
  });

  it("renders the current year in copyright", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders Back to top button", () => {
    render(<Footer />);
    expect(screen.getByLabelText("Back to top")).toBeInTheDocument();
  });

  it("renders the built-with text", () => {
    render(<Footer />);
    expect(screen.getByText(/Next\.js/i)).toBeInTheDocument();
  });
});
