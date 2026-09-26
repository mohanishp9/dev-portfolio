"use client";

import { useEffect } from "react";

export function useDeveloperSignature() {
    useEffect(() => {
        // Run only once on the client
        if (typeof window === "undefined") return;

        const isSignaturePrinted = sessionStorage.getItem("dev_signature_printed");
        if (isSignaturePrinted) return;

        console.log(
            "%cMohanish Pingale | Portfolio",
            "font-size: 24px; font-weight: bold; color: #ff5500; text-shadow: 0 0 10px rgba(255,85,0,0.5);"
        );
        
        console.log(
            "%c[SYS] Initializing Main-Thread Zero Architecture...\n[SYS] DOM Content Loaded\n[SYS] Vercel Edge Cache Validated", 
            "color: #00ff00; font-family: monospace;"
        );

        console.log(
            "%cHey there. Looking at the source? You'll notice the heavy canvas effects (like the Oscilloscope) are offloaded to an OffscreenCanvas Web Worker to guarantee 120FPS scroll performance without blocking React's main thread.\n\nLet's build something great together: https://www.linkedin.com/in/mohanish-pingale-507339261/",
            "font-size: 14px; color: #a1a1aa; line-height: 1.6;"
        );

        sessionStorage.setItem("dev_signature_printed", "true");
    }, []);
}
