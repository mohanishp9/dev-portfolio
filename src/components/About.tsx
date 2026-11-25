"use client";
import { useEffect, useState, useRef } from "react";
import { DecompileNode } from "./Decompiler";

const principles = [
    {
        numeral: "I",
        label: "Tenet One // Scope of Craft",
        title: "End to End, Not Just One Layer",
        body: "I like touching every part of a feature, from the database schema to the button someone clicks. That's where the most compelling technical problems reside.",
    },
    {
        numeral: "II",
        label: "Tenet Two // Operational Truth",
        title: "Things That Work, Not Merely Look Good",
        body: "A polished UI means nothing if the underlying data is flawed or the API is sluggish. I ensure both sides are solid: the interface and the logic behind it.",
    },
    {
        numeral: "III",
        label: "Tenet Three // Architectural Restraint",
        title: "Simplicity First, Optimize When Needed",
        body: "I avoid speculative dependencies and bloated abstractions. Clean structure, sensible defaults, and code that remains effortless to decipher months later.",
    },
];

export default function About() {
    const [scrollDepth, setScrollDepth] = useState<number>(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const total = rect.height;
            const current = Math.max(0, -rect.top);
            const pct = Math.min(100, Math.round((current / total) * 100));
            setScrollDepth(pct);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const baseWordCount = 120;
    const totalWordCount = baseWordCount + principles.reduce((acc, curr) => acc + curr.body.split(" ").length, 0);

    const decompilerData = {
        editorial_metrics: {
            word_count: totalWordCount,
            estimated_read_time: `${Math.round((totalWordCount / 200) * 60)} seconds`,
            type_scale: "Classic Imperial Broadsheet"
        },
        chronicle_tracker: {
            scroll_depth: `${scrollDepth}%`
        }
    };

    return (
        <DecompileNode name="About_Profile" data={decompilerData}>
            <section ref={sectionRef} id="about" className="border-b border-[var(--news-rule-strong)] px-4 sm:px-8 lg:px-12 py-16">
                {/* Section Folio Header */}
                <div data-reveal className="flex items-center justify-between border-b border-[var(--news-rule-strong)] pb-3 mb-10 font-telegraph text-[0.68rem] uppercase tracking-[0.22em] text-[var(--news-muted)]">
                    <span className="font-bold text-[var(--news-ink)]">
                        PAGE I &bull; EDITORIAL SECTION &bull; DISPATCHES
                    </span>
                    <span className="font-headline italic text-sm text-[var(--news-ink)] normal-case">
                        The Personal Chronicle &amp; Engineering Philosophy
                    </span>
                    <span className="hidden sm:inline">NASHIK BUREAU</span>
                </div>

                <div className="grid lg:grid-cols-12 gap-10">
                    {/* Left Column (4 cols): Sticky Profile Column & Gazette Table */}
                    <div data-reveal="left" className="lg:col-span-4 lg:sticky lg:top-28 self-start">
                        {/* Issue Number Display */}
                        <div className="font-headline font-black text-6xl text-[var(--news-ink)] leading-none mb-2">
                            SECTION I.
                        </div>
                        <h2 className="font-headline uppercase text-2xl sm:text-3xl tracking-tight text-[var(--news-ink)] mb-6 font-bold">
                            About The Engineer
                        </h2>

                        {/* Spec Table */}
                        <div className="border-t-2 border-b-2 border-[var(--news-rule-strong)] py-2 mb-6">
                            <span className="font-telegraph text-[0.6rem] uppercase tracking-[0.25em] text-[var(--news-muted)] block mb-2 font-bold">
                                GAZETTE REGISTER // BIOGRAPHICAL DATA
                            </span>
                            {[
                                { k: "Station of Residence", v: "Nashik, Maharashtra, India" },
                                { k: "Core Practice", v: "Full Stack Web Engineering" },
                                { k: "Current Role", v: "SDE Intern @ Indux Technology" },
                                { k: "Education / Track", v: "B.Tech Computer Engineering" },
                            ].map((row) => (
                                <div key={row.k} className="flex justify-between items-baseline border-b border-[var(--news-rule)] py-2 text-xs font-editorial">
                                    <span className="font-telegraph text-[0.65rem] text-[var(--news-muted)] uppercase tracking-wider">{row.k}</span>
                                    <span className="font-bold text-[var(--news-ink)] text-right">{row.v}</span>
                                </div>
                            ))}
                        </div>

                        {/* Press Note Box */}
                        <div className="border border-[var(--news-rule)] p-4 bg-[var(--news-card)] font-editorial text-xs italic leading-relaxed text-[var(--news-muted)]">
                            &ldquo;Published continuously for prospective collaborators, technical leads, and engineering teams seeking thorough full-stack craftsmanship.&rdquo;
                        </div>
                    </div>

                    {/* Right Column (8 cols): The Editorial Prose & Principles */}
                    <div data-reveal className="lg:col-span-8 lg:border-l lg:border-[var(--news-rule)] lg:pl-10">
                        {/* Headline */}
                        <h3 className="font-headline font-black text-2xl sm:text-3xl text-[var(--news-ink)] uppercase mb-6 leading-tight">
                            &ldquo;I Build Things People Can Actually Use — From Schema to Pixel&rdquo;
                        </h3>

                        {/* 2-Column Newspaper Article Prose */}
                        <div className="grid sm:grid-cols-2 gap-8 font-editorial text-[1.05rem] leading-relaxed text-[var(--news-ink)] mb-12">
                            <div className="justified-text drop-cap">
                                I am a full stack developer based in Nashik, Maharashtra. I entered web development because I possess an enduring fascination with building mechanisms people can genuinely use—not simply observe as static art, but interact with, submit complex forms through, and depend on every day.
                            </div>
                            <div className="justified-text">
                                My daily work centers around React, Next.js, TypeScript, Node.js, Express, and MongoDB. The juncture I relish most is where the frontend and backend converge in perfect synchronization: architecting an API route that grants instant tactile responsiveness to the client, or structuring a database index so the user never observes a stall.
                            </div>
                        </div>

                        {/* Secondary Bio Paragraph */}
                        <div className="p-6 border-y-2 border-[var(--news-rule-strong)] bg-[var(--news-card)] mb-12 font-editorial text-[1.02rem] leading-relaxed text-[var(--news-ink)]">
                            <p className="italic mb-2 font-bold text-[var(--news-accent)]">
                                Special Correspondent Dispatch:
                            </p>
                            <p>
                                When away from the terminal, I invest my time exploring distributed architectures, experimenting with emerging toolchains, and auditing systems for unnecessary overhead. I am actively seeking engineering teams where disciplined implementation and high creative standard are held paramount.
                            </p>
                        </div>

                        {/* The Three Principles Spread */}
                        <div className="mt-8">
                            <div className="border-b border-[var(--news-rule-strong)] pb-2 mb-6 flex items-center justify-between">
                                <h4 className="font-headline font-bold uppercase text-lg tracking-wider text-[var(--news-ink)]">
                                    The Three Engineering Tenets
                                </h4>
                                <span className="font-telegraph text-[0.65rem] uppercase tracking-widest text-[var(--news-muted)]">
                                    CORE PHILOSOPHY
                                </span>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {principles.map((principle) => (
                                    <div
                                        key={principle.numeral}
                                        className="border border-[var(--news-rule)] p-5 bg-[var(--news-card)] flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-baseline justify-between border-b border-[var(--news-rule)] pb-2 mb-3">
                                                <span className="font-headline font-black text-2xl text-[var(--news-accent)]">
                                                    {principle.numeral}.
                                                </span>
                                                <span className="font-telegraph text-[0.58rem] uppercase tracking-wider text-[var(--news-muted)]">
                                                    {principle.label}
                                                </span>
                                            </div>
                                            <h5 className="font-headline font-bold text-base text-[var(--news-ink)] mb-3 leading-snug">
                                                {principle.title}
                                            </h5>
                                            <p className="font-editorial text-xs leading-relaxed text-[var(--news-muted)]">
                                                {principle.body}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </DecompileNode>
    );
}
