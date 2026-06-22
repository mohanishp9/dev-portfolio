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
        live: "https://grove-crypto-tracker.vercel.app/",
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
        year: "2024",
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
        year: "2024",
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
        year: "2024",
        featured: false,
    },
];

const featuredProject = projects.find((p) => p.featured)!;
const secondaryProjects = projects.filter((p) => !p.featured).slice(0, 2);
const stripProjects = projects.filter((p) => !p.featured).slice(2);

const Projects = () => {
    return (
        <section id="projects" className="border-b border-white/10 px-6 sm:px-12 lg:px-24 py-24">
            <div className="max-w-7xl">

                {/* Issue header */}
                <div data-reveal className="flex items-center justify-between border-b border-white/10 pb-6 mb-16">
                    <span className="font-jetbrains text-[0.6rem] uppercase tracking-[0.3em] text-slate-600">
                        Issue 04 &nbsp;/&nbsp; Selected Work
                    </span>
                    <div data-reveal="line" className="h-[1px] flex-1 mx-8 bg-white/10" />
                    <span className="font-jetbrains text-[0.6rem] uppercase tracking-[0.3em] text-slate-600">
                        Feature Article
                    </span>
                </div>

                {/* Hero project + secondary — magazine spread */}
                <div className="grid lg:grid-cols-[3fr_2fr] gap-px bg-white/10 mb-px">

                    {/* LEAD STORY */}
                    <div data-reveal className="bg-zinc-950 p-10 flex flex-col justify-between min-h-[480px] hover:bg-white/[0.025] transition-colors group">
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <span className="font-jetbrains text-[0.6rem] uppercase tracking-[0.28em] text-accent">
                                    Featured &nbsp;/&nbsp; {featuredProject.year}
                                </span>
                                <span
                                    className="font-inter font-black text-[5rem] leading-none text-white/5 select-none"
                                    aria-hidden="true"
                                >
                                    {featuredProject.number}
                                </span>
                            </div>
                            <h3 className="font-inter font-black uppercase text-3xl sm:text-4xl tracking-tight text-slate-50 mb-5 leading-tight group-hover:text-accent transition-colors">
                                {featuredProject.title}
                            </h3>
                            <p className="font-inter text-base leading-relaxed text-slate-400 max-w-lg mb-6">
                                {featuredProject.summary}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {featuredProject.stack.map((tech) => (
                                    <span key={tech} className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-500 border border-white/10 px-3 py-1.5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-6 border-t border-white/10 pt-6">
                            <a
                                href={featuredProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-jetbrains text-xs uppercase tracking-widest text-slate-400 hover:text-accent transition-colors"
                            >
                                Source Code &#8594;
                            </a>
                            <a
                                href={featuredProject.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-jetbrains text-xs uppercase tracking-widest text-accent border-b border-accent pb-0.5 hover:text-white hover:border-white transition-colors"
                            >
                                Live &#8594;
                            </a>
                        </div>
                    </div>

                    {/* Secondary stories column */}
                    <div className="flex flex-col gap-px">
                        {secondaryProjects.map((project, i) => (
                            <div
                                key={project.title}
                                data-reveal
                                data-stagger={String(i + 1)}
                                className="bg-zinc-950 p-8 flex flex-col justify-between flex-1 hover:bg-white/[0.025] transition-colors group"
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
                                <div className="flex gap-5 border-t border-white/10 pt-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-500 hover:text-accent transition-colors">
                                        Source &#8594;
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-400 hover:text-accent transition-colors">
                                        Live &#8594;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Strip — remaining projects */}
                <div data-reveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
                    {stripProjects.map((project, i) => (
                        <div
                            key={project.title}
                            data-stagger={String(i + 1)}
                            className="bg-zinc-950 p-8 hover:bg-white/[0.025] transition-colors group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <span className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-600">{project.year}</span>
                                <span className="font-inter font-black text-[2.5rem] leading-none text-white/5 select-none" aria-hidden="true">{project.number}</span>
                            </div>
                            <h3 className="font-inter font-bold text-base text-slate-50 mb-2 leading-tight group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>
                            <p className="font-inter text-xs leading-relaxed text-slate-500 mb-5">{project.impact}</p>
                            <div className="flex gap-5">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-500 hover:text-accent transition-colors">Source &#8594;</a>
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-400 hover:text-accent transition-colors">Live &#8594;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
