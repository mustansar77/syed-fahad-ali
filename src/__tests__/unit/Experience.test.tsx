/**
 * Unit Tests — Experience Section
 * Tests: both roles rendered, correct periods, tech badges
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Experience from "@/components/Experience";



describe("Experience — Unit", () => {
  it("renders the section heading", () => {
    render(<Experience />);
    expect(screen.getByText(/made an impact/i)).toBeInTheDocument();
  });

  it("renders the internship role", () => {
    render(<Experience />);
    expect(screen.getByText("Software Engineer Intern")).toBeInTheDocument();
  });

  it("renders the full-stack role", () => {
    render(<Experience />);
    expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();
  });

  it("renders correct date periods", () => {
    render(<Experience />);
    expect(screen.getByText("Jan 2024 — Jul 2024")).toBeInTheDocument();
    expect(screen.getByText("Jul 2024 — Present")).toBeInTheDocument();
  });

  it("renders the company name for both roles", () => {
    render(<Experience />);
    const companyNames = screen.getAllByText("HurTech LLC");
    expect(companyNames.length).toBe(2);
  });

  it("renders Internship badge", () => {
    render(<Experience />);
    expect(screen.getByText("Internship")).toBeInTheDocument();
  });

  it("renders Full-time badge", () => {
    render(<Experience />);
    expect(screen.getByText("Full-time")).toBeInTheDocument();
  });

  it("renders key internship tech badge", () => {
    render(<Experience />);
    expect(screen.getAllByText("React.js").length).toBeGreaterThan(0);
  });

  it("renders key full-stack tech badge", () => {
    render(<Experience />);
    expect(screen.getAllByText("AI/LLMs").length).toBeGreaterThan(0);
  });
});
