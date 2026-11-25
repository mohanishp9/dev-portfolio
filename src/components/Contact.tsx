"use client";
import { useState } from "react";
import { DecompileNode } from "./Decompiler";

const contactLinks = [
    { label: "Official GitHub Ledger", href: "https://github.com/mohanishp9" },
    { label: "LinkedIn Professional Record", href: "https://www.linkedin.com/in/mohanish-pingale-507339261/" },
    { label: "Curriculum Vitae / Dossier (PDF)", href: "/Mohanish_Pingale_FullStack_Developer_Resume.pdf" },
];

const TARGET_EMAIL = "mpingale31@gmail.com";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(TARGET_EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    const decompilerData = {
        telegraph_office: {
            destination: TARGET_EMAIL,
            station: "Nashik Bureau",
            protocol: "Direct Mail & Cablegram Transmission"
        }
    };

    return (
        <DecompileNode name="Contact_Classifieds" data={decompilerData}>
            <section id="contact" className="border-b-2 border-[var(--news-rule-strong)] px-4 sm:px-8 lg:px-12 py-16">
                {/* Section Folio Header */}
                <div data-reveal className="flex items-center justify-between border-b border-[var(--news-rule-strong)] pb-3 mb-10 font-telegraph text-[0.68rem] uppercase tracking-[0.22em] text-[var(--news-muted)]">
                    <span className="font-bold text-[var(--news-ink)]">
                        PAGE V &bull; THE CLASSIFIEDS &bull; IMPERIAL TELEGRAPH OFFICE
                    </span>
                    <span className="font-headline italic text-sm text-[var(--news-ink)] normal-case">
                        Commercial Notices &amp; Cable Dispatches
                    </span>
                    <span className="hidden sm:inline">FINAL FOLIO</span>
                </div>

                <div className="grid lg:grid-cols-12 gap-10">
                    {/* Left Column (4 cols): Sticky Header & Situations Wanted Notice */}
                    <div data-reveal="left" className="lg:col-span-4 lg:sticky lg:top-28 self-start">
                        <div className="font-headline font-black text-6xl text-[var(--news-ink)] leading-none mb-2">
                            SECTION V.
                        </div>
                        <h2 className="font-headline uppercase text-2xl sm:text-3xl tracking-tight text-[var(--news-ink)] mb-4 font-bold">
                            The Classifieds
                        </h2>
                        <p className="font-editorial text-sm leading-relaxed text-[var(--news-muted)] mb-6">
                            For urgent dispatches, prospective technical leadership opportunities, and full-time software engineering engagements.
                        </p>

                        {/* Classified Ad Box */}
                        <div className="border-2 border-dashed border-[var(--news-rule-strong)] p-5 bg-[var(--news-card)]">
                            <span className="font-telegraph text-[0.6rem] uppercase tracking-[0.25em] text-[var(--news-accent)] font-bold block mb-1">
                                CLASSIFIED ADVERTISEMENT // NO. 88
                            </span>
                            <h3 className="font-headline font-bold text-base uppercase tracking-wider text-[var(--news-ink)] mb-2 border-b border-[var(--news-rule)] pb-1">
                                Situations Wanted: Full Stack Eng.
                            </h3>
                            <p className="font-editorial text-xs leading-relaxed text-[var(--news-ink)] justified-text mb-4">
                                Diligent developer with proven production experience across React, Next.js, Node.js, and MongoDB seeks ambitious engineering teams. Available for immediate appointment. Dispatches answered with utmost promptness.
                            </p>
                            <div className="text-center border-t border-[var(--news-rule)] pt-2 font-telegraph text-[0.6rem] text-[var(--news-muted)] uppercase tracking-wider">
                                APPLY VIA CABLE BELOW
                            </div>
                        </div>
                    </div>

                    {/* Right Column (8 cols): The Vintage Cablegram Form */}
                    <div data-reveal className="lg:col-span-8 lg:border-l lg:border-[var(--news-rule)] lg:pl-10">
                        {/* Authentic Western Union / Imperial Cablegram Frame */}
                        <div className="border-2 border-[var(--news-rule-strong)] bg-[var(--news-card)] p-6 sm:p-10 relative mb-10 shadow-sm">
                            {/* Top Cablegram Header Strip */}
                            <div className="flex flex-wrap items-center justify-between border-b-2 border-[var(--news-rule-strong)] pb-4 mb-6 gap-3">
                                <div>
                                    <span className="font-telegraph text-[0.62rem] uppercase tracking-[0.25em] text-[var(--news-muted)] block">
                                        IMPERIAL POSTAL TELEGRAPH SERVICE
                                    </span>
                                    <h4 className="font-headline font-black text-2xl uppercase tracking-widest text-[var(--news-ink)]">
                                        Official Cablegram
                                    </h4>
                                </div>
                                <div className="border border-[var(--news-accent)] px-3 py-1 font-telegraph text-[0.65rem] font-bold text-[var(--news-accent)] uppercase tracking-wider">
                                    ★ DIRECT WIRE TRANSMISSION ★
                                </div>
                            </div>

                            {/* Cable Form Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-[var(--news-rule)] mb-8 font-telegraph text-xs">
                                <div>
                                    <span className="text-[var(--news-muted)] text-[0.65rem] uppercase block">ORIGIN STATION:</span>
                                    <span className="font-bold text-[var(--news-ink)]">NASHIK CENTRAL TELEGRAPH BUREAU</span>
                                </div>
                                <div>
                                    <span className="text-[var(--news-muted)] text-[0.65rem] uppercase block">DELIVERY CLASS:</span>
                                    <span className="font-bold text-[var(--news-accent)]">PRIORITY DISPATCH // NO CHARGE</span>
                                </div>
                            </div>

                            {/* Center Destination Box */}
                            <div className="text-center py-6 sm:py-8 border border-[var(--news-rule)] bg-[var(--news-bg)] mb-8">
                                <span className="font-telegraph text-[0.65rem] uppercase tracking-[0.25em] text-[var(--news-muted)] block mb-2">
                                    RECIPIENT ELECTRONIC MAIL ADDRESS
                                </span>
                                <a
                                    href={`mailto:${TARGET_EMAIL}`}
                                    className="font-headline font-black text-2xl sm:text-4xl text-[var(--news-ink)] hover:text-[var(--news-accent)] transition-colors break-all underline decoration-1 underline-offset-8"
                                >
                                    {TARGET_EMAIL}
                                </a>
                            </div>

                            {/* Interaction Actions */}
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href={`mailto:${TARGET_EMAIL}`}
                                        className="font-telegraph text-xs font-bold uppercase tracking-[0.2em] bg-[var(--news-ink)] text-[var(--news-bg)] px-6 py-3 hover:bg-[var(--news-accent)] transition-colors inline-flex items-center gap-2"
                                    >
                                        <span>Dispatch Email Message</span>
                                        <span>&#9993;</span>
                                    </a>
                                    <button
                                        onClick={handleCopy}
                                        type="button"
                                        className="font-telegraph text-xs font-bold uppercase tracking-[0.2em] border border-[var(--news-ink)] text-[var(--news-ink)] px-6 py-3 hover:bg-[var(--news-ink)] hover:text-[var(--news-bg)] transition-colors cursor-pointer"
                                    >
                                        {copied ? "★ ADDRESS COPIED TO CLIPBOARD ★" : "Copy Address to Clipboard"}
                                    </button>
                                </div>
                                <span className="font-editorial italic text-xs text-[var(--news-muted)]">
                                    Direct transmission to Mohanish Pingale
                                </span>
                            </div>
                        </div>

                        {/* Social & Curriculum Vitae Dossier Row */}
                        <div className="pt-6 border-t border-[var(--news-rule-strong)]">
                            <span className="font-telegraph text-[0.62rem] uppercase tracking-[0.22em] text-[var(--news-muted)] block mb-4">
                                OFFICIAL ARCHIVAL LINKS &amp; DOCUMENTS:
                            </span>
                            <div className="flex flex-wrap gap-4">
                                {contactLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-telegraph text-xs font-bold uppercase tracking-wider border border-[var(--news-rule)] bg-[var(--news-card)] px-4 py-2.5 text-[var(--news-ink)] hover:border-[var(--news-ink)] hover:bg-[var(--news-ink)] hover:text-[var(--news-bg)] transition-all inline-flex items-center gap-1.5"
                                    >
                                        <span>{link.label}</span>
                                        <span>&#x2197;</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </DecompileNode>
    );
}
