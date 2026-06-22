import Link from "next/link";

const heroStats = [
    { value: "5+", label: "Projects shipped" },
    { value: "1+", label: "Years building web apps" },
    { value: "Open", label: "To new roles" },
];

const highlights = [
    "Full stack dev at Indux Technology, Pune",
    "Building multi-tenant ecommerce (MagikPro, NutriNative)",
    "React, Next.js, TypeScript, Node.js",
];

const Hero = () => {
    return (
        <section className="section-shell min-h-screen overflow-hidden pt-[clamp(7rem,14vw,10rem)]">

            <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
                <div className="space-y-8">
                    <div className="eyebrow reveal reveal-up">Full stack developer in Pune</div>

                    <div className="reveal reveal-up" data-reveal-delay="90">
                        <h1 className="font-playfair text-[clamp(4.4rem,12vw,8.8rem)] font-black leading-[0.88] tracking-[-0.065em] text-[var(--paper)]">
                            Mohanish
                            <br />
                            <span>Pingale</span>
                        </h1>
                    </div>

                    <div className="reveal reveal-up max-w-[44rem]" data-reveal-delay="180">
                        <p className="font-cormorant text-[clamp(1.55rem,3vw,2.45rem)] italic leading-[1.2] text-[var(--mist)]">
                            I build web apps from database to interface — and I care about every layer working well together.
                        </p>
                    </div>

                    <div
                        className="reveal reveal-up grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end"
                        data-reveal-delay="270"
                    >
                        <p className="section-copy">
                            I work across React, Next.js, Node.js, and TypeScript. Currently at Indux Technology,
                            shipping features for multi-tenant ecommerce products. I like the parts where frontend
                            and backend have to cooperate closely — getting data flows right, making the UI respond
                            the way it should.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <Link href="#projects" className="btn-primary" data-hover>
                                <span>See my work</span>
                            </Link>
                            <Link href="#contact" className="btn-secondary" data-hover>
                                Get in touch
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="reveal reveal-right luxe-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8" data-reveal-delay="250">
                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--line-strong)] to-transparent" />

                    <div className="mb-8 flex items-start justify-between gap-6">
                        <div>
                            <p className="micro-label mb-3">Right now</p>
                            <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] font-bold leading-[0.98] tracking-[-0.04em]">
                                Shipping ecommerce at scale
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
                            <div key={stat.label} className="impact-item flex flex-col items-center text-center">
                                <span className="metric-value whitespace-nowrap">{stat.value}</span>
                                <span className="block text-[0.68rem] uppercase tracking-[0.22em] text-[var(--metal)] mt-1">
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
