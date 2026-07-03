import type { DayPhoto } from "../photos";
import { pexelsPhoto, wikimediaThumb } from "../photos";

const w = wikimediaThumb;
const p = pexelsPhoto;

export const MONTBLANC_DAY_PHOTOS: Record<string, DayPhoto[]> = {
  "2026-07-07::Day 0": [
    {
      src: w("5/58/A%C3%A9roport_de_Gen%C3%A8ve.jpg/1280px-A%C3%A9roport_de_Gen%C3%A8ve.jpg"),
      alt: "Geneva Airport terminal",
      caption: "Tallinn → Geneva · pick up rental car",
    },
    {
      src: w("0/09/Les_Houches.jpg/1280px-Les_Houches.jpg"),
      alt: "Les Houches village beneath Mont Blanc",
      caption: "Drive to Les Houches (~1 h)",
    },
  ],
  "2026-07-07::Stay": [
    {
      src: w("0/09/Les_Houches.jpg/1280px-Les_Houches.jpg"),
      alt: "Les Houches at dusk",
      caption: "TMB starts tomorrow from Bellevue",
    },
    {
      src: w("a/a7/Glacier_du_Mont_Mallet_%28Glacier_du_G%C3%A9ant%29_%26_Mont_Blanc%2C_2010_July.jpg/1280px-Glacier_du_Mont_Mallet_%28Glacier_du_G%C3%A9ant%29_%26_Mont_Blanc%2C_2010_July.jpg"),
      alt: "Mont Blanc massif at sunset",
      caption: "First glimpse of the roof of the Alps",
    },
  ],
  "2026-07-08::Hike 1": [
    {
      src: w("0/02/Col_du_Bonhomme.jpg/1280px-Col_du_Bonhomme.jpg"),
      alt: "Alpine meadow on the Tour du Mont Blanc",
      caption: "Stage 1 — Les Houches → Les Contamines",
    },
    {
      src: p(1365425),
      alt: "Mountain trail through alpine pastures",
      caption: "Col de Voza · Col du Tricot",
    },
  ],
  "2026-07-09::Hike 2": [
    {
      src: w("0/02/Col_du_Bonhomme.jpg/1280px-Col_du_Bonhomme.jpg"),
      alt: "Col du Bonhomme pass on the TMB",
      caption: "Col du Bonhomme (2,329 m)",
    },
    {
      src: w("3/30/Les_Chapieux.jpg/1280px-Les_Chapieux.jpg"),
      alt: "Les Chapieux hamlet in the Beaufortain",
      caption: "Remote stop before Italy",
    },
  ],
  "2026-07-10::Hike 3": [
    {
      src: w("4/4f/Grand_col_Ferret.jpg/1280px-Grand_col_Ferret.jpg"),
      alt: "High trail approaching the Italian border",
      caption: "Les Chapieux → Rifugio Elisabetta",
    },
    {
      src: w("f/fb/Mont_Blanc_de_Courmayeur_from_Punta_Helbronner%2C_2010_July.JPG/1280px-Mont_Blanc_de_Courmayeur_from_Punta_Helbronner%2C_2010_July.JPG"),
      alt: "Mont Blanc massif from the Italian side",
      caption: "Lac Combal · first night in Italy",
    },
  ],
  "2026-07-11::Hike 4": [
    {
      src: w("6/6d/Grand_Col_Ferret_%282537_meter%29._01.JPG/1280px-Grand_Col_Ferret_%282537_meter%29._01.JPG"),
      alt: "Grand Col Ferret pass at 2,537 m",
      caption: "Grand Col Ferret — border crossing",
    },
    {
      src: w("3/33/Rifugio_Walter_Bonatti_Refuge.jpg/1280px-Rifugio_Walter_Bonatti_Refuge.jpg"),
      alt: "Rifugio Walter Bonatti on a rocky spur",
      caption: "Rifugio Bonatti · Val Ferret",
    },
  ],
  "2026-07-12::Hike 5": [
    {
      src: w("c/c4/Champex.jpg/1280px-Champex.jpg"),
      alt: "Champex-Lac village beside the lake",
      caption: "Descent into Switzerland",
    },
    {
      src: p(1366919),
      alt: "Alpine lake surrounded by peaks",
      caption: "Stage 5 — Bonatti → Champex-Lac",
    },
  ],
  "2026-07-13::Hike 6": [
    {
      src: w("c/ce/Col_de_la_Forclaz.jpg/1280px-Col_de_la_Forclaz.jpg"),
      alt: "Col de la Forclaz above the Trient valley",
      caption: "Champex → Col de la Forclaz → Trient",
    },
    {
      src: w("0/08/Argenti%C3%A8re.jpg/1280px-Argenti%C3%A8re.jpg"),
      alt: "Argentière village in the Chamonix valley",
      caption: "Final push via Col de Balme",
    },
  ],
  "2026-07-13::Stay": [
    {
      src: w("1/1f/Chamonix_valley_from_la_Fl%C3%A9g%C3%A8re%2C2010_07.JPG/1280px-Chamonix_valley_from_la_Fl%C3%A9g%C3%A8re%2C2010_07.JPG"),
      alt: "Chamonix valley from La Flégère",
      caption: "TMB complete — Chamonix tonight",
    },
    {
      src: w("e/ee/Mont_Blanc_Panorama_beschriftet.jpg/1280px-Mont_Blanc_Panorama_beschriftet.jpg"),
      alt: "Panorama of the Mont Blanc massif",
      caption: "Capital of alpinism",
    },
  ],
  "2026-07-14::Hike 7": [
    {
      src: w("3/3b/Chamonix_-_Lac_Blanc_6.jpg/1280px-Chamonix_-_Lac_Blanc_6.jpg"),
      alt: "Lac Blanc mirror lake reflecting Mont Blanc",
      caption: "Lac Blanc — iconic mirror lake",
    },
    {
      src: w("e/ec/Lac_Blanc_in_Chamonix.jpg/1280px-Lac_Blanc_in_Chamonix.jpg"),
      alt: "Turquoise Lac Blanc beneath Aiguilles Rouges",
      caption: "Index / Flégère cable car approach",
    },
  ],
  "2026-07-14::Stay": [
    {
      src: w("1/1f/Chamonix_valley_from_la_Fl%C3%A9g%C3%A8re%2C2010_07.JPG/1280px-Chamonix_valley_from_la_Fl%C3%A9g%C3%A8re%2C2010_07.JPG"),
      alt: "Chamonix valley evening light",
      caption: "Last night in the Alps",
    },
  ],
  "2026-07-15::Return": [
    {
      src: w("5/58/A%C3%A9roport_de_Gen%C3%A8ve.jpg/1280px-A%C3%A9roport_de_Gen%C3%A8ve.jpg"),
      alt: "Geneva Airport before departure",
      caption: "Chamonix → Geneva · flight home",
    },
    {
      src: w("c/c3/Clouds_from_aircraft.jpg/1280px-Clouds_from_aircraft.jpg"),
      alt: "View from an aircraft window",
      caption: "Geneva → Tallinn",
    },
  ],
};
