"use client";

import { ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number; // 0 (fixed) to 1 (normal scroll speed)
  className?: string;
  zIndex?: number;
}

export default function ParallaxLayer({
  children,
  speed = 1,
  className = "",
  zIndex = 1,
}: ParallaxLayerProps) {
  // Use absolute global scroll position
  const { scrollY } = useScroll();

  // Apply a light spring for the inertia feel
  const smoothY = useSpring(scrollY, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  // Normal scrolling moves elements UP by 1px for every 1px scrolled.
  // To make an element move slower (e.g. speed = 0.2), we need to push it DOWN.
  // If we push it down by 0.8px for every 1px scrolled, its net upward movement is 0.2px.
  const yOffset = useTransform(smoothY, (value) => value * (1 - speed));

  return (
    <motion.div
      style={{ y: yOffset, zIndex }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}
