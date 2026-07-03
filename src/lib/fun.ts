import type { EffortStats } from "./effort";
import type { TransitStats } from "./transit";
import type { WeatherAssessment } from "./weather-assessment";

export interface FunStats {
  /** Composite fun index 0–100 */
  percent: number;
  hint: string;
  hikingDays: number;
  calendarDays: number;
}

/** ~30 h of connections ≈ 0 transit score; scales linearly below that. */
const TRANSIT_REFERENCE_MINUTES = 30 * 60;

function weatherScore(weather: WeatherAssessment): number {
  return weather.live?.score ?? weather.seasonScore * 10;
}

export function getFunStats(
  transit: TransitStats,
  effort: EffortStats,
  weather: WeatherAssessment,
): FunStats {
  const trailShare =
    transit.calendarDays > 0
      ? (transit.hikingDays / transit.calendarDays) * 100
      : 0;

  const transitScore = Math.max(
    0,
    100 - (transit.totalMinutes / TRANSIT_REFERENCE_MINUTES) * 100,
  );

  const effortScore = effort.score;
  const wxScore = weatherScore(weather);

  const percent = Math.round(
    trailShare * 0.3 +
      transitScore * 0.25 +
      effortScore * 0.25 +
      wxScore * 0.2,
  );

  const hint = `${transit.hikingDays}/${transit.calendarDays} days hiking · ${transit.formatted} transit · ${effort.label} · ${weather.displayValue}`;

  return {
    percent,
    hint,
    hikingDays: transit.hikingDays,
    calendarDays: transit.calendarDays,
  };
}

export function funTone(
  percent: number,
): "green" | "yellow" | "orange" | "red" | "purple" {
  if (percent >= 75) return "green";
  if (percent >= 62) return "purple";
  if (percent >= 48) return "yellow";
  if (percent >= 35) return "orange";
  return "red";
}
