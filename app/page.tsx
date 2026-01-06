import AnimatedParagraph from "@/components/AnimatedParagraph";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
// import ProcessSection2 from "@/components/ProcessSection2";
import { ReviewsSection } from "@/components/ReviewsSection";
import { websiteData } from "@/constants/dummy";
import HorizontalScroll from "@/components/HorizontalScroll";
import ProcessSection2 from "@/components/ProcessSection2";

export default function Home() {
  return (
    <div className="smooth-scroll">
      <HeroSection
        heading="Delivering excellence in"
        description="We partner with you to build intelligent, scalable products focused on results, reliability, and long-term success."
        type="hero"
        textCycle={[
          "AI-Powered Solutions",
          "Product Strategy & Design",
          "Deployment & Ongoing Support",
          "Visual & Brand Experiences",
          "Technical Advisory Services",
          "Research & Innovation",
          "MVP & Rapid Development",
        ]}
      />
      <PortfolioSection />
      <ProcessSection
        heading={websiteData.process.heading}
        description={websiteData.process.description}
        cards={websiteData.process.processCards}
      />
      {/* <HorizontalScroll cards={websiteData.process.processCards} /> */}
      <ProcessSection2 cards={websiteData.services.servicesCards} />
      {/* --- Industries Section --- */}
      <ProcessSection
        heading={websiteData.industries.heading}
        description={websiteData.industries.description}
        cards={websiteData.industries.industriesCards}
      />
      {/* Why Choose Us */}
      <AnimatedParagraph
        paragraph={`We believe great products are built on trust, transparency, and close collaboration. Our highly skilled team brings deep technical expertise and industry experience to every project, ensuring solutions are scalable, efficient, and future-ready. We work side by side with you, maintaining clear communication and complete visibility throughout the development journey.`}
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
