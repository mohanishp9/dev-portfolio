const capabilities = [
    {
        title: "Interface direction",
        subtitle: "Building UIs that feel considered, responsive, and steady.",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Responsive UI"],
    },
    {
        title: "Application backbone",
        subtitle: "Shaping APIs, auth flows, and service logic that can grow cleanly.",
        items: ["Node.js", "Express.js", "REST APIs", "JWT auth", "Modular architecture"],
    },
    {
        title: "Data and delivery",
        subtitle: "Connecting products to reliable storage, deployment, and team workflows.",
        items: ["MongoDB", "Mongoose", "Docker", "CI/CD", "GitHub", "Postman"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="section-shell">
            <div className="section-intro reveal reveal-up">
                <span className="section-index">02</span>
                Capabilities
                <span className="section-line" />
            </div>

            <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div className="reveal reveal-left">
                    <h2 className="section-title">
                        What I bring to
                        <br />
                        a product <em>team.</em>
                    </h2>
                </div>
                <div className="reveal reveal-right">
                    <p className="section-copy max-w-[38rem]">
                        Instead of treating skills as a long checklist, I think in terms of outcomes: shaping
                        interface quality, strengthening the application core, and making delivery dependable from
                        prototype to production.
                    </p>
                </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
                {capabilities.map((capability, index) => (
                    <article
                        key={capability.title}
                        className="skill-card reveal reveal-up rounded-[1.75rem] p-7"
                        data-reveal-delay={index * 110}
                    >
                        <p className="micro-label mb-4">0{index + 1}</p>
                        <h3 className="mb-3 font-playfair text-[1.8rem] font-semibold tracking-[-0.03em] text-[var(--paper)]">
                            {capability.title}
                        </h3>
                        <p className="mb-6 font-cormorant text-[1.15rem] leading-[1.65] text-[var(--mist)]">
                            {capability.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {capability.items.map((item) => (
                                <span key={item} className="skill-pill">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Skills;
