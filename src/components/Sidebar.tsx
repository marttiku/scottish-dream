import {
  Bus,
  Bird,
  Car,
  Compass,
  Footprints,
  Mountain,
  Info,
  CloudSun,
  BedDouble,
  UtensilsCrossed,
  Package,
  Plane,
  Ship,
  Train,
  ShoppingCart,
} from "lucide-react";
import { useTrip } from "../context/TripContext";
import { formatTripDateRangeWithWeekdays } from "../lib/dates";
import { TRIP_LABELS } from "../data/trips";

const NAV_ITEMS: {
  id: string;
  label: string;
  icon: typeof Mountain;
  show?: keyof Pick<
    import("../data/types").TripMeta,
    "showFood" | "showGearShop" | "showWildlife"
  >;
}[] = [
  { id: "trips", label: "Trips", icon: Compass },
  { id: "overview", label: "Overview", icon: Mountain },
  { id: "timeline", label: "Timeline", icon: Footprints },
  { id: "stays", label: "Stays", icon: BedDouble },
  { id: "connections", label: "Connections", icon: Train },
  { id: "packing", label: "Packing", icon: Package },
  { id: "gear-shop", label: "Gear shop", icon: ShoppingCart, show: "showGearShop" },
  { id: "food", label: "Food", icon: UtensilsCrossed, show: "showFood" },
  { id: "weather", label: "Weather", icon: CloudSun },
  { id: "wildlife", label: "Wildlife", icon: Bird, show: "showWildlife" },
  { id: "tips", label: "Tips", icon: Info },
];

function navItemVisible(
  item: (typeof NAV_ITEMS)[number],
  meta: import("../data/types").TripMeta,
): boolean {
  if (!item.show) return true;
  return meta[item.show];
}

export function Sidebar() {
  const { trip, tripId, setTripId, trips } = useTrip();
  const { meta } = trip;

  const visibleNav = NAV_ITEMS.filter((item) => navItemVisible(item, meta));

  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 bg-gray-900 border-r border-gray-800 h-screen sticky top-0">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-lg font-semibold text-gray-100">{meta.title}</h1>
        <p className="text-xs text-gray-500 mt-1">
          {formatTripDateRangeWithWeekdays(
            meta.departureDate,
            meta.returnDate,
          )}
        </p>
        <div className="mt-4 flex gap-1 p-1 bg-gray-800 rounded-lg">
          {trips.map((t) => (
            <button
              key={t.meta.id}
              type="button"
              onClick={() => setTripId(t.meta.id)}
              className={`flex-1 px-2 py-1.5 text-xs font-medium rounded-md transition-colors ${
                tripId === t.meta.id
                  ? "bg-indigo-600 text-white"
                  : "text-gray-400 hover:text-gray-100 hover:bg-gray-700"
              }`}
            >
              {TRIP_LABELS[t.meta.id] ?? t.meta.title}
            </button>
          ))}
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {visibleNav.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-gray-400 hover:text-gray-100 hover:bg-gray-800 rounded-md transition-colors"
          >
            <Icon className="w-4 h-4" aria-hidden="true" />
            {label}
          </a>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Plane className="w-3.5 h-3.5" aria-hidden="true" />
          {tripId === "lapland" ? (
            <Ship className="w-3.5 h-3.5" aria-hidden="true" />
          ) : null}
          {tripId === "tatras" || tripId === "lapland" ? (
            <Car className="w-3.5 h-3.5" aria-hidden="true" />
          ) : (
            <>
              <Train className="w-3.5 h-3.5" aria-hidden="true" />
              <Ship className="w-3.5 h-3.5" aria-hidden="true" />
              <Bus className="w-3.5 h-3.5" aria-hidden="true" />
            </>
          )}
          <Compass className="w-3.5 h-3.5" aria-hidden="true" />
        </div>
      </div>
    </aside>
  );
}

export function MobileNav() {
  const { trip } = useTrip();
  const { meta } = trip;

  const visibleNav = NAV_ITEMS.filter((item) => navItemVisible(item, meta));

  return (
    <nav className="lg:hidden sticky top-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-800 overflow-x-auto">
      <div className="flex gap-1 p-2 min-w-max">
        {visibleNav.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-gray-100 hover:bg-gray-800 rounded-md whitespace-nowrap transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
