import AnimatedParagraph from "@/components/AnimatedParagraph";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection3 from "@/components/HeroSection3";
import HorizontalScroll from "@/components/HorizontalScroll";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import PortfolioSection from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import ProcessSection2 from "@/components/ProcessSection2";
import ReviewsSection from "@/components/ReviewsSection";
import { websiteData } from "@/constants/dummy";
// import IndustriesSection from "@/components/IndustriesSection";
// import ProcessSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <div className="smooth-scroll">
      {/* <HeroSection /> */}
      {/* <HeroSection2 /> */}
      {/* --- Hero Section --- */}
      <HeroSection3
        heading="Providing you with"
        description="A commitment that guarantees a beneficial partnership that is proven through successful resultant products. We assure you that you’ll have a great experience working with us."
        type="hero"
        textCycle={[
          "Product Design",
          "Deployment & Support",
          "Visual Creatives",
          "Technical Consultancy",
          "Research & Development",
          "MVP Development",
        ]}
      />
      {/* --- Portfolio Section --- */}
      <PortfolioSection />
      {/* --- Services Section --- */}
      <ProcessSection
        heading={websiteData.process.heading}
        description={websiteData.process.description}
        cards={websiteData.process.processCards}
      />
      {/* <ProcessSection
        heading="From Idea to Product"
        description="A refined process that turns ideas into scalable, high-quality
            products. From concept to launch, we build with purpose and
            precision."
      /> */}
      {/* --- development process */}
      {/* <HorizontalScroll cards={websiteData.process.processCards} /> */}
      <ProcessSection2 cards={websiteData.services.servicesCards} />
      {/* --- Industries Section --- */}
      <ProcessSection
        heading={websiteData.industries.heading}
        description={websiteData.industries.description}
        cards={websiteData.industries.industriesCards}
      />
      {/* <BentoGrid /> */}
      {/* <ProcessSection2 /> */}
      {/* <AboutSection /> */}
      {/* <ServiceSection /> */}
      {/* <ReviewsSection /> */}
      {/* <TechnologiesSection /> */}
      {/* Animated Paragraph */}
      {/* <div className="h-[100vh] bg-black"></div> */}
      <AnimatedParagraph
        paragraph={`We believe great products are built on trust, transparency, and close
        collaboration. Our highly skilled team brings deep technical expertise
        and industry experience to every project, ensuring solutions are
        scalable, efficient, and future-ready. We work side by side with you,
        maintaining clear communication and complete visibility throughout the
        development journey.`}
      />
      <InfiniteMovingCardsDemo />

      {/* </AnimatedParagraph> */}
      {/* <div className="h-[100vh] bg-black"></div> */}
      {/* Contact us section */}
      <ContactUsSection />
      {/* <AnimatedParagraph /> */}
      <Footer />
    </div>
  );
}
