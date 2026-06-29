"use client";

import Link from "next/link";
import HeroName from "@/components/HeroName";
import { useEffect, useState, useRef } from "react";
import { DecompileNode } from "./Decompiler";

const Hero = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [fontSizePx, setFontSizePx] = useState<string>("0px");
    const [cursorDist, setCursorDist] = useState<number>(0);

    useEffect(() => {
        const updateSize = () => {
            if (titleRef.current) {
                const style = window.getComputedStyle(titleRef.current);
                setFontSizePx(style.fontSize);
            }
        };
        
        // Initial calc and resize listener
        updateSize();
        window.addEventListener("resize", updateSize);

        // Pythagorean cursor distance tracker
        const handleMouseMove = (e: MouseEvent) => {
            if (titleRef.current) {
                const rect = titleRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const dist = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
                setCursorDist(Math.round(dist));
            }
        };
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", updateSize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const decompilerData = {
        viewport_math: {
            computed_clamp_size: fontSizePx,
            cursor_distance_to_core: `${cursorDist}px`
        },
        typography: {
            font_family: "Inter",
            weight: "Black (900)"
        }
    };

    return (
        <DecompileNode name="Hero_Masthead" data={decompilerData}>
        <section className="relative min-h-screen flex flex-col border-b border-white/10 px-6 sm:px-12 lg:px-24 pt-28 pb-16">

            {/* Cover masthead line */}
            <div data-reveal="line" className="h-[1px] w-full bg-white/10 mb-10" />

            {/* Vol / Issue row */}
            <div data-reveal className="flex items-center justify-between mb-16">
                <span className="font-jetbrains text-[0.65rem] uppercase tracking-[0.3em] text-slate-500">
                    Vol.01 &nbsp;/&nbsp; Issue.01 &nbsp;/&nbsp; 2026
                </span>
                <span className="font-jetbrains text-[0.65rem] uppercase tracking-[0.3em] text-slate-500">
                    Portfolio &mdash; Developer Edition
                </span>
            </div>

            {/* Main headline + right column */}
            <div className="flex-1 grid lg:grid-cols-[1fr_auto] gap-16 items-end">

                <div>
                    {/* Kicker */}
                    <div data-reveal className="flex items-center gap-3 mb-8">
                        <span className="font-jetbrains text-[0.65rem] font-bold uppercase tracking-[0.2em] bg-[#ccff00] text-black px-3 py-1">
                            System Online
                        </span>
                        <span className="font-jetbrains text-[0.65rem] uppercase tracking-[0.3em] text-slate-500">
                            V 1.0.0
                        </span>
                    </div>

                    <div ref={titleRef} data-reveal>
                        <HeroName />
                    </div>

                    {/* Divider */}
                    <div data-reveal="line" className="h-[1px] w-full bg-white/10 mb-10" />

                    {/* Sub-headline + CTA */}
                    <div data-reveal className="grid sm:grid-cols-2 gap-8 items-end">
                        <p className="font-inter text-lg leading-relaxed text-slate-400 max-w-md">
                            I write code because I love making things. Seeing an idea go from a blank screen to a working application never gets old.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#projects"
                                className="font-jetbrains text-xs uppercase tracking-widest text-slate-300 border border-white/20 px-6 py-3.5 hover:bg-[#ff5500] hover:text-[#000000] hover:border-[#ff5500] transition-colors"
                            >
                                View Work &#8594;
                            </Link>
                            <Link
                                href="#contact"
                                className="font-jetbrains text-xs uppercase tracking-widest bg-accent text-black font-bold px-6 py-3.5 hover:bg-[#ff7733] transition-colors"
                            >
                                Initialize Contact
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right stats column — magazine sidebar */}
                <div data-reveal="left" className="hidden lg:flex flex-col gap-0 border-l border-white/10 pl-10 min-w-[200px]">
                    {[
                        { label: "Location", value: "Nashik, India" },
                        { label: "Role", value: "Full Stack Eng." },
                        { label: "Status", value: "Available" },
                        { label: "Stack", value: "TS / Next / MERN / Node" },
                    ].map((stat, i) => (
                        <div
                            key={stat.label}
                            data-stagger={String(i + 1)}
                            className="border-b border-white/10 py-5"
                        >
                            <span className="block font-jetbrains text-[0.6rem] uppercase tracking-[0.28em] text-slate-600 mb-1">
                                {stat.label}
                            </span>
                            <span className="block font-inter font-bold text-sm text-slate-200">
                                {stat.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom cover rule */}
            <div data-reveal="line" className="h-[1px] w-full bg-white/10 mt-16" />
        </section>
        </DecompileNode>
    );
};

export default Hero;
