import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import KeySpeakersSection from "@/components/KeySpeakersSection";
import HighlightsSection from "@/components/HighlightsSection";
import SponsorsPartnersSection from "@/components/SponsorsPartnersSection";
import TickerSection from "@/components/TickerSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TickerSection />
      <AboutSection />
      <StatsSection />
      <KeySpeakersSection />
      <HighlightsSection />
      <SponsorsPartnersSection />
    </div>
  );
};

export default Index;
