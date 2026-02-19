import { Project } from "@/data/project";
import { TechId } from "@/data/techStack";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const hasDemo = Boolean(project.demoUrl);

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm">
      <div className="h-40 overflow-hidden bg-gray-300">
        {project.image && (
          <picture>
            <source
              srcSet={project.image.replace(".png", ".webp")}
              type="image/webp"
            />
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </picture>
        )}
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>

        <p className="mb-4 text-sm text-ink">{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.category.map((cat: TechId, idx: number) => (
            <span
              key={`${project.id}-${cat}-${idx}`}
              className="rounded-full bg-sageSoft px-3 py-1 text-xs capitalize"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {hasDemo ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-md bg-sage py-2 text-center text-lg text-cream transition hover:opacity-90"
            >
              Demo
            </a>
          ) : (
            <button
              disabled
              className="flex-1 cursor-not-allowed rounded-md bg-sage/40 py-2 text-center text-lg text-cream"
            >
              Demo
            </button>
          )}

          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-md border py-2 text-center text-lg transition hover:bg-gray-50"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
