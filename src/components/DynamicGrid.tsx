"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionTemplate } from "framer-motion";

export default function DynamicGrid() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Spring for smooth trailing effect
    const springX = useSpring(mousePos.x, { stiffness: 100, damping: 30 });
    const springY = useSpring(mousePos.y, { stiffness: 100, damping: 30 });

    useEffect(() => {
        springX.set(mousePos.x);
        springY.set(mousePos.y);
    }, [mousePos, springX, springY]);

    const maskImage = useMotionTemplate`radial-gradient(circle 300px at ${springX}px ${springY}px, black 0%, transparent 100%)`;

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#09090b]">
            {/* Base very dim grid */}
            <div 
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
                    `,
                    backgroundSize: "4rem 4rem",
                    backgroundPosition: "center center",
                }}
            />
            
            {/* Highlighted grid that follows mouse */}
            <motion.div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(204, 255, 0, 0.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(204, 255, 0, 0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: "4rem 4rem",
                    backgroundPosition: "center center",
                    WebkitMaskImage: maskImage,
                }}
            />
        </div>
    );
}
