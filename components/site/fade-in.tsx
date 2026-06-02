"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const resolvedDirection = isMobile && (direction === "left" || direction === "right") ? "up" : direction;
  const resolvedDistance = isMobile && (direction === "left" || direction === "right") ? Math.min(distance, 24) : distance;

  const initial =
    resolvedDirection === "left"
      ? { opacity: 0, x: -resolvedDistance, filter: `blur(${blur}px)`, scale: scaleFrom }
      : resolvedDirection === "right"
        ? { opacity: 0, x: resolvedDistance, filter: `blur(${blur}px)`, scale: scaleFrom }
        : { opacity: 0, y: resolvedDistance, filter: `blur(${blur}px)`, scale: scaleFrom };

  const animate =
    resolvedDirection === "left" || resolvedDirection === "right"
      ? { opacity: 1, x: 0, filter: "blur(0px)", scale: 1 }
      : { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 };

  return (
    <motion.div
      className={cn("max-w-full", className)}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
