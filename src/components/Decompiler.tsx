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
      className={isActive ? "ring-2 ring-[var(--news-accent)]/80 bg-[var(--news-accent)]/[0.04] transition-all cursor-help relative z-40" : ""}
    >
      {children}
    </div>
  );
}

// 3. The Visual HUD Overlay (Typesetter's Proof Inspection Sheet)
function DecompilerOverlay() {
  const { hoveredNode } = useDecompilerContext();
  const hudRef = useRef<HTMLDivElement>(null);

  // Use raw DOM manipulation to follow mouse without React re-renders
  useEffect(() => {
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
    <div className="fixed inset-0 z-[9998] pointer-events-none transition-colors duration-300 bg-black/25 backdrop-blur-[1px]">
      {/* Floating Typesetter's Proof Panel */}
      {hoveredNode && (
        <div 
          ref={hudRef}
          className="fixed top-0 left-0 border-2 border-[var(--news-rule-strong)] bg-[var(--news-card)] shadow-2xl p-5 min-w-[320px] max-w-[420px] pointer-events-none"
          style={{ willChange: "transform" }}
        >
          <div className="border-b-2 border-[var(--news-rule-strong)] pb-2 mb-3 flex items-center justify-between">
            <span className="font-telegraph text-[0.65rem] uppercase tracking-widest text-[var(--news-accent)] font-bold">
              [TYPESETTER PROOF SHEET] &lt;{hoveredNode.name} /&gt;
            </span>
            <span className="font-telegraph text-[0.55rem] text-[var(--news-muted)]">PRESS SHIFT+D TO CLOSE</span>
          </div>
          
          <pre className="font-telegraph text-[0.68rem] text-[var(--news-ink)] whitespace-pre-wrap leading-relaxed overflow-x-hidden">
            {JSON.stringify(hoveredNode.data, null, 2)}
          </pre>
          
          <div className="mt-4 pt-3 border-t border-[var(--news-rule)] flex justify-between font-telegraph text-[0.58rem] uppercase tracking-widest">
            <span className="text-[var(--news-muted)]">
              Broadsheet Record: Active
            </span>
            <span className="text-[var(--news-accent)] font-bold">
              Audited OK
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
