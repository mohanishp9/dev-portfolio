"use client";

export default function HeroName() {
    return (
        <div className="w-full text-center py-2 select-none">
            {/* The Monumental Broadsheet Masthead */}
            <h1 className="font-masthead font-black tracking-tight uppercase text-[clamp(2.75rem,8.5vw,7.5rem)] leading-[0.88] text-[var(--news-ink)]">
                The Pingale Chronicle
            </h1>
            <p className="mt-2 font-editorial italic text-sm sm:text-base md:text-lg text-[var(--news-muted)] tracking-wide">
                An Independent Journal of Full-Stack Architecture, Distributed Systems &amp; Software Craftsmanship
            </p>
        </div>
    );
}
