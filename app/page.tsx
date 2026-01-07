import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { homePage } from "@/constants/dummy";
import ProcessSection2 from "@/components/ProcessSection2";
import WhyUsSection from "@/components/WhyUsSection";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <HeroSection
        heading={homePage.hero.heading}
        description={homePage.hero.description}
        textCycle={homePage.hero.changingText}
      />
      <PortfolioSection heading={homePage.portfolio.heading} portfolio={homePage.portfolio.projects} />
      <ProcessSection
        heading={homePage.process.heading}
        description={homePage.process.description}
        cards={homePage.process.processCards}
      />
      {/* <HorizontalScroll cards={homePage.process.processCards} /> */}
      <ProcessSection2
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
      {/* <ProcessSection
        heading="From Idea to Product"
        description="A refined process that turns ideas into scalable, high-quality
            products. From concept to launch, we build with purpose and
            precision."
      /> */}
      {/* --- development process */}
      {/* <BentoGrid /> */}
      {/* <AboutSection /> */}
      {/* <ReviewsSection /> */}
      {/* <TechnologiesSection /> */}
    </div>
  );
}
