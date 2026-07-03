import type { DayPhoto } from "../photos";
import { pexelsPhoto, unsplashPhoto, wikimediaThumb } from "../photos";

const w = wikimediaThumb;
const u = unsplashPhoto;
const p = pexelsPhoto;

/** Key: `${dateIso}::${dayLabel}` */
export const TATRAS_DAY_PHOTOS: Record<string, DayPhoto[]> = {
  "2026-07-07::Day 0": [
    {
      src: w("4/4a/Wawel_Castle_Krakow.jpg/1280px-Wawel_Castle_Krakow.jpg"),
      alt: "Wawel Castle above the Vistula in Kraków",
      caption: "Kraków — pick up the rental car",
    },
    {
      src: p(1365425),
      alt: "Mountain landscape at dusk",
      caption: "Evening drive toward the Tatras",
    },
    {
      src: u("1506905925346-21bda4d32df4"),
      alt: "Alpine lake in the mountains",
      caption: "Štrbské Pleso tonight",
    },
  ],
  "2026-07-07::Stay": [
    {
      src: w("5/50/%C5%A0trbsk%C3%A9_pleso.jpg/1280px-%C5%A0trbsk%C3%A9_pleso.jpg"),
      alt: "Štrbské Pleso lake in the High Tatras",
      caption: "Base hotel on the lake",
    },
    {
      src: p(1366919),
      alt: "High mountain peaks at sunset",
      caption: "Summits above Štrbské",
    },
  ],
  "2026-07-08::Hike 1": [
    {
      src: w("c/cb/Rysy_Cross.jpg/1280px-Rysy_Cross.jpg"),
      alt: "Memorial cross on the Rysy summit",
      caption: "Rysy — Poland's highest point (2,499 m)",
    },
    {
      src: w("e/e2/Chata_pod_Rysmi_Rysy_sedlo_V%C3%A1ha.jpg/1280px-Chata_pod_Rysmi_Rysy_sedlo_V%C3%A1ha.jpg"),
      alt: "Chata pod Rysmi hut below the Rysy saddle",
      caption: "Chata pod Rysmi at 2,250 m",
    },
    {
      src: w("f/fd/Rysy%2C_przelecz_Waga.jpg/1280px-Rysy%2C_przelecz_Waga.jpg"),
      alt: "Rocky saddle on the Rysy approach",
      caption: "Approach via Popradské pleso",
    },
    {
      src: w("b/bc/Vysok%C3%A9_Tatry%2C_Mengusovsk%C3%A1_dolina%2C_cesta_na_Rysy%2C_z%C3%A1%C5%99%C3%AD_2011_%2841%29.JPG/1280px-Vysok%C3%A9_Tatry%2C_Mengusovsk%C3%A1_dolina%2C_cesta_na_Rysy%2C_z%C3%A1%C5%99%C3%AD_2011_%2841%29.JPG"),
      alt: "Trail to Rysy in Mengusovská dolina",
      caption: "Mengusovská dolina path",
    },
  ],
  "2026-07-08::Stay": [
    {
      src: w("5/50/%C5%A0trbsk%C3%A9_pleso.jpg/1280px-%C5%A0trbsk%C3%A9_pleso.jpg"),
      alt: "Štrbské Pleso after a long summit day",
      caption: "Recovery before the hut circuit",
    },
  ],
  "2026-07-09::Hike 2": [
    {
      src: w("5/59/Vysok%C3%A9_Tatry%2C_Zelen%C3%A9_pleso_2013.jpg/1280px-Vysok%C3%A9_Tatry%2C_Zelen%C3%A9_pleso_2013.jpg"),
      alt: "Zelené pleso lake and peaks",
      caption: "Chata pri Zelenom plese — hut night 1",
    },
    {
      src: p(1365425),
      alt: "Alpine valley in the High Tatras",
      caption: "Bielá Voda trailhead ascent",
    },
  ],
  "2026-07-10::Hike 3": [
    {
      src: p(1366919),
      alt: "Rocky Tatra ridge with clouds",
      caption: "Terýho chata · Priečne sedlo traverse",
    },
    {
      src: u("1464822759023-fed622ff2c3b"),
      alt: "Mountain lake in alpine terrain",
      caption: "Veľká Studená dolina — 26 lakes",
    },
    {
      src: p(1287145),
      alt: "Steep rocky mountain slope",
      caption: "Chain sections at Priečne sedlo",
    },
  ],
  "2026-07-11::Hike 4": [
    {
      src: w("6/63/Popradsk%C3%A9_pleso_-_panorama.jpg/1280px-Popradsk%C3%A9_pleso_-_panorama.jpg"),
      alt: "Popradské pleso lake panorama",
      caption: "End of the hardest circuit day",
    },
    {
      src: p(1365425),
      alt: "High mountain valley",
      caption: "Descent via Prielom & Velická dolina",
    },
  ],
  "2026-07-12::Hike 5": [
    {
      src: w("5/50/%C5%A0trbsk%C3%A9_pleso.jpg/1280px-%C5%A0trbsk%C3%A9_pleso.jpg"),
      alt: "Štrbské Pleso — circuit complete",
      caption: "Easy Magistrala finish",
    },
    {
      src: w("6/63/Popradsk%C3%A9_pleso_-_panorama.jpg/1280px-Popradsk%C3%A9_pleso_-_panorama.jpg"),
      alt: "Lakeside trail at Popradské pleso",
      caption: "Last hour on the loop",
    },
  ],
  "2026-07-12::Stay": [
    {
      src: w("5/50/%C5%A0trbsk%C3%A9_pleso.jpg/1280px-%C5%A0trbsk%C3%A9_pleso.jpg"),
      alt: "Štrbské Pleso resort evening",
      caption: "Resupply before Kriváň",
    },
  ],
  "2026-07-13::Hike 6": [
    {
      src: w("3/38/Krivan.jpg/1280px-Krivan.jpg"),
      alt: "Kriváň peak viewed from Jamské pleso",
      caption: "Kriváň (2,494 m) — Slovak icon",
    },
    {
      src: p(1366919),
      alt: "Panoramic view from a mountain summit",
      caption: "360° views over the Tatras",
    },
  ],
  "2026-07-13::Stay": [
    {
      src: w("3/38/Krivan.jpg/1280px-Krivan.jpg"),
      alt: "Kriváň summit area",
      caption: "After Kriváň — earned rest",
    },
  ],
  "2026-07-14::Hike 7": [
    {
      src: p(1287145),
      alt: "Alpine ridge above the tree line",
      caption: "Predné Solisko · cable car approach",
    },
    {
      src: u("1506905925346-21bda4d32df4"),
      alt: "Mountain panorama from a summit",
      caption: "Moderate finale day",
    },
  ],
  "2026-07-14::Stay": [
    {
      src: w("5/50/%C5%A0trbsk%C3%A9_pleso.jpg/1280px-%C5%A0trbsk%C3%A9_pleso.jpg"),
      alt: "Štrbské Pleso last night",
      caption: "Pack for the drive to Kraków",
    },
  ],
  "2026-07-15::Return": [
    {
      src: w("4/4a/Wawel_Castle_Krakow.jpg/1280px-Wawel_Castle_Krakow.jpg"),
      alt: "Kraków before the flight home",
      caption: "Morning drive · KRK airport",
    },
    {
      src: w("c/c3/Clouds_from_aircraft.jpg/1280px-Clouds_from_aircraft.jpg"),
      alt: "View from an aircraft window",
      caption: "Kraków → Tallinn",
    },
  ],
};
