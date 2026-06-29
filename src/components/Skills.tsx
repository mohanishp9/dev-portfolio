"use client";

const capabilities = [
    {
        title: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Responsive UI"],
        body: "Build interfaces that handle real state across screen sizes — not just demo state.",
    },
    {
        title: "Backend",
        items: ["Node.js", "Express.js", "REST APIs", "JWT auth", "MongoDB", "Mongoose"],
        body: "REST APIs, auth flows, database modeling. Backends that are straightforward to reason about.",
    },
    {
        title: "Toolchain",
        items: ["Git", "Docker", "Postman", "CI/CD", "Zod", "Jest"],
        body: "Day-to-day tools for shipping reliably — version control, containers, testing.",
    },
];

import { useState } from "react";
import { DecompileNode } from "./Decompiler";

const Skills = () => {
    const [activeSpec, setActiveSpec] = useState<string>("None");

    const totalSkills = capabilities.reduce((acc, cap) => acc + cap.items.length, 0);

    const decompilerData = {
        array_metrics: {
            modules: capabilities.length,
            total_skills_mapped: totalSkills
        },
        interaction: {
            active_hovered_spec: activeSpec
        }
    };

    return (
        <DecompileNode name="Technical_Spec_Sheet" data={decompilerData}>
        <section id="skills" className="border-b border-white/10 px-6 sm:px-12 lg:px-24 py-24 overflow-hidden">
            <div className="max-w-7xl">

                {/* Issue header */}
                <div data-reveal className="flex items-center justify-between border-b border-white/10 pb-6 mb-16">
                    <span className="font-jetbrains text-[0.6rem] uppercase tracking-[0.3em] text-slate-600">
                        Issue 03 &nbsp;/&nbsp; Technical Specification
                    </span>
                    <div data-reveal="line" className="h-[1px] flex-1 mx-8 bg-white/10" />
                    <span className="font-playfair italic text-3xl tracking-tight text-slate-400">
                        Spec Sheet
                    </span>
                </div>

                <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24 mb-16 relative">
                    <div data-reveal="left" className="relative z-10 pt-8">
                        <div
                            className="font-inter font-black text-[8rem] leading-none tracking-tight text-white/5 select-none mb-8"
                            aria-hidden="true"
                        >
                            03
                        </div>
                        <h2 className="font-playfair italic uppercase text-3xl tracking-tight text-slate-50 leading-tight">
                            Technical<br />Specification
                        </h2>
                    </div>
                    <div data-reveal className="flex items-end">
                        <p className="font-inter text-lg leading-relaxed text-slate-400 max-w-2xl">
                            Grouped by what I actually do, not by buzzword. The stack I reach
                            for when building full stack web applications.
                        </p>
                    </div>
                </div>

                {/* Spec table — rows stagger in */}
                <div data-reveal className="border-t border-white/10">
                    {/* Table header */}
                    <div className="grid grid-cols-3 lg:grid-cols-[1fr_2fr_auto] border-b border-white/10">
                        {["Module", "Specification", "Components"].map((h) => (
                            <div key={h} className="px-6 py-3">
                                <span className="font-jetbrains text-[0.6rem] uppercase tracking-[0.28em] text-slate-600">{h}</span>
                            </div>
                        ))}
                    </div>

                    {/* Rows */}
                    {capabilities.map((cap, i) => (
                        <div
                            key={cap.title}
                            data-stagger={String(i + 1)}
                            onMouseEnter={() => setActiveSpec(cap.title)}
                            onMouseLeave={() => setActiveSpec("None")}
                            className="grid lg:grid-cols-[1fr_2fr_auto] border-b border-white/10 group"
                        >
                            <div className="px-6 py-8 border-b lg:border-b-0 lg:border-r border-white/10">
                                <h3 className="font-playfair italic text-2xl text-slate-50">
                                    {cap.title}
                                </h3>
                            </div>
                            <div className="px-6 py-8 border-b lg:border-b-0 lg:border-r border-white/10">
                                <p className="font-inter text-sm leading-relaxed text-slate-400 mb-5">{cap.body}</p>
                                <div className="flex flex-wrap gap-2">
                                    {cap.items.map((item) => (
                                        <span
                                            key={item}
                                            className="font-jetbrains text-[0.65rem] uppercase tracking-widest text-slate-400 border border-white/10 px-3 py-1.5 group-hover:border-white/20 transition-colors"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="px-6 py-8 flex items-center">
                                <span className="font-jetbrains text-[0.6rem] font-bold bg-[#3b82f6] text-white px-2 py-1">{String(cap.items.length).padStart(2, "0")}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </DecompileNode>
    );
};

export default Skills;
