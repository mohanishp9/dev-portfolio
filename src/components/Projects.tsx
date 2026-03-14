import { FaGithub } from "react-icons/fa";

const Projects = () => {
    return (
        <section id="projects" className="relative py-32 px-16">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-20 reveal-left">
                <h2 className="font-playfair text-[clamp(32px,4vw,55px)] font-black leading-none tracking-[-0.02em]">Selected<br /><em className="italic text-accent">Work</em></h2>
                <span className="font-cormorant text-base text-dim italic">03 Projects</span>
            </div>
            <div className="project-card reveal-scale">
                <div className="font-playfair text-[0.85rem] italic text-dim pt-[0.3rem] tracking-[0.15em]">01</div>
                <div>
                    <h3 className="project-title font-playfair text-[clamp(24px,3vw,36px)] font-bold tracking-[-0.01em] mb-3 transition-colors duration-300">
                        QKart
                    </h3>

                    <p className="font-cormorant text-[1.05rem] text-silver leading-[1.6] font-light max-w-[500px] mb-6">
                        Full-stack development of a complete online store featuring secure authentication, shopping cart, checkout flows, Node.js/MongoDB backend, responsive frontend & comprehensive testing.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        <span className="stack-badge">React</span>
                        <span className="stack-badge">Node.js</span>
                        <span className="stack-badge">Express.js</span>
                        <span className="stack-badge">REST APIs</span>
                        <span className="stack-badge">ES6 (JavaScript)</span>
                        <span className="stack-badge">MongoDB</span>
                        <span className="stack-badge">MongoDB Atlas</span>
                        <span className="stack-badge">Mongoose ODM</span>
                        <span className="stack-badge">MongoDB queries</span>
                        <span className="stack-badge">JWT token</span>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-4 pt-[0.3rem] max-[900px]:hidden">

                    <div className="flex gap-3">

                        <a
                            href="https://github.com/mohanishp9/QKart_Backend"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-[40px] h-[40px] border border-white/15 rounded-full text-[1rem] text-silver transition-all duration-300 hover:border-white/40 hover:text-white"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://qkart-mohanish-pingales-projects.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="arrow-icon flex items-center justify-center w-[40px] h-[40px] border border-white/15 rounded-full text-[1rem] text-silver transition-all duration-300 hover:border-white/40 hover:text-white"
                        >
                            ↗
                        </a>

                    </div>

                    <span className="text-[0.55rem] tracking-[0.2em] text-dim">2024</span>

                </div>
            </div>

            <div className="project-card reveal-scale">
                <div className="font-playfair text-[0.85rem] italic text-dim pt-[0.3rem] tracking-[0.15em]">02</div>
                <div>
                    <h3 className="project-title font-playfair text-[clamp(24px,3vw,36px)] font-bold tracking-[-0.01em] mb-3 transition-colors duration-300">
                        MP's News Feed
                    </h3>

                    <p className="font-cormorant text-[1.05rem] text-silver leading-[1.6] font-light max-w-[500px] mb-6">
                        Built modular JavaScript components (accordion, carousel, navigation utilities) for a responsive Flipboard-style news feed, centralized DOM logic for better maintainability, and validated RSS feed rendering through automated, data-driven tests.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        <span className="stack-badge">HTML</span>
                        <span className="stack-badge">CSS</span>
                        <span className="stack-badge">Bootstrap</span>
                        <span className="stack-badge">ES6 (JavaScript)</span>
                        <span className="stack-badge">REST APIs</span>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-4 pt-[0.3rem] max-[900px]:hidden">

                    <div className="flex gap-3">

                        <a
                            href="https://github.com/mohanishp9/News-Board"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-[40px] h-[40px] border border-white/15 rounded-full text-[1rem] text-silver transition-all duration-300 hover:border-white/40 hover:text-white"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://mboard-mohanish-pingales-projects.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="arrow-icon flex items-center justify-center w-[40px] h-[40px] border border-white/15 rounded-full text-[1rem] text-silver transition-all duration-300 hover:border-white/40 hover:text-white"
                        >
                            ↗
                        </a>

                    </div>

                    <span className="text-[0.55rem] tracking-[0.2em] text-dim">2024</span>

                </div>
            </div>

            <div className="project-card reveal-scale">
                <div className="font-playfair text-[0.85rem] italic text-dim pt-[0.3rem] tracking-[0.15em]">03</div>
                <div>
                    <h3 className="project-title font-playfair text-[clamp(24px,3vw,36px)] font-bold tracking-[-0.01em] mb-3 transition-colors duration-300">
                        MTripDynamic
                    </h3>

                    <p className="font-cormorant text-[1.05rem] text-silver leading-[1.6] font-light max-w-[500px] mb-6">
                        Created RESTful Express + LowDB API for cities, adventures & bookings; implemented reservation logic, availability management, cost calculation, and dynamic data generation; connected to modular, responsive frontend.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        <span className="stack-badge">HTML</span>
                        <span className="stack-badge">CSS</span>
                        <span className="stack-badge">Bootstrap</span>
                        <span className="stack-badge">ES6 (JavaScript)</span>
                        <span className="stack-badge">Deployment (Vercel, Render)</span>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-4 pt-[0.3rem] max-[900px]:hidden">

                    <div className="flex gap-3">

                        <a
                            href="https://github.com/mohanishp9/MTripDynamic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-[40px] h-[40px] border border-white/15 rounded-full text-[1rem] text-silver transition-all duration-300 hover:border-white/40 hover:text-white"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://mtripdynamic-mohanish-pingales-projects.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="arrow-icon flex items-center justify-center w-[40px] h-[40px] border border-white/15 rounded-full text-[1rem] text-silver transition-all duration-300 hover:border-white/40 hover:text-white"
                        >
                            ↗
                        </a>

                    </div>

                    <span className="text-[0.55rem] tracking-[0.2em] text-dim">2024</span>

                </div>
            </div>
        </section>
    );
};

export default Projects;
