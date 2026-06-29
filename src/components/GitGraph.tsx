"use client";

import { useEffect, useState } from "react";
import DecryptedText from "./DecryptedText";
import { DecompileNode } from "./Decompiler";

interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface GitData {
  totalContributions: number;
  weeks: ContributionWeek[];
  isMock: boolean;
}

export default function GitGraph() {
  const [data, setData] = useState<GitData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeDay, setActiveDay] = useState<ContributionDay | null>(null);
  const [apiLatency, setApiLatency] = useState<number>(0);

  // Sizing configurations to make the graph bigger and fully customizable
  const CELL_SIZE = 14; // in pixels
  const CELL_GAP = 3;   // in pixels
  const DAY_LABEL_WIDTH = 40; // in pixels
  const gridHeight = 7 * CELL_SIZE + 6 * CELL_GAP;

  useEffect(() => {
    async function fetchGitData() {
      try {
        const start = performance.now();
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error("Failed to fetch GitHub contribution data");
        const json = await res.json();
        setApiLatency(Math.round(performance.now() - start));
        setData(json);
        
        // Find today or last active day to show by default
        if (json.weeks && json.weeks.length > 0) {
          const lastWeek = json.weeks[json.weeks.length - 1];
          const lastDay = lastWeek.contributionDays[lastWeek.contributionDays.length - 1];
          setActiveDay(lastDay || null);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchGitData();
  }, []);

  // Determine orange intensity level based on commit count
  const getColorClass = (count: number) => {
    if (count === 0) return "bg-transparent border border-white/5";
    if (count <= 2) return "bg-[#ff5500]/20 border border-[#ff5500]/15";
    if (count <= 5) return "bg-[#ff5500]/50 border border-[#ff5500]/30";
    if (count <= 9) return "bg-[#ff5500]/80 border border-[#ff5500]/50";
    return "bg-[#ff5500] border border-white/30";
  };

  // Helper calculations for Git Stats
  const getStats = () => {
    if (!data) return { maxCommits: 0, activeDays: 0, consistency: 0 };
    
    let maxCommits = 0;
    let activeDays = 0;
    let totalDays = 0;

    data.weeks.forEach(week => {
      week.contributionDays.forEach(day => {
        totalDays++;
        if (day.contributionCount > 0) activeDays++;
        if (day.contributionCount > maxCommits) maxCommits = day.contributionCount;
      });
    });

    const consistency = totalDays > 0 ? Math.round((activeDays / totalDays) * 100) : 0;

    return { maxCommits, activeDays, consistency };
  };

  const { maxCommits, activeDays, consistency } = getStats();

  // Helper to format date nicely
  const formatDateString = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const decompilerData = {
    state: loading ? "fetching_github_api" : error ? "fallback_mock_data" : "hydrated",
    network: {
      endpoint: "/api/github",
      latency_ms: apiLatency,
    },
    graph_engine: {
      cells_rendered: data ? data.weeks.length * 7 : 0,
      active_hover: activeDay ? { date: activeDay.date, commits: activeDay.contributionCount } : null
    },
    vitals: {
      max_capacity: maxCommits,
      consistency_score: consistency + "%",
    }
  };

  return (
    <DecompileNode name="GitGraph_Telemetry" data={decompilerData}>
    <section id="activity" className="border-b border-white/10 px-6 sm:px-12 lg:px-24 py-24 bg-[#0a0a0c]">
      <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-start">
        
        {/* Left main block: Title, Grid & HUD */}
        <div>
          {/* Header */}
          <div data-reveal className="mb-12">
            <span className="font-jetbrains text-[0.65rem] uppercase tracking-[0.3em] text-accent block mb-3">
              Telemetry Log // git_contribution
            </span>
            <h2 className="font-playfair italic text-4xl sm:text-5xl text-slate-100 uppercase tracking-tight">
              Dev Activity Grid
            </h2>
          </div>

          {/* Grid Container */}
          {loading ? (
            // Skeleton loader matching exact size
            <div className="w-full h-36 bg-white/5 border border-white/10 animate-pulse flex items-center justify-center font-jetbrains text-xs text-slate-500 uppercase tracking-widest">
              Connecting to Github API...
            </div>
          ) : error || !data ? (
            <div className="w-full h-36 bg-red-950/20 border border-red-500/20 flex items-center justify-center font-jetbrains text-xs text-red-400 uppercase tracking-widest">
              Failed to load activity log
            </div>
          ) : (
            <div className="relative">
              {/* Horizontal Scroll wrapper for smaller screens */}
              <div className="overflow-x-auto no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
                <div 
                  className="pb-4"
                  style={{ minWidth: `${DAY_LABEL_WIDTH + 53 * (CELL_SIZE + CELL_GAP)}px` }}
                >
                  
                  {/* Month headers row */}
                  <div 
                    className="flex mb-2 text-[0.6rem] font-jetbrains text-slate-500 uppercase tracking-wider select-none"
                    style={{ gap: `${CELL_GAP}px` }}
                  >
                    <span 
                      className="shrink-0"
                      style={{ width: `${DAY_LABEL_WIDTH}px` }}
                    />
                    {data.weeks.map((week, wIdx) => {
                      let monthLabel = "";
                      if (week.contributionDays[0]) {
                        const date = new Date(week.contributionDays[0].date);
                        const isFirstWeekOfMonth = date.getDate() <= 7;
                        if (isFirstWeekOfMonth) {
                          monthLabel = date.toLocaleDateString("en-US", { month: "short" });
                        }
                      }
                      return (
                        <span 
                          key={wIdx} 
                          className="shrink-0 text-left overflow-visible whitespace-nowrap" 
                          style={{ width: `${CELL_SIZE}px` }}
                        >
                          {monthLabel}
                        </span>
                      );
                    })}
                  </div>

                  {/* Calendar Grid proper */}
                  <div 
                    className="flex relative select-none"
                    style={{ gap: `${CELL_GAP}px` }}
                  >
                    {/* Day names column */}
                    <div 
                      className="flex flex-col text-[0.6rem] font-jetbrains text-slate-600 pr-2 pt-[1px] justify-between uppercase shrink-0"
                      style={{ 
                        width: `${DAY_LABEL_WIDTH}px`, 
                        height: `${gridHeight}px`,
                      }}
                    >
                      <span>Sun</span>
                      <span>Tue</span>
                      <span>Thu</span>
                      <span>Sat</span>
                    </div>

                    {/* Columns of weeks */}
                    <div className="flex" style={{ gap: `${CELL_GAP}px` }}>
                      {data.weeks.map((week, wIdx) => (
                        <div 
                          key={wIdx} 
                          className="flex flex-col" 
                          style={{ gap: `${CELL_GAP}px` }}
                        >
                          {week.contributionDays.map((day, dIdx) => (
                            <button
                              key={dIdx}
                              onClick={() => setActiveDay(day)}
                              onMouseEnter={() => setActiveDay(day)}
                              aria-label={`${day.contributionCount} contributions on ${day.date}`}
                              className={`transition-all duration-100 outline-none cursor-none ${getColorClass(
                                day.contributionCount
                              )} ${
                                activeDay?.date === day.date
                                  ? "ring-1 ring-white scale-110 z-10"
                                  : "hover:scale-115"
                              }`}
                              style={{
                                width: `${CELL_SIZE}px`,
                                height: `${CELL_SIZE}px`,
                              }}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator helper for mobile */}
              <div className="flex justify-between items-center mt-3 text-[0.6rem] font-jetbrains text-slate-500 uppercase tracking-widest lg:hidden">
                <span>&larr; Swipe to pan history &rarr;</span>
                {data.isMock && <span className="text-amber-500/80">Demo Mode</span>}
              </div>
            </div>
          )}

          {/* Interactive HUD status line */}
          {!loading && !error && activeDay && (
            <div className="mt-8 border border-white/10 p-5 bg-white/[0.01] grid sm:grid-cols-[1fr_auto] gap-4 items-center justify-between">
              <div>
                <span className="block font-jetbrains text-[0.55rem] uppercase tracking-[0.2em] text-slate-600 mb-1">
                  Selected Node Date
                </span>
                <span className="font-inter text-sm font-bold text-slate-200 block sm:inline">
                  {formatDateString(activeDay.date)}
                </span>
              </div>
              <div className="sm:text-right">
                <span className="block font-jetbrains text-[0.55rem] uppercase tracking-[0.2em] text-slate-600 mb-1">
                  Node Density Value
                </span>
                <span className="font-jetbrains text-xs uppercase tracking-widest text-[#ff5500] font-bold">
                  {activeDay.contributionCount} Commits Pushed
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Right column: Vitals Sidebar */}
        <div data-reveal="left" className="border-l border-white/10 pl-6 lg:pl-10 h-full lg:py-6">
          <h3 className="font-jetbrains text-[0.65rem] uppercase tracking-[0.3em] text-slate-500 mb-8 block">
            System Vitals // github
          </h3>
          
          <div className="flex flex-col gap-6">
            <div className="border-b border-white/10 pb-4">
              <span className="block font-jetbrains text-[0.55rem] uppercase tracking-[0.2em] text-slate-500 mb-1">
                Yearly Contributions
              </span>
              <span className="font-playfair text-4xl italic text-slate-200 font-bold">
                {data ? data.totalContributions : "---"}
              </span>
            </div>

            <div className="border-b border-white/10 pb-4">
              <span className="block font-jetbrains text-[0.55rem] uppercase tracking-[0.2em] text-slate-500 mb-1">
                Active Days
              </span>
              <span className="font-playfair text-4xl italic text-slate-200 font-bold">
                {data ? `${activeDays} / 365` : "---"}
              </span>
            </div>

            <div className="border-b border-white/10 pb-4">
              <span className="block font-jetbrains text-[0.55rem] uppercase tracking-[0.2em] text-slate-500 mb-1">
                Peak Daily Capacity
              </span>
              <span className="font-playfair text-4xl italic text-slate-200 font-bold">
                {data ? `${maxCommits} Commits` : "---"}
              </span>
            </div>

            <div className="pb-4">
              <span className="block font-jetbrains text-[0.55rem] uppercase tracking-[0.2em] text-slate-500 mb-1">
                Dev Consistency
              </span>
              <span className="font-playfair text-4xl italic text-slate-200 font-bold">
                {data ? `${consistency}%` : "---"}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
    </DecompileNode>
  );
}
