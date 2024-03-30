import { LandingContent } from "./_components/content";
import { LandingHero } from "./_components/hero-section";
import { LandingNavbar } from "./_components/navbar";

const LandingPage = () => {
  return (
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
