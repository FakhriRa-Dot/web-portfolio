import type { TechId } from "./techStack";

export type Project = {
  id: number;
  title: string;
  description: string;
  category: TechId[];
  featured?: boolean;
  image?: string;
  demoUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio with modern UI.",
    category: ["next", "typescript", "react"],
    featured: true,
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "Dashboard with Next.js App Router.",
    featured: true,
    category: ["react", "typescript", "tailwind"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Landing Page",
    description: "Marketing landing page.",
    category: ["javascript"],
    demoUrl: "#",
    codeUrl: "#",
  },
];
