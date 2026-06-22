const Experience = () => {
    return (
        <section id="experience" className="section-shell">


            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div className="reveal reveal-left">
                    <h2 className="section-title">
                        Where I've worked
                    </h2>
                </div>

                <div className="reveal reveal-right flex flex-col pl-6 border-l border-[var(--line-strong)] ml-2 sm:ml-0">
                    <div className="relative mb-8 pl-6">
                        <span className="absolute -left-[31px] top-2.5 h-3 w-3 rounded-full bg-[var(--champagne)] shadow-[0_0_12px_rgba(221,206,178,0.4)]" />
                        <div className="mb-6">
                            <h3 className="font-playfair text-[2.2rem] font-semibold tracking-[-0.03em] text-[var(--paper)]">
                                Indux Technology
                            </h3>
                            <p className="font-space-mono text-[0.85rem] uppercase tracking-[0.15em] text-[var(--metal)] mt-2">
                                Full Stack Developer Intern <span className="mx-2 opacity-50">|</span> Feb 2026 - Present
                            </p>
                        </div>

                        <div className="space-y-10 mt-8">
                            <div className="relative">
                                <h4 className="font-space-mono text-[1rem] uppercase tracking-[0.1em] text-[var(--mist)] mb-3">
                                    MagikPro & NutriNative
                                </h4>
                                <p className="font-cormorant text-[1.2rem] leading-[1.7] text-[var(--mist)] max-w-[40rem]">
                                    Two multi-tenant ecommerce products built on a shared backend. A single codebase
                                    serves multiple brands, each with its own domain and product catalog. My work here
                                    was mostly on the backend — building out API routes, writing database queries, handling
                                    tenant-specific business logic, and making sure the data layer kept up with what the
                                    frontend needed.
                                </p>
                            </div>

                            <div className="relative">
                                <h4 className="font-space-mono text-[1rem] uppercase tracking-[0.1em] text-[var(--mist)] mb-3">
                                    InduxCRM
                                </h4>
                                <p className="font-cormorant text-[1.2rem] leading-[1.7] text-[var(--mist)] max-w-[40rem]">
                                    An internal CRM tool where I worked across the stack — building out both the API and
                                    the frontend views. Handling everything from database schemas to the UI that displays
                                    and manipulates that data. It was the kind of project where you can't hide behind one
                                    side of the stack, which made it a good learning ground.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
