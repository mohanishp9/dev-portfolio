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
        <section id="skills" className="border-b border-white/10 px-6 sm:px-12 lg:px-24 py-24">
            <div className="max-w-7xl">
                <div className="mb-16">
                    <h2 className="font-inter font-black uppercase text-4xl sm:text-6xl tracking-tight text-slate-50 mb-6">
                        Technical Stack
                    </h2>
                    <p className="font-jetbrains text-sm uppercase tracking-widest text-slate-400">
                        Operational tools and languages
                    </p>
                </div>

                <div className="grid border-t border-l border-white/10">
                    {capabilities.map((capability) => (
                        <div
                            key={capability.title}
                            className="grid lg:grid-cols-3 border-b border-white/10 hover:bg-white/5 transition-colors"
                        >
                            <div className="p-8 lg:border-r border-white/10">
                                <h3 className="font-inter font-black uppercase text-2xl tracking-tight text-slate-50">
                                    {capability.title}
                                </h3>
                            </div>
                            <div className="p-8 lg:col-span-2 lg:border-r border-white/10">
                                <p className="mb-8 font-inter text-lg leading-relaxed text-slate-400 max-w-2xl">
                                    {capability.subtitle}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {capability.items.map((item) => (
                                        <span key={item} className="font-jetbrains text-xs uppercase tracking-widest text-slate-400 border border-white/10 px-4 py-2">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
