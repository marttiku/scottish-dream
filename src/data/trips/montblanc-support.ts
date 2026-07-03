import type { MapPoint, MapRouteSegment } from "../mapRoute";
import type { OvernightStay } from "../accommodation";
import type { WeatherStop } from "../weatherStops";

export const MONTBLANC_MAP_POINTS: MapPoint[] = [
  {
    id: "geneva",
    name: "Geneva",
    lat: 46.2044,
    lng: 6.1432,
    type: "city",
    note: "Tue 7 Jul arrival · Wed 15 Jul return",
  },
  {
    id: "les-houches",
    name: "Les Houches",
    lat: 45.8906,
    lng: 6.7983,
    type: "city",
    note: "TMB start · Bellevue cable car",
  },
  {
    id: "contamines",
    name: "Les Contamines",
    lat: 45.8217,
    lng: 6.7244,
    type: "city",
    note: "Wed 8 Jul · Stage 1 finish",
  },
  {
    id: "chapieux",
    name: "Les Chapieux",
    lat: 45.6883,
    lng: 6.7356,
    type: "trail",
    note: "Thu 9 Jul · Col du Bonhomme",
  },
  {
    id: "elisabetta",
    name: "Rifugio Elisabetta",
    lat: 45.8178,
    lng: 7.0356,
    type: "camp",
    note: "Fri 10 Jul · Italy · Lac Combal",
  },
  {
    id: "courmayeur",
    name: "Courmayeur",
    lat: 45.7896,
    lng: 6.9707,
    type: "city",
    note: "Sat 11 Jul · Italian side",
  },
  {
    id: "bonatti",
    name: "Rifugio Bonatti",
    lat: 45.8833,
    lng: 7.0667,
    type: "camp",
    note: "Sat 11 Jul · Grand Col Ferret",
  },
  {
    id: "champex",
    name: "Champex-Lac",
    lat: 45.9961,
    lng: 7.1167,
    type: "city",
    note: "Sun 12 Jul · Swiss village",
  },
  {
    id: "trient",
    name: "Trient",
    lat: 46.0342,
    lng: 7.0094,
    type: "camp",
    note: "Mon 13 Jul · Col de la Forclaz",
  },
  {
    id: "argentiere",
    name: "Argentière",
    lat: 45.9833,
    lng: 6.9333,
    type: "trail",
    note: "Tue 14 Jul · Col de Balme",
  },
  {
    id: "chamonix",
    name: "Chamonix",
    lat: 45.9237,
    lng: 6.8694,
    type: "city",
    note: "Lac Blanc · Aiguille du Midi",
  },
  {
    id: "lac-blanc",
    name: "Lac Blanc",
    lat: 45.985,
    lng: 6.888,
    type: "trail",
    note: "Tue 14 Jul · mirror lake",
  },
];

export const MONTBLANC_MAP_ROUTES: MapRouteSegment[] = [
  {
    id: "travel-in",
    label: "Geneva → Les Houches",
    color: "#a78bfa",
    dashed: true,
    pointIds: ["geneva", "les-houches"],
  },
  {
    id: "tmb-1",
    label: "Stage 1",
    color: "#6366f1",
    pointIds: ["les-houches", "contamines"],
  },
  {
    id: "tmb-2",
    label: "Stage 2",
    color: "#6366f1",
    pointIds: ["contamines", "chapieux"],
  },
  {
    id: "tmb-3",
    label: "Stage 3 · Italy",
    color: "#6366f1",
    pointIds: ["chapieux", "elisabetta"],
  },
  {
    id: "tmb-4",
    label: "Stage 4 · Grand Col Ferret",
    color: "#6366f1",
    pointIds: ["elisabetta", "courmayeur", "bonatti"],
  },
  {
    id: "tmb-5",
    label: "Stage 5",
    color: "#6366f1",
    pointIds: ["bonatti", "champex"],
  },
  {
    id: "tmb-6",
    label: "Stage 6",
    color: "#6366f1",
    pointIds: ["champex", "trient"],
  },
  {
    id: "tmb-7",
    label: "Stage 7 · Chamonix",
    color: "#6366f1",
    pointIds: ["trient", "argentiere", "chamonix"],
  },
  {
    id: "lac-blanc",
    label: "Lac Blanc day hike",
    color: "#22d3ee",
    pointIds: ["chamonix", "lac-blanc", "chamonix"],
  },
  {
    id: "travel-out",
    label: "Chamonix → Geneva",
    color: "#a78bfa",
    dashed: true,
    pointIds: ["chamonix", "geneva"],
  },
];

export const MONTBLANC_MAP_BOUNDS: [[number, number], [number, number]] = [
  [45.65, 6.7],
  [46.1, 7.15],
];

export const MONTBLANC_MAP_CENTER: [number, number] = [45.88, 6.92];

export const MONTBLANC_OVERNIGHT_STAYS: OvernightStay[] = [
  {
    id: "houches-7",
    dateIso: "2026-07-07",
    dayLabel: "Stay",
    weatherDayLabel: "Stay",
    location: "Les Houches",
    headline: "TMB trailhead — Les Houches",
    summary:
      "Evening flight to Geneva, ~1 h drive to Les Houches. Kit check and early night before Stage 1.",
    options: [
      {
        name: "Hotel Les Campanules",
        type: "hotel",
        url: "https://www.hotel-les-campanules.com/",
        notes: "At the foot of the trail · TMB start nearby",
        recommended: true,
      },
      {
        name: "Gîte le Pontet",
        type: "b&b",
        notes: "Budget hikers' lodge in the village",
      },
    ],
  },
  {
    id: "contamines-8",
    dateIso: "2026-07-08",
    dayLabel: "Hike 1",
    weatherDayLabel: "Hike 1",
    location: "Les Contamines-Montjoie",
    headline: "Gîte or refuge after Stage 1",
    summary:
      "Classic opening stage over Col de Voza and Col du Tricot. Village gîtes and auberges in the Contamines valley.",
    options: [
      {
        name: "Gîte le Trappist",
        type: "b&b",
        url: "https://www.gite-letrappist.com/",
        recommended: true,
      },
      {
        name: "Refuge de la Balme",
        type: "hut",
        notes: "Higher option before the village descent",
      },
    ],
  },
  {
    id: "chapieux-9",
    dateIso: "2026-07-09",
    dayLabel: "Hike 2",
    weatherDayLabel: "Hike 2",
    location: "Les Chapieux",
    headline: "Refuge de la Nova · Les Chapieux",
    summary:
      "Long day over Col du Bonhomme. Remote hamlet — book refuge or basic gîte ahead in July.",
    options: [
      {
        name: "Refuge de la Nova",
        type: "hut",
        url: "https://www.refugedelanova.com/",
        notes: "On the TMB above Les Chapieux",
        recommended: true,
      },
      {
        name: "Gîte Auberge du Glacier",
        type: "b&b",
        notes: "In the hamlet · dinner usually available",
      },
    ],
  },
  {
    id: "elisabetta-10",
    dateIso: "2026-07-10",
    dayLabel: "Hike 3",
    weatherDayLabel: "Hike 3",
    location: "Rifugio Elisabetta",
    headline: "Rifugio Elisabetta Soldini Montanaro",
    summary:
      "First Italian hut night above Lac Combal. Dormitory beds — dinner and breakfast at the refuge.",
    options: [
      {
        name: "Rifugio Elisabetta",
        type: "hut",
        url: "https://www.rifugioelisabetta.it/",
        notes: "2,195 m · book via CAI system",
        recommended: true,
      },
    ],
  },
  {
    id: "bonatti-11",
    dateIso: "2026-07-11",
    dayLabel: "Hike 4",
    weatherDayLabel: "Hike 4",
    location: "Rifugio Bonatti",
    headline: "Rifugio Walter Bonatti",
    summary:
      "Cross Grand Col Ferret (2,537 m) into the Val Ferret. One of the most scenic huts on the TMB.",
    options: [
      {
        name: "Rifugio Walter Bonatti",
        type: "hut",
        url: "https://www.rifugiobonatti.com/",
        notes: "2,025 m · iconic balcony views",
        recommended: true,
      },
    ],
  },
  {
    id: "champex-12",
    dateIso: "2026-07-12",
    dayLabel: "Hike 5",
    weatherDayLabel: "Hike 5",
    location: "Champex-Lac",
    headline: "Champex-Lac village",
    summary:
      "Descent into Switzerland. Lakeside hotels and auberges — good resupply before the final push to Chamonix.",
    options: [
      {
        name: "Hôtel du Moulin",
        type: "hotel",
        url: "https://www.hoteldumoulin.ch/",
        notes: "On the lake · classic TMB stop",
        recommended: true,
      },
      {
        name: "Auberge du Grand Champex",
        type: "b&b",
        notes: "Hiker-friendly · short walk to boulangerie",
      },
    ],
  },
  {
    id: "trient-13",
    dateIso: "2026-07-13",
    dayLabel: "Hike 6",
    weatherDayLabel: "Hike 6",
    location: "Trient",
    headline: "Refuge du Mont Blanc · Trient",
    summary:
      "Over Col de la Forclaz into the Trient valley. Hut or gîte before the final stage to Chamonix.",
    options: [
      {
        name: "Refuge du Mont Blanc",
        type: "hut",
        url: "https://www.refugedumontblanc.com/",
        notes: "Above Trient village",
        recommended: true,
      },
      {
        name: "Gîte d'étape Le Relais",
        type: "b&b",
        notes: "In the village",
      },
    ],
  },
  {
    id: "chamonix-13",
    dateIso: "2026-07-13",
    dayLabel: "Stay",
    weatherDayLabel: "Stay",
    location: "Chamonix",
    headline: "Chamonix — TMB finish",
    summary:
      "Complete the loop via Col de Balme and Argentière. Celebrate in the capital of alpinism.",
    options: [
      {
        name: "Hôtel Mont-Blanc",
        type: "hotel",
        url: "https://www.hotelmontblanc.com/",
        notes: "Central · pedestrian zone",
        recommended: true,
      },
      {
        name: "Chalet Hotel Sapinière",
        type: "hotel",
        notes: "Quieter · still walkable to centre",
      },
    ],
  },
  {
    id: "chamonix-14",
    dateIso: "2026-07-14",
    dayLabel: "Hike 7",
    weatherDayLabel: "Hike 7",
    location: "Chamonix",
    headline: "After Lac Blanc",
    summary:
      "Mirror-lake day hike above the Mer de Glace. Cable cars reduce ascent — allow a weather window.",
    options: [
      {
        name: "Hôtel Mont-Blanc",
        type: "hotel",
        recommended: true,
      },
    ],
  },
  {
    id: "chamonix-14-stay",
    dateIso: "2026-07-14",
    dayLabel: "Stay",
    weatherDayLabel: "Stay",
    location: "Chamonix",
    headline: "Last night in the Alps",
    summary: "Pack for the drive to Geneva tomorrow.",
    options: [
      {
        name: "Hôtel Mont-Blanc",
        type: "hotel",
        recommended: true,
      },
    ],
  },
];

export const MONTBLANC_WEATHER_STOPS: WeatherStop[] = [
  {
    dateIso: "2026-07-07",
    dayLabel: "Day 0",
    location: "Les Houches",
    context: "Arrival from Geneva",
    latitude: 45.8906,
    longitude: 6.7983,
  },
  {
    dateIso: "2026-07-07",
    dayLabel: "Stay",
    location: "Les Houches",
    context: "Overnight · TMB start",
    latitude: 45.8906,
    longitude: 6.7983,
  },
  {
    dateIso: "2026-07-08",
    dayLabel: "Hike 1",
    location: "Les Contamines",
    context: "Les Houches → Contamines",
    latitude: 45.8217,
    longitude: 6.7244,
  },
  {
    dateIso: "2026-07-09",
    dayLabel: "Hike 2",
    location: "Les Chapieux",
    context: "Contamines → Col du Bonhomme",
    latitude: 45.6883,
    longitude: 6.7356,
  },
  {
    dateIso: "2026-07-10",
    dayLabel: "Hike 3",
    location: "Rifugio Elisabetta",
    context: "Les Chapieux → Italy",
    latitude: 45.8178,
    longitude: 7.0356,
  },
  {
    dateIso: "2026-07-11",
    dayLabel: "Hike 4",
    location: "Rifugio Bonatti",
    context: "Grand Col Ferret crossing",
    latitude: 45.8833,
    longitude: 7.0667,
  },
  {
    dateIso: "2026-07-12",
    dayLabel: "Hike 5",
    location: "Champex-Lac",
    context: "Bonatti → Champex",
    latitude: 45.9961,
    longitude: 7.1167,
  },
  {
    dateIso: "2026-07-13",
    dayLabel: "Hike 6",
    location: "Trient",
    context: "Champex → Col de la Forclaz",
    latitude: 46.0342,
    longitude: 7.0094,
  },
  {
    dateIso: "2026-07-13",
    dayLabel: "Stay",
    location: "Chamonix",
    context: "TMB finish · overnight",
    latitude: 45.9237,
    longitude: 6.8694,
  },
  {
    dateIso: "2026-07-14",
    dayLabel: "Hike 7",
    location: "Lac Blanc",
    context: "Lac Blanc day hike",
    latitude: 45.985,
    longitude: 6.888,
  },
  {
    dateIso: "2026-07-14",
    dayLabel: "Stay",
    location: "Chamonix",
    context: "Last night before Geneva",
    latitude: 45.9237,
    longitude: 6.8694,
  },
  {
    dateIso: "2026-07-15",
    dayLabel: "Return",
    location: "Geneva",
    context: "Drive to airport · flight home",
    latitude: 46.2044,
    longitude: 6.1432,
  },
];
