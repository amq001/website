"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import HeadingComponent from "./HeadingComponent";

const AnimatedParagraph = ({paragraph}: {paragraph: string}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });

  const paragrapghText = ``;

  const words = paragraph.split(" ");

  return (
    <div className="h-screen w-full bg-black flex flex-col gap-4 items-center justify-center bg-[linear-gradient(0deg,#000_20%,#F37036_200%)]">
      <HeadingComponent heading="Why Us?" variant="secondary" />
      <motion.p
        ref={ref}
        className="text-3xl font-medium max-w-7xl px-4 md:px-0 leading-relaxed text-center"
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
    <span className="mr-2 mt-3 relative">
      <span className="absolute text-white opacity-[0.1]">{word}</span>
      <motion.span style={{ opacity: wordOpacity }} className="text-white">
        {word}
      </motion.span>
    </span>
  );
};
