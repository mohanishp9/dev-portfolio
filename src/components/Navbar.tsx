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
                sticky top-6 z-[120] mx-auto w-[calc(100%-2rem)] max-w-5xl transition-all duration-500 rounded-2xl mb-12 liquid-glass
                ${scrolled
                    ? "backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
                    : "shadow-[0_4px_16px_rgba(0,0,0,0.4)]"}
            `}
        >
            <div className="flex h-16 items-center justify-between px-6 lg:px-8">
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2 no-underline group"
                    aria-label="mohanish — home"
                >
                    <span className="w-2 h-2 bg-accent group-hover:scale-150 transition-transform"></span>
                    <span className="font-jetbrains text-sm font-bold tracking-widest text-slate-50 uppercase">
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

                <div className="hidden items-center sm:flex bg-[#ff5500] px-3.5 py-1.5 gap-2 rounded-lg">
                    <span className="w-1.5 h-1.5 bg-black animate-pulse" />
                    <span className="font-jetbrains text-xs font-bold uppercase tracking-widest text-black">
                        Available
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
