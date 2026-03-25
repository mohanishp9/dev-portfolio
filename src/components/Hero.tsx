import Link from "next/link";
import { useTickSound } from "@/hooks/useTickSound";

const Hero = () => {
    const { playTick } = useTickSound('/sound/tick.wav');

    return (
        <section
            className="
                min-h-screen
                flex flex-col justify-end
                px-16 pb-24 pt-32
                relative overflow-hidden
            "
        >
            <div className="hero-bg-text">DEV</div>

            <div
                className="
                    text-[0.7rem] uppercase tracking-[0.4em] text-silver mb-8
                    opacity-0 animate-fade-up [animate-delay:0.3s]
                "
            >
                Full Stack Developer · Based in India
            </div>

            <h1
                className="
                    font-playfair font-black leading-[0.9]
                    tracking-[-0.03em] mb-2
                    text-[clamp(56px,9vw,130px)]
                    opacity-0 animate-fade-up [animation-delay:0.5s]
                "
            >
                Mohanish <br />
                <span className="italic text-accent">Pingale</span>
            </h1>
            {/* Role tagline */}
            <p
                className="
                    font-cormorant font-[300] italic text-silver
                    text-[clamp(20px,3vw,40px)] tracking-[0.02em] mb-16
                    opacity-0 animate-fade-up [animation-delay:0.7s]
                "
            >
                Architecting digital experiences at scale
            </p>

            {/* Bottom row: bio + CTAs */}
            <div
                className="
                    flex justify-between items-end
                    opacity-0 animate-fade-up [animation-delay:0.9s]
                "
            >
                <p className="
                    max-w-[380px]
                    font-cormorant
                    text-[1.10rem]
                    leading-[1.7]
                    text-silver
                    font-[300]
                    tracking-[0.02em]
                    ">
                    I craft robust systems and elegant interfaces bridging the gap between complex engineering and seamless user experience with full-stack mastery.
                </p>

                <div className="flex flex-col items-end gap-6">
                    <Link href="#projects" className="btn-primary">
                        <span
                            onMouseEnter={playTick}
                            onClick={playTick}
                        >View My Work</span>
                    </Link>
                    <Link href="#contact" className="btn-ghost">
                        <span
                            onMouseEnter={playTick}
                            onClick={playTick}
                        >Get In Touch</span>
                    </Link>
                </div>
            </div>

            {/* Scroll indicator (bottom right) */}
            <div
                className="
                    absolute right-16 bottom-25
                    flex items-center gap-4
                    text-[0.55rem] uppercase tracking-[0.3em] text-dim
                    opacity-0 animate-fade-in [animation-delay:1.5s]
                "
                style={{ writingMode: "vertical-rl" }}
            >
                <div className="hero-scroll-line" />
                Scroll
            </div>
        </section>
    );
};

export default Hero;
