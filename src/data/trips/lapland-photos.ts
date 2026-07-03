import type { DayPhoto } from "../photos";
import { pexelsPhoto, unsplashPhoto, wikimediaThumb } from "../photos";

const w = wikimediaThumb;
const u = unsplashPhoto;
const p = pexelsPhoto;

export const LAPLAND_DAY_PHOTOS: Record<string, DayPhoto[]> = {
  "2026-07-07::Day 0": [
    {
      src: w("8/82/Helsinki-L%C3%A4nsisatama_Ms_Silja_Europa_und_ms_Princess_Maria_15.06.2015.JPG/1280px-Helsinki-L%C3%A4nsisatama_Ms_Silja_Europa_und_ms_Princess_Maria_15.06.2015.JPG"),
      alt: "Ferries at Helsinki West Harbour",
      caption: "Tallinn → Helsinki ferry (~2 h)",
    },
    {
      src: w("9/96/Port_of_Helsinki.jpg/1280px-Port_of_Helsinki.jpg"),
      alt: "Helsinki harbour and skyline",
      caption: "Pick up rental car · overnight",
    },
  ],
  "2026-07-07::Stay": [
    {
      src: w("9/96/Port_of_Helsinki.jpg/1280px-Port_of_Helsinki.jpg"),
      alt: "Helsinki harbour area",
      caption: "West Harbour — early start north tomorrow",
    },
    {
      src: w("8/82/Helsinki-L%C3%A4nsisatama_Ms_Silja_Europa_und_ms_Princess_Maria_15.06.2015.JPG/1280px-Helsinki-L%C3%A4nsisatama_Ms_Silja_Europa_und_ms_Princess_Maria_15.06.2015.JPG"),
      alt: "Ferry at Helsinki West Harbour",
      caption: "Car deck booked for the return",
    },
  ],
  "2026-07-08::Transit": [
    {
      src: w("a/a0/Lapporten_over_Tornetr%C3%A4sk%2C_Norrbotten%2C_Sweden%2C_2015_April.jpg/1280px-Lapporten_over_Tornetr%C3%A4sk%2C_Norrbotten%2C_Sweden%2C_2015_April.jpg"),
      alt: "Lapporten U-shaped valley near Abisko",
      caption: "Above the Arctic Circle",
    },
    {
      src: w("9/9c/Kungsleden_1.jpg/1280px-Kungsleden_1.jpg"),
      alt: "Kungsleden hiking trail",
      caption: "Long drive day · trail starts tomorrow",
    },
  ],
  "2026-07-08::Stay": [
    {
      src: w("d/d6/Abisko_National_Park.jpg/1280px-Abisko_National_Park.jpg"),
      alt: "Abisko National Park entrance",
      caption: "STF Abisko Turiststation",
    },
    {
      src: u("1519681393784-d120267933ba"),
      alt: "Arctic landscape under midnight sun",
      caption: "Midnight sun in July",
    },
  ],
  "2026-07-09::Hike 1": [
    {
      src: w("9/9c/Kungsleden_1.jpg/1280px-Kungsleden_1.jpg"),
      alt: "Hikers on the Kungsleden trail",
      caption: "Day 1 — Abisko National Park",
    },
    {
      src: p(1365425),
      alt: "Birch forest and fells in Lapland",
      caption: "Abisko → Abiskojaure (~15 km)",
    },
    {
      src: u("1470071459604-3b5ec3a7fe05"),
      alt: "Open Arctic fell landscape",
      caption: "King of Trails boardwalks",
    },
  ],
  "2026-07-10::Hike 2": [
    {
      src: w("9/9c/Kungsleden_1.jpg/1280px-Kungsleden_1.jpg"),
      alt: "Open plateau on the Kungsleden",
      caption: "Abiskojaure → Alesjaure",
    },
    {
      src: p(1366919),
      alt: "Swedish Lapland fell landscape",
      caption: "Vast Arctic plateau walking",
    },
  ],
  "2026-07-11::Hike 3": [
    {
      src: u("1519681393784-d120267933ba"),
      alt: "High fells under Arctic light",
      caption: "Tjäktjapasset (~1,150 m)",
    },
    {
      src: p(1365425),
      alt: "Alpine tundra in Swedish Lapland",
      caption: "Alesjaure → Sälka",
    },
  ],
  "2026-07-12::Hike 4": [
    {
      src: p(1287145),
      alt: "Mountain massif in Arctic Sweden",
      caption: "Approach to Kebnekaise",
    },
    {
      src: p(1366919),
      alt: "Remote valley in the fells",
      caption: "Sälka → Kebnekaise station",
    },
  ],
  "2026-07-13::Hike 5": [
    {
      src: w("c/cb/192_Herd_of_Reindeers_running_in_Southern_Iceland_Photo_by_Giles_Laurent.jpg/1280px-192_Herd_of_Reindeers_running_in_Southern_Iceland_Photo_by_Giles_Laurent.jpg"),
      alt: "Reindeer herd on the tundra",
      caption: "Sami country · final stage",
    },
    {
      src: w("9/9c/Kungsleden_1.jpg/1280px-Kungsleden_1.jpg"),
      alt: "Kungsleden trail near the finish",
      caption: "Kebnekaise → Nikkaluokta",
    },
    {
      src: p(1365425),
      alt: "Arctic lake and fells",
      caption: "Boat across Ladtjojaure",
    },
  ],
  "2026-07-13::Stay": [
    {
      src: w("a/af/Herd_of_reindeer_at_Hamningberg%2C_2012_June.JPG/1280px-Herd_of_reindeer_at_Hamningberg%2C_2012_June.JPG"),
      alt: "Reindeer near Kiruna",
      caption: "Nikkaluokta → Kiruna bus",
    },
  ],
  "2026-07-14::Transit": [
    {
      src: w("9/96/Port_of_Helsinki.jpg/1280px-Port_of_Helsinki.jpg"),
      alt: "Finnish landscape on the drive south",
      caption: "Kiruna → Helsinki (~10–11 h)",
    },
    {
      src: u("1470071459604-3b5ec3a7fe05"),
      alt: "Lapland fells at golden hour",
      caption: "E8 south through Finnish Lapland",
    },
  ],
  "2026-07-15::Return": [
    {
      src: w("8/82/Helsinki-L%C3%A4nsisatama_Ms_Silja_Europa_und_ms_Princess_Maria_15.06.2015.JPG/1280px-Helsinki-L%C3%A4nsisatama_Ms_Silja_Europa_und_ms_Princess_Maria_15.06.2015.JPG"),
      alt: "Ferry at Helsinki West Harbour",
      caption: "Helsinki → Tallinn ferry home",
    },
    {
      src: w("c/c3/Clouds_from_aircraft.jpg/1280px-Clouds_from_aircraft.jpg"),
      alt: "Gulf of Finland from above",
      caption: "Homeward crossing",
    },
  ],
};
