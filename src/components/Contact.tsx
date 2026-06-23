const contactLinks = [
    { label: "GitHub", href: "https://github.com/mohanishp9" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mohanish-pingale-507339261/" },
    { label: "Resume", href: "/Mohanish_Pingale_FullStack_Developer_Resume.pdf" },
];

const Contact = () => {
    return (
        <section id="contact" className="border-b border-white/10 px-6 sm:px-12 lg:px-24 py-24">
            <div className="max-w-7xl">

                {/* Issue header — colophon style */}
                <div data-reveal className="flex items-center justify-between border-b border-white/10 pb-6 mb-16">
                    <span className="font-jetbrains text-[0.6rem] uppercase tracking-[0.3em] text-slate-600">
                        Issue 06 &nbsp;/&nbsp; Fin
                    </span>
                    <div data-reveal="line" className="h-[1px] flex-1 mx-8 bg-white/10" />
                    <span className="font-jetbrains text-[0.6rem] uppercase tracking-[0.3em] text-slate-600">
                        End of Issue
                    </span>
                </div>

                {/* Colophon body */}
                <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">
                    <div data-reveal="left">
                        <div
                            className="font-inter font-black text-[8rem] leading-none tracking-tight text-white/5 select-none mb-8"
                            aria-hidden="true"
                        >
                            06
                        </div>
                        <h2 className="font-inter font-black uppercase text-2xl tracking-tight text-slate-50 leading-tight">
                            Initialize<br />Contact
                        </h2>
                    </div>

                    <div data-reveal className="flex flex-col justify-between gap-12">
                        {/* Big email */}
                        <div>
                            <p className="font-jetbrains text-xs uppercase tracking-widest text-slate-600 mb-5">
                                Primary channel
                            </p>
                            <a
                                href="mailto:mpingale31@gmail.com"
                                className="block font-inter font-black uppercase tracking-tight text-slate-50 hover:text-accent transition-colors"
                                style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)", lineHeight: 1 }}
                            >
                                mpingale31<br />@gmail.com
                            </a>
                        </div>

                        {/* Divider */}
                        <div data-reveal="line" className="h-[1px] w-full bg-white/10" />

                        {/* Links + tagline row */}
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
                            <div className="flex flex-wrap gap-3">
                                {contactLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-jetbrains text-xs uppercase tracking-widest text-slate-400 border border-white/10 px-6 py-3.5 hover:bg-[#ff5500] hover:text-[#000000] hover:border-[#ff5500] transition-all"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                            <p className="font-inter text-sm text-slate-600 max-w-xs text-right hidden sm:block">
                                Currently exploring full-time roles, internships, or freelance projects in full stack engineering.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
