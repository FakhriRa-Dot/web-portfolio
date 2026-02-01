import { techStacks } from "../../../data/techStack";

export default function TechSection() {
  return (
    <section className="py-20 text-center">
      <p className="text-xs text-ink">MY STACK</p>
      <h2 className="mt-2 text-2xl font-alfa text-ink">Technical Expertise</h2>

      <div className="mx-auto mt-12 max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {techStacks.map((stack) => (
            <div
              key={stack.title}
              className="rounded-xl bg-sageSoft px-6 py-8 text-left"
            >
              <h4 className="mb-4 text-lg font-semibold text-ink">
                {stack.title}
              </h4>

              <ul className="space-y-2 text-sm text-ink">
                {stack.items.map((item) => (
                  <li key={item.id}>{item.label}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
