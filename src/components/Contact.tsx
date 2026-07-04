"use client";
import { useState, useRef, useEffect, MouseEvent } from "react";
import { DecompileNode } from "./Decompiler";

const contactLinks = [
    { label: "GitHub", href: "https://github.com/mohanishp9" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mohanish-pingale-507339261/" },
    { label: "Resume", href: "/Mohanish_Pingale_FullStack_Developer_Resume.pdf" },
];

const TARGET_EMAIL = "mpingale31@gmail.com";
const HEX_CHARS = "0123456789ABCDEF!@#$%^&*";

export default function Contact() {
    const [isHolding, setIsHolding] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isDecrypted, setIsDecrypted] = useState(false);
    const [displayText, setDisplayText] = useState("");
    
    const requestRef = useRef<number>(0);
    const lastTimeRef = useRef<number>(0);

    // The Decryption Game Loop
    useEffect(() => {
        if (isDecrypted) {
            setDisplayText(TARGET_EMAIL);
            return;
        }

        const loop = (time: number) => {
            const deltaTime = time - lastTimeRef.current;
            lastTimeRef.current = time;

            setProgress(prev => {
                let next = prev;
                if (isHolding) {
                    // Decrypt over ~2.5 seconds (2500ms)
                    next = prev + (deltaTime / 2500) * 100;
                    if (next >= 100) {
                        setIsDecrypted(true);
                        setIsHolding(false);
                        return 100;
                    }
                } else {
                    // Instantly scramble back if let go (decay fast)
                    next = prev - (deltaTime / 200) * 100;
                    if (next < 0) next = 0;
                }
                return next;
            });

            requestRef.current = requestAnimationFrame(loop);
        };

        requestRef.current = requestAnimationFrame((time) => {
            lastTimeRef.current = time;
            loop(time);
        });

        return () => cancelAnimationFrame(requestRef.current);
    }, [isHolding, isDecrypted]);

    // Handle Text Scrambling based on Progress
    useEffect(() => {
        if (isDecrypted) return;

        // How many characters should be locked to the real email?
        const lockCount = Math.floor((progress / 100) * TARGET_EMAIL.length);
        let scrambled = "";
        
        for (let i = 0; i < TARGET_EMAIL.length; i++) {
            if (i < lockCount) {
                scrambled += TARGET_EMAIL[i];
            } else {
                scrambled += HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
            }
        }
        
        // If not interacting and at 0 progress, show generic gibberish to bait them
        if (!isHolding && progress === 0) {
            let pureGibberish = "";
            for (let i = 0; i < TARGET_EMAIL.length; i++) {
                pureGibberish += HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)];
            }
            setDisplayText(pureGibberish);
        } else {
            setDisplayText(scrambled);
        }
    }, [progress, isHolding, isDecrypted]);

    const decompilerData = {
        biometric_engine: {
            status: isDecrypted ? "DECRYPTED" : isHolding ? "SCANNING" : "SECURE",
            decryption_progress: `${Math.round(progress)}%`,
        },
        routing: {
            links_mounted: contactLinks.length,
        }
    };

    return (
        <DecompileNode name="Initialize_Contact" data={decompilerData}>
        <section id="contact" className="border-b border-white/10 px-6 sm:px-12 lg:px-24 py-24 bg-[#09090b]">
            <div className="max-w-7xl">

                <div data-reveal className="flex items-center justify-between border-b border-white/10 pb-6 mb-16">
                    <span className="font-jetbrains text-[0.6rem] uppercase tracking-[0.3em] text-slate-600">
                        Issue 06 &nbsp;/&nbsp; Fin
                    </span>
                    <div data-reveal="line" className="h-[1px] flex-1 mx-8 bg-white/10" />
                    <span className="font-jetbrains text-[0.6rem] uppercase tracking-[0.3em] text-slate-600">
                        End of Issue
                    </span>
                </div>

                <div className="grid lg:grid-cols-[280px_1fr] gap-16 lg:gap-24">
                    <div data-reveal="left">
                        <div
                            className="font-inter font-black text-[8rem] leading-none tracking-tight text-white/5 select-none mb-8"
                            aria-hidden="true"
                        >
                            06
                        </div>
                        <h2 className="font-inter font-black uppercase text-2xl tracking-tight text-slate-50 leading-tight">
                            Initialize<br />Contact
                        </h2>
                    </div>

                    <div data-reveal className="flex flex-col justify-between gap-12">
                        
                        {/* Biometric Decryption Block */}
                        <div 
                            className={`relative w-full rounded-lg overflow-hidden py-16 px-6 border bg-[#040405] flex flex-col items-center justify-center text-center transition-colors duration-300 ${isDecrypted ? 'border-accent shadow-[0_0_50px_rgba(255,85,0,0.1)]' : 'border-red-500/20 shadow-[0_0_30px_rgba(255,0,0,0.05)]'} ${isHolding && !isDecrypted ? 'animate-shake' : ''}`}
                            onMouseDown={() => setIsHolding(true)}
                            onMouseUp={() => setIsHolding(false)}
                            onMouseLeave={() => setIsHolding(false)}
                            onTouchStart={(e) => { e.preventDefault(); setIsHolding(true); }}
                            onTouchEnd={() => setIsHolding(false)}
                            style={{ userSelect: "none", touchAction: "none" }}
                        >
                            {/* Scanning Laser */}
                            {isHolding && !isDecrypted && (
                                <div className="absolute left-0 w-full h-[2px] bg-red-500 shadow-[0_0_20px_red] animate-scan z-10 pointer-events-none" />
                            )}

                            {/* Progress Bar Background */}
                            {!isDecrypted && (
                                <div 
                                    className="absolute bottom-0 left-0 h-1 bg-red-600 transition-all duration-75" 
                                    style={{ width: `${progress}%` }}
                                />
                            )}

                            <p className={`font-jetbrains text-[0.65rem] uppercase tracking-widest mb-6 transition-colors ${isDecrypted ? 'text-accent' : isHolding ? 'text-red-500 animate-pulse' : 'text-slate-600'}`}>
                                {isDecrypted ? "Decryption Successful // Open Channel" : isHolding ? "Decrypting... Do Not Release" : "Hold to Decrypt Intel"}
                            </p>

                            {/* Thumbprint Icon or Fingerprint Visual */}
                            {!isDecrypted && (
                                <div className={`w-20 h-20 mb-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isHolding ? 'border-red-500 scale-95 shadow-[0_0_30px_rgba(255,0,0,0.5)] bg-red-500/10' : 'border-white/10 hover:border-white/30 cursor-pointer'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={isHolding ? "#ef4444" : "#64748b"} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 2a10 10 0 0 0-6.88 2.77M17.48 6.42A10 10 0 0 0 12 2"/>
                                        <path d="M4.68 9.2A10 10 0 0 0 12 22a10 10 0 0 0 9.26-6.17"/>
                                        <path d="M9 13v-1a3 3 0 0 1 6 0v1"/>
                                        <path d="M7 16a5 5 0 0 1 10 0"/>
                                        <path d="M12 18v1"/>
                                        <path d="M12 9v1"/>
                                    </svg>
                                </div>
                            )}

                            {/* The Encrypted / Decrypted Data */}
                            {isDecrypted ? (
                                <a
                                    href={`mailto:${TARGET_EMAIL}`}
                                    className="block font-jetbrains font-bold uppercase tracking-widest text-slate-50 hover:text-accent transition-colors break-all"
                                    style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", lineHeight: 1 }}
                                >
                                    {TARGET_EMAIL}
                                </a>
                            ) : (
                                <div 
                                    className="font-jetbrains font-bold uppercase tracking-widest text-slate-600 break-all pointer-events-none"
                                    style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", lineHeight: 1 }}
                                >
                                    {displayText}
                                </div>
                            )}
                        </div>

                        {/* Divider */}
                        <div data-reveal="line" className="h-[1px] w-full bg-white/10" />

                        {/* Links + tagline row */}
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
                            <div className="flex flex-wrap gap-3">
                                {contactLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-jetbrains text-xs uppercase tracking-widest text-slate-400 border border-white/10 px-6 py-3.5 hover:bg-[#ff5500] hover:text-[#000000] hover:border-[#ff5500] transition-all"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                            <p className="font-inter text-sm text-slate-600 max-w-xs text-right hidden sm:block">
                                Currently exploring full-time roles, internships, or freelance projects in full stack engineering.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .animate-shake {
                    animation: shake 0.1s linear infinite;
                }
                @keyframes shake {
                    0% { transform: translate(0, 0); }
                    25% { transform: translate(2px, -2px); }
                    50% { transform: translate(-2px, 2px); }
                    75% { transform: translate(-2px, -2px); }
                    100% { transform: translate(2px, 2px); }
                }
                .animate-scan {
                    animation: scan 1s linear infinite;
                }
                @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
        </section>
        </DecompileNode>
    );
}
