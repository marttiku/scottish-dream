export interface DayPhoto {
  /** Path under public/photos/ or absolute URL */
  src: string;
  alt: string;
  caption?: string;
}

function u(id: string): string {
  return `https://images.unsplash.com/photo-${id}?w=1200&q=80`;
}

function p(id: number): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;
}

/** Wikimedia Commons 1280px thumbnail */
function w(path: string): string {
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}`;
}

/** Key: `${dateIso}::${dayLabel}` — one carousel per timeline day */
export const DAY_PHOTOS: Record<string, DayPhoto[]> = {
  "2026-07-07::Day 0": [
    {
      src: u("1558642452-9d2a7deb7f62"),
      alt: "Edinburgh old town streets and closes",
      caption: "Edinburgh — arrival evening",
    },
    {
      src: u("1582719508461-905c673771fd"),
      alt: "Historic Edinburgh skyline at dusk",
      caption: "Old Town & castle rock",
    },
    {
      src: u("1578662996442-48f60103fc96"),
      alt: "Edinburgh city centre architecture",
      caption: "Drop bags near Waverley",
    },
    {
      src: p(1365425),
      alt: "Scottish Highlands landscape under dramatic sky",
      caption: "West Highland Line starts tomorrow",
    },
    {
      src: p(1366919),
      alt: "Mountain ridges in the Scottish Highlands",
      caption: "Knoydart awaits",
    },
  ],
  "2026-07-07::Stay": [
    {
      src: u("1566073771259-6a8506099945"),
      alt: "Cosy hotel room ready for rest",
      caption: "First night — sleep before the train",
    },
    {
      src: u("1540206395-68808572332f"),
      alt: "Travel bag packed by the door",
      caption: "Pack light — 5 hiking days ahead",
    },
    {
      src: u("1589998059171-988d887df646"),
      alt: "City street lit at night",
      caption: "Short walk from Waverley station",
    },
    {
      src: u("1432405972618-c60b0225b8f9"),
      alt: "Warm drink after a long travel day",
      caption: "Unwind before an early start",
    },
    {
      src: p(325185),
      alt: "City lights reflecting on wet streets",
      caption: "Edinburgh overnight",
    },
  ],
  "2026-07-08::Day 1": [
    {
      src: u("1548013146-72479768bada"),
      alt: "Steam train crossing Glenfinnan Viaduct",
      caption: "West Highland Line — Glenfinnan",
    },
    {
      src: u("1689340045770-19fb2dd15707"),
      alt: "Jacobite steam train on Glenfinnan Viaduct",
      caption: "Harry Potter viaduct on the route",
    },
    {
      src: u("1547756536-cde3673fa2e5"),
      alt: "Train on a highland railway line",
      caption: "ScotRail through the Highlands",
    },
    {
      src: u("1506905925346-21bda4d32df4"),
      alt: "Mountain peaks above cloud inversion",
      caption: "Approaching the west coast",
    },
    {
      src: p(1366913),
      alt: "Remote highland loch and mountains",
      caption: "Mallaig → Inverie ferry next",
    },
  ],
  "2026-07-08::Stay": [
    {
      src: u("1470071459604-3b5ec3a7fe05"),
      alt: "Misty loch surrounded by mountains",
      caption: "Loch Nevis — Britain's remotest sea loch",
    },
    {
      src: u("1464822759023-fed622ff2c3b"),
      alt: "Knoydart mountain ridge at sunset",
      caption: "Knoydart peninsula — no road access",
    },
    {
      src: u("1519681393784-d120267933ba"),
      alt: "Highland peaks lit by evening sun",
      caption: "Inverie — ferry-only village",
    },
    {
      src: p(1365423),
      alt: "Small highland village beside water",
      caption: "The Old Forge — most remote mainland pub",
    },
    {
      src: p(1366909),
      alt: "Coastal village houses beside a sea loch",
      caption: "Last comforts before wild camping",
    },
  ],
  "2026-07-09::Hike 1": [
    {
      src: u("1441974231531-c6227db76b6e"),
      alt: "Sunlit forest path through woodland",
      caption: "Inverie trailhead — Loch Nevis coast",
    },
    {
      src: p(1366907),
      alt: "Rocky shoreline on a remote sea loch",
      caption: "Coastal walking west along Loch Nevis",
    },
    {
      src: p(1179229),
      alt: "Wild camp tent beside a mountain loch",
      caption: "Remote shore walking",
    },
    {
      src: u("1625246333195-78d9c38ad449"),
      alt: "Backpacker's tent at a wild camp spot",
      caption: "Wild camp at Sourlies",
    },
    {
      src: p(2662116),
      alt: "Tent pitched in open highland moorland",
      caption: "Loch Nevis shore — no facilities",
    },
  ],
  "2026-07-10::Hike 2": [
    {
      src: u("1454496522488-7a8e488e8606"),
      alt: "Snow-capped mountain range at dawn",
      caption: "Morning on Loch Nevis",
    },
    {
      src: u("1486870591958-9b9d0d1dda99"),
      alt: "Mountain pass with dramatic storm clouds",
      caption: "Mam Unndal pass (~620 m)",
    },
    {
      src: u("1418065460487-3e41a6c84dc5"),
      alt: "Deep green glen between high mountains",
      caption: "Glen Dessarry interior",
    },
    {
      src: u("1501785888041-af3ef285b470"),
      alt: "Still lake reflecting mountains at dusk",
      caption: "Camp near A' Chuil Bothy",
    },
    {
      src: p(2662117),
      alt: "Rugged highland path through open moor",
      caption: "Knoydart's quietest country",
    },
  ],
  "2026-07-11::Hike 3": [
    {
      src: p(325186),
      alt: "Long valley track between mountain slopes",
      caption: "Glen Dessarry track — long day",
    },
    {
      src: u("1469474968028-56623f02e42e"),
      alt: "Sun rays breaking over mountain ridges",
      caption: "Bealach an Lagain Duibh",
    },
    {
      src: u("1539206488819-154bad0e06e8"),
      alt: "Glenfinnan Viaduct curving over the glen",
      caption: "Glenfinnan Viaduct — finish line",
    },
    {
      src: p(325187),
      alt: "Hiker on a highland ridge trail",
      caption: "~28–30 km through Glen Finnan",
    },
    {
      src: p(325188),
      alt: "Valley opening toward a distant loch",
      caption: "Down into Glenfinnan village",
    },
  ],
  "2026-07-11::Stay": [
    {
      src: p(325189),
      alt: "Stone railway viaduct above a forested glen",
      caption: "Viaduct views from the village",
    },
    {
      src: p(325192),
      alt: "Calm loch water reflecting forested hills",
      caption: "Loch Shiel from Glenfinnan",
    },
    {
      src: p(325193),
      alt: "Small highland village houses at dusk",
      caption: "Hostel, campsite, or B&B",
    },
    {
      src: p(325196),
      alt: "Cottage lights on in a highland hamlet",
      caption: "Hot shower after the longest day",
    },
    {
      src: p(325197),
      alt: "Historic monument on a hill above a loch",
      caption: "Glenfinnan Monument nearby",
    },
  ],
  "2026-07-12::Transit": [
    {
      src: p(325200),
      alt: "Morning mist rising from a highland loch",
      caption: "Loch Shiel ferry — check Wed/Sat sailing",
    },
    {
      src: p(417074),
      alt: "Small passenger boat on a Scottish loch",
      caption: "Loch Shiel Highland Cruises",
    },
    {
      src: p(417075),
      alt: "Still loch surface with forested shoreline",
      caption: "Glenfinnan → Polloch pontoon",
    },
    {
      src: p(417076),
      alt: "Wooden jetty extending into a quiet loch",
      caption: "Polloch landing — Morvern leg begins",
    },
    {
      src: p(417077),
      alt: "Ferry departing a remote loch shore",
      caption: "Morning drop-off on Loch Shiel",
    },
  ],
  "2026-07-12::Hike 4": [
    {
      src: p(417078),
      alt: "Ancient oak trees in Atlantic woodland",
      caption: "Atlantic oak woodland — Morvern",
    },
    {
      src: p(417079),
      alt: "Forest path beside a loch shoreline",
      caption: "Loch Shiel estate tracks",
    },
    {
      src: u("1472214103451-9374bd1c798e"),
      alt: "Rolling green hills under open sky",
      caption: "Quiet peninsula paths",
    },
    {
      src: p(417080),
      alt: "Stream running through mossy woodland",
      caption: "Ardnamurchan oak woods",
    },
    {
      src: p(417081),
      alt: "Hillside path above a sea loch",
      caption: "Estate tracks into Strontian",
    },
  ],
  "2026-07-13::Transit": [
    {
      src: p(417082),
      alt: "Single-track road through highland countryside",
      caption: "Shiel Buses 507 — Strontian → Lochaline",
    },
    {
      src: p(417083),
      alt: "Passenger ferry crossing a sea loch",
      caption: "Port Appin → Lismore ferry",
    },
    {
      src: p(417084),
      alt: "Limestone cliffs on a small Scottish island",
      caption: "Optional walk on Lismore (~8 km)",
    },
    {
      src: p(417085),
      alt: "Wide sea view toward distant islands",
      caption: "Sound of Mull crossing",
    },
    {
      src: p(417086),
      alt: "Coastal town seen from the ferry approach",
      caption: "CalMac into Oban harbour",
    },
  ],
  "2026-07-13::Stay": [
    {
      src: u("1567894340315-735d7c361db0"),
      alt: "Scottish harbour town with fishing boats",
      caption: "Oban — seafood capital of the Highlands",
    },
    {
      src: p(417087),
      alt: "Harbour waterfront at golden hour",
      caption: "Celebration meal by the water",
    },
    {
      src: p(417088),
      alt: "Large ferry at a busy Scottish port",
      caption: "CalMac hub — ferries to the isles",
    },
    {
      src: p(671793),
      alt: "Colourful boats moored in a busy harbour",
      caption: "North Pier & town centre",
    },
    {
      src: p(671797),
      alt: "Waterfront restaurants beside the harbour",
      caption: "Last Scottish night",
    },
  ],
  "2026-07-14::Return": [
    {
      src: p(1032651),
      alt: "ScotRail train passing through green countryside",
      caption: "Oban → Glasgow Queen Street",
    },
    {
      src: p(1032650),
      alt: "Railway line through green Scottish countryside",
      caption: "Last views of the Highlands",
    },
    {
      src: p(671799),
      alt: "Historic city buildings on a hill",
      caption: "Into Edinburgh Waverley",
    },
    {
      src: u("1516026672322-bc52d61a55d5"),
      alt: "Scottish city skyline from the train",
      caption: "Afternoon arrival in the capital",
    },
    {
      src: p(671800),
      alt: "Railway station concourse with travellers",
      caption: "Drop packs near the station",
    },
  ],
  "2026-07-14::Stay": [
    {
      src: w("c/c4/Edinburgh_Castle_from_Grass_Market.jpg/1280px-Edinburgh_Castle_from_Grass_Market.jpg"),
      alt: "Edinburgh Castle viewed from the Grassmarket",
      caption: "Castle rock from the Grassmarket",
    },
    {
      src: w("0/07/Street_performer%2C_Royal_Mile%2C_Edinburgh.jpg/1280px-Street_performer%2C_Royal_Mile%2C_Edinburgh.jpg"),
      alt: "Historic Royal Mile street with stone buildings",
      caption: "Old Town evening wander",
    },
    {
      src: w("4/4c/Ceilidh_advertising%2C_Royal_Mile%2C_Edinburgh.jpg/1280px-Ceilidh_advertising%2C_Royal_Mile%2C_Edinburgh.jpg"),
      alt: "Traditional pub sign on the Royal Mile",
      caption: "Celebration dinner after the trail",
    },
    {
      src: w("f/f6/Edinburgh_Royal_Mile_from_Salisbury_Crags_20211019.jpg/1280px-Edinburgh_Royal_Mile_from_Salisbury_Crags_20211019.jpg"),
      alt: "Edinburgh skyline from Salisbury Crags at dusk",
      caption: "Buffer night — no early alarm",
    },
    {
      src: p(672037),
      alt: "Night street with warm shop lights",
      caption: "Edinburgh overnight",
    },
  ],
  "2026-07-15::Reserve": [
    {
      src: w("b/bb/Edinburgh_Castle_from_Esplanade_20211019.jpg/1280px-Edinburgh_Castle_from_Esplanade_20211019.jpg"),
      alt: "Edinburgh Castle from the esplanade",
      caption: "Full day in the capital",
    },
    {
      src: w("6/6a/Royal_Mile%2C_Edinburgh_-_geograph.org.uk_-_1970888.jpg/1280px-Royal_Mile%2C_Edinburgh_-_geograph.org.uk_-_1970888.jpg"),
      alt: "Royal Mile street looking toward the castle",
      caption: "Royal Mile & closes",
    },
    {
      src: w("1/15/Arthur%27s_Seat_2023.jpg/1280px-Arthur%27s_Seat_2023.jpg"),
      alt: "Arthur's Seat hill above Edinburgh",
      caption: "Arthur's Seat if legs allow",
    },
    {
      src: w("b/b3/National_Museum_of_Scotland%2C_interior._Edinburgh%2C_Scotland%2C_UK.jpg/1280px-National_Museum_of_Scotland%2C_interior._Edinburgh%2C_Scotland%2C_UK.jpg"),
      alt: "National Museum of Scotland grand interior hall",
      caption: "National Museum morning",
    },
    {
      src: w("c/c3/Clouds_from_aircraft.jpg/1280px-Clouds_from_aircraft.jpg"),
      alt: "View of clouds from an aircraft window",
      caption: "Edinburgh → Tallinn",
    },
  ],
};

export function photoKey(dateIso: string, dayLabel: string): string {
  return `${dateIso}::${dayLabel}`;
}

export function getDayPhotos(dateIso: string, dayLabel: string): DayPhoto[] {
  return DAY_PHOTOS[photoKey(dateIso, dayLabel)] ?? [];
}

export function getHikePhotos(dateIso: string, dayLabel: string): DayPhoto[] {
  return getDayPhotos(dateIso, dayLabel);
}
