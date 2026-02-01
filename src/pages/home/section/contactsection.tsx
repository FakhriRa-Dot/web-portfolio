import { FiLinkedin, FiMail } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="px-10 py-20">
      <div className="grid grid-cols-2 overflow-hidden rounded-2xl">
        <div className="bg-sage p-10 text-cream">
          <h3 className="text-3xl font-bold tracking-widest">
            Let’s Work Together
          </h3>
          <p className="mt-2 text-sm text-white font-crimson">
            Ready to bring your next big idea to life
          </p>

          <div className="mt-8 space-y-6 text-sm">
            <div className="flex items-start gap-3">
              <FiMail className="mt-1 text-lg text-sageSoft" />

              <div className="flex flex-col">
                <span className="text-sageSoft">Email</span>
                <a
                  href="mailto:zhfakhri.zara@gmail.com"
                  className="text-white hover:text-cream"
                >
                  zhfakhri.zara@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiLinkedin className="mt-1 text-lg text-sageSoft" />

              <div className="flex flex-col">
                <span className="text-sageSoft">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/zahrahhafizahfakhri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white  hover:text-cream"
                >
                  linkedin.com/in/zahrahhafizahfakhri
                </a>
              </div>
            </div>
          </div>
        </div>

        <form
          action="https://formspree.io/f/mykpkpdl"
          method="POST"
          className="bg-white p-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="mb-4 w-full rounded border p-2"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="mb-4 w-full rounded border p-2"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            className="mb-6 w-full rounded border p-2"
            rows={4}
          />

          <button
            type="submit"
            className="w-full rounded bg-sage py-2 text-white hover:bg-sageSoft cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
