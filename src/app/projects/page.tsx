import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { ProjectsHero } from "@/sections/ProjectsHero";
import { ProjectsShowcase } from "@/sections/ProjectsShowcase";

export default function ProjectsPage() {
  return (
    <div>
      <Header />
      <ProjectsHero />
      <ProjectsShowcase />
      <Footer />
    </div>
  );
} 