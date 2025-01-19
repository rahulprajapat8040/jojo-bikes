"use client";
import { motion, LazyMotion, domAnimation, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

const HeroSection = ({ data }) => {

  const ref = useRef(null);
  const inView = useInView(ref)

  return (
    <>
      <LazyMotion features={domAnimation}>
      <section className="flex justify-center ">
        <div className="flex flex-col md:flex-row px-2 my-4 md:mt-24 py-20 relative items-center md:items-start justify-between w-full max-w-6xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ delay: 0.2 }}
           className="max-w-xl mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold text-primaryColor">
              {data.heading1}
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-7xl mt-4 font-bold text-secondoryColor">
              {data.heading2}
            </h1>
            <p className="text-lg mt-4 text-paraGraph">
              {data.paragraph}
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ delay: 0.2 }}
           >
            <Image
              src={"/circle-line-01.png"}
              width={200}
              height={200}
              alt="circle-line"
              className="absolute hidden md:block -z-10 top-0 -right-2 Rotate"
            />
            <Image
              src={"/bg-hero-02-800x960.jpg"}
              width={500}
              height={500}
              alt="jojo-bike"
              className="rounded-lg max-w-full md:max-w-sm lg:max-w-md"
            />
          </motion.div>
        </div>
      </section>
      </LazyMotion>
    </>
  );
};

export default HeroSection;
