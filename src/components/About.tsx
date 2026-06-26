const principles = [
    {
        label: "Approach",
        title: "End to end, not just one layer",
        body: "I like touching every part of a feature — from the database schema to the button someone clicks. That's where the interesting problems are.",
    },
    {
        label: "What I care about",
        title: "Things that work, not just look good",
        body: "A polished UI means nothing if the data is wrong or the API is slow. I try to make both sides solid — the interface and the logic behind it.",
    },
];

const About = () => {
    return (
        <section id="about" className="border-b border-white/10 px-6 sm:px-12 lg:px-24 py-24 overflow-hidden">
            <div className="max-w-7xl">

                {/* Issue header */}
                <div data-reveal className="flex items-center justify-between border-b border-white/10 pb-6 mb-16">
                    <span className="font-jetbrains text-[0.6rem] uppercase tracking-[0.3em] text-slate-600">
                        Issue 02 &nbsp;/&nbsp; Profile
                    </span>
                    <div data-reveal="line" className="h-[1px] flex-1 mx-8 bg-white/10" />
                    <span className="font-playfair italic text-3xl tracking-tight text-slate-400">
                        The Engineer
                    </span>
                </div>

                {/* Two-column editorial spread */}
                <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">

                    {/* Left — masthead column */}
                    <div data-reveal="left" className="relative z-10 pt-8">
                        <div
                            className="font-inter font-black text-[8rem] leading-none tracking-tight text-white/5 select-none mb-8"
                            aria-hidden="true"
                        >
                            02
                        </div>
                        <h2 className="font-playfair italic uppercase text-3xl tracking-tight text-slate-50 mb-6 leading-tight">
                            About<br />The Engineer
                        </h2>
                        {/* Quick spec table */}
                        <div className="border-t border-white/10">
                            {[
                                { k: "Based", v: "Pune, India" },
                                { k: "Focus", v: "Full Stack" },
                                { k: "Status", v: "SDE Intern" },
                            ].map((row) => (
                                <div key={row.k} className="flex justify-between border-b border-white/10 py-3">
                                    <span className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-600">{row.k}</span>
                                    <span className="font-inter text-sm text-slate-300">{row.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — editorial prose */}
                    <div data-reveal>
                        <div 
                            className="mb-16 text-slate-300 font-playfair sm:columns-2 gap-12"
                            style={{ columnRule: "1px solid rgba(255,255,255,0.1)" }}
                        >
                            <p className="text-xl leading-relaxed mb-6 break-inside-avoid">
                                I'm a full stack developer based in Pune. I got into web
                                development because I like making things people can actually use —
                                not just see, but click through, submit forms on, come back to.
                            </p>
                            <p className="text-lg leading-relaxed break-inside-avoid">
                                I work mainly with React, Next.js, Node.js, Express, and MongoDB.
                                The part I enjoy most is where frontend and backend have to talk
                                to each other — getting the data flow right, making the UI respond
                                the way it should.
                            </p>
                        </div>

                        {/* Principles — no cards, just editorial text blocks */}
                        <div className="border-t border-white/10 pt-8 grid sm:grid-cols-2 gap-12">
                            {principles.map((item, i) => (
                                <article
                                    key={item.title}
                                    data-stagger={String(i + 1)}
                                    className="flex flex-col"
                                >
                                    <p className="font-jetbrains text-[0.6rem] uppercase tracking-[0.28em] text-accent mb-3">
                                        {item.label}
                                    </p>
                                    <h3 className="font-playfair italic text-2xl tracking-tight text-slate-50 mb-3 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="font-inter text-sm leading-relaxed text-slate-400">
                                        {item.body}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
