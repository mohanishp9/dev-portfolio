"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CrosshairCursor() {
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);
        
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    const springConfig = { stiffness: 400, damping: 25 };
    const crosshairX = useSpring(mousePos.x, springConfig);
    const crosshairY = useSpring(mousePos.y, springConfig);

    useEffect(() => {
        crosshairX.set(mousePos.x);
        crosshairY.set(mousePos.y);
    }, [mousePos, crosshairX, crosshairY]);

    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
            style={{ x: crosshairX, y: crosshairY }}
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
