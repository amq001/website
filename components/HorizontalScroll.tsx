"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

type Props = {
  cards?: {
    title: string;
    description: string;
    image?: any;
  }[];
};

const HorizontalScroll = ({ cards }: Props) => {

  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [maxX, setMaxX] = useState<number>(0);

  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: sectionRef,
    });

  useLayoutEffect(() => {
    const calculate = () => {
      if (!trackRef.current) return;

      const totalWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;

      setMaxX(totalWidth - viewportWidth);
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  const x: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -maxX]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] md:h-[610vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          ref={trackRef}
          className="flex gap-6 px-6 md:px-16"
          style={{ x }}
        >
          {cards &&
            cards.map((card, index) => (
              <Reveal key={index}>
                <div
                  key={index}
                  className="h-[60vh] xl:h-[80vh] w-[280px] sm:w-[50vw] xl:w-[500px] px-8 py-8 xl:py-20 xl:px-16 flex items-center justify-center"
                >
                  <div className="hover:scale-102 relative overflow-hidden rounded-sm transition-transform shadow-[0_0_10px_#000,0_0_10px_#fff,0_0_30px_#fff] duration-300 hover:shadow-[0_0_10px_#fff,0_0_20px_#753801,0_0_30px_#753801] p-4 flex flex-col gap-4 items-center justify-center h-full md:w-[500px] bg-black xl:rounded-3xl">
                    <div className="w-full h-full opacity-100 bg-[url('/images/cardBg2.webp')] bg-cover bg-center bg-no-repeat h-full w-full absolute"></div>
                    <div className="flex flex-col gap-2 items-center justify-center">
                      <Reveal>
                        <h2 className="text-white text-xl md:text-3xl font-medium text-center">
                          {card.title}
                        </h2>
                      </Reveal>
                      <Reveal>
                        <p className="text-white text-sm md:text-lg text-center">
                          {card.description}
                        </p>
                      </Reveal>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;