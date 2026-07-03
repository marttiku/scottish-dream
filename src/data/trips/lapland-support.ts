import type { MapPoint, MapRouteSegment } from "../mapRoute";
import type { OvernightStay } from "../accommodation";
import type { WeatherStop } from "../weatherStops";

export const LAPLAND_MAP_POINTS: MapPoint[] = [
  {
    id: "tallinn",
    name: "Tallinn",
    lat: 59.437,
    lng: 24.7536,
    type: "city",
    note: "Home · ferry to Helsinki",
  },
  {
    id: "helsinki",
    name: "Helsinki",
    lat: 60.1699,
    lng: 24.9384,
    type: "city",
    note: "Tue 7 Jul ferry · Wed 15 Jul return",
  },
  {
    id: "kiruna",
    name: "Kiruna",
    lat: 67.8558,
    lng: 20.2253,
    type: "transport",
    note: "Car base · bus link to Nikkaluokta",
  },
  {
    id: "abisko",
    name: "Abisko",
    lat: 68.3498,
    lng: 18.8261,
    type: "trail",
    note: "Wed 8 Jul · Kungsleden trailhead (68°N)",
  },
  {
    id: "abiskojaure",
    name: "Abiskojaure",
    lat: 68.28,
    lng: 18.72,
    type: "camp",
    note: "Thu 9 Jul · STF hut night 1",
  },
  {
    id: "alesjaure",
    name: "Alesjaure",
    lat: 68.2,
    lng: 18.58,
    type: "camp",
    note: "Fri 10 Jul · STF hut night 2",
  },
  {
    id: "tjaktja",
    name: "Tjäktja",
    lat: 68.12,
    lng: 18.45,
    type: "trail",
    note: "Sat 11 Jul · pass ~1,150 m",
  },
  {
    id: "salka",
    name: "Sälka",
    lat: 68.05,
    lng: 18.38,
    type: "camp",
    note: "Sat 11 Jul · STF hut night 3",
  },
  {
    id: "kebnekaise",
    name: "Kebnekaise",
    lat: 67.9,
    lng: 18.52,
    type: "camp",
    note: "Sun 12 Jul · STF mountain station",
  },
  {
    id: "nikkaluokta",
    name: "Nikkaluokta",
    lat: 67.859,
    lng: 19.015,
    type: "city",
    note: "Mon 13 Jul · hike finish · bus to Kiruna",
  },
];

export const LAPLAND_MAP_ROUTES: MapRouteSegment[] = [
  {
    id: "ferry-out",
    label: "Ferry to Helsinki",
    color: "#a78bfa",
    dashed: true,
    pointIds: ["tallinn", "helsinki"],
  },
  {
    id: "drive-north",
    label: "Drive to Lapland",
    color: "#a78bfa",
    dashed: true,
    pointIds: ["helsinki", "kiruna", "abisko"],
  },
  {
    id: "kungsleden",
    label: "Kungsleden (5 days)",
    color: "#6366f1",
    pointIds: [
      "abisko",
      "abiskojaure",
      "alesjaure",
      "tjaktja",
      "salka",
      "kebnekaise",
      "nikkaluokta",
    ],
  },
  {
    id: "drive-south",
    label: "Drive south",
    color: "#a78bfa",
    dashed: true,
    pointIds: ["nikkaluokta", "kiruna", "helsinki"],
  },
  {
    id: "ferry-return",
    label: "Ferry to Tallinn",
    color: "#a78bfa",
    dashed: true,
    pointIds: ["helsinki", "tallinn"],
  },
];

export const LAPLAND_MAP_BOUNDS: [[number, number], [number, number]] = [
  [67.75, 18.3],
  [68.45, 24.95],
];

export const LAPLAND_MAP_CENTER: [number, number] = [68.1, 19.5];

export const LAPLAND_OVERNIGHT_STAYS: OvernightStay[] = [
  {
    id: "helsinki-7",
    dateIso: "2026-07-07",
    dayLabel: "Stay",
    weatherDayLabel: "Stay",
    location: "Helsinki",
    headline: "After the ferry from Tallinn",
    summary:
      "Arrival at West Harbour. Pick up rental car — overnight near the port for an early start north.",
    options: [
      {
        name: "Hotel Hanko",
        type: "hotel",
        url: "https://www.hankohotel.fi/en/",
        notes: "Near West Harbour · short drive to Tallink terminal",
        recommended: true,
      },
      {
        name: "Scandic Grand Marina",
        type: "hotel",
        url: "https://www.scandichotels.com/hotels/finland/helsinki/scandic-grand-marina",
        notes: "Waterfront · easy ferry access",
      },
    ],
  },
  {
    id: "abisko-8",
    dateIso: "2026-07-08",
    dayLabel: "Stay",
    weatherDayLabel: "Stay",
    location: "Abisko",
    headline: "STF Abisko Turiststation",
    summary:
      "After the long drive from Helsinki (~12 h). Rest before Kungsleden — midnight sun in July.",
    options: [
      {
        name: "STF Abisko Turiststation",
        type: "hut",
        url: "https://www.swedishtouristassociation.com/facilities/stf-abisko-turiststation/",
        notes: "Book ahead · restaurant & shop on site",
        recommended: true,
      },
      {
        name: "Abisko Camping",
        type: "campsite",
        notes: "Alternative if station full — Allemansrätten camping nearby",
      },
    ],
  },
  {
    id: "abiskojaure-9",
    dateIso: "2026-07-09",
    dayLabel: "Hike 1",
    weatherDayLabel: "Hike 1",
    location: "Abiskojaure",
    headline: "STF Abiskojaure",
    summary: "First hut night on the King of Trails — lakeside STF cabin.",
    options: [
      {
        name: "STF Abiskojaure",
        type: "hut",
        url: "https://www.swedishtouristassociation.com/facilities/stf-abiskojaure-mountain-cabin/",
        recommended: true,
      },
    ],
  },
  {
    id: "alesjaure-10",
    dateIso: "2026-07-10",
    dayLabel: "Hike 2",
    weatherDayLabel: "Hike 2",
    location: "Alesjaure",
    headline: "STF Alesjaure",
    summary: "Longest day on the trail — vast open plateau walking.",
    options: [
      {
        name: "STF Alesjaure",
        type: "hut",
        url: "https://www.swedishtouristassociation.com/facilities/stf-alesjaure-mountain-cabin/",
        notes: "Hut shop for resupply",
        recommended: true,
      },
    ],
  },
  {
    id: "salka-11",
    dateIso: "2026-07-11",
    dayLabel: "Hike 3",
    weatherDayLabel: "Hike 3",
    location: "Sälka",
    headline: "STF Sälka",
    summary: "Over Tjäktja pass (~1,150 m) — highest point on this section.",
    options: [
      {
        name: "STF Sälka",
        type: "hut",
        url: "https://www.swedishtouristassociation.com/facilities/stf-salka-mountain-cabin/",
        recommended: true,
      },
    ],
  },
  {
    id: "kebnekaise-12",
    dateIso: "2026-07-12",
    dayLabel: "Hike 4",
    weatherDayLabel: "Hike 4",
    location: "Kebnekaise",
    headline: "STF Kebnekaise Mountain Station",
    summary:
      "Below Sweden's highest peak — dramatic views into the Kebnekaise massif.",
    options: [
      {
        name: "STF Kebnekaise Mountain Station",
        type: "hut",
        url: "https://www.swedishtouristassociation.com/facilities/stf-kebnekaise-mountain-station/",
        notes: "Restaurant · popular stop before the lake crossing",
        recommended: true,
      },
    ],
  },
  {
    id: "nikkaluokta-13",
    dateIso: "2026-07-13",
    dayLabel: "Hike 5",
    weatherDayLabel: "Hike 5",
    location: "Nikkaluokta",
    headline: "Nikkaluokta lodge",
    summary:
      "Final stage with boat across Lake Ladtjojaure. Evening bus to Kiruna to rejoin the car.",
    options: [
      {
        name: "Nikkaluokta Fjällstation",
        type: "lodge",
        url: "https://www.nikkaluokta.com/",
        notes: "Not STF — book separately · restaurant & shop",
        recommended: true,
      },
    ],
  },
];

export const LAPLAND_WEATHER_STOPS: WeatherStop[] = [
  {
    dateIso: "2026-07-07",
    dayLabel: "Day 0",
    location: "Helsinki",
    context: "Ferry from Tallinn",
    latitude: 60.1699,
    longitude: 24.9384,
  },
  {
    dateIso: "2026-07-07",
    dayLabel: "Stay",
    location: "Helsinki",
    context: "Overnight · West Harbour area",
    latitude: 60.1699,
    longitude: 24.9384,
  },
  {
    dateIso: "2026-07-08",
    dayLabel: "Transit",
    location: "Abisko",
    context: "Drive from Helsinki · Arctic Circle",
    latitude: 68.3498,
    longitude: 18.8261,
  },
  {
    dateIso: "2026-07-08",
    dayLabel: "Stay",
    location: "Abisko",
    context: "Pre-trek night · STF Turiststation",
    latitude: 68.3498,
    longitude: 18.8261,
  },
  {
    dateIso: "2026-07-09",
    dayLabel: "Hike 1",
    location: "Abiskojaure",
    context: "Abisko → Abiskojaure",
    latitude: 68.28,
    longitude: 18.72,
  },
  {
    dateIso: "2026-07-10",
    dayLabel: "Hike 2",
    location: "Alesjaure",
    context: "Abiskojaure → Alesjaure",
    latitude: 68.2,
    longitude: 18.58,
  },
  {
    dateIso: "2026-07-11",
    dayLabel: "Hike 3",
    location: "Sälka",
    context: "Alesjaure → Tjäktja → Sälka",
    latitude: 68.05,
    longitude: 18.38,
  },
  {
    dateIso: "2026-07-12",
    dayLabel: "Hike 4",
    location: "Kebnekaise",
    context: "Sälka → Singi → Kebnekaise",
    latitude: 67.9,
    longitude: 18.52,
  },
  {
    dateIso: "2026-07-13",
    dayLabel: "Hike 5",
    location: "Nikkaluokta",
    context: "Kebnekaise → Nikkaluokta · trail end",
    latitude: 67.859,
    longitude: 19.015,
  },
  {
    dateIso: "2026-07-13",
    dayLabel: "Stay",
    location: "Kiruna",
    context: "Bus from Nikkaluokta · rejoin car",
    latitude: 67.8558,
    longitude: 20.2253,
  },
  {
    dateIso: "2026-07-14",
    dayLabel: "Transit",
    location: "Finland",
    context: "Drive Kiruna → Helsinki",
    latitude: 64.0,
    longitude: 22.0,
  },
  {
    dateIso: "2026-07-15",
    dayLabel: "Return",
    location: "Helsinki",
    context: "Ferry to Tallinn",
    latitude: 60.1699,
    longitude: 24.9384,
  },
];
