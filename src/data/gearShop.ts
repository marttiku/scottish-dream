/** Gear shopping list — products from MATKaSPORT (matkasport.ee) for 2 hikers. */

export const GEAR_PARTY = { hikers: 2 } as const;

export const GEAR_SHOP_META = {
  storeName: "MATKaSPORT",
  storeUrl: "https://matkasport.ee/",
  freeShippingFromEur: 89,
  priceNote: "Prices incl. VAT from matkasport.ee (Jul 2026). Free parcel-machine shipping from €89 in Estonia.",
} as const;

export type GearCategory =
  | "shelter"
  | "cookware"
  | "clothing"
  | "footwear"
  | "packs"
  | "electronics"
  | "midges"
  | "safety";

export interface GearShopItem {
  id: string;
  name: string;
  category: GearCategory;
  qty: number;
  unitPriceEur: number;
  url: string;
  note?: string;
  /** One item shared between both hikers (tent, stove, filter). */
  shared?: boolean;
  /** Nice-to-have, not counted in core total. */
  optional?: boolean;
}

export const GEAR_CATEGORY_LABELS: Record<GearCategory, string> = {
  shelter: "Shelter & sleep",
  cookware: "Cookware & water",
  clothing: "Clothing",
  footwear: "Footwear",
  packs: "Packs & dry bags",
  electronics: "Lighting & electronics",
  midges: "Midges & hygiene",
  safety: "Safety & trekking poles",
};

/** Curated for Scottish Dream — 2 hikers, 5 trail days, July wild camping. */
export const GEAR_SHOP: GearShopItem[] = [
  // Shelter & sleep
  {
    id: "tent-blow3",
    name: "Ferrino BLOW 3 kuppeltelk",
    category: "shelter",
    qty: 1,
    unitPriceEur: 419,
    url: "https://matkasport.ee/2-kohalised-telgid/29079-105689-blow-3-kuppeltelk.html",
    note: "3-person dome — room for two + packs in vestibules; wind-tested for Knoydart",
    shared: true,
  },
  {
    id: "bag-yukon0",
    name: "Ferrino YUKON 0 magamiskott",
    category: "shelter",
    qty: 2,
    unitPriceEur: 99.95,
    url: "https://matkasport.ee/3-hooaja-magamiskotid/29160-105940-yukon-0-magamiskott.html",
    note: "3-season synthetic · comfort ~0 °C · 1,550 g each",
  },
  {
    id: "pad-ultra3r",
    name: "Exped ULTRA 3R M õhkmadrats",
    category: "shelter",
    qty: 2,
    unitPriceEur: 219,
    url: "https://matkasport.ee/ohkmadratsid/29161-105941-ultra-3r-m-ohkmadrats.html",
    note: "Ultralight insulated pad — one per hiker",
  },

  // Cookware & water (matches Food section cook kit)
  {
    id: "stove-pocketrocket",
    name: "MSR POCKETROCKET 2 MINI matkapliidi komplekt",
    category: "cookware",
    qty: 1,
    unitPriceEur: 99.95,
    url: "https://matkasport.ee/matkapliidid-gaasile/28434-pocketrocket-2-mini-matkapliidi-komplekt.html",
    note: "Shared stove — boils for two; pairs with 1.2 L pot below",
    shared: true,
  },
  {
    id: "pot-tribal12",
    name: "AceCamp TRIBAL pott 1.2 L",
    category: "cookware",
    qty: 1,
    unitPriceEur: 42.95,
    url: "https://matkasport.ee/keetlid/12571-tribal-pott-12l.html",
    note: "Shared pot — matches food-plan 1.3 L target",
    shared: true,
  },
  {
    id: "gas-c300",
    name: "Coleman C300 XTREME gaasipurk",
    category: "cookware",
    qty: 2,
    unitPriceEur: 9.95,
    url: "https://matkasport.ee/gaasiballoonid-ja-purgid/3101-c300-xtreme-gaasipurk.html",
    note: "230 g net each — ~5–6 double boils per canister",
    shared: true,
  },
  {
    id: "filter-trailbase",
    name: "MSR TRAIL BASE 4L veefilter",
    category: "cookware",
    qty: 1,
    unitPriceEur: 179,
    url: "https://matkasport.ee/veepuhastus/19451-72252-trail-base-4l-veefilter.html",
    note: "Gravity filter at camp + squeeze bottle on trail",
    shared: true,
  },

  // Clothing
  {
    id: "jacket-kinetic",
    name: "Rab KINETIC 2.0 naiste veekindel jope",
    category: "clothing",
    qty: 1,
    unitPriceEur: 249,
    url: "https://matkasport.ee/veekindlad-joped/27478-99448-kinetic-20-naiste-veekindel-jope.html",
    note: "Breathable waterproof shell — exposed Morvern ridges",
  },
  {
    id: "jacket-croz",
    name: "Vaude CROZ IV 3L meeste jope",
    category: "clothing",
    qty: 1,
    unitPriceEur: 349,
    url: "https://matkasport.ee/veekindlad-joped/27723-100371-croz-iv-3l-meeste-jope.html",
    note: "3-layer hardshell — wind and rain on Knoydart cols",
  },
  {
    id: "fleece-hepton",
    name: "Rab HEPTON PULLOVER HOODY naiste fliis",
    category: "clothing",
    qty: 1,
    unitPriceEur: 89,
    url: "https://matkasport.ee/fliisid/29101-105727-hepton-pullover-hoody-naiste-fliis.html",
    note: "Warm midlayer for cool July evenings",
  },
  {
    id: "socks-lorpen",
    name: "Lorpen PRO TRAIL RUN CREW jooksusokid",
    category: "clothing",
    qty: 4,
    unitPriceEur: 20.95,
    url: "https://matkasport.ee/spordisokid/29166-105953-pro-trail-run-crew-jooksusokid.html",
    note: "2 spare pairs per hiker for multi-day wet feet",
  },

  // Footwear
  {
    id: "boots-engage-m",
    name: "Garmont 9.81 ENGAGE meeste kiir-matkajalatsid",
    category: "footwear",
    qty: 1,
    unitPriceEur: 99,
    url: "https://matkasport.ee/kerged-matkajalatsid/27561-99729-981-engage-meeste-kiir-matkajalatsid.html",
    note: "Light fast-hiking shoes — sale price on site",
  },
  {
    id: "boots-engage-w",
    name: "Garmont 9.81 ENGAGE naiste kiir-matkajalatsid",
    category: "footwear",
    qty: 1,
    unitPriceEur: 99,
    url: "https://matkasport.ee/kerged-matkajalatsid/25303-92458-981-engage-naiste-kiir-matkajalatsid.html",
    note: "Matched pair for second hiker",
  },

  // Packs
  {
    id: "pack-kajka65",
    name: "Fjällräven KAJKA 65 M/L seljakott",
    category: "packs",
    qty: 1,
    unitPriceEur: 419,
    url: "https://matkasport.ee/matkaseljakotid/25788-93866-kajka-65-m-l-seljakott.html",
    note: "65 L — main pack for Knoydart food carry (~4 days)",
  },
  {
    id: "pack-transalp50",
    name: "Ferrino TRANSALP 50 naiste seljakott",
    category: "packs",
    qty: 1,
    unitPriceEur: 209,
    url: "https://matkasport.ee/matkaseljakotid/17695-70094-transalp-50-naiste-seljakott.html",
    note: "50 L — second hiker; lighter Morvern leg",
  },
  {
    id: "dry-packdivider-13",
    name: "Aquapac PACKDIVIDER 13L veekindel kott",
    category: "packs",
    qty: 2,
    unitPriceEur: 19.95,
    url: "https://matkasport.ee/veekindlad-kotid/18693-69696-packdivider-13l-veekindel-kott.html",
    note: "Sleeping bag / clothing dry liner",
  },
  {
    id: "dry-packdivider-2",
    name: "Aquapac PACKDIVIDER 2L veekindel kott",
    category: "packs",
    qty: 2,
    unitPriceEur: 12.95,
    url: "https://matkasport.ee/veekindlad-kotid/18692-69695-packdivider-2l-veekindel-kott.html",
    note: "Electronics & first-aid",
  },
  {
    id: "dry-aquastop",
    name: "Ferrino AQUASTOP L veekindel kott",
    category: "packs",
    qty: 1,
    unitPriceEur: 64.95,
    url: "https://matkasport.ee/veekindlad-kotid/15897-51389-aquastop-l-veekindel-kott.html",
    note: "Shared food bag inside pack — Loch Shiel ferry splash",
    shared: true,
  },

  // Lighting
  {
    id: "headlamp-hf6r",
    name: "Led Lenser HF6R CORE laetav pealamp",
    category: "electronics",
    qty: 2,
    unitPriceEur: 59.95,
    url: "https://matkasport.ee/pealambid/28600-103044-hf6r-core-laetav-pealamp.html",
    note: "Rechargeable — late wild camps & bothy stops",
  },
  {
    id: "dry-phone",
    name: "Aquapac TRAILPROOF veekindel kott telefonile",
    category: "electronics",
    qty: 2,
    unitPriceEur: 24.95,
    url: "https://matkasport.ee/veekindlad-kotid/10839-91945-trailproof-veekindel-kott-telefonile.html",
    note: "Maps / weather on trail in rain",
  },

  // Midges & hygiene
  {
    id: "midge-net",
    name: "Care Plus CLASSIC putukatõrjevõrk mütsile",
    category: "midges",
    qty: 2,
    unitPriceEur: 15.95,
    url: "https://matkasport.ee/saasetorje/27900-105703-classic-putukatorjevork-mutsile.html",
    note: "Essential — peak midge season",
  },
  {
    id: "midge-spray",
    name: "Care Plus ANTI-INSECT DEET sääsetõrjevahend",
    category: "midges",
    qty: 2,
    unitPriceEur: 17.95,
    url: "https://matkasport.ee/saasetorje/25005-91298-anti-insect-deet-saasetorjevahend.html",
    note: "Backup to Smidge — one bottle per hiker",
  },

  // Safety
  {
    id: "poles-scout",
    name: "Masters SCOUT II matkakepid",
    category: "safety",
    qty: 2,
    unitPriceEur: 42.95,
    url: "https://matkasport.ee/matkakepid/28676-103445-scout-ii-matkakepid.html",
    note: "1 pair per hiker — boggy Morvern & knee saver on descents",
  },
  {
    id: "firstaid-lightwalker",
    name: "Care Plus LIGHT WALKER esmaabikomplekt",
    category: "safety",
    qty: 1,
    unitPriceEur: 12.95,
    url: "https://matkasport.ee/esmaabivahendid/27899-light-walker-esmaabikomplekt.html",
    note: "Shared blister kit + basics",
    shared: true,
  },

  // Optional extras
  {
    id: "shower-deluxe",
    name: "Ferrino PÄIKESEDUŠŠ Deluxe",
    category: "midges",
    qty: 1,
    unitPriceEur: 59.95,
    url: "https://matkasport.ee/hugieen/14375-paikeseduss-deluxe.html",
    note: "Solar camp shower — luxury after 3-day Knoydart",
    optional: true,
  },
  {
    id: "desiccant",
    name: "Aquapac DESICCANT SACHETS niiskusekoguja",
    category: "packs",
    qty: 1,
    unitPriceEur: 4.95,
    url: "https://matkasport.ee/elektroonika-tarvikud/10865-104975-desiccant-sachets-niiskusekoguja.html",
    note: "Keep dry bags condensation-free",
    optional: true,
  },
];

export interface GearLineItem {
  item: GearShopItem;
  lineTotalEur: number;
}

export interface GearShopSummary {
  coreTotalEur: number;
  optionalTotalEur: number;
  grandTotalEur: number;
  itemCount: number;
  lineCount: number;
  coreLineCount: number;
  hikers: number;
}

export function getGearShopList(): GearLineItem[] {
  return GEAR_SHOP.map((item) => ({
    item,
    lineTotalEur: Math.round(item.qty * item.unitPriceEur * 100) / 100,
  }));
}

export function getGearShopSummary(): GearShopSummary {
  const lines = getGearShopList();
  let coreTotalEur = 0;
  let optionalTotalEur = 0;
  let itemCount = 0;
  let coreLineCount = 0;

  for (const { item, lineTotalEur } of lines) {
    itemCount += item.qty;
    if (item.optional) {
      optionalTotalEur += lineTotalEur;
    } else {
      coreTotalEur += lineTotalEur;
      coreLineCount += 1;
    }
  }

  return {
    coreTotalEur: Math.round(coreTotalEur * 100) / 100,
    optionalTotalEur: Math.round(optionalTotalEur * 100) / 100,
    grandTotalEur: Math.round((coreTotalEur + optionalTotalEur) * 100) / 100,
    itemCount,
    lineCount: lines.length,
    coreLineCount,
    hikers: GEAR_PARTY.hikers,
  };
}

export function getGearByCategory(): { category: GearCategory; items: GearLineItem[] }[] {
  const lines = getGearShopList();
  const order: GearCategory[] = [
    "shelter",
    "cookware",
    "clothing",
    "footwear",
    "packs",
    "electronics",
    "midges",
    "safety",
  ];

  return order
    .map((category) => ({
      category,
      items: lines.filter(({ item }) => item.category === category),
    }))
    .filter((group) => group.items.length > 0);
}
