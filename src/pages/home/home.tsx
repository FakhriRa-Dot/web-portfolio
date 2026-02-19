import { lazy, Suspense } from "react";
import HeroSection from "@/pages/home/section/herosection";

const ProjectsSection = lazy(() => import("./section/projectsection"));
const TechSection = lazy(() => import("./section/techsection"));
const ContactSection = lazy(() => import("./section/contactsection"));

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <TechSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
