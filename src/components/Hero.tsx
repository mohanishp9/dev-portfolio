"use client";

import Link from "next/link";
import HeroName from "@/components/HeroName";
import { DecompileNode } from "./Decompiler";

export default function Hero() {
    const decompilerData = {
        broadsheet_metadata: {
            edition: "Morning Final — London & Nashik",
            date_published: "October 13, 2026",
            circulation: "Global Web",
            columns: "Four-Column Broadsheet"
        },
        engineer_record: {
            name: "Mohanish Pingale",
            specialization: "Full Stack Software Engineering",
            location: "Nashik, Maharashtra, India"
        }
    };

    return (
        <DecompileNode name="Hero_FrontPage" data={decompilerData}>
            <section className="relative px-4 sm:px-8 lg:px-12 pt-8 pb-12 border-b border-[var(--news-rule-strong)]">
                {/* 1. Masthead Ear Spaces + Folio Top */}
                <div data-reveal className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 py-2 border-b border-[var(--news-rule)] font-telegraph text-[0.68rem] text-[var(--news-muted)] uppercase tracking-wider">
                    <div className="text-left">
                        <span className="font-bold text-[var(--news-ink)]">NASHIK WEATHER:</span> 24°C FAIR • BAROMETER: 30.12 IN
                    </div>
                    <div className="text-center italic font-editorial text-xs text-[var(--news-ink)] lowercase">
                        &ldquo;first with the software news, reliable in all deployments&rdquo;
                    </div>
                    <div className="text-right flex items-center justify-end gap-3">
                        <span>VOL. XXVI NO. 4</span>
                        <span className="font-bold text-[var(--news-accent)]">★ SPECIAL EDITION ★</span>
                    </div>
                </div>

                {/* 2. The Monumental Nameplate */}
                <div data-reveal className="py-6 sm:py-8">
                    <HeroName />
                </div>

                {/* 3. The Classic Double Oxford Rules Dateline Bar */}
                <div data-reveal="line" className="oxford-rule my-2" />
                <div data-reveal className="flex flex-wrap items-center justify-between gap-3 py-2 text-[0.72rem] font-telegraph uppercase tracking-[0.18em] text-[var(--news-muted)] border-b border-[var(--news-rule)]">
                    <span>NASHIK, MAHARASHTRA, INDIA</span>
                    <span>TUESDAY MORNING EDITION</span>
                    <span>REGISTERED AT THE GENERAL POST OFFICE • PRICE TWO PENCE</span>
                </div>
                <div data-reveal="line" className="oxford-rule-reversed my-2" />

                {/* 4. Front Page Lead Stories Grid */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                    {/* Left Column (8 cols): Main Banner Headline + Lead Article */}
                    <div data-reveal className="lg:col-span-8 flex flex-col justify-between">
                        <div>
                            {/* Kicker / Category Eyebrow */}
                            <div className="flex items-center gap-2 mb-3">
                                <span className="font-telegraph text-[0.65rem] font-bold uppercase tracking-[0.25em] bg-[var(--news-ink)] text-[var(--news-bg)] px-2.5 py-0.5">
                                    LEAD DISPATCH // SPECIAL CORRESPONDENCE
                                </span>
                                <span className="font-telegraph text-[0.65rem] uppercase tracking-widest text-[var(--news-muted)]">
                                    PAGE ONE • TOP STORY
                                </span>
                            </div>

                            {/* Towering Broadsheet Banner Headline */}
                            <h2 className="font-headline font-black text-3xl sm:text-5xl lg:text-[3.6rem] leading-[1.02] tracking-tight text-[var(--news-ink)] uppercase mb-4">
                                Full-Stack Engineer Architects Modern Web Systems
                            </h2>

                            {/* Italic Deck Subhead */}
                            <p className="font-editorial italic text-lg sm:text-xl leading-snug text-[var(--news-muted)] mb-6 border-b border-[var(--news-rule)] pb-4">
                                From Database Schemas to Intuitive Interfaces: How One Developer in Nashik Bridges Frontend Polish with Backend Rigour.
                            </p>

                            {/* Lead Article Body Spread (2 Sub-Columns) */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-editorial text-[1.05rem] leading-relaxed text-[var(--news-ink)]">
                                <div className="justified-text drop-cap">
                                    I write code because I love making things. Seeing an idea go from a blank screen to a working application never gets old. What begins as an architectural sketch evolves into resilient APIs and responsive user interfaces that handle real-world scale with confidence.
                                </div>
                                <div className="justified-text sm:border-l sm:border-[var(--news-rule)] sm:pl-6">
                                    Specializing across the modern TypeScript and JavaScript ecosystem—React, Next.js, Node.js, Express, and MongoDB—every project is treated as an end-to-end craft. No layer is treated as secondary; data consistency and runtime performance receive equal dedication.
                                </div>
                            </div>
                        </div>

                        {/* Front-Page Call To Action Row */}
                        <div className="mt-8 pt-6 border-t border-[var(--news-rule)] flex flex-wrap items-center gap-4">
                            <Link
                                href="#projects"
                                className="font-telegraph text-xs font-bold uppercase tracking-[0.2em] bg-[var(--news-ink)] text-[var(--news-bg)] px-6 py-3.5 hover:bg-[var(--news-accent)] transition-colors inline-flex items-center gap-2"
                            >
                                <span>Inspect Exclusives (Projects)</span>
                                <span>&rarr;</span>
                            </Link>
                            <Link
                                href="#contact"
                                className="font-telegraph text-xs font-bold uppercase tracking-[0.2em] border-2 border-[var(--news-ink)] text-[var(--news-ink)] px-6 py-3 hover:bg-[var(--news-ink)] hover:text-[var(--news-bg)] transition-colors inline-flex items-center gap-2"
                            >
                                <span>Dispatch Cable (Contact)</span>
                                <span>&#9993;</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column (4 cols): Official Gazette Notice / Sidebar Spec */}
                    <div data-reveal="left" className="lg:col-span-4 lg:border-l lg:border-[var(--news-rule)] lg:pl-8 flex flex-col justify-between">
                        {/* Gazette Box Header */}
                        <div className="border border-[var(--news-rule-strong)] p-6 bg-[var(--news-card)]">
                            <div className="text-center border-b border-[var(--news-rule-strong)] pb-3 mb-4">
                                <span className="font-telegraph text-[0.6rem] uppercase tracking-[0.3em] text-[var(--news-muted)] block mb-1">
                                    GOVERNMENT GAZETTE NOTICE // NO. 402
                                </span>
                                <h3 className="font-headline font-bold text-xl uppercase tracking-wider text-[var(--news-ink)]">
                                    Official Register of Vitals
                                </h3>
                            </div>

                            {/* Vitals Table */}
                            <div className="space-y-4 font-editorial">
                                {[
                                    { label: "Subject", value: "Mohanish Pingale" },
                                    { label: "Station of Residence", value: "Nashik, Maharashtra, India" },
                                    { label: "Professional Focus", value: "Full Stack Software Engineering" },
                                    { label: "Current Status", value: "Available for Engagement / Hire" },
                                    { label: "Core Technology Stack", value: "TypeScript, Next.js, Node, React, Mongo" },
                                    { label: "Operational Post", value: "SDE Intern @ Indux Technology" },
                                ].map((item) => (
                                    <div key={item.label} className="border-b border-[var(--news-rule)] pb-2 flex flex-col">
                                        <span className="font-telegraph text-[0.6rem] uppercase tracking-[0.2em] text-[var(--news-muted)]">
                                            {item.label}
                                        </span>
                                        <span className="font-headline font-bold text-sm text-[var(--news-ink)]">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Gazette Notice Footer */}
                            <div className="mt-6 pt-3 border-t border-[var(--news-rule-strong)] text-center">
                                <span className="font-telegraph text-[0.58rem] uppercase tracking-[0.16em] text-[var(--news-muted)] block">
                                    CERTIFIED AS ACCURATE • OCTOBER 2026
                                </span>
                            </div>
                        </div>

                        {/* Pull Quote Box */}
                        <div className="mt-6 p-5 border-l-4 border-[var(--news-accent)] bg-[var(--news-card)] font-editorial italic text-sm text-[var(--news-ink)]">
                            &ldquo;A polished UI means nothing if the underlying data is flawed or the API falters. Quality demands coherence from the schema to the screen.&rdquo;
                        </div>
                    </div>
                </div>
            </section>
        </DecompileNode>
    );
}
