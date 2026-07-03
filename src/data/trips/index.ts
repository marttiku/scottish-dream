import type { MapPoint, MapRouteSegment } from "../mapRoute";
import type { TripData } from "../types";
import { scotlandTrip } from "./scotland";
import { tatrasTrip } from "./tatras";
import { laplandTrip } from "./lapland";

export const TRIPS: Record<string, TripData> = {
  scotland: scotlandTrip,
  tatras: tatrasTrip,
  lapland: laplandTrip,
};

export const TRIP_LIST = Object.values(TRIPS);

export const DEFAULT_TRIP_ID = "scotland";

export function getTrip(id: string): TripData {
  return TRIPS[id] ?? TRIPS[DEFAULT_TRIP_ID];
}

export function isValidTripId(id: string): boolean {
  return id in TRIPS;
}

export function resolveRouteCoords(
  points: MapPoint[],
  segment: MapRouteSegment,
): [number, number][] {
  const pointById = Object.fromEntries(points.map((p) => [p.id, p]));
  return segment.pointIds
    .map((id) => pointById[id])
    .filter(Boolean)
    .map((p) => [p.lat, p.lng] as [number, number]);
}

export const TRIP_LABELS: Record<string, string> = {
  scotland: "Scotland",
  tatras: "Tatras",
  lapland: "Lapland",
};
