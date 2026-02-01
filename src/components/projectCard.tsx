import type { Project } from "../data/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="h-40 overflow-hidden bg-gray-300">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>

        <p className="mb-4 text-sm text-gray-600">{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.category.map((cat, idx) => (
            <span
              key={`${project.id}-${cat}-${idx}`}
              className="rounded-full bg-[#d6d3c8] px-3 py-1 text-xs capitalize"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-md bg-[#7b806f] py-2 text-center text-sm text-white"
            >
              Demo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-md border py-2 text-center text-sm"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
