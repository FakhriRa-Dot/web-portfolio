export type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Freelance / Personal Projects",
    period: "2024 — Present",
    points: [
      "Developed responsive and accessible web interfaces using React and TypeScript.",
      "Built reusable UI components with Tailwind CSS and maintained consistent design systems.",
      "Collaborated with designers to translate Figma designs into high-quality code.",
      "Optimized performance and improved page load times.",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "Tech Company Name",
    period: "2023 — 2024",
    points: [
      "Assisted in developing user-facing features using JavaScript and React.",
      "Implemented responsive layouts and improved UI consistency.",
      "Worked closely with senior developers to learn best practices in frontend development.",
    ],
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Academic / Personal Projects",
    period: "2022 — 2023",
    points: [
      "Created multiple web projects using HTML, CSS, and JavaScript.",
      "Practiced clean code principles and basic accessibility standards.",
      "Gained experience with version control using Git and GitHub.",
    ],
  },
];
