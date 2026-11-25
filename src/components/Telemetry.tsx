"use client";

import { useEffect, useRef, useState } from "react";
import { getLastLatency } from "@/lib/latency";

export default function Telemetry() {
    const timeRef = useRef<HTMLSpanElement>(null);
    const pingRef = useRef<HTMLSpanElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const clockInterval = setInterval(() => {
            if (!timeRef.current) return;
            const now = new Date();
            const hrs = String(now.getHours()).padStart(2, '0');
            const mins = String(now.getMinutes()).padStart(2, '0');
            const secs = String(now.getSeconds()).padStart(2, '0');
            const ms = String(now.getMilliseconds()).padStart(3, '0');
            timeRef.current.textContent = `${hrs}:${mins}:${secs}.${ms}`;
        }, 50);

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

    useEffect(() => {
        if (!mounted) return;
        const cached = getLastLatency();
        if (cached !== null && pingRef.current) {
            pingRef.current.textContent = `${cached}MS`;
        }
    }, [mounted]);

    if (!mounted) return null;

    return (
        <aside
            aria-label="Telegraph Desk Telemetry"
            className="fixed bottom-4 right-4 z-40 pointer-events-none hidden sm:flex flex-col gap-0.5 border border-[var(--news-rule-strong)] bg-[var(--news-card)] px-3 py-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] font-telegraph text-[0.6rem] text-[var(--news-muted)] uppercase tracking-wider"
            style={{ transform: "translateZ(0)" }}
        >
            <div className="flex items-center justify-between gap-4 border-b border-[var(--news-rule)] pb-0.5 mb-0.5">
                <span className="font-bold text-[var(--news-ink)]">WIRE DESK</span>
                <span className="text-[0.55rem] text-[var(--news-accent)]">NASHIK BUREAU</span>
            </div>
            <div>
                SYS_CLOCK: <span ref={timeRef} className="font-bold text-[var(--news-ink)]">00:00:00.000</span>
            </div>
            <div>
                WIRE_PING: <span ref={pingRef} className="font-bold text-[var(--news-accent)]">--MS</span>
            </div>
        </aside>
    );
}
