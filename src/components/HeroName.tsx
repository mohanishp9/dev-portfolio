"use client";
import { useEffect, useRef, useState } from "react";
import DecryptedText from "./DecryptedText";

export default function HeroName() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let frameId: number;
        
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            
            // Using requestAnimationFrame for buttery smooth clipping
            cancelAnimationFrame(frameId);
            frameId = requestAnimationFrame(() => {
                setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            });
        };
        
        const container = containerRef.current;
        if (container) {
            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("mouseenter", () => setIsHovering(true));
            container.addEventListener("mouseleave", () => setIsHovering(false));
        }
        return () => {
            if (container) {
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("mouseenter", () => setIsHovering(true));
                container.removeEventListener("mouseleave", () => setIsHovering(false));
            }
            cancelAnimationFrame(frameId);
        };
    }, []);

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

            {/* LAYER 2: The 3D Offset Shadow (Static Orange Outline) */}
            <h1 className="absolute top-0 left-0 font-inter font-black uppercase leading-[0.82] tracking-[-0.03em] flex flex-col text-transparent stroke-text-accent translate-x-[6px] translate-y-[6px] opacity-40 -z-10 pointer-events-none">
                <DecryptedText text="Mohanish" />
                <DecryptedText text="Pingale" />
            </h1>

            {/* LAYER 3: The X-Ray Barcode Scanner (Revealed by mouse cursor) */}
            <h1 
                className="absolute top-0 left-0 font-inter font-black uppercase leading-[0.82] tracking-[-0.03em] flex flex-col text-transparent barcode-fill pointer-events-none z-10"
                style={{
                    clipPath: isHovering 
                        ? `circle(180px at ${mousePos.x}px ${mousePos.y}px)` 
                        : `circle(0px at 50% 50%)`,
                    transition: isHovering ? "clip-path 0.1s ease-out" : "clip-path 0.3s ease-out"
                }}
            >
                <span>Mohanish</span>
                <span>Pingale</span>
            </h1>

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
