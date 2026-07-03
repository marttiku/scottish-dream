import type { TripData } from "../types";
import {
  CONNECTIONS,
  HIKING_DAYS,
  PACKING,
  TIMELINE,
  TIPS,
  TRIP_META,
} from "../trip";
import { OVERNIGHT_STAYS } from "../accommodation";
import {
  MAP_BOUNDS,
  MAP_CENTER,
  MAP_POINTS,
  MAP_ROUTES,
} from "../mapRoute";
import { WEATHER_STOPS } from "../weatherStops";
import { DAY_PHOTOS } from "../photos";
import { WILDLIFE_SPECIES } from "../wildlife";

export const scotlandTrip: TripData = {
  meta: {
    id: "scotland",
    ...TRIP_META,
    departHint: "Evening flight to Tallinn",
    returnHint: "Evening flight to Tallinn",
    transportLabel: "Tallinn ↔ Edinburgh",
    hikingStatHint: "Knoydart 3 · Morvern 2",
    lodgedHint: "Edinburgh · Inverie · Glenfinnan · Oban",
    tripShape: [
      {
        label: "Knoydart traverse",
        value: "Thu 9 – Sat 11 Jul · ~70 km · overnight Glenfinnan",
      },
      {
        label: "Loch Shiel crossing",
        value: "Sun 12 Jul morning · Glenfinnan → Polloch ferry",
      },
      {
        label: "Morvern leg",
        value: "1 hike day + bus & ferries via Mull to Oban",
      },
      { label: "Total on foot", value: "~108 km over 5 days" },
      { label: "Midges", value: "Peak season — net & Smidge essential" },
    ],
    mapSubtitle: "OpenStreetMap · Knoydart & Morvern corridor",
    mapOsmUrl: "https://www.openstreetmap.org/#map=9/56.75/-5.35",
    mapAriaLabel: "Interactive map of the Scottish Dream trek route",
    timelineSubtitle:
      "Knoydart traverse & Morvern leg — wild camps, ferries, and the West Highland Line",
    footerLabel: "Scottish Dream",
    wildlifeSubtitle:
      "What to watch for along Inverie → Oban — dawn and dusk are best",
    showFood: true,
    showGearShop: true,
    showWildlife: true,
    flightFerryMinutes: 12 * 60,
    gatewayTransitModes: ["flight", "ferry"],
  },
  timeline: TIMELINE,
  hikingDays: HIKING_DAYS,
  connections: CONNECTIONS,
  packing: PACKING,
  tips: TIPS,
  overnightStays: OVERNIGHT_STAYS,
  mapPoints: MAP_POINTS,
  mapRoutes: MAP_ROUTES,
  mapBounds: MAP_BOUNDS,
  mapCenter: MAP_CENTER,
  weatherStops: WEATHER_STOPS,
  dayPhotos: DAY_PHOTOS,
  wildlife: WILDLIFE_SPECIES,
};
