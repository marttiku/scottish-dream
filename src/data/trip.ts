export type LegType = "flight" | "train" | "ferry" | "bus" | "hike" | "stay";

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
  /** Primary link — booking or journey planner */
  url: string;
  /** Direct timetable or schedule page */
  timetableUrl?: string;
  /** Typical or trip-relevant departures */
  schedule?: string;
  notes: string;
  dateIso?: string;
}

export interface PackingCategory {
  name: string;
  icon: string;
  items: string[];
}

export const TRIP_META = {
  title: "Scottish Dream",
  subtitle: "Knoydart & Morvern · July 2026",
  departureDate: "2026-07-07",
  returnDate: "2026-07-15",
  totalHikingKm: "~108",
  hikingDays: 5,
  wildCampNights: 3,
  lodgedNights: 5,
  route: "Inverie → Oban",
  tagline:
    "Tallinn to the wild Highlands — Inverie across Knoydart, then Morvern by boot and ferry to Oban.",
};

export const TIMELINE: TimelineEvent[] = [
  {
    dateIso: "2026-07-07",
    dayLabel: "Day 0",
    title: "Tallinn → Edinburgh",
    description: "Evening flight. Check into accommodation near Waverley station.",
    type: "flight",
    details: ["Allow time for baggage & transit to city centre", "See Stays → Edinburgh"],
  },
  {
    dateIso: "2026-07-08",
    dayLabel: "Day 1",
    title: "Edinburgh → Mallaig → Inverie",
    description:
      "Morning train on the West Highland Line. Afternoon ferry to Knoydart — Britain's most remote mainland village.",
    type: "train",
    details: [
      "Edinburgh Waverley → Glasgow Queen Street → Mallaig (~6–7 h)",
      "Mallaig → Inverie ferry (~40 min) — book ahead in summer",
      "Overnight in Inverie — see Stays",
    ],
  },
  {
    dateIso: "2026-07-09",
    dayLabel: "Hike 1",
    segment: "Knoydart · 3 days",
    title: "Inverie → Sourlies",
    description: "Follow Loch Nevis west, then south to the remote camp at Sourlies.",
    type: "hike",
    details: ["~18 km · ~600 m ascent", "Camp on Loch Nevis shore"],
  },
  {
    dateIso: "2026-07-10",
    dayLabel: "Hike 2",
    title: "Sourlies → A' Chuil (Glen Dessarry)",
    description: "Cross Mam Unndal — one of Knoydart's finest and quietest passes.",
    type: "hike",
    details: ["~24 km · ~900 m ascent", "Camp near A' Chuil Bothy"],
  },
  {
    dateIso: "2026-07-11",
    dayLabel: "Hike 3",
    title: "A' Chuil → Glenfinnan",
    description:
      "Long day through Glen Dessarry and Glen Finnan. Finish at the viaduct — overnight in Glenfinnan.",
    type: "hike",
    details: ["~28–30 km · ~700 m ascent", "Overnight in Glenfinnan — see Stays"],
  },
  {
    dateIso: "2026-07-12",
    dayLabel: "Transit",
    title: "Glenfinnan → Polloch",
    description:
      "Morning Loch Shiel ferry to Polloch pontoon — check Wed/Sat timetable or arrange drop-off by phone.",
    type: "ferry",
    details: [
      "Loch Shiel Highland Cruises — call +44 7498 501566",
      "If no sailing: taxi to Acharacle + short walk to Polloch",
    ],
  },
  {
    dateIso: "2026-07-12",
    dayLabel: "Hike 4",
    segment: "Morvern → Oban",
    title: "Polloch → Strontian",
    description: "Estate tracks along Loch Shiel and into the Ardnamurchan peninsula.",
    type: "hike",
    details: ["~26 km · ~500 m ascent", "Camp near Strontian"],
  },
  {
    dateIso: "2026-07-13",
    dayLabel: "Transit",
    title: "Strontian → Lochaline → Fishnish → Craignure → Oban",
    description:
      "Skip the long Morvern crossing on foot — bus to Lochaline, short ferry to Mull, bus across the island, then CalMac into Oban.",
    type: "bus",
    details: [
      "Shiel Buses 507: Strontian → Lochaline (~30 min) — check summer timetable",
      "CalMac Lochaline → Fishnish (~15 min) — book ahead",
      "West Coast Motors: Fishnish → Craignure (~40 min) — connects with ferries",
      "CalMac Craignure → Oban (~55 min) — main Mull crossing",
      "Overnight in Oban — see Stays",
    ],
  },
  {
    dateIso: "2026-07-14",
    dayLabel: "Return",
    title: "Oban → Edinburgh",
    description:
      "Morning ScotRail to the capital. Afternoon in town — drop packs, stroll the Old Town.",
    type: "train",
    details: [
      "Oban → Glasgow Queen Street (~3 h)",
      "Glasgow → Edinburgh Waverley (~50 min)",
      "Overnight in Edinburgh — see Stays",
    ],
  },
  {
    dateIso: "2026-07-15",
    dayLabel: "Reserve",
    title: "Edinburgh · buffer day",
    description:
      "Flex day for weather delays, missed ferries, or a proper capital visit before flying home.",
    type: "stay",
    details: [
      "Arthur's Seat · Royal Mile · National Museum",
      "Evening flight to Tallinn — see Connections",
    ],
  },
];

export const HIKING_DAYS: HikingDay[] = [
  {
    day: 1,
    dateIso: "2026-07-09",
    dayLabel: "Hike 1",
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
    dateIso: "2026-07-10",
    dayLabel: "Hike 2",
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
    dateIso: "2026-07-11",
    dayLabel: "Hike 3",
    title: "A' Chuil → Glenfinnan",
    from: "A' Chuil",
    to: "Glenfinnan Station",
    distanceKm: "28–30",
    ascentM: 700,
    camp: "Glenfinnan (hostel, campsite, or B&B)",
    highlights: [
      "Glen Dessarry track walking",
      "Bealach an Lagain Duibh",
      "Glenfinnan Viaduct — overnight in village",
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
  {
    day: 4,
    dateIso: "2026-07-12",
    dayLabel: "Hike 4",
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
    dateIso: "2026-07-13",
    dayLabel: "Transit",
    title: "Strontian → Oban (via Mull)",
    from: "Strontian",
    to: "Oban",
    distanceKm: "transit",
    ascentM: 0,
    camp: "Oban accommodation",
    highlights: [
      "Bus skips ~25 km of road walking",
      "Lochaline → Fishnish ferry onto Mull",
      "Bus across Mull to Craignure",
      "Craignure → Oban CalMac into town",
    ],
    elevationProfile: [
      { km: 0, alt: 10 },
      { km: 1, alt: 10 },
    ],
    difficulty: "moderate",
  },
];

/** Derived trip totals for overview / hero stats */
export function getTripStats() {
  const totalAscentM = HIKING_DAYS.reduce((sum, day) => sum + day.ascentM, 0);
  const start = new Date(`${TRIP_META.departureDate}T12:00:00`);
  const end = new Date(`${TRIP_META.returnDate}T12:00:00`);
  const calendarDays =
    Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  return {
    totalAscentM,
    calendarDays,
    calendarNights: calendarDays - 1,
    wildCampNights: TRIP_META.wildCampNights,
    lodgedNights: TRIP_META.lodgedNights,
    route: TRIP_META.route,
  };
}

export function getHikingDay(
  dateIso: string,
  dayLabel: string,
): HikingDay | undefined {
  return HIKING_DAYS.find(
    (d) => d.dateIso === dateIso && d.dayLabel === dayLabel,
  );
}

export const CONNECTIONS: Connection[] = [
  {
    name: "Tallinn → Edinburgh",
    mode: "flight",
    route: "TLL → EDI",
    duration: "~2 h 45 min",
    operator: "Ryanair · airBaltic",
    url: "https://www.google.com/travel/flights?q=flights%20from%20TLL%20to%20EDI%20on%202026-07-07",
    timetableUrl: "https://www.tallinn-airport.ee/en/flights/departures/",
    schedule: "Evening departures typical — check airline sites",
    notes: "Book direct with airline for easiest changes. Allow time for baggage & tram to city centre.",
    dateIso: "2026-07-07",
  },
  {
    name: "Edinburgh → Mallaig",
    mode: "train",
    route: "Waverley → Queen St → Mallaig",
    duration: "~6 h 25 min",
    operator: "ScotRail · West Highland Line",
    url: "https://www.scotrail.co.uk/plan/journey?origin=Edinburgh%20(Waverley)&destination=Mallaig&outwardDate=2026-07-08",
    timetableUrl: "https://www.scotrail.co.uk/train-times/edinburgh-waverley-to-mallaig",
    schedule: "Wed 8 Jul: first ~07:15 · last ~17:15 · change at Glasgow Queen Street",
    notes: "No direct trains — reserve seats in summer. Jacobite steam train shares the line (does not stop Inverie).",
    dateIso: "2026-07-08",
  },
  {
    name: "Mallaig → Inverie",
    mode: "ferry",
    route: "Mallaig → Inverie",
    duration: "~25–40 min",
    operator: "Western Isles Cruises",
    url: "https://westernislescruises.co.uk/cruises/",
    timetableUrl: "https://westernislescruises.co.uk/knoydart-ferry-timetable/",
    schedule: "Wed 8 Jul: 07:30, 10:15, 14:15, 18:00 from Mallaig (Apr–Oct timetable)",
    notes: "Book online — essential in summer. Arrive 15 min early. Sailings weather dependent.",
    dateIso: "2026-07-08",
  },
  {
    name: "Glenfinnan → Polloch",
    mode: "ferry",
    route: "Glenfinnan Pier → Polloch pontoon",
    duration: "~1 h 15 min to Polloch",
    operator: "Loch Shiel Highland Cruises",
    url: "https://www.highlandcruises.co.uk/cruises/the-loch-cruise-single-from-glenfinnan-to-acharacle-9-30am-11-55am/",
    timetableUrl: "https://www.highlandcruises.co.uk/cruises/",
    schedule: "Sun 12 Jul: no regular sailing — call operator or taxi via Acharacle",
    notes: "Polloch drop-off by prior arrangement — call +44 7498 501566 before booking. Pier at Glenfinnan House Hotel.",
    dateIso: "2026-07-12",
  },
  {
    name: "Strontian → Lochaline",
    mode: "bus",
    route: "Strontian Village Green → Lochaline Slipway",
    duration: "~35 min",
    operator: "Shiel Buses · route 507",
    url: "https://shielbuses.co.uk/route-507",
    timetableUrl: "https://shielbuses.co.uk/route-507",
    schedule: "Mon 13 Jul: FW→Lochaline via Strontian ~16:15 arr. (school-holiday column — verify)",
    notes: "Lochaline–Fort William service. Board at Strontian Village Green when bus diverts. Replaces a full day of road walking.",
    dateIso: "2026-07-13",
  },
  {
    name: "Lochaline → Fishnish",
    mode: "ferry",
    route: "Lochaline → Fishnish (Mull)",
    duration: "~15 min",
    operator: "CalMac",
    url: "https://www.calmac.co.uk/book-tickets#/sailings?route=lochaline-fishnish&passengers=1",
    timetableUrl: "https://www.calmac.co.uk/en-gb/route-information/lochaline-fishnish/",
    schedule: "Mon 13 Jul: frequent sailings — short Sound of Mull crossing",
    notes: "Book ahead in summer. Foot passengers & bikes welcome. Connects with West Coast Motors at Fishnish.",
    dateIso: "2026-07-13",
  },
  {
    name: "Fishnish → Craignure",
    mode: "bus",
    route: "Fishnish ferry pier → Craignure ferry terminal",
    duration: "~40 min",
    operator: "West Coast Motors",
    url: "https://www.westcoastmotors.co.uk/",
    timetableUrl: "https://www.travelinescotland.com/",
    schedule: "Mon 13 Jul: buses timed to meet Lochaline & Craignure ferries — verify on Traveline",
    notes: "Single-track road across Mull. Allow connection time between ferries and bus.",
    dateIso: "2026-07-13",
  },
  {
    name: "Craignure → Oban",
    mode: "ferry",
    route: "Craignure → Oban",
    duration: "~55 min",
    operator: "CalMac",
    url: "https://www.calmac.co.uk/book-tickets#/sailings?route=oban-craignure-mull&passengers=1",
    timetableUrl: "https://www.calmac.co.uk/en-gb/route-information/oban-craignure-mull/",
    schedule: "Mon 13 Jul: multiple daily sailings — check summer timetable",
    notes: "Main Mull crossing — book ahead even as foot passenger. Jul 14–19 on tidal amendment list — double-check sailing times.",
    dateIso: "2026-07-13",
  },
  {
    name: "Oban → Edinburgh",
    mode: "train",
    route: "Oban → Queen St → Waverley",
    duration: "~4 h 45 min",
    operator: "ScotRail",
    url: "https://www.scotrail.co.uk/plan/journey?origin=Oban&destination=Edinburgh%20(Waverley)&outwardDate=2026-07-14",
    timetableUrl: "https://www.scotrail.co.uk/train-times/oban-to-edinburgh-waverley",
    schedule: "Tue 14 Jul: first ~05:17 · last ~20:39 · change at Glasgow Queen Street",
    notes: "Arrive Edinburgh afternoon — buffer night before sightseeing & flight.",
    dateIso: "2026-07-14",
  },
  {
    name: "Edinburgh → Tallinn",
    mode: "flight",
    route: "EDI → TLL",
    duration: "~2 h 45 min",
    operator: "Ryanair · airBaltic",
    url: "https://www.google.com/travel/flights?q=flights%20from%20EDI%20to%20TLL%20on%202026-07-15",
    timetableUrl: "https://www.edinburghairport.com/flights/live-flight-arrivals-departures",
    schedule: "Wed 15 Jul: day in Edinburgh · evening departures typical",
    notes: "Book direct with airline. Tram or taxi from city centre to airport (~30 min).",
    dateIso: "2026-07-15",
  },
];

export const PACKING: PackingCategory[] = [
  {
    name: "Shelter & Sleep",
    icon: "tent",
    items: [
      "See Gear shop — Ferrino BLOW 3 + 2× YUKON 0 bags & ULTRA 3R pads",
      "Bothy bag / emergency shelter (bring from home)",
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
      "See Food section — planned for 2 hikers",
      "See Gear shop — PocketRocket + TRIBAL 1.2 L pot + MSR Trail Base filter",
      "Electrolyte tablets",
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

export const TIPS = [
  {
    title: "July weather",
    body: "See the live trip forecast for rain and wind on each day. On exposed passes, strong wind can feel near freezing even in July.",
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
    body: "Trains, Mallaig–Inverie ferry, Loch Shiel crossing, Lochaline–Fishnish & Craignure–Oban CalMac sailings all benefit from advance booking in summer.",
  },
];
