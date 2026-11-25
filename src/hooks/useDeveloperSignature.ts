"use client";

import { useEffect } from "react";

export function useDeveloperSignature() {
    useEffect(() => {
        if (typeof window === "undefined") return;

        const isSignaturePrinted = sessionStorage.getItem("dev_signature_printed");
        if (isSignaturePrinted) return;

        console.log(
            "%cTHE PINGALE CHRONICLE • 1950s BROADSHEET EDITION",
            "font-size: 20px; font-weight: 900; font-family: serif; color: #1a1815; border-bottom: 2px solid #1a1815; padding-bottom: 4px;"
        );
        
        console.log(
            "%c[IMPERIAL GAZETTE] Published by Mohanish Pingale in Nashik, Maharashtra.\n[TYPESETTING] Next.js App Router • Tailwind CSS • Zero-Fatigue Editorial Design", 
            "color: #9e2a2b; font-family: monospace;"
        );

        console.log(
            "%cLooking under the hood? The typography, Oxford rules, and responsive multi-column layouts are hand-tuned for authentic historical broadsheet fidelity while maintaining 100/100 Lighthouse performance.\n\nLet's connect: https://www.linkedin.com/in/mohanish-pingale-507339261/",
            "font-size: 13px; color: #575249; line-height: 1.6;"
        );

        sessionStorage.setItem("dev_signature_printed", "true");
    }, []);
}
