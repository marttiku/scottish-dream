export type LegType = "flight" | "train" | "ferry" | "bus" | "hike" | "stay";

export interface TimelineEvent {
  date: string;
  dayLabel: string;
  title: string;
  description: string;
  type: LegType;
  details?: string[];
}

export interface HikingDay {
  day: number;
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
  notes: string;
}

export interface PackingCategory {
  name: string;
  icon: string;
  items: string[];
}

export interface Waypoint {
  id: string;
  name: string;
  x: number;
  y: number;
  type: "city" | "trail" | "camp" | "transport";
}

export const TRIP_META = {
  title: "Scottish Dream",
  subtitle: "Knoydart & Morvern · July 2026",
  departureDate: "2026-07-07",
  totalHikingKm: "~108",
  hikingDays: 5,
  tagline:
    "Tallinn to the wild Highlands — Inverie across Knoydart, then Morvern by boot and ferry to Oban.",
};

export const TIMELINE: TimelineEvent[] = [
  {
    date: "Tue 7 Jul",
    dayLabel: "Day 0",
    title: "Tallinn → Edinburgh",
    description: "Evening flight. Check into accommodation near Waverley station.",
    type: "flight",
    details: ["Allow time for baggage & transit to city centre"],
  },
  {
    date: "Wed 8 Jul",
    dayLabel: "Day 1",
    title: "Edinburgh → Mallaig → Inverie",
    description:
      "Morning train on the West Highland Line. Afternoon ferry to Knoydart — Britain's most remote mainland village.",
    type: "train",
    details: [
      "Edinburgh Waverley → Glasgow Queen Street → Mallaig (~6–7 h)",
      "Mallaig → Inverie ferry (~40 min) — book ahead in summer",
    ],
  },
  {
    date: "Thu 9 Jul",
    dayLabel: "Hike 1",
    title: "Inverie → Sourlies",
    description: "Follow Loch Nevis west, then south to the remote camp at Sourlies.",
    type: "hike",
    details: ["~18 km · ~600 m ascent", "Camp on Loch Nevis shore"],
  },
  {
    date: "Fri 10 Jul",
    dayLabel: "Hike 2",
    title: "Sourlies → A' Chuil (Glen Dessarry)",
    description: "Cross Mam Unndal — one of Knoydart's finest and quietest passes.",
    type: "hike",
    details: ["~24 km · ~900 m ascent", "Camp near A' Chuil Bothy"],
  },
  {
    date: "Sat 11 Jul",
    dayLabel: "Hike 3",
    title: "A' Chuil → Glenfinnan",
    description:
      "Long final day through Glen Dessarry and Glen Finnan. Finish at the railway station — no overnight stop.",
    type: "hike",
    details: ["~28–30 km · ~700 m ascent", "Afternoon train connection possible"],
  },
  {
    date: "Sat 11 Jul",
    dayLabel: "Transit",
    title: "Glenfinnan → Polloch",
    description:
      "Same day: Loch Shiel ferry from Glenfinnan (or nearby pier) to Polloch — check seasonal timetable.",
    type: "ferry",
    details: ["No rest day at Glenfinnan", "Book ferry in advance"],
  },
  {
    date: "Sun 12 Jul",
    dayLabel: "Hike 4",
    title: "Polloch → Strontian",
    description: "Estate tracks along Loch Shiel and into the Ardnamurchan peninsula.",
    type: "hike",
    details: ["~26 km · ~500 m ascent", "Camp near Strontian"],
  },
  {
    date: "Mon 13 Jul",
    dayLabel: "Transit",
    title: "Strontian → Lochaline → Lismore → Oban",
    description:
      "Skip the long Morvern crossing on foot — bus to Lochaline, ferries via Lismore to Oban.",
    type: "bus",
    details: [
      "West Coast Motors 506: Strontian → Lochaline (~30 min)",
      "Ferry Lochaline → Lismore (passenger ferry, seasonal)",
      "Optional short walk on Lismore (~8 km north)",
      "Ferry Achnacroish → Oban (~1 h)",
    ],
  },
  {
    date: "Tue 14 Jul",
    dayLabel: "Return",
    title: "Oban → Edinburgh → Tallinn",
    description: "ScotRail to Glasgow, onward to Edinburgh. Evening flight home.",
    type: "train",
    details: ["Oban → Glasgow Queen Street (~3 h)", "Glasgow → Edinburgh (~50 min)"],
  },
];

export const KNOYDART_DAYS: HikingDay[] = [
  {
    day: 1,
    title: "Inverie → Sourlies",
    from: "Inverie",
    to: "Sourlies",
    distanceKm: "18",
    ascentM: 600,
    camp: "Sourlies, Loch Nevis",
    highlights: [
      "Britain's most remote mainland pub (optional stop in Inverie)",
      "Loch Nevis coastal walking",
      "Remote wild camp",
    ],
    elevationProfile: [
      { km: 0, alt: 10 },
      { km: 5, alt: 80 },
      { km: 10, alt: 120 },
      { km: 14, alt: 350 },
      { km: 18, alt: 20 },
    ],
    difficulty: "moderate",
  },
  {
    day: 2,
    title: "Sourlies → A' Chuil",
    from: "Sourlies",
    to: "A' Chuil Bothy",
    distanceKm: "24",
    ascentM: 900,
    camp: "Glen Dessarry, near A' Chuil",
    highlights: [
      "Mam Unndal pass (~620 m)",
      "Rugged Knoydart interior",
      "Bothy as emergency shelter only",
    ],
    elevationProfile: [
      { km: 0, alt: 20 },
      { km: 6, alt: 200 },
      { km: 12, alt: 620 },
      { km: 18, alt: 350 },
      { km: 24, alt: 80 },
    ],
    difficulty: "challenging",
  },
  {
    day: 3,
    title: "A' Chuil → Glenfinnan",
    from: "A' Chuil",
    to: "Glenfinnan Station",
    distanceKm: "28–30",
    ascentM: 700,
    camp: "— (finish day, no overnight)",
    highlights: [
      "Glen Dessarry track walking",
      "Bealach an Lagain Duibh",
      "Glenfinnan Viaduct & station",
    ],
    elevationProfile: [
      { km: 0, alt: 80 },
      { km: 8, alt: 250 },
      { km: 16, alt: 450 },
      { km: 22, alt: 200 },
      { km: 30, alt: 15 },
    ],
    difficulty: "strenuous",
  },
];

export const MORVERN_DAYS: HikingDay[] = [
  {
    day: 4,
    title: "Polloch → Strontian",
    from: "Polloch",
    to: "Strontian",
    distanceKm: "26",
    ascentM: 500,
    camp: "Near Strontian",
    highlights: [
      "Loch Shiel shoreline tracks",
      "Atlantic oak woodland",
      "Quiet estate paths",
    ],
    elevationProfile: [
      { km: 0, alt: 15 },
      { km: 8, alt: 100 },
      { km: 16, alt: 180 },
      { km: 22, alt: 120 },
      { km: 26, alt: 10 },
    ],
    difficulty: "moderate",
  },
  {
    day: 5,
    title: "Strontian → Oban (via public transport)",
    from: "Strontian",
    to: "Oban",
    distanceKm: "~8 on foot",
    ascentM: 100,
    camp: "Oban accommodation",
    highlights: [
      "Bus skips ~25 km of road walking",
      "Lochaline → Lismore ferry",
      "Limestone island & sea views",
      "Achnacroish → Oban ferry into town",
    ],
    elevationProfile: [
      { km: 0, alt: 10 },
      { km: 4, alt: 60 },
      { km: 8, alt: 20 },
    ],
    difficulty: "moderate",
  },
];

export const CONNECTIONS: Connection[] = [
  {
    name: "Tallinn ↔ Edinburgh",
    mode: "flight",
    route: "TLL → EDI",
    duration: "~2 h 45 min",
    operator: "Check airlines (Ryanair, airBaltic, etc.)",
    url: "https://www.skyscanner.net",
    notes: "Book Tue evening outbound, return from Edinburgh ~1 week later.",
  },
  {
    name: "Edinburgh → Mallaig",
    mode: "train",
    route: "EDI → GLC → Mallaig",
    duration: "~6–7 h",
    operator: "ScotRail · West Highland Line",
    url: "https://www.scotrail.co.uk",
    notes: "One of the world's great railway journeys. Reserve seats in summer.",
  },
  {
    name: "Mallaig → Inverie",
    mode: "ferry",
    route: "Mallaig → Inverie",
    duration: "~40 min",
    operator: "Western Isles Cruises / Knoydart Seabridge",
    url: "https://www.knoydart-ferry.co.uk",
    notes: "Several sailings daily in summer. Essential booking.",
  },
  {
    name: "Glenfinnan → Polloch",
    mode: "ferry",
    route: "Glenfinnan Pier → Polloch",
    duration: "~1 h",
    operator: "Loch Shiel Cruise / local ferry",
    url: "https://www.cruise-lochshiel.co.uk",
    notes: "Seasonal — confirm timetable. Alternative: taxi to Acharacle + shorter walk.",
  },
  {
    name: "Strontian → Lochaline",
    mode: "bus",
    route: "Strontian → Lochaline",
    duration: "~30 min",
    operator: "West Coast Motors 506",
    url: "https://www.westcoastmotors.co.uk",
    notes: "Replaces a full day of road walking across Morvern.",
  },
  {
    name: "Lochaline → Lismore",
    mode: "ferry",
    route: "Lochaline → Point",
    duration: "~10 min",
    operator: "Lochaline Ferry (passenger)",
    url: "https://www.calmac.co.uk",
    notes: "Small passenger ferry. Check summer schedule.",
  },
  {
    name: "Lismore → Oban",
    mode: "ferry",
    route: "Achnacroish → Oban",
    duration: "~1 h",
    operator: "CalMac",
    url: "https://www.calmac.co.uk",
    notes: "Regular service. Arrives in Oban town centre.",
  },
  {
    name: "Oban → Edinburgh",
    mode: "train",
    route: "OBN → GLC → EDI",
    duration: "~4 h",
    operator: "ScotRail",
    url: "https://www.scotrail.co.uk",
    notes: "Via Glasgow Queen Street. Allow connection time.",
  },
];

export const PACKING: PackingCategory[] = [
  {
    name: "Shelter & Sleep",
    icon: "tent",
    items: [
      "4-season tent (wind-resistant)",
      "Sleeping bag comfort 0–5 °C",
      "Insulated sleeping pad",
      "Bothy bag / emergency shelter",
    ],
  },
  {
    name: "Clothing",
    icon: "shirt",
    items: [
      "Waterproof jacket & trousers",
      "2× spare dry base layers",
      "Warm midlayer (fleece/down)",
      "Trekking trousers & shorts",
      "Warm hat & gloves (even in July)",
      "Camp shoes / sandals",
    ],
  },
  {
    name: "Navigation",
    icon: "compass",
    items: [
      "OS Explorer 414 (Knoydart) + 390 (Oban)",
      "Compass",
      "GPS / phone with offline maps",
      "Power bank",
    ],
  },
  {
    name: "Food & Water",
    icon: "utensils",
    items: [
      "5–6 days food (self-supported)",
      "Lightweight stove & fuel",
      "Water filter or purification tablets",
      "Electrolyte tablets",
      "High-calorie snacks",
    ],
  },
  {
    name: "Midges & Sun",
    icon: "bug",
    items: [
      "Midge head net (essential in July)",
      "Smidge or Saltidin repellent",
      "Sun cream & lip balm",
      "Sunglasses",
    ],
  },
  {
    name: "Safety & Misc",
    icon: "shield",
    items: [
      "First aid kit incl. blister care",
      "Whistle & head torch",
      "Trekking poles",
      "Dry bags for kit",
      "Travel docs & insurance",
      "Cash for remote pub / ferry",
    ],
  },
];

export const WAYPOINTS: Waypoint[] = [
  { id: "tallinn", name: "Tallinn", x: 920, y: 280, type: "city" },
  { id: "edinburgh", name: "Edinburgh", x: 680, y: 420, type: "city" },
  { id: "mallaig", name: "Mallaig", x: 380, y: 320, type: "transport" },
  { id: "inverie", name: "Inverie", x: 320, y: 350, type: "trail" },
  { id: "sourlies", name: "Sourlies", x: 280, y: 380, type: "camp" },
  { id: "achuil", name: "A' Chuil", x: 340, y: 400, type: "camp" },
  { id: "glenfinnan", name: "Glenfinnan", x: 400, y: 360, type: "transport" },
  { id: "polloch", name: "Polloch", x: 360, y: 440, type: "trail" },
  { id: "strontian", name: "Strontian", x: 300, y: 480, type: "camp" },
  { id: "lochaline", name: "Lochaline", x: 260, y: 500, type: "transport" },
  { id: "lismore", name: "Lismore", x: 220, y: 520, type: "trail" },
  { id: "oban", name: "Oban", x: 180, y: 480, type: "city" },
];

export const ROUTE_SEGMENTS = [
  {
    id: "knoydart",
    label: "Knoydart (3 days)",
    color: "#6366f1",
    points: ["inverie", "sourlies", "achuil", "glenfinnan"],
  },
  {
    id: "morvern",
    label: "Morvern (1 day + PT)",
    color: "#22d3ee",
    points: ["glenfinnan", "polloch", "strontian"],
  },
  {
    id: "transport",
    label: "Bus & ferries",
    color: "#a78bfa",
    points: ["strontian", "lochaline", "lismore", "oban"],
  },
];

export const TIPS = [
  {
    title: "July weather",
    body: "Expect 15–20 °C days, 8–12 °C nights, and at least one rainy day. Strong wind on passes can feel near freezing.",
  },
  {
    title: "Midges",
    body: "Peak season. Head net and repellent are non-negotiable below ~400 m in calm, humid conditions.",
  },
  {
    title: "Wild camping",
    body: "Legal in Scotland under access rights. Camp responsibly — 200 m from roads, leave no trace.",
  },
  {
    title: "Water",
    body: "Abundant on Knoydart. Filter or purify. Carry extra on the long Day 3 to Glenfinnan.",
  },
  {
    title: "Day 3 pace",
    body: "28–30 km with full pack is demanding. Start early — 17+ hours of daylight in mid-July.",
  },
  {
    title: "Book ahead",
    body: "Trains, Mallaig–Inverie ferry, Loch Shiel crossing, and CalMac sailings all benefit from advance booking in summer.",
  },
];
