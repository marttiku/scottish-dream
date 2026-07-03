import { wikimediaThumb } from "./photos";

export interface TripCard {
  id: string;
  image: string;
  imageAlt: string;
  highlights: string[];
}

/** Hero imagery and teaser copy for the trip picker tiles */
export const TRIP_CARDS: Record<string, TripCard> = {
  scotland: {
    id: "scotland",
    image: wikimediaThumb(
      "1/17/Glenfinnan_Viaduct.jpg/1280px-Glenfinnan_Viaduct.jpg",
    ),
    imageAlt: "Steam train crossing Glenfinnan Viaduct in the Scottish Highlands",
    highlights: [
      "Knoydart traverse — wild camps & bothy nights",
      "Glenfinnan finish · Morvern leg by ferry",
      "West Highland Line · seafood celebration in Oban",
    ],
  },
  tatras: {
    id: "tatras",
    image: wikimediaThumb(
      "c/cb/Rysy_Cross.jpg/1280px-Rysy_Cross.jpg",
    ),
    imageAlt: "Memorial cross on the Rysy summit in the High Tatras",
    highlights: [
      "Rysy — Poland's highest peak (2,499 m)",
      "Four-day hut circuit through Slovak Tatras",
      "Kriváń & Predné Solisko bonus summits",
    ],
  },
  lapland: {
    id: "lapland",
    image: wikimediaThumb(
      "a/a0/Lapporten_over_Tornetr%C3%A4sk%2C_Norrbotten%2C_Sweden%2C_2015_April.jpg/1280px-Lapporten_over_Tornetr%C3%A4sk%2C_Norrbotten%2C_Sweden%2C_2015_April.jpg",
    ),
    imageAlt: "Lapporten valley near Abisko in Swedish Lapland",
    highlights: [
      "Kungsleden — King of Trails above Arctic Circle",
      "Five STF hut nights · midnight sun",
      "Ferry to Helsinki · drive through Lapland",
    ],
  },
  montblanc: {
    id: "montblanc",
    image: wikimediaThumb(
      "a/a7/Glacier_du_Mont_Mallet_%28Glacier_du_G%C3%A9ant%29_%26_Mont_Blanc%2C_2010_July.jpg/1280px-Glacier_du_Mont_Mallet_%28Glacier_du_G%C3%A9ant%29_%26_Mont_Blanc%2C_2010_July.jpg",
    ),
    imageAlt: "Mont Blanc massif above the Glacier du Géant",
    highlights: [
      "Tour du Mont Blanc — France, Italy & Switzerland",
      "Grand Col Ferret · Rifugio Bonatti",
      "Lac Blanc finale above Chamonix",
    ],
  },
};

export function getTripCard(id: string): TripCard | undefined {
  return TRIP_CARDS[id];
}
