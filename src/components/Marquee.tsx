import React from 'react';

const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "TypeScript",
    "Tailwind",
    "Bootstrap",
    "React",
    "NextJS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Docker",
    "HTTP",
    "REST API",
    "Git",
    "Postman",
];

const Marquee = () => {
    return (
        <section
            className="
                border-y border-white/10
                py-5
                overflow-hidden
                bg-white/[0.02]
            "
        >
            <div
                className="
                    flex whitespace-nowrap
                    animate-marquee
                "
            >
                {[...skills, ...skills].map((skill, i) => (
                    <span
                        key={i}
                        className="
                            inline-flex items-center
                            px-8
                            text-[0.6rem]
                            tracking-[0.3em]
                            uppercase
                            text-dim
                        "
                    >
                        <span className="text-silver text-xl mr-4">·</span>
                            {skill}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Marquee;
