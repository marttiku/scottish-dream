import type { MapPoint, MapRouteSegment } from "../mapRoute";
import type { OvernightStay } from "../accommodation";
import type { WeatherStop } from "../weatherStops";

export const TATRAS_MAP_POINTS: MapPoint[] = [
  {
    id: "krakow",
    name: "Kraków",
    lat: 50.0777,
    lng: 19.7848,
    type: "city",
    note: "Tue 7 Jul arrival · Wed 15 Jul return",
  },
  {
    id: "strbske",
    name: "Štrbské Pleso",
    lat: 49.1206,
    lng: 20.0606,
    type: "city",
    note: "Base · Rysy & circuit start/end",
  },
  {
    id: "popradske",
    name: "Popradské pleso",
    lat: 49.1239,
    lng: 20.0583,
    type: "trail",
    note: "Wed 8 Jul · Rysy approach",
  },
  {
    id: "rysy",
    name: "Rysy",
    lat: 49.1792,
    lng: 20.0883,
    type: "trail",
    note: "Wed 8 Jul · 2,499 m summit",
  },
  {
    id: "biela-voda",
    name: "Bielá Voda",
    lat: 49.1711,
    lng: 20.2433,
    type: "transport",
    note: "Thu 9 Jul · circuit trailhead",
  },
  {
    id: "zelene",
    name: "Zelené pleso",
    lat: 49.1872,
    lng: 20.2136,
    type: "camp",
    note: "Thu 9 Jul · Hut night 1",
  },
  {
    id: "zbojnicka",
    name: "Zbojnícka chata",
    lat: 49.1633,
    lng: 20.1867,
    type: "camp",
    note: "Fri 10 Jul · Hut night 2",
  },
  {
    id: "prielom",
    name: "Prielom",
    lat: 49.175,
    lng: 20.165,
    type: "trail",
    note: "Sat 11 Jul · pass ~2,290 m",
  },
  {
    id: "popradske-hut",
    name: "Popradské pleso hut",
    lat: 49.1239,
    lng: 20.0583,
    type: "camp",
    note: "Sat 11 Jul · Hut night 3",
  },
  {
    id: "krivan",
    name: "Kriváň",
    lat: 49.1639,
    lng: 19.8547,
    type: "trail",
    note: "Mon 13 Jul · 2,494 m summit",
  },
  {
    id: "solisko",
    name: "Predné Solisko",
    lat: 49.1417,
    lng: 20.0583,
    type: "trail",
    note: "Tue 14 Jul · day hike",
  },
];

export const TATRAS_MAP_ROUTES: MapRouteSegment[] = [
  {
    id: "travel-in",
    label: "Kraków → Štrbské",
    color: "#a78bfa",
    dashed: true,
    pointIds: ["krakow", "strbske"],
  },
  {
    id: "rysy",
    label: "Rysy summit",
    color: "#6366f1",
    pointIds: ["strbske", "popradske", "rysy", "strbske"],
  },
  {
    id: "circuit",
    label: "Hut circuit (4 days)",
    color: "#6366f1",
    pointIds: [
      "strbske",
      "biela-voda",
      "zelene",
      "zbojnicka",
      "prielom",
      "popradske-hut",
      "strbske",
    ],
  },
  {
    id: "krivan",
    label: "Kriváň day hike",
    color: "#22d3ee",
    pointIds: ["strbske", "krivan", "strbske"],
  },
  {
    id: "solisko",
    label: "Solisko day hike",
    color: "#22d3ee",
    pointIds: ["strbske", "solisko", "strbske"],
  },
  {
    id: "travel-out",
    label: "Štrbské → Kraków",
    color: "#a78bfa",
    dashed: true,
    pointIds: ["strbske", "krakow"],
  },
];

export const TATRAS_MAP_BOUNDS: [[number, number], [number, number]] = [
  [49.05, 19.75],
  [49.25, 20.3],
];

export const TATRAS_MAP_CENTER: [number, number] = [49.14, 20.05];

export const TATRAS_OVERNIGHT_STAYS: OvernightStay[] = [
  {
    id: "strbske-7",
    dateIso: "2026-07-07",
    dayLabel: "Stay",
    weatherDayLabel: "Stay",
    location: "Štrbské Pleso",
    headline: "Late arrival at Štrbské Pleso",
    summary:
      "After the evening flight to Kraków and ~3 h drive. Check in, quick food, early night before Rysy.",
    options: [
      {
        name: "Hotel FIS",
        type: "hotel",
        url: "https://www.hotelfis.sk/en/",
        notes: "On the lake · popular with hikers",
        recommended: true,
      },
      {
        name: "Penzión U Jeleňa",
        type: "b&b",
        url: "https://www.ujelena.sk/",
        notes: "Budget-friendly · short walk to trails",
      },
    ],
  },
  {
    id: "strbske-8",
    dateIso: "2026-07-08",
    dayLabel: "Stay",
    weatherDayLabel: "Stay",
    location: "Štrbské Pleso",
    headline: "After Rysy — back to base",
    summary:
      "Long summit day. Return to Štrbské for a proper bed, shower, and resupply before the hut circuit.",
    options: [
      {
        name: "Hotel FIS",
        type: "hotel",
        url: "https://www.hotelfis.sk/en/",
        recommended: true,
      },
      {
        name: "Apartmány Hrebienok",
        type: "b&b",
        notes: "Apartments near TEŽ station",
      },
    ],
  },
  {
    id: "zelene-9",
    dateIso: "2026-07-09",
    dayLabel: "Hike 1",
    weatherDayLabel: "Hike 1",
    location: "Zelené pleso",
    headline: "Chata pri Zelenom plese",
    summary:
      "First hut night on the circuit. Book dormitory beds — dinner served at the hut.",
    options: [
      {
        name: "Chata pri Zelenom plese",
        type: "hut",
        url: "https://www.tatry.sk/en/chata-pri-zelenom-plese/",
        notes: "1,551 m · book by phone/email well ahead",
        recommended: true,
      },
    ],
  },
  {
    id: "zbojnicka-10",
    dateIso: "2026-07-10",
    dayLabel: "Hike 2",
    weatherDayLabel: "Hike 2",
    location: "Zbojnícka chata",
    headline: "Zbojnícka chata",
    summary:
      "After Priečne sedlo — exposed chain sections. Veľká Studená dolina with 26 alpine lakes.",
    options: [
      {
        name: "Zbojnícka chata",
        type: "hut",
        url: "https://zbojnickachata.sk/en/",
        notes: "1,960 m · classic Tatra hut",
        recommended: true,
      },
    ],
  },
  {
    id: "popradske-11",
    dateIso: "2026-07-11",
    dayLabel: "Hike 3",
    weatherDayLabel: "Hike 3",
    location: "Popradské pleso",
    headline: "Chata pri Popradskom plese",
    summary:
      "Hardest circuit day over Prielom. Lakeside hut above the tree line.",
    options: [
      {
        name: "Chata pri Popradskom plese",
        type: "hut",
        url: "https://www.tatry.sk/en/chata-pri-popradskom-plese/",
        notes: "1,500 m · on the Magistrala",
        recommended: true,
      },
    ],
  },
  {
    id: "strbske-12",
    dateIso: "2026-07-12",
    dayLabel: "Hike 4",
    weatherDayLabel: "Hike 4",
    location: "Štrbské Pleso",
    headline: "Circuit complete — back at base",
    summary:
      "Short lakeside walk finishes the loop. Car waiting at Štrbské parking.",
    options: [
      {
        name: "Hotel FIS",
        type: "hotel",
        url: "https://www.hotelfis.sk/en/",
        recommended: true,
      },
    ],
  },
  {
    id: "strbske-13",
    dateIso: "2026-07-13",
    dayLabel: "Hike 5",
    weatherDayLabel: "Hike 5",
    location: "Štrbské Pleso",
    headline: "After Kriváň",
    summary: "Full day on Slovakia's iconic peak. Return to Štrbské for the night.",
    options: [
      {
        name: "Hotel FIS",
        type: "hotel",
        recommended: true,
      },
    ],
  },
  {
    id: "strbske-14",
    dateIso: "2026-07-14",
    dayLabel: "Hike 6",
    weatherDayLabel: "Hike 6",
    location: "Štrbské Pleso",
    headline: "After Solisko day hike",
    summary: "Moderate summit day before the drive back to Kraków.",
    options: [
      {
        name: "Hotel FIS",
        type: "hotel",
        recommended: true,
      },
    ],
  },
];

export const TATRAS_WEATHER_STOPS: WeatherStop[] = [
  {
    dateIso: "2026-07-07",
    dayLabel: "Day 0",
    location: "Štrbské Pleso",
    context: "Late arrival from Kraków",
    latitude: 49.1206,
    longitude: 20.0606,
  },
  {
    dateIso: "2026-07-07",
    dayLabel: "Stay",
    location: "Štrbské Pleso",
    context: "Overnight · base hotel",
    latitude: 49.1206,
    longitude: 20.0606,
  },
  {
    dateIso: "2026-07-08",
    dayLabel: "Hike 1",
    location: "Rysy",
    context: "Štrbské → Rysy summit",
    latitude: 49.1792,
    longitude: 20.0883,
  },
  {
    dateIso: "2026-07-08",
    dayLabel: "Stay",
    location: "Štrbské Pleso",
    context: "Overnight after Rysy",
    latitude: 49.1206,
    longitude: 20.0606,
  },
  {
    dateIso: "2026-07-09",
    dayLabel: "Hike 2",
    location: "Zelené pleso",
    context: "Bielá Voda → Zelené pleso hut",
    latitude: 49.1872,
    longitude: 20.2136,
  },
  {
    dateIso: "2026-07-10",
    dayLabel: "Hike 3",
    location: "Zbojnícka chata",
    context: "Zelené → Priečne → Zbojnícka",
    latitude: 49.1633,
    longitude: 20.1867,
  },
  {
    dateIso: "2026-07-11",
    dayLabel: "Hike 4",
    location: "Popradské pleso",
    context: "Zbojnícka → Prielom → Popradské",
    latitude: 49.1239,
    longitude: 20.0583,
  },
  {
    dateIso: "2026-07-12",
    dayLabel: "Hike 5",
    location: "Štrbské Pleso",
    context: "Popradské → Štrbské · circuit end",
    latitude: 49.1206,
    longitude: 20.0606,
  },
  {
    dateIso: "2026-07-12",
    dayLabel: "Stay",
    location: "Štrbské Pleso",
    context: "Overnight · circuit complete",
    latitude: 49.1206,
    longitude: 20.0606,
  },
  {
    dateIso: "2026-07-13",
    dayLabel: "Hike 6",
    location: "Kriváň",
    context: "Kriváň summit day",
    latitude: 49.1639,
    longitude: 19.8547,
  },
  {
    dateIso: "2026-07-13",
    dayLabel: "Stay",
    location: "Štrbské Pleso",
    context: "Overnight after Kriváň",
    latitude: 49.1206,
    longitude: 20.0606,
  },
  {
    dateIso: "2026-07-14",
    dayLabel: "Hike 7",
    location: "Predné Solisko",
    context: "Cable car + Solisko hike",
    latitude: 49.1417,
    longitude: 20.0583,
  },
  {
    dateIso: "2026-07-14",
    dayLabel: "Stay",
    location: "Štrbské Pleso",
    context: "Last night before Kraków",
    latitude: 49.1206,
    longitude: 20.0606,
  },
  {
    dateIso: "2026-07-15",
    dayLabel: "Return",
    location: "Kraków",
    context: "Drive to airport · flight home",
    latitude: 50.0777,
    longitude: 19.7848,
  },
];
