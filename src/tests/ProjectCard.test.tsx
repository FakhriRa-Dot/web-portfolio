import { render, screen } from "@testing-library/react";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../data/Project";

const mockProject: Project = {
  id: 3,
  title: "Coffe Shop",
  description:
    "A modern coffee shop website built to showcase products, menus, and brand identity.",
  category: ["next", "css", "tailwind"],
  image: "/images/project-3.png",
  codeUrl: "https://github.com/FakhriRa-Dot/Mini-Project-AdvanceReact.git",
};

describe("ProjectCard", () => {
  it("renders project title", () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText("Coffe Shop")).toBeInTheDocument();
  });

  it("renders project description", () => {
    render(<ProjectCard project={mockProject} />);
    expect(
      screen.getByText(
        "A modern coffee shop website built to showcase products, menus, and brand identity.",
      ),
    ).toBeInTheDocument();
  });
});
