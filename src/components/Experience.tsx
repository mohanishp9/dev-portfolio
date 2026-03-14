import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="relative py-32 px-16">
            <div className="flex items-center gap-6 mb-20 text-[0.70rem] tracking-[0.4em] uppercase text-[var(--dim)]">
                <span className="text-[0.7rem] italic font-[Playfair_Display] text-[var(--silver)]">
                    04
                </span>
                Experience
                <span className="flex-1 h-px bg-white/10 max-w-[200px]" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-24">
                <div>
                    <h2 className="font-playfair text-[clamp(28px,3.5vw,48px)] font-black leading-[1.1] tracking-[-0.02em] sticky top-40 reveal-left">
                        Where I've<br />
                        <em className="italic text-accent">worked</em>
                    </h2>
                </div>

                <div>
                    <div className="py-12 border-t border-white/[0.07] grid grid-cols-[1fr_auto] gap-8 reveal-scale">
                        <div>
                            <div className="font-playfair text-[1.4rem] font-bold mb-[0.3rem]">
                                Indux Technology
                            </div>
                            <div className="font-cormorant text-[1rem] italic text-silver mb-[1.2rem]">
                                Full Stack Developer Intern
                            </div>
                            <p className="font-cormorant text-[1.05rem] text-dim leading-[1.7] font-light">
                                Contributed to the development of MagikPro and NutriNative e-commerce platforms, implementing a multi-tenant system where a single application serves multiple brands with domain-based UI customization and dynamic data rendering.
                            </p>
                        </div>
                        <div className="text-[0.55rem] tracking-[0.2em] text-dim uppercase whitespace-nowrap pt-[0.4rem]">
                            Feb 2026 — Present
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
