import Link from "next/link";
import { projects } from "../constants/dummy";
import Button from "./Button";
import HeadingComponent from "./HeadingComponent";
import StickyCard from "./StickyCard";
// import {useRouter} from "next/navigation";

const PortfolioSection = () => {
  // const router = useRouter();
  return (
    <section className="min-h-screen flex flex-col gap-12 items-center bg-black pt-28">
      <HeadingComponent
        heading="Check Out What We’ve Delivered"
        variant="secondary"
      />
      <div>
        {projects.slice(0, 4).map((project, index) => (
          <StickyCard key={index} {...project} />
        ))}
      </div>
      <Link href="/portfolio">
        <Button variant="bordered">View Full Portfolio</Button>
      </Link>
    </section>
  );
};

export default PortfolioSection;
