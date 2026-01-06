"use client";

import Image from "next/image";
import Reveal from "./Reveal";

type Props = {
  heading: string;
  description?: string;
  cards?: Array<{
    title: string;
    description: string;
    image?: any;
  }>;
};

export function ProcessSection({ heading, description, cards }: Props) {
  return (
    <div className="xl:min-h-screen flex flex-col xl:gap-12 items-center bg-[linear-gradient(270deg,#000_20%,#1900d0_200%)] xl:bg-none xl:bg-black py-28 ">
      <div className="flex flex-col  gap-8 xl:gap-0 xl:flex-row w-full xl:w-[calc(100vw-32px)] mx-auto px-4 sm:px-8 md:px-20">
        <div className="xl:sticky rounded-sm xl:rounded-none xl:px-20 flex items-center flex-col gap-4 justify-center xl:max-w-[1/2] w-full xl:top-16 xl:h-[80vh] xl:rounded-l-2xl xl:bg-[linear-gradient(90deg,#000_20%,#1900d0_200%)]">
          <Reveal>
            <h3 className="text-3xl md:text-5xl font-medium text-center text-white">
              {heading}
            </h3>
          </Reveal>
          <Reveal>
            <p className="text-white text-center">{description}</p>
          </Reveal>
        </div>
        <div className="flex flex-col gap-8 rounded-sm xl:rounded-none xl:rounded-r-2xl xl:bg-[linear-gradient(270deg,#000_20%,#1900d0_200%)] w-full xl:max-w-[1/2] ">
          {cards &&
            cards.map((card, index) => (
              <Reveal width={"full-width"} key={index}>
                <div
                  key={index}
                  className="w-full xl:h-[80vh] xl:py-20 xl:px-16 flex items-center justify-center"
                >
                  <div className="xl:hover:scale-102 rounded-sm transition-transform duration-300 hover:shadow-[0_0_10px_#fff,0_0_10px_#1900d0,0_0_15px_#1900d0] p-4 flex flex-col gap-4 items-center justify-center h-[calc(100%-50px)] my-2 w-[calc(100%-20px)] bg-[linear-gradient(90deg,#000_20%,#1900d0_200%)] xl:rounded-3xl">
                    {card.image && (
                      <Reveal>
                        <Image
                          src={card.image}
                          alt={card.title}
                          className="w-80 h-42"
                        />
                      </Reveal>
                    )}
                    <div className="flex flex-col gap-2 items-center justify-center">
                      <Reveal>
                        <h2 className="text-white text-3xl font-medium text-center">
                          {card.title}
                        </h2>
                      </Reveal>
                      <Reveal>
                        <p className="text-white text-center">
                          {card.description}
                        </p>
                      </Reveal>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
        </div>
      </div>
    </div>
  );
}
