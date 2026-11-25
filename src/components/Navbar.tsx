"use client";

import Link from "next/link";
import NavLink from "@/components/NavLink";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useEffect, useState } from "react";

const navItems = [
    { href: "#about", label: "Page I: Dispatches", id: "about" },
    { href: "#skills", label: "Page II: Spec Sheet", id: "skills" },
    { href: "#projects", label: "Page III: Exclusives", id: "projects" },
    { href: "#experience", label: "Page IV: Archives", id: "experience" },
    { href: "#contact", label: "Page V: Telegraph", id: "contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>("about");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
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
        <header className="sticky top-0 z-[120] w-full bg-[var(--news-bg)] border-b border-[var(--news-rule-strong)] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300">
            {/* Top Micro-Folio Bar */}
            <div className="hidden md:flex items-center justify-between px-6 py-1 border-b border-[var(--news-rule)] font-telegraph text-[0.65rem] text-[var(--news-muted)] uppercase tracking-wider">
                <span>The Weather: 24°C • Fair &amp; Mild in Nashik</span>
                <span className="font-bold text-[var(--news-ink)]">The Daily Gazette of Web Engineering</span>
                <span>Vol. XXVI • No. 1,950 • Price: Two Pence</span>
            </div>

            {/* Main Folio Navigation Bar */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-between gap-4">
                {/* Brand Nameplate Mini */}
                <Link
                    href="/"
                    className="flex items-center gap-2 text-decoration-none group shrink-0"
                    aria-label="The Pingale Chronicle Home"
                >
                    <span className="font-headline font-black text-xl sm:text-2xl tracking-tight text-[var(--news-ink)] uppercase">
                        The Pingale Chronicle
                    </span>
                    <span className="hidden lg:inline-block font-editorial italic text-xs text-[var(--news-muted)]">
                        — Est. 2024
                    </span>
                </Link>

                {/* Folio Section Index */}
                <nav className="hidden xl:flex items-center gap-6">
                    {navItems.map((item) => (
                        <NavLink key={item.id} href={item.href} isActive={activeSection === item.id}>
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Right Actions: Edition Toggle & Status Stamp */}
                <div className="flex items-center gap-3 shrink-0">
                    <ThemeSwitcher />

                    <div className="hidden sm:inline-flex items-center gap-1.5 border border-[var(--news-accent)] px-2.5 py-1 text-[var(--news-accent)] font-telegraph text-[0.65rem] uppercase font-bold tracking-widest bg-[var(--news-accent)]/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--news-accent)] animate-pulse" />
                        <span>Available for Hire</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
