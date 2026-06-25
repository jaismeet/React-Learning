import Footer from "../components/layout/Footer.jsx";
import CapabilityPreview from "../components/sections/CapabilityPreview.jsx";
import HeroHome from "../components/sections/HeroHome.jsx";
import WhySection from "../components/sections/WhySection.jsx";

export default function HomePage({ onNavigate }) {
  return (
    <>
      <HeroHome onNavigate={onNavigate} />
      <WhySection />
      <CapabilityPreview onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </>
  );
}
