import ContactSection from "./section/contactsection";
import HeroSection from "./section/herosection";
import ProjectsSection from "./section/projectsection";
import TechSection from "./section/techsection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />;
      <ProjectsSection />
      <TechSection />
      <ContactSection />
    </div>
  );
}
