import type { WildlifeSpecies } from "../wildlife";

/** Verified Wikimedia Commons species photos (CC-licensed) */
const W = {
  chamois:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Rupicapra_rupicapra_1.jpg/1280px-Rupicapra_rupicapra_1.jpg",
  chamois2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Northern_Chamois_-_Rupicapra_rupicapra.jpg/1280px-Northern_Chamois_-_Rupicapra_rupicapra.jpg",
  marmot:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Marmota_marmota_Alpes2.jpg/1280px-Marmota_marmota_Alpes2.jpg",
  marmot2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Alpine_Marmot.jpg/1280px-Alpine_Marmot.jpg",
  goldenEagle:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/1280px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg",
  goldenEagle2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/016_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/1280px-016_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg",
  redDeer:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/RedDeerStag.jpg/1280px-RedDeerStag.jpg",
  redDeer2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Red_deer_stag_-_geograph.org.uk_-_8324238.jpg/1280px-Red_deer_stag_-_geograph.org.uk_-_8324238.jpg",
  alpineChough:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Pyrrhocorax_graculus_01.jpg/1280px-Pyrrhocorax_graculus_01.jpg",
  alpineChough2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/013_Wild_Alpine_chough_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/1280px-013_Wild_Alpine_chough_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg",
  nutcracker:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Spotted_Nutcracker.jpg/1280px-Spotted_Nutcracker.jpg",
  nutcracker2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Nucifraga_caryocatactes_Presov.jpg/1280px-Nucifraga_caryocatactes_Presov.jpg",
} as const;

export const TATRAS_WILDLIFE: WildlifeSpecies[] = [
  {
    id: "tatra-chamois",
    name: "Tatra chamois",
    latinName: "Rupicapra rupicapra tatrica",
    route: "Rysy · Prielom · exposed ridges above 1,800 m",
    summary:
      "Endemic subspecies of the Alpine chamois — agile on sheer granite above the tree line. Scan rocky slopes near Rysy and Prielom; often a silhouette on a skyline rather than close-up.",
    likelihood: "possible",
    photos: [
      {
        src: W.chamois,
        alt: "Chamois on rocky Tatra slopes",
        caption: "Granite slabs above 1,800 m",
      },
      {
        src: W.chamois2,
        alt: "Alpine chamois Rupicapra rupicapra",
        caption: "Dawn on exposed ridges",
      },
    ],
  },
  {
    id: "tatra-marmot",
    name: "Alpine marmot",
    latinName: "Marmota marmota",
    route: "Zelené pleso · open meadows · Štrbské forest",
    summary:
      "Whistling colonies on grassy slopes below the highest peaks. Listen for alarm calls echoing off valley walls — common around Zelené pleso and open plateaus on circuit day 1–2.",
    likelihood: "common",
    photos: [
      {
        src: W.marmot,
        alt: "Alpine marmot on a meadow",
        caption: "Grassy slopes below the huts",
      },
      {
        src: W.marmot2,
        alt: "Marmota marmota standing alert",
        caption: "Colonies whistle when hikers approach",
      },
    ],
  },
  {
    id: "golden-eagle-tatras",
    name: "Golden eagle",
    latinName: "Aquila chrysaetos",
    route: "Prielom · Kriváň · high valleys",
    summary:
      "Broad wings over empty valleys — pairs nest on remote Tatra cliffs. Distinctive slow wingbeats; much larger than the common buzzards lower down. Scan thermals on clear circuit days.",
    likelihood: "possible",
    photos: [
      {
        src: W.goldenEagle,
        alt: "Golden eagle soaring in flight",
        caption: "Thermals above Prielom",
      },
      {
        src: W.goldenEagle2,
        alt: "Golden eagle with wings spread",
        caption: "Slow wingbeats on clear days",
      },
    ],
  },
  {
    id: "red-deer-tatras",
    name: "Red deer",
    latinName: "Cervus elaphus",
    route: "Forest approach to Bielá Voda · lower Magistrala",
    summary:
      "Larger stags and hinds in spruce forest on the climb to Bielá Voda and on evening walks around Štrbské. More often heard rustling in dwarf pine than seen on busy summer trails.",
    likelihood: "possible",
    photos: [
      {
        src: W.redDeer,
        alt: "Red deer stag in forest",
        caption: "Lower valleys at dawn",
      },
      {
        src: W.redDeer2,
        alt: "Red deer stag in moorland",
        caption: "Forest edges near trailheads",
      },
    ],
  },
  {
    id: "alpine-chough",
    name: "Alpine chough",
    latinName: "Pyrrhocorax graculus",
    route: "Rysy summit · hut terraces · Kriváň ridge",
    summary:
      "Yellow-billed, red-legged crows that mob hikers at summits and hut doorsteps. Acrobatic in updrafts — expect bold visitors at Chata pod Rysmi and Kriváň top.",
    likelihood: "common",
    photos: [
      {
        src: W.alpineChough,
        alt: "Alpine chough on rock",
        caption: "Summit scavengers",
      },
      {
        src: W.alpineChough2,
        alt: "Pyrrhocorax graculus in flight",
        caption: "Hut terraces & ridge tops",
      },
    ],
  },
  {
    id: "spotted-nutcracker",
    name: "Spotted nutcracker",
    latinName: "Nucifraga caryocatactes",
    route: "Spruce forest · Štrbské shores · approach trails",
    summary:
      "Dark, white-spotted corvid tied to stone-pine forests — rattling call carries through the trees around Štrbské Pleso. Often flies tree-to-tree ahead of you on forest sections.",
    likelihood: "common",
    photos: [
      {
        src: W.nutcracker,
        alt: "Spotted nutcracker on a branch",
        caption: "Spruce forests around Štrbské",
      },
      {
        src: W.nutcracker2,
        alt: "Nucifraga caryocatactes perched",
        caption: "Listen for rattling calls",
      },
    ],
  },
];
