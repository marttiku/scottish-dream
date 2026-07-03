import type { OvernightStay } from "./accommodation";
import type { DayPhoto } from "./photos";
import type { WildlifeSpecies } from "./wildlife";
import type { MapPoint, MapRouteSegment } from "./mapRoute";
import type { WeatherStop } from "./weatherStops";
import { getEffortStats, type EffortStats } from "../lib/effort";
import { getTrailTimeStats, type TrailTimeStats } from "../lib/trail-time";
import { getTransitStats, type TransitStats } from "../lib/transit";
import { buildWeatherAssessment, type WeatherAssessment } from "../lib/weather-assessment";

export type LegType =
  | "flight"
  | "train"
  | "ferry"
  | "bus"
  | "car"
  | "hike"
  | "stay";

export interface TimelineEvent {
  dateIso: string;
  dayLabel: string;
  title: string;
  description: string;
  type: LegType;
  details?: string[];
  /** Section divider shown above this event */
  segment?: string;
}

export interface HikingDay {
  day: number;
  dateIso: string;
  dayLabel: string;
  title: string;
  from: string;
  to: string;
  distanceKm: string;
  ascentM: number;
  camp: string;
  highlights: string[];
  elevationProfile: { km: number; alt: number }[];
  difficulty: "moderate" | "challenging" | "strenuous";
}

export interface Connection {
  name: string;
  mode: LegType;
  route: string;
  duration: string;
  operator: string;
  url: string;
  timetableUrl?: string;
  schedule?: string;
  notes: string;
  dateIso?: string;
}

export interface PackingCategory {
  name: string;
  icon: string;
  items: string[];
}

export interface TripShapeRow {
  label: string;
  value: string;
}

export interface TripMeta {
  id: string;
  title: string;
  subtitle: string;
  departureDate: string;
  returnDate: string;
  totalHikingKm: string;
  hikingDays: number;
  wildCampNights?: number;
  hutNights?: number;
  lodgedNights: number;
  route: string;
  tagline: string;
  departHint: string;
  returnHint: string;
  transportLabel: string;
  hikingStatHint: string;
  lodgedHint: string;
  tripShape: TripShapeRow[];
  mapSubtitle: string;
  mapOsmUrl: string;
  mapAriaLabel: string;
  timelineSubtitle: string;
  footerLabel: string;
  wildlifeSubtitle: string;
  showFood: boolean;
  showGearShop: boolean;
  showWildlife: boolean;
  /** Round-trip flight/ferry to gateway hub (minutes). */
  flightFerryMinutes: number;
  /** Connection modes covered by flightFerryMinutes (default: flight only). */
  gatewayTransitModes?: LegType[];
}

export interface TripData {
  meta: TripMeta;
  timeline: TimelineEvent[];
  hikingDays: HikingDay[];
  connections: Connection[];
  packing: PackingCategory[];
  tips: { title: string; body: string }[];
  overnightStays: OvernightStay[];
  mapPoints: MapPoint[];
  mapRoutes: MapRouteSegment[];
  mapBounds: [[number, number], [number, number]];
  mapCenter: [number, number];
  weatherStops: WeatherStop[];
  dayPhotos: Record<string, DayPhoto[]>;
  wildlife: WildlifeSpecies[];
}

export function getHikingDay(
  hikingDays: HikingDay[],
  dateIso: string,
  dayLabel: string,
): HikingDay | undefined {
  return hikingDays.find(
    (d) => d.dateIso === dateIso && d.dayLabel === dayLabel,
  );
}

export function getTripStats(meta: TripMeta, hikingDays: HikingDay[], connections: Connection[] = []) {
  const totalAscentM = hikingDays.reduce((sum, day) => sum + day.ascentM, 0);
  const start = new Date(`${meta.departureDate}T12:00:00`);
  const end = new Date(`${meta.returnDate}T12:00:00`);
  const calendarDays =
    Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  const transit = getTransitStats(connections, meta.hikingDays, calendarDays, {
    flightFerryMinutes: meta.flightFerryMinutes,
    gatewayModes: meta.gatewayTransitModes,
  });

  const effort = getEffortStats(meta, hikingDays);
  const weather = buildWeatherAssessment(meta.id);
  const trailTime = getTrailTimeStats(transit, effort.totalKm);

  return {
    totalAscentM,
    calendarDays,
    calendarNights: calendarDays - 1,
    wildCampNights: meta.wildCampNights ?? 0,
    hutNights: meta.hutNights ?? 0,
    lodgedNights: meta.lodgedNights,
    route: meta.route,
    transit,
    effort,
    weather,
    trailTime,
  };
}

export type { TransitStats, EffortStats, WeatherAssessment, TrailTimeStats };

export function photoKey(dateIso: string, dayLabel: string): string {
  return `${dateIso}::${dayLabel}`;
}

export function getDayPhotos(
  dayPhotos: Record<string, DayPhoto[]>,
  dateIso: string,
  dayLabel: string,
): DayPhoto[] {
  return dayPhotos[photoKey(dateIso, dayLabel)] ?? [];
}
