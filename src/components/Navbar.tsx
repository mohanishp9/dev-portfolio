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
                fixed left-1/2 top-4 z-[120] w-[min(calc(100%-1.5rem),1200px)] -translate-x-1/2
                rounded-full border backdrop-blur-xl
                transition-all duration-300
                ${scrolled
                    ? "border-[var(--line-strong)] bg-[rgba(16,16,18,0.92)] shadow-[0_24px_50px_rgba(0,0,0,0.22)]"
                    : "border-[var(--line)] bg-[rgba(16,16,18,0.68)]"}
            `}
        >
            <div className="flex min-h-[var(--nav-height)] items-center justify-between gap-6 px-5 sm:px-7">
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2 no-underline"
                    aria-label="mohanish — home"
                >
                    <span className="font-space-mono text-[0.92rem] tracking-[0.02em] text-[var(--paper)]">
                        mohanish<span className="mx-[0.55rem] text-[var(--metal)]">/</span>dev
                    </span>
                </Link>

                <ul className="hidden list-none items-center gap-7 lg:flex">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <NavLink href={item.href} isActive={activeSection === item.id}>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="hidden items-center gap-3 rounded-full border border-[var(--line)] bg-white/[0.02] px-4 py-2 text-[0.62rem] uppercase tracking-[0.22em] text-[var(--mist)] sm:flex">
                    <span className="status-dot" />
                    Available for work
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
