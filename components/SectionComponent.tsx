import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa6";

type Props = {
  title?: string;
  description: string;
  image: string | any;
  colour?: string;
  slug?: string;
  index: number;
};

const SectionComponent = ({
  title,
  description,
  slug,
  image,
  colour = "#fff",
  index = 0,
}: Props) => {
  return (
    <div className={"sticky top-20"}>
      <div
        className={`flex flex-col-reverse min-h-[80vh] max-w-screen rounded-lg px-4 md:px-8 md:max-w-7xl mx-auto gap-4 items-center justify-center md:justify-between ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
        style={{
          background: `linear-gradient(180deg, #000 20%, ${colour} 200%)`,
        }}
      >
        <div className="flex flex-col gap-2 items-center w-full md:w-1/2">
          {title && (
            <Reveal width="full-width">
              <h1
                className={`text-xl md:text-3xl text-center font-semibold text-white`}
              >
                {title}
              </h1>
            </Reveal>
          )}
          <Reveal width="full-width">
            <p
              className={
                "text-sm md:text-xl font-medium text-center text-white"
              }
            >
              {description}
            </p>
          </Reveal>
          {slug && (
            <Reveal>
              <Link href={slug}>
                <Button variant="bordered" className="flex items-center gap-2">
                  Read More
                  <FaArrowRight />
                </Button>
              </Link>
            </Reveal>
          )}
        </div>
        <div className="w-full mt-4 md:w-1/2 relative">
          <Reveal width="full-width">
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src={image}
                className="relative h-full w-full object-cover rounded-xl"
                alt="Section Image"
                fill
              />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default SectionComponent;
