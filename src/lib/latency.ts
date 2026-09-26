// Shared cache for the real /api/github latency measurement.
// GitGraph writes once on fetch success; Telemetry reads on mount so a
// listener-vs-dispatch race can never leave the HUD stuck on "--MS".
let lastLatency: number | null = null;

export function setLastLatency(ms: number) {
    lastLatency = ms;
}

export function getLastLatency(): number | null {
    return lastLatency;
}
