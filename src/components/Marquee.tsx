const items = [
    "Full Stack Developer — Nashik, India",
    "Open to full-time roles & internships",
    "Stack: React // Next.js // Node // MongoDB",
    "SDE Intern @ Indux Technology",
    "github.com/mohanishp9",
];

const Marquee = () => {
    return (
        <section className="border-y border-white/10 bg-[#ff5500] text-[#000000]">
            <div className="overflow-hidden py-3">
                <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
                    {[...items, ...items, ...items].map((item, index) => (
                        <span key={`${item}-${index}`} className="flex items-center px-8 font-jetbrains text-xs font-bold uppercase tracking-widest text-[#000000]">
                            <span className="w-1.5 h-1.5 bg-[#000000] mr-4" />
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
