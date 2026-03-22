const principles = [
    {
        label: "Approach",
        title: "Quiet interfaces, clear intent",
        body: "I care about the feeling of a product as much as the implementation behind it. The best interfaces rarely shout; they guide, respond, and stay dependable under pressure.",
    },
    {
        label: "Build style",
        title: "Strong systems underneath",
        body: "From API contracts to database modeling and frontend states, I like building foundations that stay maintainable as the product grows and the UI becomes richer.",
    },
];

const About = () => {
    return (
        <section id="about" className="section-shell">
            <div className="section-intro reveal reveal-up">
                <span className="section-index">01</span>
                About
                <span className="section-line" />
            </div>

            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-8">
                    <div className="reveal reveal-left">
                        <h2 className="section-title max-w-[14ch]">
                            Calm on the screen,
                            <br />
                            rigorous in the <em>system.</em>
                        </h2>
                    </div>

                    <div className="reveal reveal-left space-y-6">
                        <p className="section-copy">
                            I am a full stack developer who enjoys turning complex product requirements into thoughtful,
                            usable experiences. My strongest work sits at the intersection of engineering discipline and
                            visual sensitivity, where backend logic, frontend polish, and performance all support the
                            same user story.
                        </p>
                        <p className="section-copy">
                            Whether I am shaping a multi-tenant ecommerce experience or building a lean project from
                            scratch, I try to make every layer feel intentional, from the information architecture to
                            the final hover state.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {principles.map((item, index) => (
                            <article
                                key={item.title}
                                className="about-bio-card reveal reveal-up rounded-[1.5rem] p-6"
                                data-reveal-delay={index * 100}
                            >
                                <p className="micro-label mb-4">{item.label}</p>
                                <h3 className="mb-3 font-playfair text-[1.55rem] font-semibold tracking-[-0.03em] text-[var(--paper)]">
                                    {item.title}
                                </h3>
                                <p className="font-cormorant text-[1.12rem] leading-[1.65] text-[var(--mist)]">
                                    {item.body}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="reveal reveal-right">
                    <div className="about-portrait rounded-[2rem] p-8 sm:p-10">
                        <div className="relative flex h-full flex-col justify-between gap-10">
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <p className="micro-label mb-4">Studio note</p>
                                    <p className="max-w-[14rem] font-cormorant text-[1.18rem] leading-[1.55] text-[var(--mist)]">
                                        Products feel premium when the details are consistent, not when the effects are loud.
                                    </p>
                                </div>
                                <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-[var(--metal)]">
                                    Pune, India
                                </span>
                            </div>

                            <div className="flex flex-1 items-center justify-center">
                                <span className="about-mark">MP</span>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="metric-card rounded-[1.25rem]">
                                    <span className="metric-value">5+</span>
                                    <span className="micro-label">Core technologies used confidently</span>
                                </div>
                                <div className="metric-card rounded-[1.25rem]">
                                    <span className="metric-value">1</span>
                                    <span className="micro-label">Goal: make every product feel composed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
