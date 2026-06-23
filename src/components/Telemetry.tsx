"use client";

import { useEffect, useState } from "react";

export default function Telemetry() {
    const [time, setTime] = useState("");
    const [ping, setPing] = useState(14);

    useEffect(() => {
        // High frequency clock updater
        const interval = setInterval(() => {
            const now = new Date();
            const hrs = String(now.getHours()).padStart(2, '0');
            const mins = String(now.getMinutes()).padStart(2, '0');
            const secs = String(now.getSeconds()).padStart(2, '0');
            const ms = String(now.getMilliseconds()).padStart(3, '0');
            setTime(`${hrs}:${mins}:${secs}.${ms}`);
        }, 47); // Update every ~47ms to look continuous but not overkill

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Random ping fluctuation
        const pingInterval = setInterval(() => {
            setPing((prev) => {
                const fluctuate = Math.floor(Math.random() * 5) - 2; // -2 to +2
                let next = prev + fluctuate;
                if (next < 8) next = 8;
                if (next > 35) next = 35;
                return next;
            });
        }, 800);

        return () => clearInterval(pingInterval);
    }, []);

    // Prevent hydration mismatch by returning null until mounted
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="fixed bottom-6 right-6 sm:right-12 z-50 pointer-events-none flex flex-col items-end gap-1 opacity-90 drop-shadow-md">
            <div className="font-jetbrains text-[0.65rem] font-bold uppercase tracking-widest text-black/60">
                SYS_T: <span className="text-black">{time}</span>
            </div>
            <div className="font-jetbrains text-[0.65rem] font-bold uppercase tracking-widest text-black/60">
                LATENCY: <span className="text-black">{ping}MS</span>
            </div>
        </div>
    );
}
