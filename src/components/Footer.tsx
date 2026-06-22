const Footer = () => {
    return (
        <footer className="mx-auto flex w-[min(100%,var(--page-max))] flex-col justify-between gap-4 px-[var(--section-pad-x)] pb-10 pt-2 text-center sm:flex-row sm:text-left">
            <div className="text-[0.6rem] uppercase tracking-[0.22em] text-[var(--metal)]">
                Copyright 2026 Mohanish Pingale
            </div>
            <div className="font-cormorant text-[1rem] italic text-[var(--mist)]">
                Built with Next.js and Tailwind
            </div>
        </footer>
    );
};

export default Footer;
