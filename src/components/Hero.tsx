import Link from "next/link";

const heroStats = [
    { value: "6+", label: "Projects shipped end-to-end" },
    { value: "2+", label: "Years refining product craft" },
    { value: "100%", label: "Focus on polish and performance" },
];

const highlights = [
    "Full-stack product engineering",
    "Interface systems with restraint",
    "Performance-minded interaction design",
];

const Hero = () => {
    return (
        <section className="section-shell min-h-screen overflow-hidden pt-[clamp(7rem,14vw,10rem)]">
            <div className="hero-grid-line" />
            <div className="hero-orb right-[-4rem] top-[7rem]" />

            <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
                <div className="space-y-8">
                    <div className="eyebrow reveal reveal-up">Full stack developer based in India</div>

                    <div className="reveal reveal-up" data-reveal-delay="90">
                        <p className="mb-5 max-w-[16rem] text-[0.72rem] uppercase tracking-[0.34em] text-[var(--metal)]">
                            Editorial portfolio / selected craft / product-first systems
                        </p>
                        <h1 className="font-playfair text-[clamp(4.4rem,12vw,8.8rem)] font-black leading-[0.88] tracking-[-0.065em] text-[var(--paper)]">
                            Mohanish
                            <br />
                            <span className="italic text-[var(--champagne)]">Pingale</span>
                        </h1>
                    </div>

                    <div className="reveal reveal-up max-w-[44rem]" data-reveal-delay="180">
                        <p className="font-cormorant text-[clamp(1.55rem,3vw,2.45rem)] italic leading-[1.2] text-[var(--mist)]">
                            Building products that feel calm on the surface and deeply considered underneath.
                        </p>
                    </div>

                    <div
                        className="reveal reveal-up grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
                        data-reveal-delay="270"
                    >
                        <p className="section-copy">
                            I design and build robust digital experiences across frontend, backend, and system design.
                            My work aims for a quiet kind of confidence: interfaces that feel effortless, interactions
                            that feel smooth, and codebases that scale with clarity.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <Link href="#projects" className="btn-primary" data-hover>
                                <span>Explore selected work</span>
                            </Link>
                            <Link href="#contact" className="btn-secondary" data-hover>
                                Start a conversation
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="reveal reveal-right luxe-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8" data-reveal-delay="250">
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--line-strong)] to-transparent" />

                    <div className="mb-8 flex items-start justify-between gap-6">
                        <div>
                            <p className="micro-label mb-3">Current focus</p>
                            <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] font-bold leading-[0.98] tracking-[-0.04em]">
                                Interfaces with substance
                            </h2>
                        </div>
                        <span className="rounded-full border border-[var(--line)] px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-[var(--metal)]">
                            2026
                        </span>
                    </div>

                    <div className="mb-8 space-y-3">
                        {highlights.map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3 border-b border-white/6 pb-3 last:border-b-0 last:pb-0"
                            >
                                <span className="h-2 w-2 rounded-full bg-[var(--champagne)]" />
                                <span className="font-cormorant text-[1.18rem] text-[var(--mist)]">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="impact-strip rounded-[1.3rem]">
                        {heroStats.map((stat) => (
                            <div key={stat.label} className="impact-item">
                                <span className="metric-value">{stat.value}</span>
                                <span className="block max-w-[11rem] text-[0.68rem] uppercase tracking-[0.22em] text-[var(--metal)]">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
