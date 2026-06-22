const capabilities = [
    {
        title: "Frontend",
        subtitle: "React, Next.js, and the ecosystem around them. I build interfaces that work across screen sizes and handle real state, not just demo state.",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Responsive UI"],
    },
    {
        title: "Backend",
        subtitle: "REST APIs, auth flows, database modeling. I like building backends that are straightforward to reason about and don't hide complexity in abstractions.",
        items: ["Node.js", "Express.js", "REST APIs", "JWT auth", "MongoDB", "Mongoose"],
    },
    {
        title: "Tools & workflow",
        subtitle: "What I use day to day to ship reliably — version control, containers, testing, CI/CD.",
        items: ["Git", "Docker", "Postman", "CI/CD", "Zod", "Jest"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="section-shell">


            <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div className="reveal reveal-left">
                    <h2 className="section-title">
                        What I work with
                    </h2>
                </div>
                <div className="reveal reveal-right">
                    <p className="section-copy max-w-[38rem]">
                        I group these by what I actually do, not by buzzword. Here's the stack I reach for when
                        building full stack web applications.
                    </p>
                </div>
            </div>

            <div className="mt-8 flex flex-col border-t border-[var(--line)]">
                {capabilities.map((capability, index) => (
                    <div
                        key={capability.title}
                        className="reveal reveal-up group flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12 border-b border-[var(--line)] py-10 transition-colors hover:bg-white/[0.015]"
                        data-reveal-delay={index * 110}
                    >
                        <div className="lg:w-1/3 shrink-0">
                            <h3 className="font-playfair text-[2rem] font-semibold tracking-[-0.03em] text-[var(--paper)]">
                                {capability.title}
                            </h3>
                        </div>
                        <div className="lg:w-2/3">
                            <p className="mb-8 font-cormorant text-[1.25rem] leading-[1.65] text-[var(--mist)] max-w-[36rem]">
                                {capability.subtitle}
                            </p>
                            <div className="flex flex-wrap gap-x-8 gap-y-3">
                                {capability.items.map((item) => (
                                    <span key={item} className="font-space-mono text-[0.95rem] text-[var(--mist)] tracking-[0.05em] flex items-center">
                                        <span className="mr-3 h-[1px] w-4 bg-[var(--champagne)] opacity-50"></span>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
