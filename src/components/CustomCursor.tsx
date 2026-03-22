"use client";

import { useEffect } from "react";

export default function CustomCursor() {
    useEffect(() => {
        const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const cursor = document.getElementById("cursor");
        const ring = document.getElementById("cursorRing");

        if (!hasFinePointer || reduceMotion || !cursor || !ring) {
            return;
        }

        let rafId = 0;
        let currentX = window.innerWidth / 2;
        let currentY = window.innerHeight / 2;
        let ringX = currentX;
        let ringY = currentY;

        const render = () => {
            ringX += (currentX - ringX) * 0.18;
            ringY += (currentY - ringY) * 0.18;

            cursor.style.left = `${currentX}px`;
            cursor.style.top = `${currentY}px`;
            ring.style.left = `${ringX}px`;
            ring.style.top = `${ringY}px`;

            rafId = window.requestAnimationFrame(render);
        };

        const move = (event: MouseEvent) => {
            currentX = event.clientX;
            currentY = event.clientY;
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
        const interactiveElements = document.querySelectorAll("a, button, [data-hover]");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleHover);
            el.addEventListener("mouseleave", removeHover);
        });

        rafId = window.requestAnimationFrame(render);

        return () => {
            window.cancelAnimationFrame(rafId);
            document.removeEventListener("mousemove", move);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleHover);
                el.removeEventListener("mouseleave", removeHover);
            });
        };
    }, []);

    return (
        <>
            <div id="cursor" className="cursor" />
            <div id="cursorRing" className="cursor-ring" />
        </>
    );
}
