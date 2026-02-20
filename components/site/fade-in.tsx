"use client";

import { motion } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  distance?: number;
  blur?: number;
  scaleFrom?: number;
  duration?: number;
};

export function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  distance = 28,
  blur = 10,
  scaleFrom = 0.97,
  duration = 0.78,
}: FadeInProps) {
  const initial =
    direction === "left"
      ? { opacity: 0, x: -distance, filter: `blur(${blur}px)`, scale: scaleFrom }
      : direction === "right"
        ? { opacity: 0, x: distance, filter: `blur(${blur}px)`, scale: scaleFrom }
        : { opacity: 0, y: distance, filter: `blur(${blur}px)`, scale: scaleFrom };

  const animate =
    direction === "left" || direction === "right"
      ? { opacity: 1, x: 0, filter: "blur(0px)", scale: 1 }
      : { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
