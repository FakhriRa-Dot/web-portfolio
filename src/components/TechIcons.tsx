import {
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import type { ReactNode } from "react";
import { TechId } from "@/data/techStack";

export const techIconMap: Record<TechId, ReactNode> = {
  html: <SiHtml5 />,
  css: <SiCss3 />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  react: <SiReact />,
  next: <SiNextdotjs />,
  vite: <SiVite />,
  tailwind: <SiTailwindcss />,
  bootstrap: <SiBootstrap />,
  mui: <SiMui />,
  storybook: <SiStorybook />,
};
