import { Link } from "react-router-dom";
import ProjectCard from "../../../components/projectCard";
import { projects } from "../../../data/project";

export default function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-md text-sage tracking-widest mb-3">PORTFOLIO</p>
            <h1 className="text-2xl font-alfa text-ink tracking-wider">
              Selected Projects
            </h1>
          </div>
          <Link
            to="/project"
            className="text-sm font-inconsolata text-sage transition hover:text-ink"
          >
            View All
          </Link>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
