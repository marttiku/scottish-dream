import { useTrip } from "../context/TripContext";
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
  const { trip } = useTrip();

  return (
    <section id="packing">
      <SectionHeader
        title="Packing list"
        subtitle="Shared kit for 2 hikers — adjust to your setup"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trip.packing.map((cat) => {
          const Icon = ICONS[cat.icon] ?? Shield;
          return (
            <div
              key={cat.name}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4"
            >
              <div className="flex items-center gap-2 text-gray-400 text-sm font-medium mb-3">
                <Icon className="w-4 h-4" aria-hidden="true" />
                {cat.name}
              </div>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-gray-600 mt-0.5">·</span>
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
