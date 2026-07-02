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

/** Verified Wikimedia Commons species photos (CC-licensed) */
const W = {
  redDeerScotland:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Red_deer_stag_-_geograph.org.uk_-_8324238.jpg/1280px-Red_deer_stag_-_geograph.org.uk_-_8324238.jpg",
  redDeerStag:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/RedDeerStag.jpg/1280px-RedDeerStag.jpg",
  goldenEagle1:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/1280px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg",
  goldenEagle2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/016_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/1280px-016_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg",
  seaEagleScotland:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/White_Tailed_Sea_Eagle_-_geograph.org.uk_-_5362805.jpg/1280px-White_Tailed_Sea_Eagle_-_geograph.org.uk_-_5362805.jpg",
  seaEagleFlight:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/White-tailed_eagle_%28Haliaeetus_albicilla%29_in_flight_2.jpg/1280px-White-tailed_eagle_%28Haliaeetus_albicilla%29_in_flight_2.jpg",
  otter1:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Otter_-_Eurasian_otter_-_Lutra_lutra.jpg/1280px-Otter_-_Eurasian_otter_-_Lutra_lutra.jpg",
  otter2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/European_otter_01.jpg/1280px-European_otter_01.jpg",
  commonSeal1:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Common_seal_%28Phoca_vitulina%29.jpg/1280px-Common_seal_%28Phoca_vitulina%29.jpg",
  commonSeal2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Common_seal_%28Phoca_vitulina%29_2.jpg/1280px-Common_seal_%28Phoca_vitulina%29_2.jpg",
  redSquirrel1:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Red_squirrel_%2821808%29.jpg/1280px-Red_squirrel_%2821808%29.jpg",
  redSquirrel2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Sciurus_vulgaris_186868985.jpg/1280px-Sciurus_vulgaris_186868985.jpg",
  pineMarten1:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/European_pine_marten_%28Martes_martes%29_Drenthe.jpg/1280px-European_pine_marten_%28Martes_martes%29_Drenthe.jpg",
  pineMarten2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/European_pine_marten_%28Martes_martes%29_Drenthe_2.jpg/1280px-European_pine_marten_%28Martes_martes%29_Drenthe_2.jpg",
  porpoise1:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Phocoena_phocoena.2.jpg/1280px-Phocoena_phocoena.2.jpg",
  porpoise2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Marsvin_%28Phocoena_phocoena%29.jpg/1280px-Marsvin_%28Phocoena_phocoena%29.jpg",
  diver1:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Black-throated_loon_%28Gavia_arctica%29_2022.jpg/1280px-Black-throated_loon_%28Gavia_arctica%29_2022.jpg",
  diver2:
    "https://upload.wikimedia.org/wikipedia/commons/f/ff/Gavia_arctica1.jpg",
  highlandCattleSkye:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Highland_Cattle_on_Isle_of_Skye%2C_Scotland.jpg/1280px-Highland_Cattle_on_Isle_of_Skye%2C_Scotland.jpg",
  highlandCattleHebrides:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Highland_Cattle%2C_Lewis_and_Harris%2C_The_Outer_Hebrides%2C_Scotland.jpg/1280px-Highland_Cattle%2C_Lewis_and_Harris%2C_The_Outer_Hebrides%2C_Scotland.jpg",
} as const;

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
        src: W.redDeerScotland,
        alt: "Red deer stag in the Scottish Highlands",
        caption: "Highland stag · geograph.org.uk",
      },
      {
        src: W.redDeerStag,
        alt: "Red deer stag standing in moorland",
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
        src: W.goldenEagle1,
        alt: "Golden eagle soaring in flight",
        caption: "Scan upland thermals above Knoydart",
      },
      {
        src: W.goldenEagle2,
        alt: "Golden eagle with wings spread in flight",
        caption: "Slow wingbeats on clear days",
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
        src: W.seaEagleScotland,
        alt: "White-tailed sea eagle in Scotland",
        caption: "West coast reintroduction · geograph.org.uk",
      },
      {
        src: W.seaEagleFlight,
        alt: "White-tailed eagle in flight",
        caption: "Watch from Loch Shiel & ferries",
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
        src: W.otter1,
        alt: "Eurasian otter on a rocky shore",
        caption: "Dawn on sea lochs",
      },
      {
        src: W.otter2,
        alt: "European otter swimming",
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
        src: W.commonSeal1,
        alt: "Harbour seal resting on rocks",
        caption: "Loch Nevis skerries",
      },
      {
        src: W.commonSeal2,
        alt: "Common seal on a shoreline",
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
        src: W.redSquirrel1,
        alt: "Red squirrel on a tree branch",
        caption: "Atlantic oak canopy",
      },
      {
        src: W.redSquirrel2,
        alt: "Red squirrel Sciurus vulgaris",
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
        src: W.pineMarten1,
        alt: "European pine marten on a log",
        caption: "Woodland edges at dusk",
      },
      {
        src: W.pineMarten2,
        alt: "Pine marten Martes martes close-up",
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
        src: W.porpoise1,
        alt: "Harbour porpoise at the water surface",
        caption: "Sound of Mull crossings",
      },
      {
        src: W.porpoise2,
        alt: "Harbour porpoise Phocoena phocoena",
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
        src: W.diver1,
        alt: "Black-throated diver on water",
        caption: "Open water on remote lochs",
      },
      {
        src: W.diver2,
        alt: "Black-throated diver Gavia arctica",
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
        src: W.highlandCattleSkye,
        alt: "Highland cattle on the Isle of Skye, Scotland",
        caption: "Estate tracks & farmland",
      },
      {
        src: W.highlandCattleHebrides,
        alt: "Highland cattle in the Outer Hebrides, Scotland",
        caption: "West Highland Line country",
      },
    ],
  },
];
