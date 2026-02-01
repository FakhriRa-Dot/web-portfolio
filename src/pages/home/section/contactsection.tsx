export default function ContactSection() {
  return (
    <section className="px-10 py-20">
      <div className="grid grid-cols-2 overflow-hidden rounded-2xl">
        <div className="bg-sage p-10 text-white">
          <h3 className="text-xl font-semibold">Let’s Work Together</h3>
          <p className="mt-2 text-sm text-white/80">
            Ready to bring your next big idea to life
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <p>
              Email
              <br />
              zahrah@gmail.com
            </p>
            <p>
              LinkedIn
              <br />
              linkedin.com/in/zahrah
            </p>
          </div>
        </div>

        <form className="bg-white p-10">
          <input
            placeholder="Full Name"
            className="mb-4 w-full rounded border p-2"
          />
          <input
            placeholder="Email Address"
            className="mb-4 w-full rounded border p-2"
          />
          <textarea
            placeholder="Message"
            className="mb-6 w-full rounded border p-2"
            rows={4}
          />
          <button className="w-full rounded bg-sage py-2 text-white">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
