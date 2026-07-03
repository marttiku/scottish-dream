import type { HikingDay, TripMeta } from "../data/types";

export type EffortLevel = "Light" | "Moderate" | "Hard" | "Severe" | "Extreme";

export interface EffortStats {
  /** Composite effort index 0–100 */
  score: number;
  label: EffortLevel;
  hint: string;
  totalKm: number;
  totalAscentM: number;
}

function parseHikingKm(value: string): number {
  const match = value.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

const DIFFICULTY_WEIGHT: Record<HikingDay["difficulty"], number> = {
  moderate: 1,
  challenging: 2,
  strenuous: 3,
};

export function getEffortStats(
  meta: TripMeta,
  hikingDays: HikingDay[],
): EffortStats {
  const totalKm = parseHikingKm(meta.totalHikingKm);
  const totalAscentM = hikingDays.reduce((sum, d) => sum + d.ascentM, 0);

  const avgDifficulty =
    hikingDays.length > 0
      ? hikingDays.reduce((sum, d) => sum + DIFFICULTY_WEIGHT[d.difficulty], 0) /
        hikingDays.length
      : 1;

  const wildCampBonus = (meta.wildCampNights ?? 0) * 4;

  const score = Math.round(
    Math.min(100, totalKm / 1.15) * 0.28 +
      Math.min(100, totalAscentM / 75) * 0.42 +
      (avgDifficulty / 3) * 100 * 0.22 +
      wildCampBonus * 0.08,
  );

  const label = effortLabel(score);

  return {
    score,
    label,
    hint: `${meta.totalHikingKm} · ~${totalAscentM.toLocaleString("en-GB")} m gain`,
    totalKm,
    totalAscentM,
  };
}

function effortLabel(score: number): EffortLevel {
  if (score >= 86) return "Extreme";
  if (score >= 72) return "Severe";
  if (score >= 56) return "Hard";
  if (score >= 38) return "Moderate";
  return "Light";
}

export function effortTone(
  label: EffortLevel,
): "green" | "yellow" | "orange" | "red" | "purple" {
  switch (label) {
    case "Light":
      return "green";
    case "Moderate":
      return "yellow";
    case "Hard":
      return "orange";
    case "Severe":
      return "red";
    case "Extreme":
      return "purple";
  }
}
