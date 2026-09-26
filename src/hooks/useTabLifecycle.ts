"use client";

import { useEffect, useRef } from "react";

export function useTabLifecycle() {
    const originalTitle = useRef<string | null>(null);

    useEffect(() => {
        if (typeof window === "undefined" || typeof document === "undefined") return;
        
        originalTitle.current = document.title;

        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = "cd ../";
            } else {
                document.title = originalTitle.current || "Mohanish Pingale | Portfolio";
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);
}
