import Image from "next/image";
import Reveal from "./Reveal";
import HeadingComponent from "./HeadingComponent";

type Props = {
  heading: string;
  description?: string;
  cards?: Array<{
    title: string;
    description?: string;
    image?: any;
    src?: any;
  }>;
};

export function ProcessSection({ heading, description, cards }: Props) {
  return (
    <div className="xl:min-h-screen mt-32 xl:mt-0 flex flex-col xl:gap-12 items-center bg-[linear-gradient(90deg,#000_20%,#86a6db_200%)] xl:bg-none xl:bg-black py-28 ">
      <div className="flex flex-col  gap-8 xl:gap-0 xl:flex-row w-full xl:w-[calc(100vw-32px)] mx-auto px-4 sm:px-8 md:px-20">
        <div className="xl:sticky rounded-sm xl:rounded-none xl:px-20 flex items-center flex-col gap-4 justify-center xl:max-w-[1/2] w-full xl:top-16 xl:h-[80vh] xl:rounded-l-2xl xl:bg-[linear-gradient(270deg,#000_30%,#86a6db_200%)]">
        <HeadingComponent variant="secondary" textCentered={true} heading={heading} description={description} />
        </div>
        <div className="flex flex-col gap-2 xl:gap-8 rounded-sm xl:rounded-none xl:rounded-r-2xl xl:bg-[linear-gradient(90deg,#000_30%,#86a6db_200%)] w-full xl:max-w-[1/2] ">
          {cards &&
            cards.map((card, index) => (
              <Reveal width={"full-width"} key={index}>
                <div
                  key={index}
                  className="w-full xl:h-[80vh] py-2 px-2 sm:px-4 sm:py-4 xl:py-20 xl:px-16 flex items-center justify-center"
                >
                  <div className="xl:hover:scale-102 rounded-sm xl:rounded-3xl overflow-hidden transition-transform shadow-[0_0_10px_#000,0_0_10px_#fff,0_0_20px_#223e8a] sm:shadow-[0_0_10px_#000,0_0_20px_#fff,0_0_30px_#223e8a] duration-300 hover:shadow-[0_0_10px_#223e8a,0_0_20px_#fff,0_0_50px_#223e8a] p-4 flex flex-col gap-4 items-center justify-center min-h-[380px] h-full my-2 w-[calc(100%-20px)] relative">
                    <div className="opacity-60 bg-cover bg-center bg-no-repeat h-full w-full absolute" style={{backgroundImage:`url(${card?.src})`}}>
                    </div>
                    {/* {card.image && (
                      <Reveal>
                        <Image
                          src={card.image}
                          alt={card.title}
                          className="w-60 h-32 md:w-80 md:h-42"
                        />
                      </Reveal>
                    )} */}
                    <div className="flex flex-col gap-2 items-center justify-center">
                      <Reveal>
                        <h2 className="text-white text-xl md:text-3xl font-medium text-center">
                          {card.title}
                        </h2>
                      </Reveal>
                      <Reveal>
                        <p className="text-white text-md md:text-xl text-center">
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
