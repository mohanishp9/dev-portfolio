"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Theme = "morning" | "archive";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("morning");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme_preference") as Theme | null;
      if (saved === "morning" || saved === "archive") {
        setThemeState(saved);
        document.documentElement.setAttribute("data-theme", saved);
      } else {
        setThemeState("morning");
        document.documentElement.setAttribute("data-theme", "morning");
      }
    } catch {
      document.documentElement.setAttribute("data-theme", "morning");
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("theme_preference", newTheme);
    } catch {}
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "morning" ? "archive" : "morning";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
