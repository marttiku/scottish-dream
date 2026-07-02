export type AccommodationType =
  | "hotel"
  | "hostel"
  | "b&b"
  | "lodge"
  | "campsite"
  | "bunkhouse"
  | "wild-camp";

export interface AccommodationOption {
  name: string;
  type: AccommodationType;
  url?: string;
  notes?: string;
  recommended?: boolean;
}

export interface OvernightStay {
  id: string;
  dateIso: string;
  dayLabel: string;
  location: string;
  headline: string;
  summary: string;
  /** Matches weather + photo keys: `${dateIso}::${dayLabel}` */
  weatherDayLabel: string;
  options: AccommodationOption[];
}

const TYPE_LABELS: Record<AccommodationType, string> = {
  hotel: "Hotel",
  hostel: "Hostel",
  "b&b": "B&B",
  lodge: "Lodge",
  campsite: "Campsite",
  bunkhouse: "Bunkhouse",
  "wild-camp": "Wild camp",
};

export function accommodationTypeLabel(type: AccommodationType): string {
  return TYPE_LABELS[type];
}

/** Hotels, hostels, lodges & camps — one card per overnight */
export const OVERNIGHT_STAYS: OvernightStay[] = [
  {
    id: "edinburgh-7",
    dateIso: "2026-07-07",
    dayLabel: "Stay",
    weatherDayLabel: "Stay",
    location: "Edinburgh",
    headline: "Overnight in Edinburgh",
    summary:
      "Arrival night near Waverley — walkable to the station for the 8 Jul West Highland Line departure.",
    options: [
      {
        name: "Motel One Edinburgh-Princes",
        type: "hotel",
        url: "https://www.motel-one.com/en/hotels/edinburgh/hotel-edinburgh-princes/",
        notes: "2 min walk to Waverley · good value",
        recommended: true,
      },
      {
        name: "Hub by Premier Inn Edinburgh Royal Mile",
        type: "hotel",
        url: "https://www.premierinn.com/gb/en/hotels/scotland/lothian/edinburgh/edinburgh-royal-mile.html",
        notes: "Central · compact smart rooms",
      },
      {
        name: "Apex City of Edinburgh Hotel",
        type: "hotel",
        url: "https://www.apexhotels.co.uk/destinations/edinburgh/apex-city-of-edinburgh-hotel/",
        notes: "Grassmarket area · pool",
      },
    ],
  },
  {
    id: "inverie-8",
    dateIso: "2026-07-08",
    dayLabel: "Stay",
    weatherDayLabel: "Stay",
    location: "Inverie",
    headline: "Overnight in Inverie",
    summary:
      "First night in Knoydart. Indoor options are very limited — most hikers wild camp; pub meal at Britain's remotest mainland inn.",
    options: [
      {
        name: "Knoydart Foundation Bunkhouse",
        type: "bunkhouse",
        url: "https://www.knoydart-foundation.com/bunkhouse",
        notes: "Community bunkhouse — book well ahead in summer",
        recommended: true,
      },
      {
        name: "The Old Forge",
        type: "lodge",
        url: "https://www.theoldforge.co.uk/",
        notes: "Pub & restaurant — occasional rooms, not guaranteed",
      },
      {
        name: "Wild camp near Inverie",
        type: "wild-camp",
        notes: "Legal under Scottish access rights · 200 m from roads · leave no trace",
      },
    ],
  },
  {
    id: "sourlies-9",
    dateIso: "2026-07-09",
    dayLabel: "Camp",
    weatherDayLabel: "Hike 1",
    location: "Sourlies",
    headline: "Wild camp · Sourlies",
    summary: "End of Hike 1 on Loch Nevis — remote shore camp, no facilities.",
    options: [
      {
        name: "Sourlies bothy area (no bothy)",
        type: "wild-camp",
        notes: "Established wild-camping spots on Loch Nevis · water from burns",
        recommended: true,
      },
    ],
  },
  {
    id: "achuil-10",
    dateIso: "2026-07-10",
    dayLabel: "Camp",
    weatherDayLabel: "Hike 2",
    location: "Glen Dessarry",
    headline: "Wild camp · A' Chuil",
    summary: "End of Hike 2 after Mam Unndal — bothy for emergencies only, not for routine overnight stays.",
    options: [
      {
        name: "A' Chuil Bothy (emergency shelter)",
        type: "bunkhouse",
        url: "https://www.mountainbothies.org.uk/bothies/achuil-bothy/",
        notes: "MBA bothy — do not rely on space; camp nearby",
      },
      {
        name: "Wild camp in Glen Dessarry",
        type: "wild-camp",
        notes: "Flat pitches below the bothy · midges in still weather",
        recommended: true,
      },
    ],
  },
  {
    id: "glenfinnan-11",
    dateIso: "2026-07-11",
    dayLabel: "Stay",
    weatherDayLabel: "Stay",
    location: "Glenfinnan",
    headline: "Overnight in Glenfinnan",
    summary:
      "Rest after the long Knoydart day. Book ahead — village fills up in summer. Loch Shiel ferry pier is a short walk.",
    options: [
      {
        name: "Glenfinnan SYHA Hostel",
        type: "hostel",
        url: "https://www.hostellingscotland.org.uk/hostels/glenfinnan/",
        notes: "Next to the viaduct · dorms & private rooms",
        recommended: true,
      },
      {
        name: "Glenfinnan House Hotel",
        type: "hotel",
        url: "https://www.glenfinnanhouse.com/",
        notes: "Loch-side hotel · ferry pier on the grounds",
      },
      {
        name: "The Red Squirrel Campsite",
        type: "campsite",
        url: "https://www.redsquirrelcampsite.com/",
        notes: "Woodland pitches · campervan friendly",
      },
      {
        name: "Prince's House Hotel",
        type: "hotel",
        url: "https://www.princeshousehotel.co.uk/",
        notes: "Glenuig / A830 — short taxi from Glenfinnan if village full",
      },
    ],
  },
  {
    id: "strontian-12",
    dateIso: "2026-07-12",
    dayLabel: "Camp",
    weatherDayLabel: "Hike 4",
    location: "Strontian",
    headline: "Wild camp · Strontian",
    summary: "End of Hike 4 — or a B&B in the village if you prefer a bed before the transit day.",
    options: [
      {
        name: "Wild camp near Strontian",
        type: "wild-camp",
        notes: "Ask locally for best spots · shop & café in village",
        recommended: true,
      },
      {
        name: "Strontian Hotel",
        type: "hotel",
        url: "https://www.strontianhotel.co.uk/",
        notes: "Village inn with rooms · restaurant",
      },
      {
        name: "Natural Retreats Strontian",
        type: "lodge",
        url: "https://www.naturalretreats.com/location/strontian/",
        notes: "Self-catering lodges if travelling with non-hiking gear stored",
      },
    ],
  },
  {
    id: "oban-13",
    dateIso: "2026-07-13",
    dayLabel: "Stay",
    weatherDayLabel: "Stay",
    location: "Oban",
    headline: "Overnight in Oban",
    summary:
      "Celebration night after the ferries. Harbour-front hotels are a short walk from the CalMac terminal.",
    options: [
      {
        name: "Perle Oban Hotel & Spa",
        type: "hotel",
        url: "https://www.perlehotels.com/oban/",
        notes: "North Pier · modern rooms",
        recommended: true,
      },
      {
        name: "Oban Bay Hotel",
        type: "hotel",
        url: "https://www.obanbayhotel.co.uk/",
        notes: "Corran Esplanade · sea views",
      },
      {
        name: "Kerrera Tea Garden & Bunkhouse",
        type: "bunkhouse",
        url: "https://kerrerabunkhouse.co.uk/",
        notes: "On Kerrera island — extra ferry hop, quiet alternative",
      },
      {
        name: "Wide range of B&Bs",
        type: "b&b",
        url: "https://www.visitoban.com/accommodation",
        notes: "Visit Oban listings — book early for July",
      },
    ],
  },
  {
    id: "edinburgh-14",
    dateIso: "2026-07-14",
    dayLabel: "Stay",
    weatherDayLabel: "Stay",
    location: "Edinburgh",
    headline: "Overnight in Edinburgh",
    summary:
      "Buffer night after the long train from Oban. Same area as arrival — walkable pubs and a full day tomorrow.",
    options: [
      {
        name: "Motel One Edinburgh-Princes",
        type: "hotel",
        url: "https://www.motel-one.com/en/hotels/edinburgh/hotel-edinburgh-princes/",
        notes: "Near Waverley · good value",
        recommended: true,
      },
      {
        name: "Hub by Premier Inn Edinburgh Royal Mile",
        type: "hotel",
        url: "https://www.premierinn.com/gb/en/hotels/scotland/lothian/edinburgh/edinburgh-royal-mile.html",
        notes: "Central · compact smart rooms",
      },
      {
        name: "Apex City of Edinburgh Hotel",
        type: "hotel",
        url: "https://www.apexhotels.co.uk/destinations/edinburgh/apex-city-of-edinburgh-hotel/",
        notes: "Grassmarket area · pool",
      },
    ],
  },
];
