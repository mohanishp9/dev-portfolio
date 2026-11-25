"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DecompileNode } from "./Decompiler";

const projects = [
    {
        number: "EXHIBIT I",
        title: "Petty Revenge Note",
        headline: "Journaling Platform Introduces Threaded Reactions & Runtime Validation",
        summary:
            "A comprehensive journaling and social application allowing users to compose notes, publish dispatches, and engage through threaded comments and reaction metrics. Engineered with JWT authentication, Redux Toolkit state coordination, and paginated feed delivery.",
        impact: "Architected complex asynchronous state with Redux Toolkit and enforced runtime payload safety via Zod validation schemas.",
        stack: ["Next.js", "React", "Redux Toolkit", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Zod"],
        github: "https://github.com/mohanishp9/petty-revenge-note",
        live: "https://petty-revenge-note.vercel.app/",
        year: "2026",
        featured: true,
    },
    {
        number: "EXHIBIT II",
        title: "Cypher Sight",
        headline: "Cryptocurrency Ledger Ingests Live CoinGecko Market Quotes",
        summary:
            "A unified cryptocurrency asset tracker connecting to live CoinGecko streaming endpoints, rendering holdings, profit/loss indices, and transaction histories in an editorial dashboard.",
        impact: "Engineered rate-limit caching mechanisms against third-party financial APIs to preserve responsiveness under quota ceilings.",
        stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "CoinGecko API"],
        github: "https://github.com/mohanishp9/crypto_portfolio_tracker",
        live: "https://cypher-sight.vercel.app/",
        year: "2026",
        featured: false,
    },
    {
        number: "EXHIBIT III",
        title: "QKart Commercial Suite",
        headline: "Digital Commerce Platform Completes Full Checkout & Order Cycle",
        summary:
            "An e-commerce suite executing the entire commercial lifecycle: catalog indexing, dynamic cart calculation, user authentication, checkout workflows, and order record persistence.",
        impact: "Built resilient cart synchronization logic ensuring mid-session inventory and pricing changes reconcile without corruption.",
        stack: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Automated Testing"],
        github: "https://github.com/mohanishp9/QKart_Backend",
        live: "https://qkart-mohanish-pingales-projects.vercel.app/",
        year: "2025",
        featured: false,
    },
    {
        number: "EXHIBIT IV",
        title: "MP News Feed",
        headline: "Syndicated Telegraph Reader Renders Dynamic Broadsheet RSS",
        summary:
            "A curated broadsheet news reader parsing live syndicated RSS feeds into an ergonomic multi-column card layout inspired by classic periodicals and Flipboard.",
        impact: "Refined modular component architecture, establishing clean boundaries between feed ingestors and layout renderers.",
        stack: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "RSS Feeds"],
        github: "https://github.com/mohanishp9/News-Board",
        live: "https://mboard-mohanish-pingales-projects.vercel.app/",
        year: "2025",
        featured: false,
    },
    {
        number: "EXHIBIT V",
        title: "MTripDynamic",
        headline: "Travel Logistics Engine Automates Reservation Scheduling",
        summary:
            "A dynamic expedition booking application providing interactive destination queries, real-time availability checking, tariff computation, and reservation confirmation.",
        impact: "Pioneered early full-stack integration, synchronizing stateful frontend view controllers with custom backend routing logic.",
        stack: ["JavaScript", "Express", "LowDB", "REST APIs"],
        github: "https://github.com/mohanishp9/MTripDynamic",
        live: "https://mtripdynamic-mohanish-pingales-projects.vercel.app/",
        year: "2025",
        featured: false,
    },
];

const featuredProject = projects[0];
const secondaryProjects = projects.slice(1);

export default function Projects() {
    const [renderTime, setRenderTime] = useState<number>(0);

    useEffect(() => {
        setRenderTime(Math.round(performance.now()));
    }, []);

    const decompilerData = {
        exhibit_metrics: {
            total_projects: projects.length,
            featured_headline: featuredProject.title,
            catalog_year_span: "2025 – 2026",
            mount_ms_since_navigation: renderTime,
        }
    };

    return (
        <DecompileNode name="Projects_Showcase" data={decompilerData}>
            <section id="projects" className="border-b border-[var(--news-rule-strong)] px-4 sm:px-8 lg:px-12 py-16">
                {/* Section Folio Header */}
                <div data-reveal className="flex items-center justify-between border-b border-[var(--news-rule-strong)] pb-3 mb-10 font-telegraph text-[0.68rem] uppercase tracking-[0.22em] text-[var(--news-muted)]">
                    <span className="font-bold text-[var(--news-ink)]">
                        PAGE III &bull; SPECIAL FEATURE EXHIBITS &bull; SELECTED WORKS
                    </span>
                    <span className="font-headline italic text-sm text-[var(--news-ink)] normal-case">
                        Field Inquiries &amp; Deployed Software Artifacts
                    </span>
                    <span className="hidden sm:inline">FIVE MONOGRAPHS</span>
                </div>

                {/* 1. Lead Featured Project Spread (Front Page Exclusive) */}
                <div data-reveal className="border-2 border-[var(--news-rule-strong)] bg-[var(--news-card)] p-6 sm:p-10 mb-12">
                    <div className="flex flex-wrap items-center justify-between border-b border-[var(--news-rule)] pb-3 mb-6 gap-2">
                        <div className="flex items-center gap-3">
                            <span className="bg-[var(--news-accent)] text-white font-telegraph text-[0.65rem] font-bold px-2.5 py-0.5 uppercase tracking-widest">
                                SPECIAL FEATURE EXCLUSIVE
                            </span>
                            <span className="font-telegraph text-xs font-bold text-[var(--news-ink)] uppercase tracking-wider">
                                {featuredProject.number}
                            </span>
                        </div>
                        <span className="font-telegraph text-xs text-[var(--news-muted)]">
                            ANNO DOMINI {featuredProject.year}
                        </span>
                    </div>

                    <h3 className="font-headline font-black text-2xl sm:text-4xl text-[var(--news-ink)] uppercase mb-3 leading-tight">
                        {featuredProject.headline}
                    </h3>

                    <h4 className="font-editorial italic text-lg sm:text-xl text-[var(--news-muted)] mb-6">
                        System Monograph: {featuredProject.title}
                    </h4>

                    {/* 2-Column Story Spread */}
                    <div className="grid md:grid-cols-2 gap-8 font-editorial text-[1.05rem] leading-relaxed text-[var(--news-ink)] mb-8">
                        <div className="justified-text drop-cap">
                            {featuredProject.summary}
                        </div>
                        <div className="justified-text md:border-l md:border-[var(--news-rule)] md:pl-8 flex flex-col justify-between">
                            <div>
                                <span className="font-telegraph text-[0.65rem] font-bold text-[var(--news-accent)] uppercase tracking-widest block mb-2">
                                    ARCHITECTURAL RETROSPECTIVE:
                                </span>
                                <p className="italic text-sm text-[var(--news-muted)]">
                                    {featuredProject.impact}
                                </p>
                            </div>

                            {/* Stack Badges */}
                            <div className="mt-6 pt-4 border-t border-[var(--news-rule)]">
                                <span className="font-telegraph text-[0.6rem] text-[var(--news-muted)] uppercase tracking-wider block mb-2">
                                    COMPILED WITH MACHINERY:
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                    {featuredProject.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="border border-[var(--news-rule)] bg-[var(--news-bg)] px-2.5 py-0.5 font-telegraph text-[0.68rem] text-[var(--news-ink)] uppercase"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Links Bar */}
                    <div className="pt-6 border-t-2 border-[var(--news-rule-strong)] flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={featuredProject.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-telegraph text-xs font-bold uppercase tracking-[0.18em] bg-[var(--news-ink)] text-[var(--news-bg)] px-5 py-2.5 hover:bg-[var(--news-accent)] transition-colors inline-flex items-center gap-2"
                            >
                                <span>Inspect Live Exhibit</span>
                                <span>&#x2197;</span>
                            </a>
                            <a
                                href={featuredProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-telegraph text-xs font-bold uppercase tracking-[0.18em] border border-[var(--news-ink)] text-[var(--news-ink)] px-5 py-2.5 hover:bg-[var(--news-ink)] hover:text-[var(--news-bg)] transition-colors inline-flex items-center gap-2"
                            >
                                <span>Review Repository</span>
                                <span>&rarr;</span>
                            </a>
                        </div>
                        <span className="font-editorial italic text-xs text-[var(--news-muted)]">
                            Continued in Production Deployment on Vercel
                        </span>
                    </div>
                </div>

                {/* 2. Secondary Feature Articles (4-Story Broadsheet Grid) */}
                <div className="border-t border-[var(--news-rule-strong)] pt-8">
                    <div className="flex items-center justify-between mb-8">
                        <h4 className="font-headline font-bold uppercase text-xl text-[var(--news-ink)] tracking-wider">
                            Further Field Inquiries &amp; Specialized Applications
                        </h4>
                        <span className="font-telegraph text-[0.65rem] uppercase tracking-widest text-[var(--news-muted)]">
                            PAGE III &bull; CONTINUED
                        </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {secondaryProjects.map((p) => (
                            <article
                                key={p.title}
                                className="border border-[var(--news-rule-strong)] bg-[var(--news-card)] p-6 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between border-b border-[var(--news-rule)] pb-2 mb-4">
                                        <span className="font-telegraph text-[0.62rem] font-bold text-[var(--news-accent)] uppercase tracking-wider">
                                            {p.number} &bull; ANNO {p.year}
                                        </span>
                                        <span className="font-headline italic text-xs text-[var(--news-muted)]">
                                            {p.title}
                                        </span>
                                    </div>

                                    <h5 className="font-headline font-bold text-xl text-[var(--news-ink)] uppercase mb-3 leading-snug">
                                        {p.headline}
                                    </h5>

                                    <p className="font-editorial text-sm leading-relaxed text-[var(--news-ink)] mb-4 justified-text">
                                        {p.summary}
                                    </p>

                                    <div className="border-l-2 border-[var(--news-accent)] pl-3 mb-6 font-editorial italic text-xs text-[var(--news-muted)]">
                                        {p.impact}
                                    </div>
                                </div>

                                <div>
                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-[var(--news-rule)]">
                                        {p.stack.map((t) => (
                                            <span
                                                key={t}
                                                className="border border-[var(--news-rule)] bg-[var(--news-bg)] px-2 py-0.5 font-telegraph text-[0.62rem] text-[var(--news-ink)] uppercase"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center justify-between pt-3 border-t border-[var(--news-rule)]">
                                        <a
                                            href={p.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-telegraph text-[0.68rem] font-bold uppercase tracking-widest text-[var(--news-ink)] hover:text-[var(--news-accent)] transition-colors inline-flex items-center gap-1"
                                        >
                                            <span>Inspect Live</span>
                                            <span>&#x2197;</span>
                                        </a>
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-telegraph text-[0.68rem] font-bold uppercase tracking-widest text-[var(--news-muted)] hover:text-[var(--news-ink)] transition-colors inline-flex items-center gap-1"
                                        >
                                            <span>Source Code</span>
                                            <span>&rarr;</span>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </DecompileNode>
    );
}
