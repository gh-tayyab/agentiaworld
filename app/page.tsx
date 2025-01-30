import HeroSection from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import About from "@/components/About";
import ServicesSection from "@/components/Services";
import LeadersSection from "@/components/Leaders";
import ContactPage from "@/components/Contact";

export default function Home() {
  return (
    <>
    <HeroSection />
    <About />
    <ServicesSection />
    <FeatureSection />
    <LeadersSection />
    <ContactPage />
    </>
  );
}
