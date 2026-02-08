import { render, screen, fireEvent } from "@testing-library/react";
import ProjectFilter from "../components/ProjectFilter";

describe("ProjectFilter", () => {
  const onChange = jest.fn();

  beforeEach(() => {
    onChange.mockClear();
  });

  it("renders all filter buttons", () => {
    render(<ProjectFilter active="all" onChange={onChange} />);

    expect(screen.getByText("all projects")).toBeInTheDocument();
    expect(screen.getByText("react")).toBeInTheDocument();
    expect(screen.getByText("next.js")).toBeInTheDocument();
    expect(screen.getByText("typescript")).toBeInTheDocument();
    expect(screen.getByText("javascript")).toBeInTheDocument();
  });

  it("calls onChange with correct filter id when clicked", () => {
    render(<ProjectFilter active="all" onChange={onChange} />);

    fireEvent.click(screen.getByText("react"));
    expect(onChange).toHaveBeenCalledWith("react");
  });

  it("applies active style to active filter", () => {
    render(<ProjectFilter active="react" onChange={onChange} />);

    const activeButton = screen.getByText("react");
    expect(activeButton).toHaveClass("bg-[#7b806f]");
    expect(activeButton).toHaveClass("text-white");
  });
});
