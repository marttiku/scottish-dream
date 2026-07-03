import type { TransitStats } from "./transit";

export interface TrailTimeStats {
  /** Share of active time on trail vs in transit (0–100) */
  percent: number;
  hint: string;
  hikingDays: number;
  calendarDays: number;
}

/** Typical on-trail pace for estimating hiking hours from distance. */
const HIKING_PACE_KMH = 4;
const DEFAULT_HIKING_DAY_MINUTES = 7 * 60;

export function getTrailTimeStats(
  transit: TransitStats,
  totalHikingKm: number,
): TrailTimeStats {
  const trailMinutes =
    totalHikingKm > 0
      ? (totalHikingKm / HIKING_PACE_KMH) * 60
      : transit.hikingDays * DEFAULT_HIKING_DAY_MINUTES;

  const activeTotal = trailMinutes + transit.totalMinutes;
  const percent =
    activeTotal > 0 ? Math.round((trailMinutes / activeTotal) * 100) : 0;

  const hint = `${transit.hikingDays}/${transit.calendarDays} days hiking · ${transit.formatted} transit`;

  return {
    percent,
    hint,
    hikingDays: transit.hikingDays,
    calendarDays: transit.calendarDays,
  };
}

export function trailTimeTone(
  percent: number,
): "green" | "yellow" | "orange" | "red" | "purple" {
  if (percent >= 70) return "green";
  if (percent >= 55) return "purple";
  if (percent >= 40) return "yellow";
  if (percent >= 25) return "orange";
  return "red";
}
