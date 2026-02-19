import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/navbar";

describe("Navbar", () => {
  it("renders brand name", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getByText("rhess.dev")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getByText("HOME")).toBeInTheDocument();
    expect(screen.getByText("ABOUT")).toBeInTheDocument();
    expect(screen.getByText("PROJECTS")).toBeInTheDocument();
  });

  it("has correct link destinations", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getByText("HOME").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("ABOUT").closest("a")).toHaveAttribute(
      "href",
      "/about",
    );
    expect(screen.getByText("PROJECTS").closest("a")).toHaveAttribute(
      "href",
      "/project",
    );
  });

  it("renders download CV button with correct attributes", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    const downloadLink = screen.getByText("Download CV");

    expect(downloadLink).toHaveAttribute("href", "/CV/CV.pdf");
    expect(downloadLink).toHaveAttribute("download");
  });
});
