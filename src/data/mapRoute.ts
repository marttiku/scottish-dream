export type MapPointType = "city" | "trail" | "camp" | "transport";

export interface MapPoint {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: MapPointType;
  /** Shown in marker popup */
  note?: string;
}

export interface MapRouteSegment {
  id: string;
  label: string;
  color: string;
  dashed?: boolean;
  /** Ordered point ids — polyline follows these coordinates */
  pointIds: string[];
}

/** Lat/lng for OpenStreetMap — trekking & transport corridor */
export const MAP_POINTS: MapPoint[] = [
  {
    id: "edinburgh",
    name: "Edinburgh",
    lat: 55.9533,
    lng: -3.1883,
    type: "city",
    note: "Tue 7 Jul arrival · Tue 14–Wed 15 Jul return",
  },
  {
    id: "mallaig",
    name: "Mallaig",
    lat: 57.0059,
    lng: -5.827,
    type: "transport",
    note: "Wed 8 Jul · West Highland Line",
  },
  {
    id: "inverie",
    name: "Inverie",
    lat: 57.0325,
    lng: -5.6814,
    type: "trail",
    note: "Wed 8 Jul · ferry from Mallaig",
  },
  {
    id: "sourlies",
    name: "Sourlies",
    lat: 57.017,
    lng: -5.752,
    type: "camp",
    note: "Thu 9 Jul · Hike 1 camp",
  },
  {
    id: "mam-unndal",
    name: "Mam Unndal",
    lat: 57.0,
    lng: -5.55,
    type: "trail",
    note: "Fri 10 Jul · pass ~620 m",
  },
  {
    id: "achuil",
    name: "A' Chuil",
    lat: 56.958,
    lng: -5.425,
    type: "camp",
    note: "Fri 10 Jul · Hike 2 camp",
  },
  {
    id: "glenfinnan",
    name: "Glenfinnan",
    lat: 56.8763,
    lng: -5.4312,
    type: "transport",
    note: "Sat 11 Jul · Hike 3 finish",
  },
  {
    id: "polloch",
    name: "Polloch",
    lat: 56.905,
    lng: -5.623,
    type: "trail",
    note: "Sat 11 Jul · Loch Shiel ferry",
  },
  {
    id: "strontian",
    name: "Strontian",
    lat: 56.718,
    lng: -5.684,
    type: "camp",
    note: "Sun 12 Jul · Hike 4 camp",
  },
  {
    id: "lochaline",
    name: "Lochaline",
    lat: 56.537,
    lng: -5.756,
    type: "transport",
    note: "Mon 13 Jul · bus from Strontian",
  },
  {
    id: "fishnish",
    name: "Fishnish",
    lat: 56.5378,
    lng: -5.8172,
    type: "transport",
    note: "Mon 13 Jul · ferry from Lochaline",
  },
  {
    id: "craignure",
    name: "Craignure",
    lat: 56.4722,
    lng: -5.7044,
    type: "transport",
    note: "Mon 13 Jul · bus from Fishnish",
  },
  {
    id: "oban",
    name: "Oban",
    lat: 56.415,
    lng: -5.472,
    type: "city",
    note: "Mon 13 Jul · ferry from Craignure",
  },
];

export const MAP_ROUTES: MapRouteSegment[] = [
  {
    id: "travel-out",
    label: "Edinburgh → Inverie",
    color: "#a78bfa",
    dashed: true,
    pointIds: ["edinburgh", "mallaig", "inverie"],
  },
  {
    id: "knoydart",
    label: "Knoydart (3 days)",
    color: "#6366f1",
    pointIds: ["inverie", "sourlies", "mam-unndal", "achuil", "glenfinnan"],
  },
  {
    id: "loch-shiel",
    label: "Loch Shiel ferry",
    color: "#22d3ee",
    dashed: true,
    pointIds: ["glenfinnan", "polloch"],
  },
  {
    id: "morvern-hike",
    label: "Polloch → Strontian",
    color: "#22d3ee",
    pointIds: ["polloch", "strontian"],
  },
  {
    id: "transit-oban",
    label: "Bus & ferries",
    color: "#a78bfa",
    dashed: true,
    pointIds: ["strontian", "lochaline", "fishnish", "craignure", "oban"],
  },
  {
    id: "return",
    label: "Oban → Edinburgh",
    color: "#a78bfa",
    dashed: true,
    pointIds: ["oban", "edinburgh"],
  },
];

const pointById = Object.fromEntries(MAP_POINTS.map((p) => [p.id, p]));

export function resolveRouteCoords(segment: MapRouteSegment): [number, number][] {
  return segment.pointIds
    .map((id) => pointById[id])
    .filter(Boolean)
    .map((p) => [p.lat, p.lng] as [number, number]);
}

export const MAP_BOUNDS: [[number, number], [number, number]] = [
  [56.25, -5.95],
  [57.15, -3.0],
];

export const MAP_CENTER: [number, number] = [56.75, -5.35];

export const TYPE_COLORS: Record<MapPointType, string> = {
  city: "#a78bfa",
  trail: "#6366f1",
  camp: "#22d3ee",
  transport: "#fbbf24",
};
