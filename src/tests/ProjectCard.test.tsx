import { render, screen } from "@testing-library/react";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../data/Project";

const baseProject: Project = {
  id: 3,
  title: "Coffe Shop",
  description:
    "A modern coffee shop website built to showcase products, menus, and brand identity.",
  category: ["next", "css", "tailwind"],
  image: "/images/project-3.png",
  codeUrl: "https://github.com/FakhriRa-Dot/Mini-Project-AdvanceReact.git",
};

describe("ProjectCard", () => {
  it("renders project title and description", () => {
    render(<ProjectCard project={baseProject} />);

    expect(screen.getByText("Coffe Shop")).toBeInTheDocument();
    expect(
      screen.getByText(
        "A modern coffee shop website built to showcase products, menus, and brand identity.",
      ),
    ).toBeInTheDocument();
  });

  it("renders category badges", () => {
    render(<ProjectCard project={baseProject} />);

    expect(screen.getByText("next")).toBeInTheDocument();
    expect(screen.getByText("css")).toBeInTheDocument();
    expect(screen.getByText("tailwind")).toBeInTheDocument();
  });

  it("shows disabled demo button when demoUrl is not provided", () => {
    render(<ProjectCard project={baseProject} />);

    const demoButton = screen.getByText("Demo");
    expect(demoButton).toBeDisabled();
  });

  it("renders demo link when demoUrl exists", () => {
    const projectWithDemo: Project = {
      ...baseProject,
      demoUrl: "https://demo.coffeeshop.com",
    };

    render(<ProjectCard project={projectWithDemo} />);

    const demoLink = screen.getByText("Demo");
    expect(demoLink).toHaveAttribute("href", "https://demo.coffeeshop.com");
  });

  it("renders code link when codeUrl exists", () => {
    render(<ProjectCard project={baseProject} />);

    const codeLink = screen.getByText("Code");
    expect(codeLink).toHaveAttribute(
      "href",
      "https://github.com/FakhriRa-Dot/Mini-Project-AdvanceReact.git",
    );
  });

  it("renders project image with correct alt text", () => {
    render(<ProjectCard project={baseProject} />);

    const image = screen.getByAltText("Coffe Shop");
    expect(image).toBeInTheDocument();
  });
});
