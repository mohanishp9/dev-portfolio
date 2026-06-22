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
        <section className="min-h-screen pt-32 pb-16 flex flex-col justify-end border-b border-white/10 px-6 sm:px-12 lg:px-24">
            <div className="max-w-7xl">
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-[1px] w-12 bg-accent"></div>
                    <span className="font-jetbrains text-sm tracking-widest text-slate-400 uppercase">
                        System Online // V1.0.0
                    </span>
                </div>

                <h1 className="font-inter font-black uppercase text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.85] tracking-tight text-slate-50 mb-8">
                    Mohanish <br /> Pingale
                </h1>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end border-t border-white/10 pt-12">
                    <div>
                        <p className="font-inter text-xl leading-relaxed text-slate-400 max-w-xl">
                            Full Stack Engineer. I build robust, scalable web applications from database schema to user interface. No shortcuts. Just rigorous, structured code.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <Link href="#projects" className="font-jetbrains text-sm uppercase tracking-widest border border-white/20 px-6 py-3 hover:bg-white/5 hover:border-accent transition-colors">
                                View Architecture
                            </Link>
                            <Link href="#contact" className="font-jetbrains text-sm uppercase tracking-widest bg-accent text-black px-6 py-3 hover:bg-[#ff7733] transition-colors font-bold">
                                Initialize Contact
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 border-l border-white/10 pl-6 lg:pl-12">
                        <div>
                            <span className="block font-jetbrains text-xs text-slate-500 uppercase tracking-widest mb-2">Location</span>
                            <span className="block font-inter font-bold text-lg text-slate-50">Pune, India</span>
                        </div>
                        <div>
                            <span className="block font-jetbrains text-xs text-slate-500 uppercase tracking-widest mb-2">Current Role</span>
                            <span className="block font-inter font-bold text-lg text-slate-50">SDE Intern @ Indux</span>
                        </div>
                        <div className="col-span-2 mt-4 pt-4 border-t border-white/10">
                            <span className="block font-jetbrains text-xs text-slate-500 uppercase tracking-widest mb-2">Primary Stack</span>
                            <span className="block font-inter font-bold text-lg text-slate-50">TypeScript, Next.js, Node.js, MongoDB</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
