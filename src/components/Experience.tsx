const Experience = () => {
    return (
        <section id="experience" className="border-b border-white/10 px-6 sm:px-12 lg:px-24 py-24">
            <div className="max-w-7xl">
                <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
                    <div className="lg:col-span-1">
                        <h2 className="font-inter font-black uppercase text-4xl sm:text-6xl tracking-tight text-slate-50 mb-6">
                            Operational History
                        </h2>
                        <p className="font-jetbrains text-sm uppercase tracking-widest text-slate-400">
                            Log of professional deployments
                        </p>
                    </div>

                    <div className="lg:col-span-2 border-l border-white/10 pl-8 lg:pl-16 relative">
                        <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-accent" />
                        
                        <div className="mb-8">
                            <h3 className="font-inter font-black uppercase text-3xl sm:text-4xl tracking-tight text-slate-50 mb-2">
                                Indux Technology
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 font-jetbrains text-xs uppercase tracking-widest text-slate-500">
                                <span>Full Stack Developer Intern</span>
                                <span className="w-1 h-1 bg-white/20" />
                                <span>Feb 2026 - Present</span>
                            </div>
                        </div>

                        <div className="space-y-16">
                            <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors">
                                <h4 className="font-jetbrains text-sm uppercase tracking-widest text-accent mb-4">
                                    Module // MagikPro & NutriNative
                                </h4>
                                <p className="font-inter text-base leading-relaxed text-slate-400">
                                    Two multi-tenant ecommerce products built on a shared backend. A single codebase
                                    serves multiple brands, each with its own domain and product catalog. My work here
                                    was mostly on the backend — building out API routes, writing database queries, handling
                                    tenant-specific business logic, and making sure the data layer kept up with what the
                                    frontend needed.
                                </p>
                            </div>

                            <div className="border border-white/10 p-8 hover:bg-white/5 transition-colors">
                                <h4 className="font-jetbrains text-sm uppercase tracking-widest text-accent mb-4">
                                    Module // InduxCRM
                                </h4>
                                <p className="font-inter text-base leading-relaxed text-slate-400">
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
