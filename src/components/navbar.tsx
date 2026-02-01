import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5">
      <span className="font-extrabold text-3xl text-ink font-alfa">
        rhess.dev
      </span>

      <ul className="flex gap-8 text-md text-ink font-inconsolata">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/project">PROJECTS</Link>
      </ul>

      <button className="rounded-md bg-sage px-4 py-2 text-sm text-white font-inconsolata font-bold">
        Download CV
      </button>
    </nav>
  );
}
