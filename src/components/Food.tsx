import {
  COOK_KIT,
  FOOD_DAY_PLANS,
  FOOD_PARTY,
  FOOD_TARGETS,
  RESUPPLY_POINTS,
  getDayFoodTotals,
  getFoodItem,
  getFoodPlanSummary,
  getShoppingList,
  type FoodCategory,
} from "../data/food";
import { formatTripDateShort } from "../lib/dates";
import { SectionHeader } from "./Timeline";
import {
  Flame,
  Scale,
  ShoppingBag,
  TrendingUp,
  UtensilsCrossed,
} from "lucide-react";

const CATEGORY_LABELS: Record<FoodCategory, string> = {
  breakfast: "Breakfast",
  lunch: "Lunch",
  dinner: "Dinner",
  snacks: "Snacks",
  drinks: "Drinks",
};

const MACRO_COLORS = {
  carbs: "bg-yellow-500",
  protein: "bg-indigo-500",
  fat: "bg-orange-500",
} as const;

function formatG(g: number): string {
  return g >= 1000 ? `${(g / 1000).toFixed(1)} kg` : `${Math.round(g)} g`;
}

function formatKcal(n: number): string {
  return n.toLocaleString("en-GB");
}

export function Food() {
  const summary = getFoodPlanSummary();
  const shopping = getShoppingList();

  return (
    <section id="food">
      <SectionHeader
        title="Food plan"
        subtitle={`${FOOD_PARTY.hikers} hikers · self-supported · ${summary.dayCount} trail days · ${FOOD_TARGETS.hikingDayKcal} kcal/person/day`}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        <SummaryCard
          icon={Scale}
          label="Shopping weight"
          value={formatG(summary.weightG)}
          hint={`${FOOD_PARTY.hikers} hikers · dry food total`}
        />
        <SummaryCard
          icon={Flame}
          label="Avg calories"
          value={`${formatKcal(summary.avgCaloriesPerHikerPerDay)} / person`}
          hint={`${formatKcal(summary.avgCaloriesPartyPerDay)} / day both · ${formatKcal(summary.calories)} trip`}
        />
        <SummaryCard
          icon={TrendingUp}
          label="Energy density"
          value={`${summary.calPerGram} kcal/g`}
          hint={`Target ≥ ${FOOD_TARGETS.calPerGramTarget}`}
        />
        <SummaryCard
          icon={ShoppingBag}
          label="Max pack food"
          value={formatG(summary.maxPackPerHikerG)}
          hint={`${formatG(summary.maxPackPartyG)} both · split ~50/50`}
        />
        <SummaryCard
          icon={UtensilsCrossed}
          label="Cook kit"
          value={formatG(COOK_KIT.totalWeightG)}
          hint="Shared · 1.3 L pot + 230 g gas"
        />
      </div>

      <MacroBalance
        protein={summary.macroPercent.protein}
        carbs={summary.macroPercent.carbs}
        fat={summary.macroPercent.fat}
        grams={{
          protein: summary.proteinG,
          carbs: summary.carbsG,
          fat: summary.fatG,
        }}
      />

      <div className="mt-8">
        <h3 className="text-sm font-semibold text-gray-300 mb-3">Resupply</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {RESUPPLY_POINTS.map((point) => (
            <div
              key={point.dateIso + point.location}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4"
            >
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <time
                  dateTime={point.dateIso}
                  className="text-xs font-medium text-indigo-400"
                >
                  {formatTripDateShort(point.dateIso)}
                </time>
                <span className="text-sm font-semibold text-gray-100">
                  {point.location}
                </span>
              </div>
              <p className="text-xs text-cyan-400/90 mt-1 font-medium">
                {point.what}
              </p>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                {point.notes}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold text-gray-300 mb-3">
          Shopping list · {FOOD_PARTY.hikers} hikers
        </h3>
        <div className="overflow-x-auto rounded-lg border border-gray-800">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-900 text-left text-xs text-gray-500 uppercase tracking-wider">
                <th className="px-4 py-3 font-medium">Item</th>
                <th className="px-4 py-3 font-medium">Qty</th>
                <th className="px-4 py-3 font-medium text-right">Weight</th>
                <th className="px-4 py-3 font-medium text-right">kcal</th>
                <th className="px-4 py-3 font-medium text-right hidden sm:table-cell">
                  P
                </th>
                <th className="px-4 py-3 font-medium text-right hidden sm:table-cell">
                  C
                </th>
                <th className="px-4 py-3 font-medium text-right hidden sm:table-cell">
                  F
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {shopping.map(({ item, qty, qtyPerHiker, totals }) => (
                <tr key={item.id} className="bg-gray-900/50 hover:bg-gray-900">
                  <td className="px-4 py-3">
                    <p className="text-gray-100">{item.name}</p>
                    <p className="text-xs text-gray-500">
                      {CATEGORY_LABELS[item.category]} · {item.unitLabel}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-gray-300">
                    {qty}×
                    <span className="block text-xs text-gray-500">
                      {qtyPerHiker}× each
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-gray-300 tabular-nums">
                    {formatG(totals.weightG)}
                  </td>
                  <td className="px-4 py-3 text-right text-gray-300 tabular-nums">
                    {formatKcal(totals.calories)}
                  </td>
                  <td className="px-4 py-3 text-right text-gray-500 tabular-nums hidden sm:table-cell">
                    {Math.round(totals.proteinG)}g
                  </td>
                  <td className="px-4 py-3 text-right text-gray-500 tabular-nums hidden sm:table-cell">
                    {Math.round(totals.carbsG)}g
                  </td>
                  <td className="px-4 py-3 text-right text-gray-500 tabular-nums hidden sm:table-cell">
                    {Math.round(totals.fatG)}g
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-900 font-medium">
                <td className="px-4 py-3 text-gray-100">Total</td>
                <td className="px-4 py-3" />
                <td className="px-4 py-3 text-right text-indigo-400 tabular-nums">
                  {formatG(summary.weightG)}
                </td>
                <td className="px-4 py-3 text-right text-indigo-400 tabular-nums">
                  {formatKcal(summary.calories)}
                </td>
                <td className="px-4 py-3 text-right text-gray-400 tabular-nums hidden sm:table-cell">
                  {Math.round(summary.proteinG)}g
                </td>
                <td className="px-4 py-3 text-right text-gray-400 tabular-nums hidden sm:table-cell">
                  {Math.round(summary.carbsG)}g
                </td>
                <td className="px-4 py-3 text-right text-gray-400 tabular-nums hidden sm:table-cell">
                  {Math.round(summary.fatG)}g
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-600 mt-2">
          Quantities are for both hikers. Daily meals below are per person.
          Macros suit endurance hiking — carb-heavy with enough fat for long days.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-semibold text-gray-300 mb-3">
          Daily meals · per hiker
        </h3>
        <div className="space-y-4">
          {FOOD_DAY_PLANS.map((plan) => (
            <DayPlanCard key={plan.dateIso} plan={plan} />
          ))}
        </div>
      </div>

      <div className="mt-6 bg-gray-900 border border-gray-800 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-100">Pack weight notes</h3>
        <ul className="mt-2 space-y-1.5 text-sm text-gray-400">
          <li>
            · Knoydart carry (9–11 Jul):{" "}
            <span className="text-gray-300">
              {formatG(summary.knoydartPackPerHikerG)} per hiker
            </span>{" "}
            ({formatG(summary.knoydartPackPartyG)} both) — split between packs,
            no shop until Glenfinnan
          </li>
          <li>
            · Morvern carry (12–13 Jul):{" "}
            <span className="text-gray-300">
              {formatG(summary.morvernPackPerHikerG)} per hiker
            </span>{" "}
            ({formatG(summary.morvernPackPartyG)} both) — resupply in Strontian
            & Oban
          </li>
          <li>· {COOK_KIT.notes}</li>
          <li>
            · Water is abundant on Knoydart — carry extra on Hike 3; two litres
            each minimum on the Glenfinnan day
          </li>
        </ul>
      </div>
    </section>
  );
}

function SummaryCard({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: typeof Scale;
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-3 sm:px-4">
      <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
        <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        {label}
      </div>
      <p className="text-base sm:text-lg font-semibold text-gray-100">{value}</p>
      {hint && (
        <p className="text-xs text-gray-500 mt-0.5 leading-snug">{hint}</p>
      )}
    </div>
  );
}

function MacroBalance({
  protein,
  carbs,
  fat,
  grams,
}: {
  protein: number;
  carbs: number;
  fat: number;
  grams: { protein: number; carbs: number; fat: number };
}) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
      <h3 className="text-sm font-semibold text-gray-100">Macro balance</h3>
      <p className="text-xs text-gray-500 mt-1">
        Target for multi-day load carrying: ~50% carbs · ~30% fat · ~15–20%
        protein
      </p>
      <div className="mt-4 flex h-3 rounded-full overflow-hidden">
        <div
          className={`${MACRO_COLORS.carbs}`}
          style={{ width: `${carbs}%` }}
          title={`Carbs ${carbs}%`}
        />
        <div
          className={`${MACRO_COLORS.fat}`}
          style={{ width: `${fat}%` }}
          title={`Fat ${fat}%`}
        />
        <div
          className={`${MACRO_COLORS.protein}`}
          style={{ width: `${protein}%` }}
          title={`Protein ${protein}%`}
        />
      </div>
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs">
        <Legend color={MACRO_COLORS.carbs} label="Carbs" pct={carbs} g={grams.carbs} />
        <Legend color={MACRO_COLORS.protein} label="Protein" pct={protein} g={grams.protein} />
        <Legend color={MACRO_COLORS.fat} label="Fat" pct={fat} g={grams.fat} />
      </div>
    </div>
  );
}

function Legend({
  color,
  label,
  pct,
  g,
}: {
  color: string;
  label: string;
  pct: number;
  g: number;
}) {
  return (
    <span className="flex items-center gap-1.5 text-gray-400">
      <span className={`w-2 h-2 rounded-full ${color}`} aria-hidden="true" />
      {label}{" "}
      <span className="text-gray-300">
        {pct}% · {Math.round(g)}g
      </span>
    </span>
  );
}

function DayPlanCard({
  plan,
}: {
  plan: (typeof FOOD_DAY_PLANS)[number];
}) {
  const totals = getDayFoodTotals(plan);
  const onTarget =
    totals.deltaKcal >= -200 && totals.deltaKcal <= 300;

  const byCategory = plan.entries.reduce(
    (acc, entry) => {
      const item = getFoodItem(entry.itemId);
      if (!item) return acc;
      const cat = item.category;
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push({ item, qty: entry.qty });
      return acc;
    },
    {} as Record<FoodCategory, Array<{ item: NonNullable<ReturnType<typeof getFoodItem>>; qty: number }>>,
  );

  return (
    <article className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-amber-600 to-orange-500" aria-hidden="true" />
      <div className="p-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <time
              dateTime={plan.dateIso}
              className="text-xs font-medium text-indigo-400"
            >
              {formatTripDateShort(plan.dateIso)} · {plan.dayLabel}
            </time>
            <h4 className="text-base font-semibold text-gray-100 mt-0.5">
              {plan.title}
            </h4>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-100 tabular-nums">
              {formatKcal(totals.calories)} kcal
            </p>
            <p className="text-xs text-gray-500">
              {formatKcal(totals.perHiker.calories)} per hiker · target{" "}
              {formatKcal(plan.targetKcal)} each
            </p>
            <p className="text-xs text-gray-600">
              {formatG(totals.perHiker.weightG)} dry food per pack
            </p>
            <span
              className={`inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                onTarget
                  ? "bg-green-500/20 text-green-400"
                  : totals.deltaKcal < 0
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-blue-500/20 text-blue-400"
              }`}
            >
              {onTarget
                ? "On target"
                : totals.deltaKcal < 0
                  ? `${Math.abs(totals.deltaKcal)} kcal under`
                  : `${totals.deltaKcal} kcal over`}
            </span>
          </div>
        </div>

        {plan.resupply && (
          <p className="text-xs text-cyan-400/90 mt-2 font-medium">
            Resupply: {plan.resupply}
          </p>
        )}
        {plan.notes && (
          <p className="text-sm text-gray-500 mt-2">{plan.notes}</p>
        )}

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(CATEGORY_LABELS) as FoodCategory[]).map((cat) => {
            const items = byCategory[cat];
            if (!items?.length) return null;
            return (
              <div key={cat}>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                  {CATEGORY_LABELS[cat]}
                </p>
                <ul className="space-y-1">
                  {items.map(({ item, qty }) => (
                    <li
                      key={item.id}
                      className="text-sm text-gray-400 flex justify-between gap-2"
                    >
                      <span className="text-gray-300">
                        {qty > 1 ? `${qty}× ` : ""}
                        {item.name}
                      </span>
                      <span className="text-gray-500 tabular-nums shrink-0">
                        {item.unitCalories * qty}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
