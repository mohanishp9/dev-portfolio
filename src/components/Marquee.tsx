const items = [
    "Design systems with taste",
    "Interfaces tuned for motion",
    "Backend foundations that hold",
    "Case-study thinking with build speed",
    "Accessible, responsive product craft",
];

const Marquee = () => {
    return (
        <section className="border-y border-[var(--line)] bg-white/[0.02]">
            <div className="mx-auto w-[min(100%,var(--page-max))] overflow-hidden px-[var(--section-pad-x)] py-5">
                <div className="ticker-track">
                    {[...items, ...items].map((item, index) => (
                        <span key={`${item}-${index}`} className="ticker-item">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Marquee;
