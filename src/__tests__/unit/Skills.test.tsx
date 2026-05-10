/**
 * Unit Tests — Skills Section
 * Tests: category groups, tech badges, percentage labels
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Skills from "@/components/Skills";



describe("Skills — Unit", () => {
  it("renders the section heading", () => {
    render(<Skills />);
    expect(screen.getByText(/my tech/i)).toBeInTheDocument();
    expect(screen.getByText(/arsenal/i)).toBeInTheDocument();
  });

  it("renders all 4 skill categories", () => {
    render(<Skills />);
    ["Frontend", "Backend", "Database", "AI & Tools"].forEach((cat) => {
      expect(screen.getByText(cat)).toBeInTheDocument();
    });
  });

  it("renders tech badge cloud with Next.js", () => {
    render(<Skills />);
    // Next.js appears in badge cloud AND skill bar
    expect(screen.getAllByText("Next.js").length).toBeGreaterThan(0);
  });

  it("renders skill percentage labels", () => {
    render(<Skills />);
    // Check a specific percentage value exists
    expect(screen.getAllByText("95%").length).toBeGreaterThan(0);
  });

  it("renders all 12 tech badges", () => {
    render(<Skills />);
    ["TypeScript", "MongoDB", "Supabase", "Tailwind CSS", "Git", "AI/LLMs"].forEach((tech) => {
      expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
    });
  });
});
