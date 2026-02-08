import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer", () => {
  it("renders brand name", () => {
    render(<Footer />);
    expect(screen.getByText("rhess.dev")).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(<Footer />);

    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("Linkedin")).toBeInTheDocument();
    expect(screen.getByText("Twitter")).toBeInTheDocument();
  });

  it("has correct social media URLs", () => {
    render(<Footer />);

    expect(screen.getByText("GitHub")).toHaveAttribute(
      "href",
      "https://github.com/FakhriRa-Dot",
    );

    expect(screen.getByText("Linkedin")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/zhfakhri-ara/",
    );

    expect(screen.getByText("Twitter")).toHaveAttribute(
      "href",
      "https://x.com/rhessistance",
    );
  });

  it("opens social links in a new tab safely", () => {
    render(<Footer />);

    const githubLink = screen.getByText("GitHub");

    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
