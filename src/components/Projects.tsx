import { FaGithub } from "react-icons/fa";

const projects = [
    {
        number: "01",
        title: "Grove Crypto Tracker",
        summary:
            "A full-stack crypto portfolio tracker designed around clarity, secure authentication, and real-time visibility into holdings and transactions.",
        impact: "Built to simplify daily portfolio monitoring with live market integrations and a clean transaction view.",
        stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "CoinGecko API"],
        github: "https://github.com/mohanishp9/crypto_portfolio_tracker",
        live: "https://grove-crypto-tracker.vercel.app/",
        year: "2026",
    },
    {
        number: "02",
        title: "QKart",
        summary:
            "A complete ecommerce experience with secure authentication, cart management, checkout flows, and a responsive shopping journey from browse to purchase.",
        impact: "Focused on creating a dependable storefront flow with solid backend foundations and production-ready UX patterns.",
        stack: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Testing"],
        github: "https://github.com/mohanishp9/QKart_Backend",
        live: "https://qkart-mohanish-pingales-projects.vercel.app/",
        year: "2024",
    },
    {
        number: "03",
        title: "MP News Feed",
        summary:
            "A modular Flipboard-style news experience with reusable UI components, feed rendering, and testing-driven DOM behavior.",
        impact: "Used component thinking and automated validation to keep the frontend maintainable while handling dynamic RSS content.",
        stack: ["JavaScript", "HTML", "CSS", "Bootstrap", "RSS feeds"],
        github: "https://github.com/mohanishp9/News-Board",
        live: "https://mboard-mohanish-pingales-projects.vercel.app/",
        year: "2024",
    },
    {
        number: "04",
        title: "MTripDynamic",
        summary:
            "A travel booking platform with dynamic reservation logic, availability handling, cost calculation, and modular API-backed pages.",
        impact: "Connected data, booking flows, and frontend rendering into a streamlined travel product experience.",
        stack: ["JavaScript", "Express", "LowDB", "REST APIs", "Deployment"],
        github: "https://github.com/mohanishp9/MTripDynamic",
        live: "https://mtripdynamic-mohanish-pingales-projects.vercel.app/",
        year: "2024",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="section-shell">
            <div className="section-intro reveal reveal-up">
                <span className="section-index">03</span>
                Selected Work
                <span className="section-line" />
            </div>

            <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                <div className="reveal reveal-left">
                    <h2 className="section-title">
                        The work is where
                        <br />
                        the details <em>speak.</em>
                    </h2>
                </div>
                <div className="reveal reveal-right">
                    <p className="section-copy max-w-[39rem]">
                        These projects show how I approach different product shapes, from dashboard-like utility to
                        ecommerce and content-heavy interfaces. Each one sharpened a different part of my craft.
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
                                        Project note
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
                                        View the live build or inspect the code to see how the product is structured.
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
                                        <span>Source</span>
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
