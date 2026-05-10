/**
 * Integration Tests — Full Page
 * Tests: all sections render together, theme provider wrapping, nav link hrefs
 */
import React from "react";
import { render, screen } from "@testing-library/react";

jest.mock("next-themes", () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useTheme: () => ({ theme: "dark", setTheme: jest.fn() }),
}));

jest.mock("next/image", () => ({ __esModule: true, default: (props: any) => <img {...props} /> }));

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function FullPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

describe("Page Integration", () => {
  it("renders all major sections without crashing", () => {
    render(<FullPage />);

    // Hero
    expect(screen.getByText("Mustansar")).toBeInTheDocument();
    expect(screen.getByText("Hussain Tariq")).toBeInTheDocument();

    // About
    expect(screen.getByText(/the person behind/i)).toBeInTheDocument();

    // Experience
    expect(screen.getByText("Software Engineer Intern")).toBeInTheDocument();
    expect(screen.getByText("Full Stack Developer")).toBeInTheDocument();

    // Projects
    expect(screen.getByText("PropOS")).toBeInTheDocument();
    expect(screen.getByText("WorkOs")).toBeInTheDocument();

    // Skills
    expect(screen.getByText("Frontend")).toBeInTheDocument();

    // Contact
    expect(screen.getByText(/let's build something/i)).toBeInTheDocument();

    // Footer
    expect(screen.getByLabelText("Back to top")).toBeInTheDocument();
  });

  it("nav links have correct href anchors", () => {
    render(<FullPage />);
    const aboutLinks = screen.getAllByRole("link", { name: "About" });
    expect(aboutLinks[0]).toHaveAttribute("href", "#about");
    const projectLinks = screen.getAllByRole("link", { name: "Projects" });
    expect(projectLinks[0]).toHaveAttribute("href", "#projects");
  });

  it("contact email links point to mh.tariq2003@gmail.com", () => {
    render(<FullPage />);
    const emailLinks = screen.getAllByRole("link", { name: /say hello|hire me|email/i });
    const emailHrefs = emailLinks.map((el) => el.getAttribute("href")).filter(Boolean);
    expect(emailHrefs.some((h) => h?.includes("mh.tariq2003@gmail.com"))).toBe(true);
  });

  it("GitHub external links have correct target", () => {
    render(<FullPage />);
    const githubLinks = screen.getAllByLabelText("GitHub");
    githubLinks.forEach((link) => {
      if (link.getAttribute("href")?.startsWith("http")) {
        expect(link).toHaveAttribute("target", "_blank");
      }
    });
  });
});
