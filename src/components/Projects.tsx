const projects = [
    {
        number: "01",
        title: "Petty Revenge Note",
        summary:
            "A journaling app where you can write notes, post them, and let people comment and react. Full auth with JWT, Redux for state management, threaded comments, emoji reactions, and paginated feeds.",
        impact: "Learned a lot about managing complex state with Redux Toolkit and using Zod for runtime validation.",
        stack: ["Next.js", "React", "Redux Toolkit", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Zod"],
        github: "https://github.com/mohanishp9/petty-revenge-note",
        live: "https://petty-revenge-note.vercel.app/",
        year: "2026",
        featured: true,
    },
    {
        number: "02",
        title: "Grove Crypto Tracker",
        summary:
            "Track your crypto portfolio in one place. Connects to CoinGecko for live prices, shows your holdings and transaction history in a clean dashboard.",
        impact: "First project using a live external API — dealing with CoinGecko rate limits taught me about caching.",
        stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "CoinGecko API"],
        github: "https://github.com/mohanishp9/crypto_portfolio_tracker",
        live: "https://cypher-sight.vercel.app/",
        year: "2026",
        featured: false,
    },
    {
        number: "03",
        title: "QKart",
        summary:
            "An ecommerce app with the full flow: browse products, add to cart, checkout, order management.",
        impact: "First complete ecommerce build. Cart management and checkout logic — getting state right when items change mid-session.",
        stack: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Testing"],
        github: "https://github.com/mohanishp9/QKart_Backend",
        live: "https://qkart-mohanish-pingales-projects.vercel.app/",
        year: "2025",
        featured: false,
    },
    {
        number: "04",
        title: "MP News Feed",
        summary:
            "A Flipboard-style news reader that pulls from RSS feeds and renders them in a scrollable card layout.",
        impact: "Taught me component architecture — when to split things up, when to keep them together.",
        stack: ["JavaScript", "HTML", "CSS", "Bootstrap", "RSS feeds"],
        github: "https://github.com/mohanishp9/News-Board",
        live: "https://mboard-mohanish-pingales-projects.vercel.app/",
        year: "2025",
        featured: false,
    },
    {
        number: "05",
        title: "MTripDynamic",
        summary:
            "A travel booking app with search, availability checking, cost calculation, and reservation logic.",
        impact: "First time connecting frontend rendering to non-trivial backend logic.",
        stack: ["JavaScript", "Express", "LowDB", "REST APIs"],
        github: "https://github.com/mohanishp9/MTripDynamic",
        live: "https://mtripdynamic-mohanish-pingales-projects.vercel.app/",
        year: "2025",
        featured: false,
    },
];

const featuredProject = projects.find((p) => p.featured)!;
const secondaryProjects = projects.filter((p) => !p.featured).slice(0, 2);
const stripProjects = projects.filter((p) => !p.featured).slice(2);

import { useEffect, useState, useRef } from "react";
import { DecompileNode } from "./Decompiler";

const Projects = () => {
    const [activeProject, setActiveProject] = useState<string>("None");
    const [renderTime, setRenderTime] = useState<number>(0);

    useEffect(() => {
        const start = performance.now();
        setRenderTime(Number((performance.now() - start).toFixed(2)));
    }, []);

    const decompilerData = {
        array_metrics: {
            total: projects.length,
            featured: 1,
            secondary: secondaryProjects.length,
            strip: stripProjects.length
        },
        dom_metrics: {
            render_cycle_ms: renderTime,
            estimated_nodes: projects.length * 14 + projects.reduce((acc, p) => acc + p.stack.length, 0),
        },
        viewport: {
            active_intersecting_node: activeProject
        }
    };

    return (
        <DecompileNode name="Projects_Showcase" data={decompilerData}>
        <section id="projects" className="border-b border-white/10 px-6 sm:px-12 lg:px-24 py-24 relative">
            <div className="max-w-7xl">

                {/* Issue header */}
                <div data-reveal className="flex items-center justify-between border-b border-white/10 pb-6 mb-16">
                    <span className="font-jetbrains text-[0.6rem] uppercase tracking-[0.3em] text-slate-600">
                        Issue 04 &nbsp;/&nbsp; Selected Work
                    </span>
                    <div data-reveal="line" className="h-[1px] flex-1 mx-8 bg-white/10" />
                    <span className="font-playfair italic text-3xl tracking-tight text-slate-400">
                        Selected Works
                    </span>
                </div>

                {/* Hero project + secondary — magazine spread */}
                <div className="grid lg:grid-cols-[3fr_2fr] border-b border-white/10">

                    {/* LEAD STORY */}
                    <div 
                        data-reveal 
                        onMouseEnter={() => setActiveProject(featuredProject.title)}
                        className="p-8 sm:p-12 lg:pl-0 flex flex-col justify-between min-h-[480px] border-b lg:border-b-0 lg:border-r border-white/10 group"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <span className="font-jetbrains text-[0.6rem] uppercase tracking-[0.28em] text-black bg-[#ccff00] px-3 py-1 font-bold">
                                    Featured &nbsp;/&nbsp; {featuredProject.year}
                                </span>
                                <span
                                    className="font-inter font-black text-[5rem] leading-none text-white/5 select-none"
                                    aria-hidden="true"
                                >
                                    {featuredProject.number}
                                </span>
                            </div>
                            <h3 className="font-inter font-black uppercase text-3xl sm:text-4xl tracking-tight text-slate-50 mb-5 leading-tight group-hover:text-white transition-colors">
                                {featuredProject.title}
                            </h3>
                            <p className="font-inter text-base leading-relaxed text-slate-400 max-w-lg mb-6">
                                {featuredProject.summary}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {featuredProject.stack.map((tech) => (
                                    <span key={tech} className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-500 border border-white/10 px-3 py-1.5 bg-white/[0.02]">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-4 border-t border-white/10 pt-6">
                            <a
                                href={featuredProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-jetbrains text-[0.65rem] uppercase tracking-widest text-slate-300 border border-white/20 px-5 py-2.5 hover:bg-[#ff5500] hover:text-[#000000] hover:border-[#ff5500] transition-all"
                            >
                                Source Code &#8594;
                            </a>
                            <a
                                href={featuredProject.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-jetbrains text-[0.65rem] uppercase tracking-widest border border-[#ccff00] bg-[#ccff00] px-5 py-2.5 hover:bg-[#ff5500] hover:border-[#ff5500] transition-all font-bold"
                                style={{ color: "#000000" }}
                            >
                                Live View &#8594;
                            </a>
                        </div>
                    </div>

                    {/* Secondary stories column */}
                    <div className="flex flex-col">
                        {secondaryProjects.map((project, i) => (
                            <div
                                key={project.title}
                                data-reveal
                                data-stagger={String(i + 1)}
                                onMouseEnter={() => setActiveProject(project.title)}
                                className={`p-8 sm:p-12 lg:pr-0 flex flex-col justify-between flex-1 group ${i === 0 ? "border-b border-white/10" : ""}`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <span className="font-jetbrains text-[0.6rem] uppercase tracking-[0.28em] text-slate-600">
                                            {project.year}
                                        </span>
                                        <span className="font-inter font-black text-[3rem] leading-none text-white/5 select-none" aria-hidden="true">
                                            {project.number}
                                        </span>
                                    </div>
                                    <h3 className="font-inter font-bold uppercase text-xl text-slate-50 mb-3 leading-tight group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="font-inter text-sm leading-relaxed text-slate-400 mb-4">
                                        {project.summary}
                                    </p>
                                </div>
                                <div className="flex gap-3 border-t border-white/10 pt-5 mt-auto">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-400 border border-white/20 px-4 py-2 hover:bg-[#ff5500] hover:text-[#000000] hover:border-[#ff5500] transition-all">
                                        Source &#8594;
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-300 border border-white/20 px-4 py-2 hover:bg-[#ff5500] hover:text-[#000000] hover:border-[#ff5500] transition-all">
                                        Live &#8594;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Strip — remaining projects */}
                <div data-reveal className="grid sm:grid-cols-2 lg:grid-cols-3">
                    {stripProjects.map((project, i) => (
                        <div
                            key={project.title}
                            data-stagger={String(i + 1)}
                            onMouseEnter={() => setActiveProject(project.title)}
                            className="p-8 sm:p-12 border-r border-b border-white/10 group [&:nth-child(3n)]:border-r-0 [&:nth-child(3n+1)]:lg:pl-0"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <span className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-600">{project.year}</span>
                                <span className="font-inter font-black text-[2.5rem] leading-none text-white/5 select-none" aria-hidden="true">{project.number}</span>
                            </div>
                            <h3 className="font-inter font-bold text-base text-slate-50 mb-2 leading-tight group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>
                            <p className="font-inter text-xs leading-relaxed text-slate-500 mb-5">{project.impact}</p>
                            <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-400 border border-white/20 px-3 py-1.5 hover:bg-[#ff5500] hover:text-[#000000] hover:border-[#ff5500] transition-all">Source &#8594;</a>
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-300 border border-white/20 px-3 py-1.5 hover:bg-[#ff5500] hover:text-[#000000] hover:border-[#ff5500] transition-all">Live &#8594;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </DecompileNode>
    );
};

export default Projects;
