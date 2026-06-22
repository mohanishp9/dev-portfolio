import { FaGithub } from "react-icons/fa";

const projects = [
    {
        number: "01",
        title: "Petty Revenge Note",
        summary:
            "A journaling app where you can write notes, post them, and let people comment and react. Full auth with JWT, Redux for state management, threaded comments, emoji reactions, and paginated feeds. I wanted to build something with real social features, not just CRUD.",
        impact: "Learned a lot about managing complex state with Redux Toolkit and using Zod for runtime validation. First project where I had to think about how comments, replies, and reactions all relate in the store.",
        stack: ["Next.js", "React", "Redux Toolkit", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Zod"],
        github: "https://github.com/mohanishp9/petty-revenge-note",
        live: "https://petty-revenge-note.vercel.app/",
        year: "2026",
    },
    {
        number: "02",
        title: "Grove Crypto Tracker",
        summary:
            "Track your crypto portfolio in one place. Connects to CoinGecko for live prices, shows your holdings and transaction history in a clean dashboard.",
        impact: "First project using a live external API — dealing with CoinGecko's rate limits taught me about caching and graceful error handling.",
        stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "CoinGecko API"],
        github: "https://github.com/mohanishp9/crypto_portfolio_tracker",
        live: "https://grove-crypto-tracker.vercel.app/",
        year: "2026",
    },
    {
        number: "03",
        title: "QKart",
        summary:
            "An ecommerce app with the full flow: browse products, add to cart, checkout, order management. Built to learn how to handle cart state, authentication, and product logic end to end.",
        impact: "First complete ecommerce build. Cart management and checkout logic were the hardest parts — getting state right when items change mid-session.",
        stack: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Testing"],
        github: "https://github.com/mohanishp9/QKart_Backend",
        live: "https://qkart-mohanish-pingales-projects.vercel.app/",
        year: "2024",
    },
    {
        number: "04",
        title: "MP News Feed",
        summary:
            "A Flipboard-style news reader that pulls from RSS feeds and renders them in a scrollable card layout. Focused on reusable components and test-driven DOM behavior.",
        impact: "Taught me component architecture — when to split things up, when to keep them together. Also my first time writing tests that check what the user actually sees, not just what functions return.",
        stack: ["JavaScript", "HTML", "CSS", "Bootstrap", "RSS feeds"],
        github: "https://github.com/mohanishp9/News-Board",
        live: "https://mboard-mohanish-pingales-projects.vercel.app/",
        year: "2024",
    },
    {
        number: "05",
        title: "MTripDynamic",
        summary:
            "A travel booking app with search, availability checking, cost calculation, and reservation logic. The backend handles booking flow; the frontend renders it cleanly.",
        impact: "First time connecting frontend rendering to non-trivial backend logic. Availability checks and cost calculations had to stay consistent across the stack.",
        stack: ["JavaScript", "Express", "LowDB", "REST APIs", "Deployment"],
        github: "https://github.com/mohanishp9/MTripDynamic",
        live: "https://mtripdynamic-mohanish-pingales-projects.vercel.app/",
        year: "2024",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="section-shell">


            <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                <div className="reveal reveal-left">
                    <h2 className="section-title">
                        Things I've built
                    </h2>
                </div>
                <div className="reveal reveal-right">
                    <p className="section-copy max-w-[39rem]">
                        Each of these taught me something different — from managing complex state to working with
                        external APIs to building checkout flows. They're not all polished products, but they're
                        honest work.
                    </p>
                </div>
            </div>

            <div className="grid gap-5">
                {projects.map((project, index) => (
                    <article
                        key={project.title}
                        className="project-card reveal reveal-up rounded-[2rem] p-6 sm:p-8"
                        data-reveal-delay={index * 90}
                    >
                        <div className="relative z-[1] grid gap-8 lg:grid-cols-[96px_minmax(0,1fr)_240px]">
                            <div className="flex items-start justify-between lg:flex-col">
                                <span className="font-playfair text-[1.05rem] italic tracking-[0.14em] text-[var(--metal)]">
                                    {project.number}
                                </span>
                                <span className="micro-label">{project.year}</span>
                            </div>

                            <div>
                                <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                                    <div>
                                        <h3 className="mb-3 font-playfair text-[clamp(1.9rem,3vw,2.7rem)] font-semibold tracking-[-0.04em] text-[var(--paper)]">
                                            {project.title}
                                        </h3>
                                        <p className="max-w-[42rem] font-cormorant text-[1.2rem] leading-[1.68] text-[var(--mist)]">
                                            {project.summary}
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-6 rounded-[1.3rem] border border-white/6 bg-white/[0.025] p-4">
                                    <p className="mb-2 text-[0.62rem] uppercase tracking-[0.24em] text-[var(--metal)]">
                                        What I learned
                                    </p>
                                    <p className="font-cormorant text-[1.08rem] leading-[1.6] text-[var(--mist)]">
                                        {project.impact}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((item) => (
                                        <span key={item} className="stack-badge">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col justify-between gap-6 rounded-[1.4rem] border border-white/6 bg-black/20 p-5">
                                <div>
                                    <p className="micro-label mb-3">Explore</p>
                                    <p className="font-cormorant text-[1.02rem] leading-[1.6] text-[var(--mist)]">
                                        Check out the live build or dig into the source code.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link min-w-[8rem]"
                                        data-hover
                                    >
                                        <FaGithub />
                                        <span className="ml-2">Source</span>
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-link min-w-[8rem]"
                                        data-hover
                                    >
                                        <span>Live site</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
