"use client";

import { useEffect, useState, useRef } from "react";

type Action = {
  id: string;
  title: string;
  category: string;
  perform: () => void;
};

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleDevMode = () => {
    document.body.classList.toggle("dev-mode-active");
    setIsOpen(false);
  };

  const actions: Action[] = [
    {
      id: "projects",
      title: "Jump to Projects",
      category: "Navigation",
      perform: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "experience",
      title: "Jump to Experience",
      category: "Navigation",
      perform: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "activity",
      title: "View Telemetry Log (Git Graph)",
      category: "Navigation",
      perform: () => {
        document.getElementById("activity")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "resume",
      title: "Download Resume",
      category: "Files",
      perform: () => {
        window.open("/Mohanish_Pingale_FullStack_Developer_Resume.pdf", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "dev-mode",
      title: "Toggle Developer Mode (Bounds)",
      category: "System",
      perform: toggleDevMode,
    },
  ];

  // Filter actions based on search query
  const filteredActions = actions.filter((action) =>
    action.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open with Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      // Close on Escape
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setQuery(""); // clear previous search
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh] px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#09090b]/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Palette Modal */}
      <div 
        className="relative w-full max-w-2xl bg-[#09090b] border border-white/20 shadow-2xl overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input */}
        <div className="flex items-center px-4 border-b border-white/10">
          <span className="text-accent font-jetbrains text-sm">{">"}</span>
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent border-none text-slate-100 font-jetbrains text-sm p-5 outline-none placeholder:text-slate-600"
            placeholder="Search commands... (e.g. 'resume', 'projects')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="font-jetbrains text-[0.6rem] text-slate-600 uppercase tracking-widest bg-white/5 px-2 py-1">
            ESC to close
          </span>
        </div>

        {/* Action List */}
        <div className="max-h-[60vh] overflow-y-auto no-scrollbar p-2">
          {filteredActions.length === 0 ? (
            <div className="p-8 text-center font-jetbrains text-xs text-slate-500 uppercase tracking-widest">
              No matching commands found.
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              {filteredActions.map((action, index) => (
                <button
                  key={action.id}
                  onClick={action.perform}
                  className="w-full flex flex-col sm:flex-row sm:items-center justify-between text-left p-4 hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors group cursor-none"
                >
                  <span className="font-inter font-bold text-sm text-slate-300 group-hover:text-white">
                    {action.title}
                  </span>
                  <span className="font-jetbrains text-[0.6rem] uppercase tracking-widest text-slate-500 mt-2 sm:mt-0">
                    {action.category}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="px-4 py-3 border-t border-white/10 bg-white/[0.02]">
          <span className="font-jetbrains text-[0.55rem] uppercase tracking-[0.2em] text-slate-500">
            System Terminal // v1.0.0
          </span>
        </div>
      </div>
    </div>
  );
}
