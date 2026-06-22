const items = [
    "System Status: Nominal",
    "Deployment: Localhost",
    "Current Stack: React // Next.js // Node",
    "Active Environment: Production",
    "Open for Connections: Port 8080",
];

const Marquee = () => {
    return (
        <section className="border-y border-white/10 bg-accent text-zinc-950">
            <div className="overflow-hidden py-3">
                <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
                    {[...items, ...items, ...items].map((item, index) => (
                        <span key={`${item}-${index}`} className="flex items-center px-8 font-jetbrains text-xs font-bold uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 bg-zinc-950 mr-4" />
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
