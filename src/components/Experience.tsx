"use client";
import { useEffect, useState } from "react";
import { DecompileNode } from "./Decompiler";

const Experience = () => {
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
        <section id="experience" className="border-b border-white/10 px-6 sm:px-12 lg:px-24 py-24">
            <div className="max-w-7xl">

                {/* Issue header */}
                <div data-reveal className="flex items-center justify-between border-b border-white/10 pb-6 mb-16">
                    <span className="font-jetbrains text-[0.6rem] uppercase tracking-[0.3em] text-slate-600">
                        Issue 05 &nbsp;/&nbsp; Operational History
                    </span>
                    <div data-reveal="line" className="h-[1px] flex-1 mx-8 bg-white/10" />
                    <span className="font-playfair italic text-3xl tracking-tight text-slate-400">
                        Timeline
                    </span>
                </div>

                <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">
                    {/* Left */}
                    <div data-reveal="left">
                        <div
                            className="font-inter font-black text-[8rem] leading-none tracking-tight text-white/5 select-none mb-8"
                            aria-hidden="true"
                        >
                            05
                        </div>
                        <h2 className="font-playfair italic uppercase text-3xl tracking-tight text-slate-50 leading-tight">
                            Operational<br />History
                        </h2>
                    </div>

                    {/* Right — timeline */}
                    <div data-reveal>
                        {/* Year chapter break */}
                        <div className="flex items-center gap-6 mb-12">
                            <span className="font-inter font-black text-5xl text-slate-50">2026</span>
                            <div className="h-[1px] flex-1 bg-white/10" />
                        </div>

                        {/* Company block */}
                        <div className="border-l border-accent/60 pl-8 mb-16">
                            <div data-stagger="1" className="mb-8">
                                <h3 className="font-playfair italic uppercase text-4xl text-slate-50 mb-3">
                                    Indux Technology
                                </h3>
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="font-jetbrains text-[0.65rem] font-bold uppercase tracking-[0.2em] bg-accent text-black px-3 py-1">
                                        Full Stack Developer Intern
                                    </span>
                                    <span className="font-jetbrains text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">
                                        Feb 2026 – Present
                                    </span>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-12 pt-8 border-t border-white/10">
                                {[
                                    {
                                        label: "Module // MagikPro & NutriNative",
                                        body: "Two multi-tenant ecommerce products built on a shared backend. My work was mostly on the backend — building API routes, writing database queries, handling tenant-specific business logic, and making sure the data layer kept up with what the frontend needed.",
                                        links: [
                                            { name: "MagikPro", url: "https://www.magikprodrinkmix.com/" },
                                            { name: "NutriNative", url: "https://nutrinativefoods.com/" }
                                        ]
                                    },
                                    {
                                        label: "Module // InduxCRM",
                                        body: "An internal CRM tool where I worked across the stack — building out both the API and the frontend views. Handling everything from database schemas to the UI. It was the kind of project where you can't hide behind one side of the stack.",
                                        links: [
                                            { name: "InduxCRM", url: "https://induxcrm.induxtechnology.com/" }
                                        ]
                                    },
                                ].map((mod, i) => (
                                    <div
                                        key={mod.label}
                                        data-stagger={String(i + 2)}
                                        className="flex flex-col"
                                    >
                                        <p className="font-jetbrains text-[0.6rem] uppercase tracking-[0.28em] text-accent mb-4">
                                            {mod.label}
                                        </p>
                                        <p className="font-inter text-sm leading-relaxed text-slate-400 mb-6">
                                            {mod.body}
                                        </p>
                                        <div className="flex flex-wrap gap-4 mt-auto">
                                            {mod.links.map(link => (
                                                <a 
                                                    key={link.name} 
                                                    href={link.url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="font-jetbrains text-[0.65rem] uppercase tracking-widest text-slate-400 hover:text-accent transition-colors flex items-center gap-1.5"
                                                    aria-label={`Visit ${link.name} website`}
                                                >
                                                    {link.name} <span className="text-[0.55rem]">&#8599;</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </DecompileNode>
    );
};

export default Experience;
