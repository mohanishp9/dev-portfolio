"use client";

import { useEffect, useRef } from "react";

export default function Oscilloscope() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const workerRef = useRef<Worker | null>(null);
    const lastScrollY = useRef(0);
    const scrollVelocity = useRef(0);
    const pointsRef = useRef<{ x: number; y: number }[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        
        const setSize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
        };
        setSize();

        // 1. Feature Detection for OffscreenCanvas
        const supportsOffscreen = 'transferControlToOffscreen' in canvas;

        if (supportsOffscreen) {
            // == WEB WORKER MODE ==
            const offscreen = canvas.transferControlToOffscreen();
            
            const workerCode = `
                let canvas, ctx, width, height;
                let scrollVelocity = 0;
                let time = 0;
                let numPoints = 200;
                let points = [];
                let animationId = null;

                function drawFrame() {
                    time += 0.2;
                    scrollVelocity *= 0.90;
                    const amplitude = scrollVelocity < 0.5 ? 0 : scrollVelocity;

                    ctx.clearRect(0, 0, width, height);

                    const waveFrequency = 0.8;
                    const noise = (Math.random() - 0.5) * amplitude * 1.5;
                    const smoothWave = Math.sin(time * waveFrequency) * amplitude * 0.3;
                    
                    const targetY = (height / 2) + smoothWave + noise;

                    points.push({ x: width, y: targetY });
                    points.shift();

                    ctx.beginPath();
                    ctx.moveTo(0, points[0].y);
                    
                    let hasDisplacement = false;
                    const midY = height / 2;
                    for (let i = 1; i < points.length; i++) {
                        const x = (i / numPoints) * width;
                        points[i].x = x;
                        ctx.lineTo(x, points[i].y);
                        if (Math.abs(points[i].y - midY) > 0.4) {
                            hasDisplacement = true;
                        }
                    }

                    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
                    ctx.lineWidth = 1;
                    ctx.stroke();

                    // Phosphor persistence echo: same polyline, offset pass
                    ctx.save();
                    ctx.translate(0, 8);
                    ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
                    ctx.stroke();
                    ctx.restore();

                    // Sleep when wave is settled to save CPU/GPU cycles
                    if (amplitude > 0 || hasDisplacement) {
                        animationId = requestAnimationFrame(drawFrame);
                    } else {
                        animationId = null;
                    }
                }

                self.onmessage = function(e) {
                    if (e.data.type === 'init') {
                        canvas = e.data.canvas;
                        ctx = canvas.getContext('2d');
                        width = e.data.width;
                        height = e.data.height;
                        canvas.width = width;
                        canvas.height = height;
                        
                        points = [];
                        for (let i = 0; i <= numPoints; i++) {
                            points.push({ x: (i / numPoints) * width, y: height / 2 });
                        }
                        drawFrame();
                    } else if (e.data.type === 'resize') {
                        width = e.data.width;
                        height = e.data.height;
                        if (canvas) {
                            canvas.width = width;
                            canvas.height = height;
                            points = [];
                            for (let i = 0; i <= numPoints; i++) {
                                points.push({ x: (i / numPoints) * width, y: height / 2 });
                            }
                            if (!animationId) {
                                drawFrame();
                            }
                        }
                    } else if (e.data.type === 'scroll') {
                        const delta = e.data.delta;
                        scrollVelocity += Math.abs(delta) * 0.8;
                        const maxAmplitude = height * 0.4;
                        if (scrollVelocity > maxAmplitude) scrollVelocity = maxAmplitude;
                        
                        if (!animationId) {
                            animationId = requestAnimationFrame(drawFrame);
                        }
                    }
                };
            `;

            const blob = new Blob([workerCode], { type: 'application/javascript' });
            const worker = new Worker(URL.createObjectURL(blob));
            workerRef.current = worker;

            worker.postMessage({ type: 'init', canvas: offscreen, width, height }, [offscreen]);

            const handleResize = () => {
                setSize();
                worker.postMessage({ type: 'resize', width, height });
            };
            window.addEventListener('resize', handleResize, { passive: true });

            const handleScroll = () => {
                const currentY = window.scrollY;
                const delta = currentY - lastScrollY.current;
                lastScrollY.current = currentY;
                worker.postMessage({ type: 'scroll', delta });
            };
            window.addEventListener('scroll', handleScroll, { passive: true });

            return () => {
                window.removeEventListener('resize', handleResize);
                window.removeEventListener('scroll', handleScroll);
                worker.terminate();
            };
        } else {
            // == MAIN THREAD FALLBACK (For older Safari/browsers) ==
            const fallbackCanvas = canvas as HTMLCanvasElement;
            const ctx = fallbackCanvas.getContext("2d");
            if (!ctx) return;
            
            fallbackCanvas.width = width;
            fallbackCanvas.height = height;

            let animationId: number | null = null;
            let time = 0;
            const numPoints = 200;

            for (let i = 0; i <= numPoints; i++) {
                pointsRef.current.push({ x: (i / numPoints) * width, y: height / 2 });
            }

            const render = () => {
                time += 0.2;
                scrollVelocity.current *= 0.90;
                const amplitude = scrollVelocity.current < 0.5 ? 0 : scrollVelocity.current;

                ctx.clearRect(0, 0, width, height);
                const pts = pointsRef.current;
                
                const waveFrequency = 0.8;
                const noise = (Math.random() - 0.5) * amplitude * 1.5;
                const smoothWave = Math.sin(time * waveFrequency) * amplitude * 0.3;
                const targetY = (height / 2) + smoothWave + noise;

                pts.push({ x: width, y: targetY });
                pts.shift();

                ctx.beginPath();
                ctx.moveTo(0, pts[0].y);
                
                let hasDisplacement = false;
                const midY = height / 2;
                for (let i = 1; i < pts.length; i++) {
                    const x = (i / numPoints) * width;
                    pts[i].x = x;
                    ctx.lineTo(x, pts[i].y);
                    if (Math.abs(pts[i].y - midY) > 0.4) {
                        hasDisplacement = true;
                    }
                }

                ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
                ctx.lineWidth = 1;
                ctx.stroke();

                // Phosphor persistence echo: same polyline, offset pass
                ctx.save();
                ctx.translate(0, 8);
                ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
                ctx.stroke();
                ctx.restore();

                if (amplitude > 0 || hasDisplacement) {
                    animationId = requestAnimationFrame(render);
                } else {
                    animationId = null;
                }
            };

            render();

            const handleResize = () => {
                setSize();
                fallbackCanvas.width = width;
                fallbackCanvas.height = height;
                pointsRef.current = [];
                for (let i = 0; i <= 200; i++) {
                    pointsRef.current.push({ x: (i / 200) * width, y: height / 2 });
                }
                if (!animationId) {
                    render();
                }
            };
            window.addEventListener("resize", handleResize, { passive: true });

            const handleScroll = () => {
                const currentY = window.scrollY;
                const delta = currentY - lastScrollY.current;
                scrollVelocity.current += Math.abs(delta) * 0.8; 
                const maxAmplitude = height * 0.4;
                if (scrollVelocity.current > maxAmplitude) scrollVelocity.current = maxAmplitude; 
                lastScrollY.current = currentY;

                if (!animationId) {
                    animationId = requestAnimationFrame(render);
                }
            };
            window.addEventListener("scroll", handleScroll, { passive: true });

            return () => {
                window.removeEventListener("resize", handleResize);
                window.removeEventListener("scroll", handleScroll);
                if (animationId) cancelAnimationFrame(animationId);
            };
        }
    }, []);

    return (
        <canvas 
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[50] mix-blend-screen"
            style={{ 
                width: '100vw', 
                height: '100vh', 
                opacity: 0.8,
                transform: 'translateZ(0)',
                willChange: 'transform',
                backfaceVisibility: 'hidden',
            }}
        />
    );
}
