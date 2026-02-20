import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import MechanismSection from "@/components/MechanismSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProofSection from "@/components/ProofSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import UrgencySection from "@/components/UrgencySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <ProblemSection />
        <MechanismSection />
        <BenefitsSection />
        <ProofSection />
        <TestimonialSection />
        <FAQSection />
        <UrgencySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
