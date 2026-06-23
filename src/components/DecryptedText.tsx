"use client";

import { useState, useEffect } from "react";

const CHARS = "01XY!@#$%^&*()_+<>?|{}[]";

interface DecryptedTextProps {
    text: string;
    speed?: number;
    maxIterations?: number;
    className?: string;
    as?: React.ElementType;
}

export default function DecryptedText({
    text,
    speed = 30,
    maxIterations = 10,
    className = "",
    as: Component = "span",
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const [iteration, setIteration] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isHovering && iteration < maxIterations) {
            interval = setInterval(() => {
                setDisplayText((prev) =>
                    prev
                        .split("")
                        .map((char, index) => {
                            if (char === " ") return " ";
                            // Gradually reveal real characters from left to right
                            if (index < (iteration / maxIterations) * text.length) {
                                return text[index];
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );
                setIteration((i) => i + 1);
            }, speed);
        } else if (!isHovering || iteration >= maxIterations) {
            setDisplayText(text);
        }

        return () => clearInterval(interval);
    }, [isHovering, iteration, maxIterations, speed, text]);

    return (
        <Component
            className={className}
            onMouseEnter={() => {
                setIsHovering(true);
                setIteration(0);
            }}
            onMouseLeave={() => {
                setIsHovering(false);
                setDisplayText(text);
            }}
            style={{ display: "inline-block" }}
        >
            {displayText}
        </Component>
    );
}
