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
        <section id="about" className="section-shell">


            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className="space-y-8">
                    <div className="reveal reveal-left">
                        <h2 className="section-title max-w-[14ch]">
                            I build things
                            <br />I'd want to use.
                        </h2>
                    </div>

                    <div className="reveal reveal-left space-y-6">
                        <p className="section-copy">
                            I'm a full stack developer based in Pune. I got into web development because I like
                            making things people can actually use — not just see, but click through, submit forms on,
                            come back to.
                        </p>
                        <p className="section-copy">
                            I work mainly with React, Next.js, Node.js, Express, and MongoDB. The part I enjoy most
                            is where frontend and backend have to talk to each other — getting the data flow right,
                            making the UI respond the way it should.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {principles.map((item, index) => (
                            <article
                                key={item.title}
                                className="about-bio-card reveal reveal-up rounded-[1.5rem] p-6"
                                data-reveal-delay={index * 100}
                            >
                                <p className="micro-label mb-4">{item.label}</p>
                                <h3 className="mb-3 font-playfair text-[1.55rem] font-semibold tracking-[-0.03em] text-[var(--paper)]">
                                    {item.title}
                                </h3>
                                <p className="font-cormorant text-[1.12rem] leading-[1.65] text-[var(--mist)]">
                                    {item.body}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="reveal reveal-right space-y-6">
                    <div>
                        <p className="micro-label mb-3">Quick look</p>
                        <p className="max-w-[24rem] font-cormorant text-[1.18rem] leading-[1.55] text-[var(--mist)]">
                            Interning @ Indux Technology. Building multi-tenant ecommerce.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="metric-card rounded-[1.25rem]">
                            <span className="metric-value">5+</span>
                            <span className="micro-label">Projects on GitHub</span>
                        </div>
                        <div className="metric-card rounded-[1.25rem]">
                            <span className="metric-value">1+</span>
                            <span className="micro-label">Year building for the web</span>
                      </div>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default About;
