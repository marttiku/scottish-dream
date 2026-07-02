/** Decathlon.ee alternatives for MATKaSPORT gear lines — verified product URLs (Jul 2026). */

export const DECATHLON_GEAR_META = {
  storeName: "Decathlon",
  storeUrl: "https://www.decathlon.ee/",
  freeShippingFromEur: 59,
  priceNote:
    "Prices incl. VAT from decathlon.ee (Jul 2026). Free parcel-machine shipping from €59 in Estonia.",
} as const;

const D = "https://www.decathlon.ee";

export interface GearAlternative {
  id: string;
  name: string;
  unitPriceEur: number;
  url: string;
  note?: string;
  /** Used for basket total when multiple options exist. */
  recommended?: boolean;
}

/** Keyed by MATKaSPORT `GearShopItem.id`. */
export const DECATHLON_ALTERNATIVES: Record<string, GearAlternative[]> = {
  "tent-blow3": [
    {
      id: "dec-tent-arpenaz41",
      name: "Telk Arpenaz 4.1 F&B, 4 inimesele",
      unitPriceEur: 199.95,
      url: `${D}/p/177332-26318-telk-arpenaz-41-fb-4-inimesele-1-magamistuba.html`,
      note: "Fresh & Black · pre-built bedroom · closest to 3P + vestibule space",
      recommended: true,
    },
    {
      id: "dec-tent-2seconds3",
      name: "Matkatelk 2 Seconds Fresh&Black, 3 inimesele",
      unitPriceEur: 114.95,
      url: `${D}/p/346717-66855-matkatelk-2-seconds-freshblack-3-inimesele.html`,
      note: "Pop-up · 3P · lighter budget pick",
    },
    {
      id: "dec-tent-mt500-2p",
      name: "Kuppeltelk MT500, 2 inimesele",
      unitPriceEur: 119.95,
      url: `${D}/p/310893-66799-kuppeltelk-mt500-2-inimesele.html`,
      note: "2P dome · twin vestibules · 2.85 kg",
    },
    {
      id: "dec-tent-mh100-3p",
      name: "3 inimese matkatelk MH100 Fresh & Black",
      unitPriceEur: 69.95,
      url: `${D}/p/313085-53665-3-inimese-matkatelk-mh100-fresh-black.html`,
      note: "Budget 3P · 99% darkness · 4.1 kg",
    },
  ],
  "bag-yukon0": [
    {
      id: "dec-bag-mt500-5",
      name: "Sünteetiline matkamagamiskott MT500 5 °C",
      unitPriceEur: 78.95,
      url: `${D}/p/346446-8502917-matkatelk-mt500-5-c.html`,
      note: "Comfort ~5 °C · synthetic · ~1 kg",
      recommended: true,
    },
  ],
  "pad-ultra3r": [
    {
      id: "dec-pad-mt500-air-l",
      name: "Täispuhutav matkamadrats MT500 Air L, 180 × 52 cm",
      unitPriceEur: 52.95,
      url: `${D}/p/189392-8804140-turistlik-ohkmadrats-mt500-air-l-180-x-52-cm.html`,
      note: "Summer air pad · 510 g · pump sack included",
      recommended: true,
    },
  ],
  "stove-pocketrocket": [
    {
      id: "dec-stove-trek500",
      name: "Kerge matkamiseks mõeldud gaasipliit Piezoga TREK 500 Compact",
      unitPriceEur: 36.95,
      url: `${D}/p/310238-8559534-kerge-ja-kompaktne-gaasiplaat-piezo-ga-mt500.html`,
      note: "Screw-on gas · piezo · pairs with Forclaz screw canisters below",
      recommended: true,
    },
  ],
  "gas-c300": [
    {
      id: "dec-gas-450",
      name: "450 g külgekeeratav gaasipadrun pliitidele",
      unitPriceEur: 10.95,
      url: `${D}/p/310856-28950-450-g-kulgekeeratav-gaasipadrun-pliitidele.html`,
      note: "Forclaz screw-top · 450 g · works to −10 °C",
      recommended: true,
    },
    {
      id: "dec-gas-4x220",
      name: "4 × 220 g butaani gaasiballooni komplekt (bajonett)",
      unitPriceEur: 11.95,
      url: `${D}/p/362560-149865-4-bajonettventiiliga-butaani-gaasiballooni-komplekt-4-x-220-g-matkapliitidele.html`,
      note: "Quechua bayonet kit — only if using Quechua camp stove",
    },
  ],
  "jacket-croz": [
    {
      id: "dec-jacket-mh500-m",
      name: "Meeste veekindel mägimatkajope MH500",
      unitPriceEur: 94.95,
      url: `${D}/p/301681-301681-meeste-mh500-veekindel-matkajope.html`,
      note: "Lightweight waterproof shell · men's",
      recommended: true,
    },
  ],
  "pack-kajka65": [
    {
      id: "dec-pack-mt900-70",
      name: "Meeste matkaseljakott MT900 Symbium, 70+10 l",
      unitPriceEur: 189.95,
      url: `${D}/p/342070-8751964-meeste-matkaseljakott-mt900-70-10-l.html`,
      note: "70 L + 10 L hood · Symbium back · rain cover",
      recommended: true,
    },
  ],
  "pack-transalp50": [
    {
      id: "dec-pack-mt900-50",
      name: "Meeste matkaseljakott MT900 Symbium, 50+10 l",
      unitPriceEur: 159.95,
      url: `${D}/p/342061-8751963-meeste-turistlik-seljakott-mt900-symbium-50-10-l.html`,
      note: "50 L + 10 L · lighter Morvern leg · pick women's fit in store",
      recommended: true,
    },
  ],
};
