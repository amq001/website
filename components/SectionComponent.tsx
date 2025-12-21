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
    <div className={` ${index % 2 === 0 ? "bg-black" : "bg-white"}`}>
      <Container
        className={`flex h-screen gap-4 items-center justify-between ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="flex flex-col gap-2 items-center w-1/2 px-4">
          <Reveal width="full-width">
            <h1
              className={`text-3xl font-semibold ${
                index % 2 === 0 ? "text-white" : "text-black"
              }`}
            >
              {heading}
            </h1>
          </Reveal>
          <Reveal width="full-width">
            <p
              className={`text-xl font-medium ${
                index % 2 === 0 ? "text-white" : "text-black"
              }`}
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
        <div className=" w-1/2">
          <Reveal width="full-width">
            <Image
              src={One}
              className="rounded-xl h-[calc(100vh-100px)]"
              alt="Section Image"
            />
          </Reveal>
        </div>
      </Container>
      {/* <div className=''></div> */}
    </div>
  );
};

export default SectionComponent;
