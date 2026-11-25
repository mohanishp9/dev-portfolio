"use client";

import { useEffect, useState } from "react";
import { DecompileNode } from "./Decompiler";
import { setLastLatency } from "@/lib/latency";

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

  const CELL_SIZE = 13;
  const CELL_GAP = 3;

  useEffect(() => {
    async function fetchGitData() {
      try {
        const start = performance.now();
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error("Failed to fetch GitHub contribution data");
        const json = await res.json();
        const latency = Math.round(performance.now() - start);
        setApiLatency(latency);
        setLastLatency(latency);
        window.dispatchEvent(new CustomEvent("portfolio:latency", { detail: latency }));
        setData(json);
        
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

  const getColorClass = (count: number) => {
    if (count === 0) return "bg-[var(--news-bg)] border border-[var(--news-rule)]";
    if (count <= 2) return "bg-[var(--news-ink)]/20 border border-[var(--news-rule)]";
    if (count <= 5) return "bg-[var(--news-ink)]/50 border border-[var(--news-ink)]/60";
    if (count <= 9) return "bg-[var(--news-ink)]/80 border border-[var(--news-ink)]";
    return "bg-[var(--news-accent)] border border-[var(--news-accent)]";
  };

  const getStats = () => {
    if (!data) return { maxCommits: 0, activeDays: 0, consistency: 0 };
    
    let maxCommits = 0;
    let activeDays = 0;
    let totalDays = 0;

    data.weeks.forEach((week) => {
      week.contributionDays.forEach((day) => {
        totalDays++;
        if (day.contributionCount > 0) activeDays++;
        if (day.contributionCount > maxCommits) maxCommits = day.contributionCount;
      });
    });

    const consistency = totalDays > 0 ? Math.round((activeDays / totalDays) * 100) : 0;
    return { maxCommits, activeDays, consistency };
  };

  const { maxCommits, activeDays, consistency } = getStats();

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
      active_hover: activeDay ? { date: activeDay.date, commits: activeDay.contributionCount } : null,
    },
  };

  return (
    <DecompileNode name="Git_Graph_Telemetry" data={decompilerData}>
      <section id="activity" className="border-b border-[var(--news-rule-strong)] px-4 sm:px-8 lg:px-12 py-16">
        {/* Section Folio Header */}
        <div data-reveal className="flex items-center justify-between border-b border-[var(--news-rule-strong)] pb-3 mb-10 font-telegraph text-[0.68rem] uppercase tracking-[0.22em] text-[var(--news-muted)]">
          <span className="font-bold text-[var(--news-ink)]">
            RECORD OF INDUSTRY &bull; ANNUAL CODE CHRONICLE
          </span>
          <span className="font-headline italic text-sm text-[var(--news-ink)] normal-case">
            Meteorological Record of Continuous Software Assembly
          </span>
          <span className="hidden sm:inline">OFFICIAL LEDGER</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Visual Matrix (8 cols) */}
          <div data-reveal className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-baseline justify-between border-b border-[var(--news-rule)] pb-3 mb-6 gap-2">
                <div>
                  <span className="font-telegraph text-[0.6rem] uppercase tracking-[0.25em] text-[var(--news-accent)] font-bold block mb-1">
                    CHART NO. 14 &bull; 52 WEEKS PRECIPITATION
                  </span>
                  <h3 className="font-headline font-black text-2xl uppercase tracking-wide text-[var(--news-ink)]">
                    Annual GitHub Commit Velocity
                  </h3>
                </div>
                <div className="font-telegraph text-xs text-[var(--news-muted)]">
                  Subject: <span className="font-bold text-[var(--news-ink)]">github.com/mohanishp9</span>
                </div>
              </div>

              {/* Scrollable Ink-Grid Canvas */}
              <div className="border border-[var(--news-rule-strong)] bg-[var(--news-card)] p-5 overflow-x-auto">
                {loading ? (
                  <div className="py-16 text-center font-editorial italic text-sm text-[var(--news-muted)]">
                    Telegraph line active... Querying GitHub servers for verified activity logs...
                  </div>
                ) : error ? (
                  <div className="py-16 text-center font-editorial italic text-sm text-[var(--news-accent)]">
                    Telegraphic cable interrupted. Displaying cached archival commit record.
                  </div>
                ) : (
                  <div className="flex gap-[3px] min-w-max pb-2">
                    {data?.weeks.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-[3px]">
                        {week.contributionDays.map((day) => (
                          <button
                            key={day.date}
                            type="button"
                            onClick={() => setActiveDay(day)}
                            onMouseEnter={() => setActiveDay(day)}
                            aria-label={`${day.contributionCount} contributions on ${day.date}`}
                            className={`w-[13px] h-[13px] transition-transform duration-75 cursor-pointer ${getColorClass(
                              day.contributionCount
                            )} ${activeDay?.date === day.date ? "scale-125 z-10 ring-2 ring-[var(--news-ink)]" : ""}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* Legend Row */}
                <div className="mt-4 pt-3 border-t border-[var(--news-rule)] flex flex-wrap items-center justify-between text-[0.65rem] font-telegraph text-[var(--news-muted)] uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <span>Low Volume</span>
                    <span className="inline-block w-3 h-3 bg-[var(--news-bg)] border border-[var(--news-rule)]" />
                    <span className="inline-block w-3 h-3 bg-[var(--news-ink)]/20 border border-[var(--news-rule)]" />
                    <span className="inline-block w-3 h-3 bg-[var(--news-ink)]/50 border border-[var(--news-ink)]" />
                    <span className="inline-block w-3 h-3 bg-[var(--news-ink)]/80 border border-[var(--news-ink)]" />
                    <span className="inline-block w-3 h-3 bg-[var(--news-accent)] border border-[var(--news-accent)]" />
                    <span>Heavy Influx</span>
                  </div>
                  <span>52 Weeks &bull; {data?.weeks.reduce((acc, w) => acc + w.contributionDays.length, 0) || 365} Days Logged</span>
                </div>
              </div>

              {/* Day Inspector Strip */}
              {activeDay && (
                <div className="mt-4 p-4 border border-[var(--news-rule-strong)] bg-[var(--news-card)] flex flex-wrap items-center justify-between gap-4 font-editorial">
                  <div>
                    <span className="font-telegraph text-[0.6rem] uppercase tracking-widest text-[var(--news-muted)] block">
                      INSPECTOR SELECTION:
                    </span>
                    <span className="font-headline font-bold text-base text-[var(--news-ink)]">
                      {formatDateString(activeDay.date)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-telegraph text-[0.6rem] uppercase tracking-widest text-[var(--news-muted)] block">
                      COMMITS LOGGED:
                    </span>
                    <span className="font-headline font-black text-xl text-[var(--news-accent)]">
                      {activeDay.contributionCount} Verified Operations
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Vitals Table (4 cols) */}
          <div data-reveal="left" className="lg:col-span-4 lg:border-l lg:border-[var(--news-rule)] lg:pl-8 flex flex-col justify-between">
            <div className="border border-[var(--news-rule-strong)] p-6 bg-[var(--news-card)]">
              <span className="font-telegraph text-[0.6rem] uppercase tracking-[0.25em] text-[var(--news-muted)] block mb-1">
                BUREAU OF STANDARDS // REPORT
              </span>
              <h4 className="font-headline font-bold text-xl uppercase tracking-wider text-[var(--news-ink)] border-b border-[var(--news-rule-strong)] pb-3 mb-4">
                Telemetry &amp; Productivity
              </h4>

              <div className="space-y-4 font-editorial">
                <div className="border-b border-[var(--news-rule)] pb-2">
                  <span className="font-telegraph text-[0.62rem] uppercase tracking-wider text-[var(--news-muted)] block">
                    TOTAL REGISTERED CONTRIBUTIONS
                  </span>
                  <span className="font-headline font-black text-3xl text-[var(--news-ink)]">
                    {data?.totalContributions || 0}
                  </span>
                </div>

                <div className="border-b border-[var(--news-rule)] pb-2">
                  <span className="font-telegraph text-[0.62rem] uppercase tracking-wider text-[var(--news-muted)] block">
                    ACTIVE SESSIONS RECORDED
                  </span>
                  <span className="font-headline font-bold text-xl text-[var(--news-ink)]">
                    {activeDays} Days ({consistency}% of year)
                  </span>
                </div>

                <div className="border-b border-[var(--news-rule)] pb-2">
                  <span className="font-telegraph text-[0.62rem] uppercase tracking-wider text-[var(--news-muted)] block">
                    PEAK PRODUCTION PEAK
                  </span>
                  <span className="font-headline font-bold text-xl text-[var(--news-ink)]">
                    {maxCommits} Operations in Single 24hr Cycle
                  </span>
                </div>

                <div className="border-b border-[var(--news-rule)] pb-2">
                  <span className="font-telegraph text-[0.62rem] uppercase tracking-wider text-[var(--news-muted)] block">
                    TELEGRAPH WIRE LATENCY
                  </span>
                  <span className="font-telegraph font-bold text-base text-[var(--news-accent)]">
                    {apiLatency > 0 ? `${apiLatency} MS RESPONSE` : "NOMINAL"}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[var(--news-rule-strong)] text-center">
                <span className="font-telegraph text-[0.6rem] uppercase tracking-widest text-[var(--news-muted)]">
                  LIVE API CONNECTION TO GITHUB REST V3
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DecompileNode>
  );
}
