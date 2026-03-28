import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import LabSection from "@/components/LabSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div data-testid="landing-page" className="min-h-screen bg-bg-primary text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <LabSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
