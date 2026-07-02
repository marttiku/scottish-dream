import {
  GEAR_CATEGORY_LABELS,
  GEAR_PARTY,
  GEAR_SHOP_META,
  getGearByCategory,
  getGearShopSummary,
  type GearCategory,
  type GearLineItem,
} from "../data/gearShop";
import { SectionHeader } from "./Timeline";
import type { ReactNode } from "react";
import { ExternalLink, ShoppingBag, Store, Users } from "lucide-react";

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
  const groups = getGearByCategory();

  return (
    <section id="gear-shop">
      <SectionHeader
        title="Gear shopping list"
        subtitle={`${GEAR_PARTY.hikers} hikers · MATKaSPORT · tents, sleep, cook kit, packs & July essentials`}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <SummaryCard
          icon={ShoppingBag}
          label="Core kit"
          value={formatEur(summary.coreTotalEur)}
          hint={`${summary.coreLineCount} product lines · excl. optional`}
        />
        <SummaryCard
          icon={Store}
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
          label="Shop"
          value={GEAR_SHOP_META.storeName}
          hint={`Free shipping from €${GEAR_SHOP_META.freeShippingFromEur}`}
          href={GEAR_SHOP_META.storeUrl}
        />
      </div>

      <div className="space-y-8">
        {groups.map(({ category, items }) => (
          <CategoryBlock
            key={category}
            category={category}
            items={items}
          />
        ))}
      </div>

      <div className="mt-6 bg-gray-900 border border-gray-800 rounded-lg p-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-sm font-semibold text-gray-100">Basket total</h3>
          <p className="text-lg font-semibold text-indigo-400 tabular-nums">
            {formatEur(summary.coreTotalEur)}
            {summary.optionalTotalEur > 0 && (
              <span className="text-sm font-normal text-gray-500 ml-2">
                (+{formatEur(summary.optionalTotalEur)} optional)
              </span>
            )}
          </p>
        </div>
        <p className="text-xs text-gray-500 mt-2">{GEAR_SHOP_META.priceNote}</p>
        <p className="text-sm text-gray-400 mt-3 leading-relaxed">
          Curated to match the{" "}
          <a href="#packing" className="text-indigo-400 hover:text-indigo-300">
            packing list
          </a>{" "}
          and{" "}
          <a href="#food" className="text-indigo-400 hover:text-indigo-300">
            food plan
          </a>
          . Sizes and colours are your choice on MATKaSPORT — links open the product page.
        </p>
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

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
        <h3 className="text-sm font-semibold text-gray-300">
          {GEAR_CATEGORY_LABELS[category]}
        </h3>
        <span className="text-xs text-gray-500 tabular-nums">
          {formatEur(categoryCore)}
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
            {items.map(({ item, lineTotalEur }) => (
              <tr
                key={item.id}
                className={`bg-gray-900/50 hover:bg-gray-900 ${item.optional ? "opacity-80" : ""}`}
              >
                <td className="px-4 py-3">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-100 hover:text-indigo-400 inline-flex items-start gap-1.5 group"
                  >
                    <span>{item.name}</span>
                    <ExternalLink
                      className="w-3.5 h-3.5 shrink-0 mt-0.5 text-gray-600 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </a>
                  {item.note && (
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed max-w-prose">
                      {item.note}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {item.shared && (
                      <Badge tone="indigo">Shared</Badge>
                    )}
                    {item.optional && (
                      <Badge tone="gray">Optional</Badge>
                    )}
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Badge({
  tone,
  children,
}: {
  tone: "indigo" | "gray";
  children: ReactNode;
}) {
  const cls =
    tone === "indigo"
      ? "bg-indigo-500/20 text-indigo-400"
      : "bg-gray-500/20 text-gray-400";
  return (
    <span className={`text-[10px] font-medium uppercase tracking-wide px-1.5 py-0.5 rounded ${cls}`}>
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
}: {
  icon: typeof ShoppingBag;
  label: string;
  value: string;
  hint: string;
  href?: string;
}) {
  const inner = (
    <>
      <Icon className="w-4 h-4 text-indigo-400" aria-hidden="true" />
      <p className="text-xs text-gray-500 mt-2">{label}</p>
      <p className="text-sm font-semibold text-gray-100 mt-0.5">{value}</p>
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
