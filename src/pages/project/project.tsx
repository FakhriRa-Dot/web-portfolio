import { useState } from "react";
import { projects } from "../../data/project";
import type { TechId } from "../../data/techStack";
import ProjectFilter from "../../components/projectFilter";
import ProjectCard from "../../components/projectCard";

type FilterId = TechId | "all";

export default function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 max-w-xl">
        <h1 className="mb-3 text-4xl font-bold text-gray-800">My Works</h1>
        <p className="text-sm text-gray-600">
          A showcase of frontend developer projects focused on accessibility and
          modern user experiences
        </p>
      </div>

      <ProjectFilter active={activeFilter} onChange={setActiveFilter} />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
