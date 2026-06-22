const contactLinks = [
    { label: "GitHub", href: "https://github.com/mohanishp9" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mohanish-pingale-507339261/" },
    { label: "Resume", href: "/Mohanish_Pingale_FullStack_Developer_Resume.pdf" },
];

const Contact = () => {
    return (
        <section id="contact" className="border-b border-white/10 px-6 sm:px-12 lg:px-24 py-24">
            <div className="max-w-7xl">
                <div className="border border-white/10 p-8 sm:p-16 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-accent transition-transform transform -translate-x-full group-hover:translate-x-0" />
                    
                    <div className="mb-12 border-b border-white/10 pb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div>
                            <span className="font-jetbrains text-xs uppercase tracking-widest text-slate-500 mb-4 block">
                                End of Document
                            </span>
                            <h2 className="font-inter font-black uppercase text-4xl sm:text-6xl tracking-tight text-slate-50">
                                Initialize Contact
                            </h2>
                        </div>
                        <p className="font-inter text-lg leading-relaxed text-slate-400 max-w-md">
                            Currently exploring opportunities for full-time roles, internships, or freelance projects in full stack engineering.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
                        <div>
                            <a
                                href="mailto:mpingale31@gmail.com"
                                className="block font-inter font-black uppercase text-[clamp(1.5rem,4vw,3.5rem)] tracking-tight text-slate-50 hover:text-accent transition-colors"
                            >
                                mpingale31@gmail.com
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {contactLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-jetbrains text-xs uppercase tracking-widest text-slate-400 border border-white/10 px-6 py-4 hover:bg-white/5 hover:text-slate-50 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
