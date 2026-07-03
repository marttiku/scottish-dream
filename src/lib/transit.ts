import type { Connection } from "../data/types";

/** Parse connection duration strings like "~2 h 45 min", "~10–11 h", "~25–40 min". */
export function parseDurationMinutes(duration: string): number {
  const s = duration
    .toLowerCase()
    .replace(/~/g, "")
    .replace(/\s+to\s+.+$/, "")
    .trim();

  const rangeMatch = s.match(
    /^([\d.]+)\s*[–-]\s*([\d.]+)\s*(h(?:ours?|rs?)?|min(?:ute)?s?)\b/,
  );
  if (rangeMatch) {
    const avg = (parseFloat(rangeMatch[1]) + parseFloat(rangeMatch[2])) / 2;
    return rangeMatch[3].startsWith("h") ? avg * 60 : avg;
  }

  let total = 0;
  const hours = s.match(/([\d.]+)\s*h(?:ours?|rs?)?\b/);
  if (hours) total += parseFloat(hours[1]) * 60;
  const mins = s.match(/([\d.]+)\s*min(?:ute)?s?\b/);
  if (mins) total += parseFloat(mins[1]);

  return total;
}

export function formatTransitMinutes(minutes: number): string {
  const rounded = Math.round(minutes);
  if (rounded === 0) return "~0 min";
  const h = Math.floor(rounded / 60);
  const min = rounded % 60;
  if (h === 0) return `~${min} min`;
  if (min === 0) return `~${h} h`;
  return `~${h} h ${min} min`;
}

export interface TransitStats {
  totalMinutes: number;
  formatted: string;
  hikingDays: number;
  calendarDays: number;
}

export function getTransitStats(
  connections: Connection[],
  hikingDays: number,
  calendarDays: number,
): TransitStats {
  const totalMinutes = connections.reduce(
    (sum, c) => sum + parseDurationMinutes(c.duration),
    0,
  );

  return {
    totalMinutes,
    formatted: formatTransitMinutes(totalMinutes),
    hikingDays,
    calendarDays,
  };
}
