/**
 * Unit Tests — Projects Section
 * Tests: project names, taglines, highlights, tech badges, links
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "@/components/Projects";



describe("Projects — Unit", () => {
  it("renders the section heading", () => {
    render(<Projects />);
    expect(screen.getByText(/things i've/i)).toBeInTheDocument();
  });

  it("renders PropOS project", () => {
    render(<Projects />);
    expect(screen.getByText("PropOS")).toBeInTheDocument();
  });

  it("renders WorkOs project", () => {
    render(<Projects />);
    expect(screen.getByText("WorkOs")).toBeInTheDocument();
  });

  it("renders project taglines", () => {
    render(<Projects />);
    expect(screen.getByText("AI-Powered Real Estate Platform")).toBeInTheDocument();
    expect(screen.getByText("Project Management Tool")).toBeInTheDocument();
  });

  it("renders the 40% automation highlight", () => {
    render(<Projects />);
    expect(screen.getAllByText(/40%/).length).toBeGreaterThan(0);
  });

  it("renders Featured Project labels", () => {
    render(<Projects />);
    const labels = screen.getAllByText("Featured Project");
    expect(labels.length).toBe(2);
  });

  it("renders GitHub links", () => {
    render(<Projects />);
    const githubLinks = screen.getAllByLabelText("GitHub");
    expect(githubLinks.length).toBe(2);
  });
});
