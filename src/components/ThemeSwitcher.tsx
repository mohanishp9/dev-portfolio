"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const isArchive = theme === "archive";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Current edition: ${theme}. Click to switch newspaper edition.`}
      className="inline-flex items-center gap-2 border border-[var(--news-ink)] px-3 py-1 font-telegraph text-[0.65rem] uppercase tracking-widest transition-all duration-200 hover:bg-[var(--news-ink)] hover:text-[var(--news-bg)] cursor-pointer"
      title="Switch between Morning Edition and Archival 1950s Edition"
    >
      <span className={`inline-block w-1.5 h-1.5 ${isArchive ? "bg-[var(--news-accent)]" : "bg-[var(--news-ink)]"}`} />
      <span>
        {isArchive ? "EDITION: ARCHIVAL 1950s" : "EDITION: MORNING PRESS"}
      </span>
    </button>
  );
}
