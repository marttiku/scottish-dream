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
      src: w("1/1f/Chamonix_valley_from_la_Fl%C3%A9g%C3%A8re%2C2010_07.JPG/1280px-Chamonix_valley_from_la_Fl%C3%A9g%C3%A8re%2C2010_07.JPG"),
      alt: "Chamonix valley beneath Mont Blanc",
      caption: "Drive to Chamonix (~1 h)",
    },
  ],
  "2026-07-07::Stay": [
    {
      src: w("1/1f/Chamonix_valley_from_la_Fl%C3%A9g%C3%A8re%2C2010_07.JPG/1280px-Chamonix_valley_from_la_Fl%C3%A9g%C3%A8re%2C2010_07.JPG"),
      alt: "Chamonix at dusk",
      caption: "TMB starts tomorrow from Chamonix",
    },
    {
      src: w("a/a7/Glacier_du_Mont_Mallet_%28Glacier_du_G%C3%A9ant%29_%26_Mont_Blanc%2C_2010_July.jpg/1280px-Glacier_du_Mont_Mallet_%28Glacier_du_G%C3%A9ant%29_%26_Mont_Blanc%2C_2010_July.jpg"),
      alt: "Mont Blanc massif at sunset",
      caption: "Clockwise circuit — eight days",
    },
  ],
  "2026-07-08::Hike 1": [
    {
      src: w("0/08/Argenti%C3%A8re.jpg/1280px-Argenti%C3%A8re.jpg"),
      alt: "Argentière village in the Chamonix valley",
      caption: "Chamonix → Le Tour → Col de Balme",
    },
    {
      src: w("c/ce/Col_de_la_Forclaz.jpg/1280px-Col_de_la_Forclaz.jpg"),
      alt: "Alpine col on the Swiss TMB",
      caption: "Stage 1 finish — Trient",
    },
  ],
  "2026-07-09::Hike 2": [
    {
      src: w("c/ce/Col_de_la_Forclaz.jpg/1280px-Col_de_la_Forclaz.jpg"),
      alt: "Col de la Forclaz above the Trient valley",
      caption: "Trient → Col de la Forclaz",
    },
    {
      src: w("c/c4/Champex.jpg/1280px-Champex.jpg"),
      alt: "Champex-Lac village beside the lake",
      caption: "Bovine variant into Champex",
    },
  ],
  "2026-07-10::Hike 3": [
    {
      src: w("c/c4/Champex.jpg/1280px-Champex.jpg"),
      alt: "Champex-Lac in the Swiss Alps",
      caption: "Champex → La Fouly",
    },
    {
      src: p(1366919),
      alt: "Alpine pasture in the Val Ferret",
      caption: "Swiss Val Ferret via Praz-de-Fort",
    },
  ],
  "2026-07-11::Hike 4": [
    {
      src: w("6/6d/Grand_Col_Ferret_%282537_meter%29._01.JPG/1280px-Grand_Col_Ferret_%282537_meter%29._01.JPG"),
      alt: "Grand Col Ferret pass at 2,537 m",
      caption: "Grand Col Ferret — highlight day",
    },
    {
      src: w("3/33/Rifugio_Walter_Bonatti_Refuge.jpg/1280px-Rifugio_Walter_Bonatti_Refuge.jpg"),
      alt: "Rifugio Walter Bonatti on a rocky spur",
      caption: "Rifugio Bonatti · Val Ferret",
    },
  ],
  "2026-07-12::Hike 5": [
    {
      src: w("f/fb/Mont_Blanc_de_Courmayeur_from_Punta_Helbronner%2C_2010_July.JPG/1280px-Mont_Blanc_de_Courmayeur_from_Punta_Helbronner%2C_2010_July.JPG"),
      alt: "Mont Blanc massif from the Italian side",
      caption: "Courmayeur lunch · Lac Combal",
    },
    {
      src: w("4/4f/Grand_col_Ferret.jpg/1280px-Grand_col_Ferret.jpg"),
      alt: "High trail above Lac Combal",
      caption: "Bonatti → Rifugio Elisabetta",
    },
  ],
  "2026-07-13::Hike 6": [
    {
      src: w("3/30/Les_Chapieux.jpg/1280px-Les_Chapieux.jpg"),
      alt: "Les Chapieux hamlet in the Beaufortain",
      caption: "Col de la Seigne → France",
    },
    {
      src: w("0/02/Col_du_Bonhomme.jpg/1280px-Col_du_Bonhomme.jpg"),
      alt: "Alpine meadow on the Tour du Mont Blanc",
      caption: "Elisabetta → Les Chapieux",
    },
  ],
  "2026-07-14::Hike 7": [
    {
      src: w("0/02/Col_du_Bonhomme.jpg/1280px-Col_du_Bonhomme.jpg"),
      alt: "Col du Bonhomme pass on the TMB",
      caption: "Col du Bonhomme (2,329 m)",
    },
    {
      src: p(1365425),
      alt: "Mountain trail through alpine pastures",
      caption: "Les Chapieux → Les Contamines",
    },
  ],
  "2026-07-15::Hike 8": [
    {
      src: w("0/09/Les_Houches.jpg/1280px-Les_Houches.jpg"),
      alt: "Les Houches beneath Mont Blanc",
      caption: "Bellevue lift · Balcon Sud",
    },
    {
      src: w("e/ee/Mont_Blanc_Panorama_beschriftet.jpg/1280px-Mont_Blanc_Panorama_beschriftet.jpg"),
      alt: "Panorama of the Mont Blanc massif",
      caption: "Loop closed — Chamonix",
    },
  ],
  "2026-07-15::Stay": [
    {
      src: w("1/1f/Chamonix_valley_from_la_Fl%C3%A9g%C3%A8re%2C2010_07.JPG/1280px-Chamonix_valley_from_la_Fl%C3%A9g%C3%A8re%2C2010_07.JPG"),
      alt: "Chamonix valley evening light",
      caption: "TMB complete — flight tomorrow",
    },
  ],
  "2026-07-16::Return": [
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
