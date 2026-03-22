const Experience = () => {
    return (
        <section id="experience" className="section-shell">
            <div className="section-intro reveal reveal-up">
                <span className="section-index">04</span>
                Experience
                <span className="section-line" />
            </div>

            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="reveal reveal-left">
                    <h2 className="section-title">
                        Building inside
                        <br />
                        real product <em>contexts.</em>
                    </h2>
                </div>

                <article className="timeline-card reveal reveal-right rounded-[2rem] p-7 sm:p-8">
                    <div className="mb-8 flex flex-col gap-4 border-b border-white/8 pb-6 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <p className="micro-label mb-3">Full Stack Developer Intern</p>
                            <h3 className="font-playfair text-[2rem] font-semibold tracking-[-0.04em] text-[var(--paper)]">
                                Indux Technology
                            </h3>
                        </div>
                        <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-[var(--metal)]">
                            Feb 2026 - Present
                        </span>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <p className="font-cormorant text-[1.15rem] leading-[1.68] text-[var(--mist)]">
                            Contributing to MagikPro and NutriNative, two ecommerce products built on a shared
                            multi-tenant foundation where a single application serves multiple brands with
                            domain-specific presentation.
                        </p>
                        <p className="font-cormorant text-[1.15rem] leading-[1.68] text-[var(--mist)]">
                            The work spans UI customization, dynamic data rendering, and product behavior that adapts
                            cleanly across storefronts, a practical place to refine both system thinking and execution
                            quality.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Experience;
