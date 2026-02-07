import SectionHeader from "../../../components/sectionHeader";
import { experiences } from "../../../data/experience";

export default function ExperienceTimeline() {
  return (
    <div>
      <SectionHeader title="Experience" />

      <div className="relative pl-6">
        <div className="absolute left-1 top-0 h-full w-px bg-sageSoft" />

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-ink">{exp.role}</h2>
                  <p className="text-xs text-gray-500">{exp.company}</p>
                </div>

                <span className="text-xs text-gray-500">{exp.period}</span>
              </div>

              <ul className="list-disc space-y-2 pl-4 text-sm text-gray-600">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
