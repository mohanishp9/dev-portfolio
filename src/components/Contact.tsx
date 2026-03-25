import { useTickSound } from "@/hooks/useTickSound";

const Contact = () => {
    const { playTick } = useTickSound('/sound/tick.wav');

    const socialClass =
        "text-[0.6rem] tracking-[0.25em] uppercase text-dim transition-colors duration-300 px-6 py-[0.8rem] border border-white/[0.06] hover:text-white hover:border-white/[0.2]";
    return (
        <section
            id="contact"
            className="bg-near-black border-t border-white/[0.05] text-center px-8 py-28 md:px-16 md:py-40"
        >
            <div className="text-[0.6rem] tracking-[0.4em] uppercase text-dim mb-10 reveal-up">
                Let's create something remarkable
            </div>

            <h2 className="font-playfair text-[clamp(48px,8vw,110px)] font-black leading-[0.95] tracking-[-0.03em] mb-12 reveal-up">
                Let's<br />
                <em className="italic text-accent">Talk.</em>
            </h2>
            <div>
                <a
                    href="mailto:mpingale31@gmail.com"
                    className="inline-block font-cormorant text-[clamp(18px,2.5vw,28px)] font-light text-silver no-underline tracking-[0.05em] mb-20 relative transition-colors duration-300 hover:text-white
                    after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[1px] after:bg-silver after:transition-colors after:duration-300 hover:after:bg-white reveal-up"
                >
                    mpingale31@gmail.com
                </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 reveal-up">
                <a href="https://github.com/mohanishp9" className={socialClass} target="_blank" rel="noopener noreferrer"  onMouseEnter={playTick} onClick={playTick}>GitHub</a>
                <a href="https://www.linkedin.com/in/mohanish-pingale-507339261/" className={socialClass} target="_blank" rel="noopener noreferrer"  onMouseEnter={playTick} onClick={playTick}>LinkedIn</a>
                <a href="/Mohanish_Pingale_FullStack_Developer_Resume.pdf" className={socialClass} target="_blank" rel="noopener noreferrer"  onMouseEnter={playTick} onClick={playTick}>Resume ↗</a>
            </div>
        </section>
    );
};

export default Contact;
