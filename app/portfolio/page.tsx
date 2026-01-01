import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection3 from "@/components/HeroSection3";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import SectionComponent from "@/components/SectionComponent";
import StickyCard from "@/components/StickyCard";
import { projects } from "@/constants/dummy";

const page = () => {
  return (
    <div>
      <HeroSection3
        heading={"Our Portfolio"}
        description="Explore our portfolio, where we highlight our most impactful solutions & projects. Our work reflects our commitment to delivering customized, innovative solutions tailored to meet the unique demands of each client"
      />
      <div className="bg-black">
        {projects.map((project, index) => (
          <StickyCard key={index} {...project} />
        ))}
      </div>
      <InfiniteMovingCardsDemo />
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
