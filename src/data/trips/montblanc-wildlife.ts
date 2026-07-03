import type { WildlifeSpecies } from "../wildlife";

/** Verified Wikimedia Commons species photos (CC-licensed) */
const W = {
  ibex:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Alpine_Ibex.jpg/1280px-Alpine_Ibex.jpg",
  ibex2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Steinbock.jpg/1280px-Steinbock.jpg",
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
  alpineChough:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Pyrrhocorax_graculus_01.jpg/1280px-Pyrrhocorax_graculus_01.jpg",
  alpineChough2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/013_Wild_Alpine_chough_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/1280px-013_Wild_Alpine_chough_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg",
  nutcracker:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Spotted_Nutcracker.jpg/1280px-Spotted_Nutcracker.jpg",
  nutcracker2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Nucifraga_caryocatactes_Presov.jpg/1280px-Nucifraga_caryocatactes_Presov.jpg",
} as const;

export const MONTBLANC_WILDLIFE: WildlifeSpecies[] = [
  {
    id: "alpine-ibex",
    name: "Alpine ibex",
    latinName: "Capra ibex",
    route: "Grand Col Ferret · high cols · Aiguilles Rouges",
    summary:
      "Reintroduced after near-extinction — now common on steep slopes above Val Ferret and near Lac Blanc. Look for silhouettes on skyline ridges at dawn; males with heavy curved horns.",
    likelihood: "possible",
    photos: [
      {
        src: W.ibex,
        alt: "Alpine ibex on a rocky ridge",
        caption: "Steep ground above Val Ferret",
      },
      {
        src: W.ibex2,
        alt: "Male Capra ibex with curved horns",
        caption: "Scan cols at first light",
      },
    ],
  },
  {
    id: "montblanc-chamois",
    name: "Alpine chamois",
    latinName: "Rupicapra rupicapra",
    route: "Col du Bonhomme · Grand Col Ferret · exposed cols",
    summary:
      "Agile goat-antelope on granite slabs throughout the TMB. Often a flash of movement on scree above the trail — pairs and family groups on high cols.",
    likelihood: "common",
    photos: [
      {
        src: W.chamois,
        alt: "Chamois on alpine slopes",
        caption: "High cols & scree fields",
      },
      {
        src: W.chamois2,
        alt: "Northern chamois Rupicapra rupicapra",
        caption: "Dawn on exposed ridges",
      },
    ],
  },
  {
    id: "montblanc-marmot",
    name: "Alpine marmot",
    latinName: "Marmota marmota",
    route: "Col de Voza · alpine meadows · Champex pastures",
    summary:
      "Whistling colonies on grassy slopes below the cols. Ubiquitous on Stage 1–2 and around Champex — alarm calls echo off valley walls when hikers approach.",
    likelihood: "common",
    photos: [
      {
        src: W.marmot,
        alt: "Alpine marmot on a meadow",
        caption: "Grassy slopes below the cols",
      },
      {
        src: W.marmot2,
        alt: "Marmota marmota standing alert",
        caption: "Listen for whistles on Stage 1–2",
      },
    ],
  },
  {
    id: "golden-eagle-montblanc",
    name: "Golden eagle",
    latinName: "Aquila chrysaetos",
    route: "Val Ferret · Aiguilles Rouges · high thermals",
    summary:
      "Broad wings quartering empty valleys — pairs nest on remote cliffs above the Italian side. Much larger than buzzards; slow wingbeats on clear afternoons over Grand Col Ferret.",
    likelihood: "possible",
    photos: [
      {
        src: W.goldenEagle,
        alt: "Golden eagle soaring in flight",
        caption: "Thermals above Val Ferret",
      },
      {
        src: W.goldenEagle2,
        alt: "Golden eagle with wings spread",
        caption: "Scan skies on clear days",
      },
    ],
  },
  {
    id: "montblanc-chough",
    name: "Alpine chough",
    latinName: "Pyrrhocorax graculus",
    route: "Every col · refuge terraces · Lac Blanc",
    summary:
      "Yellow-billed, red-legged crows that mob hikers at cols and refuge doorsteps. Acrobatic in updrafts — expect bold visitors at Bonatti and Lac Blanc.",
    likelihood: "common",
    photos: [
      {
        src: W.alpineChough,
        alt: "Alpine chough on rock",
        caption: "Col scavengers",
      },
      {
        src: W.alpineChough2,
        alt: "Pyrrhocorax graculus in flight",
        caption: "Refuge terraces & cols",
      },
    ],
  },
  {
    id: "montblanc-nutcracker",
    name: "Spotted nutcracker",
    latinName: "Nucifraga caryocatactes",
    route: "Larch forest · Les Contamines · lower TMB",
    summary:
      "Dark, white-spotted corvid tied to stone-pine and larch forests — rattling call on forested stages below the cols. Often flies tree-to-tree ahead of you on the descent to Contamines.",
    likelihood: "common",
    photos: [
      {
        src: W.nutcracker,
        alt: "Spotted nutcracker on a branch",
        caption: "Forest stages below the cols",
      },
      {
        src: W.nutcracker2,
        alt: "Nucifraga caryocatactes perched",
        caption: "Listen for rattling calls",
      },
    ],
  },
];
