import Link from "next/link";
import DecryptedText from "@/components/DecryptedText";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col border-b border-white/10 px-6 sm:px-12 lg:px-24 pt-28 pb-16">

            {/* Cover masthead line */}
            <div data-reveal="line" className="h-[1px] w-full bg-white/10 mb-10" />

            {/* Vol / Issue row */}
            <div data-reveal className="flex items-center justify-between mb-16">
                <span className="font-jetbrains text-[0.65rem] uppercase tracking-[0.3em] text-slate-500">
                    Vol.01 &nbsp;/&nbsp; Issue.01 &nbsp;/&nbsp; 2026
                </span>
                <span className="font-jetbrains text-[0.65rem] uppercase tracking-[0.3em] text-slate-500">
                    Portfolio &mdash; Developer Edition
                </span>
            </div>

            {/* Main headline + right column */}
            <div className="flex-1 grid lg:grid-cols-[1fr_auto] gap-16 items-end">

                <div>
                    {/* Kicker */}
                    <div data-reveal className="flex items-center gap-3 mb-8">
                        <span className="font-jetbrains text-[0.65rem] font-bold uppercase tracking-[0.2em] bg-[#ccff00] text-black px-3 py-1">
                            System Online
                        </span>
                        <span className="font-jetbrains text-[0.65rem] uppercase tracking-[0.3em] text-slate-500">
                            V 1.0.0
                        </span>
                    </div>

                    {/* Display name — huge cover headline */}
                    <h1
                        data-reveal
                        className="font-inter font-black uppercase leading-[0.82] tracking-[-0.03em] text-slate-50 mb-10 flex flex-col"
                        style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
                    >
                        <DecryptedText text="Mohanish" />
                        <DecryptedText text="Pingale" className="text-white/20" />
                    </h1>

                    {/* Divider */}
                    <div data-reveal="line" className="h-[1px] w-full bg-white/10 mb-10" />

                    {/* Sub-headline + CTA */}
                    <div data-reveal className="grid sm:grid-cols-2 gap-8 items-end">
                        <p className="font-inter text-lg leading-relaxed text-slate-400 max-w-md">
                            Full Stack Engineer. I build robust, scalable web applications
                            from database schema to user interface.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#projects"
                                className="font-jetbrains text-xs uppercase tracking-widest text-slate-300 border border-white/20 px-6 py-3.5 hover:bg-[#ff5500] hover:text-[#000000] hover:border-[#ff5500] transition-colors"
                            >
                                View Work &#8594;
                            </Link>
                            <Link
                                href="#contact"
                                className="font-jetbrains text-xs uppercase tracking-widest bg-accent text-black font-bold px-6 py-3.5 hover:bg-[#ff7733] transition-colors"
                            >
                                Initialize Contact
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right stats column — magazine sidebar */}
                <div data-reveal="left" className="hidden lg:flex flex-col gap-0 border-l border-white/10 pl-10 min-w-[200px]">
                    {[
                        { label: "Location", value: "Pune, India" },
                        { label: "Role", value: "Full Stack Eng." },
                        { label: "Status", value: "Available" },
                        { label: "Stack", value: "TS / Next / Node" },
                    ].map((stat, i) => (
                        <div
                            key={stat.label}
                            data-stagger={String(i + 1)}
                            className="border-b border-white/10 py-5"
                        >
                            <span className="block font-jetbrains text-[0.6rem] uppercase tracking-[0.28em] text-slate-600 mb-1">
                                {stat.label}
                            </span>
                            <span className="block font-inter font-bold text-sm text-slate-200">
                                {stat.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom cover rule */}
            <div data-reveal="line" className="h-[1px] w-full bg-white/10 mt-16" />
        </section>
    );
};

export default Hero;
