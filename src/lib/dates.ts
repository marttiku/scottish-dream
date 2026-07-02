const DISPLAY_TZ = "Europe/London";

function parseIso(iso: string): Date {
  return new Date(`${iso}T12:00:00`);
}

/** Tue 7 Jul */
export function formatTripDateShort(iso: string): string {
  return parseIso(iso).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: DISPLAY_TZ,
  });
}

/** Tuesday, 7 July 2026 */
export function formatTripDateLong(iso: string): string {
  return parseIso(iso).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: DISPLAY_TZ,
  });
}

/** 7 July 2026 */
export function formatTripDateMedium(iso: string): string {
  return parseIso(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: DISPLAY_TZ,
  });
}

/** 7–14 July 2026 */
export function formatTripDateRange(startIso: string, endIso: string): string {
  const startDay = Number(startIso.slice(8, 10));
  const endDay = Number(endIso.slice(8, 10));
  const monthYear = parseIso(endIso).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    timeZone: DISPLAY_TZ,
  });
  return `${startDay}–${endDay} ${monthYear}`;
}

/** Tue 7 Jul – Tue 14 Jul 2026 */
export function formatTripDateRangeWithWeekdays(
  startIso: string,
  endIso: string,
): string {
  return `${formatTripDateShort(startIso)} – ${formatTripDateShort(endIso)} 2026`;
}
