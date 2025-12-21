import Reveal from "./Reveal";

const HeroSection = () => {
  return (
    // <section className="min-h-screen w-full flex items-center justify-center bg-animated-gradient animate-gradient-shift">
    <section className="min-h-screen w-full flex items-center justify-center">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#F37036_100%)]"></div>
      <div className=" flex px-4 flex-col text-center gap-6 max-w-4xl">
        <Reveal>
          <h1 className="text-3xl md:text-5xl font-semibold">
            Building Scalable MVPs and AI Solutions That Accelerate Your Vision
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-xl md:text-2xl font-normal">
            From concept to launch, we provide transparent, end-to-end
            development designed to deliver measurable results.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;
