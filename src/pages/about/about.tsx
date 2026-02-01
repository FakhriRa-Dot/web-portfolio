import AboutBio from "./section/bioSection";
import ExperienceTimeline from "./section/expSection";
import TechnicalToolkit from "./section/toolSection";

export default function AboutPage() {
  return (
    <main className="px-10 py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-20">
        {/* LEFT COLUMN */}
        <div className="col-span-12 lg:col-span-5">
          {/* Page Title */}
          <section className="mb-16">
            <h1 className="text-4xl font-extrabold text-ink leading-tight">
              About &<br />
              Experience
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Frontend Developer focused on building accessible,
              high-performance web applications and intuitive user experiences.
            </p>
          </section>

          <AboutBio />

          <section className="mt-20">
            <TechnicalToolkit />
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-12 lg:col-span-7">
          <ExperienceTimeline />
        </div>
      </div>
    </main>
  );
}
