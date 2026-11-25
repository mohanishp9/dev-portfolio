"use client";
import { useEffect, useState } from "react";
import { DecompileNode } from "./Decompiler";

export default function Experience() {
    const [mountTime, setMountTime] = useState(0);

    useEffect(() => {
        setMountTime(Math.round(performance.now()));
    }, []);

    // Calculate dynamic internship duration
    const startDate = new Date("2026-02-01");
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const decompilerData = {
        timeline_engine: {
            mount_cycle_ms: mountTime,
            current_active_role: "Indux Technology"
        },
        calculated_metrics: {
            internship_duration_days: diffDays,
            modules_completed: 2
        }
    };

    return (
        <DecompileNode name="Operational_History" data={decompilerData}>
            <section id="experience" className="border-b border-[var(--news-rule-strong)] px-4 sm:px-8 lg:px-12 py-16">
                {/* Section Folio Header */}
                <div data-reveal className="flex items-center justify-between border-b border-[var(--news-rule-strong)] pb-3 mb-10 font-telegraph text-[0.68rem] uppercase tracking-[0.22em] text-[var(--news-muted)]">
                    <span className="font-bold text-[var(--news-ink)]">
                        PAGE IV &bull; HISTORICAL ARCHIVES &bull; OPERATIONAL RECORD
                    </span>
                    <span className="font-headline italic text-sm text-[var(--news-ink)] normal-case">
                        Field Dispatches &amp; Commercial Apprenticeship
                    </span>
                    <span className="hidden sm:inline">OFFICIAL GAZETTE</span>
                </div>

                <div className="grid lg:grid-cols-12 gap-10">
                    {/* Left Column (4 cols): Sticky Header & Gazette Summary */}
                    <div data-reveal="left" className="lg:col-span-4 lg:sticky lg:top-28 self-start">
                        <div className="font-headline font-black text-6xl text-[var(--news-ink)] leading-none mb-2">
                            SECTION IV.
                        </div>
                        <h2 className="font-headline uppercase text-2xl sm:text-3xl tracking-tight text-[var(--news-ink)] mb-4 font-bold">
                            Operational History
                        </h2>
                        <p className="font-editorial text-sm leading-relaxed text-[var(--news-muted)] mb-6">
                            Chronicles of professional commercial engagements, client deployments, and enterprise systems delivered in live environments.
                        </p>

                        {/* Service Record Box */}
                        <div className="border border-[var(--news-rule-strong)] p-5 bg-[var(--news-card)]">
                            <span className="font-telegraph text-[0.6rem] uppercase tracking-[0.25em] text-[var(--news-accent)] font-bold block mb-1">
                                ACTIVE SERVICE CERTIFICATE
                            </span>
                            <div className="font-headline font-bold text-lg text-[var(--news-ink)] uppercase mb-2">
                                {diffDays} Consecutive Days Logged
                            </div>
                            <p className="font-editorial text-xs italic text-[var(--news-muted)] leading-relaxed">
                                Commenced February 1, 2026. Ongoing commercial stewardship under Indux Technology Engineering Division.
                            </p>
                        </div>
                    </div>

                    {/* Right Column (8 cols): The Historical Dispatches Spread */}
                    <div data-reveal className="lg:col-span-8 lg:border-l lg:border-[var(--news-rule)] lg:pl-10">
                        {/* Company Block Lead Article */}
                        <div className="border-2 border-[var(--news-rule-strong)] bg-[var(--news-card)] p-6 sm:p-8 mb-8">
                            <div className="flex flex-wrap items-center justify-between border-b border-[var(--news-rule)] pb-3 mb-4 gap-2">
                                <div className="flex items-center gap-3">
                                    <span className="bg-[var(--news-ink)] text-[var(--news-bg)] font-telegraph text-[0.65rem] font-bold px-2.5 py-0.5 uppercase tracking-widest">
                                        COMMERCIAL DISPATCH // NASHIK
                                    </span>
                                    <span className="font-telegraph text-xs text-[var(--news-muted)]">
                                        ANNO 2026
                                    </span>
                                </div>
                                <span className="font-telegraph text-xs font-bold text-[var(--news-accent)]">
                                    FEB 2026 – PRESENT DAY
                                </span>
                            </div>

                            <h3 className="font-headline font-black text-3xl text-[var(--news-ink)] uppercase mb-2">
                                Indux Technology
                            </h3>
                            <div className="font-telegraph text-xs font-bold uppercase tracking-wider text-[var(--news-muted)] mb-6 pb-3 border-b border-[var(--news-rule)]">
                                Rank &amp; Post: Full Stack Developer Intern
                            </div>

                            {/* Correspondent Lead */}
                            <p className="font-editorial text-base leading-relaxed text-[var(--news-ink)] justified-text drop-cap mb-8">
                                Appointed to the engineering corps at Indux Technology to develop and maintain enterprise-grade web applications. Working directly across the full technical continuum, handling complex PostgreSQL and MongoDB database architectures, high-performance API endpoints, and clean frontend client interfaces.
                            </p>

                            {/* The 2 Modules Spread */}
                            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t-2 border-[var(--news-rule-strong)]">
                                {[
                                    {
                                        label: "DISPATCH 01 // MULTI-TENANT ARCHITECTURE",
                                        title: "MagikPro & NutriNative Platforms",
                                        body: "Two multi-tenant commercial e-commerce products operating on a shared scalable backend. Primary engineering responsibilities centered on the API architecture, database query optimization, tenant-isolated business rules, and ensuring strict data fidelity for high-traffic consumer storefronts.",
                                        links: [
                                            { name: "MagikPro Live Storefront", url: "https://www.magikprodrinkmix.com/" },
                                            { name: "NutriNative Official Portal", url: "https://nutrinativefoods.com/" }
                                        ]
                                    },
                                    {
                                        label: "DISPATCH 02 // ENTERPRISE OPERATIONS",
                                        title: "InduxCRM Internal Suite",
                                        body: "A comprehensive internal customer relationship and operations engine. Delivered end-to-end features spanning relational schema design, administrative API routes, and high-density operational user dashboards where neither side of the technology stack could be compromised.",
                                        links: [
                                            { name: "InduxCRM Production Suite", url: "https://induxcrm.induxtechnology.com/" }
                                        ]
                                    },
                                ].map((mod) => (
                                    <div
                                        key={mod.title}
                                        className="border border-[var(--news-rule)] p-5 bg-[var(--news-bg)] flex flex-col justify-between"
                                    >
                                        <div>
                                            <span className="font-telegraph text-[0.6rem] font-bold text-[var(--news-accent)] uppercase tracking-wider block mb-2">
                                                {mod.label}
                                            </span>
                                            <h4 className="font-headline font-bold text-lg text-[var(--news-ink)] uppercase mb-3">
                                                {mod.title}
                                            </h4>
                                            <p className="font-editorial text-xs leading-relaxed text-[var(--news-muted)] mb-6 justified-text">
                                                {mod.body}
                                            </p>
                                        </div>

                                        <div className="pt-3 border-t border-[var(--news-rule)] flex flex-wrap gap-3">
                                            {mod.links.map((link) => (
                                                <a
                                                    key={link.name}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-telegraph text-[0.65rem] font-bold uppercase tracking-widest text-[var(--news-ink)] hover:text-[var(--news-accent)] transition-colors inline-flex items-center gap-1"
                                                >
                                                    <span>{link.name}</span>
                                                    <span>&#x2197;</span>
                                                </a>
                                            ))}
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
