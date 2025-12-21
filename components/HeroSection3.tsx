import Reveal from "./Reveal";
import TextCycleAnimation from "./TextCycleAnimation";

type Prop = {
  heading: string;
  description: string;
  textCycle?: string[];
  type?: "hero" | "standard";
};
// bg-black [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#F37036_100%)

const HeroSection3 = ({
  heading,
  description,
  textCycle,
  type = "standard",
}: Prop) => {
  return (
    <div
      className="min-h-screen w-full flex flex-col gap-4 items-center
    bg-[url('/images/heroImage.png')] bg-cover bg-center
    ] justify-center"
    >
      <div
        className={`flex flex-col ${
          type === "hero" && "h-[120px] md:h-[150px]"
        } leading-relaxed gap-2 items-center px-4 text-center`}
      >
        <Reveal>
          <h1 className="text-3xl md:text-7xl font-medium text-white">
            {heading}
          </h1>
          {textCycle && (
            <TextCycleAnimation
              words={textCycle}
              className="text-3xl md:text-7xl text-[#F37036]"
            />
          )}
        </Reveal>
      </div>
      <Reveal>
        <p className="text-md text-white md:text-xl font-medium px-4 max-w-2xl text-center">
          {description}
        </p>
      </Reveal>
    </div>
  );
};

export default HeroSection3;
