"use client";

export default function Footer() {
    return (
        <footer className="px-4 sm:px-8 lg:px-12 py-10 bg-[var(--news-bg)] font-telegraph text-[0.68rem] text-[var(--news-muted)] uppercase tracking-wider">
            {/* Top Oxford Rule */}
            <div className="oxford-rule mb-6" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div>
                    <span className="font-headline font-black text-base text-[var(--news-ink)] block mb-1">
                        THE PINGALE CHRONICLE
                    </span>
                    <p className="font-editorial normal-case text-xs text-[var(--news-muted)]">
                        Printed and published by Mohanish Pingale at the Nashik Bureau, Maharashtra, India.
                    </p>
                </div>

                <div className="space-y-1">
                    <div>&copy; ANNO DOMINI 2026 MOHANISH PINGALE &bull; ALL RIGHTS RESERVED</div>
                    <div className="font-editorial italic normal-case text-xs">
                        Typeset in Next.js, React &amp; Tailwind CSS &bull; Hosted on Vercel Cloud Infrastructure
                    </div>
                </div>

                <div className="border border-[var(--news-rule)] p-2 bg-[var(--news-card)] text-[0.6rem] text-[var(--news-muted)]">
                    PLEASE RECYCLE THIS BROADSHEET OR SHARE WITH A COLLEAGUE
                </div>
            </div>
        </footer>
    );
}
