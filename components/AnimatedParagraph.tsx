"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import HeadingComponent from "./HeadingComponent";

const AnimatedParagraph = ({ paragraph }: { paragraph: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");

  return (
    <div className=" min-h-screen max-w-screen flex flex-col items-center justify-center gap-4">
      <HeadingComponent heading="Why Us?" variant="secondary" />
      <div className="max-w-screen px-2 sm:px-8 lg:px-12 md:max-w-7xl mx-auto">
        <motion.p
          ref={ref}
          className="flex flex-wrap items-center justify-center text-lg sm:text-2xl xl:text-3xl font-medium px-4 md:px-0 leading-relaxed text-center"
        >
          {words.map((word, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={index}
                word={word}
                range={[start, end]}
                progress={scrollYProgress}
              />
            );
          })}
        </motion.p>
      </div>
    </div>
  );
};

export default AnimatedParagraph;

const Word = ({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: any;
}) => {
  const wordOpacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-1 mt-2 sm:mr-2 sm:mt-3 relative">
      <span className="absolute text-white opacity-[0.1]">{word}</span>
      <motion.span style={{ opacity: wordOpacity }} className="text-white">
        {word}
      </motion.span>
    </span>
  );
};
