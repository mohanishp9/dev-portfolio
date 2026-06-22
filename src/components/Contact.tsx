const contactLinks = [
    { label: "GitHub", href: "https://github.com/mohanishp9" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mohanish-pingale-507339261/" },
    { label: "Resume", href: "/Mohanish_Pingale_FullStack_Developer_Resume.pdf" },
];

const Contact = () => {
    return (
        <section id="contact" className="section-shell pb-[clamp(5rem,9vw,7rem)]">
            <div className="contact-card reveal reveal-up overflow-hidden rounded-[2.2rem] p-8 sm:p-12">
                <div className="mb-10 flex flex-col gap-6 border-b border-white/8 pb-8 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <div className="eyebrow mb-5">Contact</div>
                        <h2 className="section-title max-w-[10ch]">
                            Let's talk
                        </h2>
                    </div>
                    <p className="section-copy max-w-[31rem]">
                        I'm looking for full-time roles, internships, or freelance projects in full stack or
                        frontend development. If something here caught your eye, I'd like to hear about it.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div className="space-y-6">
                        <a
                            href="mailto:mpingale31@gmail.com"
                            className="inline-block font-playfair text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.04em] text-[var(--paper)] no-underline transition-opacity duration-300 hover:opacity-80"
                            data-hover
                        >
                            mpingale31@gmail.com
                        </a>
                        <p className="font-cormorant text-[1.18rem] leading-[1.65] text-[var(--mist)]">
                            Available for internships, freelance collaboration, and full-time full stack roles.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                data-hover
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
