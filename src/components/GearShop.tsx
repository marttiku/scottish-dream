import {
  DECATHLON_GEAR_META,
  GEAR_CATEGORY_LABELS,
  GEAR_PARTY,
  GEAR_SHOP_META,
  getDecathlonAlternatives,
  getDecathlonGearSummary,
  getGearByCategory,
  getGearShopSummary,
  type GearAlternative,
  type GearCategory,
  type GearLineItem,
} from "../data/gearShop";
import { SectionHeader } from "./Timeline";
import type { ReactNode } from "react";
import {
  ArrowDownRight,
  ExternalLink,
  ShoppingBag,
  Store,
  Users,
} from "lucide-react";

function formatEur(amount: number): string {
  return new Intl.NumberFormat("et-EE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function GearShop() {
  const summary = getGearShopSummary();
  const decathlon = getDecathlonGearSummary();
  const groups = getGearByCategory();

  return (
    <section id="gear-shop">
      <SectionHeader
        title="Gear shopping list"
        subtitle={`${GEAR_PARTY.hikers} hikers · MATKaSPORT + Decathlon.ee alternatives with prices`}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        <SummaryCard
          icon={ShoppingBag}
          label="MATKaSPORT core"
          value={formatEur(summary.coreTotalEur)}
          hint={`${summary.coreLineCount} lines · excl. optional`}
        />
        <SummaryCard
          icon={Store}
          label="Decathlon core"
          value={formatEur(decathlon.coreTotalEur)}
          hint={`${decathlon.coveredLineCount}/${decathlon.coreLineCount} lines matched`}
          href={DECATHLON_GEAR_META.storeUrl}
        />
        <SummaryCard
          icon={ArrowDownRight}
          label="On matched lines"
          value={formatEur(decathlon.savingsOnCoveredLinesEur)}
          hint={
            decathlon.savingsOnCoveredLinesEur >= 0
              ? "MATKaSPORT − Decathlon"
              : "Decathlon costs more on matched lines"
          }
          valueClassName={
            decathlon.savingsOnCoveredLinesEur >= 0
              ? "text-green-400"
              : "text-orange-400"
          }
        />
        <SummaryCard
          icon={ShoppingBag}
          label="With extras"
          value={formatEur(summary.grandTotalEur)}
          hint={`+${formatEur(summary.optionalTotalEur)} optional`}
        />
        <SummaryCard
          icon={Users}
          label="Party"
          value={`${summary.hikers} hikers`}
          hint="Shared tent, stove & filter"
        />
        <SummaryCard
          icon={ExternalLink}
          label="Stores"
          value="2 shops"
          hint={`MATKaSPORT €${GEAR_SHOP_META.freeShippingFromEur} · Decathlon €${DECATHLON_GEAR_META.freeShippingFromEur}`}
          href={GEAR_SHOP_META.storeUrl}
        />
      </div>

      <div className="space-y-8">
        {groups.map(({ category, items }) => (
          <CategoryBlock key={category} category={category} items={items} />
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <BasketCard
          title="MATKaSPORT basket"
          total={formatEur(summary.coreTotalEur)}
          optional={
            summary.optionalTotalEur > 0
              ? `(+${formatEur(summary.optionalTotalEur)} optional)`
              : undefined
          }
          note={GEAR_SHOP_META.priceNote}
          footer={
            <>
              Curated to match the{" "}
              <a href="#packing" className="text-indigo-400 hover:text-indigo-300">
                packing list
              </a>{" "}
              and{" "}
              <a href="#food" className="text-indigo-400 hover:text-indigo-300">
                food plan
              </a>
              . Sizes and colours are your choice on MATKaSPORT.
            </>
          }
        />
        <BasketCard
          title="Decathlon basket"
          total={formatEur(decathlon.coreTotalEur)}
          optional={
            decathlon.uncoveredCoreLineCount > 0
              ? `${decathlon.uncoveredCoreLineCount} lines still MATKaSPORT-only`
              : "All core lines have an alternative"
          }
          note={DECATHLON_GEAR_META.priceNote}
          footer={
            <>
              Uses the recommended Decathlon pick per line where listed.{" "}
              {decathlon.savingsOnCoveredLinesEur > 0 ? (
                <span className="text-green-400">
                  Saves {formatEur(decathlon.savingsOnCoveredLinesEur)} on the{" "}
                  {decathlon.coveredLineCount} matched lines vs MATKaSPORT.
                </span>
              ) : (
                <span className="text-gray-500">
                  Compare line-by-line below — some slots have multiple Decathlon
                  options.
                </span>
              )}
            </>
          }
        />
      </div>
    </section>
  );
}

function CategoryBlock({
  category,
  items,
}: {
  category: GearCategory;
  items: GearLineItem[];
}) {
  const categoryCore = items
    .filter(({ item }) => !item.optional)
    .reduce((sum, { lineTotalEur }) => sum + lineTotalEur, 0);
  const categoryOptional = items
    .filter(({ item }) => item.optional)
    .reduce((sum, { lineTotalEur }) => sum + lineTotalEur, 0);

  const decathlonCore = items
    .filter(({ item }) => !item.optional)
    .reduce((sum, { item }) => {
      const alts = getDecathlonAlternatives(item.id);
      if (alts.length === 0) return sum;
      const pick = alts.find((alt) => alt.recommended) ?? alts[0];
      return sum + item.qty * pick.unitPriceEur;
    }, 0);

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
        <h3 className="text-sm font-semibold text-gray-300">
          {GEAR_CATEGORY_LABELS[category]}
        </h3>
        <span className="text-xs text-gray-500 tabular-nums">
          MATKaSPORT {formatEur(categoryCore)}
          {decathlonCore > 0 && (
            <span className="text-blue-400/80">
              {" "}
              · Decathlon {formatEur(decathlonCore)}
            </span>
          )}
          {categoryOptional > 0 && (
            <span className="text-gray-600"> · +{formatEur(categoryOptional)} opt.</span>
          )}
        </span>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-800">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-900 text-left text-xs text-gray-500 uppercase tracking-wider">
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Qty</th>
              <th className="px-4 py-3 font-medium text-right hidden sm:table-cell">
                Unit
              </th>
              <th className="px-4 py-3 font-medium text-right">Line</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {items.map((line) => (
              <GearRow key={line.item.id} line={line} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function GearRow({ line }: { line: GearLineItem }) {
  const { item, lineTotalEur } = line;
  const alternatives = getDecathlonAlternatives(item.id);

  return (
    <>
      <tr
        className={`bg-gray-900/50 hover:bg-gray-900 ${item.optional ? "opacity-80" : ""}`}
      >
        <td className="px-4 py-3">
          <StoreLink
            href={item.url}
            name={item.name}
            store="MATKaSPORT"
            storeClassName="text-gray-500"
          />
          {item.note && (
            <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-prose">
              {item.note}
            </p>
          )}
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {item.shared && <Badge tone="indigo">Shared</Badge>}
            {item.optional && <Badge tone="gray">Optional</Badge>}
          </div>
        </td>
        <td className="px-4 py-3 text-gray-300 tabular-nums whitespace-nowrap">
          {item.qty}×
        </td>
        <td className="px-4 py-3 text-right text-gray-500 tabular-nums hidden sm:table-cell whitespace-nowrap">
          {formatEur(item.unitPriceEur)}
        </td>
        <td className="px-4 py-3 text-right text-gray-300 tabular-nums whitespace-nowrap">
          {formatEur(lineTotalEur)}
        </td>
      </tr>
      {alternatives.map((alt) => (
        <DecathlonAltRow
          key={alt.id}
          alt={alt}
          qty={item.qty}
          dimmed={item.optional}
        />
      ))}
    </>
  );
}

function DecathlonAltRow({
  alt,
  qty,
  dimmed,
}: {
  alt: GearAlternative;
  qty: number;
  dimmed?: boolean;
}) {
  const lineTotal = Math.round(qty * alt.unitPriceEur * 100) / 100;

  return (
    <tr
      className={`bg-blue-950/20 hover:bg-blue-950/30 border-l-2 border-l-blue-500/40 ${dimmed ? "opacity-70" : ""}`}
    >
      <td className="px-4 py-2.5 pl-5">
        <StoreLink
          href={alt.url}
          name={alt.name}
          store="Decathlon"
          storeClassName="text-blue-400/70"
        />
        {alt.note && (
          <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-prose">
            {alt.note}
          </p>
        )}
        {alt.recommended && (
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            <Badge tone="blue">Recommended</Badge>
          </div>
        )}
      </td>
      <td className="px-4 py-2.5 text-gray-400 tabular-nums whitespace-nowrap">
        {qty}×
      </td>
      <td className="px-4 py-2.5 text-right text-gray-500 tabular-nums hidden sm:table-cell whitespace-nowrap">
        {formatEur(alt.unitPriceEur)}
      </td>
      <td className="px-4 py-2.5 text-right text-blue-300/90 tabular-nums whitespace-nowrap">
        {formatEur(lineTotal)}
      </td>
    </tr>
  );
}

function StoreLink({
  href,
  name,
  store,
  storeClassName,
}: {
  href: string;
  name: string;
  store: string;
  storeClassName: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-100 hover:text-indigo-400 inline-flex items-start gap-1.5 group"
    >
      <span>
        <span className={`text-[10px] font-semibold uppercase tracking-wide ${storeClassName}`}>
          {store}
        </span>
        <span className="block">{name}</span>
      </span>
      <ExternalLink
        className="w-3.5 h-3.5 shrink-0 mt-0.5 text-gray-600 group-hover:text-indigo-400"
        aria-hidden="true"
      />
    </a>
  );
}

function Badge({
  tone,
  children,
}: {
  tone: "indigo" | "gray" | "blue";
  children: ReactNode;
}) {
  const cls =
    tone === "indigo"
      ? "bg-indigo-500/20 text-indigo-400"
      : tone === "blue"
        ? "bg-blue-500/20 text-blue-400"
        : "bg-gray-500/20 text-gray-400";
  return (
    <span
      className={`text-[10px] font-medium uppercase tracking-wide px-1.5 py-0.5 rounded ${cls}`}
    >
      {children}
    </span>
  );
}

function SummaryCard({
  icon: Icon,
  label,
  value,
  hint,
  href,
  valueClassName = "text-gray-100",
}: {
  icon: typeof ShoppingBag;
  label: string;
  value: string;
  hint: string;
  href?: string;
  valueClassName?: string;
}) {
  const inner = (
    <>
      <Icon className="w-4 h-4 text-indigo-400" aria-hidden="true" />
      <p className="text-xs text-gray-500 mt-2">{label}</p>
      <p className={`text-sm font-semibold mt-0.5 ${valueClassName}`}>{value}</p>
      <p className="text-xs text-gray-600 mt-1">{hint}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-indigo-500/40 transition-colors"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
      {inner}
    </div>
  );
}

function BasketCard({
  title,
  total,
  optional,
  note,
  footer,
}: {
  title: string;
  total: string;
  optional?: string;
  note: string;
  footer: ReactNode;
}) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-sm font-semibold text-gray-100">{title}</h3>
        <p className="text-lg font-semibold text-indigo-400 tabular-nums">
          {total}
          {optional && (
            <span className="text-sm font-normal text-gray-500 ml-2">{optional}</span>
          )}
        </p>
      </div>
      <p className="text-xs text-gray-500 mt-2">{note}</p>
      <p className="text-sm text-gray-400 mt-3 leading-relaxed">{footer}</p>
    </div>
  );
}
