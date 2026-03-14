const About = () => {
    return (
        <section id="about" className="relative py-32 px-16">
            <div className="flex items-center gap-6 mb-20 text-[0.70rem] tracking-[0.4em] uppercase text-[var(--dim)]">
                <span className="text-[0.7rem] italic font-[Playfair_Display] text-[var(--silver)]">
                    01
                </span>
                About
                <span className="flex-1 h-px bg-white/10 max-w-[200px]" />
            </div>

            <div className="grid grid-cols-2 gap-24 items-start max-[900px]:grid-cols-1">
                <div>
                    <h2
                        className="
                            font-playfair
                            text-[clamp(36px,4vw,60px)]
                            font-bold
                            leading-[1.1]
                            tracking-[-0.02em]
                            mb-12
                            reveal-left
                        "
                    >
                        Code is my <br />
                        <em className="italic text-accent">craft,</em> systems <br />
                        my canvas.
                    </h2>
                    <p className="about-text reveal-left">
                        I am a full-stack developer with deep expertise in designing and building production grade applications. My work spans from database architecture to pixel-perfect interfaces, always with a focus on performance, maintainability, and user experience.
                    </p>

                    <p className="about-text reveal-left">
                        I believe great software is indistinguishable from great design where technical precision meets aesthetic clarity. When not shipping features, I contribute to open source and mentor the next generation of engineers.
                    </p>
                    <div className="grid grid-cols-2 gap-[2px] mt-16 reveal-left">
                        <div className="p-8 border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:bg-white/[0.05]">
                            <div className="font-playfair text-[3.5rem] font-black italic leading-none mb-[0.4rem] text-white"> 2+ </div>
                            <div className="text-[0.65rem] tracking-[0.25em] uppercase text-dim"> Year Coding Journey </div>
                        </div>
                        <div className="p-8 border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:bg-white/[0.05]">
                            <div className="font-playfair text-[3.5rem] font-black italic leading-none mb-[0.4rem] text-white"> 5+ </div>
                            <div className="text-[0.65rem] tracking-[0.25em] uppercase text-dim"> Personal Projects Built </div>
                        </div>
                        <div className="p-8 border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:bg-white/[0.05]">
                            <div className="font-playfair text-[3.5rem] font-black italic leading-none mb-[0.4rem] text-white"> 5+ </div>
                            <div className="text-[0.65rem] tracking-[0.25em] uppercase text-dim"> Technologies Mastered </div>
                        </div>
                        <div className="p-8 border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:bg-white/[0.05]">
                            <div className="font-playfair text-[3.5rem] font-black italic leading-none mb-[0.4rem] text-white"> 100% </div>
                            <div className="text-[0.65rem] tracking-[0.25em] uppercase text-dim"> Ready to Build for You </div>
                        </div>
                    </div>
                </div>
                <div className="relative reveal-right">
                    <div className="about-portrait">
                        <div className="about-portrait-inner">MP</div>
                        <span className="portrait-tag">India</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
