"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// const words = ;

type Props = {
  words?: string[];
  className?: string;
};

export default function TextCycleAnimation({
  words = ["one,Two,Three"],
  className = "",
}: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-3xl font-bold">
      <AnimatePresence mode="wait">
        {/* <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`${className}`}
        >
          {words[index]}
        </motion.span> */}
        {/* SECOND */}
        {/* <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -25, scale: 0.95 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className={className}
        >
          {words[index]}
        </motion.span> */}
        {/* THIRD */}
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
          transition={{
            duration: 0.55,
            ease: [0.25, 0.1, 0.25, 1], // custom bezier
          }}
          className={className}
        >
          {words[index]}
        </motion.span>
        {/* FORTH */}
        {/* <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 20,
          }}
          className={className}
        >
          {words[index]}
        </motion.span> */}
      </AnimatePresence>
    </div>
  );
}
