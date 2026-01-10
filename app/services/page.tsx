import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import SectionComponent from "@/components/SectionComponent";
import { servicesPage } from "@/constants/data";

const page = () => {
  return (
    <div className="scroll-smooth">
      <HeroSection
        heading={servicesPage.hero.heading}
        description={servicesPage.hero.description}
      />
      <div>
        {servicesPage.services.map((item, index) => (
          <SectionComponent
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            colour={item.colour}
            index={index}
          />
        ))}
      </div>

      <ReviewsSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default page;