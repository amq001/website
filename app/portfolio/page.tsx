import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import StickyCard from "@/components/StickyCard";
import { portfolioPage } from "@/constants/dummy";

const page = () => {
  return (
    <div className="scroll-smooth">
      <HeroSection
        heading={portfolioPage.hero.heading}
        description={portfolioPage.hero.description}
      />
      <div>
        {portfolioPage.projects.map((project, index) => (
          <StickyCard key={index} {...project} variant="secondary" />
        ))}
      </div>
      <ReviewsSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default page;