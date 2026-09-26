"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const isAmoled = theme === "amoled";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Current mode: ${theme}. Click to switch theme.`}
      className={`
        relative select-none transition-all duration-300 flex items-center gap-2.5
        ${
          isAmoled
            ? /* AMOLED Obsidian Lacquer Style */
              "rounded-full px-3.5 py-1.5 bg-gradient-to-b from-[#18181c] to-[#040405] border border-white/25 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_16px_rgba(0,0,0,0.95),0_0_14px_rgba(255,85,0,0.18)] hover:border-white/40 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_6px_22px_rgba(0,0,0,1),0_0_20px_rgba(255,85,0,0.35)] active:scale-95"
            : /* Brutalist Technical Wireframe Style */
              "rounded-md px-3 py-1 bg-white/[0.03] border border-white/20 text-slate-300 font-jetbrains text-xs tracking-[0.16em] uppercase hover:border-[#ff5500] hover:text-[#ff5500] hover:bg-[#ff5500]/5 active:scale-95"
        }
      `}
    >
      {isAmoled ? (
        <>
          {/* Glowing AMOLED Subpixel Indicator */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5500] opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff5500] shadow-[0_0_8px_#ff5500]"></span>
          </span>

          <span className="font-jetbrains text-[0.65rem] font-bold tracking-[0.2em] text-white">
            AMOLED <span className="text-[#ff5500]">•</span> PITCH
          </span>

          <span className="hidden sm:inline-block text-[0.55rem] font-jetbrains text-slate-400 pl-1 border-l border-white/20 tracking-widest">
            OLED
          </span>
        </>
      ) : (
        <>
          {/* Brutalist Monospace Industrial Marker */}
          <span className="w-1.5 h-1.5 bg-white/70" />
          <span className="font-jetbrains text-[0.65rem] tracking-[0.18em] font-semibold">
            [ THEME: BRUTALIST ]
          </span>
        </>
      )}
    </button>
  );
}
