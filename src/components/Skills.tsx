const Skills = () => {
    return (
        <section id="skills" className="relative py-32 px-16 bg-white/[0.01] border-t border-b border-white/5">
            <div className="flex items-center gap-6 mb-20 text-[0.70rem] tracking-[0.4em] uppercase text-[var(--dim)]">
                <span className="text-[0.7rem] italic font-[Playfair_Display] text-[var(--silver)]">
                    02
                </span>
                Skills & Stack
                <span className="flex-1 h-px bg-white/10 max-w-[200px]" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-white/10">
                <div className="skill-category reveal-scale">
                    <span className="text-2xl mb-6 block">⬡</span>
                    <div className="font-playfair text-[1.3rem] font-bold mb-[0.3rem]">Frontend</div>
                    <div className="text-[0.55rem] tracking-[0.2em] uppercase text-dim mb-8">Interface Engineering</div>
                    <div className="flex flex-wrap gap-2">
                        <span className="skill-tag">React</span>
                        <span className="skill-tag">Next.js</span>
                        <span className="skill-tag">Javascript</span>
                        <span className="skill-tag">Typescript</span>
                        <span className="skill-tag">Redux</span>
                        <span className="skill-tag">Tailwind</span>
                        <span className="skill-tag">Bootstrap</span>
                    </div>
                </div>
                <div className="skill-category reveal-scale">
                    <span className="text-2xl mb-6 block">⬡</span>
                    <div className="font-playfair text-[1.3rem] font-bold mb-[0.3rem]">Backend</div>
                    <div className="text-[0.55rem] tracking-[0.2em] uppercase text-dim mb-8">Server & API Architecture</div>
                    <div className="flex flex-wrap gap-2">
                        <span className="skill-tag">Node.js</span>
                        <span className="skill-tag">Express.js</span>
                        <span className="skill-tag">REST APIs</span>
                        <span className="skill-tag">Json Web Token</span>
                    </div>
                </div>
                <div className="skill-category reveal-scale">
                    <span className="text-2xl mb-6 block">⬡</span>
                    <div className="font-playfair text-[1.3rem] font-bold mb-[0.3rem]">Data</div>
                    <div className="text-[0.55rem] tracking-[0.2em] uppercase text-dim mb-8">Databases & Storage</div>
                    <div className="flex flex-wrap gap-2">
                        <span className="skill-tag">MongoDB</span>
                        <span className="skill-tag">MongoDB Atlas</span>
                        <span className="skill-tag">Mongoose ODM</span>
                        <span className="skill-tag">MongoDB queries</span>
                    </div>
                </div>
                <div className="skill-category reveal-scale">
                    <span className="text-2xl mb-6 block">⬡</span>
                    <div className="font-playfair text-[1.3rem] font-bold mb-[0.3rem]">DevOps</div>
                    <div className="text-[0.55rem] tracking-[0.2em] uppercase text-dim mb-8">Cloud & Infrastructure</div>
                    <div className="flex flex-wrap gap-2">
                        <span className="skill-tag">Docker</span>
                        <span className="skill-tag">CI/CD</span>
                    </div>
                </div>
                <div className="skill-category reveal-scale">
                    <span className="text-2xl mb-6 block">⬡</span>
                    <div className="font-playfair text-[1.3rem] font-bold mb-[0.3rem]">Testing</div>
                    <div className="text-[0.55rem] tracking-[0.2em] uppercase text-dim mb-8">Quality & Reliability</div>
                    <div className="flex flex-wrap gap-2">
                        <span className="skill-tag">Jest</span>
                        <span className="skill-tag">Load Testing</span>
                    </div>
                </div>
                <div className="skill-category reveal-scale">
                    <span className="text-2xl mb-6 block">⬡</span>
                    <div className="font-playfair text-[1.3rem] font-bold mb-[0.3rem]">Other</div>
                    <div className="text-[0.55rem] tracking-[0.2em] uppercase text-dim mb-8">Tooling & Practices</div>
                    <div className="flex flex-wrap gap-2">
                        <span className="skill-tag">Git</span>
                        <span className="skill-tag">GitHub</span>
                        <span className="skill-tag">Postman</span>
                        <span className="skill-tag">Figma</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
