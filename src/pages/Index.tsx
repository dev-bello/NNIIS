import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import KeySpeakersSection from "@/components/KeySpeakersSection";
import HighlightsSection from "@/components/HighlightsSection";
import SponsorsPartnersSection from "@/components/SponsorsPartnersSection";
import TickerSection from "@/components/TickerSection";
import MasterclassesSection from "@/components/MasterclassesSection";
import VolunteerSection from "@/components/VolunteerSection";

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
      <TickerSection />
      <MasterclassesSection />
      <SponsorsPartnersSection />
      <VolunteerSection />
    </div>
  );
};

export default Index;
