import type { WildlifeSpecies } from "../wildlife";

/** Verified Wikimedia Commons species photos (CC-licensed) */
const W = {
  reindeer:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/192_Herd_of_Reindeers_running_in_Southern_Iceland_Photo_by_Giles_Laurent.jpg/1280px-192_Herd_of_Reindeers_running_in_Southern_Iceland_Photo_by_Giles_Laurent.jpg",
  reindeer2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Herd_of_reindeer_at_Hamningberg%2C_2012_June.JPG/1280px-Herd_of_reindeer_at_Hamningberg%2C_2012_June.JPG",
  ptarmigan:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Willow_Ptarmigan.jpg/1280px-Willow_Ptarmigan.jpg",
  ptarmigan2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Willow_ptarmigan_%28Lagopus_lagopus%29_2018_2.jpg/1280px-Willow_ptarmigan_%28Lagopus_lagopus%29_2018_2.jpg",
  siberianJay:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Siberian_Jay_Kittila_20100312b.jpg/1280px-Siberian_Jay_Kittila_20100312b.jpg",
  siberianJay2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Siberian_Jay_Kittila_20100312.jpg/1280px-Siberian_Jay_Kittila_20100312.jpg",
  goldenEagle:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/1280px-015_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg",
  goldenEagle2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/016_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg/1280px-016_Wild_Golden_Eagle_in_flight_at_Pfyn-Finges_%28Switzerland%29_Photo_by_Giles_Laurent.jpg",
  lemming:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Lemmus_lemmus_in_Kevo_Strict_Nature_Reserve.jpg/1280px-Lemmus_lemmus_in_Kevo_Strict_Nature_Reserve.jpg",
  lemming2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Lemmus_lemmus_no.JPG/1280px-Lemmus_lemmus_no.JPG",
  arcticFox:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/ArcticFoxSummer.jpg/1280px-ArcticFoxSummer.jpg",
  arcticFox2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Arctic_Fox_on_Banks_Island_04.jpg/1280px-Arctic_Fox_on_Banks_Island_04.jpg",
  roughLeggedBuzzard:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Buteo_lagopus_%28rough-legged_hawk%29_2.jpg/1280px-Buteo_lagopus_%28rough-legged_hawk%29_2.jpg",
  roughLeggedBuzzard2:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Buteo_lagopus_%28rough-legged_hawk%29_4.jpg/1280px-Buteo_lagopus_%28rough-legged_hawk%29_4.jpg",
} as const;

export const LAPLAND_WILDLIFE: WildlifeSpecies[] = [
  {
    id: "reindeer",
    name: "Reindeer",
    latinName: "Rangifer tarandus",
    route: "Kungsleden trail · Nikkaluokta road · drive north of Kiruna",
    summary:
      "Semi-domesticated herds graze the fells freely — Sami herding culture spans Sweden, Finland, and Norway. Expect animals on the trail and on the Nikkaluokta road; give calves space and never chase for photos.",
    likelihood: "common",
    photos: [
      {
        src: W.reindeer,
        alt: "Reindeer herd in Lapland, Finland",
        caption: "On trail and roads near Kiruna",
      },
      {
        src: W.reindeer2,
        alt: "Reindeer in the Norwegian fells",
        caption: "Herds move freely across borders",
      },
    ],
  },
  {
    id: "willow-ptarmigan",
    name: "Willow ptarmigan",
    latinName: "Lagopus lagopus",
    route: "Open fells · dwarf birch · Kungsleden boardwalks",
    summary:
      "Rotund grouse in summer brown plumage — surprisingly tame on the trail. Often flushes with a rattling wingbeat from dwarf birch; listen for the male's guttural calls on still Arctic evenings.",
    likelihood: "common",
    photos: [
      {
        src: W.ptarmigan,
        alt: "Willow ptarmigan on tundra",
        caption: "Summer plumage on the fells",
      },
      {
        src: W.ptarmigan2,
        alt: "Willow ptarmigan Lagopus lagopus",
        caption: "Dwarf birch zones",
      },
    ],
  },
  {
    id: "siberian-jay",
    name: "Siberian jay",
    latinName: "Perisoreus infaustus",
    route: "STF hut clearings · birch forest · Kebnekaise station",
    summary:
      "Bold, friendly corvid nicknamed \"the lumberjack's friend\" — often appears at hut terraces hoping for crumbs. Rusty plumage and a soft whistle; common at Abiskojaure and Kebnekaise.",
    likelihood: "common",
    photos: [
      {
        src: W.siberianJay,
        alt: "Siberian jay perched on a branch",
        caption: "Hut terraces & birch forest",
      },
      {
        src: W.siberianJay2,
        alt: "Perisoreus infaustus in boreal forest",
        caption: "Bold visitor at STF cabins",
      },
    ],
  },
  {
    id: "golden-eagle-lapland",
    name: "Golden eagle",
    latinName: "Aquila chrysaetos",
    route: "Alesjaure plateau · Tjäktja pass · remote valleys",
    summary:
      "Breeds on remote Lapland cliffs — quartering the open plateaus on Hike 2–3. White-tailed eagles are rarer here than on the coast; goldens rule the inland fells.",
    likelihood: "possible",
    photos: [
      {
        src: W.goldenEagle,
        alt: "Golden eagle soaring over mountains",
        caption: "Plateau thermals · Hike 2–3",
      },
      {
        src: W.goldenEagle2,
        alt: "Golden eagle in flight",
        caption: "Scan skies on clear days",
      },
    ],
  },
  {
    id: "rough-legged-buzzard",
    name: "Rough-legged buzzard",
    latinName: "Buteo lagopus",
    route: "Open fells · Abisko approach · Alesjaure",
    summary:
      "Arctic breeding buzzard with feathered legs — hovers over tundra like a kestrel. More numerous than golden eagles on the Kungsleden; watch for the dark carpal patches in flight.",
    likelihood: "possible",
    photos: [
      {
        src: W.roughLeggedBuzzard,
        alt: "Rough-legged buzzard in flight",
        caption: "Hovering over open fells",
      },
      {
        src: W.roughLeggedBuzzard2,
        alt: "Buteo lagopus perched",
        caption: "Common raptor on the trail",
      },
    ],
  },
  {
    id: "lemming",
    name: "Lemming",
    latinName: "Lemmus lemmus",
    route: "Boggy ground · Alesjaure · Tjäktja slopes",
    summary:
      "Tiny rodents on a famous population cycle — abundant in peak years, scarce in others. Quick scurry across the boardwalk; also prey for rough-legged buzzards and arctic foxes.",
    likelihood: "lucky",
    photos: [
      {
        src: W.lemming,
        alt: "Lemming on tundra vegetation",
        caption: "Peak years on boggy ground",
      },
      {
        src: W.lemming2,
        alt: "Lemmus lemmus close-up",
        caption: "Watch boardwalk edges",
      },
    ],
  },
  {
    id: "arctic-fox",
    name: "Arctic fox",
    latinName: "Vulpes lagopus",
    route: "Remote side valleys · off-trail tundra",
    summary:
      "Summer brown or blue-grey coat — shy and scarce compared to reindeer. Lemming peaks improve your odds; scan rocky moraines away from the main trail for a quick amber flash.",
    likelihood: "lucky",
    photos: [
      {
        src: W.arcticFox,
        alt: "Arctic fox in summer coat",
        caption: "Remote valleys off the main trail",
      },
      {
        src: W.arcticFox2,
        alt: "Arctic fox Vulpes lagopus",
        caption: "Lemming years improve sightings",
      },
    ],
  },
];
