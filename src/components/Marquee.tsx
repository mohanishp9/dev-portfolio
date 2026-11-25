"use client";

const items = [
    "FULL STACK DEVELOPER — NASHIK, INDIA",
    "OPEN FOR IMMEDIATE FULL-TIME ROLES & INTERNSHIPS",
    "CORE STACK: REACT // NEXT.JS // NODE.JS // MONGODB",
    "SDE INTERN AT INDUX TECHNOLOGY",
    "OFFICIAL REPOSITORY: GITHUB.COM/MOHANISHP9",
    "HIGH RELIABILITY IN PRODUCTION WEB ARCHITECTURES",
];

export default function Marquee() {
    return (
        <section
            aria-label="Latest Telegraphic Dispatches"
            className="w-full overflow-hidden border-y-2 border-[var(--news-ink)] bg-[var(--news-card)] py-2.5 relative select-none"
        >
            <div className="flex items-center">
                {/* Fixed Wire Desk Label */}
                <div className="hidden sm:flex items-center gap-2 bg-[var(--news-ink)] text-[var(--news-bg)] px-4 py-1 shrink-0 font-telegraph text-[0.65rem] font-bold uppercase tracking-[0.22em] z-10 border-r border-[var(--news-ink)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--news-accent)] animate-ping" />
                    <span>STOP PRESS // WIRE DESK</span>
                </div>

                {/* Infinite Marquee Runner */}
                <div
                    className="flex shrink-0 items-center gap-8 whitespace-nowrap font-telegraph text-xs tracking-[0.2em] font-semibold uppercase text-[var(--news-ink)]"
                    style={{ animation: "marquee 32s linear infinite" }}
                >
                    {[...items, ...items, ...items].map((item, i) => (
                        <span key={i} className="flex items-center gap-6">
                            <span>{item}</span>
                            <span className="text-[var(--news-accent)] font-black text-sm">&#x2022; STOP &#x2022;</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
