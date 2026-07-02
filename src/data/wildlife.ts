import type { DayPhoto } from "./photos";

export type WildlifeLikelihood = "common" | "possible" | "lucky";

export interface WildlifeSpecies {
  id: string;
  name: string;
  latinName?: string;
  /** Where on this specific route */
  route: string;
  summary: string;
  likelihood: WildlifeLikelihood;
  photos: DayPhoto[];
}

function p(id: number): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;
}

function u(id: string): string {
  return `https://images.unsplash.com/photo-${id}?w=1200&q=80`;
}

const LIKELIHOOD_LABELS: Record<WildlifeLikelihood, string> = {
  common: "Common",
  possible: "Possible",
  lucky: "Lucky spot",
};

export function wildlifeLikelihoodLabel(l: WildlifeLikelihood): string {
  return LIKELIHOOD_LABELS[l];
}

/** Animals & birds you may see along Inverie → Oban */
export const WILDLIFE_SPECIES: WildlifeSpecies[] = [
  {
    id: "red-deer",
    name: "Red deer",
    latinName: "Cervus elaphus",
    route: "Knoydart hills · Glen Dessarry · Morvern tracks",
    summary:
      "Scotland's largest land mammal. Often seen at dawn on open hillsides and glen floors — listen for roaring stags in autumn, but July hinds and calves are common in high Knoydart.",
    likelihood: "common",
    photos: [
      {
        src: p(1661546),
        alt: "Red deer stag on a Highland hillside",
        caption: "Open hillside grazing",
      },
      {
        src: p(1661547),
        alt: "Red deer hind in moorland grass",
        caption: "Glen floors at first light",
      },
    ],
  },
  {
    id: "golden-eagle",
    name: "Golden eagle",
    latinName: "Aquila chrysaetos",
    route: "Mam Unndal · Knoydart ridges · remote glens",
    summary:
      "Huge wingspan over empty country. Scan skylines on Hike 2–3 — a pair may quarter the Mam Unndal slopes. Distinctive slow wingbeats, not the flutter of buzzards.",
    likelihood: "possible",
    photos: [
      {
        src: p(128756),
        alt: "Golden eagle soaring over mountains",
        caption: "Upland thermals above Knoydart",
      },
      {
        src: p(128757),
        alt: "Bird of prey in flight against a blue sky",
        caption: "Watch ridges on clear days",
      },
    ],
  },
  {
    id: "sea-eagle",
    name: "White-tailed eagle",
    latinName: "Haliaeetus albicilla",
    route: "Loch Shiel · Sound of Mull · Oban ferries",
    summary:
      "Reintroduced to the west coast — bigger than a golden eagle with a wedge-shaped tail. Loch Shiel cruises and CalMac crossings to Oban are prime viewing; often perched on dead trees or skimming the water.",
    likelihood: "possible",
    photos: [
      {
        src: p(128758),
        alt: "White-tailed sea eagle in flight",
        caption: "Loch Shiel & sea lochs",
      },
      {
        src: p(1661549),
        alt: "Large eagle perched on a coastal branch",
        caption: "Scan treelines from the ferry",
      },
    ],
  },
  {
    id: "otter",
    name: "Eurasian otter",
    latinName: "Lutra lutra",
    route: "Loch Nevis shore · Strontian · Oban waterfront",
    summary:
      "Coastal otters fish at dawn and dusk. Quiet stretches of Loch Nevis near Sourlies and rocky shores around Strontian are good — look for a V-shaped wake and a whiskered head.",
    likelihood: "possible",
    photos: [
      {
        src: p(128759),
        alt: "Otter swimming in calm water",
        caption: "Dawn on sea lochs",
      },
      {
        src: p(128760),
        alt: "Otter on a rocky shoreline",
        caption: "Rocky creeks near camp",
      },
    ],
  },
  {
    id: "seal",
    name: "Common & grey seal",
    route: "Loch Nevis · Loch Shiel · Oban Bay",
    summary:
      "Harbour (common) seals haul out on skerries in Loch Nevis — visible from the Inverie ferry and coastal path. Grey seals are larger, with longer noses; both follow fish into west-coast lochs.",
    likelihood: "common",
    photos: [
      {
        src: p(128761),
        alt: "Seal resting on rocks in a sea loch",
        caption: "Loch Nevis skerries",
      },
      {
        src: p(325649),
        alt: "Seal head above water",
        caption: "Curious heads near the ferry",
      },
    ],
  },
  {
    id: "red-squirrel",
    name: "Red squirrel",
    latinName: "Sciurus vulgaris",
    route: "Atlantic oak woods · Polloch → Strontian (Hike 4)",
    summary:
      "Native reds thrive in Morvern's temperate rainforest — listen for chattering in the oak canopy on estate tracks. Much smaller and rust-coloured compared to invasive greys (rare here).",
    likelihood: "possible",
    photos: [
      {
        src: p(325650),
        alt: "Red squirrel on a tree branch",
        caption: "Atlantic oak canopy",
      },
      {
        src: p(325651),
        alt: "Red squirrel eating on a mossy log",
        caption: "Hike 4 woodland",
      },
    ],
  },
  {
    id: "pine-marten",
    name: "Pine marten",
    latinName: "Martes martes",
    route: "Ardnamurchan woods · Glenfinnan forest",
    summary:
      "Chestnut-brown with a creamy throat bib — shy but curious. Ardnamurchan is a stronghold; dusk near woodland edges or around Glenfinnan campsite bins can yield a quick sighting.",
    likelihood: "lucky",
    photos: [
      {
        src: p(325652),
        alt: "Pine marten on a forest floor",
        caption: "Woodland edges at dusk",
      },
      {
        src: p(325654),
        alt: "Pine marten climbing a tree trunk",
        caption: "Ardnamurchan rainforest",
      },
    ],
  },
  {
    id: "porpoise",
    name: "Harbour porpoise",
    latinName: "Phocoena phocoena",
    route: "Port Appin · Lismore ferry · Oban Bay",
    summary:
      "Small, shy cetaceans — triangular dorsal fin, no bow-riding. Watch from the Lismore and Oban ferries on calm days; a quick arc and blow is typical before they dive.",
    likelihood: "possible",
    photos: [
      {
        src: p(325655),
        alt: "Porpoise dorsal fin above sea water",
        caption: "Sound of Mull crossings",
      },
      {
        src: p(325656),
        alt: "Marine mammal surfacing in a calm sea loch",
        caption: "Calm transit days",
      },
    ],
  },
  {
    id: "diver",
    name: "Black-throated diver",
    latinName: "Gavia arctica",
    route: "Remote lochs · Loch Shiel · Knoydart waters",
    summary:
      "Elegant red-eyed divers on lonely lochs — low profile in the water, yodelling call carries far. Loch Nevis and Loch Shiel support breeding pairs; scan open water from shore camps.",
    likelihood: "lucky",
    photos: [
      {
        src: p(325657),
        alt: "Diver bird swimming on a Highland loch",
        caption: "Open water on remote lochs",
      },
      {
        src: p(325658),
        alt: "Water bird on a still Scottish loch",
        caption: "Listen for far-carrying calls",
      },
    ],
  },
  {
    id: "highland-cattle",
    name: "Highland cattle",
    route: "Estate tracks · Glenfinnan · west coast farms",
    summary:
      "Shaggy, horned cattle on grazing land along the WHL and estate paths — not truly wild, but iconic. Give them space, especially with calves; close quietly and don't block drove routes.",
    likelihood: "common",
    photos: [
      {
        src: u("1505142468610-359e7d316be0"),
        alt: "Highland cow with long horns in a field",
        caption: "Estate tracks & farmland",
      },
      {
        src: p(325659),
        alt: "Hairy Highland cattle in moorland grass",
        caption: "West Highland Line country",
      },
    ],
  },
];
