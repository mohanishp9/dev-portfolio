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
        <section id="about" className="border-b border-white/10 px-6 sm:px-12 lg:px-24 py-24">
            <div className="max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    <div>
                        <h2 className="font-inter font-black uppercase text-3xl sm:text-5xl tracking-tight text-slate-50 mb-8">
                            System Specifications
                        </h2>
                        <div className="space-y-6 border-l border-white/10 pl-6 lg:pl-8">
                            <p className="font-inter text-lg leading-relaxed text-slate-400">
                                I'm a full stack developer based in Pune. I got into web development because I like
                                making things people can actually use — not just see, but click through, submit forms on,
                                come back to.
                            </p>
                            <p className="font-inter text-lg leading-relaxed text-slate-400">
                                I work mainly with React, Next.js, Node.js, Express, and MongoDB. The part I enjoy most
                                is where frontend and backend have to talk to each other — getting the data flow right,
                                making the UI respond the way it should.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {principles.map((item, index) => (
                            <article
                                key={item.title}
                                className="border border-white/10 p-8 hover:bg-white/5 transition-colors"
                            >
                                <p className="font-jetbrains text-xs uppercase tracking-widest text-slate-500 mb-4">{item.label}</p>
                                <h3 className="mb-3 font-inter font-bold text-xl tracking-tight text-slate-50">
                                    {item.title}
                                </h3>
                                <p className="font-inter text-base leading-relaxed text-slate-400">
                                    {item.body}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
