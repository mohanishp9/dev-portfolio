"use client";

import { useEffect, useRef, useState } from "react";
import { getLastLatency } from "@/lib/latency";

export default function Telemetry() {
    const timeRef = useRef<HTMLSpanElement>(null);
    const pingRef = useRef<HTMLSpanElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // High frequency clock updater using direct DOM mutation (Zero React re-renders)
        const clockInterval = setInterval(() => {
            if (!timeRef.current) return;
            const now = new Date();
            const hrs = String(now.getHours()).padStart(2, '0');
            const mins = String(now.getMinutes()).padStart(2, '0');
            const secs = String(now.getSeconds()).padStart(2, '0');
            const ms = String(now.getMilliseconds()).padStart(3, '0');
            timeRef.current.textContent = `${hrs}:${mins}:${secs}.${ms}`;
        }, 50);

        // Real latency: listens for the GitGraph API measurement instead of inventing a number
        const onLatency = (e: Event) => {
            if (!pingRef.current) return;
            pingRef.current.textContent = `${(e as CustomEvent).detail}MS`;
        };
        window.addEventListener("portfolio:latency", onLatency);

        return () => {
            clearInterval(clockInterval);
            window.removeEventListener("portfolio:latency", onLatency);
        };
    }, []);

    // If the measurement landed before this HUD mounted, read the cache instead of waiting on the event
    useEffect(() => {
        if (!mounted) return;
        const cached = getLastLatency();
        if (cached !== null && pingRef.current) {
            pingRef.current.textContent = `${cached}MS`;
        }
    }, [mounted]);

    if (!mounted) return null;

    return (
        <div 
            className="fixed bottom-6 right-6 z-50 pointer-events-none flex flex-col items-end gap-1 opacity-70"
            style={{ transform: "translateZ(0)" }}
        >
            <div className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-500">
                SYS_T: <span ref={timeRef} className="text-white">00:00:00.000</span>
            </div>
            <div className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-500">
                LATENCY: <span ref={pingRef} className="text-[#ccff00]">--MS</span>
            </div>
        </div>
    );
}
