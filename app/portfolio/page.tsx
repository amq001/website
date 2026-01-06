import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ReviewsSection } from "@/components/ReviewsSection";
// import HeroSection3 from "@/components/HeroSection";
// import { InfiniteMovingCardsDemo } from "@/components/ReviewsSection";
import SectionComponent from "@/components/SectionComponent";
import StickyCard from "@/components/StickyCard";
import { projects } from "@/constants/dummy";

const page = () => {
  return (
    <div>
      <HeroSection
        heading={"Our Portfolio"}
        description="Explore our portfolio, where we highlight our most impactful solutions & projects. Our work reflects our commitment to delivering customized, innovative solutions tailored to meet the unique demands of each client"
      />
      <div className="bg-black">
        {projects.map((project, index) => (
          <StickyCard key={index} {...project} variant="secondary" />
        ))}
      </div>
      <ReviewsSection />
      <ContactUsSection />
      <Footer />
      {/* {data.map((item, k) => (
        <SectionComponent key={k} {...item} index={k} />
      ))}
      */}
    </div>
  );
};

export default page;

const data = Array(6)
  .fill()
  .map((_, index) => ({
    heading: "HELLO",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          adipisci, corporis mollitia labore ducimus fuga consectetur id, magni,
          quibusdam magnam nesciunt soluta deleniti minima laudantium rem harum
          voluptatem corrupti fugit sed! Accusantium maiores quaerat quo, culpa
          dolorem sit repellat autem iure voluptatibus. Autem sed saepe delectus
          dolore vero iste distinctio.`,
    image: "",
    slug: "example-slug",
  }));
