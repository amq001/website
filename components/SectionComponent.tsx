import Image from "next/image";
import Link from "next/link";
import One from "../public/images/image1.jpg";
import Container from "./Container";
import Reveal from "./Reveal";

type Props = {
  heading: string;
  description: string;
  image: string;
  slug?: string;
  index: number;
};

const SectionComponent = ({
  heading,
  description,
  slug,
  image,
  index = 0,
}: Props) => {
  return (
    <div className={"bg-black sticky top-0"}>
      <div
        className={`flex flex-col-reverse min-h-screen max-w-screen px-4 md:max-w-7xl mx-auto gap-4 items-center justify-center md:justify-between ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className="flex flex-col gap-2 items-center w-full md:w-1/2">
          <Reveal width="full-width">
            <h1
              className={`text-xl md:text-3xl text-center font-semibold text-white`}
            >
              {heading}
            </h1>
          </Reveal>
          <Reveal width="full-width">
            <p
              className={"text-sm md:text-xl font-medium text-white"}
            >
              {description}
            </p>
          </Reveal>
          {slug && (
            <Link href={`/portfolio/${slug}`}>
              <button>View More</button>
            </Link>
          )}
        </div>
        <div className="w-full mt-4 md:w-1/2 relative">
          <Reveal width="full-width">
            <Image
              src={One}
              className="relative rounded-xl h-[100%]"
              alt="Section Image"
            />
          </Reveal>
        </div>
      </div>
      {/* <div className=''></div> */}
    </div>
  );
};

export default SectionComponent;
