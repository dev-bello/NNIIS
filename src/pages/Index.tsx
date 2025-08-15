import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import KeySpeakersSection from "@/components/KeySpeakersSection";
import HighlightsSection from "@/components/HighlightsSection";
import SponsorsPartnersSection from "@/components/SponsorsPartnersSection";
import TickerSection from "@/components/TickerSection";
import VolunteerSection from "@/components/VolunteerSection";
import MatchmakingSection from "@/components/MatchmakingSection";
import NorthernNigeriaSection from "@/components/NorthernNigeriaSection";

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
      {/* <MatchmakingSection /> */}
      <NorthernNigeriaSection />
      <SponsorsPartnersSection />
      <VolunteerSection />
    </div>
  );
};

export default Index;
