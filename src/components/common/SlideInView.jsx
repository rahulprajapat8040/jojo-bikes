"use client";
import { motion } from "motion/react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SlideInView = ({ children, direction = "left", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const xValue = direction === "left" ? -100 : 100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xValue }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : xValue
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInView;
