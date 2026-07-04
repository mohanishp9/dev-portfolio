"use client";

import { useEffect, useRef } from "react";

export default function Oscilloscope() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const lastScrollY = useRef(0);
    const scrollVelocity = useRef(0);
    
    // History of points to draw the wave
    const pointsRef = useRef<{ x: number; y: number }[]>([]);
    
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        let width = window.innerWidth;
        let height = window.innerHeight;
        
        const setSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        setSize();
        window.addEventListener("resize", setSize);

        // Track scroll velocity
        const handleScroll = () => {
            const currentY = window.scrollY;
            const delta = currentY - lastScrollY.current;
            
            // Increase amplitude heavily based on scroll speed
            scrollVelocity.current += Math.abs(delta) * 0.8; 
            
            // Cap maximum amplitude to keep it on screen
            const maxAmplitude = height * 0.4;
            if (scrollVelocity.current > maxAmplitude) scrollVelocity.current = maxAmplitude; 
            
            lastScrollY.current = currentY;
        };
        window.addEventListener("scroll", handleScroll);

        let animationId: number;
        let time = 0;
        const numPoints = 200; // Resolution of the horizontal wave

        // Seed initial flatline
        for (let i = 0; i <= numPoints; i++) {
            pointsRef.current.push({ x: (i / numPoints) * width, y: height / 2 });
        }

        const render = () => {
            animationId = requestAnimationFrame(render);
            time += 0.2; // Speed of the wave traversing the X axis

            // Friction (Decay velocity back to zero)
            scrollVelocity.current *= 0.90;
            const amplitude = scrollVelocity.current < 0.5 ? 0 : scrollVelocity.current;

            // Clear the frame completely
            ctx.clearRect(0, 0, width, height);

            const pts = pointsRef.current;
            
            // Generate the newest Y coordinate on the far right
            // We mix a fast sine wave with raw Math.random() noise scaled by scroll velocity
            const waveFrequency = 0.8;
            const noise = (Math.random() - 0.5) * amplitude * 1.5; // Jagged noise
            const smoothWave = Math.sin(time * waveFrequency) * amplitude * 0.3; // Underlying smooth curve
            
            const targetY = (height / 2) + smoothWave + noise;

            // Push new coordinate, drop the oldest one on the far left
            pts.push({ x: width, y: targetY });
            pts.shift();

            // Draw the Oscilloscope Line
            ctx.beginPath();
            ctx.moveTo(0, pts[0].y);
            
            for (let i = 1; i < pts.length; i++) {
                // Distribute evenly across screen width
                const x = (i / numPoints) * width;
                pts[i].x = x;
                ctx.lineTo(x, pts[i].y);
            }

            // Static styling: Barely noticeable dim grey line, never changes
            ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
            ctx.lineWidth = 1;
            ctx.shadowBlur = 0;
            
            ctx.stroke();
        };

        render();

        return () => {
            window.removeEventListener("resize", setSize);
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[50] mix-blend-screen"
            style={{ width: '100vw', height: '100vh', opacity: 0.8 }}
        />
    );
}
