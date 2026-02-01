export default function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-200 bg-[#fbf8f3]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <p className="font-semibold text-gray-700">rhess.dev</p>

        <div className="flex gap-8 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900 transition">
            GitHub
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Linkedin
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
