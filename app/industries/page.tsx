import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import SectionComponent from "@/components/SectionComponent";
import { industriesPage } from "@/constants/data";

const page = () => {
  return (
    <div className="scroll-smooth">
      <HeroSection heading={industriesPage?.hero?.heading} description={industriesPage?.hero?.description} />
      <div>
        {industriesPage?.industries.map((item, index) => (
          <SectionComponent
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            slug={`/industries/${item.slug}`}
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