"use client"

import Link from "next/link";
import NavLink from "@/components/NavLink";
import { useEffect, useState } from "react";
import { useTickSound } from "@/hooks/useTickSound";

const Navbar = () => {
    const { playTick } = useTickSound('/sound/tick.wav');
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`
                fixed top-0 left-0 right-0
                px-16 py-8
                flex justify-between items-center
                z-[100]
                border-b border-white/5
                backdrop-blur-2xl
                transition-all duration-300
                ${scrolled ? "bg-black/90" : "bg-black/60"}
            `}
        >
            <Link
                href="/"
                className="
                    font-playfair text-[1.4rem] font-black
                    tracking-[0.05em]
                    text-white no-underline
                "
            >
                <span onClick={playTick}>MP</span>
            </Link>

            <ul className="hidden md:flex gap-12 list-none" onClick={playTick}>
                <li><NavLink href="#about">About</NavLink></li>
                <li><NavLink href="#skills">Skills</NavLink></li>
                <li><NavLink href="#projects">Projects</NavLink></li>
                <li><NavLink href="#experience">Experience</NavLink></li>
                <li><NavLink href="#contact">Contact</NavLink></li>
            </ul>

            <div className="flex items-center gap-2.5 text-[0.7rem] tracking-[0.2em] text-silver">
                <div className="w-1.5 h-1.5 bg-[#4ade80] rounded-full animate-pulse-custom"></div>
                Available for work
            </div>
        </nav>
    );
};

export default Navbar;
