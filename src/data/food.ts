export type FoodCategory =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "snacks"
  | "drinks";

export interface FoodItemDef {
  id: string;
  name: string;
  category: FoodCategory;
  /** Weight per single unit (g) */
  unitWeightG: number;
  unitCalories: number;
  unitProteinG: number;
  unitCarbsG: number;
  unitFatG: number;
  unitLabel: string;
}

export interface FoodDayEntry {
  itemId: string;
  qty: number;
}

export interface FoodDayPlan {
  dateIso: string;
  dayLabel: string;
  title: string;
  targetKcal: number;
  entries: FoodDayEntry[];
  resupply?: string;
  notes?: string;
}

export interface ResupplyPoint {
  dateIso: string;
  location: string;
  what: string;
  notes: string;
}

export const FOOD_TARGETS = {
  /** kcal/day on strenuous multi-day pack carries */
  hikingDayKcal: "3,200–4,000",
  macroSplit: { carbs: 52, protein: 17, fat: 31 },
  /** Dry food only — excludes stove, fuel, water */
  maxPackFoodWeightG: 2420,
  calPerGramTarget: 4.5,
} as const;

export const FOOD_ITEMS: FoodItemDef[] = [
  {
    id: "porridge-oats",
    name: "Scott's porridge oats",
    category: "breakfast",
    unitWeightG: 80,
    unitCalories: 300,
    unitProteinG: 10,
    unitCarbsG: 54,
    unitFatG: 6,
    unitLabel: "80 g bag",
  },
  {
    id: "milk-powder",
    name: "Whole milk powder",
    category: "breakfast",
    unitWeightG: 30,
    unitCalories: 150,
    unitProteinG: 8,
    unitCarbsG: 12,
    unitFatG: 8,
    unitLabel: "30 g scoop",
  },
  {
    id: "dried-fruit",
    name: "Dried mango / apple",
    category: "breakfast",
    unitWeightG: 40,
    unitCalories: 120,
    unitProteinG: 1,
    unitCarbsG: 28,
    unitFatG: 0,
    unitLabel: "40 g",
  },
  {
    id: "instant-coffee",
    name: "Instant coffee sachet",
    category: "breakfast",
    unitWeightG: 2,
    unitCalories: 5,
    unitProteinG: 0,
    unitCarbsG: 1,
    unitFatG: 0,
    unitLabel: "sachet",
  },
  {
    id: "tortilla",
    name: "Soft flour tortilla",
    category: "lunch",
    unitWeightG: 40,
    unitCalories: 140,
    unitProteinG: 3,
    unitCarbsG: 24,
    unitFatG: 3,
    unitLabel: "wrap",
  },
  {
    id: "cheddar",
    name: "Mature cheddar",
    category: "lunch",
    unitWeightG: 50,
    unitCalories: 200,
    unitProteinG: 12,
    unitCarbsG: 0,
    unitFatG: 17,
    unitLabel: "50 g portion",
  },
  {
    id: "salami",
    name: "Dry salami / chorizo stick",
    category: "lunch",
    unitWeightG: 50,
    unitCalories: 250,
    unitProteinG: 15,
    unitCarbsG: 1,
    unitFatG: 21,
    unitLabel: "50 g portion",
  },
  {
    id: "fd-meal",
    name: "Freeze-dried dinner (Firepot / Summit)",
    category: "dinner",
    unitWeightG: 130,
    unitCalories: 700,
    unitProteinG: 35,
    unitCarbsG: 85,
    unitFatG: 25,
    unitLabel: "bag",
  },
  {
    id: "couscous",
    name: "Couscous + olive oil dinner",
    category: "dinner",
    unitWeightG: 120,
    unitCalories: 550,
    unitProteinG: 12,
    unitCarbsG: 72,
    unitFatG: 22,
    unitLabel: "100 g couscous + 15 ml oil",
  },
  {
    id: "tuna-pouch",
    name: "Tuna pouch (spring water)",
    category: "dinner",
    unitWeightG: 100,
    unitCalories: 120,
    unitProteinG: 26,
    unitCarbsG: 0,
    unitFatG: 1,
    unitLabel: "pouch",
  },
  {
    id: "trail-mix",
    name: "Trail mix (nuts, raisins, chocolate)",
    category: "snacks",
    unitWeightG: 60,
    unitCalories: 350,
    unitProteinG: 10,
    unitCarbsG: 25,
    unitFatG: 24,
    unitLabel: "60 g bag",
  },
  {
    id: "energy-bar",
    name: "Trek / Nature Valley bar",
    category: "snacks",
    unitWeightG: 40,
    unitCalories: 200,
    unitProteinG: 8,
    unitCarbsG: 28,
    unitFatG: 7,
    unitLabel: "bar",
  },
  {
    id: "haribo",
    name: "Haribo / jelly sweets",
    category: "snacks",
    unitWeightG: 50,
    unitCalories: 170,
    unitProteinG: 2,
    unitCarbsG: 42,
    unitFatG: 0,
    unitLabel: "50 g",
  },
  {
    id: "peanut-butter",
    name: "Peanut butter portion",
    category: "snacks",
    unitWeightG: 30,
    unitCalories: 180,
    unitProteinG: 7,
    unitCarbsG: 6,
    unitFatG: 15,
    unitLabel: "30 g sachet",
  },
  {
    id: "electrolyte",
    name: "Electrolyte tablet",
    category: "drinks",
    unitWeightG: 2,
    unitCalories: 5,
    unitProteinG: 0,
    unitCarbsG: 1,
    unitFatG: 0,
    unitLabel: "tablet",
  },
];

const itemMap = new Map(FOOD_ITEMS.map((i) => [i.id, i]));

export function getFoodItem(id: string): FoodItemDef | undefined {
  return itemMap.get(id);
}

/** What to eat each self-supported trail day */
export const FOOD_DAY_PLANS: FoodDayPlan[] = [
  {
    dateIso: "2026-07-09",
    dayLabel: "Hike 1",
    title: "Inverie → Sourlies",
    targetKcal: 3400,
    notes: "Pub meal possible in Inverie evening before — still carry full Day 1 kit.",
    entries: [
      { itemId: "porridge-oats", qty: 1 },
      { itemId: "milk-powder", qty: 1 },
      { itemId: "dried-fruit", qty: 1 },
      { itemId: "instant-coffee", qty: 1 },
      { itemId: "tortilla", qty: 2 },
      { itemId: "cheddar", qty: 1 },
      { itemId: "salami", qty: 1 },
      { itemId: "peanut-butter", qty: 1 },
      { itemId: "trail-mix", qty: 2 },
      { itemId: "energy-bar", qty: 2 },
      { itemId: "haribo", qty: 1 },
      { itemId: "fd-meal", qty: 1 },
      { itemId: "electrolyte", qty: 2 },
    ],
  },
  {
    dateIso: "2026-07-10",
    dayLabel: "Hike 2",
    title: "Sourlies → A' Chuil",
    targetKcal: 3700,
    notes: "Longest ascent day — eat before Mam Unndal, snack on the pass.",
    entries: [
      { itemId: "porridge-oats", qty: 1 },
      { itemId: "milk-powder", qty: 1 },
      { itemId: "dried-fruit", qty: 1 },
      { itemId: "instant-coffee", qty: 1 },
      { itemId: "tortilla", qty: 2 },
      { itemId: "cheddar", qty: 1 },
      { itemId: "salami", qty: 1 },
      { itemId: "peanut-butter", qty: 1 },
      { itemId: "trail-mix", qty: 2 },
      { itemId: "energy-bar", qty: 3 },
      { itemId: "haribo", qty: 1 },
      { itemId: "fd-meal", qty: 1 },
      { itemId: "electrolyte", qty: 2 },
    ],
  },
  {
    dateIso: "2026-07-11",
    dayLabel: "Hike 3",
    title: "A' Chuil → Glenfinnan",
    targetKcal: 4000,
    notes: "30 km day — graze constantly; early porridge, late dinner in village or hostel.",
    entries: [
      { itemId: "porridge-oats", qty: 1 },
      { itemId: "milk-powder", qty: 1 },
      { itemId: "dried-fruit", qty: 1 },
      { itemId: "instant-coffee", qty: 1 },
      { itemId: "tortilla", qty: 2 },
      { itemId: "cheddar", qty: 1 },
      { itemId: "salami", qty: 2 },
      { itemId: "trail-mix", qty: 2 },
      { itemId: "energy-bar", qty: 3 },
      { itemId: "haribo", qty: 2 },
      { itemId: "peanut-butter", qty: 1 },
      { itemId: "fd-meal", qty: 1 },
      { itemId: "electrolyte", qty: 3 },
    ],
  },
  {
    dateIso: "2026-07-12",
    dayLabel: "Hike 4",
    title: "Polloch → Strontian",
    targetKcal: 3400,
    resupply: "Buy fresh wrap fillings in Strontian shop after hike",
    entries: [
      { itemId: "porridge-oats", qty: 1 },
      { itemId: "milk-powder", qty: 1 },
      { itemId: "dried-fruit", qty: 1 },
      { itemId: "instant-coffee", qty: 1 },
      { itemId: "tortilla", qty: 2 },
      { itemId: "cheddar", qty: 1 },
      { itemId: "salami", qty: 1 },
      { itemId: "peanut-butter", qty: 1 },
      { itemId: "trail-mix", qty: 2 },
      { itemId: "energy-bar", qty: 2 },
      { itemId: "haribo", qty: 1 },
      { itemId: "fd-meal", qty: 1 },
      { itemId: "electrolyte", qty: 2 },
    ],
  },
  {
    dateIso: "2026-07-13",
    dayLabel: "Transit",
    title: "Strontian → Oban",
    targetKcal: 2800,
    resupply: "Strontian shop AM · Oban seafood dinner PM",
    notes: "Light pack day — bus & ferries. Save weight for celebratory Oban meal.",
    entries: [
      { itemId: "porridge-oats", qty: 1 },
      { itemId: "milk-powder", qty: 1 },
      { itemId: "instant-coffee", qty: 1 },
      { itemId: "tortilla", qty: 2 },
      { itemId: "cheddar", qty: 1 },
      { itemId: "salami", qty: 1 },
      { itemId: "trail-mix", qty: 1 },
      { itemId: "energy-bar", qty: 2 },
      { itemId: "haribo", qty: 1 },
      { itemId: "peanut-butter", qty: 1 },
      { itemId: "couscous", qty: 1 },
      { itemId: "electrolyte", qty: 2 },
    ],
  },
];

export const RESUPPLY_POINTS: ResupplyPoint[] = [
  {
    dateIso: "2026-07-08",
    location: "Inverie · Old Forge",
    what: "Pub meal + very limited supplies",
    notes:
      "Last indoor meal for 3 days. No proper shop — carry all Knoydart food from Mallaig or Edinburgh.",
  },
  {
    dateIso: "2026-07-11",
    location: "Glenfinnan",
    what: "SYHA café · small village shop",
    notes:
      "Restock tortillas, cheese, bars for Morvern leg. Freeze-dried dinners if running low.",
  },
  {
    dateIso: "2026-07-12",
    location: "Strontian",
    what: "Village shop & café",
    notes: "Fresh bread, fruit, chilled goods. Top up before transit day.",
  },
  {
    dateIso: "2026-07-13",
    location: "Oban",
    what: "Supermarkets · harbour restaurants",
    notes: "Full resupply — reward dinner. No trail food needed after tonight.",
  },
];

export interface FoodTotals {
  weightG: number;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
}

export interface FoodDayTotals extends FoodTotals {
  targetKcal: number;
  deltaKcal: number;
}

export function sumFoodEntries(entries: FoodDayEntry[]): FoodTotals {
  return entries.reduce(
    (acc, { itemId, qty }) => {
      const item = getFoodItem(itemId);
      if (!item) return acc;
      return {
        weightG: acc.weightG + item.unitWeightG * qty,
        calories: acc.calories + item.unitCalories * qty,
        proteinG: acc.proteinG + item.unitProteinG * qty,
        carbsG: acc.carbsG + item.unitCarbsG * qty,
        fatG: acc.fatG + item.unitFatG * qty,
      };
    },
    { weightG: 0, calories: 0, proteinG: 0, carbsG: 0, fatG: 0 },
  );
}

export function getDayFoodTotals(plan: FoodDayPlan): FoodDayTotals {
  const totals = sumFoodEntries(plan.entries);
  return {
    ...totals,
    targetKcal: plan.targetKcal,
    deltaKcal: totals.calories - plan.targetKcal,
  };
}

/** Aggregate shopping list — max qty needed across all days */
export function getShoppingList(): Array<{
  item: FoodItemDef;
  qty: number;
  totals: FoodTotals;
}> {
  const qtyByItem = new Map<string, number>();
  for (const plan of FOOD_DAY_PLANS) {
    for (const { itemId, qty } of plan.entries) {
      qtyByItem.set(itemId, (qtyByItem.get(itemId) ?? 0) + qty);
    }
  }
  return [...qtyByItem.entries()]
    .map(([id, qty]) => {
      const item = getFoodItem(id)!;
      const totals = sumFoodEntries([{ itemId: id, qty }]);
      return { item, qty, totals };
    })
    .sort((a, b) => a.item.category.localeCompare(b.item.category));
}

export function getFoodPlanSummary() {
  const shopping = getShoppingList();
  const totals = shopping.reduce(
    (acc, { totals: t }) => ({
      weightG: acc.weightG + t.weightG,
      calories: acc.calories + t.calories,
      proteinG: acc.proteinG + t.proteinG,
      carbsG: acc.carbsG + t.carbsG,
      fatG: acc.fatG + t.fatG,
    }),
    { weightG: 0, calories: 0, proteinG: 0, carbsG: 0, fatG: 0 },
  );

  const dayCount = FOOD_DAY_PLANS.length;
  const dailyCalories = FOOD_DAY_PLANS.map(
    (p) => sumFoodEntries(p.entries).calories,
  );
  const avgCaloriesPerDay = Math.round(
    dailyCalories.reduce((a, b) => a + b, 0) / dayCount,
  );
  const macroKcal =
    totals.proteinG * 4 + totals.carbsG * 4 + totals.fatG * 9;
  const macroPercent = {
    protein: Math.round(((totals.proteinG * 4) / macroKcal) * 100),
    carbs: Math.round(((totals.carbsG * 4) / macroKcal) * 100),
    fat: Math.round(((totals.fatG * 9) / macroKcal) * 100),
  };

  /** Max dry food in pack at once: Knoydart block (days 9–11) */
  const knoydartPlans = FOOD_DAY_PLANS.filter((p) =>
    ["2026-07-09", "2026-07-10", "2026-07-11"].includes(p.dateIso),
  );
  const knoydartWeightG = knoydartPlans.reduce(
    (sum, plan) => sum + sumFoodEntries(plan.entries).weightG,
    0,
  );

  const morvernPlans = FOOD_DAY_PLANS.filter((p) =>
    ["2026-07-12", "2026-07-13"].includes(p.dateIso),
  );
  const morvernWeightG = morvernPlans.reduce(
    (sum, plan) => sum + sumFoodEntries(plan.entries).weightG,
    0,
  );

  return {
    ...totals,
    dayCount,
    avgCaloriesPerDay,
    calPerGram: Math.round((totals.calories / totals.weightG) * 10) / 10,
    macroPercent,
    knoydartPackWeightG: knoydartWeightG,
    morvernPackWeightG: morvernWeightG,
    maxPackWeightG: knoydartWeightG,
  };
}

export const COOK_KIT = {
  items: [
    { name: "Titanium pot (~900 ml)", weightG: 85 },
    { name: "Gas canister 100 g (net)", weightG: 100 },
    { name: "Mini stove (e.g. MSR PocketRocket)", weightG: 75 },
    { name: "Spork + lighter + small sponge", weightG: 25 },
  ],
  totalWeightG: 285,
  notes: "One hot meal/day. Canister lasts ~5–6 boils on this plan.",
};
