const Footer = () => {
    return (
        <footer className="mx-auto flex w-[min(100%,var(--page-max))] flex-col justify-between gap-4 px-[var(--section-pad-x)] pb-10 pt-2 text-center sm:flex-row sm:text-left">
            <div className="text-[0.6rem] uppercase tracking-[0.22em] text-[slate-500]">
                Copyright 2026 Mohanish Pingale
            </div>
            <div className="font-inter text-[1rem] italic text-[slate-400]">
                Built with Next.js and Tailwind
            </div>
        </footer>
    );
};

export default Footer;
