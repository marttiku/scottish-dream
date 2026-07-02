import { PACKING } from "../data/trip";
import { SectionHeader } from "./Timeline";
import {
  Bug,
  Compass,
  Shield,
  Shirt,
  Tent,
  UtensilsCrossed,
} from "lucide-react";

const ICONS: Record<string, typeof Tent> = {
  tent: Tent,
  shirt: Shirt,
  compass: Compass,
  utensils: UtensilsCrossed,
  bug: Bug,
  shield: Shield,
};

export function PackingList() {
  return (
    <section id="packing">
      <SectionHeader
        title="Packing list"
        subtitle="Self-supported · 5 hiking days · July conditions · shop links in Gear shop"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PACKING.map((cat) => {
          const Icon = ICONS[cat.icon] ?? Shield;
          return (
            <div
              key={cat.name}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4 text-indigo-400" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-gray-100">{cat.name}</h3>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-gray-400 flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60 mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
