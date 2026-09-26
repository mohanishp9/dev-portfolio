"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CrosshairCursor() {
    const [isHovering, setIsHovering] = useState(false);

    const rawX = useMotionValue(-100);
    const rawY = useMotionValue(-100);

    const springConfig = { stiffness: 450, damping: 28, mass: 0.1 };
    const crosshairX = useSpring(rawX, springConfig);
    const crosshairY = useSpring(rawY, springConfig);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            rawX.set(e.clientX);
            rawY.set(e.clientY);
        };
        
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement | null;
            if (!target) return;
            const isInteractive = Boolean(target.closest("a, button, [role='button'], input, select, .cursor-pointer"));
            setIsHovering((prev) => (prev !== isInteractive ? isInteractive : prev));
        };

        window.addEventListener("mousemove", updateMousePosition, { passive: true });
        window.addEventListener("mouseover", handleMouseOver, { passive: true });
        
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [rawX, rawY]);

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            style={{ 
                x: crosshairX, 
                y: crosshairY,
                willChange: "transform",
            }}
        >
            {/* The literal crosshair lines */}
            <motion.div 
                className="absolute bg-white"
                initial={false}
                animate={{
                    width: isHovering ? 40 : 20,
                    height: 1,
                    x: isHovering ? -20 : -10,
                    y: 0,
                    backgroundColor: isHovering ? "#ccff00" : "#ffffff",
                    rotate: isHovering ? 90 : 0
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            <motion.div 
                className="absolute bg-white"
                initial={false}
                animate={{
                    width: 1,
                    height: isHovering ? 40 : 20,
                    x: 0,
                    y: isHovering ? -20 : -10,
                    backgroundColor: isHovering ? "#ccff00" : "#ffffff",
                    rotate: isHovering ? 90 : 0
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            
            {/* Center dot */}
            <motion.div
                className="absolute bg-white rounded-full"
                initial={false}
                animate={{
                    width: isHovering ? 0 : 4,
                    height: isHovering ? 0 : 4,
                    x: -2,
                    y: -2,
                    opacity: isHovering ? 0 : 1
                }}
            />
        </motion.div>
    );
}
