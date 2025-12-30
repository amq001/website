import { projects } from "../constants/dummy";
import HeadingComponent from "./HeadingComponent";
import StickyCard from "./StickyCard";

const PortfolioSection = () => {
  return (
    <section className="min-h-screen flex flex-col gap-12 items-center bg-black pt-28">
      <HeadingComponent
        heading="Check Out What We’ve Delivered"
        variant="secondary"
      />
      <div>
        {projects.map((project, index) => (
          <StickyCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
