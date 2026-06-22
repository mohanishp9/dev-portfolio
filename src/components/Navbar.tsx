"use client"

import Link from "next/link";
import NavLink from "@/components/NavLink";
import { useEffect, useState } from "react";

const navItems = [
    { href: "#about", label: "About", id: "about" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#contact", label: "Contact", id: "contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>("about");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter((section): section is HTMLElement => Boolean(section));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`
                fixed top-4 left-1/2 z-[120] w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 border transition-all duration-300
                ${scrolled
                    ? "border-white/20 bg-zinc-950/85 backdrop-blur-md shadow-xl"
                    : "border-white/5 bg-zinc-950/40 backdrop-blur-sm"}
            `}
        >
            <div className="flex h-14 items-center justify-between px-6 lg:px-8">
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2 no-underline group"
                    aria-label="mohanish — home"
                >
                    <span className="w-2 h-2 bg-accent group-hover:scale-150 transition-transform"></span>
                    <span className="font-jetbrains text-xs tracking-widest text-slate-50 uppercase">
                        M.Pingale
                    </span>
                </Link>

                <ul className="hidden list-none items-center gap-8 lg:flex">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <NavLink href={item.href} isActive={activeSection === item.id}>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="hidden items-center gap-2 sm:flex">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-none animate-pulse" />
                    <span className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-400">
                        Available
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
