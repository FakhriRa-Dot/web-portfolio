export default function HeroSection() {
  return (
    <section className="grid min-h-[80vh] grid-cols-2 items-center px-10">
      <div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1">
          <span className="h-3 w-3 rounded-full bg-cream" />
          <p className="text-md text-cream font-inconsolata">
            Available for New Project
          </p>
        </div>

        <h1 className="mt-4 text-4xl font-bold text-sage font-alfa">
          Zahrah Hafizah Fakhri
        </h1>

        <p className="mt-2 text-lg text-sage font-inconsolata tracking-wide">
          Front-End Developer
          <span className="text-ink"> Specialist React</span>
        </p>

        <p className="mt-8 max-w-md text-md text-ink font-crimson">
          Crafting high-performance, accessible, and visually stunning web
          applications with modern frontend technologies.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="btn-sage">View Projects</button>
          <button className="btn-white">Let’s Talk</button>
        </div>
      </div>

      <div className="flex justify-center">
        <picture>
          <source
            type="image/webp"
            srcSet={`
        /images/Foto-480.webp 480w,
        /images/Foto-768.webp 768w,
        /images/Foto-1024.webp 1024w,
        /images/Foto.webp 1600w
      `}
            sizes="(max-width: 640px) 65vw, 260px"
          />
          <img
            src="/images/Foto.png"
            alt="Profile"
            fetchPriority="high"
            className="h-80 w-65 rounded-xl object-cover shadow-md"
          />
        </picture>
      </div>
    </section>
  );
}
