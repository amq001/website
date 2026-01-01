"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import One from "../public/images/image1.jpg";
import two from "../public/images/image2.jpg";
import three from "../public/images/image3.jpg";
import four from "../public/images/image4.jpg";
import five from "../public/images/image5.jpg";

const HorizontalScroll = () => {
  const images = [One, two, three, four, five];

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

  // ✅ FORCE numeric output (NO strings)
  const x: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -maxX]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[500vh] [background:radial-gradient(125%_125%_at_50%_90%,#000_40%,#1900d0_100%)] "
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          ref={trackRef}
          className="flex gap-6 px-6 md:px-16"
          style={{ x }}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="shrink-0"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src={img}
                alt={`Image ${index + 1}`}
                className="h-[350px] w-[80vw] md:h-[300px] md:w-[500px] object-cover"
              />
              <p className="text-white mt-2">Image {index + 1}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;

/*
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import One from "../public/images/image1.jpg";
import two from "../public/images/image2.jpg";
import three from "../public/images/image3.jpg";
import four from "../public/images/image4.jpg";
import five from "../public/images/image5.jpg";

const HorizontalScroll = () => {
  const images = [One, two, three, four, five];
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  return (
    <div className="flex flex-col [background:radial-gradient(125%_125%_at_50%_90%,#000_40%,#F37036_100%)] ">
      <div className="bg-black-400 h-[500vh]" ref={targetRef}>
        <div className="h-screen sticky top-0 flex items-center justify-start overflow-hidden">
          <motion.div className="flex gap-[3vw]  px-16" style={{ x }}>
            {images.map((img, index) => (
              <motion.div
                className="shrink-0"
                key={index}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="h-[300px] w-[200px]"
                />
                <p>Image {index + 1}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
*/
