import { techIconMap } from "@/components/TechIcons";
import { techStacks } from "@/data/techStack";

export default function TechSection() {
  return (
    <section className="py-24 text-center">
      <p className="mb-3 text-md tracking-widest text-sage">MY STACK</p>
      <h2 className="text-2xl font-alfa tracking-wider text-ink">
        Technical Expertise
      </h2>

      <div className="mx-auto mt-16 max-w-6xl px-6">
        <div
          className="grid gap-8 md:grid-cols-3"
          style={{ minHeight: "70vh" }}
        >
          {techStacks.map((stack) => (
            <div
              key={stack.title}
              className="group flex flex-col rounded-2xl bg-sageSoft p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <h4 className="mb-6 text-lg font-semibold text-ink">
                {stack.title}
              </h4>

              <ul className="space-y-4">
                {stack.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center gap-3 text-sm text-ink transition group-hover:translate-x-1"
                  >
                    <span className="text-xl text-sage">
                      {techIconMap[item.id]}
                    </span>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>

              <div className="flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
