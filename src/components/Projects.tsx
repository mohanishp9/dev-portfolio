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
        <section id="projects" className="border-b border-white/10 px-6 sm:px-12 lg:px-24 py-24">
            <div className="max-w-7xl">
                <div className="mb-16">
                    <h2 className="font-inter font-black uppercase text-4xl sm:text-6xl tracking-tight text-slate-50 mb-6">
                        System Registry
                    </h2>
                    <p className="font-jetbrains text-sm uppercase tracking-widest text-slate-400">
                        Index of deployed architectures and modules
                    </p>
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="border-b border-white/20 font-jetbrains text-xs uppercase tracking-widest text-slate-500">
                                <th className="pb-4 px-4 font-normal w-16">ID</th>
                                <th className="pb-4 px-4 font-normal w-24">Year</th>
                                <th className="pb-4 px-4 font-normal w-1/4">Module Name</th>
                                <th className="pb-4 px-4 font-normal">Core Stack</th>
                                <th className="pb-4 px-4 font-normal text-right">Access</th>
                            </tr>
                        </thead>
                        <tbody className="font-inter">
                            {projects.map((project) => (
                                <tr key={project.title} className="border-b border-white/10 hover:bg-white/5 transition-colors group">
                                    <td className="py-6 px-4 font-jetbrains text-sm text-slate-500">{project.number}</td>
                                    <td className="py-6 px-4 font-jetbrains text-sm text-slate-400">{project.year}</td>
                                    <td className="py-6 px-4">
                                        <span className="block font-bold text-lg text-slate-50 mb-1">{project.title}</span>
                                        <span className="block text-sm text-slate-400 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity">{project.summary}</span>
                                    </td>
                                    <td className="py-6 px-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.slice(0, 4).map((tech) => (
                                                <span key={tech} className="font-jetbrains text-[0.65rem] uppercase tracking-wider text-slate-400 border border-white/10 px-2 py-1">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.stack.length > 4 && (
                                                <span className="font-jetbrains text-[0.65rem] uppercase tracking-wider text-slate-500 px-1 py-1">
                                                    +{project.stack.length - 4}
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="py-6 px-4 text-right">
                                        <div className="flex items-center justify-end gap-4">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="font-jetbrains text-xs uppercase tracking-widest text-slate-400 hover:text-accent transition-colors">
                                                Source
                                            </a>
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="font-jetbrains text-xs uppercase tracking-widest text-slate-50 bg-white/10 px-3 py-1.5 hover:bg-accent transition-colors">
                                                Launch
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Projects;
