"use client";

import { useEffect } from "react";

export default function CustomCursor() {
    useEffect(() => {
        const cursor = document.getElementById("cursor")!;
        const ring = document.getElementById("cursorRing")!;

        const move = (e: MouseEvent) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            setTimeout(() => {
                ring.style.left = `${e.clientX}px`;
                ring.style.top = `${e.clientY}px`;
            }, 80);
        };

        const handleHover = () => {
            cursor.classList.add("hovering");
            ring.classList.add("hovering");
        };

        const removeHover = () => {
            cursor.classList.remove("hovering");
            ring.classList.remove("hovering");
        };

        document.addEventListener("mousemove", move);
        document.querySelectorAll("a, button, [data-hover]").forEach(el => {
            el.addEventListener("mouseenter", handleHover);
            el.addEventListener("mouseleave", removeHover);
        });

        return () => {
            document.removeEventListener("mousemove", move);
            // cleanup others...
        };
    }, []);

    return (
        <>
            <div id="cursor" className="cursor" />
            <div id="cursorRing" className="cursor-ring" />
        </>
    );
}