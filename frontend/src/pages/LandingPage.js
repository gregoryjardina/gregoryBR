import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import ResultSection from "@/components/ResultSection";
import PositioningSection from "@/components/PositioningSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div data-testid="landing-page" className="relative min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <HeroSection />
        <VisionSection />
        <ServicesSection />
        <ApproachSection />
        <ResultSection />
        <PositioningSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
