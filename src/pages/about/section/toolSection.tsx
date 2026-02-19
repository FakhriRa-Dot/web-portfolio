import SectionHeader from "@/components/sectionHeader";
import { techStacks } from "@/data/techStack";

export default function TechnicalToolkit() {
  return (
    <div>
      <SectionHeader title="Technical Toolkit" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {techStacks.map((stack) => (
          <div key={stack.title}>
            <h2 className="mb-3 text-sm font-semibold text-ink">
              {stack.title}
            </h2>

            <div className="flex flex-wrap gap-2">
              {stack.items.map((tech) => (
                <span
                  key={tech.id}
                  className="rounded-md bg-sage px-3 py-1 text-xs font-medium text-cream"
                >
                  {tech.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
