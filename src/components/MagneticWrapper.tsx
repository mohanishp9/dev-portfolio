"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, ReactNode, MouseEvent as ReactMouseEvent } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface MagneticWrapperProps {
    children: ReactNode;
    className?: string;
    strength?: number;
}

export default function MagneticWrapper({ children, className = "", strength = 0.2 }: MagneticWrapperProps) {
    const ref = useRef<HTMLDivElement>(null);
    const rectRef = useRef<DOMRect | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const reducedMotion = usePrefersReducedMotion();

    // Smooth, physical spring physics
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    // Reduced motion: skip the pull physics entirely — plain inline-block wrapper
    if (reducedMotion) {
        return <div className={`inline-block ${className}`}>{children}</div>;
    }

    const handleMouseEnter = () => {
        if (ref.current) {
            rectRef.current = ref.current.getBoundingClientRect();
        }
    };

    const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
        if (!rectRef.current && ref.current) {
            rectRef.current = ref.current.getBoundingClientRect();
        }
        if (!rectRef.current) return;

        const { clientX, clientY } = e;
        const { height, width, left, top } = rectRef.current;
        
        // Calculate distance from center of element
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        
        x.set(middleX * strength);
        y.set(middleY * strength);
    };

    const handleMouseLeave = () => {
        rectRef.current = null;
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.div>
    );
}
