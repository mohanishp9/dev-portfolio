"use client";

import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";

// The shape of the data we'll pull from hovered components
type NodeData = {
  name: string;
  data: Record<string, any>;
};

type DecompilerContextType = {
  isActive: boolean;
  toggle: () => void;
  hoveredNode: NodeData | null;
  setHoveredNode: (node: NodeData | null) => void;
};

const DecompilerContext = createContext<DecompilerContextType | null>(null);

export function useDecompilerContext() {
  const ctx = useContext(DecompilerContext);
  if (!ctx) throw new Error("Missing DecompilerProvider. Make sure it wraps your application.");
  return ctx;
}

// 1. The Global Provider
export function DecompilerProvider({ children }: { children: ReactNode }) {
  const [isActive, setIsActive] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<NodeData | null>(null);

  // Listen for the global shortcut (Shift + D)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key.toLowerCase() === "d") {
        setIsActive((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsActive(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Track mouse globally at all times (silently) so HUD snaps instantly on Shift+D
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      (window as any).__decompilerMousePos = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", updateMouse, { passive: true });
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <DecompilerContext.Provider value={{ isActive, toggle: () => setIsActive(!isActive), hoveredNode, setHoveredNode }}>
      {children}
      {isActive && <DecompilerOverlay />}
    </DecompilerContext.Provider>
  );
}

// 2. The Wrapper Component
export function DecompileNode({ name, data, children }: { name: string; data: Record<string, any>; children: ReactNode }) {
  const { isActive, setHoveredNode, hoveredNode } = useDecompilerContext();
  
  // Bug fix: Synchronize live data changes into the HUD if we are currently hovering over this node
  const dataString = JSON.stringify(data);
  useEffect(() => {
    if (isActive && hoveredNode?.name === name) {
      setHoveredNode({ name, data: JSON.parse(dataString) });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataString, isActive, name]); 

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent parent nodes from stealing the HUD
    setHoveredNode({ name, data });
  };
  
  const handleMouseLeave = () => {
    setHoveredNode(null);
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      className={isActive ? "ring-1 ring-[#ff5500]/50 bg-[#ff5500]/[0.02] transition-all cursor-crosshair relative z-40" : ""}
    >
      {children}
    </div>
  );
}

// 3. The Visual HUD Overlay (Optimized for zero-lag 144hz rendering)
function DecompilerOverlay() {
  const { hoveredNode } = useDecompilerContext();
  const hudRef = useRef<HTMLDivElement>(null);

  // Use raw DOM manipulation to follow mouse without React re-renders
  useEffect(() => {
    // Instantly snap to the cursor the moment Shift+D is pressed
    const pos = (window as any).__decompilerMousePos || { x: 0, y: 0 };
    if (hudRef.current) {
        const x = Math.min(window.innerWidth - 340, pos.x + 24);
        const y = Math.min(window.innerHeight - 250, pos.y + 24);
        hudRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }

    const updateMouse = (e: MouseEvent) => {
      if (hudRef.current) {
        requestAnimationFrame(() => {
          if (!hudRef.current) return;
          const x = Math.min(window.innerWidth - 340, e.clientX + 24);
          const y = Math.min(window.innerHeight - 250, e.clientY + 24);
          hudRef.current.style.transform = `translate(${x}px, ${y}px)`;
        });
      }
    };
    
    window.addEventListener("mousemove", updateMouse, { passive: true });
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none transition-colors duration-500 bg-black/60 backdrop-blur-[2px]">
      {/* Brutalist Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(255, 85, 0, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 85, 0, 0.2) 1px, transparent 1px)", 
          backgroundSize: "40px 40px" 
        }} 
      />
      
      {/* Floating HUD Panel */}
      {hoveredNode && (
        <div 
          ref={hudRef}
          className="fixed top-0 left-0 border border-[#ff5500] bg-[#09090b]/95 shadow-2xl p-5 min-w-[320px] max-w-[400px] pointer-events-none"
          style={{ willChange: "transform" }}
        >
          <div className="border-b border-[#ff5500]/30 pb-2 mb-3">
            <span className="font-jetbrains text-[0.65rem] uppercase tracking-widest text-[#ff5500] font-bold">
              [SYSTEM_LOG] Mounting &lt;{hoveredNode.name} /&gt;
            </span>
          </div>
          
          <pre className="font-jetbrains text-[0.65rem] text-slate-300 whitespace-pre-wrap leading-relaxed overflow-x-hidden">
            {JSON.stringify(hoveredNode.data, null, 2)}
          </pre>
          
          <div className="mt-4 pt-3 border-t border-white/10 flex justify-between">
            <span className="font-jetbrains text-[0.55rem] uppercase tracking-widest text-slate-500">
              State: Hydrated
            </span>
            <span className="font-jetbrains text-[0.55rem] uppercase tracking-widest text-[#ccff00] animate-pulse font-bold">
              Live Sync
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
