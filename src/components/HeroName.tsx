"use client";
import { useEffect, useRef, useState } from "react";
import DecryptedText from "./DecryptedText";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function HeroName() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const reducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let frameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();

            // Using requestAnimationFrame for buttery smooth clipping
            cancelAnimationFrame(frameId);
            frameId = requestAnimationFrame(() => {
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // Position feeds the barcode X-ray clip-path; tilt feeds the shadow plane offset.
                // CSS custom properties = zero React re-renders on mousemove.
                container.style.setProperty("--mx", `${x}px`);
                container.style.setProperty("--my", `${y}px`);

                if (!reducedMotion) {
                    const ox = Math.max(-3, Math.min(3, ((x - rect.width / 2) / (rect.width / 2)) * 3));
                    const oy = Math.max(-3, Math.min(3, ((y - rect.height / 2) / (rect.height / 2)) * 3));
                    container.style.setProperty("--tilt-x", `${ox}px`);
                    container.style.setProperty("--tilt-y", `${oy}px`);
                }
            });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => {
            setIsHovering(false);
            container.style.setProperty("--tilt-x", "0px");
            container.style.setProperty("--tilt-y", "0px");
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);
        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(frameId);
        };
    }, [reducedMotion]);

    return (
        <div 
            ref={containerRef}
            className="relative select-none w-full mb-10 cursor-crosshair"
            style={{ 
                fontSize: "clamp(4rem, 12vw, 10rem)" 
            }}
        >
            {/* LAYER 1: The Base Outline (Hollow White) */}
            <h1 className="font-inter font-black uppercase leading-[0.82] tracking-[-0.03em] flex flex-col text-transparent stroke-text-base">
                <DecryptedText text="Mohanish" />
                <DecryptedText text="Pingale" />
            </h1>

            {/* LAYER 2: The 3D Offset Shadow (Orange Outline, follows the cursor) */}
            <div
                aria-hidden="true"
                className="absolute top-0 left-0 font-inter font-black uppercase leading-[0.82] tracking-[-0.03em] flex flex-col text-transparent stroke-text-accent opacity-40 -z-10 pointer-events-none"
                style={{ transform: "translate(calc(6px + var(--tilt-x, 0px)), calc(6px + var(--tilt-y, 0px)))" }}
            >
                <DecryptedText text="Mohanish" />
                <DecryptedText text="Pingale" />
            </div>

            {/* LAYER 3: The X-Ray Barcode Scanner (Revealed by mouse cursor) */}
            <div 
                aria-hidden="true"
                className="absolute top-0 left-0 font-inter font-black uppercase leading-[0.82] tracking-[-0.03em] flex flex-col text-transparent barcode-fill pointer-events-none z-10"
                style={{
                    clipPath: isHovering
                        ? "circle(180px at var(--mx, 50%) var(--my, 50%))"
                        : "circle(0px at 50% 50%)",
                    transition: isHovering ? "clip-path 0.1s ease-out" : "clip-path 0.3s ease-out"
                }}
            >
                <span>Mohanish</span>
                <span>Pingale</span>
            </div>

            <style jsx>{`
                .stroke-text-base {
                    -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.25);
                }
                .stroke-text-accent {
                    -webkit-text-stroke: 1.5px #ff5500;
                }
                .barcode-fill {
                    background-image: repeating-linear-gradient(
                        -45deg,
                        #ff5500 0px,
                        #ff5500 8px,
                        #09090b 8px,
                        #09090b 16px
                    );
                    background-size: 200% 200%;
                    -webkit-background-clip: text;
                    background-clip: text;
                    animation: barcode-slide 10s linear infinite;
                }
                @keyframes barcode-slide {
                    0% { background-position: 0% 0%; }
                    100% { background-position: 100% 100%; }
                }
            `}</style>
        </div>
    );
}
