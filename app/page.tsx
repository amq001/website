import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { homePage } from "@/constants/data";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <HeroSection
        heading={homePage.hero.heading}
        description={homePage.hero.description}
        textCycle={homePage.hero.changingText}
      />
      {/* --- Portfolio Section --- */}
      <PortfolioSection heading={homePage.portfolio.heading} portfolio={homePage.portfolio.projects} />
      {/* --- Steps Section --- */}
      <ProcessSection
        heading={homePage.process.heading}
        description={homePage.process.description}
        cards={homePage.process.processCards}
      />
      {/* --- Services Section --- */}
      <ServicesSection
        heading={homePage.services.heading}
        cards={homePage.services.servicesCards}
      />
      {/* --- Industries Section --- */}
      <ProcessSection
        heading={homePage.industries.heading}
        description={homePage.industries.description}
        cards={homePage.industries.industriesCards}
      />
      {/* Why Choose Us */}
      <WhyUsSection
        heading={homePage.whyUs.heading}
        description={homePage.whyUs.description}
      />
      <ReviewsSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
}
