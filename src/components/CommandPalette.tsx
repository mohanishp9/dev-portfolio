"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Action {
  id: string;
  title: string;
  category: string;
  perform: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, toggleTheme } = useTheme();

  const actions: Action[] = [
    {
      id: "projects",
      title: "Jump to Page III: Selected Works & Exclusives",
      category: "Navigation",
      perform: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "experience",
      title: "Jump to Page IV: Historical Archives & Dispatches",
      category: "Navigation",
      perform: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "skills",
      title: "Jump to Page II: Technical Spec Sheet",
      category: "Navigation",
      perform: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "about",
      title: "Jump to Page I: Editorial Profile",
      category: "Navigation",
      perform: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "contact",
      title: "Jump to Page V: The Classifieds & Telegraph",
      category: "Navigation",
      perform: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "toggle-theme",
      title: theme === "archive" ? "Switch Edition → [ MORNING PRESS (Crisp Broadsheet) ]" : "Switch Edition → [ ARCHIVAL 1950s (Sepia Newsprint) ]",
      category: "Press Settings",
      perform: () => {
        toggleTheme();
        setIsOpen(false);
      },
    },
    {
      id: "resume",
      title: "Download Official Curriculum Vitae (PDF)",
      category: "Documents",
      perform: () => {
        window.open("/Mohanish_Pingale_FullStack_Developer_Resume.pdf", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "github",
      title: "Inspect Official GitHub Ledger",
      category: "External Records",
      perform: () => {
        window.open("https://github.com/mohanishp9", "_blank");
        setIsOpen(false);
      },
    },
  ];

  const filteredActions = actions.filter((action) =>
    action.title.toLowerCase().includes(query.toLowerCase()) ||
    action.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setQuery("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh] px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Palette Modal */}
      <div 
        className="relative w-full max-w-2xl border-2 border-[var(--news-rule-strong)] bg-[var(--news-card)] shadow-[0_20px_50px_rgba(0,0,0,0.18)] overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b-2 border-[var(--news-rule-strong)] bg-[var(--news-bg)]">
          <span className="text-[var(--news-accent)] font-telegraph text-xs font-bold mr-2">FIND //</span>
          <input
            ref={inputRef}
            type="text"
            className="w-full bg-transparent border-none text-[var(--news-ink)] font-editorial text-base p-4 outline-none placeholder:text-[var(--news-muted)] placeholder:italic"
            placeholder="Search chronicle index... (e.g. 'works', 'resume', 'contact')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="font-telegraph text-[0.62rem] text-[var(--news-muted)] uppercase tracking-widest border border-[var(--news-rule)] px-2 py-0.5">
            ESC
          </span>
        </div>

        {/* Action List */}
        <div className="max-h-[55vh] overflow-y-auto p-2">
          {filteredActions.length === 0 ? (
            <div className="p-8 text-center font-editorial italic text-sm text-[var(--news-muted)]">
              No matching records discovered in the current edition.
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              {filteredActions.map((action) => (
                <button
                  key={action.id}
                  onClick={action.perform}
                  className="w-full flex flex-col sm:flex-row sm:items-center justify-between text-left p-3 hover:bg-[var(--news-bg)] border border-transparent hover:border-[var(--news-rule)] transition-colors group cursor-pointer"
                >
                  <span className="font-headline font-bold text-sm text-[var(--news-ink)] group-hover:text-[var(--news-accent)]">
                    {action.title}
                  </span>
                  <span className="font-telegraph text-[0.6rem] uppercase tracking-wider text-[var(--news-muted)] mt-1 sm:mt-0">
                    {action.category}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-[var(--news-rule-strong)] bg-[var(--news-bg)] flex items-center justify-between font-telegraph text-[0.6rem] text-[var(--news-muted)] uppercase tracking-wider">
          <span>THE PINGALE CHRONICLE // MASTER INDEX</span>
          <span>PRESS &crarr; TO EXECUTE</span>
        </div>
      </div>
    </div>
  );
}
